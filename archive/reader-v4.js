(async()=>{
 const started=performance.now();
 const fallback=document.getElementById('fallback');
 const wait=ms=>new Promise(resolve=>setTimeout(resolve,ms));
 const el=(doc,tag,className,html)=>{const node=doc.createElement(tag);if(className)node.className=className;if(html!==undefined)node.innerHTML=html;return node};
 try{
  const res=await fetch('./2026-07-20.html?reader=8',{cache:'no-store'});
  if(!res.ok)throw new Error('HTTP '+res.status);
  const parser=new DOMParser(),doc=parser.parseFromString(await res.text(),'text/html');
  ['./reader-v4.css?v=8','./reader-v4-fixes.css?v=8'].forEach(href=>{const link=doc.createElement('link');link.rel='stylesheet';link.href=href;doc.head.appendChild(link)});

  const issue={
   contents:[
    {num:'01',label:'OPENING',title:'이번 주의 사건들을 하나의 구조로 연결해 읽는다',summary:'각 분야의 변화가 어디에서 만나고 갈라지는지 먼저 짚는다.',href:'#opening'},
    {num:'02',label:'LIFE SCENE',title:'세 번째 병원에서야 이름이 불렸다',summary:'5극3특 지역의료망에서 환자 수용과 전원 책임이 실제 시간으로 드러나는 순간.',href:'#life-scene'},
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
     <header class="life-head"><div class="life-kicker">LIFE SCENE · SOCIETY / REGIONAL HEALTHCARE</div><h2>세 번째 병원에서야<br>이름이 불렸다</h2><p>5극3특 지역의료망이 환자와 보호자의 시간표에 도착하는 순간</p></header>
     <div class="life-layout">
      <figure class="life-illustration" aria-label="응급실 복도에서 환자의 전원을 기다리는 젊은 보호자의 사실적 편집 이미지"><figcaption>편집용 생성 이미지 · 인물과 병원, 구체적인 상황은 가상입니다.</figcaption></figure>
      <article class="life-story"></article>
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
   const articleMain=block.closest('.article-main');
   const section=block.closest('section');
   const note=doc.createElement('section');note.className='verification-note';note.setAttribute('aria-label','기사 검증 메모');
   const head=doc.createElement('header');head.className='verification-head';
   head.innerHTML='<div class="verification-kicker">EDITORIAL CHECK</div><div><h3>기사 검증 메모</h3><p>확인된 사실과 편집부 해석</p></div>';
   const grid=doc.createElement('div');grid.className='verification-grid';
   [...block.children].forEach(child=>{
    child.classList.remove('fa');child.classList.add('verification-card');
    if(child.classList.contains('analysis'))child.classList.add('analysis');
    child.removeAttribute('style');child.querySelectorAll('[style]').forEach(node=>node.removeAttribute('style'));
    grid.appendChild(child);
   });
   note.append(head,grid);block.remove();
   if(articleMain){
    const body=articleMain.querySelector('.article-body');
    if(body)body.insertAdjacentElement('afterend',note);else articleMain.appendChild(note);
   }else if(section){
    const wrap=section.querySelector(':scope > .wrap')||section;wrap.appendChild(note);
   }
  });

  doc.documentElement.dataset.reader='weekly-signal-v2-refined-8';
  const remain=Math.max(0,2000-(performance.now()-started));
  if(remain)await wait(remain);
  document.open();document.write('<!doctype html>'+doc.documentElement.outerHTML);document.close();
 }catch(err){
  console.error(err);
  if(fallback)fallback.style.display='block';
 }
})();
