# PX PUSH — Reusable Website Template Specification

## 0. Template Metadata

```yaml
template:
  source_name: "PX PUSH"
  source_url: "https://pxpush.com/"
  analyzed_at: "2026-08-22"
  category: "Productized Creative Service"
  subcategory: "Subscription Design Department / Retained Creative Team"
  complexity: "high"
  visual_style:
    - editorial
    - brutalist-inspired
    - monochrome
    - systems-driven
    - typography-led
    - industrial-office
  suitable_for:
    - design subscription businesses
    - creative departments-as-a-service
    - branding studios
    - web design studios
    - productized agencies
    - async service businesses
    - marketing production teams
    - content design retainers
  status: "ready"
```

---

# 1. Reference Snapshot

**Observed**

- Brand: PX PUSH.
- Domain: pxpush.com.
- Business model: retained creative department / design subscription.
- Core promise: senior creative support without hiring overhead or traditional agency friction.
- Primary audience: startups, established companies, marketing teams, agencies at capacity, founders, creative leads.
- Main commercial model: monthly subscription plus a separate brand sprint offer.
- Core service categories visible in copy: brand, product/web/interface design, content/marketing creative, motion, strategy, copywriting.
- Primary CTA: `Get Started`.
- Secondary CTA: `View Pricing`.
- Typical delivery model: asynchronous, shared workspace, queued requests, written approvals.
- Pricing visibly supports at least Standard and Pro subscription tiers, plus a separate Brand Sprint.
- About page also contains team leadership, operating philosophy, FAQ and service-scope explanations.
- Industry landing pages can use strong narrative storytelling rather than generic sector descriptions.
- Home page is effectively a long-form sales page rather than a simple portfolio landing page.

**Inferred**

- The site positions process design itself as part of the product.
- The brand voice intentionally mimics an institutional department/office operating manual, turning operational discipline into a visual and verbal differentiator.
- Conversion depends more on clarity, predictability and operational confidence than on luxury-style aspiration.

**Recommended for reusable template**

- Keep the productized-service logic, but make the visual language configurable.
- Preserve the strong service-model clarity while avoiding literal copying of PX PUSH terminology, exact pricing, team identities or legal data.
- Expose operating-model variables so the template can work for subscription, retainer or fractional-team businesses.

---

# 2. Template Identity

```text
Template Type: Productized Service + Subscription Creative Department
Design Direction: Editorial / Systematic / Brutalist-inspired / Typographic
Primary Goal: Convert visitors into subscription customers
Secondary Goal: Explain operating model and remove objections
Content Density: Medium-High
Interaction Density: Medium
Trust Density: High
Commercial Clarity: Very High
```

Best suited to businesses whose biggest sales objection is not “can they design?” but rather:

- Will they be reliable?
- Will they integrate with our team?
- Will delivery be predictable?
- Is the pricing understandable?
- Will we avoid agency overhead?

Reusable industries:

- design subscription
- fractional design team
- content studio subscription
- growth design retainers
- marketing production subscription
- no-code/web design retainer
- UX/UI retainers
- AI creative production team
- remote operations-as-a-service

---

# 3. Design DNA

## Overall visual personality

- bureaucratic but playful
- precise
- editorial
- operational
- high-contrast
- typography-forward
- anti-corporate-agency while still professional
- deliberately structured

## Visual Keywords

```text
Systematic, editorial, institutional, direct, witty, monochrome,
industrial, disciplined, asynchronous, modern, opinionated
```

## Density

Medium to high. The layout can sustain large blocks of explanatory copy because the visual system gives every section a document-like hierarchy.

## Contrast

Strong contrast between background and typography. The template should support a near-monochrome palette with a configurable accent.

## White-space strategy

Large macro spacing between major numbered sections, but relatively dense internal spacing inside process, benefits, FAQ and pricing modules.

## Content rhythm

```text
Statement
↓
Explanation
↓
Proof / visual
↓
Operational detail
↓
Commercial action
```

## Border usage

Borders can act as structural dividers rather than decoration. Use thin rules for tables, pricing cards, FAQ rows and numbered sections.

## Card usage

Cards should be sparse. Prefer sectional layouts, tables and flat panels over generic rounded SaaS cards.

## Motion character

Motion should feel controlled, quick and mechanical rather than elastic or cinematic.

---

# 4. Information Architecture

Observed/reconstructed architecture:

```text
/
├── /about
├── /industries
│   └── /freedom-tech
├── /terms
└── external conversion destinations / purchase links
```

The commercial content architecture is broader than route count. Much of the conversion system lives directly on the homepage.

## Logical IA for reusable template

```text
/
├── /work
├── /about
├── /pricing
├── /services
├── /process
├── /industries
│   └── /[industry]
├── /faq
├── /contact
├── /terms
└── /privacy
```

| Route | Purpose | Primary CTA | Content Type | Priority |
|---|---|---|---|---|
| `/` | Full sales narrative | Start subscription | Marketing | P0 |
| `/work` | Demonstrate output quality | Start / inquire | Portfolio | P1 |
| `/pricing` | Explain commercial model | Choose plan | Commercial | P0 |
| `/about` | Build trust and explain team model | Get started | Company + FAQ | P1 |
| `/services` | Define scope | Choose plan | Service taxonomy | P1 |
| `/process` | Explain workflow | Start | Operational | P1 |
| `/industries/[slug]` | Sector-specific narrative | Start / talk | Vertical landing | P2 |
| `/faq` | Objection handling | Start | Structured content | P2 |
| `/contact` | Direct inquiry | Submit | Lead capture | P1 |

---

# 5. Global Layout Architecture

```text
App Shell
├── Optional Announcement / Status Bar
├── Header
│   ├── Wordmark
│   ├── Primary Nav
│   ├── Pricing / About / Work
│   └── Primary CTA
├── Main
│   ├── Numbered Content Sections
│   └── Full-width / contained alternating modules
└── Footer
    ├── Company information
    ├── Navigation
    ├── Legal
    └── CTA / operating location
```

## Positioning

- Header: sticky recommended for reusable version.
- Main container: editorial width with occasional full-bleed work imagery.
- Pricing: contained but visually prominent.
- FAQ: full-width rows or contained data-table style.
- Footer: dense informational block, not oversized decorative footer.

## Recommended widths

```text
--page-max: 1440px
--content-max: 1240px
--text-max: 760px
--narrow-copy: 640px
```

---

# 6. Page-by-Page Structure

## Homepage

```text
01 Header
02 Intro / Problem Statement
03 Core Promise
04 Primary + Secondary CTA
05 Capability / Work Preview
06 Works Gallery
07 Benefits
08 Operating Model / Workspace
09 Membership / Pricing
10 Plan Comparison
11 Brand Sprint / One-off Offer
12 About / Trust Link
13 Final CTA
14 Footer
```

### Hero objective

Make the visitor immediately understand the replacement category:

```text
Traditional hiring / freelancers / agencies
               ↓
Retained creative department
```

### Works objective

Prove range without requiring heavy case-study reading.

### Benefits objective

Translate the subscription model into operational advantages such as:

- async collaboration
- flat monthly cost
- fast delivery
- visible workspace / queue

### Pricing objective

Make pricing feel like a product configuration, not an opaque agency quote.

---

## About

```text
01 Page Title / Department framing
02 Company operating philosophy
03 Leadership / Department Heads
04 Founder profiles
05 General FAQ
06 Delivery / Scope FAQ
07 Service boundaries
08 Final CTA
09 Footer
```

The About page should answer two categories simultaneously:

```text
Who are you?
How does this actually work?
```

---

## Industry Landing

```text
01 Strong repeated/kinetic industry title
02 Cultural or historical narrative
03 The “enemy” / problem framing
04 Why the category struggles
05 Positioning statement
06 Relevant capabilities
07 Work examples
08 CTA
```

This is not a generic SEO industry page. It should feel like a manifesto tailored to the sector.

---

## Pricing

Recommended reusable structure:

```text
01 Pricing Hero
02 Monthly Plans
03 Plan Comparison Table
04 Included Work Types
05 Delivery SLA
06 Add-ons / Sprint Offer
07 FAQ
08 Final CTA
```

---

## Work

Recommended reusable structure:

```text
01 Work Index Header
02 Filter / Category
03 Dense visual gallery
04 Optional project metadata
05 Case Study links
06 CTA
```

---

# 7. Section Anatomy

## Intro / Hero

```text
Intro
├── Section ID / Nº001
├── Eyebrow
├── Problem statement
├── Long-form supporting copy
├── Category-replacement statement
├── Commercial anchor
│   └── Starting price or plan framing
└── CTA Group
    ├── Get Started
    └── View Pricing
```

### Priority

1. Category clarity
2. Problem relevance
3. Solution model
4. Commercial transparency
5. CTA

---

## Benefits Section

```text
Benefits
├── Section ID
├── Section Heading
└── Benefit Rows / Cards
    ├── Benefit Number
    ├── Title
    ├── Description
    └── Illustration / System Graphic
```

Recommended reusable benefits:

- async
- predictable price
- fast delivery
- transparent queue
- senior-level direction
- flexible capacity

---

## Pricing Card

```text
PlanCard
├── Plan Code / Name
├── Badge (optional)
├── Previous Price (optional)
├── Current Price
├── Billing Unit
├── Positioning sentence
├── Feature list
├── CTA
└── Optional explanation
```

Avoid generic startup pricing aesthetics. The component should resemble a product specification sheet.

---

## FAQ Row

```text
FAQRow
├── Group Index
├── Question Number
├── Question
├── Expand Trigger
└── Answer
```

---

# 8. UX & Conversion Architecture

## Primary journey

```text
Visitor recognizes agency/freelancer pain
        ↓
Understands retained-team model
        ↓
Sees visual output quality
        ↓
Understands operational benefits
        ↓
Sees transparent price
        ↓
Resolves scope/process objections
        ↓
Starts subscription / inquiry
```

## Conversion Map

```text
Pain
↓
Alternative Category
↓
Creative Proof
↓
Operational Proof
↓
Pricing
↓
Objection Handling
↓
Action
```

## Objection handling themes

- “Will I have meetings all day?” → async process.
- “Will costs creep?” → fixed pricing.
- “Will delivery be slow?” → SLA / average turnaround.
- “Can I track progress?” → shared workspace.
- “What is included?” → scope FAQ.
- “Can they work within our existing brand?” → explicit yes/no scope.
- “Can they develop too?” → plan-dependent or scoped implementation.

## Recommended improvements

1. Add a visible process diagram near benefits.
2. Add anonymized or real case studies with outcomes where available.
3. Add interactive plan recommendation based on team velocity.
4. Separate recurring subscription from one-off sprint offers more clearly.
5. Add lead-capture path for visitors not ready to purchase immediately.
6. Provide accessibility-safe alternatives to any motion-heavy repeated text.

---

# 9. Navigation Architecture

## Desktop

Recommended:

```text
Logo
Work
Services
Pricing
About
Industries
Get Started ↗
```

## Mobile

Full-screen menu with large text rows and persistent primary CTA.

## Footer groups

```text
Company
Services
Industries
Legal
Social
Location / Timezone
```

## Breadcrumbs

Use on industry, legal and long-form content pages. Not necessary on homepage or short About pages.

---

# 10. Design Tokens

Approximate reusable system inspired by observed visual language, not copied values.

```css
:root {
  --color-bg: #f3f1e9; /* approximate */
  --color-surface: #ebe8df; /* approximate */
  --color-text: #111111;
  --color-muted: #676767;
  --color-border: rgba(17, 17, 17, 0.22);
  --color-primary: #111111;
  --color-accent: #d9ff45; /* customizable, not source-exact */

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

  --radius-sm: 0px;
  --radius-md: 2px;
  --radius-lg: 4px;

  --shadow-sm: none;
  --shadow-md: none;
}
```

The reusable version should allow radius to be increased when adapting to a softer brand, but the default should remain sharp.

---

# 11. Typography System

A strong grotesk/sans system is recommended.

| Token | Desktop | Mobile | Weight | Line Height | Usage |
|---|---:|---:|---:|---:|---|
| Display | 72–112px | 44–64px | 500–700 | 0.9–1.0 | Manifesto/hero |
| H1 | 64–88px | 40–54px | 500–700 | 0.95–1.05 | Page title |
| H2 | 40–56px | 30–40px | 500–650 | 1.0–1.1 | Major section |
| H3 | 28–36px | 24–30px | 500–650 | 1.1 | Cards / pricing |
| Body-lg | 20–26px | 18–22px | 400 | 1.4 | Intro copy |
| Body | 16–18px | 16–17px | 400 | 1.5 | Main copy |
| Small | 13–14px | 13px | 400–500 | 1.4 | Metadata |
| Label | 11–13px | 11–12px | 500–600 | 1.2 | Nº labels / status |

## Mood

Neutral grotesk, slightly technical, editorial rather than friendly-rounded.

## Heading behavior

Large headings may intentionally wrap into 2–4 lines. Keep line length tight and avoid centered SaaS hero copy.

## RTL adaptation

For Persian reuse:

- use Pelak or another modern grotesk Persian font;
- preserve numbered/section-label rhythm;
- reverse directional arrows appropriately;
- avoid letter-spacing assumptions that do not apply to Persian script.

---

# 12. Color System

Recommended ratio:

```text
Neutral / Paper: 75%
Text / Black: 20%
Accent: 5%
```

Accent should be used sparingly for status, CTA emphasis or system annotations.

Semantic colors should remain separate from brand accent.

---

# 13. Grid & Spacing System

## Desktop

```text
12-column grid
Max width: 1240–1440px
Gutter: 24–32px
Outer margin: 32–64px
Section spacing: 96–160px
```

## Tablet

```text
8-column grid
Gutter: 20–24px
Outer margin: 24–32px
Section spacing: 72–112px
```

## Mobile

```text
4-column grid
Gutter: 16px
Outer margin: 16–20px
Section spacing: 56–80px
```

Long-form body copy max width: 700–780px.

---

# 14. Radius, Border & Shadow

- Radius: near-zero by default.
- Border: 1px structural rules.
- Shadows: generally absent.
- Floating elements: use contrast or border rather than shadow.
- Focus ring: 2px visible outline with high contrast.

---

# 15. Iconography

Use simple line icons or Unicode-like directional glyphs.

Recommended library equivalents:

- Lucide
- Phosphor
- custom arrow glyphs

Icons should support the typography rather than dominate the layout.

---

# 16. Imagery Direction

## Work imagery

- strong crop
- edge-to-edge or large rectangular panels
- minimal chrome
- no fake laptop/device frames unless relevant
- mixture of identity, web, campaign and interface outputs

## Illustrations

Systematic diagrams, operating-workspace illustrations and intentionally simple editorial graphics work well.

## Ratios

```text
Portfolio landscape: 4:3 or 16:10
Editorial image: 3:2
Square system tile: 1:1
```

## Mobile

Preserve subject-first crops and avoid extreme parallax.

---

# 17. Motion & Interaction

Recommended motion profile:

```text
Fast hover: 120–160ms
Standard transition: 180–240ms
Accordion: 220–320ms
Section reveal: 300–450ms
```

Use:

- small underline or arrow translation on links
- fast accordion expansion
- subtle gallery reveals
- menu transitions
- optional repeated-title marquee on vertical pages

Avoid:

- oversized spring motion
- gratuitous parallax
- autoplay motion that interferes with reading

Respect `prefers-reduced-motion`.

---

# 18. Component Inventory

## Layout

- `SiteHeader`
- `SiteFooter`
- `Container`
- `Section`
- `NumberedSection`
- `SplitLayout`
- `EditorialGrid`

## UI

- `Button`
- `TextLink`
- `Badge`
- `Accordion`
- `Table`
- `Divider`
- `Tabs`

## Marketing

- `ProblemHero`
- `WorkGallery`
- `BenefitList`
- `OperatingModel`
- `WorkspacePreview`
- `PricingPlan`
- `PricingComparison`
- `SprintOffer`
- `TeamProfile`
- `IndustryManifesto`
- `FAQGroup`
- `FinalCTA`

## Content

- `ProjectPreview`
- `ServiceCapability`
- `ScopeList`
- `FAQItem`
- `LeaderProfile`

---

# 19. Component Anatomy

## NumberedSection

```text
NumberedSection
├── sectionCode
├── eyebrow
├── heading
├── description
└── children
```

```ts
interface NumberedSectionProps {
  sectionCode: string;
  eyebrow?: string;
  heading: string;
  description?: string;
  children: React.ReactNode;
  variant?: 'default' | 'dark' | 'accent';
}
```

## PricingPlan

```ts
interface PricingPlanProps {
  code?: string;
  name: string;
  price: string;
  oldPrice?: string;
  billingLabel?: string;
  description: string;
  features: string[];
  featured?: boolean;
  ctaLabel: string;
  ctaHref: string;
}
```

## FAQItem

```ts
interface FAQItem {
  id: string;
  question: string;
  answer: string;
  group?: string;
}
```

## BenefitItem

```ts
interface BenefitItemProps {
  index: string;
  title: string;
  description: string;
  visual?: React.ReactNode;
}
```

---

# 20. Variants & States

All interactive elements must include:

- default
- hover
- focus-visible
- active
- disabled
- loading where relevant
- expanded/collapsed for accordion
- featured/default for pricing

CTA arrows may shift 2–4px on hover but must not alter layout width.

---

# 21. Responsive Architecture

## Mobile 320–479

- single-column structure
- section numbers remain visible
- pricing cards stack
- FAQ full-width rows
- work gallery single-column or horizontal snap
- 44px minimum touch target
- hero copy should not exceed 5–7 short lines

## Large Mobile 480–767

- selective two-column content where practical
- pricing still stacked
- team profiles may use media/text split if space allows

## Tablet 768–1023

- benefits can become 2-column
- pricing plans 2-column
- header may switch to compact desktop nav or mobile overlay depending on density

## Desktop 1024–1439

- full editorial split layouts
- pricing columns side-by-side
- imagery can span 6–8 columns

## Large Desktop 1440+

- do not endlessly widen text
- preserve editorial max-width
- allow gallery/media to breathe rather than enlarging type excessively

---

# 22. Accessibility

Target WCAG 2.2 AA.

Required:

- semantic heading hierarchy
- `<nav>`, `<main>`, `<footer>` landmarks
- skip navigation
- keyboard-operable accordions
- visible focus ring
- no important information only encoded by section numbering
- 4.5:1 text contrast where required
- alt text for meaningful portfolio work
- decorative system illustrations use empty alt
- reduced-motion mode
- CTA labels remain meaningful without arrows/icons

---

# 23. Content Architecture

```ts
interface ServicePlan {
  id: string;
  name: string;
  monthlyPrice?: number;
  currency?: string;
  activeRequests: number;
  turnaroundText: string;
  features: string[];
  featured?: boolean;
}

interface Benefit {
  id: string;
  title: string;
  description: string;
  visualType?: 'image' | 'diagram' | 'ui';
}

interface Project {
  slug: string;
  title: string;
  client?: string;
  categories: string[];
  cover: string;
  summary?: string;
  year?: number;
}

interface IndustryPage {
  slug: string;
  title: string;
  narrative: string;
  problem: string;
  position: string;
  capabilities: string[];
  relatedProjects?: string[];
}

interface FAQItem {
  id: string;
  group: string;
  question: string;
  answer: string;
}
```

CMS recommended for reusable version:

- Sanity
- Contentful
- Strapi
- Payload
- Notion-to-CMS bridge for smaller teams

---

# 24. SEO / GEO Structure

## URLs

Keep short semantic routes:

```text
/services
/pricing
/work
/about
/industries/[slug]
```

## Structured data opportunities

- Organization
- Service
- FAQPage
- BreadcrumbList
- CreativeWork for case studies where suitable

## GEO / AI Search

Each service/process section should begin with concise factual answers such as:

- What is the service?
- Who is it for?
- How does it work?
- What is included?
- Typical delivery time?
- Pricing model?

Do not fabricate client names, turnaround statistics, awards or pricing.

---

# 25. Technical Frontend Architecture

Recommended stack:

```text
Next.js 15+
TypeScript
Tailwind CSS
React Server Components where appropriate
Framer Motion only for local interaction
CMS-driven content
Zod for content validation
```

Suggested structure:

```text
src/
├── app/
│   ├── page.tsx
│   ├── about/
│   ├── work/
│   ├── pricing/
│   ├── services/
│   └── industries/[slug]/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── sections/
│   └── marketing/
├── content/
├── config/
├── lib/
├── styles/
└── types/
```

## Performance

- static/server-render marketing pages
- responsive images
- lazy-load galleries
- avoid oversized client-side animation bundles
- CLS < 0.1 target
- LCP < 2.5s target on representative mobile conditions

---

# 26. Reusability Rules

## Keep fixed

- numbered editorial section logic
- problem → alternative → proof → pricing → FAQ conversion flow
- transparent operating model
- structured pricing system
- process-first service explanation
- sharp typographic hierarchy

## Customize

- visual accent
- typography
- brand voice
- service scope
- plan names
- pricing
- turnaround
- industry narratives
- team profiles
- portfolio imagery

## Never hardcode

- exact PX PUSH prices
- founders
- company address
- tax/legal identifiers
- performance promises
- exact turnaround claims
- stock-license claims
- client logos
- proprietary workspace screenshots

---

# 27. Customization Variables

```yaml
brand:
  name: ""
  logo: ""
  tone: "direct"
  accent_color: ""
  font_heading: ""
  font_body: ""

business:
  category: "subscription creative service"
  primary_audience: []
  positioning_statement: ""
  operating_model: "async"

navigation:
  items: []
  primary_cta: ""

hero:
  section_code: "Nº001"
  problem_statement: ""
  solution_statement: ""
  supporting_copy: ""
  primary_cta: ""
  secondary_cta: ""

plans:
  currency: ""
  items: []

benefits:
  items: []

process:
  workspace_name: ""
  steps: []
  delivery_sla: ""

services:
  included: []
  excluded: []

portfolio:
  projects: []

team:
  leaders: []

industries:
  items: []

faq:
  groups: []

contact:
  mode: "checkout|form|calendar"
  email: ""

seo:
  title_template: ""
  description: ""
  organization_schema: {}

locale:
  default: "en"
  rtl: false

feature_flags:
  show_work: true
  show_pricing: true
  show_brand_sprint: true
  show_industries: true
  show_team: true
```

---

# 28. What Must NOT Be Copied

Do not reproduce:

- PX PUSH name, logo or wordmark
- exact marketing copy
- exact pricing
- founder biographies
- legal text
- address or registration details
- proprietary project imagery
- exact FAQ answers
- distinctive branded illustrations
- customer/client materials

The reusable template should preserve the **system logic**, not the identity.

---

# 29. Improvement Layer

Recommended upgrades for a production-ready derivative:

1. **Plan recommender** based on number of parallel requests and desired velocity.
2. **Interactive workflow demo** showing queue → active → review → complete.
3. **ROI calculator** comparing in-house, freelancer, agency and subscription cost structures.
4. **Case studies with outcomes** when verifiable data exists.
5. **Lead capture** for visitors not ready to start immediately.
6. **CMS-backed FAQ** with filter/search.
7. **Industry template system** for scalable vertical pages.
8. **Account/client portal teaser** if the service uses a shared workspace.
9. **Localization support** for global agencies.
10. **Consent-based analytics** with events for plan clicks, FAQ opens, CTA conversion and pricing interactions.

---

# 30. Quality Gates

A derivative implementation is not ready unless:

- [ ] Visitor understands the business model in the first viewport.
- [ ] Primary CTA appears above the fold.
- [ ] Pricing or pricing logic is easy to find.
- [ ] Service scope is explicit.
- [ ] Operating process is explained visually or textually.
- [ ] No fabricated client claims exist.
- [ ] No hardcoded source-brand data remains.
- [ ] Mobile navigation is fully usable.
- [ ] All accordions are keyboard accessible.
- [ ] Focus states are visible.
- [ ] `prefers-reduced-motion` is supported.
- [ ] LCP and CLS budgets are met.
- [ ] Pricing and FAQ content can be changed without editing components.
- [ ] Analytics events are defined for commercial CTAs.
- [ ] Legal pages use the derivative business's actual data.

---

# 31. Master Build Prompt

## Production Prompt

```text
Build a production-ready website inspired by the STRUCTURAL and UX logic of a modern productized creative-service company, but do not copy any protected brand identity, wording, imagery, pricing, legal content, founder information or proprietary assets from the reference.

GOAL
Create a high-conversion website for a retained creative department / design subscription / productized service business. The website must make a complex service feel as clear and purchasable as a software product.

CORE EXPERIENCE
The visitor should move through this logic:

Pain with freelancers / hiring / traditional agencies
→ understand the retained-team alternative
→ see creative proof
→ understand operational benefits
→ understand workflow
→ compare transparent plans
→ resolve scope objections
→ start or inquire.

VISUAL DIRECTION
Use an editorial, systematic, typography-led visual system.
Default visual personality:
- monochrome or near-monochrome
- sharp structural borders
- little or no shadow
- minimal radius
- numbered sections
- technical/institutional labels
- high-contrast grotesk typography
- disciplined spacing
- subtle, mechanical interaction motion

Do NOT recreate the source brand's exact graphics or copy.

REQUIRED ROUTES
/
/work
/services
/pricing
/process
/about
/industries/[slug]
/faq
/contact
/terms
/privacy

HOMEPAGE STRUCTURE
01 Header
02 Problem-led Hero
03 Category Replacement Statement
04 Primary + Secondary CTA
05 Work / Capability Preview
06 Work Gallery
07 Benefits
08 Operating Model
09 Shared Workspace / Request Queue Explanation
10 Pricing Plans
11 Plan Comparison
12 Optional Sprint / One-off Offer
13 FAQ Preview
14 Final CTA
15 Footer

HERO
The hero must explain in the first viewport:
- what the service is
- who it is for
- what operational problem it replaces
- how the commercial model works at a high level
- one primary CTA
- one secondary CTA

Do not use vague agency copy such as “We craft meaningful experiences.”
Use concrete positioning.

NUMBERED SECTION SYSTEM
Create a reusable NumberedSection component with:
- sectionCode
- eyebrow
- heading
- description
- children
- visual variant

Example labels:
Nº001 / Intro
Nº002 / Work
Nº003 / Benefits
Nº004 / Membership

PRICING
Create CMS/data-driven pricing cards.
Each plan should support:
- plan code
- name
- price
- billing unit
- active parallel requests
- turnaround label
- feature list
- featured state
- CTA

Never hardcode pricing into components.

BENEFITS
Default supported benefit categories:
- async collaboration
- predictable pricing
- fast delivery
- transparent workspace
- senior direction
- flexible capacity

Allow the business to replace these.

PROCESS
Explain a reusable workflow:
Onboard
→ Submit request
→ Prioritize
→ Active production
→ Review
→ Revision
→ Complete
→ Next queued request

Use a visual status/queue component.

WORK
Implement a dense, media-first portfolio grid.
Support:
- title
- client
- categories
- year
- cover
- optional project page

Do not rely on fake client names.

ABOUT
Combine:
- operating philosophy
- leadership/team profiles
- working principles
- FAQ
- scope boundaries

INDUSTRY PAGES
Industry landing pages should not be generic SEO filler.
Each page should contain:
- a strong sector-specific thesis
- the industry's communication/design problem
- why conventional approaches fail
- the service's position
- relevant capabilities
- related work
- CTA

FAQ
Support grouped FAQ categories:
- general
- process
- scope
- pricing
- development
- legal/commercial

DESIGN TOKENS
Implement configurable CSS variables for:
- background
- surface
- text
- muted text
- border
- primary
- accent
- spacing
- radius

Default radius should be near-zero.

TYPOGRAPHY
Use a modern grotesk/sans family.
Large headings should be editorial and allowed to wrap naturally.
Keep body copy readable and constrain line length.
For Persian/RTL deployments, preserve the structure but use a compatible Persian grotesk font and reverse directional affordances.

RESPONSIVE
Mobile must be designed intentionally.
Do not simply shrink desktop.
Requirements:
- stacked pricing
- one-column editorial layouts
- accessible full-screen mobile navigation
- readable section labels
- 44px minimum touch targets
- portfolio optimized for touch

ACCESSIBILITY
Target WCAG 2.2 AA.
Include:
- skip navigation
- landmarks
- keyboard navigation
- focus-visible states
- accessible accordion semantics
- proper heading order
- reduced-motion mode
- alt text strategy

TECH STACK
Use:
- Next.js
- TypeScript
- Tailwind CSS
- React Server Components where suitable
- CMS/data separated from presentation
- Zod validation for structured content

Avoid adding unnecessary dependencies.

ARCHITECTURE
src/
├── app/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── sections/
│   └── marketing/
├── content/
├── config/
├── lib/
├── styles/
└── types/

CONTENT MODELS
At minimum implement:
- ServicePlan
- Benefit
- Project
- IndustryPage
- FAQItem
- TeamMember

PERFORMANCE
Target:
- LCP < 2.5s on representative mobile conditions
- CLS < 0.1
- responsive images
- lazy-loaded portfolio media
- minimal animation JavaScript

SEO / GEO
Implement:
- semantic URLs
- Organization schema
- Service schema where appropriate
- FAQ structured data only when visible content qualifies
- BreadcrumbList
- clear factual service summaries
- internal linking between service, industry and work pages

COMMERCIAL FEATURES
Add configurable analytics events for:
- hero CTA
- pricing CTA
- plan selection
- FAQ opens
- industry CTA
- contact submit

OPTIONAL IMPROVEMENTS
Support optional modules for:
- ROI calculator
- plan recommender
- interactive request queue demo
- case studies
- localization
- client portal teaser

ANTI-COPY RULE
Do not reproduce the original source's exact:
- brand name
- wordmark
- copy
- pricing
- founder profiles
- legal information
- imagery
- illustrations
- company address

The goal is to reproduce the reusable DESIGN LOGIC and CONVERSION ARCHITECTURE, not the original brand.

FINAL ACCEPTANCE
The finished site must feel like a polished commercial product rather than a generic creative-agency template. It should communicate structure, speed, reliability and senior creative quality before decorative flourish.
```
