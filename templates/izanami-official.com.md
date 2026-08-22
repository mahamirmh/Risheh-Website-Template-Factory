# IZANAMI — Website Template Specification

> Reference: https://izanami-official.com/
> Template family: Philosophy-Led Lifestyle / Cultural Brand / Multi-Venture Platform
> Status: ready
> Analysis date: 2026-08-22

---

## 0. Template Metadata

```yaml
template:
  source_name: "IZANAMI"
  source_url: "https://izanami-official.com/"
  analyzed_at: "2026-08-22"
  category: "Lifestyle / Cultural Brand"
  subcategory: "Philosophy-led multi-venture brand"
  complexity: "high"
  visual_style:
    - Japanese minimalism
    - editorial
    - quiet luxury
    - nature-led
    - cinematic
    - spiritual
    - premium
  suitable_for:
    - cultural brands
    - wellness brands
    - education brands
    - retreat brands
    - craft / artisan brands
    - premium lifestyle groups
    - hospitality brands
    - multi-venture founder-led companies
  status: "ready"
```

---

# 1. Reference Snapshot

## Observed

- IZANAMI presents itself as a philosophy-led brand centered on the Japanese concept of harmony / `和`.
- The homepage begins with a manifesto-like hero: **Remember who you are**.
- The main brand narrative is organized around three business practices: **School**, **Craft**, and **Retreat**.
- The homepage sequence is primarily: Hero → Philosophy → Projects → Project previews → Company → Contact/location footer.
- The English and Japanese versions share the same conceptual architecture.
- Company information spans Dubai and Tokyo.
- The Projects page deepens the three business areas rather than behaving like a conventional portfolio.
- The School project page mixes philosophy, editorial storytelling, program structure, expert supervision, trust signals, and a soft conversion path.
- The Retreat page uses long-form storytelling, a multi-step journey, testimonials, founder positioning, and private-contact conversion.

## Inferred

- The website is designed to make a diverse portfolio of businesses feel like one coherent worldview.
- Brand belief is intentionally established before products or services.
- Emotional resonance is prioritized over aggressive conversion.
- The site relies on editorial sequencing and image-led pacing more than utility-heavy UI patterns.

## Recommended abstraction

Treat this pattern as a **Worldview-First Brand Platform**:

```text
Worldview
   ↓
Brand Philosophy
   ↓
Practices / Business Verticals
   ↓
Deep Editorial Pages
   ↓
Founder / Company Credibility
   ↓
Private or Contextual Conversion
```

Primary reusable goal: unify multiple service lines under one strong philosophy without making the company feel fragmented.

---

# 2. Template Identity

```text
Template Type: Philosophy-Led Lifestyle / Cultural Group Website
Design Direction: Japanese Minimal / Editorial / Quiet Luxury
Primary Goal: Build worldview, trust and affinity before conversion
Content Density: Medium to High
Interaction Density: Low to Medium
Trust Density: Medium to High
Visual Density: Low
Emotional Density: High
```

### Best suited for

- luxury wellness brands
- founder-led lifestyle companies
- premium education groups
- craft and cultural businesses
- destination retreats
- architectural / hospitality concepts
- multi-brand holdings that need a shared narrative

---

# 3. Design DNA

## Overall personality

- restrained
- meditative
- editorial
- atmospheric
- poetic
- human
- culturally grounded
- premium without obvious luxury clichés

## Visual behavior

- generous whitespace
- large image moments
- long-form content broken into calm chapters
- very low card density
- restrained use of borders
- minimal UI chrome
- typography carries hierarchy more than decorative components
- imagery acts as the dominant emotional anchor
- repeated use of section labels and numbered verticals

## Visual keywords

```text
Quiet, intentional, ceremonial, refined, contemplative, natural,
editorial, Japanese, premium, spacious, poetic, human
```

## Core transferable lesson

The visual identity is not created by decorative Japanese motifs. It is created by **pace, whitespace, image selection, editorial hierarchy, restraint and worldview consistency**.

---

# 4. Information Architecture

```text
/
├── /philosophy
├── /projects
│   ├── /projects/school
│   ├── /projects/craft
│   └── /projects/retreat
├── /company
└── /ja
    ├── /philosophy
    ├── /projects
    ├── /projects/school
    ├── /projects/craft
    ├── /projects/retreat
    └── /company
```

## Route map

| Route | Purpose | Primary CTA | Content Type | Priority |
|---|---|---|---|---|
| `/` | Establish worldview and introduce practices | View Philosophy / View Projects | Brand landing | P0 |
| `/philosophy` | Explain the core belief system | Explore Projects | Manifesto | P1 |
| `/projects` | Explain the three practices | View project | Portfolio/vertical hub | P0 |
| `/projects/school` | Present educational practice | Program / external action | Service/editorial | P0 |
| `/projects/craft` | Present craft practice | Inquiry / explore | Service/editorial | P1 |
| `/projects/retreat` | Present retreat practice | Private contact | Service/editorial | P0 |
| `/company` | Build founder and organizational trust | Contextual contact | Company/editorial | P1 |

---

# 5. Global Layout Architecture

```text
App Shell
├── Minimal Header
│   ├── Brand Mark
│   ├── Navigation
│   ├── Language Switcher
│   └── Mobile Menu Trigger
├── Main
│   ├── Full-bleed editorial media
│   ├── Contained narrative sections
│   ├── Numbered practice chapters
│   └── contextual CTA blocks
└── Footer
    ├── Dubai Location
    ├── Tokyo Location
    ├── Navigation
    └── Legal / brand metadata
```

## Recommended container strategy

- Wide desktop canvas: 1440–1600px
- Reading container: 680–840px
- Editorial container: 1120–1280px
- Full-bleed image sections allowed
- Significant section gaps: 120–220px desktop
- Mobile content gutters: 20–28px

---

# 6. Page-by-Page Structure

## Homepage

```text
01 Minimal Header
02 Hero — Remember who you are
03 Atmospheric Image Sequence
04 Philosophy Intro
05 Philosophy CTA
06 Projects Intro
07 School Preview
08 Craft Preview
09 Retreat Preview
10 Company Intro
11 Company CTA
12 Dubai / Tokyo Locations
13 Footer
```

### Homepage intent

Do not sell immediately. First define the worldview, then show how the worldview manifests in the company's ventures.

---

## Projects Hub

```text
01 Projects Hero
02 Editorial Introduction
03 School Chapter
04 School Narrative
05 School Media
06 School CTA
07 Craft Chapter
08 Craft Narrative
09 Craft Media
10 Craft CTA
11 Retreat Chapter
12 Retreat Narrative
13 Retreat Media
14 Retreat CTA
15 Footer
```

---

## School Detail

```text
01 Hero
02 Core Belief Statement
03 Long-form Educational Narrative
04 Media Coverage / Recognition
05 Programs Introduction
06 Program 01 — TANE
07 Program Benefits
08 Expert Supervisors
09 Program 02 — MINORI
10 Program Benefits
11 Expert Supervisors
12 Closing Philosophy
13 Availability Note
14 Footer
```

Reusable structure:

```text
Belief
  ↓
Problem Context
  ↓
Method
  ↓
Programs
  ↓
Expert Credibility
  ↓
Closing Vision
```

---

## Retreat Detail

```text
01 Hero
02 Core Experience Statement
03 Foundational Philosophy
04 "Tree of Life" Concept
05 Journey Overview
06 Step 01 Preparation
07 Step 02 On the Day
08 Step 03 Integration
09 Step 04 Transformation
10 Testimonials / Voice
11 Founder Practitioner Profile
12 Contact / Private Inquiry
13 Testimonial Modal System
14 Footer
```

Reusable structure:

```text
Emotional Promise
   ↓
Concept / Method
   ↓
Process
   ↓
Social Proof
   ↓
Guide Credibility
   ↓
Private Conversion
```

---

## Company

```text
01 Company Manifesto
02 Japanese / English paired narrative
03 Editorial Media
04 Founder Profile
05 Founder Philosophy
06 Company Outline
07 Locations
08 Business Activities
09 Legal Company Information
10 Footer
```

---

# 7. Section Anatomy

## Hero

```text
Hero
├── Minimal navigation
├── H1 / manifesto phrase
├── optional local-language counterpart
├── atmospheric media
└── subtle scroll cue
```

Rules:
- H1 should be concise and memorable.
- The visual should create emotion, not explain the product literally.
- Avoid CTA overload in the hero.

## Philosophy Section

```text
PhilosophySection
├── Eyebrow
├── Large statement
├── Editorial paragraph
└── Quiet text-link CTA
```

## Practice Preview

```text
PracticePreview
├── Number
├── Category label
├── Title
├── Core promise
├── Supporting paragraph
├── Large media
└── View link
```

## Founder Section

```text
FounderProfile
├── Portrait
├── Name
├── Role
├── Quote / principle
├── Biography
└── optional credentials / lineage
```

---

# 8. UX & Conversion Architecture

## Main journey

```text
Curiosity
   ↓
Worldview Recognition
   ↓
Philosophy Alignment
   ↓
Practice Discovery
   ↓
Deep Narrative
   ↓
Credibility
   ↓
Contextual Conversion
```

## Why it works

The website does not ask every visitor to perform the same action. Each practice uses a conversion model appropriate to the offer.

- School → educational program conversion
- Craft → inquiry / discovery
- Retreat → private contact
- Company → trust and verification

## Recommended conversion principle

Use **Contextual CTA Architecture** rather than one universal CTA.

```yaml
cta_by_vertical:
  education: "Explore Programs"
  craft: "Discuss a Project"
  retreat: "Request Private Details"
  company: "Learn About the Group"
```

## UX problems to avoid

- poetic copy that becomes too vague
- weak navigation discoverability
- oversized visual media with poor mobile performance
- excessive animation that disrupts reading
- hiding essential trust / compliance information
- ambiguous conversion path after long editorial content

---

# 9. Navigation Architecture

Recommended desktop navigation:

```text
Logo
Philosophy
Projects
Company
Language
```

Projects may expand to:

```text
Projects
├── School
├── Craft
└── Retreat
```

Mobile:
- full-screen menu or simple sheet
- 44px+ touch targets
- language selector visible
- no deeply nested menu structure

---

# 10. Design Tokens

The following are template approximations, not claims of exact source values.

```css
--color-bg: #F4F1EA;          /* approximate warm neutral */
--color-surface: #FAF8F4;     /* approximate */
--color-text: #22201C;         /* approximate */
--color-muted: #77736B;        /* approximate */
--color-border: rgba(34,32,28,.15);
--color-accent: #A59A82;       /* approximate muted earth */

--space-1: 4px;
--space-2: 8px;
--space-3: 16px;
--space-4: 24px;
--space-5: 40px;
--space-6: 64px;
--space-7: 96px;
--space-8: 144px;
--space-9: 200px;

--radius-sm: 2px;
--radius-md: 6px;
--radius-lg: 12px;

--shadow-sm: none;
--shadow-md: 0 16px 48px rgba(0,0,0,.06);
```

Principle: **use almost no visible UI decoration**.

---

# 11. Typography System

Recommended abstraction:

| Token | Desktop | Mobile | Weight | Line Height | Usage |
|---|---:|---:|---:|---:|---|
| Display | 76–112px | 44–64px | 400 | 0.95–1.05 | Manifesto hero |
| H1 | 64–88px | 40–56px | 400 | 1.0–1.1 | Page title |
| H2 | 44–64px | 32–44px | 400 | 1.05–1.15 | Section title |
| H3 | 28–38px | 24–30px | 400–500 | 1.2 | Subsection |
| Body-lg | 20–26px | 18–22px | 400 | 1.55–1.75 | Editorial narrative |
| Body | 15–18px | 15–17px | 400 | 1.65–1.85 | Supporting copy |
| Small | 12–14px | 12–14px | 400 | 1.5 | Metadata |
| Label | 11–13px | 11–13px | 500 | 1.3 | Eyebrows/numbers |

### Font direction

- refined serif or humanist serif for large editorial text
- neutral sans serif for labels / utility text
- Japanese implementation must prioritize excellent CJK metrics
- Persian adaptation: pair an elegant Persian display font with a highly readable Persian body font; preserve spacious line-height and avoid over-condensed typography

---

# 12. Color System

Suggested ratio:

```text
Warm Neutral: 80%
Dark Ink: 15%
Muted Earth Accent: 5%
```

Avoid:
- saturated gradients
- bright SaaS colors
- excessive semantic color
- loud CTA blocks

---

# 13. Grid & Spacing

### Desktop

```text
12-column editorial grid
container: 1280px
outer margin: 48–80px
column gap: 24–32px
section gap: 140–220px
reading width: 680–840px
```

### Tablet

```text
8 columns
outer margin: 32px
section gap: 96–140px
```

### Mobile

```text
4 columns
outer margin: 20–24px
section gap: 72–104px
single-column editorial reading
```

---

# 14. Radius, Border & Shadow

- Prefer square or near-square media.
- Borders should be subtle and rare.
- Cards should generally not look like cards.
- Elevation should be used only for overlays/modals.
- Focus rings must be visible despite minimal visual language.

---

# 15. Iconography

Style:
- ultra-minimal line icons
- 1.25–1.5px stroke
- 16–20px common size
- arrows used more often than decorative icons

Recommended libraries:
- Lucide
- Phosphor Light

But utility icons should remain secondary to typography.

---

# 16. Imagery Direction

Primary media types:

- documentary photography
- portrait photography
- architecture/interior photography
- craft closeups
- landscape / nature imagery
- slow cinematic video

Rules:

```text
Photography > Illustration
Atmosphere > literal product screenshot
Natural light > artificial commercial lighting
Texture > polish
Human presence > stock imagery
```

Recommended aspect ratios:
- Hero: 16:9 / 4:3 / portrait cinematic crop
- Editorial feature: 4:5 / 3:2
- Portrait: 4:5
- Mobile: avoid aggressive desktop crops

---

# 17. Motion & Interaction

Motion should feel ceremonial, not flashy.

Recommended:

```text
Fast hover: 140–180ms
Text transition: 180–240ms
Image reveal: 400–800ms
Page transition: 500–900ms
```

Patterns:
- fade/translate reveals
- slow image scale
- text stagger
- minimal hover underline / arrow movement
- modal testimonials
- subtle section transitions

Mandatory:
- `prefers-reduced-motion`
- no scroll-jacking
- no forced autoplay audio
- video lazy loading

---

# 18. Component Inventory

## Layout
- Header
- Footer
- Container
- EditorialSection
- FullBleedMedia
- SplitEditorialSection

## Brand
- ManifestoHero
- PhilosophyIntro
- PracticePreview
- NumberedChapter
- FounderProfile
- CompanyOutline
- LocationBlock

## Content
- LongformText
- PullQuote
- EditorialImage
- ProgramBlock
- ExpertProfile
- JourneySteps
- Testimonial
- TestimonialModal

## Conversion
- QuietTextLink
- ContextualCTA
- InquiryPanel
- ContactBlock
- LanguageSwitcher

---

# 19. Component Anatomy

## PracticePreview

```tsx
interface PracticePreviewProps {
  index: string;
  label: string;
  title: string;
  promise: string;
  body?: string;
  media: MediaAsset;
  href: string;
  theme?: 'light' | 'dark' | 'earth';
}
```

## JourneyStep

```tsx
interface JourneyStepProps {
  index: string;
  eyebrow?: string;
  title: string;
  description: string;
  media?: MediaAsset;
}
```

## FounderProfile

```tsx
interface FounderProfileProps {
  name: string;
  role: string;
  portrait: MediaAsset;
  quote?: string;
  biography: RichText;
  credentials?: string[];
}
```

---

# 20. Variants & States

Buttons/links:
- default
- hover
- focus-visible
- active
- disabled

Media:
- loading
- loaded
- error fallback

Modal:
- closed
- opening
- open
- closing

Form/inquiry:
- idle
- loading
- success
- error

---

# 21. Responsive Architecture

## Mobile 320–479

- manifesto wraps intentionally
- one-column narrative
- images remain visually dominant
- numbered chapters remain visible
- body copy line length kept short
- CTA moves inline below content
- footer locations stacked

## 480–767

- optional asymmetric image blocks
- still avoid side-by-side long text

## Tablet 768–1023

- split narrative/media sections introduced selectively
- typography reduced from desktop scale

## Desktop 1024–1439

- wide whitespace and editorial asymmetry
- image and text can alternate positions

## Large Desktop 1440+

- do not stretch reading lines
- scale whitespace more than content width

---

# 22. Accessibility

Target: WCAG 2.2 AA.

Requirements:

- semantic H1 → H2 → H3 hierarchy
- visible keyboard focus
- 44px minimum interactive touch target where practical
- no meaning conveyed only by animation
- descriptive alt text for documentary imagery
- empty alt for purely atmospheric decorative images
- dialog focus trap for testimonial modals
- escape-to-close support
- reduced motion handling
- captions/transcripts for video content
- language attributes for Japanese/English content

---

# 23. Content Architecture

Recommended entities:

```text
BrandPhilosophy
Practice
Project
Program
JourneyStep
Founder
Expert
Testimonial
Location
CompanyEntity
CTA
MediaAsset
```

Example:

```ts
interface Practice {
  slug: string;
  index: string;
  title: string;
  promise: string;
  summary: string;
  philosophy?: RichText;
  media: MediaAsset[];
  primaryCTA?: CTA;
  relatedPrograms?: Program[];
}
```

---

# 24. SEO / GEO Structure

Recommended:

- clear organization entity
- explicit relationship between parent brand and practices
- Organization schema
- Person schema for founder where factual
- EducationalOrganization / Course schema only if genuinely applicable
- Service schema where appropriate
- FAQ schema only when FAQ is visibly present
- BreadcrumbList
- multilingual `hreflang`
- location entity clarity for Dubai and Tokyo
- answer-first summaries on philosophy and practice pages

Never fabricate:
- awards
- certifications
- medical outcomes
- client counts
- testimonials
- locations
- regulatory claims

---

# 25. Technical Frontend Architecture

Recommended stack:

```text
Next.js
TypeScript
Tailwind CSS
Framer Motion or GSAP (restrained)
Headless CMS
Server Components for editorial pages
Image optimization
Video lazy loading
Internationalization
```

Suggested structure:

```text
src/
├── app/
│   ├── [locale]/
│   │   ├── page.tsx
│   │   ├── philosophy/
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   └── company/
├── components/
│   ├── layout/
│   ├── editorial/
│   ├── practices/
│   ├── people/
│   └── ui/
├── content/
├── config/
├── lib/
├── types/
└── styles/
```

---

# 26. Reusability Rules

## Keep fixed

- worldview-first storytelling
- calm editorial pacing
- practice/vertical abstraction
- contextual CTA pattern
- restrained visual system
- asymmetric editorial composition
- long-form narrative structure

## Customize

- brand philosophy
- venture names
- images/video
- founder story
- company locations
- language
- color tokens
- typography
- service details

## Never hardcode

- founder identity
- legal entity details
- addresses
- testimonials
- expert credentials
- health claims
- program metrics
- company registration numbers

---

# 27. Customization Variables

```yaml
brand:
  name: ""
  manifesto: ""
  philosophy_title: ""
  philosophy_body: ""
  primary_language: ""
  supported_languages: []

visual:
  palette: {}
  typography: {}
  image_direction: ""
  motion_level: "low|medium"

practices:
  - slug: ""
    index: "01"
    name: ""
    promise: ""
    summary: ""
    conversion_type: "inquiry|program|booking|contact"

founder:
  enabled: true
  name: ""
  role: ""
  quote: ""
  bio: ""

company:
  locations: []
  legal_entities: []

seo:
  default_title: ""
  description: ""
  organization_schema: {}

feature_flags:
  multilingual: true
  testimonials: true
  video: true
  founder_section: true
  modal_testimonials: false
```

---

# 28. What Must NOT Be Copied

Do not clone:

- IZANAMI name or logo
- Japanese phrases or brand-specific copy
- original photography/video
- founder biography
- exact company addresses
- company/legal registration data
- proprietary program names
- testimonials
- health/healing claims
- specific visual assets

Reusable value is the **architecture and design logic**, not the brand identity.

---

# 29. Improvement Layer

Recommended improvements for a production-grade reusable version:

1. Add clearer page-level CTA logic without destroying the quiet brand tone.
2. Add structured breadcrumbs on deep practice pages.
3. Introduce CMS-driven practice modules.
4. Add a lightweight related-practice navigation at the end of detail pages.
5. Provide transcript/captions for all video.
6. Provide reduced-motion and low-bandwidth media fallbacks.
7. Add performance budgets for editorial imagery.
8. Add analytics for philosophy → practice → conversion progression.
9. Make multilingual architecture first-class rather than duplicated pages.
10. Separate factual trust blocks from poetic marketing copy.
11. Add optional newsletter/editorial subscription for brands that publish ongoing stories.
12. Add optional booking/application workflow where conversion requires qualification.

---

# 30. Quality Gates

Before approving a site built from this template:

- [ ] H1 is worldview-led and concise.
- [ ] Brand philosophy is understandable within the first two screens.
- [ ] Each practice clearly explains what it actually does.
- [ ] No venture feels disconnected from the parent brand.
- [ ] Text line length remains readable.
- [ ] Mobile layout is intentionally composed, not simply stacked desktop.
- [ ] Images are optimized and responsive.
- [ ] Motion respects reduced-motion preferences.
- [ ] Every deep page ends with a relevant next action.
- [ ] Founder/company facts are verified.
- [ ] Testimonials and metrics are factual.
- [ ] Multilingual SEO uses valid hreflang/canonical logic.
- [ ] WCAG 2.2 AA essentials are satisfied.
- [ ] Core Web Vitals remain within acceptable production targets.

---

# 31. Master Build Prompt

## Purpose

Use the following prompt to generate a new website inspired by IZANAMI's **structural and UX principles** without copying its brand, copy, imagery or proprietary identity.

```text
You are a senior product designer, creative director, UX architect, and frontend engineer.

Build a premium philosophy-led lifestyle brand website using the following architectural principles:

CORE IDEA
The website must unify multiple business practices under one clear worldview. Do not begin by selling products. Begin by establishing a strong emotional and philosophical proposition, then show how that proposition becomes real through the company's ventures.

DESIGN DIRECTION
- quiet luxury
- Japanese-inspired restraint without decorative cultural clichés
- editorial composition
- generous whitespace
- sophisticated typography
- cinematic photography
- minimal borders and cards
- restrained motion
- calm, premium and human

INFORMATION ARCHITECTURE
Create:
1. Homepage
2. Philosophy page
3. Practices/Projects hub
4. One detail page template per practice
5. Company page
6. Optional multilingual routing

HOMEPAGE STRUCTURE
01 Minimal Header
02 Manifesto Hero
03 Atmospheric Media
04 Philosophy Introduction
05 Philosophy CTA
06 Practices Introduction
07 Practice Preview 01
08 Practice Preview 02
09 Practice Preview 03
10 Company Introduction
11 Founder/Company CTA
12 Locations / Contact
13 Footer

PRACTICE DETAIL TEMPLATE
01 Practice Hero
02 Core Belief
03 Problem / Context Narrative
04 Method / Philosophy
05 Program, Process or Offering
06 Supporting Media
07 Credibility / Expert / Founder Proof
08 Testimonials if factual
09 Relevant CTA
10 Related Practice Navigation

COMPANY PAGE
01 Company Manifesto
02 Brand Worldview
03 Editorial Media
04 Founder Profile
05 Company Facts
06 Locations
07 Legal / Business Information

UX PRINCIPLES
- prioritize emotional clarity before conversion
- use contextual CTA per business vertical
- keep navigation shallow
- make long-form reading comfortable
- avoid UI clutter
- every visual must reinforce mood or meaning
- mobile must be intentionally art-directed

TYPOGRAPHY
Use a refined editorial display face paired with a highly readable body face. Large headings should feel calm and deliberate, not aggressive. Keep body line length around 60–75 characters.

LAYOUT
- 12-column editorial desktop grid
- 1280px max editorial container
- 680–840px reading width
- 140–220px major desktop section spacing
- 72–104px mobile section spacing
- allow full-bleed media sections
- use intentional asymmetry

MOTION
Use only slow fades, subtle translation, text staggering and image reveals. No scroll hijacking, excessive parallax or decorative animation. Respect prefers-reduced-motion.

COMPONENTS
Create reusable components for:
- ManifestoHero
- PhilosophySection
- PracticePreview
- NumberedChapter
- EditorialMedia
- LongformText
- FounderProfile
- ExpertProfile
- JourneySteps
- Testimonial
- TestimonialModal
- ContextualCTA
- LocationBlock
- CompanyOutline

TECHNICAL REQUIREMENTS
- Next.js
- TypeScript
- Tailwind CSS
- component-driven architecture
- headless CMS-ready content model
- Server Components where appropriate
- optimized responsive images
- lazy-loaded video
- multilingual-ready routing
- WCAG 2.2 AA target
- SEO metadata and structured data

CONTENT RULES
Never fabricate:
- awards
- testimonials
- statistics
- legal data
- medical or wellness claims
- expert credentials
- company locations

If real content is unavailable, use clearly labeled placeholder content in development only and keep it out of production schema output.

PERFORMANCE
Keep visual richness without sacrificing performance. Load critical hero media intelligently, lazy-load below-fold imagery, provide mobile-specific crops, and use reduced-media fallbacks when necessary.

FINAL RESULT
The website should feel like a coherent cultural world rather than a collection of unrelated service pages. The visitor should understand the brand's worldview first, then naturally discover the practices, trust the organization and choose a relevant next step.
```

---

## Template Summary

The strongest reusable insight from IZANAMI is:

```text
One Worldview
    ↓
Multiple Practices
    ↓
Consistent Editorial Language
    ↓
Context-Specific Trust
    ↓
Context-Specific Conversion
```

This pattern is especially useful when a founder or parent company operates across multiple categories that would otherwise feel unrelated.