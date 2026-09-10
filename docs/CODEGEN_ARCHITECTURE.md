# C2 Code Generation Architecture

C2 consumes the existing `risheh.build-spec.v1`; it does not introduce a replacement public contract.

## Pipeline

```text
Build Spec
→ AJV validation
→ Factory catalog resolution
→ GenerationModel
→ Component graph
→ deterministic FilePlan
→ Next.js emitters
→ static quality gates
→ filesystem artifact
→ npm install / lint / next build
→ provenance quality update
→ optional policy-bounded agent refinement
```

## Source-of-truth boundaries

- `schemas/build-spec.schema.json` owns public input validity.
- `industries/catalog.yaml`, `design-dna/catalog.yaml`, and `patterns/catalog.yaml` own Factory references.
- `src/features/codegen/` owns internal resolution and emission.
- `.generated/` is disposable runtime output and is never source data.

## Determinism

A Build Spec, Factory version, and generator version produce the same generated file content and hashes. Runtime build diagnostics and final quality status are written to `risheh-generation.json` after generation and are not inputs to subsequent generation.

## Generated baseline

Generated projects use Next.js 16.3.x App Router, React 19.3.x, TypeScript strict mode, Tailwind CSS 4.x, semantic HTML, explicit `dir`, reduced-motion handling, reusable pattern components, route-level files, and non-fabricated content.

## Failure model

C2 fails closed for invalid Build Specs, unknown DNA/pattern IDs, unsafe paths, duplicate generated paths, failed content-integrity scans, missing declared routes, failed lint, or failed production build.

## C1 integration

C1 remains the editor/composer. C2 reads the versioned persisted draft through C1 composition logic, validates the resulting Build Spec, then calls `/api/generate`. C2 never edits the draft or Factory catalogs.
