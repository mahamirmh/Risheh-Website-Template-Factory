# Business Template Factory v2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform Risheh Website Template Factory into a business-oriented, machine-readable, B → C-ready template system with 16 industry packs, 12 reusable Design DNA profiles, shared pattern contracts, 48+ archetypes, validation, documentation, quality gates, and stable Phase C generator contracts.

**Architecture:** The repository remains a knowledge base first, but gains explicit machine-readable contracts. Existing reference analyses are preserved, while new industry archetypes compose independent Business Psychology, Design DNA, Pattern Recipes, Brand/Content Configuration, and Build Specifications. Phase C will consume the same schemas and manifests rather than reverse-engineering Markdown.

**Tech Stack:** Markdown, YAML, JSON Schema Draft 2020-12, Node.js validation scripts, TypeScript-compatible data contracts, GitHub Actions, Next.js/TypeScript/Tailwind as preferred downstream implementation targets.

**Spec:** `docs/superpowers/specs/2026-09-09-business-template-factory-v2-design.md`

## Global Constraints

- Existing `templates/` reference files must not be deleted or bulk-rewritten during the first migration.
- Every ready industry must expose at least 3 genuinely distinct archetypes.
- Visual variants must differ in structure, psychology, interaction, or composition — not only colors/fonts.
- Every machine-readable artifact must use stable IDs and semantic versions.
- Persian RTL and English LTR support are first-class requirements.
- Reference brands, trademarks, claims, testimonials, and proprietary content must never be copied into reusable outputs.
- Phase C must consume repository contracts directly without requiring prose scraping.
- Validation must fail closed for malformed manifests, duplicate IDs, missing references, unsupported Design DNA links, and incomplete ready-status archetypes.

---

## Target File Map

### Core contracts
- Create: `schemas/business.schema.json` — business/brand/content/locale input contract.
- Create: `schemas/design-dna.schema.json` — reusable visual-system contract.
- Create: `schemas/pattern.schema.json` — reusable section/UX pattern contract.
- Create: `schemas/template.schema.json` — business archetype manifest contract.
- Create: `schemas/build-spec.schema.json` — Phase C normalized output contract.
- Create: `schemas/catalog.schema.json` — generated catalog/index contract.

### Validation runtime
- Create: `package.json` — validation scripts and dependencies.
- Create: `scripts/validate-factory.mjs` — schema validation and cross-reference checks.
- Create: `scripts/build-catalog.mjs` — deterministic catalog generation.
- Create: `scripts/check-quality-gates.mjs` — semantic quality checks.
- Create: `tests/fixtures/valid/*` and `tests/fixtures/invalid/*` — validation fixtures.
- Create: `.github/workflows/factory-quality.yml` — CI validation.

### Design DNA
- Create 12 manifests/specs under `design-dna/<id>/manifest.yaml` and `design-dna/<id>/README.md`.

### Pattern library
- Create shared patterns under `patterns/<family>/<pattern-id>/manifest.yaml` and `README.md`.

### Industry packs
- Create 16 industry directories under `industries/<industry-id>/`.
- Each contains `industry.yaml`, `README.md`, and at least 3 archetype directories.
- Each archetype contains `manifest.yaml`, `README.md`, and `build.example.yaml`.

### Docs
- Create: `docs/ARCHITECTURE.md`
- Create: `docs/BUSINESS_TEMPLATE_SPEC.md`
- Create: `docs/DESIGN_DNA_STANDARD.md`
- Create: `docs/PATTERN_STANDARD.md`
- Create: `docs/COMPONENT_STANDARD.md`
- Create: `docs/UX_STANDARD.md`
- Create: `docs/ACCESSIBILITY.md`
- Create: `docs/SEO_GEO_STANDARD.md`
- Create: `docs/QUALITY_GATES.md`
- Create: `docs/PHASE_C_CONTRACTS.md`
- Modify: `README.md`

---

## Task 1: Establish JSON Schema Contracts

**Files:**
- Create: `schemas/business.schema.json`
- Create: `schemas/design-dna.schema.json`
- Create: `schemas/pattern.schema.json`
- Create: `schemas/template.schema.json`
- Create: `schemas/build-spec.schema.json`
- Create: `schemas/catalog.schema.json`
- Create: `tests/fixtures/valid/business.yaml`
- Create: `tests/fixtures/invalid/business-missing-industry.yaml`

**Interfaces:**
- Consumes: approved v2 design spec.
- Produces: stable schema IDs `risheh.business.v1`, `risheh.design-dna.v1`, `risheh.pattern.v1`, `risheh.template.v1`, `risheh.build-spec.v1`, `risheh.catalog.v1`.

- [ ] **Step 1: Define stable common identifiers and semantic-version rules.**

Use lowercase kebab-case IDs matching `^[a-z0-9]+(?:-[a-z0-9]+)*$` and versions matching semantic versioning `^\\d+\\.\\d+\\.\\d+$`.

- [ ] **Step 2: Define `business.schema.json`.**

Required top-level keys: `schema`, `id`, `version`, `brand`, `business`, `content`, `locale`, `goals`, `implementation`.

Required `locale` fields: `language`, `direction`, `country`; `direction` enum: `rtl | ltr`.

- [ ] **Step 3: Define `design-dna.schema.json`.**

Require explicit tokens for typography, spacing, layout, geometry, imagery, motion, interaction density, content density, accessibility safeguards, suitable industries, unsuitable industries, and prohibited patterns.

- [ ] **Step 4: Define `pattern.schema.json`.**

Require `family`, `purpose`, `business_stage`, `required_content`, `optional_content`, `variants`, `responsive_rules`, `accessibility`, and `conversion_role`.

- [ ] **Step 5: Define `template.schema.json`.**

Require `industry`, `subcategory`, `status`, `design_dna`, `business_goals`, `audience`, `ux_recipe`, `patterns`, `pages`, `locale`, `implementation`, `quality`.

`status` enum: `draft | review | ready | deprecated`.

- [ ] **Step 6: Define `build-spec.schema.json`.**

Normalize the final generator-ready composition into `project`, `brand`, `industry`, `design`, `pages`, `sections`, `content`, `seo`, `accessibility`, `responsive`, `motion`, `implementation`, `provenance`.

- [ ] **Step 7: Define `catalog.schema.json`.**

Catalog must contain versioned arrays of industries, archetypes, design DNA profiles, and patterns with unique IDs.

- [ ] **Step 8: Add valid and invalid fixtures.**

The invalid fixture must fail specifically because `business.industry` is absent.

- [ ] **Step 9: Commit schema foundation.**

```bash
git add schemas tests/fixtures
git commit -m "feat: add factory schema contracts"
```

---

## Task 2: Build Validation Runtime

**Files:**
- Create: `package.json`
- Create: `scripts/lib/load-yaml.mjs`
- Create: `scripts/lib/walk.mjs`
- Create: `scripts/lib/schema-registry.mjs`
- Create: `scripts/validate-factory.mjs`
- Create: `tests/validation.test.mjs`

**Interfaces:**
- Consumes: all schemas from Task 1.
- Produces: `npm run validate`, exit code `0` on success and non-zero on any structural or referential defect.

- [ ] **Step 1: Add dependencies.**

Use `ajv`, `ajv-formats`, and `yaml`. Keep runtime ESM-only.

- [ ] **Step 2: Write failing validation tests.**

Tests must assert that a valid fixture passes and the missing-industry fixture fails with a path identifying `business.industry`.

- [ ] **Step 3: Implement YAML/JSON loader and deterministic directory walker.**

Sort paths lexicographically before validation to keep CI output stable.

- [ ] **Step 4: Implement schema registry.**

Load every schema from `schemas/` once and register by `$id`.

- [ ] **Step 5: Implement structural validation.**

Validate all manifests under `design-dna/`, `patterns/`, and `industries/` against the schema declared by their `schema` field.

- [ ] **Step 6: Implement cross-reference checks.**

Fail on duplicate IDs, missing Design DNA references, missing pattern references, unsupported industry references, and duplicate archetype IDs.

- [ ] **Step 7: Run tests.**

```bash
npm test
npm run validate
```

- [ ] **Step 8: Commit validation runtime.**

```bash
git add package.json scripts tests
git commit -m "feat: add factory validation runtime"
```

---

## Task 3: Create Design DNA Standard and 12 Design DNA Profiles

**Files:**
- Create: `docs/DESIGN_DNA_STANDARD.md`
- Create per profile: `design-dna/<id>/manifest.yaml`
- Create per profile: `design-dna/<id>/README.md`

**Profiles:**
1. `apple-minimal`
2. `editorial-luxury`
3. `immersive-3d`
4. `cinematic`
5. `brutalist-premium`
6. `swiss-grid`
7. `calm-luxury`
8. `bento-modern`
9. `magazine-editorial`
10. `conversion-first`
11. `gallery-first`
12. `storytelling-scroll`

**Interfaces:**
- Consumes: `risheh.design-dna.v1`.
- Produces: 12 independently composable design systems addressable by stable IDs.

- [ ] **Step 1: Define Design DNA authoring rules.**

Document required visual attributes, when to use each profile, anti-patterns, RTL considerations, reduced-motion behavior, image requirements, and compatibility rules.

- [ ] **Step 2: Author the 12 manifests.**

Every manifest must explicitly define typography behavior, spacing, max-width strategy, section rhythm, component geometry, radius/border/shadow logic, imagery, motion intensity, interaction density, content density, accessibility safeguards, suitable industries, unsuitable industries, and prohibited patterns.

- [ ] **Step 3: Author human-readable rationale for each profile.**

Each README must explain design intent, composition logic, hero behavior, section pacing, mobile adaptation, and examples of appropriate business use.

- [ ] **Step 4: Validate all profiles.**

```bash
npm run validate
```

- [ ] **Step 5: Commit Design DNA library.**

```bash
git add design-dna docs/DESIGN_DNA_STANDARD.md
git commit -m "feat: add reusable design DNA library"
```

---

## Task 4: Build Pattern Library Contracts and Core Patterns

**Files:**
- Create: `docs/PATTERN_STANDARD.md`
- Create manifests/specs under:
  - `patterns/hero/`
  - `patterns/navigation/`
  - `patterns/portfolio/`
  - `patterns/services/`
  - `patterns/menu/`
  - `patterns/testimonials/`
  - `patterns/lead-capture/`
  - `patterns/footer/`

**Interfaces:**
- Consumes: `risheh.pattern.v1`.
- Produces: reusable section IDs referenced by all industry archetypes.

- [ ] **Step 1: Define pattern authoring standard.**

Patterns must describe purpose and behavior, not visual brand mimicry.

- [ ] **Step 2: Create hero patterns.**

Minimum: `hero-authority`, `hero-atmosphere`, `hero-gallery`, `hero-outcome`, `hero-editorial`, `hero-product`, `hero-local-intent`.

- [ ] **Step 3: Create navigation patterns.**

Minimum: `nav-editorial`, `nav-corporate`, `nav-overlay`, `nav-local-service`, `nav-product`.

- [ ] **Step 4: Create portfolio/service/menu/proof patterns.**

Minimum shared IDs:
`portfolio-gallery`, `portfolio-case-study`, `service-authority-grid`, `service-outcome-list`, `menu-signature`, `menu-category`, `testimonial-editorial`, `testimonial-proof-grid`.

- [ ] **Step 5: Create lead-capture and footer patterns.**

Minimum: `lead-qualified-brief`, `lead-consultation`, `lead-reservation`, `lead-local-contact`, `footer-editorial`, `footer-corporate`, `footer-local-business`.

- [ ] **Step 6: Validate pattern manifests.**

```bash
npm run validate
```

- [ ] **Step 7: Commit pattern library.**

```bash
git add patterns docs/PATTERN_STANDARD.md
git commit -m "feat: add reusable website pattern library"
```

---

## Task 5: Define Industry Pack Contract and Business Psychology Layer

**Files:**
- Create: `docs/BUSINESS_TEMPLATE_SPEC.md`
- Create: `docs/UX_STANDARD.md`
- Create: `industries/_template/industry.yaml`
- Create: `industries/_template/archetype/manifest.yaml`
- Create: `industries/_template/archetype/README.md`
- Create: `industries/_template/archetype/build.example.yaml`

**Interfaces:**
- Consumes: Design DNA IDs and pattern IDs.
- Produces: repeatable authoring convention for all 16 industry packs.

- [ ] **Step 1: Define industry metadata contract.**

Include audience intent, trust model, decision friction, primary/secondary goals, SEO model, content density, imagery dependence, and default UX flow.

- [ ] **Step 2: Define archetype differentiation rule.**

Two archetypes are distinct only if at least two of these differ materially: UX flow, layout architecture, primary proof mechanism, conversion model, motion model, content density, or interaction model.

- [ ] **Step 3: Define RTL/LTR content-flow rules.**

Do not mirror media direction blindly; logical order, icon direction, carousels, charts, breadcrumbs, forms, and motion must define explicit RTL behavior.

- [ ] **Step 4: Add industry/archetype templates.**

These are authoring blueprints, not production archetypes.

- [ ] **Step 5: Validate template examples.**

```bash
npm run validate
```

- [ ] **Step 6: Commit industry authoring contract.**

```bash
git add industries/_template docs/BUSINESS_TEMPLATE_SPEC.md docs/UX_STANDARD.md
git commit -m "feat: define industry pack authoring contract"
```

---

## Task 6: Create Industry Packs 1–4 — Cafe, Architecture, Construction, Legal

**Files:**
- Create: `industries/cafe-restaurant/`
- Create: `industries/architecture/`
- Create: `industries/construction/`
- Create: `industries/legal/`

**Archetypes:**

### Cafe & Restaurant
- `editorial-bistro`
- `cinematic-fine-dining`
- `modern-menu-first`

### Architecture
- `calm-editorial-studio`
- `immersive-spatial-portfolio`
- `brutalist-architecture-office`

### Construction
- `corporate-project-authority`
- `industrial-capability-first`
- `premium-development-showcase`

### Legal
- `institutional-authority`
- `boutique-editorial-law`
- `local-seo-consultation`

**Interfaces:**
- Consumes: Design DNA and Pattern Library.
- Produces: 12 validated archetypes.

- [ ] **Step 1: Author four `industry.yaml` files.**
- [ ] **Step 2: Author 12 archetype manifests.**
- [ ] **Step 3: Author 12 detailed human-readable specs.**
- [ ] **Step 4: Add 12 generator-normalized build examples.**
- [ ] **Step 5: Validate and run quality checks.**
- [ ] **Step 6: Commit first industry wave.**

```bash
git add industries/cafe-restaurant industries/architecture industries/construction industries/legal
git commit -m "feat: add first business template industry wave"
```

---

## Task 7: Create Industry Packs 5–8 — Services, Corporate, Healthcare, Beauty

**Archetypes:**

### Professional Services
- `apple-service-company`
- `outcome-consulting`
- `editorial-expertise`

### Corporate
- `institutional-corporate`
- `modern-enterprise`
- `story-led-company`

### Healthcare & Clinic
- `calm-clinic`
- `specialist-authority`
- `appointment-conversion`

### Beauty & Salon
- `editorial-beauty`
- `luxury-salon`
- `booking-first-studio`

- [ ] **Step 1: Author four industry manifests.**
- [ ] **Step 2: Author 12 archetypes and build examples.**
- [ ] **Step 3: Ensure healthcare templates avoid unverifiable medical claims and prioritize accessibility.**
- [ ] **Step 4: Validate.**
- [ ] **Step 5: Commit second industry wave.**

---

## Task 8: Create Industry Packs 9–12 — Real Estate, Education, E-commerce, Hospitality

**Archetypes:**

### Real Estate
- `luxury-property-gallery`
- `local-lead-generation`
- `developer-project-showcase`

### Education
- `institutional-school`
- `course-conversion`
- `academy-editorial`

### E-commerce
- `editorial-commerce`
- `product-conversion`
- `premium-catalog`

### Hospitality & Hotel
- `cinematic-hotel`
- `boutique-storytelling`
- `booking-first-hospitality`

- [ ] **Step 1: Author four industry manifests.**
- [ ] **Step 2: Author 12 archetypes and build examples.**
- [ ] **Step 3: Validate commerce/booking CTA and accessibility rules.**
- [ ] **Step 4: Validate.**
- [ ] **Step 5: Commit third industry wave.**

---

## Task 9: Create Industry Packs 13–16 — Fitness, SaaS, Agency, Personal Brand

**Archetypes:**

### Gym & Fitness
- `high-energy-membership`
- `premium-wellness`
- `coach-community`

### Technology & SaaS
- `bento-saas`
- `product-storytelling`
- `enterprise-platform`

### Agency & Creative Studio
- `immersive-agency`
- `brutalist-creative`
- `case-study-conversion`

### Personal Brand / Expert
- `editorial-expert`
- `authority-speaker`
- `creator-conversion`

- [ ] **Step 1: Author four industry manifests.**
- [ ] **Step 2: Author 12 archetypes and build examples.**
- [ ] **Step 3: Validate.**
- [ ] **Step 4: Confirm total archetype count is at least 48.**
- [ ] **Step 5: Commit fourth industry wave.**

---

## Task 10: Add Semantic Quality Gates

**Files:**
- Create: `scripts/check-quality-gates.mjs`
- Create: `tests/quality-gates.test.mjs`
- Create: `docs/QUALITY_GATES.md`

**Interfaces:**
- Consumes: all manifests/specs.
- Produces: `npm run quality` and machine-readable diagnostics.

- [ ] **Step 1: Test duplicate-like archetype detection rules.**

At minimum compare: design DNA set, UX recipe, pattern sequence, primary goal, interaction density, and content density. Ready archetypes within one industry must not be identical across these dimensions.

- [ ] **Step 2: Enforce completeness for `status: ready`.**

Ready archetypes require valid build example, README, at least one primary CTA, page list, accessibility rules, SEO model, responsive behavior, and provenance.

- [ ] **Step 3: Enforce RTL quality.**

Ready archetypes supporting RTL must define navigation direction, logical spacing strategy, icon mirroring policy, form alignment, and bidirectional content handling.

- [ ] **Step 4: Enforce non-cloning safeguards.**

Fail if reusable manifests contain known reference-brand URLs, trademarked names in output fields, or copied testimonials/claims fields.

- [ ] **Step 5: Document quality gate meanings and remediation.**
- [ ] **Step 6: Commit quality runtime.**

---

## Task 11: Build Deterministic Catalog and Search Index

**Files:**
- Create: `scripts/build-catalog.mjs`
- Generate: `catalog/factory.catalog.json`
- Generate: `catalog/factory.catalog.yaml`
- Create: `tests/catalog.test.mjs`

**Interfaces:**
- Consumes: validated manifests.
- Produces: Phase C discovery index and human-readable catalog.

- [ ] **Step 1: Write catalog generation test.**

Assert deterministic ordering by `industry`, then `id`.

- [ ] **Step 2: Generate summaries for industries, archetypes, Design DNA profiles, and patterns.**
- [ ] **Step 3: Include compatibility metadata and locale support.**
- [ ] **Step 4: Validate generated catalog against `catalog.schema.json`.**
- [ ] **Step 5: Commit catalog generator and generated outputs.**

---

## Task 12: Define Phase C Contracts

**Files:**
- Create: `docs/PHASE_C_CONTRACTS.md`
- Create: `examples/phase-c/business-input.yaml`
- Create: `examples/phase-c/template-selection.yaml`
- Create: `examples/phase-c/build-spec.yaml`

**Interfaces:**
- Consumes: business input + selected archetype + selected Design DNA + pattern composition.
- Produces: `risheh.build-spec.v1` suitable for a future UI/API/generator.

- [ ] **Step 1: Define Phase C input pipeline.**

```text
BusinessInput
→ TemplateDiscovery
→ ArchetypeSelection
→ DesignDNAOverrides
→ PatternComposition
→ BuildSpec
→ Implementation Agent
```

- [ ] **Step 2: Define deterministic override precedence.**

`factory defaults < industry defaults < archetype defaults < brand config < explicit user overrides`.

- [ ] **Step 3: Define compatibility/error contract.**

Errors must have stable codes such as `UNKNOWN_INDUSTRY`, `UNKNOWN_ARCHETYPE`, `INCOMPATIBLE_DESIGN_DNA`, `MISSING_REQUIRED_CONTENT`, `UNSUPPORTED_LOCALE`.

- [ ] **Step 4: Define provenance.**

Every generated BuildSpec must record schema versions, archetype ID/version, Design DNA IDs/versions, pattern IDs/versions, and generator version.

- [ ] **Step 5: Add three complete Phase C examples and validate them.**
- [ ] **Step 6: Commit Phase C contract layer.**

---

## Task 13: Documentation and README Overhaul

**Files:**
- Modify: `README.md`
- Create: `docs/ARCHITECTURE.md`
- Create: `docs/COMPONENT_STANDARD.md`
- Create: `docs/ACCESSIBILITY.md`
- Create: `docs/SEO_GEO_STANDARD.md`
- Create: `docs/MIGRATION.md`

**Interfaces:**
- Consumes: complete Factory v2 implementation.
- Produces: contributor-ready and operator-ready documentation.

- [ ] **Step 1: Rewrite README around Factory v2 mental model.**

Include: product vision, B → C roadmap, architecture diagram, folder map, quick start, validation commands, authoring workflow, industry catalog, Design DNA catalog, and non-cloning rule.

- [ ] **Step 2: Document architecture boundaries.**
- [ ] **Step 3: Document component and accessibility standards.**
- [ ] **Step 4: Document SEO/GEO behavior for local, editorial, product, service, and portfolio sites.**
- [ ] **Step 5: Document migration path from legacy `templates/` to `references/`.**
- [ ] **Step 6: Validate documentation examples against schemas where applicable.**
- [ ] **Step 7: Commit documentation overhaul.**

---

## Task 14: CI Quality Pipeline

**Files:**
- Create: `.github/workflows/factory-quality.yml`

**Interfaces:**
- Consumes: npm validation/test/quality/catalog scripts.
- Produces: required green signal before merge.

- [ ] **Step 1: Add CI job on pull requests and pushes to `main`.**
- [ ] **Step 2: Use Node LTS and `npm ci`.**
- [ ] **Step 3: Run `npm test`, `npm run validate`, `npm run quality`, and catalog drift check.**
- [ ] **Step 4: Ensure generated catalog is committed and CI fails if regeneration changes it.**
- [ ] **Step 5: Commit workflow.**

---

## Task 15: Final Factory Verification and Release Candidate

**Files:**
- Update: `catalog/factory.catalog.json`
- Update: `catalog/factory.catalog.yaml`
- Create: `docs/RELEASE_CHECKLIST.md`

**Interfaces:**
- Consumes: all previous tasks.
- Produces: Business Template Factory v2 Release Candidate.

- [ ] **Step 1: Run full verification.**

```bash
npm ci
npm test
npm run validate
npm run quality
npm run catalog
npm run catalog:check
```

- [ ] **Step 2: Assert release counts.**

Minimum acceptance:
- 16 industries
- 48 archetypes
- 12 Design DNA profiles
- 8 pattern families
- 0 schema errors
- 0 cross-reference errors
- 0 quality-gate failures

- [ ] **Step 3: Review every `ready` archetype for no fake/example business claims leaking into reusable output.**
- [ ] **Step 4: Verify RTL and LTR examples.**
- [ ] **Step 5: Verify Phase C examples normalize to `risheh.build-spec.v1`.**
- [ ] **Step 6: Create release checklist and mark only evidence-backed items complete.**
- [ ] **Step 7: Open PR from implementation branch into `main` with architecture, counts, validation evidence, and migration notes.**

---

## Acceptance Criteria

The project is complete for Phase B when all of the following are true:

1. The repository contains valid machine-readable schema contracts.
2. All 12 Design DNA profiles validate and document distinct visual logic.
3. The pattern library provides reusable section/UX recipes independent of brands.
4. All 16 industry families are present.
5. At least 48 archetypes validate and pass semantic differentiation gates.
6. Every ready archetype supports explicit RTL/LTR behavior where declared.
7. Catalog generation is deterministic and CI-enforced.
8. README and docs describe both human authoring and machine consumption.
9. Existing reference-site analyses remain intact during migration.
10. Phase C can consume the factory through stable manifests, catalog data, and `risheh.build-spec.v1` without scraping Markdown.
