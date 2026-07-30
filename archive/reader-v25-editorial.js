(()=>{
 const clean=value=>(value||'').replace(/\s+/g,' ').trim();
 const sourceLink=(href,label)=>`<a class="watch-source" href="${href}" target="_blank" rel="noopener">${label} ↗</a>`;

 document.querySelectorAll('.rail-card h3,.reportage-card h4').forEach(heading=>{
  if(clean(heading.textContent).toUpperCase().includes('NEXT RECORDS'))heading.closest('.rail-card,.reportage-card')?.remove();
 });
 document.querySelectorAll('.verification-note,.fact-analysis').forEach(node=>node.remove());

 const politicsEvidence=document.querySelector('#reportage-politics .reportage-evidence');
 if(politicsEvidence){
  politicsEvidence.classList.add('reportage-evidence--two');
  politicsEvidence.innerHTML=`
   <div class="reportage-card"><h4>확인된 조치</h4><ul><li>167명에게 수여된 정부포상 198건 취소</li><li>관계기관 검증과 사전통지·심의 절차 진행</li><li>국무회의 의결을 거쳐 포상 상태 변경</li></ul></div>
   <div class="reportage-card"><h4>아직 확인할 것</h4><ul><li>개별 취소 근거의 공개 수준</li><li>기관 기록·전시·교육자료의 정정 책임과 기한</li><li>피해자 기록 정정과 보상 절차의 연결</li><li>방첩 기능 재편 뒤 외부 감독 규정</li></ul></div>`;
 }

 const tech=document.getElementById('tech');
 if(tech){
  const title=tech.querySelector('.article-head h2');
  if(title)title.innerHTML='개인정보 제재 <span class="no-break">6,804억 원</span><br>데이터 설계가 경영 책임이 됐다';
  const metrics=tech.querySelector('.big-numbers');
  if(metrics){
   metrics.classList.add('privacy-metrics');
   const cards=[...metrics.querySelectorAll('.big-number')];
   cards.forEach(card=>{card.classList.add('privacy-metric');card.removeAttribute('style');card.querySelectorAll('[style]').forEach(node=>node.removeAttribute('style'));});
   if(cards[0]?.querySelector('b'))cards[0].querySelector('b').innerHTML='<span class="no-break">6,804억 원</span>';
  }
 }

 const data=document.getElementById('data');
 if(data){
  const board=data.querySelector('.data-board');
  if(board){
   board.className='data-metrics-grid';
   board.innerHTML=`
    <article class="data-metric-card"><span class="metric-section">COVER / AI</span><div class="metric-value"><span class="no-break">$950B</span></div><h3>AI·반도체 협력 발표 규모</h3><p>확정 집행액이 아니라 정부 발표에 포함된 협력 구상의 총액이다.</p><span class="metric-kind">발표</span></article>
    <article class="data-metric-card"><span class="metric-section">ECONOMY / TRADE</span><div class="metric-value"><span class="no-break">12.5%</span></div><h3>Section 301 총관세율 기준</h3><p>품목별 최혜국세율과 예외 적용을 함께 확인해야 실제 부담이 정해진다.</p><span class="metric-kind">최종 조치</span></article>
    <article class="data-metric-card"><span class="metric-section">MACRO</span><div class="metric-value"><span class="no-break">+0.6%</span></div><h3>2분기 실질 GDP 전분기 대비</h3><p>속보치이므로 소비·투자 구성과 이후 수정치를 함께 봐야 한다.</p><span class="metric-kind">통계</span></article>
    <article class="data-metric-card"><span class="metric-section">POLITICS / RECORDS</span><div class="metric-value"><span class="no-break">198건</span></div><h3>취소된 정부포상</h3><p>의결 이후 파생 기록 정정과 피해 회복 절차가 후속 평가 대상이다.</p><span class="metric-kind">행정 조치</span></article>
    <article class="data-metric-card"><span class="metric-section">SOCIETY / HEALTH</span><div class="metric-value"><span class="no-break">5극3특</span></div><h3>지역완결형 의료망 구상</h3><p>병원 수보다 수용 확정 시간과 전원 책임의 변화로 성과를 판단한다.</p><span class="metric-kind">정책 구상</span></article>
    <article class="data-metric-card"><span class="metric-section">TECH / PRIVACY</span><div class="metric-value"><span class="no-break">6,804억 원</span></div><h3>상반기 과징금·과태료</h3><p>개인정보 침해가 데이터 설계와 경영 책임의 재무 위험으로 이동했음을 보여준다.</p><span class="metric-kind">집계</span></article>`;
  }
  const timeline=data.querySelector('.timeline');
  if(timeline){
   const spacer=timeline.previousElementSibling;
   timeline.remove();
   if(spacer&&spacer instanceof HTMLElement&&!clean(spacer.textContent)&&spacer.hasAttribute('style'))spacer.remove();
  }
 }

 const watch=document.getElementById('watch');
 if(watch){
  const grid=watch.querySelector('.watch-grid');
  if(grid)grid.innerHTML=`
   <article class="watch watch-record" data-watch-state="pending"><div class="watch-topline"><div class="when">AI / PROJECT DISCLOSURE</div><span class="watch-state">후속 문서 대기</span></div><h3>9,500억 달러 협력의 사업별 내역</h3><dl class="watch-meta"><div><dt>발표 주체</dt><dd>대한민국 정부·참여 기업</dd></div><div><dt>확인 문서</dt><dd>기업별 계약·공시, 전력계통 접속 승인, 부지·착공 일정</dd></div><div><dt>판단 기준</dt><dd>신규 확정액, 투자 책임 주체, 집행 시점이 분리돼 공개되는가</dd></div></dl>${sourceLink('https://www.korea.kr/multi/visualNewsView.do?newsId=148968898','정부 공식 자료')}</article>
   <article class="watch watch-record" data-watch-state="pending"><div class="watch-topline"><div class="when">TRADE / CUSTOMS</div><span class="watch-state">집행 지침 대기</span></div><h3>Section 301 품목별 실제 관세 부담</h3><dl class="watch-meta"><div><dt>발표 주체</dt><dd>USTR·미국 세관국경보호국</dd></div><div><dt>확인 문서</dt><dd>CBP 집행 지침, HS 코드별 세율표, 예외 목록</dd></div><div><dt>판단 기준</dt><dd>품목별 적용일·예외·수입자 부담이 계약가격에 어떻게 반영되는가</dd></div></dl>${sourceLink('https://ustr.gov/about/policy-offices/press-office/press-releases/2026/july/ustr-takes-action-forced-labor-section-301-investigations','USTR 최종 조치')}</article>
   <article class="watch watch-record" data-watch-state="pending"><div class="watch-topline"><div class="when">MACRO / TRANSMISSION</div><span class="watch-state">세부 통계 대기</span></div><h3>GDI 개선이 소비·투자로 이어지는가</h3><dl class="watch-meta"><div><dt>발표 주체</dt><dd>한국은행</dd></div><div><dt>확인 문서</dt><dd>GDP 잠정치와 지출·산업별 세부표</dd></div><div><dt>판단 기준</dt><dd>민간소비·설비투자·실질임금 개선이 함께 나타나는가</dd></div></dl>${sourceLink('https://www.bok.or.kr/portal/bbs/B0000501/view.do?depth=201264&menuNo=201264&nttId=11063107&programType=newsData&relate=Y','한국은행 속보치')}</article>
   <article class="watch watch-record" data-watch-state="pending"><div class="watch-topline"><div class="when">HEALTH / IMPLEMENTATION</div><span class="watch-state">실행표 대기</span></div><h3>5극3특 의료망의 예산·수가·인력표</h3><dl class="watch-meta"><div><dt>발표 주체</dt><dd>보건복지부·지역 조정기관</dd></div><div><dt>확인 문서</dt><dd>시범지역, 전원조정 권한, 응급·중증 수가와 인력 계획</dd></div><div><dt>판단 기준</dt><dd>수용 확정 시간과 거절 횟수, 책임 기관이 공개되는가</dd></div></dl>${sourceLink('https://www.korea.kr/news/policyNewsView.do?newsId=148968583','지역의료 추진전략')}</article>
   <article class="watch watch-record" data-watch-state="pending"><div class="watch-topline"><div class="when">PRIVACY / RULEMAKING</div><span class="watch-state">하위 규정 대기</span></div><h3>매출 10% 과징금의 적용 기준</h3><dl class="watch-meta"><div><dt>발표 주체</dt><dd>개인정보보호위원회</dd></div><div><dt>확인 문서</dt><dd>징벌적 과징금 산정 기준과 감경·자진신고 지침</dd></div><div><dt>판단 기준</dt><dd>관련 매출 범위와 위반 중대성, 시정조치가 어떻게 계산되는가</dd></div></dl>${sourceLink('https://www.pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS212&mCode=C040030000&nttId=12293','개인정보위 공식 자료')}</article>
   <article class="watch watch-record" data-watch-state="pending"><div class="watch-topline"><div class="when">POLITICS / RECORDS</div><span class="watch-state">후속 조치 대기</span></div><h3>서훈 취소 이후 피해회복 연계</h3><dl class="watch-meta"><div><dt>발표 주체</dt><dd>행정안전부·관계기관</dd></div><div><dt>확인 문서</dt><dd>개별 취소 근거, 파생 기록 정정 계획, 피해자 지원 연계표</dd></div><div><dt>판단 기준</dt><dd>정정 책임과 기한, 보상·배상 절차 연결이 공개되는가</dd></div></dl>${sourceLink('https://www.mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000008&nttId=128014','행정안전부 발표')}</article>`;
 }

 const footerKicker=document.querySelector('.footer .kicker');
 if(footerKicker)footerKicker.textContent='WEEKLY SIGNAL · ISSUE 01 · EDITORIAL MODEL V25';
 document.documentElement.dataset.contentEdition='issue-01-editorial-v25';
})();
