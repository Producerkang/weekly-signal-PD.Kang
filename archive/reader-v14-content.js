(()=>{
 const $=(s,r=document)=>r.querySelector(s);
 const esc=v=>v||'';
 const coverBg=$('#top .cover-bg')?.src||'';
 const images={};['cover-story','economy','politics','society','tech'].forEach(id=>images[id]=$(`#${id} img`)?.src||'');
 const reportages=(window.WEEKLY_SIGNAL_REFINEMENT&&window.WEEKLY_SIGNAL_REFINEMENT.reportages)||{};
 const verification=(fact,analysis)=>`<section class="verification-note" aria-label="기사 검증 메모"><header class="verification-head"><div class="verification-kicker">EDITORIAL CHECK</div><h3>기사 검증 메모</h3></header><div class="verification-grid"><article class="verification-card"><h4>확인된 사실</h4><p>${fact}</p></article><article class="verification-card analysis"><h4>편집부 해석</h4><p>${analysis}</p></article></div></section>`;
 const sourceLinks=items=>`<div class="source-links">${items.map(i=>`<a href="${i.href}" target="_blank" rel="noopener"><b>${i.org}</b><span>${i.title}</span><span>${i.date}</span></a>`).join('')}</div>`;
 const rail=items=>items.map(i=>`<div class="rail-card${i.dark?' dark-card':''}">${i.label?`<h3>${i.label}</h3>`:''}${i.num?`<div class="rail-number">${i.num}</div>`:''}<div class="rail-unit">${i.text}</div></div>`).join('');
 const updateArticle=(id,cfg)=>{
  const section=$('#'+id);if(!section)return;
  const img=images[id]?`<img class="section-visual" src="${images[id]}" alt="${cfg.alt}" loading="lazy">`:'';
  section.innerHTML=`<div class="wrap"><div class="rule-title"><span>${cfg.num}</span><span>${cfg.rule}</span></div><div class="article-head"><div class="article-label"><span></span>${cfg.label}</div><h2>${cfg.title}</h2><p class="dek${section.classList.contains('dark')?' muted':''}">${cfg.dek}</p></div><div class="article-shell"><article class="article-main">${img}<div class="editorial-thesis">${cfg.thesis}</div><div class="article-body">${cfg.body}</div>${verification(cfg.fact,cfg.analysis)}${sourceLinks(cfg.sources)}</article><aside class="article-rail">${rail(cfg.rail)}</aside></div></div>${cfg.reportage||''}`;
 };

 document.title='WEEKLY SIGNAL — 9,500억 달러 AI 선언, 성패는 전력과 계약서에서 갈린다';
 const cover=$('#top');
 if(cover){cover.innerHTML=`${coverBg?`<img class="cover-bg" src="${coverBg}" alt="AI 데이터센터와 반도체 공급망을 표현한 생성 이미지">`:''}<div class="cover-content"><div><div class="kicker">WEEKLY SIGNAL · ISSUE 01 · 2026.07.20—07.26</div><h1>9,500억 달러 AI 선언,<br>성패는 전력과 계약서에서 갈린다</h1><p class="cover-deck">AI·반도체 협력의 거대한 숫자를 그대로 받아 적지 않았다. 계약, 전력계통, 가동률과 실제 고객이라는 네 개의 실행 조건으로 다시 읽었다.</p><div class="cover-path"><div><b>01</b><span><strong>발표</strong>협력 규모와 방향을 제시한다</span></div><div><b>02</b><span><strong>계약</strong>구매 의무·최소 물량·투자 주체를 확정한다</span></div><div><b>03</b><span><strong>가동</strong>전력·부지·냉각·인허가를 연결한다</span></div><div><b>04</b><span><strong>수익</strong>GPU 사용량과 고객 매출로 성과를 증명한다</span></div></div></div><aside class="cover-meta"><span class="cover-badge">FROM ANNOUNCEMENT TO EXECUTION</span><div><strong>이번 호의 중심 질문</strong>발표된 산업정책이 실제 생산과 서비스로 바뀌는 순간은 언제인가.</div><div><strong>분야별 독립 기사</strong>경제는 관세, 정치는 국가 기록, 사회는 지역의료, 테크는 개인정보 통제를 각각 다룹니다.</div><div><strong>발행 기간</strong>2026년 7월 20일—26일</div></aside></div>`;}

 const contents=$('#contents .contents-inner');
 if(contents){
  const items=[
   ['01','OPENING','사건을 나열하지 않고 판단 기준을 만든다','이번 호는 서로 다른 이슈를 하나의 주제로 억지로 묶지 않는다.','#opening'],
   ['02','LIFE SCENE','AI가 느려진 월요일, 팀은 계약서를 다시 읽었다','대규모 AI 인프라 발표가 작은 회사의 일정과 비용에 닿는 경로.','#life-scene'],
   ['03','COVER STORY','9,500억 달러 AI 선언, 성패는 전력과 계약서에서 갈린다','협력 총액을 실행 실적으로 바꾸는 네 가지 조건을 분석한다.','#chapter-cover-story'],
   ['04','ECONOMY','강제노동 규범이 관세표로 들어왔다','한국 기업의 원가에 공급망 증명 비용이 더해지는 구조.','#chapter-economy'],
   ['05','POLITICS','서훈 198건 취소, 국가 기록은 어디까지 고쳐야 하나','취소 의결 뒤 파생 기록과 피해 회복까지 남은 책임.','#chapter-politics'],
   ['06','SOCIETY','5극3특 의료망, 지도보다 전원 책임이 먼저다','병원 수가 아니라 환자 이동의 지연과 거절을 줄이는 설계.','#chapter-society'],
   ['07','TECH','개인정보 과징금 6,804억 원, AI는 데이터 지도부터 시작한다','모델 도입보다 먼저 데이터 위치와 삭제 가능성을 통제해야 한다.','#chapter-tech'],
   ['08','DATA','숫자와 문서로 다시 본 한 주','발표 규모와 실제 성과지표를 구분한다.','#chapter-data'],
   ['09','WATCH','발표 뒤의 계약·시행령·성과지표','다음 주 확인할 후속 문서와 판단 기준.','#chapter-watch']
  ];
  contents.innerHTML=`<header class="contents-head"><div><span>WEEKLY SIGNAL</span><h2>CONTENTS</h2></div><p>2026.07.20—07.26<br>각 항목을 누르면 해당 지면으로 이동합니다.</p></header><div class="contents-grid">${items.map(i=>`<a class="toc-item${i[0]==='03'?' featured':''}" href="${i[4]}"><div class="toc-meta"><span class="toc-num">${i[0]}</span><span class="toc-label">${i[1]}</span></div><div class="toc-copy"><strong>${i[2]}</strong><p>${i[3]}</p></div></a>`).join('')}</div>`;
 }

 const life=$('#life-scene .life-inner');
 if(life){life.innerHTML=`<header class="life-head"><div class="life-kicker">LIFE SCENE · 가상 인물, 실제 산업 구조 기반 재구성</div><h2>AI가 느려진 월요일,<br>팀은 계약서를 다시 읽었다</h2><p>대규모 AI 인프라 발표가 작은 회사의 시간표와 비용에 도착하는 방식</p></header><div class="life-layout"><figure class="life-illustration" aria-label="노트북의 AI 서비스 지연 화면을 바라보는 직장인의 생성 이미지"><figcaption>편집용 생성 이미지 · 인물과 회사, 구체적 상황은 가상입니다.</figcaption></figure><article class="life-story"><p class="life-lead">서울의 12명 규모 콘텐츠 제작사에서 일하는 서지훈 씨는 월요일 오전 회의 전에 세 개의 AI 서비스를 연다. 회의록 정리, 번역, 이미지 초안이 각각 다른 서비스에 묶여 있다. 어느 하나가 느려지면 사람은 기다리지 않고 다른 일을 시작하지만, 업무 순서는 즉시 흐트러진다.</p><p>이 장면은 특정 장애를 재현한 것이 아니다. 다만 AI가 실험용 도구에서 일상 업무의 공정으로 이동하면 응답 속도, 사용 한도, 데이터 처리조건과 월 비용이 생산 일정의 일부가 된다는 구조를 보여준다. 국가가 GPU와 데이터센터를 확보해도 사용자가 안정된 가격과 품질로 접근하지 못하면 산업정책의 성과는 회사의 작업표까지 내려오지 않는다.</p><p>팀장은 무료 플랜과 유료 플랜의 기능 차이보다 계약서의 세 조항을 다시 본다. 서비스 중단 때 보상은 있는지, 입력한 고객 자료가 학습에 사용되는지, 데이터를 삭제하면 백업과 파생본까지 처리되는지다. 모델의 성능 비교표에는 잘 보이지 않지만 실제 도입을 결정하는 항목들이다.</p><p>오후에는 핵심 작업을 두 서비스에 나눠 두고, 원문 파일과 검토 기준은 사내 저장소에 남기기로 한다. 비용은 조금 늘지만 한 공급자에게 일정 전체를 맡기는 위험을 줄인다. AI를 덜 쓰는 선택이 아니라 AI가 항상 같은 조건으로 작동한다는 전제를 버린 선택이다.</p><p>서 씨의 하루가 커버스토리와 연결되는 지점은 명확하다. 9,500억 달러, 5GW, GPU 200만 장이라는 발표가 의미를 가지려면 결국 작은 조직이 지연시간과 요금, 데이터 조건을 예측할 수 있어야 한다. 거대한 공급망의 마지막 성과지표는 평범한 팀의 작업이 제시간에 끝나는가이다.</p><aside class="life-context"><strong>사실의 경계</strong><p>인물·회사·서비스 지연과 내부 결정은 가상입니다. AI 서비스가 반도체, 데이터센터, 전력, 클라우드 계약과 연결되고 기업 도입에서 가격·가용성·데이터 통제가 중요하다는 분석을 생활 장면으로 재구성했습니다.</p></aside></article></div>`;}

 const opening=$('#opening');
 if(opening){opening.innerHTML=`<div class="wrap"><div class="rule-title"><span>01</span><span>Opening / Editorial Frame</span></div><div class="opening"><div><h2>이번 호는 하나의 주제가 아니라<br>다섯 개의 분명한 질문으로 읽는다</h2><p class="lede">한 주의 사건을 억지로 한 줄에 꿰면 연결은 생기지만 정보는 흐려진다. 이번 호는 커버스토리만 가장 큰 산업 질문을 맡고, 경제·정치·사회·테크는 각 분야의 독립된 대표 이슈를 선택했다.</p><div class="prose"><p>선정 기준은 화제성이 아니라 의사결정을 바꾸는가이다. AI 협력 발표는 투자와 전력계획을, 강제노동 관세는 공급계약을, 서훈 취소는 국가 기록을, 지역의료망은 환자 이동을, 개인정보 집행은 기업의 데이터 설계를 바꾼다.</p><p>각 기사는 먼저 핵심 명제를 한 문장으로 정했다. 그 다음 사건·수치·절차라는 서로 다른 근거를 배치하고, 영향과 반론, 다음 확인 문서를 순서대로 적었다. 제목은 원고가 끝난 뒤 대상과 변화가 드러나도록 다시 붙였다.</p><p>LIFE SCENE은 커버스토리에서 확인한 산업 경로를 작은 회사의 하루로 옮겼다. 르포는 대표 기사를 반복하지 않고 문서가 실제 조직 안에서 이동하는 순서를 추적한다.</p></div></div><aside class="editor-note"><div class="kicker">EDITOR'S NOTE</div><p class="big">좋은 주간지는<br>사건보다 판단 기준을 남긴다.</p><p>이번 재구성은 향후 발행의 내용 모델을 검증하는 첫 호입니다. 분야별 핵심 명제가 분명한지, 근거가 결론까지 이어지는지를 우선했습니다.</p></aside></div></div>`;}

 updateArticle('cover-story',{
  num:'02',rule:'Cover Story / AI Industrial Execution',label:'Infrastructure / Contract / Demand',
  title:'9,500억 달러 AI 선언,<br>성패는 전력과 계약서에서 갈린다',
  dek:'정부와 기업은 반도체 협력 9,500억 달러, 약 5GW 데이터센터와 B200 환산 GPU 200만 장 규모의 협력 구상을 제시했다. 숫자는 방향을 보여주지만 집행액과 가동실적은 아니다.',
  alt:'AI 반도체와 데이터센터 공급망을 표현한 생성 이미지',
  thesis:'AI 산업정책의 성과는 확보한 GPU 수가 아니라 계약된 수요, 계통에 연결된 전력, 실제 가동률과 고객 매출로 판단해야 한다.',
  body:`<h3>발표된 총액과 집행액은 다르다</h3><p>샌프란시스코 AI 서밋에서 공개된 숫자는 한국을 AI 생산기지와 협력 플랫폼으로 만들겠다는 방향을 압축한다. 그러나 여러 기업의 장기 구매 가능성, 기존 계획, 신규 투자와 협력 의향이 함께 묶인 총액은 바로 매출이나 설비투자로 기록되지 않는다. 프로젝트별 계약에서 구매 의무, 최소 물량, 투자 주체와 집행 시점이 확인돼야 한다.</p><p>정부 발표를 평가할 때 가장 먼저 필요한 것은 합계보다 분해표다. 어떤 사업이 신규인지, 국내 투자와 해외 투자가 어떻게 나뉘는지, 양해각서와 구속력 있는 계약이 각각 얼마인지가 공개돼야 정책의 추가 효과를 계산할 수 있다.</p><h3>5GW는 데이터센터보다 전력망의 숫자다</h3><p>약 5GW 규모의 데이터센터 구상은 서버 건물만으로 완성되지 않는다. 발전원, 송전망, 변전소, 계통접속 승인, 냉각과 부지 인허가가 같은 일정에 맞아야 한다. 전력 공급이 늦어지면 GPU를 확보해도 가동률이 올라가지 않고, 지역 전력망의 보강 비용이 사업비 밖으로 밀릴 수 있다.</p><p>따라서 착공 발표보다 계통접속 계약과 단계별 전력 인입 일정이 중요하다. 지역사회가 부담할 송전선로와 용수, 열 배출 문제도 사업별로 공개돼야 한다.</p><h3>반도체 협력은 제품 판매보다 공동 최적화에 가깝다</h3><p>삼성전자와 브로드컴이 제시한 메모리·파운드리·첨단 패키징 협력은 AI 칩 경쟁이 연산코어 하나로 끝나지 않는다는 점을 보여준다. HBM 대역폭, 공정 수율, 칩렛 연결, 패키징과 열 관리가 동시에 맞아야 한다. 공급자는 부품을 납품하는 관계에서 설계와 생산을 함께 조정하는 관계로 이동한다.</p><p>이 구조는 기회를 넓히지만 선행투자와 고객 집중 위험도 키운다. 실제 성과는 수주 공시, 생산라인 배정, 양산 수율과 고객 다변화에서 확인해야 한다.</p><h3>마지막 질문은 누가 사용할 것인가다</h3><p>GPU와 전력을 확보해도 지속적으로 비용을 지불할 고객이 없으면 인프라는 자산이 아니라 고정비가 된다. 중소기업과 공공기관이 접근할 가격, 데이터 반출입 조건, 서비스 안정성과 국내 사업자의 매출을 함께 봐야 한다. AI 공급망의 마지막 고리는 장비가 아니라 반복적으로 사용하는 고객이다.</p><div class="argument-grid"><div class="argument-card"><b>CONTRACT</b><h3>약정의 강도</h3><p>MOU, 구매계약, 최소 물량과 해지 조건을 구분한다.</p></div><div class="argument-card"><b>GRID</b><h3>가동 가능한 전력</h3><p>발전량보다 계통접속과 단계별 인입 일정을 본다.</p></div><div class="argument-card"><b>DEMAND</b><h3>지불하는 고객</h3><p>GPU 수보다 사용률과 서비스 매출을 확인한다.</p></div></div>`,
  fact:'정부는 7월 24~25일 반도체 협력 9,500억 달러, 약 5GW 데이터센터와 GPU 200만 장 규모의 협력 추진 구상을 공개했다. 삼성전자와 브로드컴은 메모리·파운드리·첨단 패키징 협력을 발표했다.',
  analysis:'발표 규모는 실행 실적과 동일하지 않다. 프로젝트별 계약, 계통접속, 인허가, 양산과 고객 사용 데이터가 뒤따라야 산업정책의 추가 효과를 평가할 수 있다.',
  sources:[{org:'대한민국 정부',title:'샌프란시스코 AI 서밋 주요 성과',date:'2026.07.24',href:'https://www.korea.kr/multi/visualNewsView.do?newsId=148968898'},{org:'청와대',title:'샌프란시스코 AI 행사 결과 브리핑',date:'2026.07.25',href:'https://www.korea.kr/briefing/presidentView.do?newsId=148968787'},{org:'삼성전자',title:'Samsung–Broadcom Strategic Collaboration',date:'2026.07.25',href:'https://news.samsung.com/global/samsung-electronics-and-broadcom-expand-strategic-collaboration-across-memory-and-foundry-technologies'}],
  rail:[{label:'ANNOUNCED SCALE',num:'$950B',text:'반도체 분야 협력 추진 규모',dark:true},{num:'5GW',text:'AI 데이터센터 협력 구상',dark:true},{num:'200만',text:'B200 환산 GPU 활용 기반',dark:true},{label:'NEXT DOCUMENTS',text:'기업별 계약 · 계통접속 · 부지 인허가 · 양산 일정'}]
 });

 updateArticle('economy',{
  num:'03',rule:'Economy / Trade Compliance',label:'Tariff / Supply-chain Evidence',
  title:'강제노동 규범이 관세표로 들어왔다',
  dek:'미국 무역대표부는 강제노동 생산품 수입금지 제도를 충분히 시행하지 않는 60개 경제권에 Section 301 관세 조치를 확정했다. 한국 기업에는 인권 실사가 평판이 아니라 원가와 통관의 문제가 됐다.',
  alt:'글로벌 물류와 공급계약을 표현한 생성 이미지',
  thesis:'새 관세의 핵심 비용은 세율만이 아니다. 부품명세서부터 하위 공급자 증빙까지 제품의 생산 경로를 설명하는 비용이 납품단가에 포함된다.',
  body:`<h3>한국산 일부 품목에는 10% 또는 12.5%가 적용된다</h3><p>USTR 최종 조치는 한국·일본·대만·유럽연합·스위스의 특정 비면제 품목에 기존 최혜국세율을 고려한 10% 또는 12.5%의 Section 301 관세를 적용한다고 밝혔다. 원료 부족이나 경제 전반의 혼란을 일으킬 수 있는 품목 등에는 예외가 설정됐다.</p><p>따라서 기업의 실제 부담은 국가명만으로 계산되지 않는다. HS 코드, 기존 세율, 예외 여부와 계약상 관세 부담 주체를 함께 확인해야 한다.</p><h3>규범은 정부에서 기업의 부품표로 이동한다</h3><p>이번 조치는 상대국 정부의 수입금지 제도 미비를 문제 삼지만, 통관 과정에서 기업이 준비해야 할 것은 제품별 공급망 설명이다. 완제품 원산지만으로는 부족하고 원료, 재하도급 공장, 감사 이력과 자료 제출 가능성을 연결해야 한다.</p><p>구매부서가 가격과 납기만으로 공급자를 선정하고 준법부서가 뒤늦게 증빙을 요청하면 가장 싼 조달이 가장 비싼 통관 위험으로 바뀔 수 있다. 공급자 평가표에 노동·원산지·추적성 항목을 처음부터 포함해야 한다.</p><h3>관세는 협상력이 약한 곳으로 이동한다</h3><p>미국 수입자가 세관에 관세를 내더라도 경제적 부담은 계약에 따라 한국 공급자, 하위 협력사나 소비자에게 옮겨갈 수 있다. 법령 변경 때 가격조정, 자료 미제출 때 거래중단, 감사 비용과 통관 지연 책임을 나눠 적지 않으면 납품가 협상에서 분쟁이 발생한다.</p><p>중소 협력사에는 여러 고객사의 서로 다른 실사 양식에 대응하는 비용이 더 큰 문제다. 공통 데이터 형식과 공동 감사가 없으면 문서 작성 능력의 차이가 거래 기회의 차이가 된다.</p><h3>다음 단계는 증빙을 경영정보로 연결하는 일이다</h3><p>품목별 세율, 예외, 계약상 부담 주체와 실제 정산액을 제품 식별자에 연결해야 손익을 계산할 수 있다. 관세 대응은 통관팀의 일회성 업무가 아니라 설계·구매·영업·재무가 같은 제품 데이터를 사용하는 체계로 바뀌고 있다.</p>`,
  fact:'USTR는 7월 23일 60개 경제권을 대상으로 최종 조치를 발표했고, 한국의 특정 비면제 품목에는 MFN 세율을 고려한 10% 또는 12.5%의 Section 301 관세를 적용한다고 밝혔다.',
  analysis:'관세 충격의 크기는 표면 세율보다 품목분류, 예외, 계약조건과 공급망 증빙 역량에 좌우된다. 중소 협력사의 공동 실사와 표준 데이터 지원이 없으면 규범 비용이 거래 배제로 이어질 수 있다.',
  sources:[{org:'USTR',title:'Forced Labor Section 301 Final Action',date:'2026.07.23',href:'https://ustr.gov/about/policy-offices/press-office/press-releases/2026/july/ustr-takes-action-forced-labor-section-301-investigations'}],
  rail:[{label:'INVESTIGATIONS',num:'60',text:'최종 조치 대상 경제권'},{num:'10% / 12.5%',text:'한국 특정 비면제 품목 적용 구조'},{num:'2,100+',text:'조사 과정의 1차 공개의견'},{label:'COMPANY CHECK',text:'HS 코드 · 예외 · 인도조건 · 하위 공급자 증빙'}],reportage:reportages.economy||''
 });

 updateArticle('politics',{
  num:'04',rule:'Politics / Public Record',label:'Constitution / Recognition / Repair',
  title:'서훈 198건 취소,<br>국가 기록은 어디까지 고쳐야 하나',
  dek:'정부는 반헌법적 행위와 간첩조작사건 관련자 167명에게 수여된 정부포상 198건을 취소했다. 의결은 과거 평가를 바로잡는 시작이지만 기록 정정과 피해 회복은 별도의 행정 경로를 요구한다.',
  alt:'공공 기록과 국가 상징을 표현한 생성 이미지',
  thesis:'국가가 잘못된 포상을 취소했다면 상훈대장뿐 아니라 기관 연혁, 전시·교육자료와 피해자 기록까지 같은 이유와 정정 이력을 남겨야 한다.',
  body:`<h3>취소는 상징이면서 행정처분이다</h3><p>이번 조치에는 12·12 군사반란, 5·18 민주화운동과 계엄업무 관련자, 간첩조작사건 관련자에게 수여된 훈장·포장과 표창이 포함됐다. 정부는 상훈 기록과 국무회의 자료, 재심 판결과 진실규명 결과를 토대로 관계기관 검증과 사전통지, 공적심사를 거쳤다고 설명했다.</p><p>규모만큼 중요한 것은 기준이다. 어떤 판결과 조사결과가 취소 사유가 됐는지, 비슷한 사건에 동일한 기준을 적용했는지, 당사자의 의견 제출 절차가 어떻게 보장됐는지가 공개돼야 판단의 일관성을 확인할 수 있다.</p><h3>기록을 지우는 것이 아니라 상태를 바꿔야 한다</h3><p>과거 수여 사실을 완전히 삭제하면 국가가 왜 판단을 바꿨는지 추적할 수 없다. 반대로 취소 표기를 누락하면 이전의 국가 승인이 계속 유효한 것처럼 보인다. 원기록을 보존하면서 현재 법적 상태와 근거 문서를 연결하는 방식이 필요하다.</p><p>정부포상 정보는 상훈 시스템에만 머물지 않는다. 기관 연혁, 인물 소개, 박물관 전시, 보도자료와 교육자료에 복제된다. 중앙 기록이 바뀐 뒤 파생 기록을 어느 기관이 언제까지 정정할지까지 정해야 행정이 완결된다.</p><h3>피해 회복은 자동으로 이어지지 않는다</h3><p>가해 행위 관련 포상이 취소돼도 피해자의 형사기록, 보상과 생활 피해가 자동으로 복구되는 것은 아니다. 재심, 형사보상, 국가배상, 기록 정정과 추모사업은 서로 다른 법과 기관을 거친다.</p><p>후속 성과는 취소 건수만으로 평가하기 어렵다. 취소 대상 사건 가운데 피해자 기록 정정과 보상 절차가 연결된 비율, 관련 자료의 공개와 보존 상태를 함께 공개해야 한다.</p><h3>정치의 책임은 다음 정부도 검증할 수 있게 만드는 것</h3><p>대규모 과거사 정비는 정부의 가치 판단을 드러낸다. 그 판단이 정권에 따라 반복적으로 뒤집히지 않으려면 근거, 절차와 정정 이력이 충분히 남아야 한다. 기록 공개가 정치적 선언을 제도적 책임으로 바꾸는 장치다.</p>`,
  fact:'정부는 7월 21일 167명이 받은 정부포상 198건의 취소를 의결했다. 경찰은 약 10만 건의 정부포상을 전수조사했고 관계기관은 판결·진실규명 결과와 공적자료를 검토했다고 밝혔다.',
  analysis:'상훈대장 변경만으로 국가 기억의 정정이 끝나지 않는다. 파생 기록과 피해자 회복 절차를 연결하고 취소 근거와 정정 이력을 공개해야 조치의 실질성을 평가할 수 있다.',
  sources:[{org:'행정안전부 외',title:'반헌법적 행위·간첩조작사건 관련 정부포상 취소',date:'2026.07.21',href:'https://www.korea.kr/news/policyNewsView.do?newsId=148968503'}],
  rail:[{label:'CANCELLED',num:'198',text:'취소된 정부포상'},{num:'167명',text:'취소 대상 수훈자'},{num:'약 10만',text:'경찰 전수조사 포상 기록'},{label:'NEXT RECORDS',text:'상훈대장 · 기관 연혁 · 전시·교육자료 · 피해자 기록'}],reportage:reportages.politics||''
 });

 updateArticle('society',{
  num:'05',rule:'Society / Regional Healthcare',label:'Transfer / Responsibility / Time',
  title:'5극3특 의료망,<br>지도보다 전원 책임이 먼저다',
  dek:'정부는 대·중·소 진료권과 5극3특 광역권을 연결하는 지역완결형 의료체계를 제시했다. 네트워크의 성패는 병원 숫자가 아니라 환자를 받아 줄 곳을 정하는 시간과 책임에서 갈린다.',
  alt:'응급의료와 지역 병원 연결을 표현한 생성 이미지',
  thesis:'지역의료망은 병원 목록이 아니라 신고부터 수용 확정, 치료와 회복기 전원까지 끊기지 않는 책임 사슬이어야 한다.',
  body:`<h3>가까운 병원과 빨리 치료할 병원은 다르다</h3><p>응급환자에게 필요한 정보는 빈 병상 하나가 아니다. 해당 전문과 의사, 마취팀, 수술실, 영상검사, 수혈과 중환자실이 같은 시간에 가능한지를 알아야 한다. 병상 숫자만 실시간으로 보여줘도 실제 치료팀이 준비되지 않으면 이송 결정은 다시 전화 확인에 의존한다.</p><p>5극3특 구상은 중증도에 따라 지역과 광역 거점의 역할을 나누려 한다. 그러나 여러 병원이 각자의 사정만 판단하면 전체 의료망에서 가장 적합한 수용 병원을 결정할 주체가 없다.</p><h3>조정기관에는 권한과 기록 의무가 필요하다</h3><p>전원조정 조직이 단순히 전화를 중계하는 역할에 머물면 책임은 구급대와 개별 병원 사이에 남는다. 최신 자원정보를 요구하고, 수용 가능 여부와 거절 사유를 기록하며, 대체 경로를 지정할 권한이 필요하다.</p><p>정책 성과도 연계기관 수보다 수용 확정까지 걸린 시간과 거절 횟수로 측정해야 한다. 전문과 부재, 병상 부족, 장비 고장과 의료진 과부하를 구분하면 예산과 인력정책의 우선순위를 정할 수 있다.</p><h3>지역병원의 네트워크 업무도 가격을 가져야 한다</h3><p>중등도 환자를 지역에서 치료하고 고난도 환자를 광역 거점으로 보내려면 초기 안정화, 협진과 전원 판단에 들어간 비용을 보상해야 한다. 직접 수술과 시술만 가격이 있고 조정 업무가 무상으로 남으면 네트워크 역할은 지속되기 어렵다.</p><p>회복기 병원과 지역 돌봄으로의 이동도 같은 문제다. 급성기 치료가 끝난 뒤 기록과 약물, 재활계획이 다음 기관에 전달되지 않으면 환자는 검사를 반복하고 가족은 다시 조정자가 된다.</p><h3>완결형 의료의 성과는 환자의 시간으로 측정한다</h3><p>책임의료기관 수와 예산은 투입지표다. 환자가 실제로 체감하는 성과는 수용 확정 시간, 지역 내 치료완결률, 불필요한 재전원과 재입원, 퇴원 뒤 첫 서비스까지 걸린 시간이다. 지도 위 네트워크를 환자의 시간표로 검증해야 한다.</p>`,
  fact:'보건복지부는 7월 22일 5극3특 광역권과 대·중·소 진료권을 연결하는 지역·필수·공공의료 강화 전략을 발표하고 책임의료기관과 보건의료 AI 연계 확대 방향을 제시했다.',
  analysis:'시설과 기관 수를 늘려도 전원조정 권한, 실시간 가동정보와 네트워크 업무 보상이 없으면 환자의 이동 지연은 줄지 않을 수 있다. 성과지표를 환자의 시간과 결과로 전환해야 한다.',
  sources:[{org:'보건복지부',title:'지역·필수·공공의료 강화 추진전략',date:'2026.07.22',href:'https://www.korea.kr/news/policyNewsView.do?newsId=148968583'}],
  rail:[{label:'NETWORK',num:'5극3특',text:'광역권 기반 지역완결형 의료망'},{num:'72곳',text:'2029년 책임의료기관 연계 목표'},{label:'OUTCOME',text:'수용 확정시간 · 거절 횟수 · 지역 치료완결률 · 재전원'},{label:'KEY AUTHORITY',text:'실시간 정보 요구 · 수용 조정 · 거절 사유 기록'}],reportage:reportages.society||''
 });

 updateArticle('tech',{
  num:'06',rule:'Tech / Data Governance',label:'Privacy / AI / Traceability',
  title:'개인정보 과징금 6,804억 원,<br>AI는 데이터 지도부터 시작한다',
  dek:'개인정보위는 상반기 과징금 규모, 공공기관 점검 확대와 데이터 활용 지원을 함께 공개했다. 같은 주 틱톡과 애플에는 적법 근거 없는 개인정보 수집·이용으로 총 105억 5,800만 원의 과징금을 부과했다.',
  alt:'데이터 보안과 AI 시스템을 표현한 생성 이미지',
  thesis:'AI 도입의 첫 단계는 모델 선정이 아니라 회사가 어떤 개인정보를 어디에 복제했고 언제 삭제할 수 있는지 설명하는 데이터 지도다.',
  body:`<h3>제재와 활용 확대가 동시에 진행된다</h3><p>개인정보위가 공개한 2026년 상반기 과징금 부과 규모는 6,804억 원이다. 공공기관 실태점검 대상은 2,300여 곳으로 확대됐고, 노출·불법유통 게시물 8만 2,951건이 삭제됐다. 동시에 가명정보 처리기간을 126일에서 30일 이내로 줄이고 마이데이터 전송범위를 전 분야로 확대하는 방향을 제시했다.</p><p>정책 메시지는 보호 때문에 활용을 멈추거나 활용을 위해 보호를 완화하라는 것이 아니다. 더 빠르게 쓰되 데이터의 위치, 목적과 책임을 더 분명히 하라는 쪽에 가깝다.</p><h3>서비스 기능이 아니라 수집 근거가 쟁점이 됐다</h3><p>개인정보위는 틱톡의 타사 행태정보 수집·이용과 애플의 Siri 음성·전사문 수집 과정에서 적법 근거가 부족했다고 판단했다. 이용자에게 편리한 추천이나 음성기능을 제공한다는 목적만으로 모든 수집이 정당화되는 것은 아니다.</p><p>AI 서비스는 입력 데이터가 운영DB, 분석창고, 외부 모델과 로그에 복제되기 쉽다. 수집 동의가 있어도 목적이 달라지거나 협력사가 추가되면 법적 근거와 안내를 다시 검토해야 한다.</p><h3>삭제 요청은 데이터 지도를 시험한다</h3><p>한 이용자의 삭제 요청이 들어왔을 때 계정, 상담기록, 분석파일, 위탁사, 백업과 AI 실험본을 모두 찾을 수 있어야 한다. 회사가 데이터 흐름을 모르면 삭제 기한을 지키기 어렵고, 사고가 발생해도 영향을 받은 사람과 시스템의 범위를 계산할 수 없다.</p><p>특히 AI 학습에서는 원본이 정제·결합되고 여러 버전으로 복제된다. 데이터 계보와 사용 모델, 철회 가능성을 개발 전부터 기록해야 한다. 학습이 끝났다는 이유로 원본과 파생 위험이 사라지는 것은 아니다.</p><h3>이사회가 물어야 할 질문이 바뀐다</h3><p>개인정보 보호를 보안팀의 기술 항목으로만 보면 과징금과 서비스 중단, 거래조건의 위험을 놓친다. 회사가 보유한 데이터의 전체 위치, 관리자 권한 재검토, 위탁사 삭제 증명, AI 학습 데이터의 근거와 사고 대응시간을 경영지표로 관리해야 한다.</p>`,
  fact:'개인정보위는 상반기 과징금 6,804억 원, 공공기관 2,300여 곳 점검, 불법유통 게시물 8만 2,951건 삭제와 가명정보 처리기간 단축을 공개했다. 7월 22일 회의에서는 틱톡과 애플에 총 105억 5,800만 원의 과징금을 의결했다.',
  analysis:'제재 강화와 데이터 활용 확대는 데이터 수명주기 통제를 전제로 함께 추진된다. 기업이 데이터 위치와 삭제 가능성을 설명하지 못하면 AI의 성능보다 규제·거래 위험이 먼저 커질 수 있다.',
  sources:[{org:'개인정보위',title:'2026년 상반기 개인정보 보호·활용의 변화',date:'2026.07.20',href:'https://www.pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS212&mCode=C040030000&nttId=12293'},{org:'개인정보위',title:'틱톡·애플 개인정보 보호법 위반 제재',date:'2026.07.23',href:'https://www.pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS074&nttId=12330'}],
  rail:[{label:'ENFORCEMENT',num:'6,804억',text:'2026년 상반기 과징금 부과 규모'},{num:'2,300여',text:'공공기관 실태점검 대상'},{num:'82,951',text:'노출·불법유통 게시물 삭제'},{label:'AI CONTROL',text:'수집 근거 · 데이터 계보 · 위탁사 · 삭제·백업'}],reportage:reportages.tech||''
 });

 const data=$('#data');if(data){data.innerHTML=`<div class="wrap"><div class="rule-title"><span>07</span><span>Data / What the Numbers Mean</span></div><h2 class="section-title">발표 규모와<br>성과지표를 구분한다</h2><div class="data-hero"><div class="data-stat"><b>$950B</b><span>AI·반도체 협력 추진 규모. 집행액이 아니라 발표된 협력 구상이다.</span></div><div class="data-stat"><b>0.6%</b><span>2분기 실질 GDP 전기 대비 성장률. 경기의 생산 측면 속보치다.</span></div><div class="data-stat"><b>3.6%</b><span>2분기 실질 GDI 전기 대비 증가율. 소득 개선이 내수로 이어지는지 후속 지표가 필요하다.</span></div><div class="data-stat"><b>198</b><span>취소된 정부포상. 기록 정정과 피해 회복은 별도 성과로 추적해야 한다.</span></div><div class="data-stat"><b>60</b><span>강제노동 관련 Section 301 최종 조치 대상 경제권.</span></div><div class="data-stat"><b>6,804억</b><span>개인정보위가 공개한 상반기 과징금 부과 규모.</span></div><div class="data-stat"><b>5극3특</b><span>지역의료 광역권 구상. 환자 시간과 치료완결률이 성과지표다.</span></div><div class="data-stat"><b>5GW</b><span>AI 데이터센터 협력 구상. 계통접속과 실제 가동률을 별도로 봐야 한다.</span></div></div><div class="data-note"><strong>읽는 법:</strong> 총액·기관 수·설비 규모는 투입 또는 계획 지표다. 계약 집행률, 가동률, 수용시간, 실제 관세 정산액, 삭제 완료율처럼 결과를 보여주는 지표와 섞어 읽지 않는다.</div></div>`;}

 const watch=$('#watch');if(watch){watch.innerHTML=`<div class="wrap"><div class="rule-title"><span>08</span><span>Next Week Watch</span></div><h2 class="section-title">발표 뒤의 문서가<br>실행의 강도를 결정한다</h2><div class="watch-grid"><article class="watch"><div class="when">AI / CONTRACT</div><h3>9,500억 달러의 사업별 분해표</h3><p>신규 약정과 기존 사업, MOU와 구속력 있는 계약, 국내외 투자 주체를 구분한다.</p></article><article class="watch"><div class="when">POWER / GRID</div><h3>5GW 데이터센터의 계통접속 일정</h3><p>부지별 전력 인입, 변전소와 송전망 투자, 냉각·환경 인허가 일정을 확인한다.</p></article><article class="watch"><div class="when">TRADE / CUSTOMS</div><h3>한국 품목별 10%·12.5% 적용표</h3><p>Federal Register와 세관 지침에서 HS 코드, MFN 차감과 예외 목록을 확인한다.</p></article><article class="watch"><div class="when">POLITICS / RECORDS</div><h3>서훈 취소의 파생 기록 정정</h3><p>기관 연혁·전시·교육자료와 피해자 회복 절차가 어떤 기한으로 연결되는지 본다.</p></article><article class="watch"><div class="when">HEALTH / OUTCOME</div><h3>5극3특 의료망의 환자 성과지표</h3><p>수용 확정시간, 거절 횟수, 지역 치료완결률과 재전원 자료 공개 여부를 확인한다.</p></article><article class="watch"><div class="when">PRIVACY / RULE</div><h3>매출 10% 과징금과 AI 데이터 기준</h3><p>중대성·관련 매출 산정, 데이터 계보와 삭제·철회에 관한 구체 지침을 추적한다.</p></article></div></div>`;}

 const chapterLines={
  'cover-story':['COVER STORY','커버스토리','이번 주의 가장 큰 산업 발표를 실행 조건으로 검증한다'],
  economy:['ECONOMY','경제','관세가 공급계약과 납품원가로 이동하는 경로'],
  politics:['POLITICS','정치','국가의 판단을 기록과 절차로 남기는 책임'],
  society:['SOCIETY','사회','환자가 이동하는 시간으로 지역의료망을 평가한다'],
  tech:['TECH','테크','AI 도입 전에 데이터의 위치와 삭제 가능성을 묻는다'],
  data:['DATA','데이터','계획·투입·성과 숫자를 분리해 읽는다'],
  watch:['WATCH','전망','다음 판단을 바꿀 후속 문서와 일정']
 };
 Object.entries(chapterLines).forEach(([id,v])=>{const opener=$('#chapter-'+id);if(!opener)return;const label=$('.chapter-label',opener),ko=$('.chapter-copy h2',opener),line=$('.chapter-copy p',opener);if(label)label.textContent=v[0];if(ko)ko.textContent=v[1];if(line)line.textContent=v[2];});

 const footer=$('.footer');if(footer)footer.innerHTML=`<div class="wrap"><div><div class="kicker">WEEKLY SIGNAL · ISSUE 01 · EDITORIAL MODEL V15</div><h2>사건보다<br>판단 기준을 남긴다</h2></div><p>2026년 7월 20—26일 공개된 1차 자료를 기준으로 2026년 7월 29일 전면 재작성했습니다. 커버스토리와 분야별 대표 이슈를 분리하고, LIFE SCENE의 가상 범위와 기사별 사실·해석을 명시했습니다. 표지·LIFE SCENE·각 섹션 이미지는 편집용 생성 이미지이며 르포에는 이미지를 사용하지 않았습니다.</p></div>`;
 document.documentElement.dataset.contentEdition='issue-01-editorial-v15';
})();
