import path from 'node:path';
import { promises as fs } from 'node:fs';

const root=process.cwd();
const archiveDir=path.join(root,'archive');
const failures=[];
const fail=message=>failures.push(message);
const exists=async file=>{try{await fs.access(file);return true}catch{return false}};

const latestPath=path.join(root,'latest.json');
if(!await exists(latestPath))fail('latest.json is missing');
let latest={};
try{latest=JSON.parse(await fs.readFile(latestPath,'utf8'))}catch(error){fail('latest.json is invalid JSON: '+error.message)}

const issuePath=typeof latest.path==='string'?latest.path:'';
if(!/^archive\/\d{4}-\d{2}-\d{2}\.html$/.test(issuePath))fail('latest.json path must target archive/YYYY-MM-DD.html');
if(issuePath.includes('-reader.html'))fail('latest.json must not target a reader wrapper');

const issueFile=path.join(root,issuePath);
let html='';
if(issuePath&&!await exists(issueFile))fail('Latest issue file does not exist: '+issuePath);
else if(issuePath)html=await fs.readFile(issueFile,'utf8');

if(html){
 const issueDate=path.basename(issuePath,'.html');
 const required=[
  '<meta name="weekly-signal-build" content="standalone-'+issueDate+'">',
  'id="contents"','id="life-scene"','id="opening"','id="cover-story"',
  'id="economy"','id="politics"','id="society"','id="tech"','id="data"','id="watch"'
 ];
 for(const marker of required)if(!html.includes(marker))fail('Latest issue is missing required marker: '+marker);
 if(/reader-v[^"'<>\s]*/i.test(html))fail('Latest issue still references a reader-v asset');
 if(/-reader\.html/i.test(html))fail('Latest issue still references a reader wrapper');
 if(/document\.write\s*\(/i.test(html))fail('Latest issue contains document.write');
 if(/fetch\s*\([^)]*(?:\.html|reader)/i.test(html))fail('Latest issue appears to fetch article HTML at runtime');
}

const archiveIndex=path.join(archiveDir,'index.html');
if(!await exists(archiveIndex))fail('archive/index.html is missing');
else if(issuePath){
 const indexText=await fs.readFile(archiveIndex,'utf8');
 const relative=issuePath.replace(/^archive\//,'');
 if(!indexText.includes(relative))fail('archive/index.html does not link to '+relative);
}

if(await exists(path.join(root,'EDITORIAL_STANDARD.md')))fail('Duplicate root EDITORIAL_STANDARD.md must not exist');

if(await exists(archiveDir)){
 const names=await fs.readdir(archiveDir);
 for(const name of names){
  if(/^reader-v.*\.(?:js|css)$/i.test(name))fail('Legacy reader asset remains: archive/'+name);
  if(/-reader\.html$/i.test(name))fail('Legacy reader wrapper remains: archive/'+name);
 }
}

if(failures.length){
 console.error('Published issue validation failed:');
 failures.forEach(item=>console.error('- '+item));
 process.exit(1);
}
console.log('Published issue validation passed: '+issuePath);
