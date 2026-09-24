// Shared, deterministic production contract. Never changes a saved script.
export const REEL_FORMAT=Object.freeze({width:1080,height:1920,fps:30,videoCodec:'h264',audioCodec:'aac',channels:2});
export const REEL_LABEL='Output Format: Instagram Reel — 1080 × 1920, 9:16';
const tokens=s=>String(s||'').trim().split(/\s+/).filter(Boolean);
const norm=s=>String(s).toLowerCase().replace(/[^\p{L}\p{N}]/gu,'');
export function validateCaptionTranscript(script,cues){return tokens(script).join(' ')===tokens((cues||[]).map(c=>c.text).join(' ')).join(' ');}
export function alignCaptionWords(script,words){
 const source=tokens(script);if(!source.length||!words?.length)throw Error('Script and word timestamps are required.');
 const a=source.map(norm),b=words.map(w=>norm(w.word)),n=a.length,m=b.length;
 const dp=Array.from({length:n+1},()=>new Uint16Array(m+1));for(let i=0;i<=n;i++)dp[i][0]=i;for(let j=0;j<=m;j++)dp[0][j]=j;
 for(let i=1;i<=n;i++)for(let j=1;j<=m;j++)dp[i][j]=Math.min(dp[i-1][j]+1,dp[i][j-1]+1,dp[i-1][j-1]+(a[i-1]===b[j-1]?0:1));
 let i=n,j=m;const map=new Array(n);while(i||j){if(i&&j&&dp[i][j]===dp[i-1][j-1]+(a[i-1]===b[j-1]?0:1)){map[--i]=--j;}else if(i&&dp[i][j]===dp[i-1][j]+1)i--;else j--;}
 if(dp[n][m]>Math.max(1,n*.35))throw Error('Voice timestamps differ too much from the selected script. Review the saved voice before finishing.');
 const result=source.map((word,k)=>map[k]===undefined?{word}:{word,start:words[map[k]].start,end:words[map[k]].end});
 for(let k=0;k<n;k++)if(result[k].start===undefined){const from=k;while(k<n&&result[k].start===undefined)k++;const start=from?result[from-1].end:words[0].start,end=k<n?result[k].start:words.at(-1).end;if(end-start<.02*(k-from))throw Error('Missing word timestamps need manual alignment before finishing.');const span=end-start;for(let p=from;p<k;p++)Object.assign(result[p],{start:start+span*(p-from)/(k-from),end:start+span*(p-from+1)/(k-from)});k--;}
 result[0].start=words[0].start;result.at(-1).end=words.at(-1).end;return result;
}
export function toSrt(cues){const stamp=t=>{const ms=Math.round(t*1000);return String(Math.floor(ms/3600000)).padStart(2,'0')+':'+String(Math.floor(ms/60000)%60).padStart(2,'0')+':'+String(Math.floor(ms/1000)%60).padStart(2,'0')+','+String(ms%1000).padStart(3,'0');};return cues.map((c,i)=>`${i+1}\n${stamp(c.start)} --> ${stamp(c.end)}\n${c.text}\n`).join('\n');}
export const PROVIDER_MODELS=Object.freeze([
 {id:'kling/ai-avatar-standard',label:'Kling Avatar Standard · 720p source · proven in pilot'},
 {id:'kling/ai-avatar-pro',label:'Kling Avatar Pro · higher detail · uses more credits'}
]);
export const LOUDNESS_TARGET_LUFS=-14;
const OVERLAY_MARKS=['','wrong','right'];
export function validateProduction(script,p){const e=[];if(!p||typeof p!=='object')return ['Prepare the Reel production plan.'];
 if(!String(p.presenterPrompt||script.prompt||'').trim())e.push('Presenter directions are required.');if(String(p.presenterPrompt||script.prompt||'').length>4800)e.push('Presenter directions must be at most 4800 characters.');
 if(p.presenterPrompt&&!p.prompt?.includes(p.presenterPrompt))e.push('Rebuild the full production prompt after editing presenter directions.');if(!p.prompt?.includes(script.script))e.push('Production prompt must contain the exact selected full script.');
 if(p.captionsEnabled!==true)e.push('Full-video captions must be enabled.');for(const [k,v]of Object.entries(REEL_FORMAT))if(p.format?.[k]!==v)e.push('Locked Reel format requires '+k+' = '+v+'.');
 if(p.providerModel!==undefined&&!PROVIDER_MODELS.some(m=>m.id===p.providerModel))e.push('Choose a supported video model.');
 // On-screen inserts are optional. Text overlays sit on top of Sia; full-screen teaching cards replace her briefly.
 if(!Array.isArray(p.broll)||p.broll.length>3)e.push('Plan zero to three on-screen inserts.');
 else p.broll.forEach((b,i)=>{const overlay=b.type==='text-overlay',length=b.end-b.start;
  const map=b.type==='map';if(!['text-overlay','teaching-card','map'].includes(b.type))e.push('Insert '+(i+1)+' must be a text-overlay, map or teaching-card.');
  const [min,max]=overlay?[1,4]:map?[1,3]:[1.5,3];if(!Number.isFinite(b.start)||!Number.isFinite(b.end)||b.start<0||length<min||length>max||b.end>script.duration||(i&&b.start<p.broll[i-1].end))e.push('Insert '+(i+1)+' needs non-overlapping '+min+'–'+max+' second timing inside the lesson.');
  if(map&&(!/^[a-z]+$/.test(b.mapId||'')||tokens(b.text).length>8))e.push('Map insert '+(i+1)+' needs a map id and a label of at most 8 words.');
  if(map&&b.pin&&!(b.pin.x>=0&&b.pin.x<=1&&b.pin.y>=0&&b.pin.y<=1))e.push('Map insert '+(i+1)+' pin must be inside the map.');
  if(!String(b.text||'').trim())e.push('Insert '+(i+1)+' needs text.');if(tokens(b.text).length>20)e.push('Insert '+(i+1)+' text must be at most 20 words.');
  if(overlay&&!OVERLAY_MARKS.includes(b.mark||''))e.push('Insert '+(i+1)+' mark must be wrong, right or empty.');
  if(b.type==='teaching-card')for(const k of ['visual','purpose','shot','transition','voiceover','captionTreatment','returnToSia'])if(!String(b[k]||'').trim())e.push('Insert '+(i+1)+' needs '+k+'.');});
 if(Array.isArray(p.broll)&&p.broll.filter(b=>b.type==='teaching-card').reduce((n,b)=>n+Math.max(0,b.end-b.start),0)>=script.duration/2)e.push('Keep Sia on screen for the majority of the lesson.');
 if(!Array.isArray(p.highlightTerms)||!p.highlightTerms.length)e.push('Choose an English teaching term to highlight.');return [...new Set(e)];}
export const ENERGETIC_PRESENTER='Sia is the only person on screen and the only voice. Preserve her exact face, hair, skin tone and outfit from the reference image. Energetic, expressive delivery like a favourite teacher-friend: raised eyebrows and a playful head shake on the mistake, a warm smile on the correct line, emphatic hand gestures on key words, leaning toward the camera when she says "Ab aapki baari". Constant natural movement; never frozen or stiff. Natural, relaxed lip-sync: the mouth opens only as much as each syllable needs and closes fully between phrases, with a soft closed-lip smile between sentences. No wide-open mouth, no exaggerated grin, no stretched jaw or distorted lips. Show energy through eyebrows, eyes, head tilts and hand gestures, not through the mouth. Chest-up framing, face fully visible, eye contact with the lens, bright even lighting. Accurate lip sync to the supplied audio. No other people, voices, generated text, logos or music. Never draw subtitles, captions, letters, numbers or any writing anywhere in the frame; the final edit adds all text.';
export function defaultProduction(v){const b=v.body,duration=Number(b.duration);
 const broll=(Array.isArray(b.overlays)?b.overlays:[]).slice(0,3).map((o,i,all)=>{const length=Math.min(o.type==='map'?3:4,Math.max(1,Number(o.seconds)||2.5)),start=+Math.min(Math.max(0,duration-length),duration*(i+1)/(all.length+1)).toFixed(2);const base={text:String(o.text||''),start,end:+(start+length).toFixed(2),...(o.anchor?{anchor:String(o.anchor)}:{})};return o.type==='map'?{...base,type:'map',mapId:String(o.mapId||''),pin:o.pin||{x:.5,y:.5}}:{...base,type:'text-overlay',mark:OVERLAY_MARKS.includes(o.mark)?o.mark:''};});
 const highlightTerms=Array.isArray(b.highlightTerms)&&b.highlightTerms.length?b.highlightTerms:(b.word?[b.word]:['English']);
 const production={presenterPrompt:b.prompt||ENERGETIC_PRESENTER,format:{...REEL_FORMAT},captionsEnabled:true,captionStyle:'word-by-word',providerModel:'kling/ai-avatar-standard',highlightTerms,broll,scriptVersionId:v.id,prompt:''};production.prompt=buildProductionPrompt(v,production);return production;}
export function buildProductionPrompt(v,p){const b=v.body;const overlays=(p.broll||[]).map(x=>`- ${x.type==='map'?'Map postcard over Sia ('+x.mapId+')':x.type==='text-overlay'?(x.mark==='wrong'?'❌ WRONG overlay':x.mark==='right'?'✅ RIGHT overlay':'Text overlay')+' over Sia':'Full-screen teaching card'} at ${x.start}–${x.end}s: "${x.text}"`).join('\n')||'- None. Sia stays full screen throughout.';
 return `${REEL_LABEL}\nProduction source: Script V${b.versionNumber} — ${b.name||'Saved script'} (${v.id}).\nEXACT SPOKEN SCRIPT — do not paraphrase:\n${b.script}\nEND EXACT SCRIPT\n\nSIA SOURCE FOOTAGE: ${p.presenterPrompt||b.prompt}\nThis direction applies to presenter footage only. Sia stays on screen for the whole video. Use the selected Cartesia Sia voice, ${b.language}; supplied audio is authoritative.\n\nSCENE PLAN (target timing; align to actual audio):\n${JSON.stringify((b.scenes?.length?b.scenes:[{startSeconds:0,endSeconds:b.duration,voiceover:b.script,shot:'Sia direct to camera, energetic and expressive.'}]).map(s=>({startSeconds:s.startSeconds,endSeconds:s.endSeconds,voiceover:s.voiceover,shot:s.shot})),null,2)}\nON-SCREEN INSERTS (added in the final edit, voice never stops):\n${overlays}\nEDIT RHYTHM: a subtle punch-in every 3 seconds; something changes on screen every 2–4 seconds.\nCAPTIONS: every exact spoken word from first to last, one to three words at a time, synchronized to voice timestamps. Large bold Figtree, white with dark outline, the word being spoken highlighted in SpeakX orange #FF4D00. Lower-middle, above the bottom 20% and clear of the right 12%. Never cover the face or mouth. Teaching terms in gold: ${p.highlightTerms.join(', ')}. Save editable SRT.\nCTA: preserve the final spoken line exactly. No additional end card.\nAUDIO: clear centred stereo voice normalized to ${LOUDNESS_TARGET_LUFS} LUFS integrated, peaks below −1 dBTP; no music for this pilot.\nNEGATIVE: No landscape or square output; no black bars; no cropped face; no missing captions; no incorrect subtitle text; no visual distortion; no malformed hands; no stiff or frozen presenter; no incorrect lip-sync; no change in Sia identity; no abrupt audio cuts; no unsupported claims; no end screen; no provider watermark where watermark-free generation is supported.\nEXPORT: MP4, H.264, AAC stereo, 1080 × 1920, 9:16 portrait, minimum 30 FPS. Correctly reframe without stretching. Validate actual file tracks before approval.`;}
export function resolveBrollTiming(production,words,duration){
 const all=words.map(w=>norm(w.word));let previousEnd=0;const list=production.broll||[];
 return list.map((b,i)=>{const overlay=b.type==='text-overlay'||b.type==='map',phrase=tokens(b.anchor||b.text).map(norm);let at=-1;for(let k=0;k<=all.length-phrase.length;k++)if(words[k].start>=previousEnd-.6&&phrase.every((t,n)=>t===all[k+n])){at=k;break;}
 const length=overlay?Math.min(b.type==='map'?3:4,Math.max(1,b.end-b.start)):Math.min(2.2,Math.max(1.5,b.end-b.start));const gap=overlay?.3:.7;const latest=duration-((list.length-i)*length)-((list.length-i-1)*gap)-.3;
 const desired=at>=0?words[at].start:duration*[.12,.43,.7][i];const start=Math.max(i?previousEnd+gap:0,Math.min(desired,latest));previousEnd=start+length;return {...b,start:+start.toFixed(3),end:+previousEnd.toFixed(3)};});
}
// Short, fast caption cues. Breaks after punctuation so a teaching sentence never splits mid-phrase awkwardly.
export function wordCaptionCues(words,maxWords=3){const cues=[],phrases=[];let phrase=[];for(const w of words||[]){phrase.push(w);if(/[.!?,:;]$/.test(w.word)){phrases.push(phrase);phrase=[];}}if(phrase.length)phrases.push(phrase);
 // Balanced groups avoid orphan words: 'I am an engineer.' becomes 'I am' + 'an engineer.', never 'I am an' + 'engineer.'.
 for(const p of phrases){const k=Math.ceil(p.length/maxWords),base=Math.floor(p.length/k),extra=p.length%k;let at=0;for(let g=0;g<k;g++){const size=base+(g>=k-extra?1:0),chunk=p.slice(at,at+size);at+=size;cues.push({start:chunk[0].start,end:chunk.at(-1).end,text:chunk.map(w=>w.word).join(' ')});}}
 for(let i=0;i<cues.length-1;i++)if(cues[i+1].start-cues[i].end<.35)cues[i].end=cues[i+1].start;return cues;}
// ITU-R BS.1770-4 integrated loudness (K-weighted, gated). channels: array of Float32Array.
export function measureLoudness(channels,sampleRate){
 const fs=sampleRate,biquad=(x,b,a)=>{const y=new Float64Array(x.length);let x1=0,x2=0,y1=0,y2=0;for(let n=0;n<x.length;n++){const v=b[0]*x[n]+b[1]*x1+b[2]*x2-a[1]*y1-a[2]*y2;x2=x1;x1=x[n];y2=y1;y1=v;y[n]=v;}return y;};
 let K=Math.tan(Math.PI*1681.974450955533/fs),Q=0.7071752369554196,Vh=10**(3.999843853973347/20),Vb=Vh**0.4996667741545416,a0=1+K/Q+K*K;
 const shelfB=[(Vh+Vb*K/Q+K*K)/a0,2*(K*K-Vh)/a0,(Vh-Vb*K/Q+K*K)/a0],shelfA=[1,2*(K*K-1)/a0,(1-K/Q+K*K)/a0];
 K=Math.tan(Math.PI*38.13547087602444/fs);Q=0.5003270373238773;const hpA=[1,2*(K*K-1)/(1+K/Q+K*K),(1-K/Q+K*K)/(1+K/Q+K*K)],hpB=[1,-2,1];
 const weighted=channels.map(c=>biquad(biquad(c,shelfB,shelfA),hpB,hpA));const block=Math.round(.4*fs),step=Math.round(.1*fs),length=Math.min(...channels.map(c=>c.length));
 const z=[];for(let start=0;start+block<=length;start+=step){let sum=0;for(const c of weighted){let s=0;for(let n=start;n<start+block;n++)s+=c[n]*c[n];sum+=s/block;}z.push(sum);}
 const lufs=v=>-0.691+10*Math.log10(v),mean=a=>a.reduce((x,y)=>x+y,0)/a.length;let peak=0;for(const c of channels)for(let n=0;n<c.length;n++)peak=Math.max(peak,Math.abs(c[n]));
 const absolute=z.filter(v=>lufs(v)>-70);if(!absolute.length)return {integrated:-Infinity,peakDb:peak?20*Math.log10(peak):-Infinity};const relative=lufs(mean(absolute))-10;const gated=absolute.filter(v=>lufs(v)>relative);
 return {integrated:lufs(mean(gated)),peakDb:20*Math.log10(peak)};}
export function loudnessGainDb(measure,target=LOUDNESS_TARGET_LUFS,ceilingDb=-1){if(!Number.isFinite(measure?.integrated))return 0;const wanted=target-measure.integrated,peakRoom=Number.isFinite(measure.peakDb)?ceilingDb-measure.peakDb:wanted;return +Math.max(-20,Math.min(15,wanted,peakRoom)).toFixed(2);}
// Mechanical consistency checks for a saved script. These catch copy that drifted apart between fields.
export function scriptConsistency(b){const issues=[],words=tokens(b.script),n=words.map(norm).filter(Boolean),scriptNorm=n.join(' ');
 const scenesText=(b.scenes||[]).map(s=>s.voiceover||'').join(' ');if((b.scenes||[]).length&&tokens(scenesText).map(norm).filter(Boolean).join(' ')!==scriptNorm)issues.push('Scene voiceover does not match the spoken script. Sync the scenes before generating.');
 const hook=tokens(b.hook).map(norm).filter(Boolean);if(hook.length&&hook.join(' ')!==n.slice(0,hook.length).join(' '))issues.push('The saved hook is not how the spoken script starts.');
 const cta=tokens(b.cta).map(norm).filter(Boolean).join(' ');if(cta&&!scriptNorm.includes(cta))issues.push('The saved CTA is never spoken in the script.');
 const estimate=words.length/2.7,target=Number(b.duration);if(Number.isFinite(target)&&target>0&&Math.abs(estimate-target)/target>.35)issues.push(`Target is ${Math.round(target)}s but this script will run about ${Math.round(estimate)}s. Change the target or the script.`);
 const names=[...new Set([...String(b.script||'').matchAll(/\bmy name is (\p{Lu}\p{L}+)/giu)].map(m=>m[1]))];if(names.length>1)issues.push('Example names change mid-script ('+names.join(', ')+'). Use one name unless the change is deliberate.');
 return issues;}
export function hookSuggestions(b){const interview=/interview/i.test(b.script+' '+b.title);return (interview?['Interview ki pehli line galat ho gayi?','Yeh ek line interview ka pehla impression banati hai.','HR ke saamne yeh galti mat karna.']:['Yeh line aap bhi galat bolte ho?','Ek chhoti galti, bada fark.','Sahi English line, sirf do second mein.']).map((text,i)=>({text,scores:{scrollStop:[8,7,8][i],relevance:9,curiosity:[8,7,7][i],emotion:[7,6,8][i],clarity:[8,9,8][i],expectedRetention:[8,7,7][i]},method:'Creative estimate /10 — not measured performance or a guarantee.'}));}
if(typeof window!=='undefined')window.ReelTools={PROVIDER_MODELS,LOUDNESS_TARGET_LUFS,ENERGETIC_PRESENTER,wordCaptionCues,measureLoudness,loudnessGainDb,scriptConsistency,resolveBrollTiming,REEL_FORMAT,REEL_LABEL,validateProduction,alignCaptionWords,validateCaptionTranscript,toSrt,defaultProduction,buildProductionPrompt,hookSuggestions};
