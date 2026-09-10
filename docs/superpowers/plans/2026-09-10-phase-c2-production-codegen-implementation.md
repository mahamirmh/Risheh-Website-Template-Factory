# Phase C2 Production Code Generation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a deterministic Build Spec → production Next.js generator that consumes `risheh.build-spec.v1`, emits runnable standalone projects, validates them, and optionally hands them to a tightly constrained agent enhancement layer.

**Architecture:** C2 is a new code-generation subsystem layered on top of C1. A validated `BuildSpec` is resolved against the existing Factory catalog into an internal `GenerationModel`; a deterministic file plan is then produced and emitted into a standalone Next.js project. Generated projects must pass structural, content-integrity, route, TypeScript, lint, and Next production-build gates before C2 can report success. The optional agent layer never replaces the deterministic core and must re-run the full quality pipeline after any enhancement.

**Tech Stack:** Next.js 16.3.x App Router, React 19.3.x, TypeScript strict mode, Tailwind CSS 4.x, Node.js 20+, AJV, YAML, Node test runner, filesystem APIs, crypto hashing, optional ZIP packaging, existing Factory catalogs and schemas.

**Spec:** `docs/superpowers/specs/2026-09-10-phase-c2-production-codegen-design.md`

## Global Constraints

- `risheh.build-spec.v1` remains the canonical public input contract; no competing public generation contract may be introduced.
- C2 must not mutate Phase B catalogs or require Markdown scraping.
- Deterministic mode must work without any AI provider.
- The same Build Spec + same Factory version must produce the same deterministic file set, excluding explicitly non-deterministic provenance timestamps.
- All 27 existing pattern IDs and all 12 Design DNA IDs must resolve before C2 v1 is considered complete.
- All 48 archetypes must be generation-compatible.
- Unsupported Design DNA, patterns, unsafe routes, duplicate file paths, failed quality gates, or unsafe paths must fail closed.
- Generated code must not fabricate testimonials, metrics, awards, client logos, addresses, team identities, credentials, prices, inventory, or case-study outcomes.
- Generated projects must support RTL/LTR at the document root and use logical CSS behavior where appropriate.
- Agent enhancement is optional, policy-bounded, and must never change routes, schema identity, business identity, provenance claims, or add factual claims.
- Generated dependencies come from an allowlisted baseline, never from arbitrary Build Spec content.
- A generation is not successful until the applicable quality pipeline is green.

---

## Target File Map

### Core code-generation domain
- Create: `src/features/codegen/model.ts`
- Create: `src/features/codegen/errors.ts`
- Create: `src/features/codegen/naming.ts`
- Create: `src/features/codegen/resolve.ts`
- Create: `src/features/codegen/routes.ts`
- Create: `src/features/codegen/tokens.ts`
- Create: `src/features/codegen/content.ts`
- Create: `src/features/codegen/component-graph.ts`
- Create: `src/features/codegen/file-plan.ts`
- Create: `src/features/codegen/provenance.ts`
- Create: `src/features/codegen/generator.ts`
- Create: `src/features/codegen/quality.ts`
- Create: `src/features/codegen/agent-policy.ts`

### Emitters
- Create: `src/features/codegen/emitters/project.ts`
- Create: `src/features/codegen/emitters/package-json.ts`
- Create: `src/features/codegen/emitters/app-router.ts`
- Create: `src/features/codegen/emitters/components.ts`
- Create: `src/features/codegen/emitters/sections.ts`
- Create: `src/features/codegen/emitters/styles.ts`
- Create: `src/features/codegen/emitters/seo.ts`
- Create: `src/features/codegen/emitters/content.ts`
- Create: `src/features/codegen/emitters/readme.ts`
- Create: `src/features/codegen/emitters/provenance.ts`

### Runtime / API / UI integration
- Create: `app/api/generate/route.ts`
- Create: `src/features/codegen/runtime.ts`
- Create: `src/components/generator/GenerateProjectPanel.tsx`
- Modify: `src/components/generator/GeneratorWorkspace.tsx`

### Tests and fixtures
- Create: `tests/codegen-resolver.test.mjs`
- Create: `tests/codegen-routing.test.mjs`
- Create: `tests/codegen-file-plan.test.mjs`
- Create: `tests/codegen-content-integrity.test.mjs`
- Create: `tests/codegen-component-graph.test.mjs`
- Create: `tests/codegen-generator.test.mjs`
- Create: `tests/codegen-quality.test.mjs`
- Create: `tests/codegen-agent-policy.test.mjs`
- Create: `tests/fixtures/codegen/ltr-service.build.json`
- Create: `tests/fixtures/codegen/rtl-legal.build.json`
- Create: `tests/fixtures/codegen/architecture-gallery.build.json`
- Create: `tests/fixtures/codegen/invalid-unknown-pattern.build.json`

### Generated-project validation tools
- Create: `scripts/codegen/generate-fixture-projects.mjs`
- Create: `scripts/codegen/check-generated-project.mjs`
- Create: `scripts/codegen/check-all-archetypes.mjs`
- Create: `scripts/codegen/forbidden-content.mjs`
- Modify: `package.json`
- Modify: `.github/workflows/factory-quality.yml`

### Docs
- Create: `docs/CODEGEN_ARCHITECTURE.md`
- Create: `docs/CODEGEN_AGENT_POLICY.md`
- Create: `docs/CODEGEN_QUALITY_GATES.md`
- Modify: `README.md`

---

### Task 1: Define the Internal Generation Model and Typed Failures

**Files:**
- Create: `src/features/codegen/model.ts`
- Create: `src/features/codegen/errors.ts`
- Test: `tests/codegen-resolver.test.mjs`

**Interfaces:**
- Consumes: `BuildSpec`, `FactoryCatalog` from `src/types/factory.ts`.
- Produces:
  - `type GenerationMode = 'deterministic' | 'deterministic+agent'`
  - `type ResolvedRoute = { id: string; route: string; segments: string[]; filePath: string }`
  - `type ResolvedSection = { id: string; patternId: string; pageId: string; componentName: string }`
  - `type GenerationModel = { buildSpec; factoryVersion; project; locale; industry; design; routes; sections; content; implementation }`
  - `class CodegenError extends Error { stage: CodegenStage; code: string; file?: string; details?: unknown }`

- [ ] **Step 1: Write the failing model-contract test**

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { CodegenError } from '../src/features/codegen/errors.ts';

test('CodegenError exposes stage and stable code', () => {
  const error = new CodegenError('resolve', 'UNKNOWN_PATTERN', 'Unknown pattern');
  assert.equal(error.stage, 'resolve');
  assert.equal(error.code, 'UNKNOWN_PATTERN');
  assert.equal(error.message, 'Unknown pattern');
});
```

- [ ] **Step 2: Run the focused test and verify RED**

Run: `node --test tests/codegen-resolver.test.mjs`
Expected: FAIL because `CodegenError` does not exist.

- [ ] **Step 3: Implement `CodegenStage`, `CodegenError`, and GenerationModel types**

Required stable stages:
```ts
export type CodegenStage =
  | 'validate-input'
  | 'resolve'
  | 'file-plan'
  | 'emit'
  | 'quality'
  | 'agent';
```

Required stable failure codes for v1:
`INVALID_BUILD_SPEC`, `UNKNOWN_DESIGN_DNA`, `UNKNOWN_PATTERN`, `UNSAFE_ROUTE`, `DUPLICATE_FILE_PATH`, `UNSUPPORTED_INTERACTION`, `QUALITY_GATE_FAILED`, `AGENT_POLICY_VIOLATION`.

- [ ] **Step 4: Re-run focused test and verify GREEN**

Run: `node --test tests/codegen-resolver.test.mjs`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/features/codegen/model.ts src/features/codegen/errors.ts tests/codegen-resolver.test.mjs
git commit -m "feat: define c2 generation model and errors"
```

---

### Task 2: Safe Naming and Route Normalization

**Files:**
- Create: `src/features/codegen/naming.ts`
- Create: `src/features/codegen/routes.ts`
- Test: `tests/codegen-routing.test.mjs`

**Interfaces:**
- Produces:
  - `sanitizeProjectId(value: string): string`
  - `normalizeRoute(route: string): string`
  - `routeToAppPath(route: string): string`
  - `resolveRoutes(pages: BuildSpec['pages']): ResolvedRoute[]`

- [ ] **Step 1: Write failing path-safety tests**

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeRoute, routeToAppPath } from '../src/features/codegen/routes.ts';
import { sanitizeProjectId } from '../src/features/codegen/naming.ts';

test('normalizes safe routes into App Router file paths', () => {
  assert.equal(normalizeRoute('/services/'), '/services');
  assert.equal(routeToAppPath('/services'), 'app/services/page.tsx');
  assert.equal(routeToAppPath('/'), 'app/page.tsx');
});

test('rejects traversal and unsafe project ids', () => {
  assert.throws(() => normalizeRoute('/../secret'), /UNSAFE_ROUTE/);
  assert.throws(() => sanitizeProjectId('../../escape'), /unsafe/i);
});
```

- [ ] **Step 2: Run test and verify RED**

Run: `node --test tests/codegen-routing.test.mjs`
Expected: FAIL because functions do not exist.

- [ ] **Step 3: Implement strict naming and route rules**

Rules:
- root route remains `/`;
- collapse duplicate slashes;
- remove trailing slash except `/`;
- reject `..`, `.`, backslashes, query strings, fragments, percent-encoded traversal, NUL;
- emitted path must remain under `app/`;
- project IDs become lowercase kebab-case and reject empty result.

- [ ] **Step 4: Run test and verify GREEN**

Run: `node --test tests/codegen-routing.test.mjs`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/features/codegen/naming.ts src/features/codegen/routes.ts tests/codegen-routing.test.mjs
git commit -m "feat: add safe codegen naming and routes"
```

---

### Task 3: Resolve Build Spec Against Factory Catalogs

**Files:**
- Create: `src/features/codegen/resolve.ts`
- Create: `src/features/codegen/tokens.ts`
- Extend: `tests/codegen-resolver.test.mjs`

**Interfaces:**
- Consumes: `BuildSpec`, `FactoryCatalog`.
- Produces: `resolveGenerationModel(buildSpec: BuildSpec, catalog: FactoryCatalog): GenerationModel`.
- Uses `resolveRoutes()` from Task 2.

- [ ] **Step 1: Add failing resolver tests**

```js
test('resolves known DNA, patterns and routes without mutating BuildSpec', () => {
  const original = structuredClone(buildSpecFixture);
  const model = resolveGenerationModel(buildSpecFixture, catalogFixture);
  assert.deepEqual(buildSpecFixture, original);
  assert.equal(model.industry.id, buildSpecFixture.industry.id);
  assert.deepEqual(model.design.dnaIds, buildSpecFixture.design.dna);
  assert.equal(model.locale.direction, 'ltr');
});

test('fails closed on unknown DNA or pattern', () => {
  assert.throws(() => resolveGenerationModel(unknownPatternFixture, catalogFixture), /UNKNOWN_PATTERN/);
});
```

- [ ] **Step 2: Run resolver tests and verify RED**

Run: `node --test tests/codegen-resolver.test.mjs`
Expected: FAIL because resolver does not exist.

- [ ] **Step 3: Implement resolver**

Resolver must:
- require valid industry + archetype identity;
- resolve every Design DNA ID from catalog;
- resolve every section pattern from catalog;
- normalize routes;
- derive locale direction from `buildSpec.content.locale.direction` when present, otherwise from explicit Build Spec content generated by C1; if direction is absent, fail instead of guessing;
- preserve Build Spec object unchanged;
- call `resolveDesignTokens(primaryDna, secondaryDna?)`.

- [ ] **Step 4: Implement token resolution**

`resolveDesignTokens` returns a stable internal token object with keys:
`typography`, `spacing`, `layout`, `geometry`, `imagery`, `motion`, `interactionDensity`, `contentDensity`, `accessibility`, `prohibitedPatterns`.
Secondary DNA may override only `imagery`, `motion`, `geometry`, and section rhythm metadata; primary DNA remains authoritative for accessibility/prohibited rules.

- [ ] **Step 5: Run resolver tests and verify GREEN**

Run: `node --test tests/codegen-resolver.test.mjs`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/features/codegen/resolve.ts src/features/codegen/tokens.ts tests/codegen-resolver.test.mjs
git commit -m "feat: resolve build specs for code generation"
```

---

### Task 4: Map All 27 Patterns to Reusable Component Families

**Files:**
- Create: `src/features/codegen/component-graph.ts`
- Test: `tests/codegen-component-graph.test.mjs`

**Interfaces:**
- Produces:
  - `PATTERN_COMPONENTS: Record<string, string>`
  - `resolveComponentGraph(model: GenerationModel): ComponentGraph`
- `ComponentGraph` contains unique component families and per-page section references.

- [ ] **Step 1: Write failing complete-coverage test**

```js
test('every pattern in the Factory catalog has a supported component family', () => {
  for (const pattern of catalog.patterns) {
    assert.equal(typeof PATTERN_COMPONENTS[pattern.id], 'string', pattern.id);
  }
});
```

- [ ] **Step 2: Run and verify RED**

Run: `node --test tests/codegen-component-graph.test.mjs`
Expected: FAIL because mapping does not exist.

- [ ] **Step 3: Implement explicit mappings for all current pattern IDs**

Required examples:
`hero-authority→AuthorityHero`, `hero-atmosphere→AtmosphereHero`, `hero-gallery→GalleryHero`, `hero-outcome→OutcomeHero`, `hero-editorial→EditorialHero`, `hero-product→ProductHero`, `hero-local-intent→LocalIntentHero`, plus all navigation, portfolio, service, menu, testimonial, lead, and footer patterns from `patterns/catalog.yaml`.

No generic fallback component is allowed.

- [ ] **Step 4: Run coverage test and verify GREEN**

Run: `node --test tests/codegen-component-graph.test.mjs`
Expected: PASS for all 27 patterns.

- [ ] **Step 5: Commit**

```bash
git add src/features/codegen/component-graph.ts tests/codegen-component-graph.test.mjs
git commit -m "feat: map factory patterns to generated components"
```

---

### Task 5: Content Integrity Policy

**Files:**
- Create: `src/features/codegen/content.ts`
- Create: `scripts/codegen/forbidden-content.mjs`
- Test: `tests/codegen-content-integrity.test.mjs`

**Interfaces:**
- Produces:
  - `resolveContentSlots(model: GenerationModel): ResolvedContent`
  - `scanForbiddenContent(files: GeneratedFile[]): ContentScanResult`

- [ ] **Step 1: Write failing no-fabrication tests**

```js
test('missing testimonials remain absent instead of fabricated', () => {
  const content = resolveContentSlots(modelWithoutTestimonials);
  assert.equal(content.testimonials, undefined);
});

test('forbidden factual placeholder claims are rejected', () => {
  const result = scanForbiddenContent([{ path: 'app/page.tsx', content: 'Trusted by 10,000 clients' }]);
  assert.equal(result.ok, false);
});
```

- [ ] **Step 2: Run test and verify RED**

Run: `node --test tests/codegen-content-integrity.test.mjs`
Expected: FAIL.

- [ ] **Step 3: Implement content policy**

Allowed fallback structural phrases are non-factual only, e.g. `Explore services`, `View projects`, `Contact`, `Learn more`.
Forbidden scanner must catch obvious lorem text and suspicious fabricated templates such as `10,000+`, `#1`, `award-winning`, `5-star`, `trusted by`, fake review quotations, and placeholder person/address tokens.
Scanner must not reject user-provided content simply because it contains numbers; provenance marks content source as `user` vs `generator`.

- [ ] **Step 4: Run test and verify GREEN**

Run: `node --test tests/codegen-content-integrity.test.mjs`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/features/codegen/content.ts scripts/codegen/forbidden-content.mjs tests/codegen-content-integrity.test.mjs
git commit -m "feat: enforce generated content integrity"
```

---

### Task 6: Deterministic File Plan

**Files:**
- Create: `src/features/codegen/file-plan.ts`
- Test: `tests/codegen-file-plan.test.mjs`

**Interfaces:**
- Produces:
  - `type PlannedFile = { path: string; kind: string; owner: string; sources: string[]; contentSeed: string; overwrite: 'create-only' | 'replace-generated' }`
  - `createFilePlan(model: GenerationModel, graph: ComponentGraph): PlannedFile[]`

- [ ] **Step 1: Write failing determinism and uniqueness tests**

```js
test('same model produces identical ordered file plan', () => {
  assert.deepEqual(createFilePlan(model, graph), createFilePlan(model, graph));
});

test('file plan has unique safe paths', () => {
  const plan = createFilePlan(model, graph);
  assert.equal(new Set(plan.map(x => x.path)).size, plan.length);
  assert.ok(plan.every(x => !x.path.includes('..')));
});
```

- [ ] **Step 2: Run and verify RED**

Run: `node --test tests/codegen-file-plan.test.mjs`
Expected: FAIL.

- [ ] **Step 3: Implement lexicographically stable file plan**

Required files include project config, root layout, globals, every declared route, unique section components, content/config/SEO helpers, README, and provenance manifest. Sort final plan by path.

- [ ] **Step 4: Run and verify GREEN**

Run: `node --test tests/codegen-file-plan.test.mjs`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/features/codegen/file-plan.ts tests/codegen-file-plan.test.mjs
git commit -m "feat: add deterministic generated file planning"
```

---

### Task 7: Emit Project Configuration and Global Design System

**Files:**
- Create: `src/features/codegen/emitters/package-json.ts`
- Create: `src/features/codegen/emitters/styles.ts`
- Create: `src/features/codegen/emitters/project.ts`
- Extend: `tests/codegen-generator.test.mjs`

**Interfaces:**
- Produces `emitProjectFoundation(model: GenerationModel): GeneratedFile[]`.

- [ ] **Step 1: Write failing generated-foundation tests**

Assert generated files include `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `app/globals.css`, `.gitignore`.

- [ ] **Step 2: Run and verify RED**

Run: `node --test tests/codegen-generator.test.mjs`
Expected: FAIL.

- [ ] **Step 3: Implement allowlisted package baseline**

Generated `package.json` must include only allowlisted dependencies required by emitted code: Next 16.3.x, React/React DOM 19.3.x and approved styling/runtime packages. No package names come from Build Spec.

- [ ] **Step 4: Emit RTL/LTR-safe global CSS from resolved DNA tokens**

CSS must include `box-sizing`, focus-visible, reduced-motion, logical container spacing, accessible base typography and CSS variables for resolved design traits. Avoid pretending prose DNA descriptions are exact brand tokens; generate a neutral deterministic token preset keyed by DNA IDs.

- [ ] **Step 5: Run tests and verify GREEN**

Run: `node --test tests/codegen-generator.test.mjs`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/features/codegen/emitters/package-json.ts src/features/codegen/emitters/styles.ts src/features/codegen/emitters/project.ts tests/codegen-generator.test.mjs
git commit -m "feat: emit generated project foundation"
```

---

### Task 8: Emit App Router Routes, Layout, SEO and Content Config

**Files:**
- Create: `src/features/codegen/emitters/app-router.ts`
- Create: `src/features/codegen/emitters/seo.ts`
- Create: `src/features/codegen/emitters/content.ts`
- Extend: `tests/codegen-generator.test.mjs`

**Interfaces:**
- Produces:
  - `emitAppRouter(model, graph): GeneratedFile[]`
  - `emitSeo(model): GeneratedFile[]`
  - `emitContent(model): GeneratedFile[]`

- [ ] **Step 1: Write failing route-exactness test**

For every `BuildSpec.pages[].route`, assert exactly one emitted `page.tsx` exists at the corresponding App Router path.

- [ ] **Step 2: Run and verify RED**

Run: `node --test tests/codegen-generator.test.mjs`
Expected: FAIL.

- [ ] **Step 3: Emit root layout with locale/direction**

The generated `<html lang={...} dir={...}>` must derive from resolved model. Do not infer direction from language name.

- [ ] **Step 4: Emit route page composition from the component graph**

Each page imports only components used on that page. Missing sections are not filled with arbitrary marketing blocks.

- [ ] **Step 5: Emit non-fabricated SEO helpers and content config**

SEO title/description uses user-provided project/hero content when available; otherwise uses project name and neutral description. No schema.org business facts are generated without source data.

- [ ] **Step 6: Run tests and verify GREEN**

Run: `node --test tests/codegen-generator.test.mjs`
Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add src/features/codegen/emitters/app-router.ts src/features/codegen/emitters/seo.ts src/features/codegen/emitters/content.ts tests/codegen-generator.test.mjs
git commit -m "feat: emit generated app routes and metadata"
```

---

### Task 9: Emit All Pattern Components and Shared UI Primitives

**Files:**
- Create: `src/features/codegen/emitters/components.ts`
- Create: `src/features/codegen/emitters/sections.ts`
- Extend: `tests/codegen-component-graph.test.mjs`
- Extend: `tests/codegen-generator.test.mjs`

**Interfaces:**
- Produces `emitComponentGraph(model, graph): GeneratedFile[]`.

- [ ] **Step 1: Write failing emitter coverage test**

For all 27 pattern IDs, assert the mapped component has emitted source and is importable by its route composition.

- [ ] **Step 2: Run and verify RED**

Run: `node --test tests/codegen-component-graph.test.mjs tests/codegen-generator.test.mjs`
Expected: FAIL.

- [ ] **Step 3: Implement reusable section families**

Each emitted component must use semantic HTML, safe content slots, logical spacing, focus-safe interactions, and no hover-only essential content. Navigation and interactive sections become Client Components only when necessary; purely presentational sections remain Server Components.

- [ ] **Step 4: Add accessible empty-state behavior**

If factual content required by a pattern is absent, either omit that pattern or emit a neutral authoring slot according to `resolveContentSlots`; never manufacture data.

- [ ] **Step 5: Run and verify GREEN**

Run: `node --test tests/codegen-component-graph.test.mjs tests/codegen-generator.test.mjs`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/features/codegen/emitters/components.ts src/features/codegen/emitters/sections.ts tests/codegen-component-graph.test.mjs tests/codegen-generator.test.mjs
git commit -m "feat: emit reusable generated section components"
```

---

### Task 10: Provenance and Deterministic Generator Orchestration

**Files:**
- Create: `src/features/codegen/provenance.ts`
- Create: `src/features/codegen/emitters/provenance.ts`
- Create: `src/features/codegen/emitters/readme.ts`
- Create: `src/features/codegen/generator.ts`
- Extend: `tests/codegen-generator.test.mjs`

**Interfaces:**
- Produces:
  - `generateProject(buildSpec, catalog, options): GeneratedProject`
  - `GeneratedProject = { model; files; provenance; diagnostics }`
  - content hashes via SHA-256.

- [ ] **Step 1: Write failing deterministic-output test**

Generate the same Build Spec twice and compare sorted `(path, hash)` tuples; they must match.

- [ ] **Step 2: Run and verify RED**

Run: `node --test tests/codegen-generator.test.mjs`
Expected: FAIL.

- [ ] **Step 3: Implement orchestration**

Sequence must be: input validation → resolve → graph → file plan → emit → content scan → provenance. Any stage throws `CodegenError` with stable stage/code.

- [ ] **Step 4: Emit `risheh-generation.json` and generated README**

Manifest records generator/factory/build-spec versions, IDs, DNA, patterns, generation mode, file hashes and quality status. Timestamp may be recorded separately but excluded from deterministic file-set comparison.

- [ ] **Step 5: Run and verify GREEN**

Run: `node --test tests/codegen-generator.test.mjs`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/features/codegen/provenance.ts src/features/codegen/emitters/provenance.ts src/features/codegen/emitters/readme.ts src/features/codegen/generator.ts tests/codegen-generator.test.mjs
git commit -m "feat: orchestrate deterministic project generation"
```

---

### Task 11: Filesystem Runtime and Generate API

**Files:**
- Create: `src/features/codegen/runtime.ts`
- Create: `app/api/generate/route.ts`
- Test: `tests/codegen-quality.test.mjs`

**Interfaces:**
- Produces:
  - `writeGeneratedProject(project, workspaceRoot): Promise<GenerationArtifact>`
  - `POST /api/generate` with `{ buildSpec, mode }`.

- [ ] **Step 1: Write failing workspace-containment test**

Assert generated writes stay inside a temp root and reject an escaping project ID.

- [ ] **Step 2: Run and verify RED**

Run: `node --test tests/codegen-quality.test.mjs`
Expected: FAIL.

- [ ] **Step 3: Implement filesystem runtime**

Use `path.resolve` containment checks before every write. Create-only default; never overwrite arbitrary files outside generation workspace. Runtime returns artifact path and file count.

- [ ] **Step 4: Implement POST API**

API validates request shape and Build Spec, accepts only mode `deterministic` in initial C2 release unless an agent adapter is configured, and returns stage-specific diagnostics on failure.

- [ ] **Step 5: Run test and verify GREEN**

Run: `node --test tests/codegen-quality.test.mjs`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/features/codegen/runtime.ts app/api/generate/route.ts tests/codegen-quality.test.mjs
git commit -m "feat: add secure codegen runtime and api"
```

---

### Task 12: Generated Project Quality Pipeline

**Files:**
- Create: `src/features/codegen/quality.ts`
- Create: `scripts/codegen/check-generated-project.mjs`
- Extend: `tests/codegen-quality.test.mjs`

**Interfaces:**
- Produces `runGeneratedProjectQuality(artifactPath, model): Promise<QualityReport>`.

- [ ] **Step 1: Write failing quality-report test**

Assert missing declared route produces `{ gate: 'routes', ok: false }` and forbidden generator-origin claim produces `{ gate: 'content-integrity', ok: false }`.

- [ ] **Step 2: Run and verify RED**

Run: `node --test tests/codegen-quality.test.mjs`
Expected: FAIL.

- [ ] **Step 3: Implement static gates**

Required static gates: unique paths, imports, declared routes, internal links, forbidden content, lorem/placeholder scan, RTL root structure, provenance structure.

- [ ] **Step 4: Implement executable gates**

In generated project directory run allowlisted commands only: `npm install --ignore-scripts`, `npm run typecheck`, `npm run lint`, `npm run build`. Capture exit code/stdout/stderr into structured report. Do not execute Build Spec content as commands.

- [ ] **Step 5: Run tests and verify GREEN**

Run: `node --test tests/codegen-quality.test.mjs`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/features/codegen/quality.ts scripts/codegen/check-generated-project.mjs tests/codegen-quality.test.mjs
git commit -m "feat: add generated project quality pipeline"
```

---

### Task 13: Representative Generated Builds — LTR, RTL, Architecture

**Files:**
- Create: `tests/fixtures/codegen/ltr-service.build.json`
- Create: `tests/fixtures/codegen/rtl-legal.build.json`
- Create: `tests/fixtures/codegen/architecture-gallery.build.json`
- Create: `tests/fixtures/codegen/invalid-unknown-pattern.build.json`
- Create: `scripts/codegen/generate-fixture-projects.mjs`
- Extend: `tests/codegen-generator.test.mjs`

**Interfaces:**
- Produces deterministic generated fixture directories under `.tmp/codegen-fixtures/` during tests only.

- [ ] **Step 1: Add representative valid and invalid Build Specs**

Fixtures must contain only non-sensitive synthetic structural content, no fake business claims.

- [ ] **Step 2: Add integration test that generates all three representative projects**

Assert:
- LTR service project has `dir="ltr"`;
- Persian legal project has `dir="rtl"` and Persian content values preserved;
- architecture project uses gallery/portfolio component families;
- invalid pattern fixture fails with `UNKNOWN_PATTERN`.

- [ ] **Step 3: Run integration tests**

Run: `node --test tests/codegen-generator.test.mjs`
Expected: PASS after prior tasks.

- [ ] **Step 4: Run generated production builds**

Run: `node scripts/codegen/generate-fixture-projects.mjs --build`
Expected: all three generated projects complete TypeScript/lint/Next build successfully.

- [ ] **Step 5: Commit**

```bash
git add tests/fixtures/codegen scripts/codegen/generate-fixture-projects.mjs tests/codegen-generator.test.mjs
git commit -m "test: validate representative generated projects"
```

---

### Task 14: Verify All 48 Archetypes and 12 Design DNA Profiles

**Files:**
- Create: `scripts/codegen/check-all-archetypes.mjs`
- Test: `tests/codegen-component-graph.test.mjs`

**Interfaces:**
- Script synthesizes minimal non-factual Build Specs from each archetype solely for compatibility validation.

- [ ] **Step 1: Add failing catalog compatibility assertion**

Assert every archetype Design DNA and pattern reference resolves through C2 mappings.

- [ ] **Step 2: Run and verify current failures if any**

Run: `node scripts/codegen/check-all-archetypes.mjs`
Expected before fixes: non-zero if any unresolved C2 surface exists.

- [ ] **Step 3: Complete missing mappings/resolution**

Do not add a generic fallback. Add explicit support or fail the release.

- [ ] **Step 4: Re-run compatibility check**

Expected summary:
`48 archetypes compatible; 12 DNA profiles resolved; 27 patterns supported; 0 unresolved references`.

- [ ] **Step 5: Commit**

```bash
git add scripts/codegen/check-all-archetypes.mjs src/features/codegen tests/codegen-component-graph.test.mjs
git commit -m "test: verify complete factory codegen compatibility"
```

---

### Task 15: Agent Enhancement Policy Boundary

**Files:**
- Create: `src/features/codegen/agent-policy.ts`
- Create: `docs/CODEGEN_AGENT_POLICY.md`
- Test: `tests/codegen-agent-policy.test.mjs`

**Interfaces:**
- Produces:
  - `createAgentEnhancementBrief(project): AgentEnhancementBrief`
  - `validateAgentChangeSet(before, after): AgentPolicyResult`

- [ ] **Step 1: Write failing policy tests**

Tests must reject route deletion/addition, Build Spec identity changes, provenance tampering and new generator-origin factual claims, while allowing class/style/refactor changes that preserve public behavior.

- [ ] **Step 2: Run and verify RED**

Run: `node --test tests/codegen-agent-policy.test.mjs`
Expected: FAIL.

- [ ] **Step 3: Implement policy diff checks**

Compare protected file/route/identity surfaces; require agent changes to remain in allowlisted code/content regions. `risheh-generation.json` may only be regenerated by C2 after quality, never directly trusted from agent output.

- [ ] **Step 4: Run and verify GREEN**

Run: `node --test tests/codegen-agent-policy.test.mjs`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/features/codegen/agent-policy.ts docs/CODEGEN_AGENT_POLICY.md tests/codegen-agent-policy.test.mjs
git commit -m "feat: constrain optional codegen agent enhancement"
```

---

### Task 16: C1 Generate Project Integration

**Files:**
- Create: `src/components/generator/GenerateProjectPanel.tsx`
- Modify: `src/components/generator/GeneratorWorkspace.tsx`
- Test: `tests/codegen-generator.test.mjs`

**Interfaces:**
- C1 submits current valid Build Spec to `POST /api/generate`.
- UI states: `idle | planning | emitting | validating | complete | failed`.

- [ ] **Step 1: Add failing integration contract test for API request/response shape**

Assert request contains exactly `buildSpec` and `mode`; no independent route/DNA override fields.

- [ ] **Step 2: Run and verify RED**

Run: `node --test tests/codegen-generator.test.mjs`
Expected: FAIL until integration helpers exist.

- [ ] **Step 3: Implement GenerateProjectPanel**

Only enable generation when C1 Build Health is valid. Display stage-specific diagnostics. Initial UI exposes deterministic mode; agent mode appears disabled/unavailable unless adapter support is configured.

- [ ] **Step 4: Wire into GeneratorWorkspace without altering C1 composition behavior**

Do not move industry/archetype/page editing into C2.

- [ ] **Step 5: Run C1 + C2 tests**

Run: `npm test`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/components/generator/GenerateProjectPanel.tsx src/components/generator/GeneratorWorkspace.tsx tests/codegen-generator.test.mjs
git commit -m "feat: connect c1 build specs to c2 generation"
```

---

### Task 17: CI, Scripts, and Documentation

**Files:**
- Modify: `package.json`
- Modify: `.github/workflows/factory-quality.yml`
- Create: `docs/CODEGEN_ARCHITECTURE.md`
- Create: `docs/CODEGEN_QUALITY_GATES.md`
- Modify: `README.md`

**Interfaces:**
- New scripts:
  - `codegen:fixtures`
  - `codegen:compat`
  - `codegen:check`

- [ ] **Step 1: Add package scripts**

Required command composition:
```json
{
  "codegen:fixtures": "node scripts/codegen/generate-fixture-projects.mjs --build",
  "codegen:compat": "node scripts/codegen/check-all-archetypes.mjs",
  "codegen:check": "npm run codegen:compat && npm run codegen:fixtures"
}
```

- [ ] **Step 2: Update Factory Quality workflow**

After existing Factory validation and C1 production build, run `npm run codegen:compat` and representative generated-project builds. Keep workflow single-job unless measured runtime requires split jobs.

- [ ] **Step 3: Document architecture and quality gates**

Docs must explain deterministic core, source-of-truth contract, generated project structure, no-fabrication rules, failure stages, provenance, agent restrictions and local commands.

- [ ] **Step 4: Run repository-level verification**

Run:
```bash
npm install
npm run check
npm run catalog
npm run build
npm run codegen:compat
npm run codegen:fixtures
```
Expected: all commands exit 0.

- [ ] **Step 5: Commit**

```bash
git add package.json .github/workflows/factory-quality.yml docs/CODEGEN_ARCHITECTURE.md docs/CODEGEN_QUALITY_GATES.md README.md
git commit -m "docs: integrate c2 codegen quality workflow"
```

---

### Task 18: Final Verification and Release Candidate

**Files:**
- Review all C2 files and generated fixture artifacts; no permanent `.tmp` outputs committed.

**Interfaces:**
- Produces release-ready PR from `feat/phase-c2-production-codegen` to `main`.

- [ ] **Step 1: Run complete fresh verification**

```bash
npm install
npm test
npm run validate
npm run quality
npm run catalog
npm run build
npm run codegen:compat
npm run codegen:fixtures
```

Expected:
- existing Factory checks green;
- C1 build green;
- C2 unit/integration tests green;
- 48/48 archetypes compatible;
- 12/12 Design DNA profiles resolved;
- 27/27 pattern IDs supported;
- representative LTR, RTL and architecture generated projects build successfully;
- no forbidden generator-origin factual claims;
- no committed generated temp projects.

- [ ] **Step 2: Review git diff against approved spec**

Confirm no public replacement for `risheh.build-spec.v1`, no Markdown scraping, no catalog mutation, no deployment/auth/billing/CMS scope creep, and no unrestricted agent code path.

- [ ] **Step 3: Create PR**

PR summary must list deterministic generator, supported catalog surface, quality evidence, representative generated builds, and explicit C2 exclusions.

- [ ] **Step 4: Require GitHub Actions green before merge**

Do not merge based only on local assumptions. Inspect workflow job steps/logs if any failure occurs.

- [ ] **Step 5: Squash merge after green CI**

Use one clean main-branch commit for the C2 subsystem.

---

## Acceptance Criteria

1. `risheh.build-spec.v1` remains unchanged as the public C1→C2 input contract.
2. C2 deterministically emits a standalone Next.js project from a valid Build Spec with no AI dependency.
3. Every declared Build Spec route is emitted exactly once.
4. All 27 current patterns map to explicit reusable generated components.
5. All 12 current Design DNA profiles resolve into generator behavior/tokens.
6. All 48 current archetypes pass codegen compatibility checks.
7. Representative LTR, Persian RTL and image-led architecture projects pass production Next builds.
8. Generated projects contain no fabricated factual business content or lorem ipsum.
9. Generated project dependencies are allowlisted and cannot be injected from Build Spec.
10. Generated project contains `risheh-generation.json` with verified provenance and file hashes.
11. Codegen fails closed on unknown references, unsafe paths, duplicate paths and failed quality gates.
12. C1 exposes generation without surrendering ownership of Build Spec composition.
13. Agent enhancement is optional and policy-bounded; deterministic output is already buildable before agent use.
14. CI proves Factory validation, C1 build, C2 compatibility and representative generated builds before merge.
