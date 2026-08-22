# Pear.no — Reusable Website Template Specification

> Source: https://pear.no/
> Analyzed: 2026-08-22
> Status: ready

---

## 0. Template Metadata

```yaml
template:
  source_name: "Pear"
  source_url: "https://pear.no/"
  analyzed_at: "2026-08-22"
  category: "B2B Services"
  subcategory: "Outcome-Based Growth Partnership / Custom Software + SEO"
  complexity: "medium"
  visual_style:
    - editorial
    - ultra-minimal
    - typographic
    - monochrome
    - high-contrast
    - manifesto-led
  suitable_for:
    - growth partner firms
    - SEO + software studios
    - productized consulting
    - revenue-share agencies
    - premium B2B partnerships
    - venture studios
    - specialist advisory firms
  status: "ready"
```

---

# 1. Reference Snapshot

## Observed

- Pear positions itself as a partner paid from growth rather than a conventional hourly/retainer agency.
- The site is effectively a long-form single-page experience.
- Primary message: build custom software, rank it in search, share in resulting revenue.
- Primary CTA language centers around requesting/applying for a partnership.
- Core chapter navigation is exposed as:
  - Ch. 1 — The Model
  - Ch. 2 — The Work
  - Ch. 3 — The Terms
  - Ch. 4 — Questions
  - Apply
- The page contains an application form with name and work-email fields.
- The business model section explicitly explains no upfront fees and an agreed share of newly created revenue.
- The qualification section explains who is a fit and who is not.
- Services visible in the page include custom software and search engine optimization.
- FAQ content carries a large part of pricing, attribution, timing, risk, and objection handling.
- Footer/company details are extremely restrained.

## Inferred

- The site intentionally avoids traditional agency proof mechanisms such as a giant service grid, multi-page portfolio, or heavy testimonial walls.
- The design uses confidence, scarcity, clarity, and a non-standard commercial model as the primary differentiation system.
- The site behaves more like a partnership thesis or investment memo than a traditional agency website.

## Recommended abstraction

Use Pear as a reusable template for firms where the commercial model itself is the main differentiator.

Do **not** reproduce Pear's claims, exact wording, company identity, revenue-share percentages, or visual assets. Preserve only the underlying information hierarchy, editorial rhythm, qualification logic, and conversion architecture.

---

# 2. Template Identity

```text
Template Type: Outcome-Based B2B Partnership Microsite
Design Direction: Editorial / Typographic / Minimal / Manifesto-led
Primary Goal: Qualify and convert a small number of high-value partnership applications
Secondary Goal: Explain an unconventional commercial model clearly enough to remove perceived risk
Content Density: Medium
Interaction Density: Low
Trust Density: High
Navigation Depth: Very Low
Sales Style: Selective / consultative / high-trust
```

### Best-fit industries

- performance partnerships
- growth consulting
- venture studios
- SEO + engineering firms
- specialist product studios
- revenue-share service businesses
- AI transformation partners
- operational consulting
- high-ticket strategy firms

---

# 3. Design DNA

## Overall personality

Pear's design language is deliberately restrained. The brand feels confident because it removes visual noise rather than adding polish through decoration.

### Core characteristics

- oversized editorial statements
- large whitespace zones
- sparse navigation
- almost no traditional card-heavy SaaS UI
- copy-led persuasion
- strong vertical rhythm
- manifesto-like section transitions
- minimal form UI
- very limited decorative imagery
- high contrast
- clear chapter system
- serious but provocative tone

### Visual hierarchy

The site relies on:

1. statement size
2. whitespace
3. chapter sequencing
4. repeated contrast between claim and disclosure
5. short declarative paragraphs
6. qualification language

### Card usage

Minimal. Most information should feel like editorial blocks rather than conventional boxed UI.

### Image-to-text ratio

Very low. Typography itself is the visual system.

### Perceived brand qualities

```text
Confident
Selective
Transparent
Contrarian
Outcome-driven
Editorial
Modern
Direct
Premium
```

---

# 4. Information Architecture

Reference architecture is effectively a single route:

```text
/
├── #model
├── #work
├── #terms
├── #questions
└── #apply
```

Reusable version:

```text
/
├── #hero
├── #model
├── #capabilities
├── #commercial-model
├── #fit
├── #faq
└── #application
```

| Route / Anchor | Purpose | Primary CTA | Content Type | Priority |
|---|---|---|---|---|
| `/` / `#hero` | Establish category-breaking positioning | Apply / Request partnership | Manifesto | P0 |
| `#model` | Explain collaboration model | Continue / Learn how it works | Business model | P0 |
| `#capabilities` | Explain what the partner actually does | Explore capabilities | Service narrative | P0 |
| `#commercial-model` | Explain pricing/risk alignment | Apply | Commercial terms | P0 |
| `#fit` | Qualify ideal/non-ideal customers | Apply if fit | Qualification | P0 |
| `#faq` | Resolve objections | Apply | FAQ | P0 |
| `#application` | Capture qualified lead | Submit application | Form | P0 |

---

# 5. Global Layout Architecture

```text
App Shell
├── Minimal Header
│   ├── Wordmark
│   ├── Chapter Navigation
│   └── Apply CTA
├── Main Editorial Flow
│   ├── Hero
│   ├── Model
│   ├── Work / Capabilities
│   ├── Terms
│   ├── Fit Filter
│   ├── FAQ
│   └── Application
└── Minimal Footer
```

## Layout rules

- Prefer a large editorial max width rather than narrow SaaS cards.
- Key statements may span 60–90% of viewport width.
- Body copy should remain constrained for readability.
- Full-width sections should feel continuous rather than boxed.
- Header may be sticky but visually low-emphasis.
- Apply CTA should remain visible or easy to reach throughout the experience.
- Footer should remain intentionally concise.

Recommended widths:

```text
Page max width: 1440–1600px
Editorial statement width: 1100–1400px
Body copy width: 640–760px
Form width: 520–680px
```

---

# 6. Page-by-Page Structure

## Homepage

```text
01 Minimal Header
02 Hero Manifesto
03 Core Operating Thesis
04 Model / Why This Is Different
05 Capability Narrative
06 Commercial Alignment
07 Qualification: Who This Is For
08 Qualification: Who This Is Not For
09 Full Disclosure / Risk Explanation
10 FAQ / Objection Handling
11 Partnership Application
12 Minimal Footer
```

### 01 Header

Objective: orient the visitor without interrupting the editorial feel.

Contents:

- wordmark
- chapter anchors
- apply CTA

Desktop:
- horizontal
- extremely clean
- no mega menu

Mobile:
- compact menu or horizontal anchor strategy
- apply CTA remains prominent

### 02 Hero Manifesto

Anatomy:

```text
Hero
├── Primary manifesto line
├── Secondary positioning line
├── Primary CTA
└── Optional micro-proof / commercial model hint
```

Objective: immediately reframe what the company is.

Rules:

- one dominant thought
- no generic “we help businesses grow” headline
- preferably 5–14 words
- secondary copy can explain the unusual model
- visual restraint is critical

### 03 Core Operating Thesis

Use repeated statement rhythm:

```text
We build it.
We grow it.
We share in the outcome.
```

For reuse, adapt to the actual operating system of the business.

### 04 The Model

Explain:

- traditional market problem
- what the business does differently
- why incentives are aligned
- why this model exists

### 05 Capability Narrative

Avoid generic icon-card grids as the default.

Use editorial capability blocks:

```text
Capability
├── label
├── strong statement
├── explanation
└── optional evidence / process detail
```

### 06 Commercial Alignment

Explain pricing logic clearly.

Possible reusable models:

- revenue share
- gain share
- fixed + upside
- equity + reduced fee
- milestone success fee
- subscription + performance component

Never fabricate terms.

### 07–08 Fit Qualification

Two sections:

```text
Good Fit
- established demand
- measurable outcomes
- suitable economics
- realistic time horizon

Poor Fit
- pre-revenue without validation
- emergency turnaround request
- pure staff augmentation
- unclear attribution
```

These fields must be fully editable.

### 09 Full Disclosure

An editorial trust mechanism that openly explains constraints.

Use cases:

- attribution rules
- limits
- exclusions
- time-to-value
- capacity limits
- ownership rights

### 10 FAQ

FAQ is a major sales surface, not support content.

Recommended themes:

- cost
- pricing mechanism
- attribution
- timeline
- ownership
- termination
- fit
- reporting
- measurement
- conflict of interest

### 11 Application

Short, selective, high-signal.

Minimum:

```text
Name
Work email
Company
What do you sell?
Where do you want to grow?
Current stage / revenue band (optional)
Submit
```

Do not ask for unnecessary information before the first conversation.

---

# 7. Section Anatomy

## Manifesto Section

```text
ManifestoSection
├── chapter label
├── large editorial statement
├── optional supporting paragraph
└── optional CTA
```

Recommended relationships:

- chapter label → 12–14px
- statement → 56–120px responsive
- body → 18–22px
- gap label-to-heading → 24–40px
- section vertical spacing → 120–220px desktop

## Disclosure Block

```text
DisclosureBlock
├── label: "Full disclosure" / customizable
├── explanatory text
└── optional evidence / link
```

Use low visual decoration; rely on tone and spacing.

## FAQ Item

```text
FAQItem
├── question
└── answer
```

May be accordion on mobile; expanded editorial list on desktop.

---

# 8. UX & Conversion Architecture

## Primary journey

```text
Pattern Interrupt
      ↓
Unusual Value Proposition
      ↓
Explain Incentive Alignment
      ↓
Explain Capabilities
      ↓
Explain Commercial Risk
      ↓
Self-Qualification
      ↓
Objection Handling
      ↓
Application
```

## Conversion principles

### 1. Category contrast

The hero should clearly say what the firm is **not**, then what it is.

### 2. Model before feature depth

Visitors need to understand the commercial model before detailed capabilities.

### 3. Radical clarity

If pricing cannot be a fixed public number, explain the pricing mechanism.

### 4. Qualification is part of conversion

Scarcity and fit criteria can increase trust when they are genuine.

### 5. FAQ closes the deal

FAQ should answer high-friction commercial questions before the application.

## UX risks in the reference pattern

- extremely stylized letter spacing can hurt readability
- a single-page architecture can become difficult to scan if sections are too long
- limited conventional proof may reduce trust for unfamiliar brands
- lack of case-study detail could be a weakness for some industries

## Recommended improvements

- maintain normal readable body tracking
- add optional proof module without turning site into logo-cloud overload
- add optional case-study outcome block
- add sticky chapter progress on desktop
- add simplified mobile navigation
- add application confirmation state

---

# 9. Navigation Architecture

## Desktop

```text
Header
├── Logo
├── Ch. 1 Model
├── Ch. 2 Work
├── Ch. 3 Terms
├── Ch. 4 Questions
└── Apply →
```

Reusable navigation should support editable chapter titles.

## Mobile

Recommended:

```text
Header
├── Logo
├── Apply
└── Menu
    ├── Model
    ├── Work
    ├── Terms
    └── Questions
```

Optional progress indicator:

```text
01 / 04
```

---

# 10. Design Tokens

Exact values should not be treated as source facts unless inspected from CSS. The following are reusable approximations.

```css
:root {
  --color-bg: #f5f5f0; /* approximate */
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-muted: #676767;
  --color-border: rgba(17, 17, 17, 0.16);
  --color-primary: #111111;
  --color-accent: #111111;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --space-10: 144px;
  --space-11: 192px;

  --radius-sm: 0px;
  --radius-md: 2px;
  --radius-lg: 4px;

  --shadow-sm: none;
  --shadow-md: none;
}
```

Core rule: avoid gratuitous radius and shadow. Editorial flatness is part of the design language.

---

# 11. Typography System

Recommended reusable scale:

| Token | Desktop | Mobile | Weight | Line Height | Usage |
|---|---:|---:|---:|---:|---|
| Display XL | 96–132px | 48–64px | 400–500 | 0.92–1.0 | Hero manifesto |
| Display | 72–96px | 40–52px | 400–500 | 0.95–1.05 | Major statements |
| H1 | 64–80px | 38–48px | 450–550 | 1.0 | Main page title |
| H2 | 44–64px | 32–40px | 450–550 | 1.05 | Section thesis |
| H3 | 28–36px | 24–30px | 500 | 1.1 | Capability headings |
| Body-lg | 20–24px | 18–21px | 400 | 1.45 | Lead paragraph |
| Body | 16–19px | 16–18px | 400 | 1.55 | Main copy |
| Small | 13–15px | 13–15px | 400 | 1.4 | Meta |
| Label | 11–13px | 11–13px | 500 | 1.2 | Chapters |

## Typeface mood

Use a neutral grotesk / modern sans-serif or restrained neo-grotesk.

Good reusable equivalents:

- Inter
- Geist
- Suisse-style alternatives
- Neue Montreal-like alternatives with proper licensing
- IBM Plex Sans for more technical adaptation

Do not copy a proprietary source font without license.

## Tracking

Large display text may use deliberate spacing, but body copy must remain readable.

For RTL adaptation:

- remove Latin-specific wide tracking
- use a Persian typeface with strong editorial proportions
- rely on scale and whitespace instead of artificial character spacing

---

# 12. Color System

The reusable template should remain primarily neutral.

```text
Neutral backgrounds: 80–90%
Text / dark contrast: 8–15%
Brand accent: 0–10%
Semantic colors: only where functional
```

Recommended variants:

### Original-inspired neutral
- warm off-white background
- near-black text
- minimal border

### Premium dark
- near-black background
- bone/cream text
- restrained accent

### Brand adaptation
Allow a single accent color for:

- CTA hover
- section progress
- selection states
- small metadata accents

Do not let accent color overpower the editorial system.

---

# 13. Grid & Spacing System

## Desktop

```text
Grid: 12 columns
Outer margin: 32–64px
Gutter: 20–32px
Section spacing: 140–220px
Content spacing: 32–64px
Body measure: 640–760px
```

## Tablet

```text
Grid: 8 columns
Outer margin: 28–40px
Section spacing: 96–144px
```

## Mobile

```text
Grid: 4 columns
Outer margin: 18–24px
Gutter: 12–16px
Section spacing: 72–112px
```

Whitespace is a primary design token and should not be compressed aggressively.

---

# 14. Radius, Border & Shadow

```text
Radius: square or nearly square
Borders: thin, neutral, functional
Shadows: generally none
Elevation: avoided
Focus ring: visible and accessible
```

Forms may use:

- underline-only inputs
- 1px border
- high-contrast focus state

---

# 15. Iconography

Minimal.

Prefer:

- text arrows (`→`)
- simple directional icons
- 1.5px outline icons if required
- no decorative icon containers unless adapted for another brand

Suggested libraries:

- Lucide
- Phosphor (regular weight)

---

# 16. Imagery Direction

Reference experience is typography-led.

For reuse, imagery is optional.

Allowed modes:

1. no imagery
2. one full-width proof image
3. product/system screenshot
4. editorial photo
5. data/results visualization

Avoid stock-photo filler.

Recommended aspect ratios:

- proof visual: 16:9 or 3:2
- portrait: 4:5
- full-bleed statement media: 16:9

---

# 17. Motion & Interaction

Motion should be subtle and secondary to reading.

Recommended:

```text
hover: 120–160ms
standard transition: 180–240ms
section reveal: 300–450ms
anchor scroll: smooth but cancelable
```

Useful interactions:

- chapter-active state
- scroll progress
- CTA arrow movement
- FAQ accordion
- application validation

Avoid:

- heavy parallax
- decorative WebGL
- slow page transitions
- scroll hijacking

Respect `prefers-reduced-motion`.

---

# 18. Component Inventory

## Layout

- AppShell
- EditorialContainer
- WideStatementContainer
- Section
- ChapterSection
- StickyHeader
- Footer

## Navigation

- ChapterNav
- MobileMenu
- ApplyLink
- ScrollProgress

## Marketing

- ManifestoHero
- StatementStack
- ModelSection
- CapabilityEditorialBlock
- CommercialModelSection
- FitFilter
- DisclosureBlock
- FAQSection
- ApplicationCTA

## Forms

- ApplicationForm
- TextInput
- EmailInput
- Textarea
- Select
- SubmitButton
- SuccessState
- ErrorSummary

## Proof extensions

- OutcomeMetric
- CaseStudySnippet
- ClientQuote
- AttributionDiagram
- ProcessTimeline

---

# 19. Component Anatomy

## ManifestoHero

```text
ManifestoHero
├── eyebrow?
├── title
├── positioning
└── CTA
```

```ts
interface ManifestoHeroProps {
  eyebrow?: string;
  title: string;
  positioning: string;
  cta: {
    label: string;
    href: string;
  };
}
```

## ChapterSection

```ts
interface ChapterSectionProps {
  chapterNumber?: string;
  label: string;
  title: string;
  body?: string;
  children?: React.ReactNode;
  id: string;
}
```

## FitFilter

```ts
interface FitFilterProps {
  title: string;
  intro?: string;
  fits: string[];
  doesNotFit: string[];
}
```

## FAQItem

```ts
interface FAQItem {
  question: string;
  answer: string;
}
```

## ApplicationForm

```ts
interface PartnershipApplication {
  name: string;
  workEmail: string;
  company?: string;
  offering?: string;
  growthGoal?: string;
  website?: string;
  consent: boolean;
}
```

---

# 20. Variants & States

## CTA

- default
- hover
- focus-visible
- active
- disabled
- loading

## Form fields

- empty
- focused
- valid
- invalid
- disabled
- autofilled

## FAQ

- collapsed
- expanded
- focus-visible

## Chapter nav

- default
- active/current chapter
- hover
- focus-visible

---

# 21. Responsive Architecture

## Mobile 320–479

- display typography reduced aggressively enough to avoid awkward 1–2 character lines
- no wide artificial character spacing
- single-column content
- FAQ as accordion
- Apply CTA prominent
- chapter menu collapsed
- minimum touch target: 44px
- body margin: ~20px

## Large Mobile 480–767

- same editorial sequence
- slightly larger display type
- optional two-column fit criteria only if readable

## Tablet 768–1023

- 8-column grid
- chapter nav may remain compact
- commercial disclosures can use asymmetrical columns

## Desktop 1024–1439

- full chapter navigation
- large manifesto typography
- selective asymmetric layouts
- optional sticky progress marker

## Large Desktop 1440+

- avoid uncontrolled line lengths
- maintain max widths even with large viewport
- allow oversized statements but preserve reading rhythm

---

# 22. Accessibility

Target WCAG 2.2 AA.

Requirements:

- semantic `header`, `main`, `section`, `footer`
- one clear H1
- sequential heading hierarchy
- chapter anchors with meaningful labels
- visible keyboard focus
- skip-to-content link
- normal body letter spacing
- adequate line-height
- no essential information conveyed only by animation
- form inputs have visible labels
- validation errors associated with fields
- error summary for failed submission
- respect reduced motion
- sufficient contrast
- minimum 44×44 touch targets for interactive elements

---

# 23. Content Architecture

```text
SiteSettings
Chapter
Capability
CommercialModel
FitCriteria
Disclosure
FAQ
ApplicationFormConfig
CaseStudy (optional)
Metric (optional)
```

## Example content models

```ts
interface Capability {
  id: string;
  label: string;
  title: string;
  description: string;
  evidence?: string;
}

interface CommercialModel {
  title: string;
  summary: string;
  mechanism: string;
  measurement?: string;
  exclusions?: string[];
}

interface FitCriteria {
  positive: string[];
  negative: string[];
}
```

---

# 24. SEO / GEO Structure

Even a one-page site should expose strong semantic entities.

## Recommended structure

- strong descriptive title
- one H1 with company category + differentiator
- anchored section IDs
- FAQ content server-rendered
- FAQ schema only where valid and appropriate
- Organization schema with real data only
- Service schema when applicable
- canonical URL
- OpenGraph metadata
- sitemap
- robots.txt

## GEO / AI discovery

Include concise answer-first sections explaining:

- what the business does
- who it serves
- how commercial terms work
- what outcomes are measured
- who is not a fit

Use factual, attributable statements. Never generate invented growth statistics or client claims.

---

# 25. Technical Frontend Architecture

Recommended:

```text
Next.js
TypeScript
Tailwind CSS
Server Components where appropriate
CMS or structured local content
Server-side form submission
Analytics events
CRM integration
```

Suggested project structure:

```text
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── api/
│   │   └── application/
│   └── thank-you/
├── components/
│   ├── layout/
│   ├── sections/
│   ├── forms/
│   └── ui/
├── content/
│   ├── chapters.ts
│   ├── faq.ts
│   └── capabilities.ts
├── lib/
│   ├── analytics.ts
│   ├── validation.ts
│   └── crm.ts
├── types/
└── styles/
```

## Form security

- server-side validation
- honeypot
- rate limiting
- CSRF-aware architecture where relevant
- email normalization
- spam protection
- no sensitive secrets in frontend bundle

---

# 26. Reusability Rules

## Keep stable

- long-form chapter flow
- editorial hierarchy
- high whitespace
- commercial-model-first storytelling
- qualification before application
- FAQ as objection handling
- sparse visual language

## Customize

- brand
- tagline
- partnership model
- services
- audience
- fit criteria
- disclosures
- application questions
- accent color
- typography
- proof modules

## Never hardcode

- revenue-share percentage
- company registration number
- address
- phone
- email
- partner claims
- baseline formulas
- customer names
- growth claims
- response-time promises

---

# 27. Customization Variables

```yaml
brand:
  name: ""
  wordmark: ""
  tagline: ""
  tone: "confident-editorial"
  primary_color: ""
  background_color: ""
  font_heading: ""
  font_body: ""

business:
  category: ""
  description: ""
  target_customers: []
  operating_model: ""

navigation:
  chapters: []
  show_sticky_apply: true

hero:
  title: ""
  positioning: ""
  cta_label: "Request partnership"

model:
  title: ""
  problem: ""
  alternative: ""
  incentive_alignment: ""

capabilities:
  items: []

commercial_model:
  type: ""
  summary: ""
  measurement: ""
  exclusions: []
  disclosure: ""

fit:
  positive: []
  negative: []

proof:
  enabled: false
  case_studies: []
  metrics: []
  testimonials: []

faq:
  items: []

application:
  intro: ""
  fields: []
  success_message: ""
  crm_destination: ""

seo:
  title: ""
  description: ""
  canonical: ""
  organization_name: ""

locale:
  language: "en"
  direction: "ltr"

feature_flags:
  chapter_progress: true
  sticky_apply: true
  case_studies: false
  metrics: false
  newsletter: false
```

---

# 28. What Must NOT Be Copied

Do not copy:

- Pear name or identity
- exact slogan or manifesto copy
- specific business claims
- exact FAQ answers
- exact commercial terms
- revenue-share details
- organization number
- email address
- company address
- proprietary typography
- proprietary code
- branding assets

Abstract only:

- editorial chapter flow
- sparse design system
- qualification-first conversion architecture
- transparent pricing-mechanism explanation
- manifesto + disclosure pattern
- FAQ-led objection handling

---

# 29. Improvement Layer

Recommended enhancements for a production reusable version:

### 1. Optional proof layer

```text
One strong outcome
→ short client context
→ measurable result
→ methodology link
```

Do not add fake metrics.

### 2. Better application qualification

Allow configurable fields for:

- company website
- business model
- current stage
- priority market
- growth target

### 3. Analytics

Events:

```text
chapter_view
apply_cta_click
faq_open
application_start
application_submit
application_error
```

### 4. CRM integration

Support HubSpot, Pipedrive, Salesforce, custom API, or webhook.

### 5. Attribution explainer

For outcome-based businesses, optionally include a simple diagram:

```text
Existing baseline
      +
Incremental measured outcome
      ↓
Agreed attribution method
      ↓
Partner share
```

### 6. Content governance

All commercial claims must be editable and reviewed by business/legal owners.

---

# 30. Quality Gates

## Product

- [ ] Value proposition understood within first viewport
- [ ] Commercial model can be explained in one paragraph
- [ ] Good-fit customer is explicit
- [ ] Bad-fit customer is explicit
- [ ] Application is intentionally short

## UX

- [ ] Chapter nav works
- [ ] Anchor links preserve context
- [ ] Mobile reading is comfortable
- [ ] CTA remains easy to reach
- [ ] FAQ is scannable

## UI

- [ ] No unnecessary cards
- [ ] No gratuitous shadows
- [ ] Display typography wraps intentionally
- [ ] Body copy has readable tracking
- [ ] Whitespace remains generous

## Accessibility

- [ ] Keyboard navigation
- [ ] Visible focus states
- [ ] Proper headings
- [ ] Form labels and validation
- [ ] Reduced-motion support
- [ ] WCAG AA contrast

## Engineering

- [ ] Lighthouse performance target 90+
- [ ] SSR/SSG for primary content
- [ ] No blocking third-party scripts
- [ ] Secure form endpoint
- [ ] Analytics privacy review
- [ ] No secrets client-side

## Content

- [ ] No fake testimonials
- [ ] No invented growth statistics
- [ ] No unsupported guarantees
- [ ] Pricing mechanism is accurate
- [ ] Fit criteria match real operations

---

# 31. Master Build Prompt

```text
You are a senior product designer, UX architect, conversion strategist, and frontend engineer.

Build a production-ready B2B partnership website inspired by the structural and UX principles of an ultra-minimal editorial partnership site, but DO NOT clone any existing brand, copy, imagery, proprietary typography, company information, or code.

OBJECTIVE
Create a premium long-form website for a business whose commercial model is itself a major differentiator. The site should feel confident, transparent, selective, editorial, and outcome-focused.

CORE EXPERIENCE
The website should behave like a structured partnership thesis rather than a conventional agency brochure.

Use this narrative flow:

1. Pattern-breaking manifesto hero
2. Explain the operating model
3. Explain capabilities
4. Explain the commercial model
5. Explain incentive alignment and measurement
6. Clearly state who is a fit
7. Clearly state who is not a fit
8. Provide transparent disclosures
9. Handle objections with a substantial FAQ
10. End with a short partnership application

INFORMATION ARCHITECTURE
Prefer a single long-form page with anchor navigation:

- Model
- Work / Capabilities
- Terms / Commercial Model
- Questions
- Apply

A separate thank-you route is allowed.

DESIGN DIRECTION
- editorial
- minimal
- high contrast
- primarily monochrome
- typography-led
- generous whitespace
- very few cards
- nearly no decorative shadows
- restrained border use
- no generic SaaS bento-grid aesthetic unless specifically requested

TYPOGRAPHY
Use oversized display typography for manifesto statements and a clean modern sans-serif for body copy.

Do not use excessive letter spacing in body content.

Create a responsive type scale with fluid clamp() values.

LAYOUT
- max page width roughly 1440–1600px
- wide statement blocks
- body copy constrained to roughly 640–760px
- 12-column desktop grid
- 8-column tablet grid
- 4-column mobile grid
- generous section spacing

NAVIGATION
Desktop header:
- brand
- chapter links
- primary Apply CTA

Mobile:
- brand
- Apply CTA
- compact menu

Optionally show active chapter/progress.

HERO
The hero must communicate:
- what the business refuses to be
- what it is instead
- why the commercial relationship is different
- a single primary CTA

Do not write generic agency copy.

COMMERCIAL MODEL SECTION
Create editable structured content for:
- pricing model
- attribution model
- risk allocation
- ownership
- timeline
- exclusions

Do not invent values.

QUALIFICATION
Create explicit Good Fit and Poor Fit sections.

The template must allow the business owner to define these criteria from content/config rather than hardcoding them.

FAQ
FAQ should function as the primary objection-handling layer.

Support questions around:
- cost
- pricing mechanism
- measurement
- attribution
- timeline
- ownership
- termination
- expected customer profile

APPLICATION
Build a short application form with configurable fields.

Recommended defaults:
- name
- work email
- company
- what do you sell?
- where do you want to grow?

Requirements:
- accessible labels
- client and server validation
- loading state
- error state
- success state
- spam protection
- rate limiting
- optional CRM/webhook integration

TECH STACK
Preferred:
- Next.js
- TypeScript
- Tailwind CSS
- React Server Components where appropriate
- structured content separated from components

ARCHITECTURE
Use:

src/
  app/
  components/
    layout/
    sections/
    forms/
    ui/
  content/
  lib/
  types/

COMPONENTS
Implement reusable components including:
- StickyHeader
- ChapterNav
- ManifestoHero
- ChapterSection
- StatementStack
- CapabilityEditorialBlock
- CommercialModelSection
- FitFilter
- DisclosureBlock
- FAQItem
- ApplicationForm
- MinimalFooter

MOTION
Keep motion subtle:
- fast hover responses
- light section reveals
- smooth anchor navigation
- optional chapter progress

No scroll hijacking.
Respect prefers-reduced-motion.

ACCESSIBILITY
Target WCAG 2.2 AA.
Include:
- semantic landmarks
- proper heading hierarchy
- visible focus states
- keyboard navigation
- accessible form errors
- adequate contrast
- 44px minimum touch targets
- skip navigation

SEO / GEO
Implement:
- metadata
- canonical
- OpenGraph
- sitemap
- robots
- Organization schema using real supplied data only
- server-rendered FAQ content
- answer-first explanatory content for AI search systems

PERFORMANCE
Target Lighthouse 90+ where realistic.
Avoid heavy animation libraries unless needed.
Avoid unnecessary third-party scripts.

REUSABILITY
All of the following must come from config/content:
- company name
- brand colors
- typography
- manifesto copy
- chapter names
- services/capabilities
- commercial model
- fit criteria
- disclosures
- FAQ
- application fields
- SEO metadata

Do not hardcode:
- testimonials
- pricing
- revenue percentages
- customer logos
- phone numbers
- emails
- addresses
- legal claims
- performance claims

FINAL RESULT
The result should feel like a premium, opinionated, high-trust partnership website where every section reduces uncertainty and moves the right prospect toward an application, while allowing the wrong prospect to self-select out.
```

---

## Final abstraction

Pear's most reusable lesson is not its specific revenue-share offer. It is the discipline of building an entire sales experience around one clear operating thesis:

```text
Different Model
      ↓
Explain Why
      ↓
Show What You Do
      ↓
Explain Risk + Terms
      ↓
Qualify the Buyer
      ↓
Answer Objections
      ↓
Application
```

That architecture should remain intact even when the brand, industry, pricing model, typography, services, and content are completely replaced.
