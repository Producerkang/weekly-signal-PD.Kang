(async()=>{
 const status=document.getElementById('status'),fallback=document.getElementById('fallback');
 try{
  const res=await fetch('./2026-07-20.html?reader=5',{cache:'no-store'});
  if(!res.ok)throw new Error('HTTP '+res.status);
  const parser=new DOMParser(),doc=parser.parseFromString(await res.text(),'text/html');
  const link=doc.createElement('link');link.rel='stylesheet';link.href='./reader-v4.css?v=5';doc.head.appendChild(link);
  const replacements=(window.WEEKLY_SIGNAL_REFINEMENT||{}).reportages||{};
  for(const [key,markup] of Object.entries(replacements)){
    const old=doc.getElementById('reportage-'+key);if(!old)continue;
    const tpl=doc.createElement('template');tpl.innerHTML=markup.trim();
    const report=tpl.content.firstElementChild;
    old.replaceWith(report);
    const section=report.closest('section');
    const sourceImg=section&&section.querySelector('.full-bleed img');
    if(sourceImg&&!report.querySelector('.reportage-visual')){
      const figure=doc.createElement('figure');figure.className='reportage-visual';
      const image=sourceImg.cloneNode(true);image.removeAttribute('id');image.loading='lazy';
      const caption=doc.createElement('figcaption');
      caption.textContent='관련 기사 시각자료 · 자료 기반 르포의 맥락을 보여주는 섹션 이미지';
      figure.append(image,caption);
      const note=report.querySelector('.reportage-note');
      if(note)note.insertAdjacentElement('afterend',figure);
      else report.prepend(figure);
    }
  }
  [...doc.querySelectorAll('.fact-analysis')].forEach(block=>{
    const section=block.closest('section');
    const note=doc.createElement('section');note.className='verification-note';note.setAttribute('aria-label','기사 검증 메모');
    const head=doc.createElement('header');head.className='verification-head';
    head.innerHTML='<div class="verification-kicker">EDITORIAL CHECK</div><div><h3>기사 검증 메모</h3><p>확인된 사실과 편집부 해석을 분리해 제시합니다.</p></div>';
    const grid=doc.createElement('div');grid.className='verification-grid';
    [...block.children].forEach(child=>{
      child.classList.remove('fa');child.classList.add('verification-card');
      if(child.classList.contains('analysis'))child.classList.add('analysis');
      grid.appendChild(child);
    });
    note.append(head,grid);block.replaceWith(note);
    if(section){
      const report=section.querySelector('.reportage');
      if(report)section.insertBefore(note,report);
      else (section.querySelector(':scope > .wrap')||section).appendChild(note);
    }
  });
  doc.documentElement.dataset.reader='tablet-single-column-v5';
  document.open();document.write('<!doctype html>'+doc.documentElement.outerHTML);document.close();
 }catch(err){
  console.error(err);status.textContent='읽기 화면을 불러오지 못했습니다.';fallback.style.display='block';
 }
})();