(async()=>{
 const status=document.getElementById('status'),fallback=document.getElementById('fallback');
 try{
  const res=await fetch('./2026-07-20.html?reader=4',{cache:'no-store'});
  if(!res.ok)throw new Error('HTTP '+res.status);
  const parser=new DOMParser(),doc=parser.parseFromString(await res.text(),'text/html');
  const link=doc.createElement('link');link.rel='stylesheet';link.href='./reader-v4.css';doc.head.appendChild(link);
  const replacements=(window.WEEKLY_SIGNAL_REFINEMENT||{}).reportages||{};
  for(const [key,markup] of Object.entries(replacements)){
    const old=doc.getElementById('reportage-'+key);if(!old)continue;
    const tpl=doc.createElement('template');tpl.innerHTML=markup.trim();
    old.replaceWith(tpl.content.firstElementChild);
  }
  [...doc.querySelectorAll('.fact-analysis')].forEach(block=>{
    const section=block.closest('section');
    const note=doc.createElement('details');note.className='verification-note';
    const summary=doc.createElement('summary');
    summary.innerHTML='기사 검증 메모 <span>확인된 사실과 편집부 해석</span>';
    const grid=doc.createElement('div');grid.className='verification-grid';
    [...block.children].forEach(child=>{
      child.classList.remove('fa');child.classList.add('verification-card');
      if(child.classList.contains('analysis'))child.classList.add('analysis');
      grid.appendChild(child);
    });
    note.append(summary,grid);block.replaceWith(note);
    if(section){
      const report=section.querySelector('.reportage');
      if(report)section.insertBefore(note,report);
      else (section.querySelector(':scope > .wrap')||section).appendChild(note);
    }
  });
  doc.documentElement.dataset.reader='tablet-single-column-v4';
  document.open();document.write('<!doctype html>'+doc.documentElement.outerHTML);document.close();
 }catch(err){
  console.error(err);status.textContent='읽기 화면을 불러오지 못했습니다.';fallback.style.display='block';
 }
})();
