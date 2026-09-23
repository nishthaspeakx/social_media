import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs/promises';import {Miniflare} from 'miniflare';
// Browsers need byte ranges to seek in review players; iOS Safari will not play video without them.
test('media endpoint serves byte ranges, suffix ranges and HEAD, and rejects unsatisfiable ranges',async()=>{
 const mf=new Miniflare({modules:true,modulesRules:[{type:'ESModule',include:['**/*.js']}],scriptPath:'server/worker.js',compatibilityDate:'2026-05-15',d1Databases:{DB:'range'},r2Buckets:['BUCKET']});
 try{const db=await mf.getD1Database('DB');for(const f of (await fs.readdir('drizzle')).filter(x=>x.endsWith('.sql')).sort())for(const st of (await fs.readFile('drizzle/'+f,'utf8')).split('--> statement-breakpoint').filter(x=>x.trim()))await db.prepare(st).run();
  const bytes=new Uint8Array(1000).map((_,i)=>i%251);const key='finals/0123abcd-0000-4000-8000-000000000000.mp4';await (await mf.getR2Bucket('BUCKET')).put(key,bytes,{httpMetadata:{contentType:'video/mp4'}});
  const get=(range,method='GET')=>mf.dispatchFetch('https://os.test/api/media?key='+encodeURIComponent(key),{method,headers:{'oai-authenticated-user-id':'owner','oai-authenticated-user-email':'owner@example.test',...(range?{Range:range}:{})}});
  let r=await get();assert.equal(r.status,200);assert.equal(r.headers.get('accept-ranges'),'bytes');assert.equal((await r.arrayBuffer()).byteLength,1000);
  r=await get('bytes=100-199');assert.equal(r.status,206);assert.equal(r.headers.get('content-range'),'bytes 100-199/1000');assert.equal(r.headers.get('content-length'),'100');assert.deepEqual(new Uint8Array(await r.arrayBuffer()),bytes.slice(100,200));
  r=await get('bytes=900-');assert.equal(r.status,206);assert.equal(r.headers.get('content-range'),'bytes 900-999/1000');assert.equal((await r.arrayBuffer()).byteLength,100);
  r=await get('bytes=-50');assert.equal(r.status,206);assert.deepEqual(new Uint8Array(await r.arrayBuffer()),bytes.slice(950));
  r=await get('bytes=0-5000');assert.equal(r.status,206);assert.equal(r.headers.get('content-range'),'bytes 0-999/1000');await r.arrayBuffer();
  for(const bad of ['bytes=2000-','bytes=-','items=0-1']){r=await get(bad);assert.equal(r.status,416,bad);assert.equal(r.headers.get('content-range'),'bytes */1000');await r.arrayBuffer();}
  r=await get(undefined,'HEAD');assert.equal(r.status,200);assert.equal(r.headers.get('content-length'),'1000');
 }finally{await mf.dispose();}
});
