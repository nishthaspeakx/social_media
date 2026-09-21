import test from 'node:test';
import assert from 'node:assert/strict';
import {DatabaseSync} from 'node:sqlite';
import fs from 'node:fs';
import worker from '../server/worker.js';
function fixture(){
 const sql=new DatabaseSync(':memory:');
 for(const f of fs.readdirSync('drizzle').filter(x=>x.endsWith('.sql')).sort())sql.exec(fs.readFileSync('drizzle/'+f,'utf8'));
 const DB={prepare(query){let args=[];return {bind(...a){args=a;return this},async first(){return sql.prepare(query).get(...args)||null},async all(){return {results:sql.prepare(query).all(...args)}},async run(){const r=sql.prepare(query).run(...args);return {meta:{changes:Number(r.changes)}}}}}};
 const env={DB,PROVIDER_VAULT_KEY:Buffer.alloc(32,7).toString('base64'),BUCKET:{head:async()=>({})}};
 const call=(path,method='GET',data,role='owner',origin='https://test.local')=>worker.fetch(new Request('https://test.local/api/'+path,{method,headers:{Origin:origin,'Content-Type':'application/json','oai-authenticated-user-id':role,'oai-authenticated-user-email':role+'@test.local'},body:data===undefined?undefined:JSON.stringify(data)}),env);
 return {sql,env,call};
}
const setup={revision:0,kieKey:'kie_test_only_not_a_real_key',cartesiaKey:'sk_car_test_only_not_a_real_key',voiceId:'11111111-1111-4111-8111-111111111111',apiVersion:'2026-08-14',enabled:true};
test('owner can save encrypted credentials without plaintext in responses, audits or workspace exports',async()=>{
 const {sql,env,call}=fixture();try{
 const response=await call('provider-settings','PUT',setup);assert.equal(response.status,200);const saved=await response.json();assert.equal(saved.configured.kie,true);assert.equal(saved.revision,1);
 const record=sql.prepare('SELECT body FROM provider_settings').get();assert.ok(record);assert.ok(!record.body.includes(setup.kieKey));assert.ok(!record.body.includes(setup.cartesiaKey));
 for(const path of ['provider-settings','session','workspace','audit']){const text=await(await call(path)).text();assert.ok(!text.includes(setup.kieKey));assert.ok(!text.includes(setup.cartesiaKey));}
 const replace=await call('provider-settings','PUT',{revision:1,kieKey:'',cartesiaKey:'',voiceId:setup.voiceId,apiVersion:setup.apiVersion,enabled:true});assert.equal(replace.status,200);assert.equal((await replace.json()).configured.cartesia,true);
 assert.equal((await call('provider-settings','PUT',setup)).status,409);
 sql.prepare('INSERT INTO members VALUES (?,?,?)').run('manager@test.local','manager','Manager');
 assert.equal((await call('provider-settings','GET',undefined,'manager')).status,403);
 assert.equal((await call('provider-settings','PUT',{...setup,revision:2},'manager')).status,403);
 assert.equal((await call('provider-settings','PUT',{...setup,revision:2},'owner','https://evil.test')).status,403);
 env.PROVIDER_VAULT_KEY='';assert.equal((await call('provider-settings','PUT',{...setup,revision:2})).status,503);
 }finally{sql.close()}
});
test('connection checks do not generate media and one test allowance cannot be reused by saving settings',async()=>{
 const {sql,call}=fixture();const originalFetch=globalThis.fetch;const calls=[];
 globalThis.fetch=async(url,options)=>{calls.push(String(url));assert.equal(options.method||'GET','GET');return String(url).includes('cartesia')?Response.json({id:setup.voiceId,name:'Sia test voice',status:'active'}):Response.json({code:200,data:100});};
 try{
 assert.equal((await call('provider-settings','PUT',setup)).status,200);
 assert.equal((await call('provider-settings/check','POST',{})).status,200);
 assert.equal(calls.length,2);assert.ok(calls.every(x=>!x.includes('createTask')&&!x.includes('/tts/')));
 const payload={lessonId:'SIA-2026-10-01',script:'Hello. I am Sia.',duration:10,prompt:'Only Sia.',scenes:[{voiceover:'Hello. I am Sia.'}],referenceKey:'references/1234',referenceApproved:true,rightsConfirmed:true,note:'Test'};
 const v=await(await call('versions','POST',payload)).json();const a=await call('jobs','POST',{versionId:v.id});assert.equal(a.status,202);const j=await a.json();assert.equal((await(await call('jobs','POST',{versionId:v.id})).json()).id,j.id);
 const v2=await(await call('versions','POST',payload)).json();assert.equal((await call('jobs','POST',{versionId:v2.id})).status,429);
 assert.equal((await call('provider-settings','PUT',{...setup,revision:1})).status,200);await call('provider-settings/check','POST',{});
 assert.equal((await call('jobs','POST',{versionId:v2.id})).status,429);
 }finally{globalThis.fetch=originalFetch;sql.close()}
});
