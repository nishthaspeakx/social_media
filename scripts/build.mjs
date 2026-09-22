import fs from 'node:fs/promises';
import path from 'node:path';
const root=process.cwd();const assets={};
async function readAsset(file){for(let attempt=0;attempt<3;attempt++){try{return await fs.readFile(file)}catch(e){if(e.code!=='ECANCELED'||attempt===2)throw e;console.log('Retrying local file read:',file);}}}
async function walk(dir){for(const e of await fs.readdir(dir,{withFileTypes:true})){const f=path.join(dir,e.name);if(e.isDirectory())await walk(f);else{const key='/'+path.relative('web',f).split(path.sep).join('/');assets[key]=(await readAsset(f)).toString('base64');}}}
await walk('web');
await fs.rm('dist',{recursive:true,force:true});
await fs.mkdir('dist/server',{recursive:true});await fs.mkdir('dist/.openai',{recursive:true});
const phase1=(await fs.readFile('server/phase1.js','utf8')).replace(/^export /gm,'');
const server=phase1+'\n'+(await fs.readFile('server/worker.js','utf8')).replace(/^import .*from '\.\/phase1\.js';\n/m,'');
await fs.writeFile('dist/server/index.js','const ASSETS='+JSON.stringify(assets)+';\n'+server);
await fs.copyFile('.openai/hosting.json','dist/.openai/hosting.json');
await fs.cp('drizzle','dist/.openai/drizzle',{recursive:true});
console.log('Built SpeakX worker with',Object.keys(assets).length,'private assets');
