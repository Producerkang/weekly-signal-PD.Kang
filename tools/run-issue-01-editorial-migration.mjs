import path from 'node:path';
import { promises as fs } from 'node:fs';
import { spawnSync } from 'node:child_process';

const root=process.cwd();
const migrationPath=path.join(root,'tools/apply-issue-01-editorial.mjs');
let source=await fs.readFile(migrationPath,'utf8');

const needle="html=removeDivCardsByHeading(html,'NEXT RECORDS');";
if(!source.includes("html=removeDivCardsByHeading(html,'EDITORIAL CHECK');")){
 if(!source.includes(needle))throw new Error('Migration patch point not found');
 source=source.replace(needle,needle+"\nhtml=removeDivCardsByHeading(html,'EDITORIAL CHECK');");
}

const repairs=[
 [
  "html=html.replace('</style>',editorialCss+'\n</style>');",
  "html=html.replace('</style>',editorialCss+'\\n</style>');"
 ],
 [
  "if(!content.includes(marker))content=content.trimEnd()+addition+'\n';",
  "if(!content.includes(marker))content=content.trimEnd()+addition+'\\n';"
 ],
 [
  "validator=validator.replace('\n}\n\nconst archiveIndex',insertion+'\n}\n\nconst archiveIndex');",
  "validator=validator.replace('\\n}\\n\\nconst archiveIndex',insertion+'\\n}\\n\\nconst archiveIndex');"
 ]
];

for(const [broken,fixed] of repairs){
 if(source.includes(broken))source=source.replace(broken,fixed);
}

await fs.writeFile(migrationPath,source,'utf8');
const checked=spawnSync(process.execPath,['--check',migrationPath],{encoding:'utf8'});
if(checked.status!==0){
 throw new Error('Migration syntax check failed:\n'+(checked.stderr||checked.stdout||'unknown syntax error'));
}

await import('./apply-issue-01-editorial.mjs?run='+Date.now());
await fs.rm(path.join(root,'tools/run-issue-01-editorial-migration.mjs'),{force:true});
