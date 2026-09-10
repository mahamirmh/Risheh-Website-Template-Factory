import type { BuildSpec } from '../../types/factory.ts';
import type { ResolvedRoute } from './model.ts';
import { CodegenError, CODES } from './errors.ts';

function assertSafeRawRoute(route: string) {
  let decoded = route;
  try { decoded = decodeURIComponent(route); } catch { /* invalid encoding is rejected below */ }
  if (
    !route.startsWith('/') ||
    route.includes('\\') ||
    route.includes('?') ||
    route.includes('#') ||
    route.includes('\0') ||
    decoded.split('/').some((segment) => segment === '..' || segment === '.') ||
    /%2e|%2f|%5c/i.test(route)
  ) {
    throw new CodegenError('resolve', CODES.UNSAFE_ROUTE, `${CODES.UNSAFE_ROUTE}: ${route}`);
  }
}

export function normalizeRoute(route: string): string {
  assertSafeRawRoute(route);
  const collapsed = route.replace(/\/{2,}/g, '/');
  if (collapsed === '/') return '/';
  return collapsed.replace(/\/$/, '');
}

export function routeToAppPath(route: string): string {
  const normalized = normalizeRoute(route);
  if (normalized === '/') return 'app/page.tsx';
  const segments = normalized.slice(1).split('/');
  for (const segment of segments) {
    if (!/^[a-zA-Z0-9][a-zA-Z0-9-_]*$/.test(segment)) {
      throw new CodegenError('resolve', CODES.UNSAFE_ROUTE, `${CODES.UNSAFE_ROUTE}: ${route}`);
    }
  }
  return `app/${segments.join('/')}/page.tsx`;
}

export function resolveRoutes(pages: BuildSpec['pages']): ResolvedRoute[] {
  const seen = new Set<string>();
  return pages.map((page) => {
    const route = normalizeRoute(page.route);
    if (seen.has(route)) throw new CodegenError('resolve', CODES.DUPLICATE_FILE_PATH, `Duplicate route: ${route}`);
    seen.add(route);
    return {
      id: page.id,
      route,
      segments: route === '/' ? [] : route.slice(1).split('/'),
      filePath: routeToAppPath(route),
    };
  });
}
