# Phase C2 — Build Spec → Production Next.js Code Generation

## Status
Approved architecture: **B — Deterministic Core + Agent Enhancement**

## 1. Goal
Add a production code-generation subsystem on top of Phase C1 without redesigning or replacing Factory contracts.

C2 consumes a validated `risheh.build-spec.v1` and deterministically emits a runnable Next.js project. An optional agent-enhancement layer may refine only explicitly allowed surfaces after deterministic generation.

## 2. Non-Negotiable Contract Rule
`risheh.build-spec.v1` remains the canonical input contract.

C2 MUST NOT:
- introduce a competing build-spec contract;
- require Markdown scraping;
- mutate Phase B catalogs during generation;
- reinterpret missing required data as fabricated content;
- silently alter routes, business goals, locale direction, or archetype identity.

If C2 needs internal metadata, it must use internal runtime types or a generation manifest derived from the Build Spec, never a replacement public contract.

## 3. Product Boundary

### C2 includes
- validating `risheh.build-spec.v1` before generation;
- resolving Design DNA, patterns, routes, locale and implementation targets;
- generating a deterministic file plan;
- emitting a complete Next.js App Router project;
- generating reusable components instead of page-specific duplication;
- generating route files for all declared pages;
- generating design tokens and global styling from Design DNA references;
- generating semantic section composition from pattern IDs;
- generating structured content slots from Build Spec content;
- generating RTL/LTR-safe layout behavior;
- producing SEO metadata and accessibility defaults;
- generating a project-local `risheh-generation.json` provenance manifest;
- generating a production README for the emitted project;
- validating generated output with TypeScript, lint, Next build, route/link checks and forbidden-data scans;
- exporting the generated project as a directory/archive when running in a filesystem-capable environment;
- optional agent enhancement after deterministic generation;
- integrating generation into the existing C1 UI as an explicit action/status flow.

### C2 excludes
- deployment;
- authentication;
- billing;
- CMS provisioning;
- database schema generation unless a future Build Spec explicitly supports it;
- fabricated testimonials, metrics, prices, addresses, team members or awards;
- autonomous external API calls;
- unrestricted AI rewriting of generated architecture.

## 4. Core Pipeline

```text
Validated risheh.build-spec.v1
        ↓
Spec Resolver
        ↓
Generation Model
        ↓
File Plan
        ↓
Component Graph
        ↓
Next.js Project Emitter
        ↓
Deterministic Project
        ↓
Quality Pipeline
        ↓
Optional Agent Enhancement
        ↓
Quality Pipeline Again
        ↓
Production-ready Project
```

The deterministic project must be valid and usable even when the agent layer is disabled.

## 5. Internal Architecture

```text
src/features/codegen/
├── model.ts
├── resolve.ts
├── file-plan.ts
├── component-graph.ts
├── naming.ts
├── tokens.ts
├── content.ts
├── routes.ts
├── provenance.ts
├── generator.ts
├── quality.ts
└── agent-policy.ts

src/features/codegen/emitters/
├── project.ts
├── package-json.ts
├── app-router.ts
├── components.ts
├── sections.ts
├── styles.ts
├── seo.ts
├── content.ts
├── assets.ts
└── readme.ts

src/features/codegen/templates/
├── app/
├── ui/
├── sections/
└── config/

app/api/generate/
└── route.ts
```

The emitter layer receives only the normalized internal generation model and must not reach directly into UI state.

## 6. Generation Model
The Spec Resolver converts the public Build Spec into a fully explicit internal model.

Required resolved fields include:
- project identity;
- locale and direction;
- canonical route map;
- primary and secondary Design DNA IDs;
- normalized design tokens;
- section instances and pattern IDs;
- content slots with source provenance;
- SEO defaults;
- accessibility requirements;
- motion policy;
- implementation versions;
- generation timestamp and Factory version.

Resolution must fail when a referenced pattern or Design DNA ID cannot be found.

## 7. File Plan
Before writing files, C2 creates an in-memory deterministic file plan.

Each entry contains:
- path;
- file kind;
- owner subsystem;
- source Build Spec references;
- deterministic content hash;
- overwrite policy.

No file is written until the file plan validates successfully.

The same Build Spec + same Factory version must produce the same file plan, ignoring timestamps explicitly marked non-deterministic.

## 8. Generated Next.js Project Baseline
Default target:
- Next.js 16.3.x App Router;
- React 19.3.x;
- TypeScript strict mode;
- Tailwind CSS 4.x;
- semantic HTML;
- server components by default;
- client components only where interactions require them;
- logical CSS properties for RTL/LTR;
- reduced-motion support;
- route-level metadata;
- no fake runtime data.

Generated repository shape:

```text
<project>/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   └── <routes>/page.tsx
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── content/
│   └── site.ts
├── lib/
│   ├── config.ts
│   └── seo.ts
├── public/
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── README.md
└── risheh-generation.json
```

## 9. Component Graph Rules
Pattern IDs map to reusable section component families.

Examples:
- `hero-authority` → `AuthorityHero`;
- `hero-gallery` → `GalleryHero`;
- `service-authority-grid` → `AuthorityServiceGrid`;
- `portfolio-gallery` → `PortfolioGallery`;
- `lead-consultation` → `ConsultationCTA`;
- `footer-editorial` → `EditorialFooter`.

The same component family must be reused across pages when its behavior is the same.

A new section component may be emitted only when no supported reusable family exists; unsupported patterns fail closed rather than producing generic placeholder cards.

## 10. Design DNA Resolution
Design DNA changes implementation tokens and composition behavior without duplicating page architecture.

Resolved outputs include:
- typography scale and font roles;
- spacing scale;
- max-width/container strategy;
- surface/border/radius rules;
- image treatment;
- section rhythm;
- motion intensity;
- interaction density;
- content density;
- accessibility safeguards;
- prohibited visual patterns.

When two compatible DNA profiles are selected, C2 uses the first as primary and allows only documented secondary overrides.

## 11. Content Integrity
C2 must never fabricate factual business content.

Missing factual fields are handled by one of three explicit strategies:
1. omit the section;
2. render a clearly marked content slot for authoring environments;
3. use neutral structural copy that makes no factual claim.

Forbidden fabricated categories:
- testimonials;
- ratings;
- awards;
- client logos;
- revenue/growth metrics;
- addresses;
- team identities;
- medical/legal credentials;
- prices;
- stock availability;
- case-study outcomes.

Generated production builds must not contain obvious lorem ipsum.

## 12. RTL / LTR Generation
Direction comes from the Build Spec locale.

Requirements:
- `dir` applied at document root;
- logical CSS properties preferred;
- icon mirroring explicit, never blanket transform;
- navigation ordering tested in RTL;
- form alignment and validation messages direction-aware;
- mixed Persian/English text remains readable;
- media and gallery direction not blindly mirrored;
- motion directions honor semantic intent.

## 13. SEO & Accessibility
Every generated project must include:
- title/description metadata using available non-fabricated content;
- canonical-friendly route structure;
- semantic landmarks;
- heading-order baseline;
- keyboard-focus visibility;
- form labels where forms exist;
- reduced-motion handling;
- AA-oriented contrast safeguards inherited from Design DNA;
- image alt slots when factual descriptions are absent.

Industry-specific schema.org generation is deferred unless the Build Spec contains sufficient factual data.

## 14. Quality Pipeline
A generation is not successful until all applicable gates pass.

Required checks:
1. Build Spec AJV validation;
2. catalog reference validation;
3. file-plan uniqueness;
4. generated import-resolution check;
5. TypeScript check;
6. ESLint;
7. Next production build;
8. declared-route existence check;
9. internal-link route check;
10. forbidden fake-data scan;
11. placeholder/lorem scan;
12. RTL structural check when direction is RTL;
13. provenance manifest validation.

The generator returns structured failures by stage and never reports success on a partial project.

## 15. Provenance Manifest
Every generated project contains `risheh-generation.json` with internal generation metadata:

- generator version;
- Factory commit/version;
- Build Spec schema/version;
- Build Spec project ID;
- industry/archetype IDs;
- Design DNA IDs;
- pattern IDs;
- generation mode (`deterministic` or `deterministic+agent`);
- generated file hashes;
- quality-gate results.

This is provenance metadata, not a new input contract.

## 16. Agent Enhancement Policy
Agent enhancement is optional and runs only after deterministic quality passes.

Allowed:
- improve visual polish within resolved Design DNA;
- improve responsive composition;
- refactor generated component internals without changing public behavior;
- improve microcopy only when it remains non-factual;
- improve accessibility;
- improve semantic markup;
- replace neutral placeholders when user-provided factual content exists.

Forbidden:
- route changes;
- new business claims;
- fake testimonials/metrics;
- schema changes;
- dependency replacement without explicit policy;
- removing accessibility safeguards;
- modifying `risheh-generation.json` provenance claims manually;
- changing industry/archetype identity;
- copying reference-site trade dress.

After agent enhancement, the full quality pipeline runs again.

## 17. C1 Integration
C1 gains a Generate Project action only when Build Health is valid.

UI states:
- Ready to generate;
- Generating file plan;
- Emitting project;
- Validating project;
- Optional agent refinement;
- Complete;
- Failed with stage-specific diagnostics.

C1 continues to own composition/editing of the Build Spec. C2 owns code generation only.

## 18. API Boundary
Recommended server endpoint:

`POST /api/generate`

Input:
```json
{
  "buildSpec": {"schema":"risheh.build-spec.v1"},
  "mode":"deterministic"
}
```

Output on success contains generation metadata and a project artifact reference suitable for the current runtime.

No API field may override contract values such as industry, routes or Design DNA independently of the Build Spec.

## 19. Security
- reject path traversal in project IDs/routes;
- sanitize generated filenames;
- never execute user-provided shell commands;
- no arbitrary package injection from Build Spec;
- dependencies come from an allowlisted generator baseline;
- generated content is treated as data, not executable templates;
- archive output must remain inside the configured generation workspace.

## 20. Testing Strategy
Unit tests:
- resolver determinism;
- route normalization;
- naming safety;
- Design DNA resolution;
- pattern-to-component mapping;
- content integrity policy;
- file-plan determinism;
- provenance hashes.

Integration tests:
- generate representative LTR project;
- generate representative Persian RTL project;
- generate image-led architecture project;
- generate conversion-heavy legal/service project;
- validate all declared routes;
- build generated fixtures with Next production build.

Regression tests:
- same Build Spec produces same deterministic file set;
- incomplete factual content never creates fake claims;
- unsupported pattern fails rather than silently degrading.

## 21. Initial Supported Surface
C2 v1 must support all 27 existing pattern IDs and all 12 Design DNA IDs present in Phase B catalogs before being considered complete.

All 48 archetypes must resolve without unsupported references.

## 22. Failure Behavior
Fail closed for:
- invalid Build Spec;
- unknown Design DNA;
- unknown pattern;
- unsafe route/path;
- duplicate generated path;
- unsupported required interaction;
- failed quality gate.

Failures return actionable stage, file and diagnostic information.

## 23. Success Criteria
C2 is complete when:
- no existing Factory public contract was redesigned;
- a valid C1 Build Spec can generate a standalone Next.js project;
- all 27 patterns and 12 DNA profiles resolve;
- all 48 archetypes are generation-compatible;
- LTR and Persian RTL representative projects pass production build;
- generated routes exactly match the Build Spec;
- no fabricated factual content appears;
- deterministic mode works without any AI provider;
- agent enhancement is optional and policy-bounded;
- generated project includes provenance and quality evidence;
- CI verifies generator behavior and representative generated builds.

## 24. Future Extensions
Out of scope for this spec but compatible with the architecture:
- multiple framework adapters;
- CMS/data adapters;
- deployment adapters;
- visual screenshot QA automation;
- repository creation/push;
- hosted generation jobs;
- project regeneration/three-way merge;
- component marketplace.
