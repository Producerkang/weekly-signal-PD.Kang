import path from 'node:path';
import { promises as fs } from 'node:fs';

const root=process.cwd();
const read=relative=>fs.readFile(path.join(root,relative),'utf8');
const write=(relative,content)=>fs.writeFile(path.join(root,relative),content,'utf8');
const assert=(condition,message)=>{if(!condition)throw new Error(message)};

const findBalancedDivEnd=(html,start)=>{
 const token=/<div\b[^>]*>|<\/div>/gi;
 token.lastIndex=start;
 let depth=0;
 let match;
 while((match=token.exec(html))){
  if(/^<div\b/i.test(match[0]))depth+=1;
  else depth-=1;
  if(depth===0)return token.lastIndex;
 }
 throw new Error('Unbalanced div starting at '+start);
};

const removeDivCardsByHeading=(html,heading)=>{
 let searchFrom=0;
 while(true){
  const upper=html.toUpperCase();
  const headingIndex=upper.indexOf(heading.toUpperCase(),searchFrom);
  if(headingIndex<0)break;
  const start=html.lastIndexOf('<div',headingIndex);
  if(start<0)throw new Error('Card start not found for '+heading);
  const openEnd=html.indexOf('>',start)+1;
  const opening=html.slice(start,openEnd);
  if(!/class="[^"]*(?:rail-card|reportage-card)[^"]*"/i.test(opening)){
   searchFrom=headingIndex+heading.length;
   continue;
  }
  const end=findBalancedDivEnd(html,start);
  html=html.slice(0,start)+html.slice(end);
  searchFrom=Math.max(0,start-1);
 }
 return html;
};

const replaceBalancedDivByClass=(html,scopeStart,scopeEnd,className,replacement)=>{
 const scope=html.slice(scopeStart,scopeEnd);
 const pattern=new RegExp(`<div\\b[^>]*class="[^"]*\\b${className}\\b[^"]*"[^>]*>`,'i');
 const match=pattern.exec(scope);
 if(!match)throw new Error('Missing .'+className);
 const start=scopeStart+match.index;
 const end=findBalancedDivEnd(html,start);
 return html.slice(0,start)+replacement+html.slice(end);
};

const politicsEvidence=`<div class="reportage-evidence reportage-evidence--two">
 <div class="reportage-card"><h4>확인된 조치</h4><ul><li>167명에게 수여된 정부포상 198건 취소</li><li>관계기관 검증과 사전통지·심의 절차 진행</li><li>국무회의 의결을 거쳐 포상 상태 변경</li></ul></div>
 <div class="reportage-card"><h4>아직 확인할 것</h4><ul><li>개별 취소 근거의 공개 수준</li><li>기관 기록·전시·교육자료의 정정 책임과 기한</li><li>피해자 기록 정정과 보상 절차의 연결</li><li>방첩 기능 재편 뒤 외부 감독 규정</li></ul></div>
</div>`;

const dataSection=`<section class="section" id="data"><div class="wrap"><div class="rule-title"><span>08</span><span>DATA / CORE FIGURES</span><span class="rule-context">성격이 다른 핵심 수치 여섯 개를 같은 기준으로 분리해 읽는다</span></div><h2 class="section-title">이번 주를 읽는<br>여섯 개의 숫자</h2><div class="data-metrics-grid">
 <article class="data-metric-card"><span class="metric-section">COVER / AI</span><div class="metric-value"><span class="no-break">$950B</span></div><h3>AI·반도체 협력 발표 규모</h3><p>확정 집행액이 아니라 정부 발표에 포함된 협력 구상의 총액이다.</p><span class="metric-kind">발표</span></article>
 <article class="data-metric-card"><span class="metric-section">ECONOMY / TRADE</span><div class="metric-value"><span class="no-break">12.5%</span></div><h3>Section 301 총관세율 기준</h3><p>품목별 최혜국세율과 예외 적용을 함께 확인해야 실제 부담이 정해진다.</p><span class="metric-kind">최종 조치</span></article>
 <article class="data-metric-card"><span class="metric-section">MACRO</span><div class="metric-value"><span class="no-break">+0.6%</span></div><h3>2분기 실질 GDP 전분기 대비</h3><p>속보치이므로 소비·투자 구성과 이후 수정치를 함께 봐야 한다.</p><span class="metric-kind">통계</span></article>
 <article class="data-metric-card"><span class="metric-section">POLITICS / RECORDS</span><div class="metric-value"><span class="no-break">198건</span></div><h3>취소된 정부포상</h3><p>의결 이후 파생 기록 정정과 피해 회복 절차가 후속 평가 대상이다.</p><span class="metric-kind">행정 조치</span></article>
 <article class="data-metric-card"><span class="metric-section">SOCIETY / HEALTH</span><div class="metric-value"><span class="no-break">5극3특</span></div><h3>지역완결형 의료망 구상</h3><p>병원 수보다 수용 확정 시간과 전원 책임의 변화로 성과를 판단한다.</p><span class="metric-kind">정책 구상</span></article>
 <article class="data-metric-card"><span class="metric-section">TECH / PRIVACY</span><div class="metric-value"><span class="no-break">6,804억 원</span></div><h3>상반기 과징금·과태료</h3><p>개인정보 침해가 데이터 설계와 경영 책임의 재무 위험으로 이동했음을 보여준다.</p><span class="metric-kind">집계</span></article>
</div></div></section>`;

const watchSection=`<section class="section" id="watch"><div class="wrap"><div class="rule-title"><span>09</span><span>NEXT WEEK WATCH</span><span class="rule-context">발표 주체·후속 문서·판단 기준을 함께 추적한다</span></div><h2 class="section-title">다음 판단을 바꿀<br>여섯 개의 후속 문서</h2><div class="watch-grid">
 <article class="watch watch-record" data-watch-state="pending"><div class="watch-topline"><div class="when">AI / PROJECT DISCLOSURE</div><span class="watch-state">후속 문서 대기</span></div><h3>9,500억 달러 협력의 사업별 내역</h3><dl class="watch-meta"><div><dt>발표 주체</dt><dd>대한민국 정부·참여 기업</dd></div><div><dt>확인 문서</dt><dd>기업별 계약·공시, 전력계통 접속 승인, 부지·착공 일정</dd></div><div><dt>판단 기준</dt><dd>신규 확정액, 투자 책임 주체, 집행 시점이 분리돼 공개되는가</dd></div></dl><a class="watch-source" href="https://www.korea.kr/multi/visualNewsView.do?newsId=148968898" target="_blank" rel="noopener">정부 공식 자료 ↗</a></article>
 <article class="watch watch-record" data-watch-state="pending"><div class="watch-topline"><div class="when">TRADE / CUSTOMS</div><span class="watch-state">집행 지침 대기</span></div><h3>Section 301 품목별 실제 관세 부담</h3><dl class="watch-meta"><div><dt>발표 주체</dt><dd>USTR·미국 세관국경보호국</dd></div><div><dt>확인 문서</dt><dd>CBP 집행 지침, HS 코드별 세율표, 예외 목록</dd></div><div><dt>판단 기준</dt><dd>품목별 적용일·예외·수입자 부담이 계약가격에 어떻게 반영되는가</dd></div></dl><a class="watch-source" href="https://ustr.gov/about/policy-offices/press-office/press-releases/2026/july/ustr-takes-action-forced-labor-section-301-investigations" target="_blank" rel="noopener">USTR 최종 조치 ↗</a></article>
 <article class="watch watch-record" data-watch-state="pending"><div class="watch-topline"><div class="when">MACRO / TRANSMISSION</div><span class="watch-state">세부 통계 대기</span></div><h3>GDI 개선이 소비·투자로 이어지는가</h3><dl class="watch-meta"><div><dt>발표 주체</dt><dd>한국은행</dd></div><div><dt>확인 문서</dt><dd>GDP 잠정치와 지출·산업별 세부표</dd></div><div><dt>판단 기준</dt><dd>민간소비·설비투자·실질임금 개선이 함께 나타나는가</dd></div></dl><a class="watch-source" href="https://www.bok.or.kr/portal/bbs/B0000501/view.do?depth=201264&amp;menuNo=201264&amp;nttId=11063107&amp;programType=newsData&amp;relate=Y" target="_blank" rel="noopener">한국은행 속보치 ↗</a></article>
 <article class="watch watch-record" data-watch-state="pending"><div class="watch-topline"><div class="when">HEALTH / IMPLEMENTATION</div><span class="watch-state">실행표 대기</span></div><h3>5극3특 의료망의 예산·수가·인력표</h3><dl class="watch-meta"><div><dt>발표 주체</dt><dd>보건복지부·지역 조정기관</dd></div><div><dt>확인 문서</dt><dd>시범지역, 전원조정 권한, 응급·중증 수가와 인력 계획</dd></div><div><dt>판단 기준</dt><dd>수용 확정 시간과 거절 횟수, 책임 기관이 공개되는가</dd></div></dl><a class="watch-source" href="https://www.korea.kr/news/policyNewsView.do?newsId=148968583" target="_blank" rel="noopener">지역의료 추진전략 ↗</a></article>
 <article class="watch watch-record" data-watch-state="pending"><div class="watch-topline"><div class="when">PRIVACY / RULEMAKING</div><span class="watch-state">하위 규정 대기</span></div><h3>매출 10% 과징금의 적용 기준</h3><dl class="watch-meta"><div><dt>발표 주체</dt><dd>개인정보보호위원회</dd></div><div><dt>확인 문서</dt><dd>징벌적 과징금 산정 기준과 감경·자진신고 지침</dd></div><div><dt>판단 기준</dt><dd>관련 매출 범위와 위반 중대성, 시정조치가 어떻게 계산되는가</dd></div></dl><a class="watch-source" href="https://www.pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS212&amp;mCode=C040030000&amp;nttId=12293" target="_blank" rel="noopener">개인정보위 공식 자료 ↗</a></article>
 <article class="watch watch-record" data-watch-state="pending"><div class="watch-topline"><div class="when">POLITICS / RECORDS</div><span class="watch-state">후속 조치 대기</span></div><h3>서훈 취소 이후 피해회복 연계</h3><dl class="watch-meta"><div><dt>발표 주체</dt><dd>행정안전부·관계기관</dd></div><div><dt>확인 문서</dt><dd>개별 취소 근거, 파생 기록 정정 계획, 피해자 지원 연계표</dd></div><div><dt>판단 기준</dt><dd>정정 책임과 기한, 보상·배상 절차 연결이 공개되는가</dd></div></dl><a class="watch-source" href="https://www.mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000008&amp;nttId=128014" target="_blank" rel="noopener">행정안전부 발표 ↗</a></article>
</div></div></section>`;

const sourcesSection=`<section class="section method"><div class="wrap"><div class="rule-title"><span>10</span><span>SOURCES</span></div><h2 class="section-title">이번 호에 사용한<br>1차 자료</h2><p class="source-intro">기사의 사실관계와 수치는 아래 정부·규제기관·중앙은행·기업의 공식 문서에서 확인했습니다.</p><div class="source-list">
 <div class="source"><div class="org">대한민국 정부</div><a href="https://www.korea.kr/multi/visualNewsView.do?newsId=148968898" target="_blank" rel="noopener">샌프란시스코 AI 서밋 주요 성과</a><time>2026.07.24</time></div>
 <div class="source"><div class="org">대통령실</div><a href="https://www.korea.kr/briefing/presidentView.do?newsId=148968787" target="_blank" rel="noopener">샌프란시스코 AI 행사 결과 브리핑</a><time>2026.07.25</time></div>
 <div class="source"><div class="org">삼성전자</div><a href="https://news.samsung.com/global/samsung-electronics-and-broadcom-expand-strategic-collaboration-across-memory-and-foundry-technologies" target="_blank" rel="noopener">Samsung–Broadcom Strategic Collaboration</a><time>2026.07.25</time></div>
 <div class="source"><div class="org">USTR</div><a href="https://ustr.gov/about/policy-offices/press-office/press-releases/2026/july/ustr-takes-action-forced-labor-section-301-investigations" target="_blank" rel="noopener">Forced Labor Section 301 Final Action</a><time>2026.07.23</time></div>
 <div class="source"><div class="org">행정안전부</div><a href="https://www.mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000008&amp;nttId=128014" target="_blank" rel="noopener">반헌법적 행위·간첩조작사건 관련 정부포상 취소</a><time>2026.07.21</time></div>
 <div class="source"><div class="org">보건복지부</div><a href="https://www.korea.kr/news/policyNewsView.do?newsId=148968583" target="_blank" rel="noopener">지역·필수·공공의료 강화 추진전략</a><time>2026.07.22</time></div>
 <div class="source"><div class="org">개인정보위</div><a href="https://www.pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS212&amp;mCode=C040030000&amp;nttId=12293" target="_blank" rel="noopener">2026년 상반기 개인정보 보호·활용의 변화</a><time>2026.07.20</time></div>
 <div class="source"><div class="org">개인정보위</div><a href="https://www.pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS074&amp;nttId=12330" target="_blank" rel="noopener">틱톡·애플 개인정보 보호법 위반 제재</a><time>2026.07.23</time></div>
 <div class="source"><div class="org">한국은행</div><a href="https://www.bok.or.kr/portal/bbs/B0000501/view.do?depth=201264&amp;menuNo=201264&amp;nttId=11063107&amp;programType=newsData&amp;relate=Y" target="_blank" rel="noopener">2026년 2/4분기 실질 국내총생산(속보)</a><time>2026.07.23</time></div>
</div></div></section>`;

const editorialCss=`
/* editorial-v25 */
.no-break{display:inline-block;white-space:nowrap}
.reportage-evidence--two{grid-template-columns:repeat(2,minmax(0,1fr))!important;max-width:960px}
#tech .privacy-metrics{background:transparent!important;gap:14px!important}
#tech .privacy-metric{background:#f7f3e9!important;color:#101114!important;border:1px solid #c9c2b4!important;border-top:5px solid #ff765f!important;min-height:172px!important}
#tech .privacy-metric b{color:#101114!important;font-size:clamp(30px,4vw,54px)!important;line-height:1.05!important;letter-spacing:-.045em!important}
#tech .privacy-metric span{color:#4f4d47!important;font-weight:700!important}
.data-metrics-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;max-width:960px}
.data-metric-card{border:1px solid var(--line);background:var(--paper-2);padding:26px;min-height:190px;display:flex;flex-direction:column}
.data-metric-card .metric-section{font-size:10px;font-weight:950;letter-spacing:.14em;text-transform:uppercase;color:var(--accent-2)}
.data-metric-card .metric-value{font-size:clamp(42px,6vw,72px);font-weight:950;line-height:1;letter-spacing:-.055em;margin:18px 0 14px}
.data-metric-card h3{font-family:var(--serif);font-size:22px;line-height:1.35;margin:0 0 10px}
.data-metric-card p{font-size:13px;line-height:1.65;color:var(--muted);margin:auto 0 0}
.data-metric-card .metric-kind{display:inline-block;margin-top:18px;font-size:10px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;color:var(--accent-2)}
.watch-record{display:flex;flex-direction:column;min-height:360px}
.watch-topline{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}
.watch-state{flex:0 0 auto;border:1px solid var(--accent-2);padding:5px 7px;font-size:9px;font-weight:950;letter-spacing:.08em;color:var(--accent-2)}
.watch-meta{display:grid;gap:0;margin:18px 0 20px}
.watch-meta>div{display:grid;grid-template-columns:78px minmax(0,1fr);gap:12px;padding:9px 0;border-top:1px solid var(--line)}
.watch-meta dt{font-size:10px;font-weight:950;letter-spacing:.08em;color:var(--accent-2)}
.watch-meta dd{margin:0;font-size:12px;line-height:1.55;color:#3f3e39}
.watch-source{margin-top:auto;width:max-content;font-size:11px;font-weight:900;color:var(--accent-2)}
.source-intro{max-width:760px;margin:-8px 0 34px;font-size:14px;color:var(--muted)}
@media(max-width:700px){.reportage-evidence--two,.data-metrics-grid{grid-template-columns:1fr!important}.watch-record{min-height:0}}
`;

let html=await read('archive/2026-07-20.html');
html=html.replace(/<section class="verification-note">[\s\S]*?<\/section>/gi,'');
html=removeDivCardsByHeading(html,'NEXT RECORDS');

const politicsStart=html.search(/<section\b[^>]*id="politics"/i);
const politicsEnd=html.search(/<section\b[^>]*id="society"/i);
assert(politicsStart>=0&&politicsEnd>politicsStart,'Politics section not found');
const politicsSlice=html.slice(politicsStart,politicsEnd);
const reportageRelative=politicsSlice.search(/<div\b[^>]*id="reportage-politics"/i);
assert(reportageRelative>=0,'Politics reportage not found');
html=replaceBalancedDivByClass(html,politicsStart+reportageRelative,politicsEnd,'reportage-evidence',politicsEvidence);

let techStart=html.search(/<section\b[^>]*id="tech"/i);
let dataStart=html.search(/<section\b[^>]*id="data"/i);
assert(techStart>=0&&dataStart>techStart,'Tech section not found');
let tech=html.slice(techStart,dataStart);
tech=tech.replace(/<h2([^>]*)>[\s\S]*?<\/h2>/i,'<h2$1>개인정보 제재 <span class="no-break">6,804억 원</span><br>데이터 설계가 경영 책임이 됐다</h2>');
tech=tech.replace(/class="big-numbers(?![^"]*privacy-metrics)([^"]*)"/i,'class="big-numbers privacy-metrics$1"');
tech=tech.replace(/class="big-number(?!s)(?![^"]*privacy-metric)([^"]*)"/gi,'class="big-number privacy-metric$1"');
tech=tech.replace(/(?<!no-break">)6,804억\s*원/g,'<span class="no-break">6,804억 원</span>');
html=html.slice(0,techStart)+tech+html.slice(dataStart);

html=html.replace(/<section\b[^>]*id="data"[^>]*>[\s\S]*?(?=<section\b[^>]*id="watch")/i,dataSection);
html=html.replace(/<section\b[^>]*id="watch"[^>]*>[\s\S]*?(?=<section\b[^>]*class="[^"]*\bmethod\b[^"]*"|<footer\b)/i,watchSection);
html=html.replace(/<section\b[^>]*class="[^"]*\bmethod\b[^"]*"[^>]*>[\s\S]*?(?=<footer\b)/i,sourcesSection);
if(!html.includes('/* editorial-v25 */'))html=html.replace('</style>',editorialCss+'\n</style>');
html=html.replace(/WEEKLY SIGNAL · ISSUE 01 · EDITORIAL MODEL V\d+/g,'WEEKLY SIGNAL · ISSUE 01 · EDITORIAL MODEL V25');

assert(!/NEXT RECORDS/i.test(html),'NEXT RECORDS remains');
assert(!/EDITORIAL CHECK/i.test(html),'EDITORIAL CHECK remains');
assert((html.match(/class="data-metric-card"/g)||[]).length===6,'DATA card count is not six');
assert((html.match(/class="watch watch-record"/g)||[]).length===6,'WATCH card count is not six');
assert(html.includes('<span class="no-break">6,804억 원</span>'),'Privacy number no-break missing');
await write('archive/2026-07-20.html',html);

const standardAdd=`

## 발행면 반복 구조 규칙

- 반복형 대형 \`EDITORIAL CHECK\`는 사용하지 않는다. 검증 정보는 본문, 출처가 명시된 숫자 카드 또는 기사당 최대 한 개의 구체적 검증 단락으로 흡수한다.
- 르포 말미의 후속 카드는 정확히 \`확인된 조치\`와 \`아직 확인할 것\` 두 개로 구성한다. 대상과 판단 기준이 없는 \`NEXT RECORDS\`는 사용하지 않는다.
- DATA는 핵심 수치 6개를 기본으로 하며 데스크톱 2열, 모바일 1열로 배치한다. 단위가 다른 수치를 같은 막대 길이로 비교하지 않고 숫자와 단위를 줄바꿈하지 않는다.
- NEXT WEEK WATCH는 모든 카드에 상태, 발표 주체, 확인 문서, 판단 기준, 공식 1차 자료 링크를 표시한다.
- SOURCES 지면에는 실제 기사에 사용한 1차 자료만 싣고 선정·작성·검증 같은 내부 제작 절차를 노출하지 않는다.
- 위 계약이 하나라도 누락되면 정적 검증 실패로 처리하고 발행하지 않는다.
`;
const contractAdd=`

## Issue-level editorial contract

- Document Reportage의 후속 근거는 \`확인된 조치\`와 \`아직 확인할 것\` 두 카드만 허용한다.
- \`NEXT RECORDS\`와 반복형 \`EDITORIAL CHECK\` 컴포넌트는 금지한다.
- \`#data\`에는 \`.data-metric-card\`가 정확히 6개 있어야 하며 \`.data-metrics-grid\`는 데스크톱 2열·모바일 1열이어야 한다.
- 숫자와 단위는 \`.no-break\`로 묶는다.
- 모든 \`.watch-record\`는 \`.watch-state\`, \`발표 주체\`, \`확인 문서\`, \`판단 기준\`, 공식 링크를 포함한다.
- SOURCES에는 \`.method-grid\` 또는 \`.method-card\`를 두지 않고 실제 사용한 1차 자료 목록만 둔다.
`;
const runbookAdd=`

## 17. 발행면 편집 계약 점검

독립 보존호 조립 뒤 다음을 정적 검증과 렌더링 검수에 함께 포함한다.

- \`NEXT RECORDS\`와 반복형 \`EDITORIAL CHECK\`가 없는가.
- 르포 후속 카드가 \`확인된 조치 / 아직 확인할 것\` 두 개로 끝나는가.
- DATA가 핵심 수치 6개, 데스크톱 2열·모바일 1열이며 숫자와 단위가 분리되지 않는가.
- WATCH 카드마다 상태·발표 주체·확인 문서·판단 기준·공식 링크가 있는가.
- SOURCES에 실제 사용한 1차 자료 외의 내부 편집 절차가 노출되지 않는가.

하나라도 실패하면 발행과 최신호 포인터 갱신을 중단한다.
`;
for(const [file,marker,addition] of [
 ['editorial/EDITORIAL_STANDARD.md','## 발행면 반복 구조 규칙',standardAdd],
 ['templates/TEMPLATE_CONTRACT.md','## Issue-level editorial contract',contractAdd],
 ['editorial/WEEKLY_RUNBOOK.md','## 17. 발행면 편집 계약 점검',runbookAdd]
]){
 let content=await read(file);
 if(!content.includes(marker))content=content.trimEnd()+addition+'\n';
 await write(file,content);
}

let validator=await read('tools/validate-published-issue.mjs');
if(!validator.includes('Issue editorial contract')){
 const insertion=`

 // Issue editorial contract
 if(/NEXT RECORDS/i.test(html))fail('Latest issue contains prohibited NEXT RECORDS');
 if(/EDITORIAL CHECK/i.test(html))fail('Latest issue contains repetitive EDITORIAL CHECK');
 const politicsSection=(html.match(/<section\\b[^>]*id="politics"[^>]*>[\\s\\S]*?(?=<section\\b[^>]*id="society")/i)||[])[0]||'';
 const politicsReportage=(politicsSection.match(/<div\\b[^>]*id="reportage-politics"[^>]*>[\\s\\S]*$/i)||[])[0]||'';
 const evidenceBlock=(politicsReportage.match(/<div\\b[^>]*class="[^"]*\\breportage-evidence\\b[^"]*"[^>]*>[\\s\\S]*?<\\/div>\\s*<\\/div>/i)||[])[0]||politicsReportage;
 const evidenceCards=(evidenceBlock.match(/class="[^"]*\\breportage-card\\b[^"]*"/gi)||[]).length;
 if(evidenceCards!==2)fail('Politics reportage must end with exactly two evidence cards');
 if(!evidenceBlock.includes('확인된 조치')||!evidenceBlock.includes('아직 확인할 것'))fail('Politics evidence cards must be 확인된 조치 / 아직 확인할 것');
 const dataCards=(html.match(/class="[^"]*\\bdata-metric-card\\b[^"]*"/gi)||[]).length;
 if(dataCards!==6)fail('DATA must contain exactly six core figure cards');
 const watchCards=[...html.matchAll(/<article\\b[^>]*class="[^"]*\\bwatch-record\\b[^"]*"[^>]*>([\\s\\S]*?)<\\/article>/gi)];
 if(!watchCards.length)fail('NEXT WEEK WATCH records are missing');
 for(const [,card] of watchCards){
  if(!/class="[^"]*\\bwatch-state\\b/i.test(card))fail('WATCH record is missing state');
  for(const label of ['발표 주체','확인 문서','판단 기준'])if(!card.includes(label))fail('WATCH record is missing '+label);
  if(!/<a\\b[^>]*href="https?:\\/\\//i.test(card))fail('WATCH record is missing an official link');
 }
 if(/class="[^"]*\\b(?:method-grid|method-card)\\b/i.test(html))fail('SOURCES exposes internal editorial process cards');
 if(!html.includes('<span class="no-break">6,804억 원</span>'))fail('Privacy figure must keep number and unit together');
`;
 validator=validator.replace('\n}\n\nconst archiveIndex',insertion+'\n}\n\nconst archiveIndex');
 assert(validator.includes('Issue editorial contract'),'Validator insertion failed');
 await write('tools/validate-published-issue.mjs',validator);
}

for(const relative of [
 'archive/reader-v25-editorial.css','archive/reader-v25-editorial.js','archive/reader-editorial-validator.js',
 'archive/reader-v14-method.js','archive/reader-v4-pre-v9.js','archive/2026-07-20-reader.html',
 'EDITORIAL_STANDARD.md','ISSUE_TEMPLATE.md'
])await fs.rm(path.join(root,relative),{force:true});

await fs.rm(path.join(root,'tools/apply-issue-01-editorial.mjs'),{force:true});
await fs.rm(path.join(root,'.github/workflows/apply-issue-01-editorial.yml'),{force:true});
console.log('Issue 01 editorial migration applied.');
