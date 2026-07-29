(()=>{
 const issueDate=document.querySelector('.issue-date');
 if(!issueDate)return;
 const link=document.createElement('a');
 link.className='issue-archive-link';
 link.href='./index.html';
 link.setAttribute('aria-label','과월호 보기');
 link.innerHTML='<span class="issue-week">2026년 30주</span><span class="issue-period">07.20–07.26</span><span class="issue-archive-mobile">과월호</span><span class="issue-arrow" aria-hidden="true">↗</span>';
 issueDate.replaceChildren(link);
})();
