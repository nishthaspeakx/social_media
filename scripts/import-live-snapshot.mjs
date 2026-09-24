// Import a snapshot of the live workspace into the LOCAL preview database, so the local app shows real history.
// Usage: stop `npm run dev`, then `node scripts/import-live-snapshot.mjs path/to/live-snapshot.json [media-key=local-file ...]`.
// Optional media pairs copy downloaded files into local storage, e.g. jobs/<job-id>/clip-0.mp4=~/Downloads/v8-clip.mp4.
// The snapshot holds records only (scripts, video attempts, finished-video records, ideas, audit events, planning state).
// It never contains provider keys or settings. Media files stay on the live site unless you import them separately.
import {Miniflare} from 'miniflare';
import fs from 'node:fs/promises';

const file=process.argv[2],mediaPairs=process.argv.slice(3);
if(!file){console.error('Usage: node scripts/import-live-snapshot.mjs <live-snapshot.json>');process.exit(1);}
const snap=JSON.parse(await fs.readFile(file,'utf8'));
if(snap.kind!=='speakx-live-snapshot'||snap.version!==1)throw Error('Not a SpeakX live snapshot (expected kind speakx-live-snapshot, version 1).');
const text=v=>v==null?null:typeof v==='string'?v:JSON.stringify(v);
if(JSON.stringify(snap).match(/sk_car_|KIE_API_KEY|CARTESIA_API_KEY/))throw Error('Snapshot appears to contain credentials. Refusing to import.');

await fs.mkdir('.local',{recursive:true});
const mf=new Miniflare({modules:true,script:'export default {fetch(){return new Response("")}}',d1Databases:{DB:'speakx-local'},d1Persist:'.local/db',r2Buckets:['BUCKET'],r2Persist:'.local/r2'});
try{
 const db=await mf.getD1Database('DB');
 await db.exec('CREATE TABLE IF NOT EXISTS local_migrations (name TEXT PRIMARY KEY)');
 for(const name of (await fs.readdir('drizzle')).filter(x=>x.endsWith('.sql')).sort()){if(await db.prepare('SELECT name FROM local_migrations WHERE name=?').bind(name).first())continue;for(const s of (await fs.readFile('drizzle/'+name,'utf8')).split('--> statement-breakpoint').map(s=>s.trim()).filter(Boolean))await db.prepare(s).run();await db.prepare('INSERT INTO local_migrations (name) VALUES (?)').bind(name).run();}
 const counts={versions:0,jobs:0,documents:0,events:0};
 for(const v of snap.versions||[]){await db.prepare('INSERT OR REPLACE INTO versions(id,lesson_id,body,parent_id,created_at,actor,status,approval) VALUES (?,?,?,?,?,?,?,?)').bind(v.id,v.lesson_id,text(v.body),v.parent_id??null,v.created_at,v.actor,v.status||'Draft',text(v.approval)).run();counts.versions++;}
 for(const j of snap.jobs||[]){await db.prepare('INSERT OR REPLACE INTO jobs(id,version_id,idempotency_key,status,stage,provider_id,body,created_at,updated_at) VALUES (?,?,?,?,?,?,?,?,?)').bind(j.id,j.version_id,j.idempotency_key||('imported:'+j.id),j.status,j.stage,j.provider_id??null,text(j.body),j.created_at,j.updated_at||j.created_at).run();counts.jobs++;}
 for(const d of snap.documents||[]){if(!/^(export|idea|publish):/.test(d.id))continue;await db.prepare('INSERT OR REPLACE INTO documents(id,body,revision,updated_at,actor) VALUES (?,?,?,?,?)').bind(d.id,text(d.body),d.revision||1,d.updated_at||new Date().toISOString(),d.actor||'imported').run();counts.documents++;}
 if(snap.workspace?.state){const row=await db.prepare("SELECT revision FROM documents WHERE id='workspace'").first();await db.prepare('INSERT OR REPLACE INTO documents(id,body,revision,updated_at,actor) VALUES (?,?,?,?,?)').bind('workspace',JSON.stringify(snap.workspace.state),(row?.revision||0)+1,new Date().toISOString(),'imported').run();counts.documents++;}
 for(const e of snap.events||[]){await db.prepare('INSERT OR IGNORE INTO events(id,at,actor,action,target) VALUES (?,?,?,?,?)').bind(e.id,e.at,e.actor,e.action,e.target).run();counts.events++;}
 const types={mp4:'video/mp4',wav:'audio/wav',png:'image/png',jpg:'image/jpeg',jpeg:'image/jpeg',webp:'image/webp'};let media=0;
 if(mediaPairs.length){const bucket=await mf.getR2Bucket('BUCKET');for(const pair of mediaPairs){const at=pair.indexOf('='),key=pair.slice(0,at),path=pair.slice(at+1);if(at<1||!/^(references|jobs|finals)\/[\w./-]+$/.test(key))throw Error('Invalid media key: '+key);const ext=path.split('.').pop().toLowerCase();await bucket.put(key,await fs.readFile(path),{httpMetadata:{contentType:types[ext]||'application/octet-stream'}});media++;}}
 console.log('Imported live snapshot from',snap.exportedAt,{...counts,media});
}finally{await mf.dispose();}
