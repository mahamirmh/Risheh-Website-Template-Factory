# Phase C1 — Visual Generator

Phase C1 adds a browser-based composition tool on top of the Phase B Factory contracts.

## What it does

The generator guides a user through:

1. business setup;
2. industry selection;
3. archetype selection;
4. Design DNA composition;
5. pages and reusable patterns;
6. brand and content inputs;
7. accessibility, responsive, SEO and motion preferences;
8. review, validation, export and agent handoff.

It consumes `industries/catalog.yaml`, `design-dna/catalog.yaml` and `patterns/catalog.yaml` directly. It does not maintain duplicate industry/template lists.

## Output

Every export is composed as `risheh.build-spec.v1`, then submitted to the server validation endpoint which validates the document against `schemas/build-spec.schema.json`.

Supported outputs:

- validated JSON Build Spec;
- validated YAML Build Spec;
- Codex handoff prompt;
- Claude Code handoff prompt;
- provider-neutral coding-agent handoff prompt.

## Draft persistence

The current draft is stored only in the browser under the versioned key:

`risheh.website-factory.c1.draft.v1`

No database, account or cloud persistence is required in C1.

## Import

A previous JSON/YAML Build Spec can be imported. The file is schema-validated before it is allowed into the composer.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000/generator`.

## Quality commands

```bash
npm run check
npm run catalog
npm run build
```

CI runs all three before the C1 branch can be considered release-ready.

## C1 boundary

C1 does not generate a Next.js codebase, deploy a site, call an AI API, provision a CMS, store customer data or manage billing. Those responsibilities stay outside this product boundary. Phase C2 may consume the validated Build Spec for code generation without changing the C1 contract.
