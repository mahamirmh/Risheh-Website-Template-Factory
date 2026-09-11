import type { Ownership, RegenerationStatus } from './model.ts';

export type ClassificationInput = { path:string; base:string|null; current:string|null; next:string|null; ownership:Ownership };
export function classifyFileChange(input: ClassificationInput): {status:RegenerationStatus; reason:string} {
  const { base, current, next, ownership } = input;
  if (base === null) {
    if (next === null) return { status:'unchanged', reason:'Not Factory-owned and not generated next.' };
    if (current !== null || ownership === 'user-owned') return { status:'conflict', reason:'Factory output collides with a user-owned path.' };
    return { status:'add', reason:'New Factory-generated file.' };
  }
  if (current === null) {
    if (next === null) return { status:'unchanged', reason:'Manual removal matches Factory removal.' };
    return { status:'conflict', reason:'Factory-owned file was manually deleted but is still required.' };
  }
  if (next === null) {
    if (current === base) return { status:'delete-factory', reason:'Untouched obsolete Factory file can be deleted.' };
    return { status:'conflict', reason:'Obsolete Factory file contains manual edits and cannot be deleted.' };
  }
  const userChanged = current !== base;
  const factoryChanged = next !== base;
  if (!userChanged && !factoryChanged) return { status:'unchanged', reason:'No change.' };
  if (!userChanged && factoryChanged) return { status:'update-factory', reason:'Only Factory changed the file.' };
  if (userChanged && !factoryChanged) return { status:'preserve-user', reason:'Only user changed the file.' };
  return { status:'auto-merge', reason:'Both sides changed; merge adapter must decide.' };
}
