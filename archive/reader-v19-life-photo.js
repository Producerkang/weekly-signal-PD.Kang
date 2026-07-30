(()=>{
 const figure=document.querySelector('#life-scene .life-illustration');
 if(!figure)return;
 figure.querySelectorAll('svg').forEach(node=>node.remove());
 figure.setAttribute('aria-label','응급실 복도에서 환자의 전원을 기다리는 젊은 보호자의 사실적 편집 이미지');
 let image=figure.querySelector('.life-photo');
 if(!image){
  image=document.createElement('img');
  image.className='life-photo';
  image.alt='응급실 복도에서 휴대전화와 약 봉투를 들고 전원을 기다리는 젊은 보호자';
  image.loading='eager';
  image.decoding='async';
  figure.prepend(image);
 }
 const caption=figure.querySelector('figcaption');
 if(caption)caption.textContent='편집용 생성 이미지 · 인물과 병원, 구체적인 상황은 가상입니다.';
 fetch('./life-scene-photo-v19.b64?v=19',{cache:'force-cache'})
  .then(response=>{
   if(!response.ok)throw new Error(`LIFE SCENE image failed: ${response.status}`);
   return response.text();
  })
  .then(data=>{
   image.src=`data:image/jpeg;base64,${data.trim()}`;
   image.dataset.loaded='true';
  })
  .catch(()=>{
   image.removeAttribute('src');
   image.dataset.loaded='false';
  });
 const footerKicker=document.querySelector('.footer .kicker');
 if(footerKicker)footerKicker.textContent='WEEKLY SIGNAL · ISSUE 01 · EDITORIAL MODEL V19';
 document.documentElement.dataset.contentEdition='issue-01-editorial-v19';
})();
