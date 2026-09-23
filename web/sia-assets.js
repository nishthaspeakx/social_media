const SIA_REFERENCES = [
  {id:'office-window-turtleneck',title:'Office window · beige turtleneck · relaxed closed mouth',file:'assets/sia/frames/sia-office-window-turtleneck.jpg',width:1080,height:1920,single:true,hq:true,use:'Best for interviews, managers and office lessons. 9:16 frame cropped from an owner-supplied high-resolution photo.'},
  {id:'studio-grey-turtleneck',title:'Studio · grey turtleneck · relaxed closed mouth',file:'assets/sia/frames/sia-studio-grey-turtleneck.jpg',width:1080,height:1920,single:true,hq:true,use:'Best for Learn With Sia rules and clean teaching videos. 9:16 frame cropped from an owner-supplied high-resolution photo.'},
  {id:'studio-grey-turtleneck-2',title:'Studio · grey turtleneck · slight smile',file:'assets/sia/frames/sia-studio-grey-turtleneck-2.jpg',width:1080,height:1920,single:true,hq:true,use:'Alternative studio take for challenges and quizzes. 9:16 frame cropped from an owner-supplied high-resolution photo.'},
  {id:'home-living-room',title:'Home · living room · closed mouth',file:'assets/sia/frames/sia-home-living-room.jpg',width:1080,height:1920,single:true,hq:true,use:'Family and friends skits, parent stories. 9:16 frame cropped from an owner-supplied high-resolution photo.'},
  {id:'office-rust-shirt',title:'Office · rust shirt · three-quarter view',file:'assets/sia/frames/sia-office-rust-shirt.jpg',width:1080,height:1920,single:true,hq:true,use:'POV and meeting moments; face turned slightly. 9:16 frame cropped from an owner-supplied high-resolution photo.'},
  {id:'home-thoughtful',title:'Home · sweater · looking off-camera',file:'assets/sia/frames/sia-home-thoughtful.jpg',width:1080,height:1920,single:true,hq:true,use:'Story narration and reflective moments. 9:16 frame cropped from an owner-supplied high-resolution photo.'},
  {id:'warm-wall-white-shirt',title:'Warm wall · white shirt · smile shows teeth',file:'assets/sia/frames/sia-warm-wall-white-shirt.jpg',width:1080,height:1920,single:true,hq:true,use:'Warm, friendly openers. The teeth-showing smile can widen the mouth slightly. 9:16 frame cropped from an owner-supplied high-resolution photo.'},
  {id:'studio-blazer-open-palms',title:'Studio · beige blazer · open palms',file:'assets/sia/frames/sia-studio-blazer-open-palms.jpg',width:1080,height:1920,single:true,hq:true,use:'Transformation and motivation. Open-palms gesture; smile shows teeth. 9:16 frame cropped from an owner-supplied high-resolution photo.'},
  {id:'front-closed-portrait',title:'Older · portrait crop on black · low resolution',file:'assets/sia/sia-front-closed-portrait.png',width:720,height:1280,single:true,use:'Best for natural lip-sync and sharp 9:16 video: relaxed closed lips, portrait framing, plain dark background.'},
  {id:'front',title:'Front view · relaxed closed-mouth smile · best for lip-sync',file:'assets/sia/sia-front.png',width:1144,height:872,single:true,use:'Identity and direct-to-camera teaching. Relaxed closed mouth gives the most natural lip-sync. Plain dark background.'},
  {id:'profile',title:'Side view · listening',file:'assets/sia/sia-profile.png',width:1154,height:642,single:true,use:'Side-angle continuity, listening and reaction direction. Prefer the front view for lip-sync tests.'},
  {id:'office',title:'Office · wide open mouth · may exaggerate lip-sync',file:'assets/sia/sia-office.png',width:1148,height:642,single:true,use:'Office background, but Sia is caught mid-laugh with her mouth wide open. The avatar model copies that, so her mouth opens too wide when she talks. Prefer a relaxed closed-mouth office photo.'},
  {id:'expressions',title:'Expression sheet · three reactions',file:'assets/sia/sia-expressions.png',width:1142,height:630,single:false,use:'Expression reference only: delighted, thoughtful and surprised. Never send the whole sheet as a video frame.'},
];
const SIA_REFERENCE_POLICY='SIA REFERENCE POLICY: Preserve Sia’s face, hair, skin tone and natural proportions from the selected approved reference. The newly supplied off-white long-sleeve top and blue jeans are an approved outfit alongside the original grey studio outfit; match the selected frame consistently within a video. Background, lighting, props and camera framing may change to suit the lesson. Only one Sia and no other people, faces, reflections or voices. A background change needs a matching prepared scene frame; these source screenshots are not transparent cutouts. Use the expression sheet for acting direction only.';

function withSiaReferencePolicy(prompt){
  const updated=String(prompt||'').replace(/light heather-grey short-sleeve fitted mock-neck top|grey mock-neck outfit|grey mock-neck/g,'outfit from the selected approved Sia reference');
  return updated.includes('SIA REFERENCE POLICY:')?updated:updated+'\n\n'+SIA_REFERENCE_POLICY;
}

function siaAssetLibrary(){
  return `<section class="panel"><div class="row"><h2>Saved Sia references</h2><span class="badge approved">4 originals saved</span></div><p>Choose a reference for the shot. Her identity stays consistent; backgrounds can change with the lesson.</p><div class="sia-library">${SIA_REFERENCES.map(a=>`<article class="sia-reference"><a href="${a.file}" target="_blank" rel="noreferrer"><img src="${a.file}" alt="${esc(a.title)}" loading="lazy" width="${a.width}" height="${a.height}"></a><div><h3>${esc(a.title)}</h3><span class="badge">${a.single?'Single Sia':'Direction only'}</span><p>${esc(a.use)}</p><small>${a.width} × ${a.height} · Original PNG · Opaque background</small><p><a href="${a.file}" download>Download original</a></p></div></article>`).join('')}</div><p class="subtle">Use these in Video studio → Generate → Saved Sia reference. Source images are preserved unchanged. Prepare the desired background and 9:16 framing before final production; selecting a reference alone does not remove its background.</p></section>`;
}

function siaReferencePicker(){
  return `<div class="sia-picker"><label for="siaReferenceChoice">Saved Sia reference</label><select id="siaReferenceChoice">${SIA_REFERENCES.filter(a=>a.single).map(a=>`<option value="${a.id}" ${editorDraft.referenceAssetId===a.id?'selected':''}>${esc(a.title)}</option>`).join('')}</select><button id="useSavedSia" type="button">Use saved reference</button><p class="subtle">Front view is best for a first test. Review the original background and framing below. The expression sheet is available in Sia & assets for direction only.</p></div>`;
}

async function useSiaReference(assetId){
  const asset=SIA_REFERENCES.find(a=>a.id===assetId);
  if(!asset?.single)throw Error('Choose a single-person Sia reference.');
  captureDraft();
  const draft=editorDraft;
  const source=await fetch('/'+asset.file);
  if(!source.ok)throw Error('Saved reference is unavailable. Please try again.');
  const blob=await source.blob();
  const type=blob.type&&blob.type.startsWith('image/')?blob.type:(/\.jpe?g$/i.test(asset.file)?'image/jpeg':/\.webp$/i.test(asset.file)?'image/webp':'image/png');
  const response=await fetch('/api/reference',{method:'POST',headers:{'Content-Type':type},body:blob});
  const result=await response.json();
  if(!response.ok)throw Error(result.error||'Reference could not be saved.');
  if(editorDraft!==draft)return;
  draft.referenceKey=result.key;
  draft.referenceAssetId=asset.id;
  draft.referenceApproved=false;
  draft.prompt=withSiaReferencePolicy(draft.prompt);
  showProduction();
  toast('Sia reference added. Review the frame, then save a new version.');
}

function bindSiaReferencePicker(){
  const button=document.querySelector('#useSavedSia');
  if(!button)return;
  button.onclick=async()=>{
    button.disabled=true;
    try{await useSiaReference(document.querySelector('#siaReferenceChoice').value);}
    catch(error){toast(error.message);}
    finally{button.disabled=false;}
  };
}
