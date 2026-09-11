# Phase C3 — Safe Regeneration

C3 updates an existing C2-generated project without treating regeneration as destructive overwrite.

## Contract
C3 consumes the same `risheh.build-spec.v1`. `.risheh/` is internal runtime metadata, not a new public Build Spec.

## Safety model
For every Factory-owned file C3 compares **Base** (last successful Factory output), **Current** (the edited project) and **Next** (new deterministic C2 output).

- Current = Base, Next changed → Factory update.
- Current changed, Next = Base → preserve user edit.
- Both changed without overlapping lines → conservative auto-merge.
- Both changed on overlapping lines → blocking conflict.
- Obsolete untouched Factory file → safe delete.
- Obsolete manually edited Factory file → conflict, never silent delete.
- New Factory output colliding with a user-owned path → conflict.

No conflict markers are inserted into active production files.

## Runtime state
Fresh C2 generation initializes:

```text
.risheh/
  state.json
  baselines/<generation-id>/manifest.json
  baselines/<generation-id>/files/...
  reports/...
```

`.env*`, dependency/build caches and user-owned files are not baseline-owned.

## Preview / Apply
`POST /api/regenerate` accepts `{ projectId, buildSpec, action: "preview" | "apply" }`.

Preview computes a deterministic plan without modifying the active project. Apply recomputes from disk, blocks on conflicts, copies the project into a sibling staging workspace, applies only safe operations, runs quality checks, advances the baseline, and swaps staging into place atomically.

If quality or final rename fails, the previous active project remains/restores as the source of truth.

## UI
The generator workspace includes **C3 · Safe Regeneration**. Run Preview first. Apply is enabled only for a non-blocked preview. The panel exposes Added, Updated, Preserved, Merged, Deleted and Conflicted counts.

## Verification

```bash
npm run regeneration:check
npm run check
npm run build
npm run codegen:check
```

C1/C2 checks remain required; C3 is an additive safety layer rather than a replacement for deterministic generation.
