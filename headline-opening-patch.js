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

  // Editor's Pick states one conclusion from the whole issue, then uses selected articles as evidence.
  const opening=q('#opening');
  if(opening){
    setText('.opening h2',"EDITOR'S PICK",opening);
    setText('.opening .lede','큰 발표가 쏟아졌지만, 실제 변화는 ‘누가 무엇을 책임지는가’에서 시작된다.',opening);
    setHTML('.opening .prose',`
      <p>이번 주에는 큰 숫자와 새로운 정책명이 잇따랐다. AI 협력은 반도체·GPU·데이터센터를 한 묶음으로 제시했고, 지역의료에는 ‘5극3특’이라는 새 틀이 등장했으며, 미국의 Section 301 조치는 한국 수출기업의 비용 구조까지 건드린다. 서로 다른 세 사안을 자료의 흐름대로 따라가 보니 공통점이 하나 보였다. 발표 자체보다 <strong>그 발표가 실제 의무와 책임으로 바뀌는 지점</strong>이 더 중요하다는 것이다.</p>

      <h3>AI — 선언 다음에는 계약과 전력이 남는다</h3>
      <p>반도체 공급, 데이터센터, GPU와 피지컬 AI 협력이 한 패키지에 담겼지만 모든 약속이 같은 단계에 있는 것은 아니다. MOU가 실제 구매계약으로 이어지는지, 데이터센터의 부지·전력·착공 일정이 확정되는지를 봐야 발표가 현실의 설비와 비용으로 바뀌는 시점을 알 수 있다. 이번 호에서는 큰 총액보다 <strong>선언 → 계약 → 착공 → 가동</strong>의 순서를 구분해 읽었다.</p>

      <h3>지역의료 — 권역을 그리는 것보다 환자를 누가 받는지가 중요하다</h3>
      <p>‘5극3특’은 병원 몇 곳을 새로 지정하는 이름이 아니라 지역 안에서 진료 역할과 환자 이동을 다시 연결하려는 구상이다. 하지만 권역을 정하는 것만으로 전원 문제가 해결되지는 않는다. 어느 기관이 어떤 환자를 맡고, 수용이 어려울 때 다음 병원을 누가 찾으며, 그 과정의 책임과 기록이 어디에 남는지가 정해져야 제도가 실제 의료체계가 된다.</p>

      <h3>무역 — 관세율은 숫자지만 부담은 계약과 문서에서 정해진다</h3>
      <p>Section 301 조치는 통관 단계의 세율만 보고 끝낼 사안이 아니다. 품목분류, 공급망 증빙, 계약 조건과 납품단가가 연결되면서 실제 비용 부담의 주체가 달라진다. 그래서 기업이 체감하는 변화는 관세 고지서 한 장보다 <strong>누가 증빙하고 누가 비용을 부담하도록 계약했는지</strong>에서 더 선명하게 드러난다.</p>

      <h3>이번 호를 읽는 세 가지 질문</h3>
      <p><strong>무엇이 발표됐는가. 무엇이 이미 확정됐는가. 그리고 누가 실행 책임을 지는가.</strong> 이 세 질문을 분리하면 큰 숫자와 새 정책명에 가려진 실제 진행 단계를 볼 수 있다. 이번 호의 AI 공급망, 지역의료, 무역규제 기사는 서로 다른 분야를 다루지만 모두 이 지점에서 연결된다.</p>
    `,opening);
    setText('.editor-note .big','발표 → 확정 → 책임',opening);
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
  const coverTitle=q('.cover h1');
  if(coverTitle)coverTitle.style.setProperty('line-height','1.3','important');

  document.documentElement.classList.add('headline-opening-patch');
})();
