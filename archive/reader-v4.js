(async()=>{
 const started=performance.now();
 const fallback=document.getElementById('fallback');
 const wait=ms=>new Promise(resolve=>setTimeout(resolve,ms));
 const el=(doc,tag,className,html)=>{const node=doc.createElement(tag);if(className)node.className=className;if(html!==undefined)node.innerHTML=html;return node};
 try{
  const res=await fetch('./2026-07-20.html?reader=6',{cache:'no-store'});
  if(!res.ok)throw new Error('HTTP '+res.status);
  const parser=new DOMParser(),doc=parser.parseFromString(await res.text(),'text/html');
  const link=doc.createElement('link');link.rel='stylesheet';link.href='./reader-v4.css?v=6';doc.head.appendChild(link);

  const issue={
   contents:[
    {num:'01',label:'OPENING',title:'이번 주의 사건들을 하나의 구조로 연결해 읽는다',summary:'각 분야의 변화가 어디에서 만나고 갈라지는지 먼저 짚는다.',href:'#opening'},
    {num:'02',label:'LIFE SCENE',title:'AI가 느려진 월요일',summary:'화면의 작은 지연이 한 직장인의 업무와 비용에 도착하는 과정을 따라간다.',href:'#life-scene'},
    {num:'03',label:'COVER STORY',title:'AI는 산업이 아니라 공급망이 됐다',summary:'반도체·전력·데이터센터·규제가 AI 경쟁력을 결정하는 구조를 추적한다.',href:'#chapter-cover-story',featured:true},
    {num:'04',label:'ECONOMY',title:'관세는 국경에서 끝나지 않는다',summary:'새 관세가 공급계약과 협력사의 비용 구조로 이동하는 과정을 분석한다.',href:'#chapter-economy'},
    {num:'05',label:'POLITICS',title:'국가의 기록은 어떻게 다시 쓰이는가',summary:'서훈 취소와 조직 개편 이후 남은 행정 절차와 기록의 책임을 살펴본다.',href:'#chapter-politics'},
    {num:'06',label:'SOCIETY',title:'응급환자의 길이 보여주는 지역의료의 빈칸',summary:'신고부터 이송·전원·퇴원까지 의료망의 단절 지점을 추적한다.',href:'#chapter-society'},
    {num:'07',label:'TECH',title:'삭제 버튼을 누른 뒤 30일',summary:'개인정보 삭제 요청이 백업·협력사·AI 학습 데이터까지 이동하는 과정을 살펴본다.',href:'#chapter-tech'},
    {num:'08',label:'DATA',title:'숫자가 말하는 이번 주의 변화',summary:'핵심 지표를 한눈에 보고 정치·경제·사회·기술의 흐름을 정리한다.',href:'#chapter-data'},
    {num:'09',label:'WATCH',title:'다음 주, 우리가 주목해야 할 포인트',summary:'다가올 변수와 리스크, 기회를 미리 짚어본다.',href:'#chapter-watch'}
   ],
   chapters:[
    {target:'cover-story',num:'03',label:'COVER STORY',ko:'커버스토리',line:'한 주의 중심 이슈를 가장 깊게 읽는 장',tone:'cover'},
    {target:'economy',num:'04',label:'ECONOMY',ko:'경제',line:'숫자 너머에서 비용과 계약이 움직이는 경로',tone:'economy'},
    {target:'politics',num:'05',label:'POLITICS',ko:'정치',line:'권력의 결정이 기록과 제도로 남는 방식',tone:'politics'},
    {target:'society',num:'06',label:'SOCIETY',ko:'사회',line:'제도의 빈틈이 한 사람의 일상에 도착하는 순간',tone:'society'},
    {target:'tech',num:'07',label:'TECH',ko:'테크',line:'기술이 만든 편의 뒤의 구조와 책임',tone:'tech'},
    {target:'data',num:'08',label:'DATA',ko:'데이터',line:'이번 주의 변화를 수치와 흐름으로 압축해 읽기',tone:'data'},
    {target:'watch',num:'09',label:'WATCH',ko:'전망',line:'다음 주 판단을 바꿀 신호와 확인 지점',tone:'watch'}
   ]
  };

  const cover=doc.getElementById('top');
  if(cover&&!doc.getElementById('contents')){
   const contents=el(doc,'section','contents-page section');contents.id='contents';
   const grid=issue.contents.map(item=>`<a class="toc-item${item.featured?' featured':''}" href="${item.href}"><div class="toc-meta"><span class="toc-num">${item.num}</span><span class="toc-label">${item.label}</span></div><div class="toc-copy"><strong>${item.title}</strong><p>${item.summary}</p></div></a>`).join('');
   contents.innerHTML=`<div class="contents-inner"><header class="contents-head"><div><span>WEEKLY SIGNAL</span><h2>CONTENTS</h2></div><p>2026.07.20—07.26<br>각 항목을 누르면 해당 지면으로 이동합니다.</p></header><div class="contents-grid">${grid}</div></div>`;
   cover.insertAdjacentElement('afterend',contents);
  }

  const opening=doc.getElementById('opening');
  if(opening&&!doc.getElementById('life-scene')){
   const life=el(doc,'section','life-scene section');life.id='life-scene';
   life.innerHTML=`
    <div class="life-inner">
     <header class="life-head"><div class="life-kicker">LIFE SCENE · 가상 인물, 실제 구조 기반 재구성</div><h2>AI가 느려진 월요일</h2><p>화면의 작은 지연이 한 직장인의 업무 일정과 팀 비용에 도착하는 방식</p></header>
     <div class="life-layout">
      <figure class="life-illustration" aria-label="노트북 앞에서 AI 서비스의 지연 화면을 바라보는 직장인의 간단한 카툰 삽화">
       <svg viewBox="0 0 420 560" role="img" aria-hidden="true">
        <rect width="420" height="560" rx="8" fill="#17202c"/>
        <rect x="28" y="42" width="364" height="250" rx="8" fill="#f0ece1"/>
        <rect x="55" y="70" width="310" height="165" rx="6" fill="#101114"/>
        <circle cx="210" cy="150" r="35" fill="none" stroke="#ff4a2f" stroke-width="10" stroke-dasharray="92 150"/>
        <text x="210" y="260" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="800" fill="#101114">잠시 후 다시 시도</text>
        <rect x="48" y="322" width="230" height="16" rx="8" fill="#4c5867"/>
        <rect x="75" y="350" width="190" height="18" rx="9" fill="#657284"/>
        <circle cx="318" cy="370" r="42" fill="#d5a47c"/>
        <path d="M278 365c8-62 76-73 90-12-14-17-32-23-54-19-18 3-28 13-36 31z" fill="#1a1a1c"/>
        <path d="M270 430c22-48 88-55 119-2v106H248z" fill="#ff4a2f"/>
        <path d="M304 395c12 12 31 12 44 0" fill="none" stroke="#101114" stroke-width="5" stroke-linecap="round"/>
        <rect x="52" y="410" width="162" height="105" rx="8" fill="#f0ece1"/>
        <rect x="69" y="428" width="128" height="70" rx="4" fill="#101114"/>
        <path d="M88 478l24-26 20 17 22-33 25 42" fill="none" stroke="#ff4a2f" stroke-width="6" stroke-linejoin="round"/>
        <rect x="196" y="430" width="14" height="82" fill="#c5bfb2"/>
        <circle cx="233" cy="480" r="19" fill="#f0ece1"/><path d="M246 466c20 4 22 32 2 38" fill="none" stroke="#f0ece1" stroke-width="8"/>
       </svg>
       <figcaption>간단한 편집 카툰 · 인물과 회사, 구체적 상황은 가상입니다.</figcaption>
      </figure>
      <article class="life-story">
       <p class="life-lead">서울의 12명 규모 콘텐츠 제작사에서 기획자로 일하는 서지훈(39·가명) 씨는 매일 오전 8시 40분, 출근하자마자 전날 쌓인 회의 메모를 AI 서비스에 넣는다. 열다섯 분이면 요약본과 업무 목록이 나온다. 그동안 그는 커피를 내리고 메신저 답장을 정리한다. AI는 어느새 별도의 도구가 아니라 아침 업무 순서의 일부가 됐다.</p>
       <p>월요일 아침에는 평소와 달랐다. 문서를 올린 뒤 진행 표시가 오래 멈췄다. 다시 시도하라는 안내가 반복됐다. 오전 회의에 쓸 요약본이 늦어지자 서 씨는 원문을 다시 읽기 시작했고, 동료 두 명도 각자 맡은 자료를 수작업으로 정리했다. 팀장은 이미지 시안 생성까지 밀릴 수 있다며 우선순위를 바꿨다. 화면 속 몇 분의 지연이 세 사람의 한 시간으로 늘어났다.</p>
       <p>점심 무렵 서비스는 정상화됐지만 업무는 원래 순서로 돌아오지 않았다. 오전에 미뤄 둔 검토가 오후 회의와 겹쳤고, 당일 전달하기로 한 초안은 다음 날로 넘어갔다. 서 씨가 체감한 것은 단순한 접속 장애였지만, 회사 입장에서는 일정과 인건비, 고객과의 약속이 함께 움직인 사건이었다.</p>
       <p>그날 팀 회의에서는 AI 사용량을 줄일지, 더 높은 요금제를 선택할지, 핵심 업무에는 다른 서비스를 함께 둘지를 논의했다. 편리한 기능 하나를 고르는 문제처럼 보였지만 실제 선택지는 컴퓨팅 자원의 배분, 클라우드 비용, 데이터센터의 처리 능력과 연결돼 있었다. 이용자는 반도체나 전력 계약을 직접 보지 못해도 그 결과를 대기 시간과 사용 한도, 월 구독료로 만난다.</p>
       <p>퇴근 전 서 씨는 다음 날 회의 자료를 로컬 문서로도 정리해 두었다. AI를 포기한 것이 아니라, AI가 항상 같은 속도로 작동한다는 전제를 버린 것이다. 그의 하루가 보여준 것은 기술의 성능만이 아니다. 서비스 뒤에 놓인 공급망이 흔들릴 때 가장 먼저 바뀌는 것은 평범한 사람의 시간표다.</p>
       <aside class="life-context"><strong>이 이야기가 보여주는 것</strong><p>인물·회사·사건은 가상입니다. 다만 AI 서비스의 사용 경험이 반도체, 클라우드, 데이터센터와 전력 공급 구조의 영향을 받는다는 이번 호의 분석을 생활 장면으로 재구성했습니다.</p></aside>
      </article>
     </div>
    </div>`;
   opening.insertAdjacentElement('afterend',life);
  }

  issue.chapters.forEach(chapter=>{
   const target=doc.getElementById(chapter.target);
   if(!target||doc.getElementById('chapter-'+chapter.target))return;
   const opener=el(doc,'section',`chapter-opener chapter-${chapter.tone} section`);opener.id='chapter-'+chapter.target;
   opener.innerHTML=`<div class="chapter-inner"><div class="chapter-index">${chapter.num}</div><div class="chapter-copy"><div class="chapter-label">${chapter.label}</div><h2>${chapter.ko}</h2><p>${chapter.line}</p></div><div class="chapter-edge">WEEKLY SIGNAL · ${chapter.num}</div></div>`;
   target.parentNode.insertBefore(opener,target);
  });

  const nav=doc.querySelector('.nav');
  if(nav)nav.innerHTML='<a href="#contents">Contents</a><a href="#opening">Opening</a><a href="#life-scene">Life</a><a href="#chapter-cover-story">Cover</a><a href="#chapter-economy">Economy</a><a href="#chapter-politics">Politics</a><a href="#chapter-society">Society</a><a href="#chapter-tech">Tech</a><a href="#chapter-data">Data</a><a href="#chapter-watch">Watch</a>';

  const replacements=(window.WEEKLY_SIGNAL_REFINEMENT||{}).reportages||{};
  for(const [key,markup] of Object.entries(replacements)){
   const old=doc.getElementById('reportage-'+key);if(!old)continue;
   const tpl=doc.createElement('template');tpl.innerHTML=markup.trim();
   const report=tpl.content.firstElementChild;report.classList.add('reportage-'+key);
   old.replaceWith(report);
   const section=report.closest('section');
   const sourceImg=section&&section.querySelector('.full-bleed img,.hero-image,img:not(.cover-bg)');
   if(sourceImg&&!report.querySelector('.reportage-visual')){
    const figure=doc.createElement('figure');figure.className='reportage-visual';
    const image=sourceImg.cloneNode(true);image.removeAttribute('id');image.loading='lazy';
    const caption=doc.createElement('figcaption');caption.textContent='관련 기사 시각자료 · 자료 기반 르포의 맥락을 보여주는 섹션 이미지';
    figure.append(image,caption);
    const note=report.querySelector('.reportage-note');
    if(note)note.insertAdjacentElement('afterend',figure);else report.prepend(figure);
   }
  }

  [...doc.querySelectorAll('.fact-analysis')].forEach(block=>{
   const section=block.closest('section');
   const note=doc.createElement('section');note.className='verification-note';note.setAttribute('aria-label','기사 검증 메모');
   const head=doc.createElement('header');head.className='verification-head';
   head.innerHTML='<div class="verification-kicker">EDITORIAL CHECK</div><div><h3>기사 검증 메모</h3><p>확인된 사실과 편집부 해석</p></div>';
   const grid=doc.createElement('div');grid.className='verification-grid';
   [...block.children].forEach(child=>{
    child.classList.remove('fa');child.classList.add('verification-card');
    if(child.classList.contains('analysis'))child.classList.add('analysis');
    grid.appendChild(child);
   });
   note.append(head,grid);block.replaceWith(note);
   if(section){
    const report=section.querySelector('.reportage');
    if(report)section.insertBefore(note,report);else (section.querySelector(':scope > .wrap')||section).appendChild(note);
   }
  });

  doc.documentElement.dataset.reader='weekly-signal-v2-refined';
  const remain=Math.max(0,2000-(performance.now()-started));
  if(remain)await wait(remain);
  document.open();document.write('<!doctype html>'+doc.documentElement.outerHTML);document.close();
 }catch(err){
  console.error(err);
  if(fallback)fallback.style.display='block';
 }
})();