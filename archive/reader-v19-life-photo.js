(()=>{
 const image=document.querySelector('#life-scene .life-photo');
 if(!image)return;
 const parts=Array.from({length:7},(_,index)=>`./life-scene-photo-v19.part${index+1}?v=19`);
 Promise.all(parts.map(path=>fetch(path,{cache:'force-cache'}).then(response=>{
  if(!response.ok)throw new Error(`LIFE SCENE image part failed: ${response.status}`);
  return response.text();
 }))).then(chunks=>{
  image.src=`data:image/jpeg;base64,${chunks.join('')}`;
  image.dataset.loaded='true';
 }).catch(()=>{
  image.removeAttribute('src');
  image.dataset.loaded='false';
 });
})();
