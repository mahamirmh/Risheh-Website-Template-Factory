import type { GeneratorDraft } from '@/types/factory';

export const DRAFT_STORAGE_KEY = 'risheh.website-factory.c1.draft.v1';

export function saveDraft(draft: GeneratorDraft): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draft));
}

export function loadDraft(): GeneratorDraft | null {
  if (typeof window === 'undefined') return null;
  const raw = window.localStorage.getItem(DRAFT_STORAGE_KEY);
  if (!raw) return null;
  try {
    const value = JSON.parse(raw) as GeneratorDraft;
    return value?.draftVersion === '1' ? value : null;
  } catch {
    return null;
  }
}

export function clearDraft(): void {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(DRAFT_STORAGE_KEY);
}
