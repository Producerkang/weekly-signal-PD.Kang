(()=>{
 const text=node=>(node?.textContent||'').replace(/\s+/g,' ').trim();
 const run=()=>{
  const bodyText=text(document.body).toUpperCase();
  const dataCards=[...document.querySelectorAll('#data .data-metric-card')];
  const watchCards=[...document.querySelectorAll('#watch .watch-record')];
  const requiredWatchLabels=['발표 주체','확인 문서','판단 기준'];
  const checks=[
   {id:'no-next-records',pass:!bodyText.includes('NEXT RECORDS'),message:'NEXT RECORDS 카드가 남아 있습니다.'},
   {id:'no-editorial-check',pass:!bodyText.includes('EDITORIAL CHECK')&&!document.querySelector('.verification-note,.fact-analysis'),message:'반복형 EDITORIAL CHECK가 남아 있습니다.'},
   {id:'politics-two-cards',pass:document.querySelectorAll('#reportage-politics .reportage-evidence .reportage-card').length===2,message:'정치 르포 근거 카드는 정확히 2개여야 합니다.'},
   {id:'data-six-cards',pass:dataCards.length===6,message:'DATA 핵심 수치는 정확히 6개여야 합니다.'},
   {id:'watch-schema',pass:watchCards.length>0&&watchCards.every(card=>requiredWatchLabels.every(label=>[...card.querySelectorAll('dt')].some(dt=>text(dt)===label))&&card.querySelector('a[href]')&&card.querySelector('.watch-state')),message:'WATCH 카드에 발표 주체·확인 문서·판단 기준·상태·공식 링크가 모두 필요합니다.'},
   {id:'sources-only',pass:!document.querySelector('.section.method .method-grid,.section.method .method-card'),message:'Sources 지면에 내부 편집 절차가 남아 있습니다.'},
   {id:'privacy-number-nowrap',pass:!!document.querySelector('#tech .no-break'),message:'개인정보 핵심 수치의 숫자·단위 묶음이 설정되지 않았습니다.'}
  ];
  const failures=checks.filter(check=>!check.pass);
  document.documentElement.dataset.editorialValidation=failures.length?'fail':'pass';
  window.WEEKLY_SIGNAL_EDITORIAL_VALIDATION={passed:failures.length===0,checks,failures};
  if(failures.length)console.warn('[WEEKLY SIGNAL editorial preflight]',failures.map(item=>item.message));
  else console.info('[WEEKLY SIGNAL editorial preflight] pass');
  return window.WEEKLY_SIGNAL_EDITORIAL_VALIDATION;
 };
 window.validateWeeklySignalIssue=run;
 run();
})();
