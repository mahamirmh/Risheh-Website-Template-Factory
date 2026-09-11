'use client';

import { useEffect, useState } from 'react';
import { GeneratorWorkspace } from './GeneratorWorkspace';
import { GenerateProjectPanel } from './GenerateProjectPanel';
import { RegenerationPanel } from '@/components/regeneration/RegenerationPanel';
import { composeBuildSpec, validateDraftForBuild } from '@/features/generator/build-spec';
import { loadDraft } from '@/features/generator/persistence';
import type { FactoryCatalog } from '@/types/factory';

export function GeneratorWithCodegen({ catalog }: { catalog: FactoryCatalog }) {
  const [ready, setReady] = useState(false);
  useEffect(() => { const check=()=>{const draft=loadDraft();setReady(Boolean(draft&&validateDraftForBuild(catalog,draft).length===0));};check();const timer=window.setInterval(check,700);return()=>window.clearInterval(timer);}, [catalog]);
  async function getBuildSpec(){const draft=loadDraft();if(!draft)return null;const errors=validateDraftForBuild(catalog,draft);if(errors.length)throw new Error(errors.join(' '));const spec=composeBuildSpec(catalog,draft);const response=await fetch('/api/build-spec',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(spec)});const validation=await response.json() as {valid:boolean;errors?:{path:string;message:string}[]};if(!validation.valid)throw new Error(validation.errors?.map(i=>`${i.path}: ${i.message}`).join(' · ')||'Build Spec validation failed.');return spec;}
  return <><GeneratorWorkspace catalog={catalog}/><div className="c2-dock"><GenerateProjectPanel disabled={!ready} getBuildSpec={getBuildSpec}/><RegenerationPanel disabled={!ready} getBuildSpec={getBuildSpec}/></div></>;
}
