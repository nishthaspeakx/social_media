import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import fs from 'node:fs';

test('sidebar navigation invokes the active Growth OS renderer',()=>{
  const listeners={};
  const context=vm.createContext({
    document:{querySelector:()=>({})},
    window:{addEventListener:(name,handler)=>{listeners[name]=handler;}},
    location:{hash:''},
  });
  vm.runInContext(fs.readFileSync('web/app.js','utf8'),context);
  vm.runInContext('var renderCalls=0; render=()=>{renderCalls++;};',context);
  listeners.hashchange();
  assert.equal(context.renderCalls,1,'Route changes must use the upgraded renderer, not its previous implementation');
});

test('status messages remain inside an open production dialog',()=>{
  let message;
  const dialog={open:true,querySelector:selector=>selector==='.dialog-head'?{after:node=>{message=node;}}:null};
  const context=vm.createContext({
    document:{querySelector:selector=>selector==='#detail'?dialog:{},createElement:()=>({setAttribute(){},remove(){}})},
    window:{addEventListener(){}},location:{hash:''},setTimeout:()=>1,clearTimeout(){},
  });
  vm.runInContext(fs.readFileSync('web/app.js','utf8'),context);
  vm.runInContext("toast('Generation is waiting for secure provider setup.');",context);
  assert.equal(message?.textContent,'Generation is waiting for secure provider setup.');
});
