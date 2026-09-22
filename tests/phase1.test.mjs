import test from 'node:test';
import assert from 'node:assert/strict';
import {DatabaseSync} from 'node:sqlite';
import fs from 'node:fs';
import worker from '../server/worker.js';
import {defaultProduction} from '../web/reel-tools.js';
const production=()=>{const p=defaultProduction({id:'fixture',body:draft});p.broll.forEach((b,i)=>{b.start=1+i*3;b.end=b.start+2;});return p;};
function fixture(){
 const sql=new DatabaseSync(':memory:');for(const f of fs.readdirSync('drizzle').filter(x=>x.endsWith('.sql')).sort())sql.exec(fs.readFileSync('drizzle/'+f,'utf8'));
 const DB={prepare(q){let a=[];return {bind(...v){a=v;return this},async first(){return sql.prepare(q).get(...a)||null},async all(){return {results:sql.prepare(q).all(...a)}},async run(){const r=sql.prepare(q).run(...a);return {meta:{changes:Number(r.changes)}}}}}};
 const files=new Map([['references/12345678-1234-1234-1234-123456789abc',{bytes:new Uint8Array([1,2,3]),type:'image/png'}]]);
 const BUCKET={async head(k){const v=files.get(k);return v?{size:v.bytes.length,httpMetadata:{contentType:v.type}}:null},async put(k,data,o){const bytes=new Uint8Array(await new Response(data).arrayBuffer());files.set(k,{bytes,type:o?.httpMetadata?.contentType});},async get(k){const v=files.get(k);return v?{body:new Response(v.bytes).body,size:v.bytes.length,httpMetadata:{contentType:v.type},arrayBuffer:async()=>v.bytes.buffer.slice(v.bytes.byteOffset,v.bytes.byteOffset+v.bytes.byteLength)}:null}};
 const env={DB,BUCKET,KIE_API_KEY:'test-only-kie',CARTESIA_API_KEY:'test-only-cartesia',CARTESIA_SIA_VOICE_ID:'voice-1234',CARTESIA_API_VERSION:'2026-08-14',GENERATION_ENABLED:'true'};
 const call=(p,m='GET',b,role='owner')=>worker.fetch(new Request('https://test.local/api/phase1/'+p,{method:m,headers:{Origin:'https://test.local','Content-Type':'application/json','oai-authenticated-user-id':role,'oai-authenticated-user-email':role+'@test.local'},body:b===undefined?undefined:JSON.stringify(b)}),env);
 return {sql,files,env,call};
}
const draft={lessonId:'SIA-2026-10-01',title:'Interview opening',audience:'First-job candidates',objective:'Trust',funnelStage:'Awareness',format:'Sia lesson',pillar:'Interview English',keyword:'English interview introduction',hook:'Interview? Try this.',script:'Could you please repeat the question?',voiceover:'Could you please repeat the question?',dialogue:'Sia: Could you please repeat the question?',cta:'Say it once.',prompt:'Only Sia, same face. Accurate lip sync. No other people.',scenes:[{startSeconds:0,endSeconds:10,voiceover:'Could you please repeat the question?',captionText:'Could you please repeat the question?',shot:'Sia, direct to camera.'}],duration:10,language:'Hinglish',platform:'Instagram',referenceKey:'references/12345678-1234-1234-1234-123456789abc',referenceApproved:true,rightsConfirmed:true};
test('Phase1 drafts use revision checks; approved scripts stay immutable and restore creates a new version',async()=>{
 const {call,sql}=fixture();try{
 let r=await call('drafts/'+draft.lessonId,'PUT',{body:draft,revision:0});assert.equal(r.status,200);
 assert.equal((await call('drafts/'+draft.lessonId,'PUT',{body:draft,revision:0})).status,409);
 const v1=await(await call('versions','POST',draft)).json();assert.ok(v1.id);assert.equal(v1.body.versionNumber,1);
 assert.equal((await call('versions/'+v1.id+'/approve-script','POST',{})).status,200);
 const v2=await(await call('versions','POST',{...draft,script:'Please repeat that.',parentId:v1.id,name:'Shorter'})).json();assert.equal(v2.body.versionNumber,2);
 const restored=await(await call('versions/'+v1.id+'/restore','POST',{})).json();assert.equal(restored.body.versionNumber,3);assert.equal(restored.body.script,draft.script);assert.equal(restored.status,'Draft');assert.equal(restored.body.restoredFrom,v1.id);
 assert.equal(JSON.parse(sql.prepare('SELECT body FROM versions WHERE id=?').get(v1.id).body).script,draft.script);
 const review=await(await call('versions/'+v2.id+'/review','POST',{})).json();assert.equal(typeof review.score,'number');assert.ok(review.categories.length===6);assert.ok(review.improvedVersion.script);
 }finally{sql.close()}
});
test('multiple video versions require distinct idempotency requests and honor configured budget',async()=>{
 const {call,sql}=fixture();try{
 assert.equal((await call('budget','PUT',{maxJobsPerDay:2,maxSeconds:60})).status,200);
 const v=await(await call('versions','POST',draft)).json();
 const a=await(await call('jobs','POST',{versionId:v.id,production:production(),requestId:'aaaaaaaa-aaaa-4aaa-aaaa-aaaaaaaaaaaa'})).json();assert.ok(a.id);
 const same=await(await call('jobs','POST',{versionId:v.id,production:production(),requestId:'aaaaaaaa-aaaa-4aaa-aaaa-aaaaaaaaaaaa'})).json();assert.equal(a.id,same.id);
 const b=await(await call('jobs','POST',{versionId:v.id,production:production(),requestId:'bbbbbbbb-bbbb-4bbb-bbbb-bbbbbbbbbbbb'})).json();assert.notEqual(a.id,b.id);assert.equal(b.body.scriptVersionId,v.id);assert.equal(b.body.prompt,production().prompt);
 assert.equal((await call('jobs','POST',{versionId:v.id,production:production(),requestId:'cccccccc-cccc-4ccc-cccc-cccccccccccc'})).status,429);
 }finally{sql.close()}
});
test('forged final metadata is retained as failed and cannot be approved or downloaded',async()=>{
 const {call,sql,env}=fixture();try{
 const v=await(await call('versions','POST',draft)).json();const j=await(await call('jobs','POST',{versionId:v.id,production:production(),requestId:'aaaaaaaa-aaaa-4aaa-aaaa-aaaaaaaaaaaa'})).json();
 assert.equal((await call('exports/not-found/download')).status,404);
 sql.prepare("UPDATE jobs SET status='Completed',stage='draft_ready' WHERE id=?").run(j.id);
 const form=new FormData();form.set('file',new Blob([new Uint8Array([0,0,0,24,102,116,121,112,105,115,111,109,...Array(64).fill(0)])],{type:'video/mp4'}),'final.mp4');form.set('metadata',JSON.stringify({width:720,height:1280,duration:10,captions:[{start:0,end:8,text:draft.script}],notes:'Test fixture',audioPresent:true}));
 const r=await worker.fetch(new Request('https://test.local/api/phase1/jobs/'+j.id+'/exports',{method:'POST',headers:{Origin:'https://test.local','oai-authenticated-user-id':'owner','oai-authenticated-user-email':'owner@test.local'},body:form}),env);assert.equal(r.status,201);const ex=await r.json();assert.ok(ex.body.sha256);
 assert.equal((await call('exports/'+ex.id+'/download')).status,409);
 assert.equal((await call('exports/'+ex.id+'/approve','POST',{sha256:ex.body.sha256,qa:{identity:true}})).status,400);
 const qa=Object.fromEntries(['identity','voice','captions','language','rights','safeZones','lipSync','visuals','audio','complete'].map(k=>[k,true]));
 assert.equal((await call('exports/'+ex.id+'/approve','POST',{sha256:'wrong',qa})).status,409);
 const approved=await call('exports/'+ex.id+'/approve','POST',{sha256:ex.body.sha256,qa,comment:'Reviewed test fixture'});assert.equal(approved.status,409);assert.equal(ex.body.status,'Failed format validation');
 const download=await call('exports/'+ex.id+'/download');assert.equal(download.status,409);
 }finally{sql.close()}
});
test('voice checkpoint survives split retries and actual duration stops further spending',async()=>{
 const {call,sql,env,files}=fixture();const original=globalThis.fetch;let calls=0;
 try{
  const pcm=Buffer.alloc(88200*16);for(let i=0;i<pcm.length;i+=2)pcm.writeInt16LE(Math.round(Math.sin(i/20)*8000),i);
  const data=[{type:'chunk',data:pcm.toString('base64')},{type:'timestamps',word_timestamps:{words:draft.script.split(' '),start:[0,2,4,6,8,10],end:[1.5,3.5,5.5,7.5,9.5,15.5]}},{type:'done',done:true}].map(x=>'data: '+JSON.stringify(x)+'\n\n').join('');
  globalThis.fetch=async()=>{calls++;return new Response(new ReadableStream({start(c){const bytes=new TextEncoder().encode(data);c.enqueue(bytes.slice(0,37));c.enqueue(bytes.slice(37));/* stays open; done frame must terminate read */}}),{headers:{'Content-Type':'text/event-stream'}});};
  const v=await(await call('versions','POST',draft)).json(),j=await(await call('jobs','POST',{versionId:v.id,production:production(),requestId:crypto.randomUUID()})).json();
  const voice=await(await call('jobs/'+j.id+'/advance','POST',{})).json();assert.equal(voice.stage,'split');assert.equal(voice.status,'Held');assert.match(voice.body.error,/Actual speech/);assert.equal(voice.body.audioDuration,16);assert.ok(files.has(voice.body.audioKey));assert.equal(calls,1);
  const held=await(await call('jobs/'+j.id+'/advance','POST',{})).json();assert.equal(held.status,'Held');assert.match(held.body.error,/Actual speech/);assert.equal(calls,1);
  await call('budget','PUT',{maxJobsPerDay:2,maxSeconds:30,maxAssistPerDay:2});await call('jobs/'+j.id+'/reconcile','POST',{note:'Raised owner limit for saved voice'});
  const split=await(await call('jobs/'+j.id+'/advance','POST',{})).json();assert.equal(split.stage,'upload');assert.equal(split.body.clips.length,1);assert.equal(split.body.clips[0].duration,16);assert.equal(calls,1);
  const legacy=await worker.fetch(new Request('https://test.local/api/jobs/'+j.id+'/advance',{method:'POST',headers:{Origin:'https://test.local','oai-authenticated-user-id':'owner','oai-authenticated-user-email':'owner@test.local'}}),env);assert.equal(legacy.status,409);assert.equal(calls,1);
 }finally{globalThis.fetch=original;sql.close()}
});
test('AI budget reservation is atomic and repeated request IDs never repeat provider calls',async()=>{
 const {call,sql}=fixture();const original=globalThis.fetch;let calls=0;
 try{await call('budget','PUT',{maxJobsPerDay:1,maxSeconds:15,maxAssistPerDay:1});globalThis.fetch=async()=>{calls++;return Response.json({choices:[{message:{content:JSON.stringify({script:'Test draft'})}}]});};const id=crypto.randomUUID();const results=await Promise.all([call('assist','POST',{kind:'draft',draft,production:production(),requestId:id}),call('assist','POST',{kind:'draft',draft,production:production(),requestId:crypto.randomUUID()})]);assert.equal(results.filter(r=>r.status===200).length,1);assert.equal(calls,1);await call('assist','POST',{kind:'draft',draft,production:production(),requestId:id});assert.equal(calls,1);
 }finally{globalThis.fetch=original;sql.close()}
});
test('provider failure inspection reuses the stored task without submitting generation',async()=>{
 const {call,sql}=fixture(),original=globalThis.fetch;const requests=[];
 try{const v=await(await call('versions','POST',draft)).json();const j=await(await call('jobs','POST',{versionId:v.id,production:production(),requestId:crypto.randomUUID()})).json();sql.prepare("UPDATE jobs SET status='Failed',stage='poll',provider_id=? WHERE id=?").run('task-verified-123',j.id);globalThis.fetch=async(url,options)=>{requests.push(String(url));assert.equal(options.redirect,'manual');return Response.json({code:200,data:{taskId:'task-verified-123',state:'fail',failCode:'422',failMsg:'Unsupported source format'}});};const r=await call('jobs/'+j.id+'/provider-status','POST',{});assert.equal(r.status,200);const result=await r.json();assert.equal(result.status,'Failed');assert.equal(result.body.providerFailure.message,'Unsupported source format');assert.equal(requests.length,1);assert.match(requests[0],/recordInfo/);assert.equal(sql.prepare('SELECT COUNT(*) AS n FROM jobs').get().n,1);
 }finally{globalThis.fetch=original;sql.close()}
});
test('Kling recovery preserves the failed take, reuses full audio, enforces limits and never synthesizes again',async()=>{
 const {call,sql,files}=fixture(),original=globalThis.fetch;let videoCalls=0;
 try{
  const v=await(await call('versions','POST',draft)).json();const j=await(await call('jobs','POST',{versionId:v.id,production:production(),requestId:crypto.randomUUID()})).json();
  const saved={...j.body,providerModel:'infinitalk/from-audio',audioKey:'jobs/'+j.id+'/voice.wav',audioDuration:25,words:draft.script.split(' ').map((word,i)=>({word,start:i*3,end:i*3+2})),captions:[{start:0,end:20,text:draft.script}],clips:[{taskId:'failed-task'}],providerFailure:{state:'fail',code:'500',message:'internal error'}};
  files.set(saved.audioKey,{bytes:new Uint8Array(88200*25+44),type:'audio/wav'});
  sql.prepare("UPDATE jobs SET status='Failed',stage='poll',provider_id='failed-task',body=? WHERE id=?").run(JSON.stringify(saved),j.id);
  assert.equal((await call('jobs/'+j.id+'/retry-model','POST',{})).status,400);
  assert.equal((await call('jobs/'+j.id+'/retry-model','POST',{confirmedCredits:true})).status,429);
  await call('budget','PUT',{maxJobsPerDay:2,maxSeconds:60});
  const r=await call('jobs/'+j.id+'/retry-model','POST',{confirmedCredits:true});assert.equal(r.status,202);const next=await r.json();
  assert.notEqual(next.id,j.id);assert.equal(next.version_id,v.id);assert.equal(next.body.reusedAudioFrom,j.id);assert.equal(next.body.audioKey,saved.audioKey);assert.equal(next.body.providerModel,'kling/ai-avatar-standard');assert.equal(next.body.clips.length,1);assert.equal(next.body.clips[0].duration,25);assert.equal(next.stage,'upload');assert.equal(sql.prepare('SELECT status FROM jobs WHERE id=?').get(j.id).status,'Failed');
  const same=await(await call('jobs/'+j.id+'/retry-model','POST',{confirmedCredits:true})).json();assert.equal(same.id,next.id);assert.equal(sql.prepare('SELECT COUNT(*) AS n FROM jobs').get().n,2);
  globalThis.fetch=async(url,opts)=>{if(String(url).includes('file-base64-upload'))return Response.json({code:200,data:{downloadUrl:'https://tempfile.redpandaai.co/test/saved.wav'}});if(String(url).includes('createTask')){videoCalls++;const b=JSON.parse(opts.body);assert.equal(b.model,'kling/ai-avatar-standard');assert.equal(b.input.resolution,undefined);return Response.json({code:200,data:{taskId:'kling-full-123'}});}throw Error('Unexpected fetch; must not synthesize: '+url);};
  const uploaded=await(await call('jobs/'+next.id+'/advance','POST',{})).json();assert.equal(uploaded.stage,'video');
  const queued=await(await call('jobs/'+next.id+'/advance','POST',{})).json();assert.equal(queued.stage,'poll');assert.equal(queued.provider_id,'kling-full-123');assert.equal(videoCalls,1);
 }finally{globalThis.fetch=original;sql.close()}
});
test('completed Kie video on its documented temporary host is saved without another paid request',async()=>{
 const {call,sql,files}=fixture(),original=globalThis.fetch;let downloads=0;
 try{
  const v=await(await call('versions','POST',draft)).json(),j=await(await call('jobs','POST',{versionId:v.id,production:production(),requestId:crypto.randomUUID()})).json();
  const body={...j.body,providerModel:'kling/ai-avatar-standard',clips:[{index:0,taskId:'existing-task',status:'Generating'}],clipIndex:0};
  sql.prepare("UPDATE jobs SET status='Generating',stage='poll',provider_id=?,body=? WHERE id=?").run('existing-task',JSON.stringify(body),j.id);
  globalThis.fetch=async(url,options)=>{if(String(url).includes('/recordInfo?'))return Response.json({code:200,data:{taskId:'existing-task',state:'success',resultJson:JSON.stringify({resultUrls:['https://tempfile.aiquickdraw.com/video.mp4']})}});assert.equal(url,'https://tempfile.aiquickdraw.com/video.mp4');assert.equal(options.redirect,'manual');downloads++;return new Response(new Uint8Array(100),{headers:{'Content-Type':'video/mp4','Content-Length':'100'}});};
  const done=await(await call('jobs/'+j.id+'/advance','POST',{})).json();assert.equal(done.status,'Completed');assert.equal(downloads,1);assert.ok(files.has(done.body.mediaKey));
 }finally{globalThis.fetch=original;sql.close();}
});
