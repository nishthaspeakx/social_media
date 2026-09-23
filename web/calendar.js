/* Content calendar: the central dashboard for every planned video, from idea to published. */
const ContentCalendar=(()=>{
 // Monday–Sunday content themes, indexed by getUTCDay() (0 = Sunday).
 const THEMES=['Transformation / Motivation','Relatable English Problems','Learn With Sia','Emotional / Story','Trend / Meme / Viral','Challenge / Interactive','Entertainment + English'];
 const SHOW_TYPES={'Galti Pakdo Saturday':'Mistake → fix','Revision Sunday':'Quiz / challenge','Word Wala Monday':'Vocabulary','Grammar Tuesday':'Grammar lesson','Ek ya Anek Wednesday':'Grammar lesson','Baat-Cheet Thursday':'Conversation','Sentence Banao Friday':'Sentence building'};
 const STAGES=['Idea Generated','Script Ready','Video Generating','Video Ready','Needs Changes','Approved','Downloaded','Published'];
 const PLATFORMS=['Instagram','Facebook','YouTube Shorts','X'];
 const PRESETS=[[1,'1 day'],[7,'7 days'],[15,'15 days'],[30,'30 days'],[60,'60 days'],[90,'90 days']];
 const RUNNING=['Queued','Generating','Processing'];
 let summary=null,loading=null,loadError='';
 const prefs=readPrefs();

 function readPrefs(){try{return JSON.parse(localStorage.getItem('speakx-calendar')||'{}')||{};}catch{return {};}}
 function savePrefs(){try{localStorage.setItem('speakx-calendar',JSON.stringify(prefs));}catch{}}
 const iso=d=>d.toISOString().slice(0,10);
 const addDays=(day,n)=>{const d=new Date(day+'T00:00:00Z');d.setUTCDate(d.getUTCDate()+n);return iso(d);};
 const todayIST=()=>iso(new Date(Date.now()+19800000));
 const weekday=day=>new Date(day+'T00:00:00Z').getUTCDay();
 const dayName=day=>['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][weekday(day)];
 const shortDate=day=>new Date(day+'T00:00:00Z').toLocaleDateString('en-IN',{day:'numeric',month:'short',timeZone:'UTC'});
 const themeFor=day=>THEMES[weekday(day)];
 const plural=(n,word)=>n+' '+word+(n===1?'':'s');
 function datesBetween(from,to){const out=[];for(let d=from;d<=to&&out.length<366;d=addDays(d,1))out.push(d);return out;}

 // Every dated content item: the planned lessons plus custom ideas that carry a date.
 function contentItems(){
  const lessons=(typeof all==='function'?all():[]).map(e=>({id:e.id,date:e.date,title:e.topic,hook:e.hook,persona:e.persona,show:e.show,type:e.videoType||SHOW_TYPES[e.show]||'Sia lesson'}));
  const ideas=(typeof PhaseOne!=='undefined'?PhaseOne.state.ideas:[]).map(x=>x.body).filter(b=>/^\d{4}-\d{2}-\d{2}$/.test(b.date||'')).map(b=>({id:b.contentId,date:b.date,title:b.title,hook:b.hook||b.target||'',persona:b.audience||'',show:'',type:b.videoType||'Custom idea'}));
  return [...lessons,...ideas].sort((a,b)=>a.date.localeCompare(b.date));
 }
 function defaultStart(){const today=todayIST(),next=contentItems().find(x=>x.date>=today);return next?next.date:today;}
 function currentRange(){
  if(prefs.mode==='custom'&&prefs.from&&prefs.to&&prefs.from<=prefs.to)return {from:prefs.from,to:prefs.to>addDays(prefs.from,365)?addDays(prefs.from,365):prefs.to};
  const days=PRESETS.some(p=>p[0]===prefs.days)?prefs.days:30,from=/^\d{4}-\d{2}-\d{2}$/.test(prefs.start||'')?prefs.start:defaultStart();
  return {from,to:addDays(from,days-1)};
 }

 // Status of one content item, derived from its saved versions, video attempts, exports and publishing record.
 function statusFor(a){
  a=a||{};const versions=a.versions||[],jobs=a.jobs||[],exps=a.exports||[];
  const latest=versions.reduce((m,v)=>!m||(v.n||0)>=(m.n||0)?v:m,null);
  const script=latest?{label:'Script Ready',detail:'V'+(latest.n??versions.length)+(latest.scriptApproved?' · approved':'')}:{label:'Idea Generated',detail:'No saved script yet'};
  const videoNo=id=>{const i=jobs.findIndex(j=>j.id===id);return i>=0?'Video V'+(i+1):'Video';};
  const approved=[...exps].reverse().find(x=>x.status==='Approved and Ready to Download');
  const running=[...jobs].reverse().find(j=>RUNNING.includes(j.status));
  const lastExp=exps.at(-1),lastJob=jobs.at(-1),lastDone=[...jobs].reverse().find(j=>j.status==='Completed');
  let video;
  if(approved)video={label:approved.downloaded?'Downloaded':'Approved',detail:videoNo(approved.jobId)};
  else if(running)video={label:'Video Generating',detail:videoNo(running.id)};
  else if(lastJob&&['Failed','Held'].includes(lastJob.status))video={label:'Needs Changes',detail:videoNo(lastJob.id)+' '+lastJob.status.toLowerCase()};
  else if(lastExp&&(lastExp.changesRequested||lastExp.status==='Failed format validation')&&!(lastDone&&lastDone.createdAt>lastExp.createdAt))video={label:'Needs Changes',detail:videoNo(lastExp.jobId)+(lastExp.changesRequested?' · changes requested':' · failed checks')};
  else if(lastDone)video={label:'Video Ready',detail:lastExp&&lastExp.createdAt>lastDone.createdAt?videoNo(lastExp.jobId)+' · awaiting review':videoNo(lastDone.id)+' · ready to finish'};
  else video={label:'Not started',detail:''};
  const final=approved?{label:videoNo(approved.jobId)+' · Script V'+(approved.n??'?'),id:approved.id}:{label:'—'};
  const pub=a.publishing?.published?{label:'Published',detail:a.publishing.platforms.join(', ')+' · '+a.publishing.date}:{label:'Not published',detail:''};
  const stage=pub.label==='Published'?'Published':STAGES.includes(video.label)?video.label:script.label;
  return {script,video,final,publishing:pub,stage,canPublish:!!approved};
 }

 function rows(){
  const {from,to}=currentRange(),byId=Object.fromEntries((summary?.items||[]).map(x=>[x.lessonId,x])),items=contentItems().filter(x=>x.date>=from&&x.date<=to);
  const out=[];for(const date of datesBetween(from,to)){const today=items.filter(x=>x.date===date);if(!today.length)out.push({date,empty:true});for(const item of today)out.push({date,item,status:statusFor(byId[item.id])});}
  return out;
 }
 const badge=(label,detail='')=>`<span class="cal-badge cal-${label.toLowerCase().replace(/[^a-z]+/g,'-')}">${esc(label)}</span>${detail?`<small>${esc(detail)}</small>`:''}`;

 function view(){
  if(!summary&&!loading)refresh();
  const {from,to}=currentRange(),list=rows(),filled=list.filter(r=>!r.empty),filter=prefs.stage||'';
  const counts=Object.fromEntries(STAGES.map(s=>[s,filled.filter(r=>r.status.stage===s).length])),emptyDays=list.filter(r=>r.empty).length;
  const shown=filter==='No video'?list.filter(r=>r.empty):filter?list.filter(r=>!r.empty&&r.status.stage===filter):list;
  const presetButtons=PRESETS.map(([n,label])=>`<button data-cal-days="${n}" class="${prefs.mode!=='custom'&&(prefs.days||30)===n?'active':''}">${label}</button>`).join('')+`<button data-cal-custom class="${prefs.mode==='custom'?'active':''}">Custom</button>`;
  return heading('Content calendar','Every planned video, from idea to published · IST',`<button id="calExport">Export CSV</button>`)+
  `<section class="panel cal-controls"><div class="cal-presets" role="group" aria-label="Date range">${presetButtons}</div>
   <div class="cal-dates">${prefs.mode==='custom'?`<label>From<input type="date" id="calFrom" value="${from}"></label><label>To<input type="date" id="calTo" value="${to}"></label>`:`<label>Starting<input type="date" id="calStart" value="${from}"></label>`}<button data-cal-today>Today</button></div>
   <div class="cal-layout" role="group" aria-label="Layout"><button data-cal-layout="table" class="${prefs.layout!=='grid'?'active':''}">Table</button><button data-cal-layout="grid" class="${prefs.layout==='grid'?'active':''}">Calendar</button></div>
   <p class="subtle">${shortDate(from)} – ${shortDate(to)} · ${plural(datesBetween(from,to).length,'day')} · ${plural(filled.length,'video')} planned${loading?' · refreshing status…':''}${loadError?' · <b>status unavailable: '+esc(loadError)+'</b>':''}</p></section>
  <div class="cal-summary" role="group" aria-label="Filter by status">${STAGES.map(s=>`<button data-cal-stage="${s}" class="${filter===s?'active':''}">${badge(s)}<b>${counts[s]}</b></button>`).join('')}<button data-cal-stage="No video" class="${filter==='No video'?'active':''}"><span class="cal-badge cal-empty">No video planned</span><b>${emptyDays}</b></button>${filter?'<button data-cal-stage="">Show all</button>':''}</div>
  ${prefs.layout==='grid'?grid(shown,from,to):table(shown)}`;
 }
 function actions(r){if(r.empty)return `<button data-cal-plan="${r.date}">Plan a video</button>`;return `<button class="primary" data-cal-open="${esc(r.item.id)}">Open</button>${r.status.publishing.label==='Published'?`<button data-cal-unpublish="${esc(r.item.id)}">Undo published</button>`:`<button data-cal-publish="${esc(r.item.id)}" ${r.status.canPublish?'':'disabled title="Approve the final video first"'}>Mark published</button>`}`;}
 function table(list){
  if(!list.length)return empty('Nothing in this range','Change the dates or clear the status filter.');
  return `<section class="panel"><div class="table-wrap"><table class="cal-table"><thead><tr><th>Date</th><th>Day</th><th>Weekly theme</th><th>Video idea</th><th>Video type</th><th>Script</th><th>Video</th><th>Final version</th><th>Publishing</th><th></th></tr></thead><tbody>${list.map(r=>`<tr class="${r.empty?'cal-row-empty':''}"><td><b>${shortDate(r.date)}</b></td><td>${dayName(r.date)}</td><td>${esc(themeFor(r.date))}</td>${r.empty?`<td colspan="6" class="subtle">No video planned</td>`:`<td><b>${esc(r.item.title)}</b><small>${esc(r.item.hook)}</small><small>${esc(r.item.persona)}</small></td><td>${esc(r.item.type)}</td><td>${badge(r.status.script.label,r.status.script.detail)}</td><td>${r.status.video.label==='Not started'?'<span class="subtle">Not started</span>':badge(r.status.video.label,r.status.video.detail)}</td><td>${esc(r.status.final.label)}</td><td>${badge(r.status.publishing.label,r.status.publishing.detail)}</td>`}<td class="cal-actions">${actions(r)}</td></tr>`).join('')}</tbody></table></div></section>`;
 }
 function grid(list,from,to){
  const monday=d=>addDays(d,-((weekday(d)+6)%7)),start=monday(from),end=addDays(monday(to),6),byDate={};list.forEach(r=>(byDate[r.date]??=[]).push(r));
  const head=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d,i)=>`<div class="cal-head">${d}<small>${esc(THEMES[(i+1)%7])}</small></div>`).join('');
  const cells=datesBetween(start,end).map(date=>{const inRange=date>=from&&date<=to,entries=byDate[date]||[];return `<div class="cal-cell ${inRange?'':'cal-out'}">${inRange?`<div class="cal-date"><b>${shortDate(date)}</b><small>${dayName(date).slice(0,3)} · ${esc(themeFor(date))}</small></div>${entries.map(r=>r.empty?`<button class="cal-plan" data-cal-plan="${date}">+ Plan a video</button>`:`<button class="cal-item" data-cal-open="${esc(r.item.id)}">${badge(r.status.stage)}<b>${esc(r.item.title)}</b><small>${esc(r.item.type)}</small></button>`).join('')}`:''}</div>`;}).join('');
  return `<section class="panel"><div class="cal-grid">${head}${cells}</div></section>`;
 }

 async function refresh(){loading=(async()=>{try{summary=await api('phase1/calendar');loadError='';}catch(e){loadError=e.message;}finally{loading=null;if(location.hash==='#calendar'&&!$('#detail').open)render();}})();return loading;}
 function exportCsv(){const cols=['Date','Day','Weekly theme','Video idea','Hook','Video type','Script status','Video status','Final version','Publishing status'];const q=v=>'"'+String(v??'').replaceAll('"','""')+'"';const {from,to}=currentRange();
  download(`SpeakX-calendar-${from}-to-${to}.csv`,[cols.join(','),...rows().map(r=>[r.date,dayName(r.date),themeFor(r.date),r.empty?'No video planned':r.item.title,r.empty?'':r.item.hook,r.empty?'':r.item.type,r.empty?'':r.status.script.label+' '+r.status.script.detail,r.empty?'':r.status.video.label+' '+r.status.video.detail,r.empty?'':r.status.final.label,r.empty?'':r.status.publishing.label+' '+r.status.publishing.detail].map(q).join(','))].join('\n'),'text/csv');}
 function dialog(html){const d=$('#detail');d.innerHTML=`<div class="dialog-head"><h2>${html.title}</h2><button data-cal-close>Close</button></div><div class="dialog-body">${html.body}</div>`;d.showModal();d.querySelector('[data-cal-close]').onclick=()=>d.close();return d;}
 function planDialog(date){const d=dialog({title:'Plan a video for '+esc(shortDate(date)),body:`<p class="subtle">${esc(dayName(date))} theme: <b>${esc(themeFor(date))}</b></p><label>Working title<input id="calIdeaTitle" required></label><label>Hook (first line Sia says)<input id="calIdeaHook"></label><label>Target audience<input id="calIdeaAudience" value="Indian adults learning spoken English"></label><label>Learning point<input id="calIdeaTarget"></label><label>Video type<select id="calIdeaType">${['Relatable problem','Mistake → fix','Story','Trend / meme','Challenge / quiz','Entertainment','Transformation'].map(t=>`<option>${t}</option>`).join('')}</select></label><button class="primary" id="calIdeaSave">Create idea and open Script Workspace</button>`});
  d.querySelector('#calIdeaSave').onclick=async()=>{try{const title=d.querySelector('#calIdeaTitle').value.trim();if(!title)throw Error('Add a working title.');const idea=await api('phase1/ideas',{method:'POST',body:{title,hook:d.querySelector('#calIdeaHook').value,audience:d.querySelector('#calIdeaAudience').value,target:d.querySelector('#calIdeaTarget').value,videoType:d.querySelector('#calIdeaType').value,date,theme:themeFor(date)}});PhaseOne.state.ideas.unshift(idea);d.close();await PhaseOne.open(idea.body.contentId);}catch(e){toast(e.message);}};}
 function publishDialog(id){const item=contentItems().find(x=>x.id===id);const d=dialog({title:'Mark published',body:`<p><b>${esc(item?.title||id)}</b></p><fieldset class="cal-platforms"><legend>Published on</legend>${PLATFORMS.map(p=>`<label><input type="checkbox" value="${p}" data-cal-platform> ${p}</label>`).join('')}</fieldset><label>Publishing date<input type="date" id="calPubDate" value="${todayIST()}"></label><label>Note or post links (optional)<input id="calPubNote"></label><button class="primary" id="calPubSave">Save as published</button>`});
  d.querySelector('#calPubSave').onclick=async()=>{try{await api('phase1/publishing',{method:'POST',body:{lessonId:id,published:true,platforms:[...d.querySelectorAll('[data-cal-platform]:checked')].map(x=>x.value),date:d.querySelector('#calPubDate').value,note:d.querySelector('#calPubNote').value}});d.close();await refresh();toast('Marked published.');}catch(e){toast(e.message);}};}
 function bind(){
  if(location.hash!=='#calendar')return;
  const set=(patch)=>{Object.assign(prefs,patch);savePrefs();render();};
  document.querySelectorAll('[data-cal-days]').forEach(b=>b.onclick=()=>set({mode:'preset',days:Number(b.dataset.calDays)}));
  document.querySelector('[data-cal-custom]')?.addEventListener('click',()=>{const r=currentRange();set({mode:'custom',from:r.from,to:r.to});});
  document.querySelectorAll('[data-cal-layout]').forEach(b=>b.onclick=()=>set({layout:b.dataset.calLayout}));
  document.querySelectorAll('[data-cal-stage]').forEach(b=>b.onclick=()=>set({stage:b.dataset.calStage===prefs.stage?'':b.dataset.calStage}));
  document.querySelector('[data-cal-today]')?.addEventListener('click',()=>prefs.mode==='custom'?set({from:todayIST(),to:addDays(todayIST(),Math.max(0,(new Date(prefs.to)-new Date(prefs.from))/864e5))}):set({start:todayIST()}));
  $('#calStart')?.addEventListener('change',e=>e.target.value&&set({start:e.target.value}));
  $('#calFrom')?.addEventListener('change',e=>e.target.value&&set({from:e.target.value,to:prefs.to<e.target.value?e.target.value:prefs.to}));
  $('#calTo')?.addEventListener('change',e=>e.target.value&&set({to:e.target.value<prefs.from?prefs.from:e.target.value}));
  $('#calExport')?.addEventListener('click',exportCsv);
  document.querySelectorAll('[data-cal-open]').forEach(b=>b.onclick=()=>PhaseOne.open(b.dataset.calOpen));
  document.querySelectorAll('[data-cal-plan]').forEach(b=>b.onclick=()=>planDialog(b.dataset.calPlan));
  document.querySelectorAll('[data-cal-publish]').forEach(b=>b.onclick=()=>publishDialog(b.dataset.calPublish));
  document.querySelectorAll('[data-cal-unpublish]').forEach(b=>b.onclick=async()=>{try{await api('phase1/publishing',{method:'POST',body:{lessonId:b.dataset.calUnpublish,published:false}});await refresh();}catch(e){toast(e.message);}});
 }
 return {THEMES,STAGES,statusFor,datesBetween,addDays,themeFor,currentRange,contentItems,view,bind,refresh};
})();

// Make the calendar the central dashboard: first in the navigation and the default landing page.
if(typeof items!=='undefined'){const i=items.findIndex(x=>x[0]==='calendar');if(i>=0)items.splice(i,1);items.unshift(['calendar','▦','Content calendar']);}
if(typeof growthCalendar!=='undefined')growthCalendar=ContentCalendar.view;
if(typeof render!=='undefined'){const baseRender=render;render=function(){baseRender();ContentCalendar.bind();};}
if(typeof location!=='undefined'&&!location.hash&&typeof history!=='undefined')history.replaceState(null,'','#calendar');
if(typeof document!=='undefined')document.querySelector('#detail')?.addEventListener('close',()=>{if(location.hash==='#calendar')ContentCalendar.refresh();});
