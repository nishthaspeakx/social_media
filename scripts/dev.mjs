import {Miniflare} from 'miniflare';
import fs from 'node:fs/promises';
import {randomBytes} from 'node:crypto';
await fs.mkdir('.local',{recursive:true});
let previewVaultKey;try{previewVaultKey=(await fs.readFile('.local/provider-vault-key','utf8')).trim()}catch{previewVaultKey=randomBytes(32).toString('base64');await fs.writeFile('.local/provider-vault-key',previewVaultKey,{mode:0o600,flag:'wx'})}
const mf=new Miniflare({modules:true,scriptPath:'dist/server/index.js',compatibilityDate:'2026-05-15',port:4317,host:'127.0.0.1',d1Databases:{DB:'speakx-local'},d1Persist:'.local/db',r2Buckets:['BUCKET'],r2Persist:'.local/r2',bindings:{LOCAL_PREVIEW:'true',PROVIDER_VAULT_KEY:previewVaultKey}});
const db=await mf.getD1Database('DB');
await db.exec('CREATE TABLE IF NOT EXISTS local_migrations (name TEXT PRIMARY KEY)');
for(const name of (await fs.readdir('drizzle')).filter(x=>x.endsWith('.sql')).sort()){if(await db.prepare('SELECT name FROM local_migrations WHERE name=?').bind(name).first())continue;const sql=await fs.readFile('drizzle/'+name,'utf8');for(const statement of sql.split('--> statement-breakpoint').map(s=>s.trim()).filter(Boolean))await db.prepare(statement).run();await db.prepare('INSERT INTO local_migrations (name) VALUES (?)').bind(name).run();}
console.log('SpeakX preview ready at',String(await mf.ready));
