import { mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { BuildSpec } from '../../types/factory.ts';
import type { FilePlan, GenerationMode } from './model.ts';
import { loadFactoryCatalog } from '../../lib/catalog.ts';
import { generateProjectPlan } from './generator.ts';
import { sanitizeProjectId } from './naming.ts';
import { initializeRegenerationState } from '../regeneration/state.ts';

export type GenerationRuntimeResult = { projectId:string; outputPath:string; fileCount:number; files:string[] };
export async function writeFilePlan(plan:FilePlan,workspaceRoot=path.join(process.cwd(),'.generated')):Promise<GenerationRuntimeResult>{
 const safeId=sanitizeProjectId(plan.projectId),root=path.resolve(workspaceRoot),outputPath=path.resolve(root,safeId);if(!outputPath.startsWith(`${root}${path.sep}`))throw new Error('Unsafe generation workspace path');await mkdir(root,{recursive:true});await rm(outputPath,{recursive:true,force:true});await mkdir(outputPath,{recursive:true});for(const file of plan.files){const target=path.resolve(outputPath,file.path);if(!target.startsWith(`${outputPath}${path.sep}`))throw new Error(`Unsafe generated file path: ${file.path}`);await mkdir(path.dirname(target),{recursive:true});await writeFile(target,file.content,'utf8');}return{projectId:safeId,outputPath,fileCount:plan.files.length,files:plan.files.map(f=>f.path)};
}
export async function generateToWorkspace(buildSpec:BuildSpec,mode:GenerationMode='deterministic',workspaceRoot?:string){const catalog=await loadFactoryCatalog();const plan=generateProjectPlan(buildSpec,catalog,mode);const artifact=await writeFilePlan(plan,workspaceRoot);await initializeRegenerationState(artifact.outputPath,plan,{buildSpec,factoryVersion:'2.3.0'});return artifact;}
