# Phase C1 — Visual Generator UI + Build Spec Engine + Agent Handoff Design

## Status
Approved direction: **C1 only**

## 1. Goal
Build a production-grade web application inside the existing Risheh Website Template Factory repository that lets a user visually compose a website specification from the Phase B contracts and export a validated `risheh.build-spec.v1` plus agent-ready handoff prompts.

Phase C1 does **not** generate a full Next.js codebase. Code generation remains a future Phase C2 responsibility.

## 2. Product Boundary

### C1 includes
- visual industry selection;
- archetype selection;
- Design DNA selection and compatibility guidance;
- page and section composition;
- locale / RTL / LTR configuration;
- brand and content inputs;
- responsive, motion, accessibility and SEO preferences;
- live structured summary / preview of the selected system;
- deterministic Build Spec generation;
- schema validation before export;
- JSON/YAML export;
- copyable agent handoff prompts for Codex / Claude Code / generic coding agents;
- persistence of the current draft in the browser;
- import of a previous valid Build Spec.

### C1 excludes
- autonomous code generation;
- deployment;
- CMS provisioning;
- image generation;
- external AI API dependency;
- user authentication;
- cloud persistence;
- billing;
- multi-user collaboration.

## 3. Core UX Principle
The app is not a form builder. It is a guided composition environment.

The user should move from business intent to implementation-ready specification through a visible, reversible sequence:

```text
Business Intent
  ↓
Industry
  ↓
Archetype
  ↓
Design DNA
  ↓
Pages
  ↓
Sections / Patterns
  ↓
Brand + Content
  ↓
Locale / RTL
  ↓
Quality Preferences
  ↓
Review
  ↓
Build Spec
  ↓
Agent Handoff
```

Selections must never mutate Phase B source catalogs. C1 composes references into an output object.

## 4. Technical Architecture

Recommended implementation:

- Next.js App Router
- TypeScript
- Tailwind CSS
- React Server Components where useful, Client Components only for interactive composer state
- Zod for client-side application state contracts where useful
- AJV using the existing JSON Schema contracts as the final validation authority
- YAML serialization using the existing `yaml` package
- no database in C1
- localStorage draft persistence with explicit schema/version key
- static / repository-backed catalog loading from existing `data/` and generated catalog artifacts

### Architectural rule
`schemas/*.schema.json` remain the source of truth for export validity.

UI types may provide ergonomics, but they must not become a competing contract layer.

## 5. Application Structure

```text
app/
├── layout.tsx
├── page.tsx
├── generator/
│   └── page.tsx
├── api/
│   └── build-spec/
│       └── route.ts
└── globals.css

src/
├── components/
│   ├── shell/
│   ├── generator/
│   ├── preview/
│   ├── export/
│   └── ui/
├── features/
│   └── generator/
│       ├── model.ts
│       ├── reducer.ts
│       ├── selectors.ts
│       ├── defaults.ts
│       ├── compatibility.ts
│       ├── build-spec.ts
│       ├── handoff.ts
│       └── persistence.ts
├── lib/
│   ├── catalog.ts
│   ├── schemas.ts
│   ├── validation.ts
│   └── yaml.ts
└── types/
    └── factory.ts
```

## 6. Visual Direction
The UI should feel like a premium internal design tool rather than a SaaS dashboard template.

### Visual characteristics
- restrained Apple-like clarity;
- editorial spacing;
- low visual noise;
- neutral surfaces;
- strong typography hierarchy;
- minimal borders;
- subtle depth only where state separation needs it;
- generous white space;
- compact controls where repeated;
- no generic oversized rounded-card grid everywhere;
- smooth but restrained transitions;
- `prefers-reduced-motion` support.

The app's visual language must remain independent from the Design DNA being selected. The composer UI is a tool; the selected template style is content inside the tool.

## 7. Primary Layout
Desktop uses a three-region workspace:

```text
┌─────────────────────────────────────────────────────────┐
│ Header / Project Controls / Export                      │
├──────────────┬──────────────────────────┬───────────────┤
│ Step Rail    │ Composer                 │ Live Summary  │
│              │                          │ / Preview     │
│ Industry     │ Current step content     │               │
│ Archetype    │                          │ Build health  │
│ Design DNA   │                          │               │
│ Pages        │                          │               │
│ Content      │                          │               │
│ Review       │                          │               │
└──────────────┴──────────────────────────┴───────────────┘
```

Mobile becomes a single-column wizard with sticky progress and a bottom action area. Live preview becomes a separate sheet/panel rather than competing for width.

## 8. Generator State Model
The application holds a single versioned draft state.

```ts
type GeneratorDraft = {
  draftVersion: '1';
  project: {
    id: string;
    name: string;
  };
  industryId: string | null;
  archetypeId: string | null;
  designDnaIds: string[];
  pages: PageDraft[];
  brand: BrandDraft;
  content: ContentDraft;
  locale: LocaleDraft;
  seo: SeoDraft;
  accessibility: AccessibilityDraft;
  responsive: ResponsiveDraft;
  motion: MotionDraft;
  implementation: ImplementationDraft;
};
```

State transitions must be deterministic and reversible.

Changing industry should clear incompatible archetype selections but preserve unrelated brand/content fields.

Changing archetype should offer recommended defaults, but must not silently overwrite user-customized page/content decisions after the user has edited them.

## 9. Catalog Consumption
C1 consumes Phase B catalog data, never hardcoded duplicated lists.

Required inputs:
- industries;
- archetypes;
- Design DNA profiles;
- patterns;
- schemas;
- generated catalog metadata.

The UI must expose compatibility suggestions based on existing archetype references and Design DNA suitability rules.

Compatibility levels:
- Recommended
- Compatible
- Experimental
- Unsupported

Unsupported combinations cannot be exported as `ready` without explicit remediation.

## 10. Step Definitions

### Step 1 — Business Setup
Fields:
- project name;
- business name;
- primary goal;
- country;
- language;
- direction;
- optional short positioning statement.

### Step 2 — Industry
Show all industry families from the catalog with:
- name;
- short intent description;
- business psychology summary;
- available archetype count.

### Step 3 — Archetype
Each option shows:
- archetype name;
- Design DNA references;
- primary conversion model;
- proof model;
- content density;
- motion profile;
- pages included;
- differentiation summary.

### Step 4 — Design DNA
Allow one primary and optional secondary Design DNA when compatible.

Show visual-rule summary, not fabricated screenshots.

### Step 5 — Pages & Patterns
Start from archetype defaults.

User can:
- add/remove optional pages;
- reorder pages;
- inspect default patterns;
- change compatible patterns;
- reorder sections within a page;
- reset page to archetype defaults.

### Step 6 — Brand & Content
Capture only content necessary to produce a useful Build Spec.

No fake testimonials, statistics, client names or awards are generated.

Unknown content remains explicitly marked `required_input` or omitted according to schema rules.

### Step 7 — Quality Preferences
Controls for:
- accessibility level;
- reduced-motion baseline;
- SEO / local SEO requirements;
- responsive priorities;
- image strategy;
- performance sensitivity;
- implementation target defaults.

### Step 8 — Review
Show:
- full composition summary;
- compatibility warnings;
- missing required content;
- schema validation errors;
- semantic warnings;
- export readiness.

## 11. Build Spec Engine
The engine transforms `GeneratorDraft + Catalog` into `risheh.build-spec.v1`.

It must:
1. resolve industry metadata;
2. resolve archetype defaults;
3. resolve Design DNA references;
4. resolve selected patterns;
5. apply explicit user overrides;
6. normalize locale and direction;
7. produce deterministic page/section ordering;
8. attach provenance for every catalog-derived selection;
9. validate against `schemas/build-spec.schema.json`;
10. reject export on schema failure.

The same draft must produce byte-equivalent normalized JSON when no input has changed, excluding optional timestamps if they are intentionally omitted.

## 12. Validation Model
Three validation layers:

### Layer A — UI validity
Immediate field-level constraints.

### Layer B — Composition validity
Checks:
- selected archetype belongs to selected industry;
- Design DNA compatibility;
- pattern references exist;
- page IDs unique;
- section IDs unique within a page;
- required business goal exists;
- RTL/LTR configuration coherent.

### Layer C — Contract validity
Final AJV validation against `risheh.build-spec.v1`.

Only Layer C success enables final export.

## 13. Live Preview Definition
C1 does **not** promise pixel-accurate site rendering.

Preview is a structural design-preview surface showing:
- page hierarchy;
- selected hero pattern;
- section rhythm;
- density;
- typography character summary;
- color strategy summary;
- motion intensity;
- media ratios;
- CTA flow;
- mobile/desktop structure.

This prevents misleading users into thinking generated placeholder visuals are the final website.

## 14. Export Formats
C1 exports:

1. `build-spec.json`
2. `build-spec.yaml`
3. Agent Handoff Markdown
4. Copy-to-clipboard implementation prompt

File name convention:

```text
<project-id>.build-spec.json
<project-id>.build-spec.yaml
<project-id>.handoff.md
```

## 15. Agent Handoff
Handoff adapters:
- Codex
- Claude Code
- Generic coding agent

Each adapter must include:
- build-spec content or exact local path expectation;
- immutable constraints;
- recommended stack;
- accessibility requirements;
- responsive requirements;
- no-fake-data rule;
- no-clone rule;
- acceptance criteria;
- required validation command.

Adapters differ in instructions and workflow framing, not in the underlying Build Spec.

## 16. Persistence & Import
Persist drafts in browser localStorage using a versioned key:

```text
risheh-template-factory:c1:draft:v1
```

Rules:
- corrupted drafts are ignored safely;
- import validates before applying;
- unsupported schema versions are rejected with a clear message;
- reset requires explicit confirmation;
- export never depends on localStorage being available.

## 17. Accessibility
Minimum expectations:
- WCAG 2.2 AA-oriented interface behavior;
- full keyboard navigation;
- visible focus;
- semantic labels and field descriptions;
- no color-only validation states;
- 44px-equivalent touch target intent for primary mobile actions;
- reduced motion support;
- screen-reader understandable step changes;
- accessible drag/reorder alternatives using explicit move controls.

## 18. Performance
C1 should remain lightweight despite the catalog size.

Rules:
- catalog data loaded once and normalized;
- avoid hydrating static descriptive content unnecessarily;
- no heavy visualization dependency;
- no WebGL;
- no runtime external API calls for core generation;
- lazy-load export/secondary panels where useful;
- deterministic pure functions for build generation and selectors.

## 19. Testing Strategy
Required test layers:

### Unit
- reducer transitions;
- compatibility resolver;
- build-spec normalization;
- handoff generation;
- persistence parsing;
- validation mapping.

### Integration
- select industry → archetype → Design DNA → export;
- RTL Persian composition;
- incompatible selection warning;
- import valid Build Spec;
- reject invalid import.

### UI
- keyboard navigation through wizard;
- responsive generator shell;
- export disabled until valid;
- no silent state destruction on archetype changes.

### Existing factory tests
All Phase B validation and quality gates remain mandatory.

## 20. CI Quality Gates
Phase C1 PR cannot merge unless all pass:

```text
npm run check        # existing factory validation
npm run test         # C1 unit/integration tests
npm run typecheck
npm run lint
npm run build
```

A future browser E2E suite may be added after the stable UI shell exists, but C1 must have meaningful component/integration coverage before release.

## 21. Failure Handling
- missing catalog item: block affected selection and surface recovery;
- stale local draft: migrate only with explicit safe migration, otherwise reject;
- schema failure: show exact actionable field path;
- invalid imported Build Spec: never partially apply;
- unsupported combination: preserve draft but block final export;
- browser storage failure: continue in-memory.

## 22. Security & Privacy
C1 is local-first and has no authentication.

- no secret keys required;
- no user data sent externally;
- imported files parsed client-side where possible;
- downloadable content is generated from explicit user/catalog data;
- no execution of imported script content;
- render imported text as text, never raw HTML.

## 23. Phase C2 Compatibility
C1 must expose clean boundaries so C2 can later consume:

```ts
composeBuildSpec(draft, catalog) -> BuildSpec
validateBuildSpec(buildSpec) -> ValidationResult
generateAgentHandoff(buildSpec, target) -> string
```

C2 may add:

```text
Build Spec
  ↓
Code Generation Adapter
  ↓
Next.js Project
  ↓
Verification
```

without modifying the meaning of `risheh.build-spec.v1`.

## 24. Definition of Done
Phase C1 is ready when:

- generator UI is usable on desktop and mobile;
- all 16 industries are selectable from live catalog data;
- all 48+ archetypes are reachable through their industry;
- 12 Design DNA profiles are composable through the UI;
- page/pattern composition works without hardcoded duplicate catalogs;
- Persian RTL and English LTR flows both work;
- Build Spec output validates against `risheh.build-spec.v1`;
- JSON/YAML exports work;
- Codex / Claude Code / generic handoff outputs work;
- import and local draft persistence work;
- invalid combinations cannot be exported;
- existing Phase B quality checks remain green;
- C1 test, typecheck, lint and production build gates are green.
