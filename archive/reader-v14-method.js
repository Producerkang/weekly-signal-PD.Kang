(()=>{
 const method=document.querySelector('.section.method');if(method){
  method.innerHTML=`<div class="wrap"><div class="rule-title"><span>10</span><span>Sources</span></div><h2 class="section-title">이번 호에 사용한<br>1차 자료</h2><p class="source-intro">기사의 사실관계와 수치는 아래 정부·규제기관·중앙은행·기업의 공식 문서에서 확인했습니다.</p><div class="source-list"><div class="source"><div class="org">대한민국 정부</div><a href="https://www.korea.kr/multi/visualNewsView.do?newsId=148968898" target="_blank" rel="noopener">샌프란시스코 AI 서밋 주요 성과</a><time>2026.07.24</time></div><div class="source"><div class="org">대통령실</div><a href="https://www.korea.kr/briefing/presidentView.do?newsId=148968787" target="_blank" rel="noopener">샌프란시스코 AI 행사 결과 브리핑</a><time>2026.07.25</time></div><div class="source"><div class="org">삼성전자</div><a href="https://news.samsung.com/global/samsung-electronics-and-broadcom-expand-strategic-collaboration-across-memory-and-foundry-technologies" target="_blank" rel="noopener">Samsung–Broadcom Strategic Collaboration</a><time>2026.07.25</time></div><div class="source"><div class="org">USTR</div><a href="https://ustr.gov/about/policy-offices/press-office/press-releases/2026/july/ustr-takes-action-forced-labor-section-301-investigations" target="_blank" rel="noopener">Forced Labor Section 301 Final Action</a><time>2026.07.23</time></div><div class="source"><div class="org">행정안전부</div><a href="https://www.mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000008&amp;nttId=128014" target="_blank" rel="noopener">반헌법적 행위·간첩조작사건 관련 정부포상 취소</a><time>2026.07.21</time></div><div class="source"><div class="org">보건복지부</div><a href="https://www.korea.kr/news/policyNewsView.do?newsId=148968583" target="_blank" rel="noopener">지역·필수·공공의료 강화 추진전략</a><time>2026.07.22</time></div><div class="source"><div class="org">개인정보위</div><a href="https://www.pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS212&amp;mCode=C040030000&amp;nttId=12293" target="_blank" rel="noopener">2026년 상반기 개인정보 보호·활용의 변화</a><time>2026.07.20</time></div><div class="source"><div class="org">개인정보위</div><a href="https://www.pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS074&amp;nttId=12330" target="_blank" rel="noopener">틱톡·애플 개인정보 보호법 위반 제재</a><time>2026.07.23</time></div><div class="source"><div class="org">한국은행</div><a href="https://www.bok.or.kr/portal/bbs/B0000501/view.do?depth=201264&amp;menuNo=201264&amp;nttId=11063107&amp;programType=newsData&amp;relate=Y" target="_blank" rel="noopener">2026년 2/4분기 실질 국내총생산(속보)</a><time>2026.07.23</time></div></div></div>`;
 }
 const numbering={
  'cover-story':'03',economy:'04',politics:'05',society:'06',tech:'07',data:'08',watch:'09'
 };
 const contexts={
  'cover-story':'이번 주의 가장 큰 산업 발표를 실행 조건으로 검증한다',
  economy:'관세가 공급계약과 납품원가로 이동하는 경로',
  politics:'국가의 판단을 기록과 절차로 남기는 책임',
  society:'환자가 이동하는 시간으로 지역의료망을 평가한다',
  tech:'AI 도입 전에 데이터의 위치와 삭제 가능성을 묻는다',
  data:'서로 다른 성격의 핵심 수치 여섯 개를 분리해 읽는다',
  watch:'발표 주체·후속 문서·판단 기준을 함께 추적한다'
 };
 Object.entries(numbering).forEach(([id,num])=>{
  const section=document.querySelector(`#${id}`);
  const rule=section?.querySelector('.rule-title');
  const number=rule?.querySelector('span:first-child');
  if(number)number.textContent=num;
  if(rule&&!rule.querySelector('.rule-context')){
   const context=document.createElement('span');
   context.className='rule-context';
   context.textContent=contexts[id];
   rule.append(context);
  }
  document.querySelectorAll(`a[href="#chapter-${id}"]`).forEach(link=>link.setAttribute('href',`#${id}`));
  const opener=document.querySelector(`#chapter-${id}`);if(opener)opener.remove();
 });
})();
