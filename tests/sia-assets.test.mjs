import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import fs from 'node:fs';

function setup() {
  const calls=[];
  const context=vm.createContext({
    editorDraft:{referenceKey:'old-frame',referenceApproved:true,prompt:'Preserve grey mock-neck outfit. Teach one useful sentence.'},
    captureDraft(){}, showProduction(){}, toast(){},
    fetch:async(url,options)=>{calls.push({url,options});return options?{ok:true,json:async()=>({key:'references/new-frame'})}:{ok:true,blob:async()=>new Blob(['image'],{type:'image/png'})};},
  });
  if(fs.existsSync('web/sia-assets.js'))vm.runInContext(fs.readFileSync('web/sia-assets.js','utf8'),context);
  return {context,calls};
}

test('selecting a saved Sia frame uses normal upload storage and requires fresh frame review',async()=>{
  const {context,calls}=setup();
  assert.equal(typeof context.useSiaReference,'function');
  await context.useSiaReference('front');
  assert.equal(context.editorDraft.referenceKey,'references/new-frame');
  assert.equal(context.editorDraft.referenceApproved,false);
  assert.equal(context.editorDraft.referenceAssetId,'front');
  assert.doesNotMatch(context.editorDraft.prompt,/grey mock-neck/);
  assert.match(context.editorDraft.prompt,/Teach one useful sentence/);
  assert.equal(calls[1].url,'/api/reference');
  assert.equal(calls[1].options.method,'POST');
});

test('expression sheet cannot be used as a single-presenter generation frame',async()=>{
  const {context,calls}=setup();
  assert.equal(typeof context.useSiaReference,'function');
  await assert.rejects(()=>context.useSiaReference('expressions'),/single-person/);
  assert.equal(calls.length,0);
  assert.equal(context.editorDraft.referenceKey,'old-frame');
});
