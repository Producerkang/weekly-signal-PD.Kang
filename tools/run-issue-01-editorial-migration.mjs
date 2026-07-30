import path from 'node:path';
import { promises as fs } from 'node:fs';

const root=process.cwd();
const migrationPath=path.join(root,'tools/apply-issue-01-editorial.mjs');
let source=await fs.readFile(migrationPath,'utf8');
const needle="html=removeDivCardsByHeading(html,'NEXT RECORDS');";
if(!source.includes("html=removeDivCardsByHeading(html,'EDITORIAL CHECK');")){
 if(!source.includes(needle))throw new Error('Migration patch point not found');
 source=source.replace(needle,needle+"\nhtml=removeDivCardsByHeading(html,'EDITORIAL CHECK');");
 await fs.writeFile(migrationPath,source,'utf8');
}
await import('./apply-issue-01-editorial.mjs?run='+Date.now());
await fs.rm(path.join(root,'tools/run-issue-01-editorial-migration.mjs'),{force:true});
