import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { FilePlan } from '../codegen/model.ts';
import { createGenerationId, hashBuildSpec, hashContent } from './hash.ts';
import type { BaselineManifest, RegenerationState } from './model.ts';

const STATE='.risheh/state.json';
export async function initializeRegenerationState(projectRoot:string,plan:FilePlan,options:{buildSpec:unknown;factoryVersion:string;sequence?:number}){
 const sequence=options.sequence??1, buildSpecHash=hashBuildSpec(options.buildSpec), generationId=createGenerationId(plan.projectId,sequence,buildSpecHash);
 const baselineRel=`.risheh/baselines/${generationId}`, filesDir=path.join(projectRoot,baselineRel,'files'); await mkdir(filesDir,{recursive:true});
 const manifest:BaselineManifest={schema:'risheh.baseline.v1',projectId:plan.projectId,generationId,files:[]};
 for(const file of plan.files){ if(/^\.env(?:\.|$)/.test(file.path)) continue; const target=path.resolve(filesDir,file.path); if(!target.startsWith(`${path.resolve(filesDir)}${path.sep}`)) throw new Error('Unsafe baseline path'); await mkdir(path.dirname(target),{recursive:true}); await writeFile(target,file.content,'utf8'); manifest.files.push({path:file.path,hash:hashContent(file.content)}); }
 manifest.files.sort((a,b)=>a.path.localeCompare(b.path)); await writeFile(path.join(projectRoot,baselineRel,'manifest.json'),`${JSON.stringify(manifest,null,2)}\n`,'utf8');
 const state:RegenerationState={schema:'risheh.regeneration-state.v1',projectId:plan.projectId,activeGenerationId:generationId,buildSpecHash,factoryVersion:options.factoryVersion,baselineDir:baselineRel,sequence}; await mkdir(path.join(projectRoot,'.risheh'),{recursive:true}); await writeFile(path.join(projectRoot,STATE),`${JSON.stringify(state,null,2)}\n`,'utf8'); return state;
}
export async function loadRegenerationState(projectRoot:string):Promise<RegenerationState>{const data=JSON.parse(await readFile(path.join(projectRoot,STATE),'utf8'));if(data.schema!=='risheh.regeneration-state.v1')throw new Error('Invalid regeneration state');return data;}
export async function loadActiveBaseline(projectRoot:string,state:RegenerationState){const manifest=JSON.parse(await readFile(path.join(projectRoot,state.baselineDir,'manifest.json'),'utf8')) as BaselineManifest;const files=new Map<string,string>();for(const item of manifest.files){const content=await readFile(path.join(projectRoot,state.baselineDir,'files',item.path),'utf8');if(hashContent(content)!==item.hash)throw new Error(`Baseline integrity failure: ${item.path}`);files.set(item.path,content);}return {manifest,files};}
