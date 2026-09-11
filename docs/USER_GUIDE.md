# 🌿 Risheh Website Template Factory — Complete User Guide

> **From “I need a website” to a generated project you can safely evolve.**

This guide is the practical operating manual for the Factory. It explains what each phase does, what you should decide, what the generated files mean, how to work on them after generation, and how to use C3 regeneration without losing legitimate manual changes.

---

## 1. Mental model first

The Factory has three production phases:

```text
C1 · COMPOSE
You describe the business and website intent.
        ↓
risheh.build-spec.v1
        ↓
C2 · BUILD
The Factory deterministically generates a Next.js project.
        ↓
Human development / content work
        ↓
C3 · EVOLVE
A changed Build Spec is safely reconciled with the edited project.
```

The important contract is `risheh.build-spec.v1`. C1 creates it. C2 consumes it. C3 consumes the same contract again when the project needs to evolve.

### What the Factory is good at

Use it when you want a website whose structure and visual system are driven by business type, conversion logic, reusable design intelligence and explicit quality constraints rather than a generic theme.

### What it is not

It is not a website scraper, clone engine, CMS, deployment platform or magic source of missing business facts. It should not invent proof, credentials, addresses, pricing, testimonials or case-study results.

---

# Part I — Setup

## 2. Requirements

You need:

- Node.js **20 or newer**;
- npm;
- a local clone of the repository;
- a modern browser.

The Factory application currently uses Next.js 16.3, React 19.3 and TypeScript.

## 3. Install and run

```bash
git clone https://github.com/mahamirmh/Risheh-Website-Template-Factory.git
cd Risheh-Website-Template-Factory
npm install
npm run dev
```

Open:

```text
http://localhost:3000/generator
```

If the application does not start, check Node first:

```bash
node --version
npm --version
```

Then reinstall dependencies if necessary:

```bash
rm -rf node_modules
npm install
npm run dev
```

---

# Part II — C1: Compose the website

## 4. The eight-step generator

C1 is a composition workflow, not merely a style picker.

```text
Business
  ↓
Industry
  ↓
Archetype
  ↓
Design DNA
  ↓
Pages & Patterns
  ↓
Brand & Content
  ↓
Quality
  ↓
Review
```

The browser draft is persisted under the versioned local-storage key:

```text
risheh.website-factory.c1.draft.v1
```

That means C1 draft persistence is local to the browser. It is not a cloud account or database.

---

## 5. Step 1 — Business

Start with the business itself, not visual decoration.

Typical inputs include:

- project/business name;
- positioning;
- primary goal.

### Good primary goals

```text
Book a consultation
Request a project brief
Reserve a table
Explore selected projects
Start a product trial
Contact the clinic
Browse products
```

### Weak primary goals

```text
Make it beautiful
Make it modern
Look like Apple
Have animations
```

Those may influence design, but they do not explain what the website is supposed to accomplish.

**Rule:** if you cannot explain the website's primary outcome in one sentence, fix that before choosing an archetype.

---

## 6. Step 2 — Industry

Choose the business family that best describes the visitor psychology and conversion model.

The Factory currently models 16 families:

1. Cafe & Restaurant
2. Architecture
3. Construction
4. Legal
5. Professional Services
6. Corporate
7. Healthcare & Clinic
8. Beauty Salon
9. Real Estate
10. Education
11. E-commerce
12. Hospitality & Hotel
13. Gym & Fitness
14. Technology & SaaS
15. Agency & Creative
16. Personal Brand

### Why industry matters

A visitor choosing a lawyer looks for authority, expertise, evidence and a low-friction consultation path. A visitor choosing a boutique hotel responds more strongly to atmosphere, rooms, place, experience and direct booking.

The Factory encodes those differences before styling begins.

---

## 7. Step 3 — Archetype

Each industry contains three archetypes. An archetype is a strategic website direction — a combination of business goal, proof model, conversion model, motion/content density, pages and compatible patterns.

Example: architecture can choose between directions such as a calm editorial studio, immersive spatial portfolio or more brutalist architecture office.

### How to choose

Ask three questions:

1. **What should visitors feel first?** Trust, desire, clarity, authority, curiosity?
2. **What is the strongest proof?** Portfolio, credentials, product, outcomes, place, process?
3. **What is the desired action?** Enquiry, booking, purchase, consultation, exploration?

Do not select an archetype only because its name sounds fashionable.

---

## 8. Step 4 — Design DNA

Design DNA describes reusable visual behavior:

- personality;
- typography direction;
- spacing rhythm;
- layout behavior;
- geometry;
- imagery;
- motion;
- interaction density;
- content density;
- accessibility constraints;
- prohibited patterns.

The current DNA library includes:

```text
Apple Minimal
Editorial Luxury
Immersive 3D
Cinematic
Brutalist Premium
Swiss Grid
Calm Luxury
Bento Modern
Magazine Editorial
Conversion First
Gallery First
Storytelling Scroll
```

### Primary vs secondary DNA

Treat the primary DNA as the dominant visual grammar. Secondary DNA should add controlled traits rather than fight the primary system.

A useful mental model:

```text
Primary DNA   = the accent you speak with
Secondary DNA = a few borrowed expressions
```

If every DNA is selected, there is no DNA.

---

## 9. Step 5 — Pages & Patterns

Pages define the route structure. Patterns define reusable UX sections.

Pattern families include:

- Hero
- Navigation
- Portfolio / Services / Menu / Proof
- Lead / CTA
- Footer

Examples:

```text
hero-authority
hero-gallery
hero-product
nav-editorial
nav-local-service
portfolio-gallery
service-authority-grid
menu-signature
testimonial-editorial
lead-consultation
lead-reservation
footer-corporate
```

### Page rule

A page should exist because it has a job. Avoid creating routes merely because “websites usually have them.”

### Pattern rule

Choose patterns that support the archetype and funnel. The Factory validates catalog references and fails closed on unsupported patterns instead of silently generating a meaningless fallback.

---

## 10. Step 6 — Brand & Content

Configure the available brand and content inputs, including items such as:

- primary/secondary colors;
- font family;
- hero title;
- hero subtitle;
- primary CTA;
- locale/language;
- direction;
- country/local target where relevant.

### Factual content policy

Never ask the Factory to invent:

- testimonials;
- ratings;
- awards;
- client logos;
- revenue numbers;
- physical addresses;
- team identities;
- medical/legal credentials;
- prices;
- stock;
- case outcomes.

If a factual field is unknown, keep it unknown until real information exists.

---

## 11. Persian / RTL configuration

For Persian websites, use RTL direction intentionally. Direction is carried through the Build Spec and generated project.

C2 should then produce direction-aware structure such as the root document direction and logical CSS behavior.

### Mixed Persian + English

Technical/product names often remain English inside Persian content. That is normal. Do not “solve” mixed-direction content by hard-mirroring everything.

### Media

Images and photographs are not automatically mirrorable. A photograph containing a physical direction, product orientation or recognizable composition should remain visually truthful unless there is a specific reason to transform it.

---

## 12. Step 7 — Quality

Quality preferences include accessibility, responsive behavior, SEO and motion.

Current draft concepts include:

- accessibility target (`AA` / `AAA`);
- reduced-motion preference;
- mobile-first responsive behavior;
- SEO/local target and indexability;
- motion intensity.

### Recommended default

For most commercial websites:

```text
Accessibility: AA
Reduced motion: respected
Responsive: mobile-first
Motion: low or medium unless the archetype truly depends on immersion
```

High motion should be a design decision, not a reflex.

---

## 13. Step 8 — Review

Review the website as a system before generating code.

Check:

- correct business goal;
- correct industry;
- archetype makes strategic sense;
- DNA is coherent;
- all routes are intentional;
- patterns support the funnel;
- direction/language are correct;
- content is factual;
- accessibility and motion are appropriate.

C1 can export validated Build Specs in JSON/YAML and produce coding-agent handoff prompts. Imported Build Specs are schema-validated before entering the composer.

---

# Part III — Understanding the Build Spec

## 14. What `risheh.build-spec.v1` represents

Think of the Build Spec as a signed architectural brief between composition and implementation.

Conceptually it carries:

```text
project
brand
industry + archetype
design DNA + tokens
pages
sections / patterns
content
SEO
accessibility
responsive behavior
motion
implementation
provenance
```

C2 is not supposed to reinterpret this into a completely different product. It resolves it.

### Contract rule

Do not create an alternative private “better Build Spec” inside C2 or C3. If the public contract truly needs to evolve, that is a versioned architectural change.

---

# Part IV — C2: Generate production code

## 15. What C2 does

C2 takes a validated Build Spec and follows a deterministic pipeline:

```text
Validate
  ↓
Resolve catalog references
  ↓
Resolve routes + Design DNA + patterns
  ↓
Create file plan
  ↓
Emit project/config/layout/components/styles/content
  ↓
Write provenance
  ↓
Run quality gates
```

The output is placed under:

```text
.generated/<project-id>/
```

### Deterministic means

The same relevant Factory state + same Build Spec should not randomly become a different architecture because an AI model “felt creative.”

That predictability is important for testing and regeneration.

---

## 16. Generated project anatomy

A generated project typically contains a structure equivalent to:

```text
app/
  layout.tsx
  globals.css
  ...declared routes
components/
  layout/
  sections/
  ui/
content/
  site.ts
lib/
  config.ts
  seo.ts
public/
package.json
tsconfig.json
next.config.*
postcss.config.*
README.md
risheh-generation.json
.risheh/
  state.json
  baselines/
```

The exact emitted files are controlled by the deterministic file plan.

---

## 17. `risheh-generation.json`

This file is provenance. It exists to make generation inspectable.

It can record information such as:

- generator/factory version;
- Build Spec schema/version/project identity;
- industry/archetype;
- selected DNA;
- selected patterns;
- generation mode;
- generated file hashes;
- quality results.

Do not manually falsify provenance to make a failed project appear valid.

---

## 18. `.risheh/` runtime metadata

Fresh C2 generation initializes C3 state similar to:

```text
.risheh/
  state.json
  baselines/
    <generation-id>/
      manifest.json
      files/...
  reports/
```

This directory belongs to the regeneration runtime.

It is **not** the website's public content model and **not** a replacement for `risheh.build-spec.v1`.

### Baseline meaning

The baseline is the exact Factory-owned output from the last successful generation. C3 needs it later to distinguish a human edit from a new Factory edit.

---

# Part V — Working on a generated project

## 19. Can I manually edit generated code?

Yes. That is one of the reasons C3 exists.

But use sensible ownership boundaries:

- edit content intentionally;
- build project-specific functionality normally;
- do not delete `.risheh/` if you want safe regeneration later;
- do not manually falsify generation manifests;
- keep secrets in `.env*`, not in generated source files.

`.env*` is intentionally not treated as Factory baseline content.

---

## 20. What kinds of edits are easiest to regenerate safely?

C3 v1 is deliberately conservative. Separate line-level edits in text files are easier to merge safely than two parties rewriting the exact same lines.

For example:

```text
Base
line 1
line 2
line 3

Human changes line 1
Factory changes line 3
→ conservative auto-merge can succeed
```

But:

```text
Human changes line 2
Factory changes line 2
→ conflict
```

C3 does not pretend it understands semantic intent when it does not.

---

# Part VI — C3: Safe Regeneration

## 21. Why regeneration needs three versions

A destructive generator sees only:

```text
Old project → New project
```

C3 sees:

```text
Base     = what the Factory last generated
Current  = what exists now after human work
Next     = what the Factory wants to generate now
```

That third point — Base — makes ownership decisions possible.

---

## 22. Always Preview first

In the generator, find:

**C3 · Safe Regeneration**

Choose:

**Preview changes**

Preview calculates the change plan. It does not intentionally mutate the active project.

You will see counts for:

```text
Added
Updated
Preserved
Merged
Deleted
Conflicted
```

Do not treat the count summary as decoration. It is the release decision surface.

---

## 23. Meaning of each regeneration status

### `Added`

A path is new in the next Factory output and does not collide with a user-owned path.

**Expected action:** add it.

### `Updated`

The file is Factory-owned, the human copy still matches Base, and Next changed.

```text
Current = Base
Next ≠ Base
```

**Expected action:** Factory update is safe.

### `Preserved`

The human changed the file but the Factory did not.

```text
Current ≠ Base
Next = Base
```

**Expected action:** keep the human edit.

### `Merged`

Human and Factory both changed the file, but the conservative text merge found non-overlapping line changes.

**Expected action:** use merged result, then quality-check it.

### `Deleted`

A Factory-owned file is obsolete in Next and the current copy was never manually changed.

**Expected action:** safe removal.

### `Conflicted`

C3 cannot prove an automatic action is safe.

Common reasons:

- human and Factory edited the same lines;
- Factory wants to remove a manually edited obsolete file;
- Factory wants to recreate a Factory file the human intentionally deleted;
- new Factory output collides with a user-owned path.

**Expected action:** stop automatic apply and resolve intentionally.

---

## 24. Conflict examples

### Example A — overlapping edit

```text
Base:     CTA = "Book a consultation"
Current:  CTA = "Talk to our team"
Next:     CTA = "Schedule consultation"
```

Both human and Factory changed the same logical line. C3 should not guess which intent wins.

### Example B — manually edited obsolete file

```text
Base:     about-section.tsx exists
Current:  about-section.tsx exists + human customization
Next:     file no longer generated
```

Deleting it automatically would destroy human work. Conflict.

### Example C — user-owned collision

```text
Base:     no custom/report.tsx
Current:  custom/report.tsx created by developer
Next:     Factory now wants custom/report.tsx
```

The Factory does not own that current path. Conflict.

---

## 25. Apply safe update

Apply should only become appropriate after a non-blocked preview.

The runtime then follows a safety sequence:

```text
Re-read active project
      ↓
Recompute plan
      ↓
Block if conflicts exist
      ↓
Create sibling staging workspace
      ↓
Apply safe operations to staging
      ↓
Run generated-project quality
      ↓
Advance baseline/state
      ↓
Atomic sibling directory swap
      ↓
Active project becomes new validated project
```

The active project is not supposed to be incrementally half-rewritten during this process.

---

## 26. Staging and rollback behavior

C3 creates a sibling staging directory rather than validating by mutating the live generated project.

Transient directories such as dependency/build caches are excluded from the staging copy where appropriate.

For final apply, the active project and staging project must be siblings on the same filesystem so directory rename can provide the atomic replacement model.

The old active directory is temporarily moved to a rollback sibling. If the final staging rename fails, the runtime restores the old active directory.

### Important distinction

This is **filesystem rollback protection for the apply operation**, not a full product-version history system or Git replacement.

Use Git for normal source-control history as well.

---

# Part VII — Quality

## 27. Factory-level checks

Run:

```bash
npm run check
```

This combines Factory validation, quality rules and tests.

Separately useful:

```bash
npm run validate
npm run quality
npm test
```

---

## 28. Catalog generation

```bash
npm run catalog
```

This rebuilds the deterministic generator-ready catalog at:

```text
generated/catalog.json
```

Catalog YAML sources remain the knowledge source of truth; generated output should not become an independent hand-maintained catalog.

---

## 29. Factory production build

```bash
npm run build
```

This verifies the Factory Next.js application can production-build.

A passing Factory build does **not** by itself prove generated C2 projects are healthy.

---

## 30. C2 compatibility and generated-project verification

```bash
npm run codegen:check
```

This runs compatibility and representative generation/quality checks, including the Factory's archetype/DNA/pattern generation expectations.

Useful subcommands include:

```bash
npm run codegen:compat
npm run codegen:fixtures
npm run codegen:fixtures:quality
npm run codegen:forbidden
```

---

## 31. C3 regeneration verification

```bash
npm run regeneration:check
```

This runs the C3 contract tests for safe regeneration behavior.

When changing regeneration internals, do not accept “the Factory builds” as sufficient evidence. Run the C3 checks too.

---

# Part VIII — Troubleshooting

## 32. Generator says the Build Spec is invalid

Check the review errors rather than bypassing validation.

Common causes:

- required business/project information missing;
- invalid catalog reference;
- unsupported pattern;
- malformed route;
- missing locale/direction required by generation;
- imported document does not match `risheh.build-spec.v1`.

**Do not solve schema errors by deleting validation.** Fix the input or explicitly evolve the contract.

---

## 33. C2 refuses an unknown pattern

That is intentional.

C2 does not use a generic “close enough” component for an unsupported pattern because that would make the Build Spec lie about what was generated.

Check:

```text
patterns/catalog.yaml
```

and the C2 pattern/component mapping.

---

## 34. Regeneration is blocked by conflicts

Good. A conflict means C3 found a case where automatic action is not proven safe.

Recommended process:

1. inspect the conflicted path;
2. compare Base, Current and desired Next intent;
3. decide which human/business behavior should survive;
4. edit the active project or Build Spec deliberately;
5. run Preview again;
6. apply only when the plan is non-blocked.

Do not “fix” C3 by changing every conflict into overwrite.

---

## 35. I deleted `.risheh/`

You removed the baseline/state C3 uses to understand previous Factory ownership.

Do not reconstruct it by guessing hashes or copying unrelated state. Restore it from source control/backup if available, or treat the project as needing an explicit re-baselining workflow rather than pretending safe regeneration history still exists.

---

## 36. I changed `.env` — will C3 overwrite it?

`.env*` is excluded from Factory baseline ownership in the C3 initialization logic. Secrets belong outside generated baseline content.

Still, keep environment files protected with normal source-control/security practices.

---

## 37. A user-owned file has the same path as new Factory output

C3 should block the collision.

Resolve intentionally by changing the Factory output path, moving/renaming the user-owned implementation, or redesigning the ownership boundary. Do not let Factory output silently win merely because it was generated later.

---

## 38. Persian layout looks wrong

Check in this order:

1. Build Spec locale language;
2. Build Spec direction is `rtl`;
3. generated root document has the correct `dir`;
4. layout CSS uses logical behavior rather than hardcoded left/right assumptions;
5. icons that imply direction are handled intentionally;
6. media has not been blindly mirrored;
7. mixed English/Persian content is tested on mobile as well as desktop.

---

# Part IX — Recommended team workflow

## 39. For a new customer/project

```text
01 Gather real business information
02 Define primary conversion goal
03 Select industry
04 Compare the three archetypes
05 Choose coherent Design DNA
06 Confirm routes and patterns
07 Add real brand/content inputs
08 Configure RTL/LTR + quality
09 Review Build Spec
10 Generate with C2
11 Run quality
12 Commit generated baseline/project
13 Continue normal development
```

---

## 40. For a later redesign/change request

```text
01 Do not wipe the generated project
02 Update the Build Spec in C1
03 Review strategic changes
04 C3 → Preview changes
05 Inspect conflict/preservation counts
06 Resolve every blocking conflict deliberately
07 Preview again
08 Apply safe update
09 Run project QA
10 Commit the regenerated project + state/report
```

---

## 41. For Factory contributors

When changing the Factory itself:

```text
Knowledge change?
→ edit catalog/schema source of truth

Generation change?
→ update C2 implementation + compatibility tests

Regeneration change?
→ update C3 behavior + regeneration tests

Contract change?
→ treat as architecture/versioning work, not a convenient patch
```

Before considering a production change ready:

```bash
npm install
npm run check
npm run catalog
npm run build
npm run codegen:check
npm run regeneration:check
```

---

# Part X — Files worth knowing

## 42. Knowledge sources

```text
industries/catalog.yaml
```
Industry psychology and 48 business archetypes.

```text
design-dna/catalog.yaml
```
12 reusable visual-language profiles.

```text
patterns/catalog.yaml
```
27 reusable UX patterns.

```text
schemas/
```
Machine-readable Factory contracts.

```text
templates/
```
Reference-site design-intelligence documents. These are research inputs, not cloning instructions.

---

## 43. C1 files

```text
app/generator/
src/components/generator/
src/features/generator/
```

These own visual composition, draft handling and Build Spec creation/import/export behavior.

---

## 44. C2 files

```text
src/features/codegen/
app/api/generate/
```

These own deterministic resolution, file planning, emitters, generated-project provenance and quality behavior.

Read also:

- `docs/CODEGEN_ARCHITECTURE.md`
- `docs/CODEGEN_QUALITY_GATES.md`
- `docs/CODEGEN_AGENT_POLICY.md`

---

## 45. C3 files

```text
src/features/regeneration/
app/api/regenerate/
src/components/regeneration/
```

These own baseline state, hashing, project inspection, change classification, conservative merge, staging, atomic apply and regeneration reporting.

Read also:

- `docs/PHASE_C3_REGENERATION.md`

---

# Part XI — Decision rules worth remembering

## 46. Ten rules of the Factory

1. **Business intent before decoration.**
2. **Template is not clone.**
3. **The Build Spec is the C1 → C2 → C3 contract.**
4. **Do not fabricate business facts.**
5. **Unknown patterns fail closed.**
6. **RTL is a product behavior, not a last-minute transform.**
7. **Human edits are real work and deserve ownership protection.**
8. **Conflict is safer than silent destruction.**
9. **Quality gates are independent evidence.**
10. **Regeneration is evolution, not overwrite.**

---

# Part XII — Quick reference card

## Start Factory

```bash
npm install
npm run dev
# open http://localhost:3000/generator
```

## Full Factory verification

```bash
npm run check
npm run catalog
npm run build
npm run codegen:check
npm run regeneration:check
```

## New website

```text
C1 Compose → Review Build Spec → C2 Generate → QA → Human development
```

## Existing generated website

```text
Update Build Spec → C3 Preview → Resolve conflicts → Preview again → Apply → QA
```

## Never do this

```text
❌ fabricate testimonials or credentials
❌ treat a reference site as cloning permission
❌ overwrite user-owned path collisions
❌ delete manually edited obsolete files silently
❌ apply while C3 reports blocking conflicts
❌ weaken validation just to get a green build
❌ delete .risheh/ and pretend regeneration history still exists
```

---

<div align="center">

## 🌱 The short version

**C1 decides. C2 builds. C3 protects the next change.**

The Factory is useful when design intelligence, business intent and engineering discipline need to survive more than one generation cycle.

</div>
