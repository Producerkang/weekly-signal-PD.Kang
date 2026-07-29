(()=>{
 const issueDate=document.querySelector('.issue-date');
 if(issueDate){
  const link=document.createElement('a');
  link.className='issue-archive-link';
  link.href='./index.html';
  link.setAttribute('aria-label','과월호 보기');
  link.innerHTML='<span class="issue-week">2026년 30주</span><span class="issue-period">07.20–07.26</span><span class="issue-archive-mobile">과월호</span><span class="issue-arrow" aria-hidden="true">↗</span>';
  issueDate.replaceChildren(link);
 }

 document.querySelectorAll('.reportage-visual').forEach(node=>node.remove());

 const progress=document.getElementById('progress');
 if(progress){
  const updateProgress=()=>{
   const root=document.documentElement;
   const max=Math.max(0,root.scrollHeight-window.innerHeight);
   const ratio=max>0?Math.min(1,Math.max(0,window.scrollY/max)):0;
   progress.style.width=`${ratio*100}%`;
  };
  updateProgress();
  window.addEventListener('scroll',updateProgress,{passive:true});
  window.addEventListener('resize',updateProgress,{passive:true});
 }
})();
