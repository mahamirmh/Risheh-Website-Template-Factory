# Phase C1 Visual Generator Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a production-ready Next.js visual generator that composes Phase B catalogs into validated `risheh.build-spec.v1` outputs and agent handoff prompts.

**Architecture:** Next.js 16 App Router with a server-loaded Phase B catalog and a focused client composer. Existing JSON Schemas remain final validation authority. The app has no database or external AI dependency; drafts persist in localStorage and exports are deterministic JSON/YAML.

**Tech Stack:** Next.js 16.3.x, React 19.3, TypeScript, CSS variables/global CSS, AJV, YAML, Node test runner via tsx.

**Spec:** `docs/superpowers/specs/2026-09-10-phase-c1-visual-generator-design.md`

## Global Constraints
- Phase B source catalogs remain immutable inputs.
- No fake screenshots or fabricated preview data.
- `schemas/build-spec.schema.json` is the export authority.
- Persian RTL and English LTR are first-class.
- No auth, database, deployment, billing, AI API, or code generation in C1.
- UI must remain visually neutral and not imitate the selected Design DNA.

---

### Task 1: App foundation and contracts
Create Next.js/TypeScript configuration, update package scripts/dependencies, add C1 types and catalog loader.

### Task 2: TDD build-spec engine
Write tests for deterministic composition, incompatible selection rejection, and agent handoff generation; implement minimal engine to pass.

### Task 3: Visual generator shell
Build the responsive three-region desktop workspace and single-column mobile flow with step rail, composer, and live summary.

### Task 4: Guided composition flow
Implement Business, Industry, Archetype, Design DNA, Pages/Patterns, Brand/Content, Quality, and Review steps with deterministic reversible state.

### Task 5: Import/export and persistence
Add localStorage versioned draft persistence, JSON/YAML export, Build Spec import, and Codex/Claude/generic handoff copy surfaces.

### Task 6: Validation and quality UX
Validate generated specs against AJV server-side, surface compatibility/build-health states, and block invalid exports.

### Task 7: CI and documentation
Extend Factory Quality CI with C1 tests and `next build`; document C1 usage, product boundary, and Phase C2 handoff.

### Verification
Run `npm test`, `npm run check`, `npm run catalog`, and `npm run build` in CI. Merge only after all checks pass.
