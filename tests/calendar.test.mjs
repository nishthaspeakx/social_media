import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import fs from 'node:fs';
import {DatabaseSync} from 'node:sqlite';
import worker from '../server/worker.js';

function fixture(){
 const sql=new DatabaseSync(':memory:');for(const f of fs.readdirSync('drizzle').filter(x=>x.endsWith('.sql')).sort())sql.exec(fs.readFileSync('drizzle/'+f,'utf8'));
 const DB={prepare(q){let a=[];return {bind(...v){a=v;return this},async first(){return sql.prepare(q).get(...a)||null},async all(){return {results:sql.prepare(q).all(...a)}},async run(){const r=sql.prepare(q).run(...a);return {meta:{changes:Number(r.changes)}}}}}};
 const env={DB,BUCKET:{async head(){return null},async get(){return null},async put(){}}};
 const call=(p,m='GET',b,role='owner')=>worker.fetch(new Request('https://t.local/api/phase1/'+p,{method:m,headers:{Origin:'https://t.local','Content-Type':'application/json','oai-authenticated-user-id':role,'oai-authenticated-user-email':role+'@t.local'},body:b===undefined?undefined:JSON.stringify(b)}),env);
 return {sql,call};
}
const draft={lessonId:'SIA-2026-10-01',script:'Myself Riya? Sahi line: I am Riya.',prompt:'Only Sia.',duration:10,scenes:[{voiceover:'Myself Riya? Sahi line: I am Riya.',shot:'Sia.'}]};

test('calendar summary reports versions, video attempts, approval, download and publishing per content item',async()=>{
 const {sql,call}=fixture();try{
  const v1=await(await call('versions','POST',draft)).json(),v2=await(await call('versions','POST',{...draft,parentId:v1.id})).json();
  const at=i=>new Date(Date.UTC(2026,8,23,10,i)).toISOString(),job=(id,status,i,version=v2.id)=>sql.prepare('INSERT INTO jobs(id,version_id,idempotency_key,status,stage,body,created_at,updated_at) VALUES (?,?,?,?,?,?,?,?)').run(id,version,id,status,'x',JSON.stringify({phase1:true,lessonId:'SIA-2026-10-01',scriptVersionNumber:2}),at(i),at(i));
  job('job-a','Failed',1,v1.id);job('job-b','Completed',2);
  sql.prepare('INSERT INTO documents(id,body,revision,updated_at,actor) VALUES (?,?,1,?,?)').run('export:exp-1',JSON.stringify({id:'exp-1',lessonId:'SIA-2026-10-01',jobId:'job-b',scriptVersionNumber:2,status:'Approved and Ready to Download',createdAt:at(3),reviews:[{comment:'ok',changesRequested:false}]}),at(3),'owner@t.local');
  sql.prepare('INSERT INTO events(id,at,actor,action,target) VALUES (?,?,?,?,?)').run('e1',at(4),'owner@t.local','Approved video downloaded','exp-1');
  let r=await call('publishing','POST',{lessonId:'SIA-2026-10-01',published:true,platforms:[],date:'2026-10-01'});assert.equal(r.status,400);
  r=await call('publishing','POST',{lessonId:'SIA-2026-10-01',published:true,platforms:['Instagram','Nope'],date:'2026-10-01'});assert.equal(r.status,200);assert.deepEqual((await r.json()).platforms,['Instagram']);
  const res=await call('calendar'),body=await res.json(),item=body.items.find(x=>x.lessonId==='SIA-2026-10-01');
  assert.equal(res.status,200);assert.deepEqual(item.versions.map(v=>v.n),[1,2]);assert.deepEqual(item.jobs.map(j=>j.status),['Failed','Completed']);
  assert.equal(item.exports[0].downloaded,true);assert.equal(item.exports[0].changesRequested,false);assert.equal(item.publishing.published,true);
  assert.ok(!JSON.stringify(body).includes('Myself Riya'),'summary must not ship script bodies');
  r=await call('publishing','POST',{lessonId:'SIA-2026-10-01',published:false});assert.equal(r.status,200);assert.equal((await r.json()).published,false);
  sql.prepare('INSERT INTO members VALUES (?,?,?)').run('viewer@t.local','viewer','Viewer');assert.equal((await call('publishing','POST',{lessonId:'SIA-2026-10-01',published:false},'viewer')).status,403);
  assert.equal((await call('ideas','POST',{title:'Idea',date:'1 Oct'})).status,400);const idea=await(await call('ideas','POST',{title:'Idea',date:'2026-10-31'})).json();assert.equal(idea.body.date,'2026-10-31');
 }finally{sql.close();}
});

function loadCalendar(){const context=vm.createContext({});vm.runInContext(fs.readFileSync('web/calendar.js','utf8')+'\nglobalThis.cal=ContentCalendar;',context);return context.cal;}
test('status rules follow the workflow from idea to published',()=>{
 const c=loadCalendar(),s=a=>c.statusFor(a);
 assert.equal(s(undefined).stage,'Idea Generated');
 const v=[{id:'v1',n:1},{id:'v2',n:2,scriptApproved:true}];
 assert.equal(s({versions:v}).stage,'Script Ready');assert.equal(s({versions:v}).script.detail,'V2 · approved');
 assert.equal(s({versions:v,jobs:[{id:'j1',status:'Generating',createdAt:'1'}]}).stage,'Video Generating');
 assert.equal(s({versions:v,jobs:[{id:'j1',status:'Completed',createdAt:'1'}]}).stage,'Video Ready');
 assert.equal(s({versions:v,jobs:[{id:'j1',status:'Completed',createdAt:'1'},{id:'j2',status:'Failed',createdAt:'2'}]}).stage,'Needs Changes');
 const exp={id:'x1',jobId:'j1',n:2,createdAt:'3',status:'Needs video review',changesRequested:true};
 assert.equal(s({versions:v,jobs:[{id:'j1',status:'Completed',createdAt:'1'}],exports:[exp]}).stage,'Needs Changes');
 assert.equal(s({versions:v,jobs:[{id:'j1',status:'Completed',createdAt:'1'},{id:'j2',status:'Completed',createdAt:'4'}],exports:[exp]}).stage,'Video Ready','a newer take clears the change request');
 const ok={...exp,changesRequested:false,status:'Approved and Ready to Download'};
 const approved=s({versions:v,jobs:[{id:'j1',status:'Completed',createdAt:'1'}],exports:[ok]});assert.equal(approved.stage,'Approved');assert.equal(approved.final.label,'Video V1 · Script V2');assert.equal(approved.canPublish,true);
 assert.equal(s({versions:v,jobs:[{id:'j1',status:'Completed',createdAt:'1'}],exports:[{...ok,downloaded:true}]}).stage,'Downloaded');
 assert.equal(s({versions:v,jobs:[{id:'j1',status:'Completed',createdAt:'1'}],exports:[ok],publishing:{published:true,platforms:['Instagram'],date:'2026-10-01'}}).stage,'Published');
});
test('dates, ranges and Monday–Sunday themes',()=>{
 const c=loadCalendar();assert.equal(c.datesBetween('2026-10-01','2026-10-07').length,7);assert.equal(c.addDays('2026-10-31',1),'2026-11-01');
 assert.equal(c.themeFor('2026-10-05'),'Relatable English Problems');assert.equal(c.themeFor('2026-10-06'),'Learn With Sia');assert.equal(c.themeFor('2026-10-11'),'Transformation / Motivation');
 assert.equal(c.datesBetween('2026-01-01','2027-12-31').length,366,'long ranges are capped at one year');
});
