import { classifyFileChange } from './classify.ts';
import { mergeText } from './merge.ts';
import { hashContent } from './hash.ts';
import type { Ownership, RegenerationCounts, RegenerationEntry, RegenerationPlan } from './model.ts';

type Input={projectId:string;previousGenerationId:string;nextGenerationId:string;baseline:Map<string,string>;current:Map<string,string>;next:Map<string,string>};
const h=(v:string|null)=>v===null?null:hashContent(v);
export function buildRegenerationPlan(input:Input):RegenerationPlan {
  const factoryPaths=new Set([...input.baseline.keys(),...input.next.keys()]);
  const paths=[...factoryPaths].sort(); const entries:RegenerationEntry[]=[];
  for(const path of paths){
    const base=input.baseline.get(path)??null, current=input.current.get(path)??null, next=input.next.get(path)??null;
    const ownership:Ownership=base!==null?'factory-owned':(current!==null?'user-owned':'new-next');
    let {status,reason}=classifyFileChange({path,base,current,next,ownership}); let resultContent:string|undefined; let conflicts;
    if(status==='auto-merge'&&base!==null&&current!==null&&next!==null){const merged=mergeText({path,base,current,next});if(merged.status==='merged'){resultContent=merged.content;reason=`Merged with ${merged.strategy}.`;}else{status='conflict';conflicts=merged.hunks;reason='Overlapping edits require explicit resolution.';}}
    if(status==='update-factory'||status==='add') resultContent=next??undefined;
    if(status==='preserve-user'||status==='unchanged') resultContent=current??next??undefined;
    entries.push({path,status,ownership,reason,baseHash:h(base),currentHash:h(current),nextHash:h(next),resultHash:resultContent===undefined?null:h(resultContent),resultContent,conflicts});
  }
  const counts:RegenerationCounts={unchanged:0,added:0,updated:0,preserved:0,merged:0,deleted:0,conflicts:0};
  for(const e of entries){if(e.status==='unchanged')counts.unchanged++;else if(e.status==='add')counts.added++;else if(e.status==='update-factory')counts.updated++;else if(e.status==='preserve-user')counts.preserved++;else if(e.status==='auto-merge')counts.merged++;else if(e.status==='delete-factory')counts.deleted++;else counts.conflicts++;}
  return {schema:'risheh.regeneration-plan.v1',projectId:input.projectId,previousGenerationId:input.previousGenerationId,nextGenerationId:input.nextGenerationId,blocked:counts.conflicts>0,counts,entries};
}
