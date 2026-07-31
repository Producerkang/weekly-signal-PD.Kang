(()=>{
  const ISSUE='2026-07-20';
  if(document.documentElement.dataset.issue!==ISSUE)return;

  const q=(selector,root=document)=>root.querySelector(selector);
  const qa=(selector,root=document)=>[...root.querySelectorAll(selector)];
  const setText=(selector,value,root=document)=>{const el=q(selector,root);if(el)el.textContent=value;};
  const setHTML=(selector,value,root=document)=>{const el=q(selector,root);if(el)el.innerHTML=value;};

  const removeManualBreaks=(root=document)=>{
    qa('h1,h2,h3,.reportage-title,.reportage-dek,.editor-note .big,.toc-copy strong,.card-title',root).forEach(el=>{
      if(el.matches('.cover h1'))return;
      qa('br',el).forEach(br=>br.replaceWith(document.createTextNode(' ')));
    });
  };

  // Cover is the one place where an art-directed line break is intentional.
  setHTML('.cover h1','‘샌프란시스코 AI 선언’<br/>무엇을 약속했나');
  setText('.cover-deck','반도체 공급, 5GW 데이터센터, GPU 약 200만 장과 피지컬 AI·서비스·인재 협력을 하나의 산업 패키지로 묶은 발표를 구조부터 읽는다.');

  const tocTitles={
    '#cover-story':'‘샌프란시스코 AI 선언’은 무엇을 약속했나',
    '#economy':'미국의 ‘Section 301 관세’, 한국 수출품에는 어떻게 적용되나',
    '#politics':'정부포상 198점 취소, 훈장은 어떻게 되돌려지나',
    '#society':'지역의료를 8개 권역으로 묶는 ‘5극3특’은 무엇인가',
    '#tech':'개인정보 정책, 제재에서 사전점검·데이터 활용까지'
  };
  Object.entries(tocTitles).forEach(([href,title])=>{
    const item=q(`.toc-item[href="${href}"]`);
    if(item)setText('.toc-copy strong',title,item);
  });

  // Opening is reader-facing editorial content, not an explanation of internal writing rules.
  const opening=q('#opening');
  if(opening){
    setText('.opening h2',"EDITOR'S PICK",opening);
    setText('.opening .lede','이번 주, 이 세 가지를 먼저 봅니다.',opening);
    setHTML('.opening .prose',`
      <h3>AI 공급망이 한 장의 선언에 묶였다</h3>
      <p>반도체 공급, 데이터센터, GPU, 피지컬 AI와 인재 협력이 한 패키지로 제시됐다. 발표 총액보다 각 약속이 실제 계약·착공·가동으로 넘어가는 순서를 구분해 볼 필요가 있다.</p>
      <h3>지역의료는 병원 수보다 연결 구조를 다시 짠다</h3>
      <p>정부가 제시한 ‘5극3특’은 지역의료를 대·중·소 진료권으로 나누고 역할을 연결하는 구상이다. 이번 호에서는 새 용어의 정의부터 실제 환자 이동 경로까지 이어서 본다.</p>
      <h3>무역규제는 관세율보다 회사 안의 문서를 바꾼다</h3>
      <p>Section 301 관세는 통관 단계에서 끝나지 않는다. 품목분류, 공급망 증빙, 계약 조건과 납품단가가 한 줄로 연결될 때 기업이 체감하는 비용이 만들어진다.</p>
    `,opening);
    setText('.editor-note .big','AI 공급망 · 지역의료 · 무역규제',opening);
  }

  setText('#cover-story .article-head h2','‘샌프란시스코 AI 선언’은 무엇을 약속했나');
  setText('#economy .article-head h2','미국의 ‘Section 301 관세’, 한국 수출품에는 어떻게 적용되나');
  setText('#politics .article-head h2','정부포상 198점 취소, 훈장은 어떻게 되돌려지나');
  setText('#society .article-head h2','지역의료를 8개 권역으로 묶는 ‘5극3특’은 무엇인가');
  setText('#tech .article-head h2','개인정보 정책, 제재에서 사전점검·데이터 활용까지');

  qa('.section').forEach(section=>{
    const h2=q('.article-head h2',section);
    if(!h2)return;
    const combined=`${h2.textContent} ${q('.article-head .dek',section)?.textContent||''}`;
    if(combined.includes('GDP')&&combined.includes('GDI')){
      h2.textContent='GDP 0.6%, GDI 3.6% — 두 지표는 왜 엇갈렸나';
    }
  });

  // Let ordinary display text wrap from the available width instead of hard-coded line breaks.
  removeManualBreaks();
  // Restore the deliberately art-directed Cover break after the global cleanup.
  setHTML('.cover h1','‘샌프란시스코 AI 선언’<br/>무엇을 약속했나');

  document.documentElement.classList.add('headline-opening-patch');
})();
