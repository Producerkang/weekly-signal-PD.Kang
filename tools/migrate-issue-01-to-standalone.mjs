import { chromium } from 'playwright';
import http from 'node:http';
import path from 'node:path';
import { promises as fs } from 'node:fs';

const ROOT=process.cwd();
const ISSUE_DATE=process.env.ISSUE_DATE||'2026-07-20';
const ARCHIVE=path.join(ROOT,'archive');
const READER_FILE=path.join(ARCHIVE,`${ISSUE_DATE}-reader.html`);
const OUTPUT_FILE=path.join(ARCHIVE,`${ISSUE_DATE}.html`);
const PORT=4173;

const mime={
 '.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8',
 '.mjs':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml',
 '.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp'
};

async function exists(file){try{await fs.access(file);return true}catch{return false}}
async function serve(){
 const server=http.createServer(async(req,res)=>{
  try{
   const pathname=decodeURIComponent(new URL(req.url,'http://127.0.0.1').pathname);
   const relative=pathname.replace(/^\/+/, '');
   let file=path.resolve(ROOT,relative||'index.html');
   if(!file.startsWith(ROOT+path.sep))throw new Error('Path traversal');
   const stat=await fs.stat(file);
   if(stat.isDirectory())file=path.join(file,'index.html');
   const data=await fs.readFile(file);
   res.writeHead(200,{'content-type':mime[path.extname(file).toLowerCase()]||'application/octet-stream','cache-control':'no-store'});
   res.end(data);
  }catch(error){res.writeHead(404,{'content-type':'text/plain; charset=utf-8'});res.end('Not found')}
 });
 await new Promise(resolve=>server.listen(PORT,'127.0.0.1',resolve));
 return server;
}

function replaceOnce(source,needle,replacement,label){
 if(!source.includes(needle))throw new Error(`Cannot update ${label}: marker not found`);
 return source.replace(needle,replacement);
}

async function updateEditorialStandards(){
 const rootDuplicate=path.join(ROOT,'EDITORIAL_STANDARD.md');

 const editorialPath=path.join(ROOT,'editorial','EDITORIAL_STANDARD.md');
 let editorial=await fs.readFile(editorialPath,'utf8');
 const lifeStart='## 5. LIFE SCENE';
 const lifeEnd='## 6. Document Reportage';
 const startIndex=editorial.indexOf(lifeStart);
 const endIndex=editorial.indexOf(lifeEnd);
 if(startIndex<0||endIndex<0||endIndex<=startIndex)throw new Error('Editorial LIFE SCENE section not found');
 const newLife=`## 5. LIFE SCENE\n\nLIFE SCENE은 커버 또는 분야별 기사 중 생활 영향 경로가 가장 분명한 이슈에서 파생한다. 기사 전체를 요약하지 않고 한 사람이나 한 조직이 통과하는 하나의 구체적 경로만 선택한다.\n\n- 정책·가격·서비스·산업 변화가 일정·비용·업무·가정생활에 도착하는 경로를 보여준다.\n- 한 명의 중심 인물, 하나의 문제와 제한된 시간 범위를 둔다.\n- 서사는 \`발단 → 사건 → 갈등 → 결정 또는 기다림 → 결과\`의 흐름으로 완결한다.\n- 정책 용어와 분석을 서사 중간에 끼워 넣지 않고 후단 SCENARIO NOTE에 둔다.\n- 가상 인물·조직·대화·상황은 후단에서 명확히 고지하고, 공식 자료에서 확인되지 않은 감정과 결과를 실존 사례처럼 단정하지 않는다.\n- 기사와 연결 근거가 약하면 장문 서사를 만들지 않고 실제 절차를 따르는 짧은 사례형 지면으로 전환한다.\n\n### 정책과 장면의 시간적 위치\n\n장면을 쓰기 전에 다음 셋 중 어디에 놓이는지 확정한다.\n\n1. **정책이 해결하려는 기존 문제**: 현재 제도의 공백을 보여주며 이를 정책 시행 뒤 새로 생길 문제처럼 쓰지 않는다.\n2. **정책 시행 과정의 전환 비용 또는 공백**: 시행 일정, 적용 대상과 전환 절차가 확인된 경우에만 사용한다.\n3. **정책 시행 뒤의 결과 또는 부작용**: 실제 시행과 결과를 확인할 근거가 있을 때만 사용한다.\n\n시간적 위치가 불명확하면 장면을 먼저 만들지 않는다. SCENARIO NOTE는 원칙적으로 \`가상 사례 고지 → 현재의 공백 또는 시행 단계 → 정책의 작동 장치 → 성과 판단과 실패 조건\` 순서로 구성한다.\n\n### 성과 판단\n\n정책 평가는 기관 수·예산·권역 구분 같은 투입지표에 머물지 않는다. 독자가 체감하는 시간·비용·결과와 책임 구조가 어떻게 달라졌는지를 제시한다. 시행 뒤에도 핵심 시간·비용·책임이 달라지지 않을 경우 정책 목표가 계획·지도·문서에 머문다는 조건으로 마무리할 수 있다.\n\nLIFE SCENE은 분위기 전환용 창작물이 아니다. 기사에서 확인된 영향 경로를 독자가 이해할 수 있는 시간과 행동으로 번역하는 편집 지면이다.\n\n`;
 editorial=editorial.slice(0,startIndex)+newLife+editorial.slice(endIndex);
 await fs.writeFile(editorialPath,editorial);

 const layoutPath=path.join(ROOT,'editorial','LAYOUT_SYSTEM.md');
 let layout=await fs.readFile(layoutPath,'utf8');
 layout=layout.replace('2. Front Spread: Contents 40% + LIFE SCENE 60%\n3. Opening','2. Contents\n3. LIFE SCENE\n4. Opening')
  .replace('4. Cover Story\n5. Economy\n6. Politics\n7. Society\n8. Tech\n9. Data\n10. Watch\n11. Sources & Method','5. Cover Story\n6. Economy\n7. Politics\n8. Society\n9. Tech\n10. Data\n11. Watch\n12. Sources & Method');
 const oldFront=`### Front Spread\n\n- 넓은 화면: Contents 40%, LIFE SCENE 60%\n- 좁은 화면: Contents 다음 LIFE SCENE의 1열\n- 두 영역은 공통 컨테이너 안에서 관계를 형성한다.\n- 높이와 기준선을 맞추되 콘텐츠를 자르거나 강제 고정 높이를 사용하지 않는다.`;
 const newFront=`### Contents와 LIFE SCENE\n\n- Contents와 LIFE SCENE은 각각 전체 폭의 독립 지면으로 둔다.\n- Contents는 데스크톱에서 모든 항목을 한 화면 안에 표시하며 내부 스크롤을 만들지 않는다.\n- 항목 수가 많아지면 항목을 숨기거나 잘라내지 않고 섹션명·제목·설명의 크기와 행간, 항목 간격을 함께 조정한다.\n- 목차 순서는 실제 문서 순서와 상단 내비게이션 순서에 일치시킨다.\n- LIFE SCENE은 Contents 다음에 배치하며 이미지 비율·본문 관계는 해당 장면에 맞게 독립적으로 정한다.\n- 좁은 화면에서도 두 지면의 순서를 유지하고 콘텐츠를 자르지 않는다.`;
 layout=replaceOnce(layout,oldFront,newFront,'layout front matter');
 layout=layout.replace('- 넓은 화면 Front Spread 40:60\n- 좁은 화면 Contents → LIFE SCENE 1열','- Contents의 모든 항목이 내부 스크롤 없이 표시됨\n- Contents → LIFE SCENE 순서 유지');
 layout=layout.replace('- 새 호는 `archive/YYYY-MM-DD.html`과 날짜별 자산으로 완결한다.','- 새 호는 `archive/YYYY-MM-DD.html` 하나를 공개 기준본으로 발행한다. 제작 중 자산이 분리돼 있어도 발행 시 최종 DOM·스타일·이미지와 필수 동작을 고정한다.');
 await fs.writeFile(layoutPath,layout);

 const voicePath=path.join(ROOT,'editorial','VOICE_AND_TONE.md');
 let voice=await fs.readFile(voicePath,'utf8');
 const oldVoice=`### LIFE SCENE\n\n- 생활의 구체성을 보여주되 소설처럼 극적 장면을 만들지 않는다.\n- 가상·합성 사례는 첫 부분에서 바로 식별되게 고지한다.\n- 기사에서 확인된 영향 경로만 독자의 일상 언어로 번역한다.\n- 실명형 이름, 정확한 나이, 회사명, 상세 주소와 분 단위 시각을 기본값으로 만들지 않는다.\n- 구체적인 시각·비용·일정은 분석상 필요하고 근거가 있을 때만 사용한다.\n- 과장된 감정, 교훈적 결말과 광고형 성공담을 피한다.`;
 const newVoice=`### LIFE SCENE\n\n- 생활의 구체성을 보여주되 소설처럼 극적 장면을 만들지 않는다.\n- 가상·합성 사례는 섹션 표기와 후단 고지로 실제 취재 사례와 혼동되지 않게 한다.\n- 기사에서 확인된 영향 경로만 독자의 일상 언어로 번역한다.\n- 구체적인 시각·비용·일정은 장면의 구조를 설명하는 데 필요할 때만 사용한다.\n- 과장된 감정, 교훈적 결말과 광고형 성공담을 피한다.\n- SCENARIO NOTE는 가상 고지, 정책의 목적과 작동 장치, 성과 판단을 자연스럽게 연결한다.\n- “이 장면은 정책의 문제점을 보여주는 사례가 아니라”, “오해해서는 안 되는 것은”, “앞서 설명한 것과 달리”처럼 수정 과정의 반박이 드러나는 문장을 쓰지 않는다.\n- 정책의 성과는 시민이 체감하는 시간·비용·결과와 책임 구조의 변화로 번역한다.`;
 voice=replaceOnce(voice,oldVoice,newVoice,'voice LIFE SCENE');
 await fs.writeFile(voicePath,voice);

 if(await exists(rootDuplicate))await fs.unlink(rootDuplicate);
}

async function updateIssueHistory(){
 const historyPath=path.join(ROOT,'editorial','ISSUE_HISTORY.md');
 let history=await fs.readFile(historyPath,'utf8');
 history=history.replace('- 제1호 기준 문서 이전의 reader 누적 후처리 구조 사용','- 제1호 제작 중 사용한 reader 누적 후처리 구조를 최종 발행 시 단일 독립 보존호로 동결');
 history=history.replace('- **LIFE SCENE**: AI 서비스의 가용성과 계약 조건이 작은 조직의 일정에 도착하는 경로','- **LIFE SCENE**: 지역 응급의료의 수용·전원 공백을 한 보호자의 시간으로 번역');
 history=history.replace('### 실제로 확인된 문제\n\n- 원본 보존호와 reader 계열 CSS·JS가 서로 반대되는 레이아웃을 순차 보정한다.','### 실제로 확인된 문제\n\n- 제작 과정에서 원본 보존호와 reader 계열 CSS·JS가 서로 반대되는 레이아웃을 순차 보정했다.');
 history=history.replace('- 기사 콘텐츠·출처·이미지 경로가 여러 파일에 분산되어 새 호의 독립성을 보장하기 어렵다.','- 기사 콘텐츠·출처·이미지 경로가 여러 파일에 분산되어 새 호의 독립성을 보장하기 어려웠다.\n- 최종 발행 단계에서 렌더 결과를 `archive/2026-07-20.html`에 동결하고 reader 계열 파일을 제거했다.');
 history=history.replace('1. `archive/YYYY-MM-DD.html`이 자체 최종 DOM을 가지는 독립 보존호로 제작한다.','1. `archive/YYYY-MM-DD.html`이 자체 최종 DOM을 가지는 독립 보존호로 제작한다. 제1호 마이그레이션 결과를 검증 기준으로 사용한다.');
 await fs.writeFile(historyPath,history);
}

async function updateReadme(){
 const readmePath=path.join(ROOT,'README.md');
 let readme=await fs.readFile(readmePath,'utf8');
 readme=readme.replace('- `archive/YYYY-MM-DD.html`: CSS·스크립트·이미지를 포함한 발행호별 완성형 HTML입니다.','- `archive/YYYY-MM-DD.html`: 최종 DOM·스타일·이미지와 필수 동작을 고정한 발행호별 독립 완성본입니다. 공개 보존호는 reader나 후단 패치에 의존하지 않습니다.');
 readme=readme.replace('1. 새 호 완성본을 `archive/YYYY-MM-DD.html`로 추가합니다.','1. 제작 중인 원고와 레이아웃을 검수한 뒤 최종 결과를 `archive/YYYY-MM-DD.html` 독립 완성본으로 동결합니다.');
 await fs.writeFile(readmePath,readme);
}

async function main(){
 if(!await exists(READER_FILE))throw new Error(`Missing reader entry: ${READER_FILE}`);
 const server=await serve();
 const browser=await chromium.launch({headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1366,height:1024},deviceScaleFactor:1});
  page.on('console',message=>console.log(`[browser:${message.type()}] ${message.text()}`));
  page.on('pageerror',error=>console.error('[browser:pageerror]',error));
  await page.goto(`http://127.0.0.1:${PORT}/archive/${ISSUE_DATE}-reader.html`,{waitUntil:'networkidle',timeout:120000});
  await page.waitForTimeout(10000);
  const readiness=await page.evaluate(()=>({
   toc:document.querySelectorAll('#contents .toc-item').length,
   hasLife:Boolean(document.querySelector('#life-scene')),
   hasPhoto:Boolean(document.querySelector('#life-scene .life-photo')),
   hasCopy:(document.body?.innerText||'').includes('다만, 병원과 인력을 권역별로 배치하는 것만으로는 충분하지 않다.'),
   edition:document.documentElement.dataset.contentEdition||null,
   reader:document.documentElement.dataset.reader||null,
   title:document.title,
   scripts:[...document.querySelectorAll('script[src]')].map(node=>node.getAttribute('src'))
  }));
  console.log('Rendered readiness:',JSON.stringify(readiness,null,2));
  if(readiness.toc!==9||!readiness.hasLife||!readiness.hasCopy)throw new Error(`Rendered issue is incomplete: ${JSON.stringify(readiness)}`);

  const html=await page.evaluate(async issueDate=>{
   const links=[...document.querySelectorAll('link[rel="stylesheet"]')];
   for(const link of links){
    const url=new URL(link.href,location.href);
    if(url.origin!==location.origin)continue;
    const response=await fetch(url.href,{cache:'no-store'});
    if(!response.ok)throw new Error(`Stylesheet ${response.status}: ${url.pathname}`);
    const style=document.createElement('style');
    style.textContent=await response.text();
    link.replaceWith(style);
   }

   document.querySelectorAll('script[src]').forEach(script=>{
    const name=new URL(script.src,location.href).pathname.split('/').pop()||'';
    if(name.startsWith('reader-'))script.remove();
   });
   document.querySelectorAll('link[rel="prefetch"],link[rel="preload"]').forEach(node=>node.remove());

   const build=document.createElement('meta');
   build.name='weekly-signal-build';
   build.content=`standalone-${issueDate}`;
   document.head.appendChild(build);
   document.documentElement.dataset.reader='standalone';
   document.documentElement.dataset.issue=issueDate;

   const runtime=document.createElement('script');
   runtime.textContent=`(()=>{\n const progress=document.getElementById('progress');\n const updateProgress=()=>{if(!progress)return;const root=document.documentElement;const max=Math.max(0,root.scrollHeight-window.innerHeight);progress.style.width=(max?Math.min(1,Math.max(0,window.scrollY/max)):0)*100+'%'};\n updateProgress();window.addEventListener('scroll',updateProgress,{passive:true});window.addEventListener('resize',updateProgress,{passive:true});\n const links=[...document.querySelectorAll('.nav a[href^="#"]')];const sections=links.map(link=>document.querySelector(link.getAttribute('href'))).filter(Boolean);\n if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(!visible)return;links.forEach(link=>{const active=link.getAttribute('href')==='#'+visible.target.id;link.removeAttribute('aria-current');if(active)link.setAttribute('aria-current','page')})},{rootMargin:'-20% 0px -65% 0px',threshold:[0,.15,.4]});sections.forEach(section=>observer.observe(section));}\n document.addEventListener('click',event=>{const link=event.target.closest('a[href^="#"]');if(!link)return;const target=document.querySelector(link.getAttribute('href'));if(!target)return;event.preventDefault();target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});history.replaceState(null,'',link.getAttribute('href'))});\n})();`;
   document.body.appendChild(runtime);

   return '<!doctype html>\n'+document.documentElement.outerHTML;
  },ISSUE_DATE);

  const required=[
   '<meta name="weekly-signal-build"',
   'data-reader="standalone"',
   '세 번째 병원에서야',
   '다만, 병원과 인력을 권역별로 배치하는 것만으로는 충분하지 않다.',
   '지역완결형 의료망은 지도 위의 구분에 머물 수밖에 없다.'
  ];
  for(const marker of required)if(!html.includes(marker))throw new Error(`Frozen output missing: ${marker}`);
  if(/(?:src|href)=["'][^"']*reader-v/i.test(html))throw new Error('Frozen output still references reader assets');
  if(html.includes('document.write'))throw new Error('Frozen output still contains document.write');
  await fs.writeFile(OUTPUT_FILE,html,'utf8');

  const latestPath=path.join(ROOT,'latest.json');
  const latest=JSON.parse(await fs.readFile(latestPath,'utf8'));
  latest.path=`archive/${ISSUE_DATE}.html`;
  await fs.writeFile(latestPath,JSON.stringify(latest,null,2)+'\n');

  const archiveIndexPath=path.join(ARCHIVE,'index.html');
  let archiveIndex=await fs.readFile(archiveIndexPath,'utf8');
  archiveIndex=archiveIndex.replaceAll(`${ISSUE_DATE}-reader.html`,`${ISSUE_DATE}.html`);
  await fs.writeFile(archiveIndexPath,archiveIndex);

  await updateEditorialStandards();
  await updateIssueHistory();
  await updateReadme();

  const files=await fs.readdir(ARCHIVE);
  const remove=files.filter(name=>/^reader-v.*\.(?:js|css)$/i.test(name)||name===`${ISSUE_DATE}-reader.html`);
  for(const name of remove)await fs.unlink(path.join(ARCHIVE,name));

  const remaining=[];
  for(const file of [path.join(ROOT,'index.html'),latestPath,archiveIndexPath,OUTPUT_FILE])remaining.push(await fs.readFile(file,'utf8'));
  if(remaining.some(content=>content.includes(`${ISSUE_DATE}-reader.html`)))throw new Error('Published entry still references reader HTML');
  if(remaining.some(content=>/(?:src|href)=["'][^"']*reader-v/i.test(content)))throw new Error('Published entry still references reader assets');
  console.log(JSON.stringify({issue:ISSUE_DATE,output:path.relative(ROOT,OUTPUT_FILE),removed:remove.length},null,2));
 }finally{
  await browser.close();
  await new Promise(resolve=>server.close(resolve));
 }
}

main().catch(error=>{console.error(error);process.exitCode=1});
