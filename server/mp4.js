// Read ISO BMFF track facts from the file, never from upload metadata.
export function inspectMp4(input) {
 const bytes=input instanceof Uint8Array?input:new Uint8Array(input),view=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength);
 const need=(at,n,end=bytes.length)=>{if(at<0||at+n>end)throw Error('Truncated MP4 structure.');};
 const u32=at=>{need(at,4);return view.getUint32(at);},u16=at=>{need(at,2);return view.getUint16(at);},u64=at=>{const n=u32(at)*4294967296+u32(at+4);if(!Number.isSafeInteger(n))throw Error('MP4 integer exceeds supported range.');return n;};
 const type=at=>{need(at,4);return String.fromCharCode(...bytes.subarray(at,at+4));};
 function boxes(start,end){const out=[];while(start<end){need(start,8,end);let size=u32(start),header=8;if(size===1){need(start,16,end);size=u64(start+8);header=16;}if(size===0)size=end-start;if(size<header||start+size>end)throw Error('Invalid MP4 box size.');out.push({type:type(start+4),start,data:start+header,end:start+size});start+=size;}return out;}
 const children=b=>boxes(b.data,b.end),one=(b,t)=>children(b).find(x=>x.type===t),requireBox=(b,t)=>{const x=one(b,t);if(!x)throw Error('Missing MP4 '+t+' box.');return x;};
 const top=boxes(0,bytes.length),moov=top.find(b=>b.type==='moov');if(!top.some(b=>b.type==='ftyp')||!moov||!top.some(b=>b.type==='mdat'))throw Error('File is not a complete MP4.');
 const tracks=[];
 for(const trak of children(moov).filter(b=>b.type==='trak')){
  const tkhd=requireBox(trak,'tkhd'),mdia=requireBox(trak,'mdia'),hdlr=requireBox(mdia,'hdlr'),mdhd=requireBox(mdia,'mdhd');need(hdlr.data,12,hdlr.end);const handler=type(hdlr.data+8);if(!['vide','soun'].includes(handler))continue;
  const tkV=bytes[tkhd.data],mdV=bytes[mdhd.data];need(tkhd.data,tkV===1?96:84,tkhd.end);need(mdhd.data,mdV===1?32:20,mdhd.end);
  const id=u32(tkhd.data+(tkV===1?20:12)),scale=u32(mdhd.data+(mdV===1?20:12));if(!scale)throw Error('Invalid track timescale.');
  const durationUnits=mdV===1?u64(mdhd.data+24):u32(mdhd.data+16),stbl=requireBox(requireBox(mdia,'minf'),'stbl'),stsd=requireBox(stbl,'stsd');need(stsd.data,8,stsd.end);
  const entries=boxes(stsd.data+8,stsd.end);if(u32(stsd.data+4)!==1||entries.length!==1)throw Error('Exactly one codec per track is required.');const entry=entries[0];
  const track={id,handler,codec:entry.type,timescale:scale,duration:durationUnits/scale,samples:0,sampleDuration:0};
  if(handler==='vide'){need(entry.data,78,entry.end);track.width=u16(entry.data+24);track.height=u16(entry.data+26);track.h264= ['avc1','avc3'].includes(entry.type)&&boxes(entry.data+78,entry.end).some(b=>b.type==='avcC');const matrix=tkhd.data+(tkV===1?52:40);track.rotated=view.getInt32(matrix)!==65536||view.getInt32(matrix+4)!==0||view.getInt32(matrix+12)!==0||view.getInt32(matrix+16)!==65536;}
  else{need(entry.data,28,entry.end);track.channels=u16(entry.data+16);track.sampleRate=u32(entry.data+24)/65536;const version=u16(entry.data+8);const extension=version===1?16:version===2?36:0;const esds=boxes(entry.data+28+extension,entry.end).find(b=>b.type==='esds');track.aac=false;if(entry.type==='mp4a'&&esds){
    // ES_Descriptor → DecoderConfigDescriptor contains the MPEG-4 Audio object type.
    const descriptor=(start,end)=>{let at=start;while(at<end){need(at,2,end);const tag=bytes[at++];let len=0,n=0,v;do{need(at,1,end);v=bytes[at++];len=len*128+(v&127);if(++n>4)throw Error('Invalid MP4 descriptor.');}while(v&128);need(at,len,end);const stop=at+len;if(tag===4){need(at,13,stop);track.aac=[0x40,0x66,0x67,0x68].includes(bytes[at]);descriptor(at+13,stop);}else if(tag===3){need(at,3,stop);const flags=bytes[at+2];let next=at+3;if(flags&128)next+=2;if(flags&64){need(next,1,stop);next+=1+bytes[next];}if(flags&32)next+=2;descriptor(next,stop);}else if(tag===5&&len>=2){let bit=at*8;const read=n=>{if(bit+n>stop*8)throw Error('Truncated AAC decoder configuration.');let value=0;for(let i=0;i<n;i++,bit++)value=value*2+((bytes[bit>>3]>>(7-(bit%8)))&1);return value;};let objectType=read(5);if(objectType===31)objectType=32+read(6);const frequencyIndex=read(4);if(frequencyIndex===15)read(24);const channelConfig=read(4);track.aac=track.aac&&[1,2,3,4,5,6,7,17,19,20,21,22,23,29,39].includes(objectType);track.channels=channelConfig===7?8:channelConfig;}at=stop;}};
    descriptor(esds.data+4,esds.end);
  }}
  const stts=one(stbl,'stts');if(stts){need(stts.data,8,stts.end);const n=u32(stts.data+4);need(stts.data+8,n*8,stts.end);for(let i=0;i<n;i++){const p=stts.data+8+i*8,count=u32(p),delta=u32(p+4);if(count&&!delta)throw Error('Invalid sample timing.');track.samples+=count;track.sampleDuration+=count*delta;}}
  tracks.push(track);
 }
 const defaults=new Map(),mvex=one(moov,'mvex');if(mvex)for(const b of children(mvex).filter(b=>b.type==='trex')){need(b.data,24,b.end);defaults.set(u32(b.data+4),u32(b.data+12));}
 for(const moof of top.filter(b=>b.type==='moof'))for(const traf of children(moof).filter(b=>b.type==='traf')){
  const tfhd=requireBox(traf,'tfhd');need(tfhd.data,8,tfhd.end);const flags=u32(tfhd.data)&0xffffff,id=u32(tfhd.data+4),track=tracks.find(t=>t.id===id);if(!track)continue;let at=tfhd.data+8;if(flags&1)at+=8;if(flags&2)at+=4;let defaultDuration=defaults.get(id)||0;if(flags&8){need(at,4,tfhd.end);defaultDuration=u32(at);at+=4;}if(flags&16)at+=4;if(flags&32)at+=4;need(at,0,tfhd.end);
  for(const trun of children(traf).filter(b=>b.type==='trun')){need(trun.data,8,trun.end);const f=u32(trun.data)&0xffffff,count=u32(trun.data+4);let p=trun.data+8;if(f&1)p+=4;if(f&4)p+=4;const stride=((f&256)?4:0)+((f&512)?4:0)+((f&1024)?4:0)+((f&2048)?4:0);need(p,count*stride,trun.end);if(count>1000000)throw Error('Unsupported MP4 sample count.');for(let i=0;i<count;i++){const duration=(f&256)?u32(p):defaultDuration;if(!duration)throw Error('Fragment sample duration is missing.');track.samples++;track.sampleDuration+=duration;p+=stride;}}
 }
 for(const track of tracks){if(track.sampleDuration>0){track.duration=track.sampleDuration/track.timescale;track.fps=track.samples/track.duration;}delete track.sampleDuration;}
 const video=tracks.filter(t=>t.handler==='vide'),audio=tracks.filter(t=>t.handler==='soun');return {container:'mp4',tracks,video:video[0]||null,audio:audio[0]||null,duration:video[0]?.duration||0};
}
export function validateReelMp4(input){
 let facts;try{facts=inspectMp4(input);}catch(error){return {passed:false,errors:[error.message],facts:null};}
 const errors=[],v=facts.video,a=facts.audio;
 if(facts.tracks.filter(t=>t.handler==='vide').length!==1||!v?.h264)errors.push('Final MP4 must contain one H.264 video track.');
 if(v?.width!==1080||v?.height!==1920||v?.rotated)errors.push('Final video must be 1080 × 1920 portrait without rotation.');
 if(!Number.isFinite(v?.fps)||v.fps<30)errors.push('Final video must have at least 30 FPS.');
 if(!v?.samples||!Number.isFinite(facts.duration)||facts.duration<=0||facts.duration>150)errors.push('Final video has invalid duration or no frames.');
 if(facts.tracks.filter(t=>t.handler==='soun').length!==1||!a?.aac||a.channels!==2||!a.samples)errors.push('Final MP4 must contain AAC stereo audio.');
 if(a&&Math.abs(a.duration-facts.duration)>0.75)errors.push('Audio and video duration do not match.');
 return {passed:errors.length===0,errors,facts};
}
