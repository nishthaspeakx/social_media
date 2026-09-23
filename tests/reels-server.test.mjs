import test from 'node:test';
import assert from 'node:assert/strict';
import {DatabaseSync} from 'node:sqlite';
import fs from 'node:fs';
import worker from '../server/worker.js';
import {inspectMp4,validateReelMp4} from '../server/mp4.js';
import {defaultProduction,buildProductionPrompt} from '../web/reel-tools.js';
const concat=(...arrays)=>Buffer.concat(arrays.map(x=>Buffer.from(x)));
const u32=(...values)=>{const b=Buffer.alloc(values.length*4);values.forEach((v,i)=>b.writeUInt32BE(v,i*4));return b;};
const box=(name,...data)=>{const body=concat(...data);return concat(u32(body.length+8),Buffer.from(name),body);};
function mp4({width=1080,height=1920,fps=30,channels=2,codec='avc1',fragmented=false}={}){
 const duration=8,scale=30000,delta=scale/fps,count=duration*fps;
 const track=(id,video)=>{const tkhd=Buffer.alloc(84);tkhd.writeUInt32BE(id,12);tkhd.writeUInt32BE(65536,40);tkhd.writeUInt32BE(65536,56);tkhd.writeUInt32BE(1073741824,72);const mdhd=concat(u32(0,0,0,scale,fragmented?0:duration*scale),Buffer.alloc(4));const hdlr=concat(u32(0,0),Buffer.from(video?'vide':'soun'),Buffer.alloc(12));const sample=Buffer.alloc(video?78:28);sample.writeUInt16BE(1,6);let entry;if(video){sample.writeUInt16BE(width,24);sample.writeUInt16BE(height,26);entry=box(codec,sample,box('avcC',[1,100,0,40]));}else{sample.writeUInt16BE(channels,16);sample.writeUInt32BE(48000*65536,24);entry=box('mp4a',sample,box('esds',u32(0),[3,22,0,1,0,4,17,0x40,0x15,0,0,0,0,0,0,0,0,0,0,0,5,2,0x11,(channels<<3)|0x80]));}
 const stts=box('stts',fragmented?u32(0,0):u32(0,1,count,delta));return box('trak',box('tkhd',tkhd),box('mdia',box('mdhd',mdhd),box('hdlr',hdlr),box('minf',box('stbl',box('stsd',u32(0,1),entry),stts))));};
 const moov=box('moov',track(1,true),track(2,false),...(fragmented?[box('mvex',box('trex',u32(0,1,1,delta,0,0)),box('trex',u32(0,2,1,delta,0,0)))]:[]));
 const fragments=fragmented?[box('moof',...[1,2].map(id=>box('traf',box('tfhd',u32(0,id)),box('trun',u32(0,count)))))]:[];
 return concat(box('ftyp',Buffer.from('isom'),u32(0),Buffer.from('isom')),moov,...fragments,box('mdat',Buffer.alloc(128)));
}
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
const production=()=>{const p=defaultProduction({id:'fixture',body:draft});p.broll.forEach((b,i)=>{b.start=1+i*3;b.end=b.start+1.5;});return p;};
const qa=Object.fromEntries(['identity','voice','captions','language','rights','safeZones','lipSync','visuals','audio','complete'].map(k=>[k,true]));
test('MP4 reader validates standard and fragmented track tables independently of claimed metadata',()=>{
 for(const fragmented of [false,true]){const result=validateReelMp4(mp4({fragmented}));assert.equal(result.passed,true,JSON.stringify(result));assert.equal(result.facts.video.fps,30);assert.equal(result.facts.audio.channels,2);assert.equal(result.facts.duration,8);}
 for(const bad of [{width:720,height:1280},{fps:25},{channels:1},{codec:'hvc1'}])assert.equal(validateReelMp4(mp4(bad)).passed,false);
 assert.equal(validateReelMp4(mp4().subarray(0,100)).passed,false);
 const invalid=mp4();invalid.writeUInt32BE(0xffffffff,0);assert.equal(validateReelMp4(invalid).passed,false);
 assert.equal(inspectMp4(mp4()).video.codec,'avc1');
});
test('production preflight prevents job creation and unique concurrent clicks create one immutable job',async()=>{
 const {call,sql}=fixture();try{
  const v=await(await call('versions','POST',draft)).json(),requestId=crypto.randomUUID();
  for(const p of [undefined,{...production(),prompt:'Wrong script'},{...production(),captionsEnabled:false},{...production(),broll:[{type:'stock',text:'x',start:1,end:2}]}])assert.equal((await call('jobs','POST',{versionId:v.id,requestId,production:p})).status,409);
  assert.equal(sql.prepare('SELECT COUNT(*) AS n FROM jobs').get().n,0);
  const p=production(),results=await Promise.all([call('jobs','POST',{versionId:v.id,requestId,production:p}),call('jobs','POST',{versionId:v.id,requestId,production:p})]);const [a,b]=await Promise.all(results.map(r=>r.json()));assert.equal(a.id,b.id);assert.deepEqual(a.body.scriptSnapshot,v.body);assert.equal(a.body.promptVersion,a.id);assert.deepEqual(a.body.production,p);assert.equal(a.body.voiceConfiguration.voiceId,'voice-1234');assert.equal(a.body.providerModel,'kling/ai-avatar-standard');assert.equal(sql.prepare('SELECT COUNT(*) AS n FROM jobs').get().n,1);
 }finally{sql.close();}
});
test('actual track facts and exact full captions gate final approval; editable SRT and failed versions persist',async()=>{
 const {call,sql,env,files}=fixture();try{
  const v=await(await call('versions','POST',draft)).json(),j=await(await call('jobs','POST',{versionId:v.id,requestId:crypto.randomUUID(),production:production()})).json();
  const body={...j.body,audioDuration:8,words:[{word:'Could',start:0,end:1},{word:'question?',start:7,end:8}]};sql.prepare("UPDATE jobs SET status='Completed',stage='draft_ready',body=? WHERE id=?").run(JSON.stringify(body),j.id);
  const upload=async(bytes,captions=[{start:0,end:8,text:draft.script}])=>{const form=new FormData();form.set('file',new Blob([bytes],{type:'video/mp4'}),'final.mp4');form.set('metadata',JSON.stringify({width:999,height:999,duration:8,captions,audioPresent:true,renderSettings:{broll:production().broll}}));return worker.fetch(new Request('https://test.local/api/phase1/jobs/'+j.id+'/exports',{method:'POST',headers:{Origin:'https://test.local','oai-authenticated-user-id':'owner','oai-authenticated-user-email':'owner@test.local'},body:form}),env);};
  const valid=await(await upload(mp4())).json();assert.equal(valid.body.status,'Needs video review');assert.equal(valid.body.width,1080);assert.equal(valid.body.technicalValidation.facts.audio.codec,'mp4a');assert.ok(files.has(valid.body.captionKey));assert.match(await(await call('exports/'+valid.id+'/captions')).text(),/Could you please repeat the question/);
  assert.equal((await call('exports/'+valid.id+'/approve','POST',{sha256:valid.body.sha256,qa})).status,200);assert.equal((await call('exports/'+valid.id+'/download')).status,200);
  const failed=await(await upload(mp4({channels:1}))).json();assert.equal(failed.body.status,'Failed format validation');assert.ok(files.has(failed.body.mediaKey));assert.equal((await call('exports/'+failed.id+'/approve','POST',{sha256:failed.body.sha256,qa})).status,409);
  const cut=await(await upload(mp4(),[{start:0,end:8,text:'Could you?'}])).json();assert.equal(cut.body.technicalValidation.passed,false);assert.match(cut.body.validation,/every word/);
  files.set(valid.body.mediaKey,{bytes:mp4({width:720,height:1280}),type:'video/mp4'});assert.equal((await call('exports/'+valid.id+'/download')).status,409);
  const legacy={...valid.body,id:'legacy-id',mediaKey:'legacy.mp4',technicalValidation:undefined,status:'Approved and Ready to Download',approval:{sha256:valid.body.sha256}};sql.prepare('INSERT INTO documents(id,body,revision,updated_at,actor) VALUES (?,?,1,?,?)').run('export:legacy-id',JSON.stringify(legacy),new Date().toISOString(),'owner');assert.equal((await call('exports/legacy-id/download')).status,409);assert.equal((await call('exports/legacy-id/approve','POST',{sha256:legacy.sha256,qa})).status,409);
 }finally{sql.close();}
});
test('edited immutable presenter prompt reaches Kling without composite instructions',async()=>{
 const {call,sql}=fixture(),originalFetch=globalThis.fetch;let submitted;
 try{
  const v=await(await call('versions','POST',draft)).json(),p={...production(),presenterPrompt:'Sia makes a small reassuring nod and smiles gently.'};p.prompt=buildProductionPrompt(v,p);const j=await(await call('jobs','POST',{versionId:v.id,requestId:crypto.randomUUID(),production:p})).json();
  const body={...j.body,productionSnapshot:p,production:p,audioDuration:10,imageUrl:'https://tempfile.aiquickdraw.com/sia.png',clips:[{index:0,start:0,end:10,duration:10,audioUrl:'https://tempfile.aiquickdraw.com/voice.wav'}],clipIndex:0};sql.prepare("UPDATE jobs SET status='Generating',stage='video',body=? WHERE id=?").run(JSON.stringify(body),j.id);
  globalThis.fetch=async(url,opts)=>{assert.match(String(url),/createTask/);submitted=JSON.parse(opts.body);return Response.json({code:200,data:{taskId:'edited-prompt-task'}});};
  const result=await(await call('jobs/'+j.id+'/advance','POST',{})).json();assert.equal(result.stage,'poll');assert.ok(submitted.input.prompt.includes(p.presenterPrompt));assert.equal(submitted.input.prompt.includes('Changed after the snapshot'),false);assert.equal(submitted.input.prompt.includes('B-ROLL INSERTS:'),false);assert.equal(result.body.clips[0].providerPrompt,submitted.input.prompt);
 }finally{globalThis.fetch=originalFetch;sql.close();}
});
test('180 degree rotation cannot bypass fixed portrait orientation',()=>{const bytes=mp4();const position=bytes.indexOf(Buffer.from('tkhd'));bytes.writeInt32BE(-65536,position+4+40);bytes.writeInt32BE(-65536,position+4+56);const result=validateReelMp4(bytes);assert.equal(result.passed,false);assert.match(result.errors.join(' '),/portrait/);});
test('caption alignment failures retain the exact paid voice and original timestamps without automatic regeneration',async()=>{
 const {call,sql,files}=fixture(),originalFetch=globalThis.fetch;let calls=0;
 try{
  const rawWords=['Unrelated','spoken','content'],pcm=Buffer.alloc(88200*10),events=[{type:'chunk',data:pcm.toString('base64')},{type:'timestamps',word_timestamps:{words:rawWords,start:[0,3,6],end:[2,5,9]}},{type:'done'}].map(x=>'data: '+JSON.stringify(x)+'\n\n').join('');globalThis.fetch=async()=>{calls++;return new Response(events);};
  const v=await(await call('versions','POST',draft)).json(),j=await(await call('jobs','POST',{versionId:v.id,requestId:crypto.randomUUID(),production:production()})).json();
  const held=await(await call('jobs/'+j.id+'/advance','POST',{})).json();assert.equal(held.status,'Held');assert.equal(held.stage,'split');assert.match(held.body.error,/Caption alignment requires review: Voice timestamps differ/);assert.equal(files.has(held.body.audioKey),true);assert.deepEqual(held.body.providerWords.map(w=>w.word),rawWords);assert.equal(held.body.audioDuration,10);
  await call('jobs/'+j.id+'/advance','POST',{});assert.equal(calls,1);assert.equal(sql.prepare('SELECT COUNT(*) AS n FROM jobs').get().n,1);
 }finally{globalThis.fetch=originalFetch;sql.close();}
});
