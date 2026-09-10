import { CodegenError, CODES } from './errors.ts';

export function sanitizeProjectId(value: string): string {
  if (!value || /(?:\.\.|[\\/\0])/u.test(value)) {
    throw new CodegenError('resolve', CODES.UNSAFE_ROUTE, 'unsafe project id');
  }
  const normalized = value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  if (!normalized) throw new CodegenError('resolve', CODES.UNSAFE_ROUTE, 'unsafe project id');
  return normalized;
}

export function toPascalCase(value: string): string {
  return value
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}
