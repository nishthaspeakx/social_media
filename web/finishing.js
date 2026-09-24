/* Local media finishing. No provider calls or automatic publishing. */
const SiaFinishing=(()=>{
 const $=tag=>document.createElement(tag);
 const REQUESTED_CAPTURE_FPS=60; // Capture headroom only; the server validates actual MP4 sample timing.
 // SpeakX DS 2.0 tokens: Figtree, Orange/80, Gray/100, Yellow/60, Green/80, Red/80.
 const BRAND={font:"Figtree, 'Helvetica Neue', Arial, sans-serif",ink:'#191D23',inkSoft:'#2D2D38',orange:'#FF4D00',gold:'#FFB61E',green:'#02A372',red:'#D83C3C',white:'#FFFFFF'};
 const font=(weight,size)=>weight+' '+size+'px '+BRAND.font;
 function supportedMime(){if(typeof MediaRecorder==='undefined')return null;return ['video/mp4;codecs=avc1.424028,mp4a.40.2','video/mp4;codecs=avc1,mp4a.40.2','video/mp4;codecs=avc1.640028,mp4a.40.2'].find(t=>MediaRecorder.isTypeSupported(t))||null;}
 function wait(el,event,timeout=20000){return new Promise((resolve,reject)=>{const timer=setTimeout(()=>finish(Error('Media took too long to load.')),timeout);const good=()=>finish(),bad=()=>finish(Error('Media could not be decoded.'));function finish(error){clearTimeout(timer);el.removeEventListener(event,good);el.removeEventListener('error',bad);error?reject(error):resolve();}el.addEventListener(event,good,{once:true});el.addEventListener('error',bad,{once:true});});}
 async function blobUrl(url,signal){const r=await fetch(url,{signal});if(!r.ok)throw Error('Source media is unavailable.');return URL.createObjectURL(await r.blob());}
 async function loadVideo(url,recorded=false){const video=$('video');video.preload='auto';video.playsInline=true;video.muted=true;const ready=wait(video,'loadeddata');video.src=url;video.load();await ready;if(!video.videoWidth||(!recorded&&!Number.isFinite(video.duration))||video.duration<=0)throw Error('Source video has invalid dimensions or duration.');return video;}
 function validateCaptions(cues,duration){if(!Array.isArray(cues)||!cues.length)throw Error('Add captions before rendering.');cues.forEach((c,i)=>{if(typeof c.text!=='string'||!c.text.trim()||!Number.isFinite(c.start)||!Number.isFinite(c.end)||c.start<0||c.end<=c.start||c.end>duration+.5||(i&&c.start<cues[i-1].end-.01))throw Error('Caption '+(i+1)+' has invalid or overlapping timing.');if(c.text.trim().split(/\s+/).length>8)throw Error('Caption '+(i+1)+' exceeds eight words. Split it into shorter cues.');});return cues;}
 function captionLines(ctx,text,maxWidth){const words=text.split(/\s+/),lines=[];let line='';for(const w of words){const candidate=line?line+' '+w:w;if(ctx.measureText(candidate).width>maxWidth&&line){lines.push(line);line=w;}else line=candidate;}if(line)lines.push(line);return lines;}
 function validateBroll(plan,duration){
  if(!Array.isArray(plan)||plan.length>3)throw Error('Plan zero to three on-screen inserts before rendering.');
  let total=0;plan.forEach((item,i)=>{const overlay=item.type==='text-overlay'||item.type==='map',length=item.end-item.start;if(!['text-overlay','teaching-card','map'].includes(item.type)||typeof item.text!=='string'||!item.text.trim())throw Error('Insert '+(i+1)+' needs a supported type and text.');if(!Number.isFinite(item.start)||!Number.isFinite(item.end)||item.start<0||item.end>duration-.15||length<(overlay?1:1.5)||length>(item.type==='map'?3:overlay?4:3)||(i&&item.start<plan[i-1].end))throw Error('Insert '+(i+1)+' must last '+(item.type==='map'?'1–3':overlay?'1–4':'1.5–3')+' seconds, stay within the voice, and not overlap.');if(item.type==='teaching-card')for(const key of ['visual','purpose','shot','transition','voiceover','captionTreatment','returnToSia'])if(typeof item[key]!=='string'||!item[key].trim())throw Error('Insert '+(i+1)+' is missing '+key+'.');if(item.text.trim().split(/\s+/).length>20)throw Error('Keep insert text to twenty words or fewer.');if(!overlay)total+=length;});if(total>=duration/2)throw Error('Sia must remain visible for most of the video.');return plan;
 }
 function stereoAudioGraph(context,audio,gainDb=0){
  const source=context.createMediaElementSource(audio),loudness=context.createGain(),mono=context.createGain(),stereo=context.createChannelMerger(2),analyser=context.createAnalyser(),destination=context.createMediaStreamDestination();
  // Loudness gain is measured before playback (BS.1770) and capped so peaks stay under -1 dBFS. No compressor: its automatic makeup gain would move the target.
  loudness.gain.value=10**(gainDb/20);source.connect(loudness);
  // The approved Cartesia voice is mono. Put the same voice in both AAC channels.
  mono.channelCount=1;mono.channelCountMode='explicit';mono.channelInterpretation='speakers';loudness.connect(mono);mono.connect(stereo,0,0);mono.connect(stereo,0,1);analyser.channelCount=2;analyser.channelCountMode='explicit';stereo.connect(analyser);destination.channelCount=2;destination.channelCountMode='explicit';destination.channelInterpretation='speakers';analyser.connect(destination);analyser.fftSize=256;return {source,loudness,mono,stereo,analyser,destination};
 }
 async function startPlayback(video,audio,isCancelled=()=>false){
  // Start both clocks in the same task. Never wait for video before starting voice.
  await Promise.all([video.play(),audio.play()]);
  const initialDrift=video.currentTime-audio.currentTime,aligned=!isCancelled()&&Math.abs(initialDrift)>.04;
  if(aligned)video.currentTime=audio.currentTime;
  return {voiceTime:audio.currentTime,initialDrift,aligned};
 }
 function playbackSyncDecision(state,sample){
  const {now,expected,videoTime,readyState,seeking=false,paused=false,error=null}=sample,drift=videoTime-expected;
  state.corrections??=[];state.maxAbsDrift=Math.max(state.maxAbsDrift||0,Math.abs(drift));
  const stalled=readyState<2||seeking||paused,bad=stalled||Math.abs(drift)>.15;
  if(bad)state.badSince??=now;else state.badSince=null;
  const recent=state.corrections.filter(c=>now-c.at<8),diagnostic='voice='+expected.toFixed(3)+'s, video='+videoTime.toFixed(3)+'s, drift='+drift.toFixed(3)+'s, readyState='+readyState+', seeking='+seeking+', paused='+paused+', corrections='+state.corrections.length;
  if(error||!Number.isFinite(drift)||(bad&&now-state.badSince>=(stalled||Math.abs(drift)>.45?2:2.5))||(Math.abs(drift)>.15&&recent.length>=4))return {action:'fail',drift,message:'Video could not stay synchronized to the original voice ('+diagnostic+(error?', mediaError='+error:'')+'). Nothing was saved; retry with the tab visible or review source playback.'};
  if(!seeking&&readyState>=2&&Math.abs(drift)>.15&&now-(state.lastCorrectionAt??-Infinity)>=.75){state.lastCorrectionAt=now;state.corrections.push({at:now,voiceTime:expected,videoTime,drift});return {action:'seek',target:Math.max(0,expected),drift};}
  return {action:'none',drift};
 }
 function retentionZoom(time){const beat=Math.floor(time/3),progress=Math.min(1,(time%3)/.35),ease=progress*progress*(3-2*progress);return 1+.045*(beat%2?ease:beat?1-ease:0);}
 function rounded(ctx,x,y,w,h,r){ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fill();}
 function teachingCard(ctx,item,time){
  const w=ctx.canvas.width,h=ctx.canvas.height,elapsed=time-item.start,remaining=item.end-time;
  ctx.save();ctx.globalAlpha=Math.max(0,Math.min(1,elapsed/.15,remaining/.15));
  const gradient=ctx.createLinearGradient(0,0,w,h);gradient.addColorStop(0,BRAND.ink);gradient.addColorStop(1,BRAND.inkSoft);ctx.fillStyle=gradient;ctx.fillRect(0,0,w,h);
  ctx.fillStyle='rgba(255,77,0,.12)';ctx.beginPath();ctx.arc(w*.94,h*.21,w*.58,0,Math.PI*2);ctx.fill();ctx.fillStyle='rgba(255,182,30,.07)';ctx.beginPath();ctx.arc(w*.10,h*.68,w*.48,0,Math.PI*2);ctx.fill();
  const rise=22*(1-Math.min(1,elapsed/.3));ctx.fillStyle=BRAND.orange;rounded(ctx,100,500+rise,72,7,3);ctx.font=font(800,24);ctx.textAlign='left';ctx.textBaseline='middle';ctx.fillText('SPEAK WITH CONFIDENCE',100,559+rise);
  let size=76,lines;do{ctx.font=font(800,size);lines=captionLines(ctx,item.text,w-240);if(lines.length<=4&&lines.every(line=>ctx.measureText(line).width<=w-240))break;size-=2;}while(size>42);if(lines.length>4||lines.some(line=>ctx.measureText(line).width>w-240))throw Error('B-roll teaching text is too long to display safely.');ctx.fillStyle=BRAND.white;lines.forEach((line,i)=>ctx.fillText(line,100,680+rise+i*size*1.28));
  ctx.fillStyle='rgba(255,255,255,.20)';rounded(ctx,100,1150,740,4,2);ctx.fillStyle=BRAND.orange;rounded(ctx,100,1150,Math.max(4,740*elapsed/(item.end-item.start)),4,2);ctx.restore();ctx.globalAlpha=1;
 }
 function highlightWords(text,terms){const clean=v=>v.replace(/[^\p{L}\p{N}']/gu,'').toLowerCase();const words=text.split(/\s+/),normalized=words.map(clean),indices=new Set();for(const term of terms){const tokens=String(term).trim().split(/\s+/).map(clean).filter(Boolean);if(!tokens.length)continue;for(let i=0;i<=words.length-tokens.length;i++)if(tokens.every((token,j)=>token===normalized[i+j]))for(let j=0;j<tokens.length;j++)indices.add(i+j);}return indices;}
 function cropBottomFraction(settings){return Math.max(0,Math.min(.35,Number(settings.cropBottom)||0));}
 function mark(ctx,kind,x,y,r){ctx.fillStyle=kind==='wrong'?BRAND.red:BRAND.green;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();ctx.strokeStyle=BRAND.white;ctx.lineWidth=r*.22;ctx.lineCap='round';ctx.beginPath();if(kind==='wrong'){ctx.moveTo(x-r*.38,y-r*.38);ctx.lineTo(x+r*.38,y+r*.38);ctx.moveTo(x+r*.38,y-r*.38);ctx.lineTo(x-r*.38,y+r*.38);}else{ctx.moveTo(x-r*.42,y+r*.02);ctx.lineTo(x-r*.1,y+r*.34);ctx.lineTo(x+r*.45,y-r*.32);}ctx.stroke();}
 // Text overlay on top of Sia: she stays visible. Pops in, fades out. Wrong lines get a red strike.
 function textOverlay(ctx,item,time,settings={}){
  const w=ctx.canvas.width,h=ctx.canvas.height,elapsed=time-item.start,remaining=item.end-time,pop=Math.min(1,elapsed/.18),scale=.86+.14*(1-(1-pop)**3);
  ctx.save();ctx.globalAlpha=Math.max(0,Math.min(1,elapsed/.08,remaining/.15));const badge=item.mark?84:0,pad=36,maxText=w*.9-badge-pad*2-(badge?24:0);
  let size=62,lines;do{ctx.font=font(800,size);lines=captionLines(ctx,item.text,maxText);if(lines.length<=3&&lines.every(l=>ctx.measureText(l).width<=maxText))break;size-=2;}while(size>40);
  if(lines.length>3||lines.some(l=>ctx.measureText(l).width>maxText))throw Error('Overlay text is too long to display safely.');
  const textW=Math.max(...lines.map(l=>ctx.measureText(l).width)),lineH=size*1.22,boxW=textW+pad*2+badge+(badge?28:0),boxH=Math.max(badge+pad,lines.length*lineH+pad*1.4),cx=w/2,cy=settings.overlayTop!=null?h*settings.overlayTop+boxH/2:h*(settings.overlayY??.585);
  ctx.translate(cx,cy);ctx.scale(scale,scale);ctx.fillStyle='rgba(255,255,255,.96)';rounded(ctx,-boxW/2,-boxH/2,boxW,boxH,30);
  if(item.mark)mark(ctx,item.mark,-boxW/2+pad+badge/2,0,badge/2);const tx=-boxW/2+pad+badge+(badge?28:0);ctx.textAlign='left';ctx.textBaseline='middle';ctx.fillStyle=BRAND.ink;
  lines.forEach((line,i)=>{const y=(i-(lines.length-1)/2)*lineH;ctx.fillText(line,tx,y);if(item.mark==='wrong'){ctx.strokeStyle=BRAND.red;ctx.lineWidth=Math.max(5,size*.09);ctx.beginPath();ctx.moveTo(tx-6,y+size*.04);ctx.lineTo(tx+ctx.measureText(line).width+6,y+size*.04);ctx.stroke();}});
  ctx.restore();ctx.globalAlpha=1;return {top:cy-boxH/2,bottom:cy+boxH/2};
 }
 // Map postcard over Sia: slow zoom toward the pin, an orange pin, and a city label. Sia stays visible above it.
 function mapCard(ctx,item,time,image,settings={}){
  const w=ctx.canvas.width,h=ctx.canvas.height,elapsed=time-item.start,remaining=item.end-time,pop=Math.min(1,elapsed/.2),scale=.88+.12*(1-(1-pop)**3),progress=Math.max(0,Math.min(1,elapsed/Math.max(.1,item.end-item.start)));
  const cw=w*.66,ch=cw*.6,cx=w/2,cy=h*(settings.mapY??.535),pin=item.pin||{x:.5,y:.5};
  ctx.save();ctx.globalAlpha=Math.max(0,Math.min(1,elapsed/.1,remaining/.18));ctx.translate(cx,cy);ctx.scale(scale,scale);
  ctx.fillStyle=BRAND.white;rounded(ctx,-cw/2-10,-ch/2-10,cw+20,ch+20,34);
  ctx.save();ctx.beginPath();ctx.roundRect(-cw/2,-ch/2,cw,ch,26);ctx.clip();
  if(image&&image.width){const zoom=1.9+.35*progress,iw=image.width,ih=image.height,sw=iw/zoom,sh=sw*ch/cw,sx=Math.max(0,Math.min(iw-sw,pin.x*iw-sw/2)),sy=Math.max(0,Math.min(ih-sh,pin.y*ih-sh/2));ctx.drawImage(image,sx,sy,sw,sh,-cw/2,-ch/2,cw,ch);
   const px=-cw/2+(pin.x*iw-sx)/sw*cw,py=-ch/2+(pin.y*ih-sy)/sh*ch,bounce=Math.sin(Math.min(1,elapsed/.35)*Math.PI)*18;ctx.fillStyle=BRAND.orange;ctx.beginPath();ctx.arc(px,py-46-bounce,22,Math.PI*.85,Math.PI*2.15);ctx.lineTo(px,py-bounce);ctx.closePath();ctx.fill();ctx.fillStyle=BRAND.white;ctx.beginPath();ctx.arc(px,py-46-bounce,8,0,Math.PI*2);ctx.fill();}
  else{ctx.fillStyle=BRAND.inkSoft;ctx.fillRect(-cw/2,-ch/2,cw,ch);}
  ctx.restore();
  let size=42;ctx.font=font(800,size);while(ctx.measureText(item.text).width>cw-80&&size>28){size-=2;ctx.font=font(800,size);}const lw=ctx.measureText(item.text).width+48;ctx.fillStyle=BRAND.ink;rounded(ctx,-lw/2,ch/2-size*.6,lw,size*1.5,size*.75);ctx.fillStyle=BRAND.white;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(item.text,0,ch/2+size*.15);
  ctx.restore();ctx.globalAlpha=1;
 }
 // Brand footer: a soft dark fade across the bottom 12% with the SpeakX line. It sits where Instagram's own UI goes,
 // and it hides the thin band of fake subtitles the video model sometimes draws at the lower edge.
 function footerBar(ctx){const w=ctx.canvas.width,h=ctx.canvas.height,top=h*.88,g=ctx.createLinearGradient(0,top,0,h*.925);g.addColorStop(0,'rgba(25,29,35,0)');g.addColorStop(1,'rgba(25,29,35,1)');ctx.fillStyle=g;ctx.fillRect(0,top,w,h*.045);ctx.fillStyle=BRAND.ink;ctx.fillRect(0,h*.925,w,h*.075);
  ctx.font=font(800,34);ctx.textBaseline='middle';const brand='SpeakX',rest=' · Muh khol. English bol!',bw=ctx.measureText(brand).width,rw=ctx.measureText(rest).width,x=(w-bw-rw)/2,y=h*.962;ctx.textAlign='left';ctx.fillStyle=BRAND.orange;ctx.fillText(brand,x,y);ctx.fillStyle=BRAND.white;ctx.fillText(rest,x+bw,y);}
 // Word timing for the active cue: use voice timestamps when they match the cue text, else spread evenly.
 function cueWordTimes(cue,words=[]){const tokens=cue.text.trim().split(/\s+/),inside=words.filter(x=>x.start>=cue.start-.06&&x.end<=cue.end+.06);if(inside.length===tokens.length)return inside.map(x=>x.start);return tokens.map((_,i)=>cue.start+(cue.end-cue.start)*i/tokens.length);}
 function drawCaption(ctx,cue,time,terms,words,minTop=0,bottomLimit=Infinity){
  const w=ctx.canvas.width,h=ctx.canvas.height,maxWidth=w*.9;let size=88,lines;do{ctx.font=font(800,size);lines=captionLines(ctx,cue.text,maxWidth);const top=Math.max(h*.74-(lines.length-1)*size*1.22/2,minTop+size*.66)-size*.62,bottom=top+lines.length*size*1.22;if(lines.length<=2&&lines.every(line=>ctx.measureText(line).width<=maxWidth)&&bottom<=bottomLimit)break;size-=2;}while(size>=44);
  if(lines.length>2||lines.some(line=>ctx.measureText(line).width>maxWidth))throw Error('A caption is too long. Split it into shorter cues.');
  const starts=cueWordTimes(cue,words);let active=-1;starts.forEach((t,i)=>{if(time>=t)active=i;});const highlighted=highlightWords(cue.text,terms),lineHeight=size*1.22,y0=Math.max(h*.74-(lines.length-1)*lineHeight/2,minTop+size*.66),space=ctx.measureText(' ').width;
  ctx.textAlign='left';ctx.textBaseline='middle';ctx.lineJoin='round';let index=0;
  for(let i=0;i<lines.length;i++){const y=y0+i*lineHeight;let x=w/2-ctx.measureText(lines[i]).width/2;for(const word of lines[i].split(/\s+/)){const ww=ctx.measureText(word).width;
   if(index===active){ctx.fillStyle=BRAND.orange;rounded(ctx,x-14,y-size*.62,ww+28,size*1.24,16);ctx.fillStyle=BRAND.white;ctx.fillText(word,x,y);}
   else{ctx.strokeStyle=BRAND.ink;ctx.lineWidth=size*.16;ctx.strokeText(word,x,y);ctx.fillStyle=highlighted.has(index)?BRAND.gold:BRAND.white;ctx.fillText(word,x,y);}
   index++;x+=ww+space;}}
 }
 function draw(ctx,video,time,settings,cues,logo,broll=[],terms=[],words=[],images={}){
  const w=ctx.canvas.width,h=ctx.canvas.height;ctx.globalAlpha=1;ctx.fillStyle=BRAND.ink;ctx.fillRect(0,0,w,h);
  const vw=video.videoWidth,vh=video.videoHeight*(1-cropBottomFraction(settings)),scale=Math.max(w/vw,h/vh)*retentionZoom(time),dw=vw*scale,dh=vh*scale;
  // Crop lower source pixels first, preserving its top. Uniform cover scaling adds no bars or stretching.
  ctx.drawImage(video,0,0,vw,vh,(w-dw)*Math.max(0,Math.min(1,settings.focusX??.5)),(h-dh)/2,dw,dh);
  const insert=broll.find(c=>time>=c.start&&time<c.end);let card=null;if(insert){if(insert.type==='text-overlay')card=textOverlay(ctx,insert,time,settings);else if(insert.type==='map')mapCard(ctx,insert,time,images[insert.mapId],settings);else teachingCard(ctx,insert,time);}
  if(settings.footer)footerBar(ctx);
  // Captions move below an active card so the two never overlap.
  const cue=cues.find(c=>time>=c.start&&time<c.end);if(cue)drawCaption(ctx,cue,time,terms,words,card?card.bottom+24:0,settings.footer?h*.875:h*.97);
  if(logo&&settings.logo!==false&&time>=2){const size=w*.105;ctx.drawImage(logo,w*.08,h*.10,size,size);}
 }
 async function render({job,captions,settings={},onProgress=()=>{},signal}){
  const mime=supportedMime();if(!mime)throw Error('This browser cannot export H.264/AAC MP4. Use current Chrome or Safari with MP4 recording support.');if(!window.ReelTools?.toSrt)throw Error('Caption tools have not loaded. Reload before rendering.');if(document.hidden)throw Error('Keep this tab visible during rendering.');
  const urls=[],videos=[];let context,stream,recorder,tick,watchdog,audio;let cancelled=false;
  const abort=()=>{cancelled=true;if(recorder?.state==='recording')recorder.stop();};const visibility=()=>{if(document.hidden)abort();};
  try{
   const clips=(job.body.clips?.length?job.body.clips:[{start:0,end:job.body.audioDuration,mediaKey:job.body.mediaKey}]).filter(c=>c.mediaKey);if(!clips.length)throw Error('Generate the source Sia video first.');
   const AudioCtx=window.AudioContext||window.webkitAudioContext;if(!AudioCtx)throw Error('This browser cannot produce stereo audio.');context=new AudioCtx({sampleRate:48000});await context.resume();
   for(const clip of clips){const url=await blobUrl('/api/media?key='+encodeURIComponent(clip.mediaKey),signal);urls.push(url);const video=await loadVideo(url);if(Number.isFinite(clip.end)&&video.duration<clip.end-(clip.start||0)-.2)throw Error('A provider clip is shorter than its voice segment. Review or regenerate it.');videos.push(video);}
   audio=$('audio');audio.preload='auto';audio.muted=false;audio.volume=1;const voiceResponse=await fetch('/api/media?key='+encodeURIComponent(job.body.audioKey),{signal});if(!voiceResponse.ok)throw Error('Source media is unavailable.');const voiceBlob=await voiceResponse.blob();const audioUrl=URL.createObjectURL(voiceBlob);urls.push(audioUrl);
   // Measure the exact output mix (mono voice in both channels) and normalize to -14 LUFS with peaks under -1 dBFS.
   let loudness={targetLufs:window.ReelTools.LOUDNESS_TARGET_LUFS,measuredLufs:null,peakDb:null,appliedGainDb:0};try{const decoded=await context.decodeAudioData(await voiceBlob.arrayBuffer());const mono=decoded.getChannelData(0);const measure=window.ReelTools.measureLoudness([mono,mono],decoded.sampleRate);loudness={...loudness,measuredLufs:+measure.integrated.toFixed(2),peakDb:+measure.peakDb.toFixed(2),appliedGainDb:window.ReelTools.loudnessGainDb(measure)};loudness.outputLufs=+(measure.integrated+loudness.appliedGainDb).toFixed(2);}catch{throw Error('Voice loudness could not be measured. Reload and retry.');}
   let fontLoaded=false;try{fontLoaded=!!(await document.fonts?.load(font(800,88),'Ag'))?.length;}catch{}const audioReady=wait(audio,'canplay');audio.src=audioUrl;audio.load();await audioReady;
   const duration=audio.duration;if(!Number.isFinite(duration)||duration<=0||duration>150)throw Error('Voice duration is invalid.');validateCaptions(captions,duration);const broll=validateBroll(job.body.production?.broll,duration),terms=job.body.production?.highlightTerms||[];const actualBroll=broll.map(c=>({...c,renderedFrames:0,firstRenderedTime:null,lastRenderedTime:null}));
   const canvas=$('canvas');canvas.width=1080;canvas.height=1920;const ctx=canvas.getContext('2d');let logo=null;if(settings.logo!==false){logo=new Image();logo.src='/assets/speakx.png';await logo.decode();}
   const {analyser,destination}=stereoAudioGraph(context,audio,loudness.appliedGainDb);const words=job.body.words||[];const images={};for(const id of [...new Set(broll.filter(b=>b.type==='map').map(b=>b.mapId))]){if(!/^[a-z]+$/.test(id))throw Error('Invalid map id.');const img=new Image();img.src='/assets/maps/'+id+'.webp';try{await img.decode();}catch{throw Error('Map image '+id+' could not be loaded.');}images[id]=img;}const samples=new Uint8Array(analyser.fftSize);let heardAudio=false,frames=0,lastTime=0,current=0,startupSync=null;const syncStates=clips.map(()=>({})),syncOrigin=performance.now()/1000;
   const visualStream=canvas.captureStream(REQUESTED_CAPTURE_FPS);stream=new MediaStream([...visualStream.getVideoTracks(),...destination.stream.getAudioTracks()]);
   recorder=new MediaRecorder(stream,{mimeType:mime,videoBitsPerSecond:5500000,audioBitsPerSecond:192000});const chunks=[];let recorderError=null;
   const done=new Promise((resolve,reject)=>{recorder.ondataavailable=e=>{if(e.data.size)chunks.push(e.data);};recorder.onerror=e=>{recorderError=e.error||Error('Video encoding failed.');reject(recorderError);};recorder.onstop=resolve;});
   const paint=()=>{if(cancelled)return;try{const t=audio.currentTime;lastTime=t;const next=Math.max(0,clips.findIndex((c,i)=>t>=(c.start||0)&&(t<(c.end??duration)||i===clips.length-1)));if(next!==current){videos[current].pause();current=next;videos[current].currentTime=Math.max(0,t-(clips[current].start||0));videos[current].play().catch(()=>abort());}const expected=t-(clips[current].start||0),activeVideo=videos[current],sync=playbackSyncDecision(syncStates[current],{now:performance.now()/1000-syncOrigin,expected,videoTime:activeVideo.currentTime,readyState:activeVideo.readyState,seeking:activeVideo.seeking,paused:activeVideo.paused,error:activeVideo.error?.code});if(sync.action==='fail')throw Error(sync.message);if(sync.action==='seek')activeVideo.currentTime=sync.target;draw(ctx,videos[current],t,settings,captions,logo,broll,terms,words,images);for(const insert of actualBroll)if(t>=insert.start&&t<insert.end){insert.renderedFrames++;insert.firstRenderedTime??=t;insert.lastRenderedTime=t;}analyser.getByteTimeDomainData(samples);if(samples.some(v=>Math.abs(v-128)>2))heardAudio=true;frames++;onProgress({fraction:Math.min(1,t/duration),seconds:t,duration});tick=requestAnimationFrame(paint);}catch(e){recorderError=e;abort();}};
   signal?.addEventListener('abort',abort,{once:true});document.addEventListener('visibilitychange',visibility);if(signal?.aborted)throw Error('Render cancelled.');
   audio.onended=()=>{cancelAnimationFrame(tick);if(recorder.state==='recording')recorder.stop();};audio.onerror=()=>{recorderError=Error('Voice playback failed.');abort();};
   draw(ctx,videos[0],0,settings,captions,logo,broll,terms,words,images);watchdog=setTimeout(()=>{recorderError=Error('Rendering stalled. Keep the tab visible and try again.');abort();},(duration+30)*1000);recorder.start(1000);const startup=startPlayback(videos[0],audio,()=>cancelled).then(info=>{startupSync=info;});paint();await Promise.race([startup,done]);await done;
   audio.pause();videos.forEach(v=>v.pause());if(recorderError)throw recorderError;if(cancelled)throw Error('Render cancelled or tab hidden. Nothing was saved. Keep this tab visible and retry.');if(!heardAudio||frames<3||lastTime<duration-.7)throw Error('Finished video did not include the complete audible take. Retry without leaving the tab.');
   if(actualBroll.some(c=>c.renderedFrames<2||c.firstRenderedTime>c.start+.2||c.lastRenderedTime<c.end-.2))throw Error('A planned B-roll insert was not fully rendered. Retry with this tab visible.');const result=new Blob(chunks,{type:recorder.mimeType});if(result.size<1000)throw Error('Video encoder produced an empty file.');if(result.size>60*1024*1024)throw Error('Finished video exceeds 60 MB; shorten it.');
   const resultUrl=URL.createObjectURL(result);urls.push(resultUrl);const check=await loadVideo(resultUrl,true);if(check.videoWidth!==1080||check.videoHeight!==1920)throw Error('Finished video dimensions are invalid.');
   return {blob:result,metadata:{width:check.videoWidth,height:check.videoHeight,duration,captions,captionSrt:window.ReelTools.toSrt(captions),actualBroll,audioPresent:heardAudio,technicalExpectations:{width:1080,height:1920,fps:30,container:'mp4',videoCodec:'h264',audioCodec:'aac',channels:2},renderSettings:{...settings,cropBottom:cropBottomFraction(settings),fit:'cover',width:1080,height:1920,requestedFps:REQUESTED_CAPTURE_FPS,minimumFps:30,channels:2,videoCodec:'h264',audioCodec:'aac',audioMix:'Approved Sia mono voice duplicated into left and right channels',loudness,captionStyle:'word-by-word karaoke',font:fontLoaded?'Figtree':'fallback sans-serif',broll,highlightTerms:terms,retentionZoomEverySeconds:3,transitionSeconds:.15,paintedFrames:frames,playbackSync:{startup:startupSync,clips:syncStates},renderer:'Browser real-time canvas + original Cartesia audio',mime:recorder.mimeType},notes:'Review the finished file for caption timing, complete speech, visuals and lip-sync before approving.'}};
  }finally{audio?.pause();if(audio){audio.removeAttribute('src');audio.load();}clearTimeout(watchdog);cancelAnimationFrame(tick);if(recorder?.state==='recording')recorder.stop();videos.forEach(v=>{v.pause();v.removeAttribute('src');v.load();});stream?.getTracks().forEach(t=>t.stop());await context?.close().catch(()=>{});urls.forEach(u=>URL.revokeObjectURL(u));signal?.removeEventListener('abort',abort);document.removeEventListener('visibilitychange',visibility);}
 }
 return {render,supportedMime,validateCaptions,validateBroll,captionLines,retentionZoom,stereoAudioGraph,draw,textOverlay,mapCard,footerBar,cueWordTimes,startPlayback,playbackSyncDecision,BRAND};
})();
