# 🌿 Risheh Website Template Factory

> **Business-oriented website design intelligence for fast, high-quality, non-generic website production.**

Risheh Website Template Factory is a structured **Design Intelligence + Business Archetype + Production Code + Safe Regeneration Factory**. It turns reference-site research into reusable Design DNA, UX patterns, industry psychology, validated archetypes, generator-ready Build Specs, standalone Next.js projects and repeatable updates that protect manual edits.

## ✨ Factory v2 — B → C3

```text
Reference Analysis Library
        ↓
Design DNA + Pattern Library
        ↓
Industry Psychology + Business Archetypes
        ↓
Phase C1 Visual Generator
        ↓
risheh.build-spec.v1
        ↓
Phase C2 Deterministic Code Generator
        ↓
Standalone Production Next.js Project
        ↓
Phase C3 Safe Regeneration
Base ↔ Current ↔ Next
        ↓
Staging + Quality + Atomic Apply
        ↓
Optional Policy-Bounded Agent Enhancement
```

### Current factory inventory

| Layer | Current baseline |
|---|---:|
| Industry families | **16** |
| Business archetypes | **48** |
| Design DNA profiles | **12** |
| Reusable patterns | **27** |
| Stable generation contract | `risheh.build-spec.v1` |
| Languages | RTL + LTR |
| Visual composer | **Phase C1** |
| Production code generator | **Phase C2** |
| Existing-project safe regeneration | **Phase C3** |

## 🧠 Core principle

**Template ≠ clone and regeneration ≠ overwrite.** Industry psychology, Design DNA, UX/conversion recipes, patterns, brand/content configuration and accessibility requirements compose the Build Spec. C2 turns that contract into deterministic code; C3 updates previously generated code without silently destroying legitimate manual work.

## 🖥️ Phase C1 — Visual Generator

The Next.js composition interface lives at `/generator`. It selects industry/archetype, blends compatible Design DNA, configures pages/patterns, brand/content/locale, accessibility/SEO/responsive/motion preferences and exports a validated `risheh.build-spec.v1`.

```bash
npm install
npm run dev
```

See `docs/PHASE_C1_VISUAL_GENERATOR.md`.

## ⚙️ Phase C2 — Production Next.js Code Generation

C2 consumes the same `risheh.build-spec.v1` and deterministically emits a standalone Next.js 16.3 / React 19.3 / TypeScript project under `.generated/<project-id>/`. Generated projects include SHA-256 provenance, explicit RTL/LTR direction, reduced-motion safeguards and no fabricated business claims.

```bash
npm run codegen:check
```

This resolves all Factory archetypes and verifies representative generated production projects.

## ♻️ Phase C3 — Safe Regeneration

C3 adds a baseline under `.risheh/` to each fresh generated project. Updating an existing project compares:

```text
Base     = last successful Factory output
Current  = project as manually edited
Next     = deterministic output from the new Build Spec
```

Safe rules:
- untouched Factory files update automatically;
- user-only edits are preserved;
- non-overlapping text edits can auto-merge;
- overlapping edits become blocking conflicts;
- user-owned path collisions never overwrite;
- manually edited obsolete files are never silently deleted;
- preview does not mutate the project;
- apply uses staging, quality gates and an atomic sibling swap with rollback protection.

The `/generator` workspace exposes **C3 · Safe Regeneration** with Preview and Apply actions plus Added / Updated / Preserved / Merged / Deleted / Conflicted counts.

```bash
npm run regeneration:check
```

See `docs/PHASE_C3_REGENERATION.md` and the design/implementation documents under `docs/superpowers/`.

## 🧪 Quality commands

```bash
npm run check
npm run catalog
npm run build
npm run codegen:check
npm run regeneration:check
```

A production change is not considered verified merely because files were emitted. Factory validation, application build, C2 generated-project checks and C3 regeneration contracts remain independent gates.

## 🔒 Contract boundaries

- `schemas/*.schema.json` remain the source of truth.
- `risheh.build-spec.v1` is the public C1 → C2 → C3 contract.
- `.risheh/` is internal project regeneration state.
- C3 does not require Git and does not perform semantic AST guessing in v1.
- Agent enhancement is optional and may not silently alter immutable Factory constraints.

## 📚 Key documentation

- `docs/ARCHITECTURE.md`
- `docs/PHASE_C1_VISUAL_GENERATOR.md`
- `docs/PHASE_C2_CODE_GENERATION.md`
- `docs/PHASE_C3_REGENERATION.md`
- `docs/QUALITY_GATES.md`
- `docs/PHASE_C_CONTRACTS.md`

---

**Risheh Website Template Factory** is designed to move from reference intelligence to reproducible production websites while keeping business intent, design DNA, accessibility, provenance and human edits explicit.