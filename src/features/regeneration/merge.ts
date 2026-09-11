import type { ConflictHunk } from './model.ts';

export type MergeResult = {status:'merged';content:string;strategy:string}|{status:'conflict';hunks:ConflictHunk[]};
const TEXT_EXT = /\.(?:[cm]?[jt]sx?|css|scss|md|txt|json|ya?ml|html)$/i;
export function mergeText({path,base,current,next}:{path:string;base:string;current:string;next:string}): MergeResult {
  if (!TEXT_EXT.test(path)) return {status:'conflict',hunks:[]};
  if (current === base) return {status:'merged',content:next,strategy:'factory-only'};
  if (next === base) return {status:'merged',content:current,strategy:'user-only'};
  const b=base.split('\n'), c=current.split('\n'), n=next.split('\n');
  if (b.length !== c.length || b.length !== n.length) return {status:'conflict',hunks:[{line:0,base,current,next}]};
  const out:string[]=[]; const hunks:ConflictHunk[]=[];
  for (let i=0;i<b.length;i++) {
    const uc=c[i]!==b[i], fc=n[i]!==b[i];
    if (uc && fc && c[i]!==n[i]) { hunks.push({line:i+1,base:b[i]??null,current:c[i]??null,next:n[i]??null}); out.push(c[i]); }
    else out.push(uc ? c[i] : n[i]);
  }
  return hunks.length ? {status:'conflict',hunks} : {status:'merged',content:out.join('\n'),strategy:'line-three-way'};
}
