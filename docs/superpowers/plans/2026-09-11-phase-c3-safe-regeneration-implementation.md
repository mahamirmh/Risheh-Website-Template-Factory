# Phase C3 Safe Regeneration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Regenerate an existing C2-generated Next.js project from a new `risheh.build-spec.v1` while preserving manual edits, surfacing true conflicts, validating in staging, and applying updates atomically.

**Architecture:** C3 adds an internal `.risheh/` baseline/state layer around the unchanged C2 generator. It computes deterministic Base/Current/Next classifications, performs conservative three-way text merges, materializes a staging copy, runs the existing generated-project quality pipeline, then swaps directories atomically only on success.

**Tech Stack:** TypeScript 5.9, Node.js >=20, Next.js 16.3, existing C2 FilePlan/quality runtime, Node `fs/promises`, `crypto`, `node:test` through `tsx`.

**Spec:** `docs/superpowers/specs/2026-09-11-phase-c3-safe-regeneration-design.md`

## Global Constraints
- `risheh.build-spec.v1` remains unchanged and is the only public generation input contract.
- C2 fresh create-mode must remain backward-compatible.
- Never silently overwrite a user-modified Factory file.
- Never silently delete a user-modified Factory file.
- Never overwrite a user-owned path collision.
- Preview is non-mutating; apply recomputes from disk.
- No Git runtime dependency.
- No AST semantic guessing in C3 v1.
- No writes outside the configured regeneration root.
- Symlink escapes are rejected.
- `.env*`, `node_modules`, `.next`, caches and secrets are excluded from baseline/report handling.
- Blocking conflicts stop before active-project mutation.
- Quality failure leaves the active project byte-for-byte unchanged.
- Atomic rename failure fails closed and rollback restores the previous project.

---

### Task 1: Regeneration domain model and deterministic IDs

**Files:**
- Create: `src/features/regeneration/model.ts`
- Create: `src/features/regeneration/hash.ts`
- Test: `tests/c3/regeneration-model.test.ts`

**Interfaces:**
- Produces `RegenerationEntry`, `RegenerationPlan`, `RegenerationReport`, `RegenerationState`, `BaselineManifest`, `hashContent()`, `hashBuildSpec()`, `createGenerationId()`.

- [ ] Write failing tests proving stable SHA-256 hashes, deterministic generation IDs for identical normalized inputs, and complete status/count enums.
- [ ] Run `npx tsx --test tests/c3/regeneration-model.test.ts`; verify RED because modules do not exist.
- [ ] Implement focused types and canonical JSON hashing with sorted object keys.
- [ ] Re-run the test and verify GREEN.
- [ ] Commit `feat(c3): add regeneration domain model`.

### Task 2: Safe project inspection and ownership discovery

**Files:**
- Create: `src/features/regeneration/paths.ts`
- Create: `src/features/regeneration/inspect.ts`
- Test: `tests/c3/inspection.test.ts`

**Interfaces:**
- Consumes C2 `sanitizeProjectId()` and provenance file format.
- Produces `resolveProjectRoot(root, projectId)`, `assertSafeProjectPath()`, `inspectExistingProject()`.

- [ ] Write failing tests for traversal (`../`), absolute escape, symlink escape, valid project identity, user-owned file discovery, and `.env*` exclusion.
- [ ] Run test and verify RED.
- [ ] Implement realpath/lstat-based containment checks; ownership comes from baseline/provenance, never filename convention.
- [ ] Re-run and verify GREEN.
- [ ] Commit `feat(c3): add safe project inspection`.

### Task 3: Baseline persistence and safe C2 adoption

**Files:**
- Create: `src/features/regeneration/state.ts`
- Create: `src/features/regeneration/baseline.ts`
- Test: `tests/c3/baseline.test.ts`

**Interfaces:**
- Produces `initializeRegenerationState(projectRoot, plan)`, `loadRegenerationState()`, `loadActiveBaseline()`, `adoptLegacyGeneratedProject()`.

- [ ] Write failing tests for `.risheh/state.json`, baseline content/hash consistency, secret exclusion, corrupted baseline rejection, and legacy C2 adoption only when deterministic regeneration hashes match provenance.
- [ ] Run test and verify RED.
- [ ] Implement state schema `risheh.regeneration-state.v1`, baseline manifest and Factory-owned file snapshots.
- [ ] Re-run and verify GREEN.
- [ ] Commit `feat(c3): persist regeneration baselines`.

### Task 4: Base/Current/Next classifier

**Files:**
- Create: `src/features/regeneration/classify.ts`
- Test: `tests/c3/classify.test.ts`

**Interfaces:**
- Produces `classifyFileChange({path, base, current, next, ownership})`.

- [ ] Write table-driven failing tests for unchanged, `update-factory`, `preserve-user`, both-changed, safe delete, edited-delete conflict, manual-delete conflict, new-next, and user-owned collision.
- [ ] Run test and verify RED.
- [ ] Implement the exact decision matrix from Spec sections 6–7.
- [ ] Re-run and verify GREEN.
- [ ] Commit `feat(c3): classify regeneration changes`.

### Task 5: Conservative three-way text merge

**Files:**
- Create: `src/features/regeneration/merge.ts`
- Test: `tests/c3/merge.test.ts`

**Interfaces:**
- Produces `mergeText({path, base, current, next}): MergeResult`.

- [ ] Write failing tests for user-only edit, Factory-only edit, non-overlapping line edits, same-line overlap conflict, insertions at separate positions, and binary/unsupported conflict.
- [ ] Run test and verify RED.
- [ ] Implement deterministic line-aware hunks; never insert conflict markers into production content.
- [ ] Re-run and verify GREEN.
- [ ] Commit `feat(c3): add conservative three-way merge`.

### Task 6: Immutable regeneration planner

**Files:**
- Create: `src/features/regeneration/plan.ts`
- Test: `tests/c3/plan.test.ts`

**Interfaces:**
- Consumes active baseline, inspected Current files, and C2 Next `FilePlan`.
- Produces `buildRegenerationPlan(input): RegenerationPlan`.

- [ ] Write failing tests proving identical Base/Current/Next yields byte-equivalent normalized plans, user-owned files remain outside Factory operations, and conflict counts are exact.
- [ ] Run test and verify RED.
- [ ] Implement sorted path union, classifier invocation, merge adapter invocation, resulting hashes and reasons.
- [ ] Re-run and verify GREEN.
- [ ] Commit `feat(c3): build deterministic regeneration plans`.

### Task 7: Staging materialization and operation application

**Files:**
- Create: `src/features/regeneration/staging.ts`
- Test: `tests/c3/staging.test.ts`

**Interfaces:**
- Produces `createStagingWorkspace()`, `applyPlanToStaging()`, `discardStagingWorkspace()`.

- [ ] Write failing tests proving current project is copied without `node_modules`, `.next`, caches or sibling escapes; add/update/merge/delete operations affect staging only; conflicts block materialization.
- [ ] Run test and verify RED.
- [ ] Implement recursive safe copy and plan application with path containment checks.
- [ ] Re-run and verify GREEN.
- [ ] Commit `feat(c3): stage regeneration updates safely`.

### Task 8: Atomic apply and rollback

**Files:**
- Create: `src/features/regeneration/atomic.ts`
- Test: `tests/c3/atomic.test.ts`

**Interfaces:**
- Produces `atomicReplaceProject({activeRoot, stagingRoot, regenerationId})`.

- [ ] Write failing tests for successful same-filesystem swap, simulated final rename failure restoring original, rollback cleanup after success, and cross-root/unsafe path rejection.
- [ ] Run test and verify RED.
- [ ] Implement sibling rollback rename sequence; never use recursive in-place fallback.
- [ ] Re-run and verify GREEN.
- [ ] Commit `feat(c3): add atomic regeneration apply`.

### Task 9: Regeneration runtime orchestration and reports

**Files:**
- Create: `src/features/regeneration/runtime.ts`
- Create: `src/features/regeneration/report.ts`
- Test: `tests/c3/runtime.test.ts`

**Interfaces:**
- Produces `previewRegeneration(buildSpec, options)`, `applyRegeneration(buildSpec, options)`.
- Reuses C2 `generateProjectPlan()` and `runGeneratedProjectQuality()`.

- [ ] Write failing integration tests: preview never mutates; apply recomputes; conflict blocks; quality failure preserves original bytes; successful apply advances baseline/state and writes `risheh.regeneration-report.v1`.
- [ ] Run test and verify RED.
- [ ] Implement orchestration: inspect → load/adopt baseline → generate Next → plan → stage → quality → baseline/provenance update → atomic swap → report.
- [ ] Re-run and verify GREEN.
- [ ] Commit `feat(c3): orchestrate safe regeneration runtime`.

### Task 10: Initialize C3 metadata on fresh C2 generation

**Files:**
- Modify: `src/features/codegen/runtime.ts`
- Test: `tests/c3/c2-initialization.test.ts`

**Interfaces:**
- Fresh `generateToWorkspace()` still returns existing C2 fields and additionally initializes `.risheh/` after the initial FilePlan is written.

- [ ] Write failing test generating a fresh project and asserting C2 files plus valid initial baseline/state.
- [ ] Run test and verify RED.
- [ ] Add post-write initialization without changing `risheh.build-spec.v1` or C2 FilePlan semantics.
- [ ] Run existing C2 tests plus new test and verify GREEN.
- [ ] Commit `feat(c3): initialize regeneration state on generation`.

### Task 11: Regeneration API

**Files:**
- Create: `app/api/regenerate/route.ts`
- Test: `tests/c3/api-contract.test.ts`

**Interfaces:**
- `POST /api/regenerate` accepts `{projectId, buildSpec, action:'preview'|'apply'}`.

- [ ] Write failing contract tests for invalid action, project/buildSpec ID mismatch, preview success, blocked conflict response, and apply success/failure stage response.
- [ ] Run test and verify RED.
- [ ] Implement route with Build Spec validation and no independent design/route overrides.
- [ ] Re-run and verify GREEN.
- [ ] Commit `feat(c3): expose regeneration API`.

### Task 12: Existing Project / Regenerate UI

**Files:**
- Create: `src/components/regeneration/RegenerationPanel.tsx`
- Modify: `src/components/generator/GeneratorWorkspace.tsx` or its C2 wrapper, preserving existing composition state ownership.
- Test: `tests/c3/ui-contract.test.ts`

**Interfaces:**
- UI calls `/api/regenerate` preview first, displays counts/conflicts, and enables apply only for a non-blocked fresh preview.

- [ ] Write failing UI contract/source tests for preview-before-apply, visible Added/Updated/Preserved/Merged/Deleted/Conflicted counts, blocked conflict state, validation/apply states, and no false Complete state.
- [ ] Run test and verify RED.
- [ ] Implement compact regeneration panel consistent with existing Factory UI; do not duplicate C1/C2 state logic.
- [ ] Re-run and verify GREEN.
- [ ] Commit `feat(c3): add regeneration workspace UI`.

### Task 13: Representative LTR/RTL regression journeys

**Files:**
- Create: `scripts/regeneration/check-regeneration-fixtures.mjs`
- Create: `tests/c3/regression.test.ts`
- Modify: `package.json`

**Interfaces:**
- Adds `regeneration:check` command.

- [ ] Write failing regression harness that generates LTR service and Persian RTL legal projects, initializes baselines, edits Factory files, adds user files, changes Build Specs, previews/applies, and verifies preservation/update behavior.
- [ ] Run harness and verify RED before runtime is complete.
- [ ] Complete fixture assertions including repeated regeneration and deliberate conflict scenario.
- [ ] Run `npm run regeneration:check` and verify both resulting staging/final projects pass `npm install`, lint and Next production build where applicable.
- [ ] Commit `test(c3): add regeneration regression journeys`.

### Task 14: CI, documentation and final verification

**Files:**
- Modify: `.github/workflows/factory-quality.yml`
- Modify: `README.md`
- Create: `docs/PHASE_C3_REGENERATION.md`

**Interfaces:**
- CI runs existing C1/C2 gates plus `npm run regeneration:check`.

- [ ] Update CI to execute C3 unit/integration tests and representative regeneration builds without removing C1/C2 gates.
- [ ] Document create vs regenerate, `.risheh/`, ownership, preview/apply, conflicts, rollback and recovery.
- [ ] Run/verify `npm run check`, `npm run catalog`, `npm run build`, `npm run codegen:check`, `npm run regeneration:check` in CI.
- [ ] Review PR diff for Build Spec drift, unsafe filesystem operations, secret leakage, silent overwrite/delete, and false success reporting.
- [ ] Commit `docs(c3): finalize safe regeneration workflow`.

## Definition of Done
- C3 consumes unchanged `risheh.build-spec.v1`.
- C2 fresh generation remains green.
- Baselines contain exact Factory-owned content but no secrets.
- Deterministic preview classifies all paths.
- Non-overlapping manual edits survive regeneration.
- True overlaps block without active-file mutation.
- User-owned files survive.
- Edited obsolete Factory files are not silently deleted.
- Quality failures leave active project unchanged.
- Successful apply uses atomic sibling swap with rollback protection.
- Reports and active baseline advance only after success.
- LTR and Persian RTL repeated regeneration journeys pass production build in CI.
- Existing C1/C2 checks remain green.