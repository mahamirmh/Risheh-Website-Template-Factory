export type RegenerationStatus = 'unchanged' | 'add' | 'update-factory' | 'preserve-user' | 'auto-merge' | 'delete-factory' | 'conflict';
export type Ownership = 'factory-owned' | 'user-owned' | 'shared-modified' | 'removed-current' | 'new-next' | 'removed-next';

export type ConflictHunk = { line: number; base: string | null; current: string | null; next: string | null };
export type RegenerationEntry = {
  path: string;
  status: RegenerationStatus;
  ownership: Ownership;
  reason: string;
  baseHash: string | null;
  currentHash: string | null;
  nextHash: string | null;
  resultHash: string | null;
  resultContent?: string;
  conflicts?: ConflictHunk[];
};
export type RegenerationCounts = { unchanged:number; added:number; updated:number; preserved:number; merged:number; deleted:number; conflicts:number };
export type RegenerationPlan = {
  schema: 'risheh.regeneration-plan.v1'; projectId:string; previousGenerationId:string; nextGenerationId:string;
  blocked:boolean; counts:RegenerationCounts; entries:RegenerationEntry[];
};
export type RegenerationState = {
  schema:'risheh.regeneration-state.v1'; projectId:string; activeGenerationId:string; buildSpecHash:string;
  factoryVersion:string; baselineDir:string; sequence:number;
};
export type BaselineManifest = {
  schema:'risheh.baseline.v1'; projectId:string; generationId:string; files:{path:string;hash:string}[];
};
export type RegenerationReport = {
  schema:'risheh.regeneration-report.v1'; regenerationId:string; projectId:string; previousGenerationId:string; nextGenerationId:string;
  status:'preview'|'blocked'|'passed'|'failed'; counts:RegenerationCounts; entries:RegenerationEntry[]; quality:Record<string,boolean>;
  failure?:{stage:string;code:string;message:string};
};
