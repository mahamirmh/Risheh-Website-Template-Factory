import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile, mkdir, access } from 'node:fs/promises';
import os from 'node:os'; import path from 'node:path';
import { initializeRegenerationState, loadRegenerationState, loadActiveBaseline } from '../../src/features/regeneration/state.ts';
import { createStagingWorkspace, applyPlanToStaging } from '../../src/features/regeneration/staging.ts';
import type { FilePlan } from '../../src/features/codegen/model.ts';

test('initialization persists exact Factory baseline and excludes env/user files', async()=>{
 const root=await mkdtemp(path.join(os.tmpdir(),'risheh-c3-')); await writeFile(path.join(root,'a.ts'),'factory'); await writeFile(path.join(root,'.env'),'SECRET=x'); await writeFile(path.join(root,'notes.md'),'mine');
 const plan={projectId:'demo',files:[{path:'a.ts',kind:'component',owner:'factory',sources:[],content:'factory',hash:'ignored',overwrite:'replace-generated'}]} as FilePlan;
 await initializeRegenerationState(root,plan,{buildSpec:{x:1},factoryVersion:'2.2.0'});
 const state=await loadRegenerationState(root); assert.equal(state.projectId,'demo');
 const baseline=await loadActiveBaseline(root,state); assert.equal(baseline.files.get('a.ts'),'factory'); assert.equal(baseline.files.has('.env'),false); assert.equal(baseline.files.has('notes.md'),false);
});

test('staging applies operations without mutating active project', async()=>{
 const root=await mkdtemp(path.join(os.tmpdir(),'risheh-c3-active-')); await writeFile(path.join(root,'a.ts'),'old'); await mkdir(path.join(root,'node_modules')); await writeFile(path.join(root,'node_modules','x'),'x');
 const staging=await createStagingWorkspace(root,'r1');
 const plan={schema:'risheh.regeneration-plan.v1',projectId:'demo',previousGenerationId:'g1',nextGenerationId:'g2',blocked:false,counts:{unchanged:0,added:0,updated:1,preserved:0,merged:0,deleted:0,conflicts:0},entries:[{path:'a.ts',status:'update-factory',ownership:'factory-owned',reason:'x',baseHash:null,currentHash:null,nextHash:null,resultHash:null,resultContent:'new'}]} as any;
 await applyPlanToStaging(staging,plan); assert.equal(await readFile(path.join(root,'a.ts'),'utf8'),'old'); assert.equal(await readFile(path.join(staging,'a.ts'),'utf8'),'new'); await assert.rejects(access(path.join(staging,'node_modules','x')));
});
