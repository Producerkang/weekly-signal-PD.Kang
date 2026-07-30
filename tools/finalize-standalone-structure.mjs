import path from 'node:path';
import { promises as fs } from 'node:fs';
import { execFileSync } from 'node:child_process';

const root=process.cwd();
const read=file=>fs.readFile(path.join(root,file),'utf8');
const write=(file,content)=>fs.writeFile(path.join(root,file),content,'utf8');

function replaceRequired(source,from,to,label){
 if(!source.includes(from))throw new Error(`Missing replacement marker: ${label}`);
 return source.replace(from,to);
}

async function updateTemplateContract(){
 const file='templates/TEMPLATE_CONTRACT.md';
 let text=await read(file);
 const oldState=`## 1. 현재 상태\n\n제1호는 \`archive/2026-07-20.html\`, reader 파일과 여러 CSS·JS 보정 파일을 결합해 표시되는 과도기 구조다.\n\n- 제1호는 시각적 참고 자료다.\n- 제1호의 기사 내용·날짜·출처·이미지 자산은 템플릿이 아니다.\n- reader 계열의 fetch·본문 치환·누적 보정 구조를 새 호에 복사하지 않는다.\n- 제2호와 제3호는 이 계약에 따른 독립 보존호로 제작한다.\n- 정식 템플릿은 제2호와 제3호에서 공통 셸과 모듈이 검증된 뒤 추출한다.`;
 const newState=`## 1. 현재 상태\n\n제1호는 \`archive/2026-07-20.html\` 하나를 공개 기준본으로 사용하는 독립 보존호로 전환됐다. 제작 과정에서 사용한 reader 누적 후처리 구조는 제거했다.\n\n- 모든 새 호는 \`archive/YYYY-MM-DD.html\`을 독립적인 공개 기준본으로 발행한다.\n- 제작 브랜치에서 원고·스타일·이미지를 나누어 작업할 수 있지만, 발행본은 후단 패치나 본문 조립 런타임에 의존하지 않는다.\n- 제1호는 시각적 참고 자료이며 기사 내용·날짜·출처·이미지 자산은 템플릿이 아니다.\n- 정식 템플릿은 제2호와 제3호에서 공통 셸과 모듈이 검증된 뒤 추출한다.`;
 text=replaceRequired(text,oldState,newState,'template current state');

 text=replaceRequired(text,
  '독립 보존호는 단일 물리 파일만을 의미하지 않는다. 다음 파일만으로 해당 호를 재현할 수 있어야 한다.',
  '독립 보존호의 공개 기준점은 `archive/YYYY-MM-DD.html` 하나다. 이미지와 버전 고정 자산을 별도 파일로 둘 수 있으나, 다음 범위만으로 해당 호를 재현할 수 있어야 하며 기사 본문과 최종 DOM을 런타임에서 다시 조립하지 않는다.',
  'standalone definition');

 const oldDom=`    <section id="front-spread" data-section="front-spread">\n      <section id="contents" data-section="contents"></section>\n      <section id="life-scene" data-section="life-scene"></section>\n    </section>\n\n    <section id="opening" data-section="opening"></section>`;
 const newDom=`    <section id="contents" data-section="contents"></section>\n    <section id="life-scene" data-section="life-scene"></section>\n    <section id="opening" data-section="opening"></section>`;
 text=replaceRequired(text,oldDom,newDom,'front matter DOM');

 text=replaceRequired(text,
  '- Front Spread는 넓은 화면 40:60, 좁은 화면 1열이다.',
  '- Contents와 LIFE SCENE은 각각 전체 폭의 독립 지면이며, Contents는 데스크톱에서 내부 스크롤 없이 전체 항목을 표시한다.',
  'CSS front matter');

 text=replaceRequired(text,
  '- `path`는 reader 래퍼가 아니라 독립 보존호를 가리킨다.',
  '- `path`는 reader 래퍼가 아니라 독립 보존호를 가리킨다. `*-reader.html`과 `reader-v*` 자산은 발행 경로에 둘 수 없다.',
  'latest path rule');

 text=replaceRequired(text,
  '날짜별 HTML의 `<head>`에는 최소한 다음을 포함한다.\n\n- UTF-8 charset',
  '날짜별 HTML의 `<head>`에는 최소한 다음을 포함한다.\n\n- `<meta name="weekly-signal-build" content="standalone-YYYY-MM-DD">`\n- UTF-8 charset',
  'standalone build marker');

 await write(file,text);
}

async function updateRunbook(){
 const file='editorial/WEEKLY_RUNBOOK.md';
 let text=await read(file);
 text=replaceRequired(text,
  '- 가상·합성 사례를 첫 부분과 후단에 고지한다.',
  '- 가상·합성 사례는 섹션 표기와 후단 SCENARIO NOTE를 통해 실제 취재 사례와 혼동되지 않게 한다.',
  'runbook LIFE notice');

 text=replaceRequired(text,
  '새 호는 다음으로 구성한다.\n\n- `archive/YYYY-MM-DD.html`\n- `archive/assets/YYYY-MM-DD/`\n- 버전 고정 공용 런타임 또는 호별 포함 CSS·JS',
  '새 호의 공개 기준점은 `archive/YYYY-MM-DD.html` 하나다. 다음 자산을 함께 사용할 수 있으나 본문과 최종 DOM은 보존호 HTML에 존재해야 한다.\n\n- `archive/YYYY-MM-DD.html`\n- `archive/assets/YYYY-MM-DD/`\n- 버전 고정 공용 런타임 또는 호별 포함 CSS·JS',
  'runbook assembly');

 text=replaceRequired(text,
  '- 보존호 본문 fetch\n- JS의 기사 콘텐츠 하드코딩',
  '- 보존호 본문 fetch\n- `*-reader.html`, `reader-v*`와 후단 누적 패치 참조\n- JS의 기사 콘텐츠 하드코딩',
  'static reader checks');

 text=replaceRequired(text,
  '- 넓은 화면 Front Spread 40:60\n- 좁은 화면 Contents → LIFE SCENE',
  '- Contents의 모든 항목이 내부 스크롤 없이 표시되는지\n- Contents → LIFE SCENE → Opening 순서가 유지되는지',
  'render front matter checks');

 text=replaceRequired(text,
  '1. 보존호 HTML과 날짜별 자산 추가\n2. 정적 검증',
  '1. 제작 결과를 독립 보존호 HTML과 날짜별 자산으로 동결\n2. `node tools/validate-published-issue.mjs` 정적 검증',
  'publication validation command');

 await write(file,text);
}

async function updateStandaloneMetadata(){
 const file='archive/2026-07-20.html';
 let text=await read(file);
 text=text.replace(/data-content-edition="issue-01-editorial-v\d+"/,'data-content-edition="issue-01-standalone-2026-07-20"');
 if(!text.includes('data-content-edition="issue-01-standalone-2026-07-20"'))throw new Error('Standalone issue metadata was not updated');
 await write(file,text);
}

async function addValidator(){
 const validator=`import path from 'node:path';\nimport { promises as fs } from 'node:fs';\n\nconst root=process.cwd();\nconst archiveDir=path.join(root,'archive');\nconst failures=[];\nconst fail=message=>failures.push(message);\nconst exists=async file=>{try{await fs.access(file);return true}catch{return false}};\n\nconst latestPath=path.join(root,'latest.json');\nif(!await exists(latestPath))fail('latest.json is missing');\nlet latest={};\ntry{latest=JSON.parse(await fs.readFile(latestPath,'utf8'))}catch(error){fail('latest.json is invalid JSON: '+error.message)}\n\nconst issuePath=typeof latest.path==='string'?latest.path:'';\nif(!/^archive\\/\\d{4}-\\d{2}-\\d{2}\\.html$/.test(issuePath))fail('latest.json path must target archive/YYYY-MM-DD.html');\nif(issuePath.includes('-reader.html'))fail('latest.json must not target a reader wrapper');\n\nconst issueFile=path.join(root,issuePath);\nlet html='';\nif(issuePath&&!await exists(issueFile))fail('Latest issue file does not exist: '+issuePath);\nelse if(issuePath)html=await fs.readFile(issueFile,'utf8');\n\nif(html){\n const issueDate=path.basename(issuePath,'.html');\n const required=[\n  '<meta name="weekly-signal-build" content="standalone-'+issueDate+'">',\n  'id="contents"','id="life-scene"','id="opening"','id="cover-story"',\n  'id="economy"','id="politics"','id="society"','id="tech"','id="data"','id="watch"'\n ];\n for(const marker of required)if(!html.includes(marker))fail('Latest issue is missing required marker: '+marker);\n if(/reader-v[^"'<>\\s]*/i.test(html))fail('Latest issue still references a reader-v asset');\n if(/-reader\\.html/i.test(html))fail('Latest issue still references a reader wrapper');\n if(/document\\.write\\s*\\(/i.test(html))fail('Latest issue contains document.write');\n if(/fetch\\s*\\([^)]*(?:\\.html|reader)/i.test(html))fail('Latest issue appears to fetch article HTML at runtime');\n}\n\nconst archiveIndex=path.join(archiveDir,'index.html');\nif(!await exists(archiveIndex))fail('archive/index.html is missing');\nelse if(issuePath){\n const indexText=await fs.readFile(archiveIndex,'utf8');\n const relative=issuePath.replace(/^archive\\//,'');\n if(!indexText.includes(relative))fail('archive/index.html does not link to '+relative);\n}\n\nif(await exists(path.join(root,'EDITORIAL_STANDARD.md')))fail('Duplicate root EDITORIAL_STANDARD.md must not exist');\n\nif(await exists(archiveDir)){\n const names=await fs.readdir(archiveDir);\n for(const name of names){\n  if(/^reader-v.*\\.(?:js|css)$/i.test(name))fail('Legacy reader asset remains: archive/'+name);\n  if(/-reader\\.html$/i.test(name))fail('Legacy reader wrapper remains: archive/'+name);\n }\n}\n\nif(failures.length){\n console.error('Published issue validation failed:');\n failures.forEach(item=>console.error('- '+item));\n process.exit(1);\n}\nconsole.log('Published issue validation passed: '+issuePath);\n`;
 await write('tools/validate-published-issue.mjs',validator);

 const workflow=`name: Validate published issue\n\non:\n  pull_request:\n    paths:\n      - 'archive/**'\n      - 'latest.json'\n      - 'index.html'\n      - 'editorial/**'\n      - 'templates/**'\n      - 'tools/validate-published-issue.mjs'\n      - '.github/workflows/validate-published-issue.yml'\n  push:\n    branches: [main]\n    paths:\n      - 'archive/**'\n      - 'latest.json'\n      - 'index.html'\n      - 'editorial/**'\n      - 'templates/**'\n      - 'tools/validate-published-issue.mjs'\n      - '.github/workflows/validate-published-issue.yml'\n  workflow_dispatch:\n\npermissions:\n  contents: read\n\njobs:\n  validate:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: '22'\n      - run: node tools/validate-published-issue.mjs\n`;
 await write('.github/workflows/validate-published-issue.yml',workflow);
}

async function removeTemporaryMigrationFiles(){
 const files=[
  '.github/workflows/migrate-issue-01-standalone.yml',
  'tools/migrate-issue-01-to-standalone.mjs',
  'migration/issue-01-standalone.trigger',
  'migration/finalize-standalone.trigger',
  '.github/workflows/finalize-standalone-structure.yml',
  'tools/finalize-standalone-structure.mjs'
 ];
 for(const file of files)await fs.rm(path.join(root,file),{force:true});
 try{await fs.rmdir(path.join(root,'migration'))}catch{}
}

await updateTemplateContract();
await updateRunbook();
await updateStandaloneMetadata();
await addValidator();
await removeTemporaryMigrationFiles();
execFileSync(process.execPath,['tools/validate-published-issue.mjs'],{stdio:'inherit'});
console.log('Standalone publication structure finalized.');
