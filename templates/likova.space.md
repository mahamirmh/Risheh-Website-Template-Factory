# LIKOVA — Reusable Website Template Specification

> Source reference: https://likova.space/
>
> Purpose: abstract LIKOVA’s immersive single-page real-estate experience into a reusable premium template for business centers, office leasing, luxury real estate, architecture showcases, branded developments and high-end property campaigns.
>
> **Important:** this specification captures architecture, interaction logic and design patterns—not LIKOVA’s proprietary brand assets, copy, imagery, project data or claims.

---

## 0. Template Metadata

```yaml
template:
  source_name: "LIKOVA"
  source_url: "https://likova.space/"
  analyzed_at: "2026-08-22"
  category: "Premium Real Estate / Architectural Showcase"
  subcategory: "Class A Business Center Leasing Microsite"
  complexity: "high"
  visual_style:
    - immersive
    - architectural
    - editorial
    - cinematic
    - bold typography
    - premium
    - scroll-led
    - image-heavy
  suitable_for:
    - office leasing
    - commercial real estate
    - luxury residential development
    - mixed-use development
    - architecture studio showcase
    - hotel/resort development
    - business center
    - branded property launch
  status: "ready"
```

### Evidence labels

- **Observed** = directly visible in the public website.
- **Inferred** = analytical interpretation of UX/architecture.
- **Recommended** = reusable improvement for this Factory template.

---

# 1. Reference Snapshot

## Observed

- Main positioning: premium Class A business center.
- Hero headline: a future/growth-oriented brand statement.
- Primary conversion action: **Select office space**.
- Secondary action: **Contact**.
- Current experience is predominantly a long-form single-page website.
- Navigation anchors jump to sections such as About, Location, Master Plan, Architecture, Lobby, Offices, Technology, Infrastructure and Team.
- Strong reliance on architectural renders, environmental images, interior visualizations and spatial storytelling.
- The website contains high-value numeric proof such as area, floor count, distances, infrastructure facts and operational details.
- Major narrative chapters are explicitly numbered.
- Location section combines contextual narrative and quantified commute/proximity data.
- Master Plan is presented as an interactive or dedicated visual exploration opportunity.
- Architecture section explains formal architectural decisions.
- Lobby section mixes visual galleries with numerical operational facts.
- Office section promotes adaptable layouts and spatial flexibility.
- Technology section presents a dense feature inventory.
- Infrastructure section presents amenity categories.
- Team section introduces architectural/lighting/interior partners.
- Footer exposes project opening hours, contact, privacy/legal information and development credits.

## Inferred

Primary audience:
- companies searching for premium office space
- commercial real-estate brokers
- founders/executives
- corporate real-estate teams
- investors and development stakeholders

Primary conversion model:

```text
Aspirational Brand Story
        ↓
Location Confidence
        ↓
Architectural Desire
        ↓
Operational Proof
        ↓
Space/Product Fit
        ↓
Technology & Amenities
        ↓
Team Credibility
        ↓
Select Space / Contact
```

---

# 2. Template Identity

```text
Template Type: Premium Architectural Real-Estate Microsite
Primary Goal: Space-selection lead generation
Secondary Goal: Project positioning / brand desirability
Content Density: High
Media Density: Very High
Interaction Density: High
Trust Density: High
Page Model: Immersive long-form single page + conversion overlays
```

### Best adaptation targets

- Class A office complexes
- luxury towers
- premium residential launches
- co-working campuses
- hotels and resorts
- mixed-use developments
- architectural landmarks
- premium retail destinations

---

# 3. Design DNA

## Visual personality

```text
Architectural
Monumental
Forward-looking
Precise
Editorial
Cinematic
Premium
Technical
Spatial
Confident
```

## Core design principles

1. **Architecture is the hero.**
2. **Text supports space rather than competing with it.**
3. **Large type creates landmark moments.**
4. **Numbered chapters turn a long page into a guided narrative.**
5. **Statistics are treated visually, not as ordinary data tables.**
6. **Media alternates between full-bleed and controlled compositions.**
7. **Conversion remains persistent without overwhelming the experience.**
8. **Long-form scroll becomes the product tour.**

## White-space strategy

- generous vertical breathing room
- oversized gaps around architectural statements
- tighter clustering for technical fact groups
- controlled asymmetry between copy and media

## Card usage

Low. Prefer:
- open layouts
- thin-rule separation
- floating labels
- stat blocks
- media panels

Avoid generic SaaS cards.

---

# 4. Information Architecture

## Observed IA

```text
/
├── #about-us
├── #location
├── #master-plan
├── #architecture
├── #lobby
├── #offices
├── #technology
├── #infrastructure
├── #team
├── select-office-space
├── select-parking-space
├── contact
└── privacy-policy
```

## Recommended scalable IA

For a single-project campaign:

```text
/
├── #overview
├── #location
├── #master-plan
├── #architecture
├── #lobby
├── #offices
├── #technology
├── #amenities
├── #team
└── #contact
```

For a larger commercial platform:

```text
/
├── project
├── location
├── architecture
├── offices
│   └── [unit/floor]
├── amenities
├── technology
├── gallery
├── team
└── contact
```

---

# 5. Global Layout Architecture

```text
SiteShell
├── Persistent Header
│   ├── Project Logo
│   ├── Section Menu / Index
│   ├── Saved/Selected Spaces Counter (optional)
│   ├── Select Space CTA
│   └── Contact CTA
├── Main Scroll Narrative
│   ├── Hero
│   ├── Chapter 01 — Project Idea
│   ├── Chapter 02 — Location
│   ├── Chapter 03 — Master Plan
│   ├── Chapter 04 — Architecture
│   ├── Chapter 05 — Lobby
│   ├── Chapter 06 — Offices
│   ├── Chapter 07 — Technology
│   ├── Chapter 08 — Infrastructure
│   └── Chapter 09 — Team
├── Conversion Layer
│   ├── Space Selector
│   ├── Parking Selector
│   └── Contact Modal/Form
└── Footer
```

### Layout strategy

- Desktop should feel like a presentation canvas, not a blog column.
- Full viewport moments are encouraged.
- Text blocks generally remain narrow relative to media.
- Chapter numbers can live outside the conventional text column.
- Sticky/persistent controls should remain lightweight.

---

# 6. Page-by-Page / Section-by-Section Structure

Because the source behaves predominantly as one long-form page, the critical unit is the **section chapter**.

## Homepage / Project Experience

```text
01 Header
02 Hero
03 Project Overview / Manifesto
04 Key Project Facts
05 Location
06 Connectivity Metrics
07 Surrounding Environment / Lifestyle
08 Master Plan
09 Architecture
10 Architect Quote / Authority Proof
11 Lobby
12 Lobby Metrics
13 Offices
14 Space Selection CTA
15 Service / Management
16 Technology
17 Infrastructure / Amenities
18 Team / Project Partners
19 Contact CTA
20 Footer / Legal
```

---

## 6.1 Hero

### Objective
Create project desire before introducing technical facts.

```text
Hero
├── Background Architectural Media
├── Project Name / Logo
├── Large Brand Statement
├── Short Positioning Copy
├── Class / Category Label
├── Select Space CTA
└── Scroll Cue
```

### Desktop behavior
- near full viewport
- large display type
- architectural render/image/video dominates

### Mobile behavior
- preserve focal point
- avoid shrinking all text proportionally
- reduce line length and animation complexity

---

## 6.2 Project Overview

```text
Overview
├── Chapter Number
├── Editorial Heading
├── Supporting Copy
├── Architectural Media
└── Key Project Facts
```

### Key facts pattern

```text
FactStrip
├── Variable Floor Count
├── Total Area
└── Completion / Availability Date
```

Only use verified project data.

---

## 6.3 Location

Observed content pattern:

```text
Location
├── Chapter Number
├── Aspirational Heading
├── Context Copy
├── Benefit Slides
│   ├── Airport Proximity
│   ├── Road Network
│   └── Residential Development
├── Map / Environmental Media
└── Connectivity Metrics
```

### Recommended location evidence

- travel time to airport
- nearest metro/train
- city center commute
- major highway distance
- neighboring business districts
- nearby parks/retail/hospitality

Use measured or sourced values only.

---

## 6.4 Surrounding Environment

Pattern:

```text
LifestyleContext
├── Large Environmental Media
├── Recreation Story
├── Culture Story
├── Fitness Story
└── Supporting Gallery
```

This is important because premium property marketing sells **ecosystem**, not merely square meters.

---

## 6.5 Master Plan

```text
MasterPlanSection
├── Chapter Label
├── Hero Plan Image / 3D View
├── Explore Master Plan CTA
└── Interactive Plan Overlay
```

### Recommended interactive plan

```text
InteractiveMasterPlan
├── Building
├── Entrance
├── Parking
├── Retail
├── Landscape
├── Public Space
└── Infrastructure Labels
```

---

## 6.6 Architecture

```text
ArchitectureSection
├── Chapter Number
├── Architectural Concept Heading
├── Concept Description
├── Feature Carousel
│   ├── Elevated Volumes
│   ├── Facade Rhythm
│   ├── Glazing
│   ├── Solar Protection
│   └── Architectural Lighting
├── Architect Quote
└── Portrait / Authority Media
```

This section should explain **why the building looks and performs the way it does**.

---

## 6.7 Lobby

```text
LobbySection
├── Chapter Number
├── Editorial Heading
├── Intro Copy
├── Lobby Gallery
├── Design Author / Studio
├── Experience Description
└── Operational Metrics
```

Metrics can include:
- number of entrances
- ceiling height
- elevators
- waiting capacity
- concierge/security

---

## 6.8 Offices

```text
OfficeSection
├── Chapter Number
├── Heading
├── Flexibility Statement
├── Office Gallery
├── Workspace Types
│   ├── Open Workspace
│   ├── Executive Office
│   ├── Conference Room
│   └── Coffee / Breakout
├── Technical Dimensions
└── Select Office CTA
```

### Conversion priority

This section is where inspiration must become inventory discovery.

---

## 6.9 Service / Property Management

```text
ServiceSection
├── Benefit Heading
├── Property Management
├── Mobile App / Call Center
├── Security
└── Resident Experience
```

Recommended addition:
- service-level summaries
- operational hours
- facility management responsibilities

---

## 6.10 Technology

Observed source contains dense feature inventory.

```text
Technology
├── Chapter Number
├── Innovation Heading
├── Technical Description
├── Feature Matrix
│   ├── LED Lighting
│   ├── Microclimate
│   ├── Facade Lighting
│   ├── Wi-Fi / IP TV
│   ├── Elevators
│   ├── Security
│   ├── Ventilation
│   └── Smart Parking
└── Technical Media
```

Recommended: group technical features into 3–4 categories instead of an unstructured list.

---

## 6.11 Infrastructure

```text
Infrastructure
├── Chapter Number
├── Ecosystem Heading
├── Intro Copy
├── Amenity Carousel/Grid
│   ├── Retail
│   ├── Restaurants
│   ├── Cafés
│   ├── Medical Center
│   ├── Fitness Club
│   └── Communal Spaces
├── Courtyard / Community Story
└── Gallery
```

---

## 6.12 Team

```text
Team
├── Chapter Number
├── Credibility Heading
├── Architecture Partner
├── Lighting Partner
├── Interior/Public Space Partner
└── Awards / Credentials (verified only)
```

The team section should strengthen **project credibility**, not resemble an employee directory.

---

# 7. Section Anatomy

## NumberedChapter

```text
NumberedChapter
├── chapterNumber
├── eyebrow
├── title
├── description
├── media
├── optionalFacts
├── optionalCarousel
└── optionalCTA
```

```ts
interface NumberedChapterProps {
  chapterNumber: string;
  eyebrow?: string;
  title: string;
  description?: string;
  media?: MediaAsset | MediaAsset[];
  facts?: FactItem[];
  cta?: LinkAction;
  theme?: 'light' | 'dark' | 'media';
}
```

## FactItem

```text
FactItem
├── value
├── unit
└── label
```

## PropertyFeatureSlide

```text
PropertyFeatureSlide
├── media
├── title
├── description
└── optionalMetric
```

---

# 8. UX & Conversion Architecture

## Main conversion journey

```text
Aspirational Hero
      ↓
Project Credibility
      ↓
Location Confidence
      ↓
Architectural Desire
      ↓
Interior / Office Fit
      ↓
Technical Assurance
      ↓
Amenity Ecosystem
      ↓
Team Authority
      ↓
Select Office / Contact
```

## Conversion mechanics

### Primary CTA
`Select office space`

Recommended persistence:
- header
- office section
- final CTA
- mobile sticky bottom CTA when appropriate

### Secondary CTA
`Contact`

### Tertiary actions
- explore master plan
- select parking
- download brochure (recommended)
- schedule a tour (recommended)

---

# 9. Navigation Architecture

## Observed

Anchor-based navigation exposes:
- About
- Location
- Master Plan
- Architecture
- Lobby
- Offices
- Technology
- Infrastructure
- Team

## Recommended desktop

```text
[Logo]
Overview  Location  Architecture  Offices  Amenities  Team
                           [Select Space] [Contact]
```

For long labels use an indexed menu drawer rather than overcrowding the header.

## Mobile

Use a full-screen section index:

```text
01 Overview
02 Location
03 Master Plan
04 Architecture
05 Lobby
06 Offices
07 Technology
08 Infrastructure
09 Team
```

Show scroll progress or current chapter.

---

# 10. Design Tokens

Exact source CSS values were not verified. Values below are **recommended approximations** for reuse.

```css
:root {
  --color-bg: #f1f0ec;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #77736c;
  --color-border: rgba(23,23,23,.18);
  --color-accent: #d9ff35;
  --color-dark: #101010;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 72px;
  --space-9: 96px;
  --space-10: 144px;
  --space-11: 192px;

  --radius-sm: 2px;
  --radius-md: 6px;
  --radius-lg: 12px;
}
```

Accent color must be rebranded per project; do not treat the approximate reference accent as universal.

---

# 11. Typography System

Exact source font family was not verified. Preserve the visual behavior, not the proprietary typeface.

| Token | Desktop | Mobile | Weight | Line Height | Usage |
|---|---:|---:|---:|---:|---|
| Display XXL | 110–180 | 56–84 | 400–600 | .85–.95 | Hero landmarks |
| Display | 72–110 | 44–64 | 400–600 | .9–1.0 | Chapter headlines |
| H1 | 64–88 | 40–54 | 450–600 | .95–1.05 | Page title |
| H2 | 48–72 | 34–46 | 450–600 | 1.0 | Sections |
| H3 | 28–40 | 24–32 | 500–600 | 1.1 | Features |
| Body-lg | 20–28 | 18–22 | 400 | 1.35 | Editorial copy |
| Body | 16–18 | 16–18 | 400 | 1.5 | Supporting text |
| Label | 11–14 | 11–13 | 500–650 | 1.2 | Nav / metadata |

Recommended:
- modern grotesk or geometric sans
- tight display tracking
- normal body tracking
- fluid type with `clamp()`

---

# 12. Color System

Use neutral architecture-first palette:

```text
Neutral surfaces: 75–85%
Dark contrast: 10–15%
Brand accent: 5–10%
Semantic states: <5%
```

Real-estate imagery should carry most of the color.

---

# 13. Grid & Spacing System

## Desktop
- 12-column grid
- 32–48px outer gutter
- 20–32px column gap
- 120–200px major section spacing
- full-bleed renders allowed

## Tablet
- 8 columns
- 24–32px gutter
- 88–140px section spacing

## Mobile
- 4 columns
- 16–20px gutter
- 64–96px section spacing
- prioritize linear storytelling

---

# 14. Radius, Border & Shadow

- low-to-medium radius
- architecture imagery usually unframed
- thin technical dividers
- minimal shadow
- modal/selector panels may use controlled elevation
- strong focus-visible ring required

---

# 15. Iconography

Recommended:
- technical outline icons
- transportation icons
- amenity pictograms
- minimal arrows
- consistent 1.5–2px stroke

Do not over-iconize editorial architecture sections.

---

# 16. Imagery Direction

Primary media:
- exterior architectural render
- facade close-up
- aerial/context render
- lobby/interior render
- office visualization
- master plan
- location map
- amenity imagery
- team/architect portraits

### Aspect strategies

```text
Hero: 16:9 / 21:9 / viewport
Architecture: 3:2 / 16:9
Interiors: 4:3 / 3:2
Portrait: 4:5
Plan/Map: flexible contain mode
```

CMS should support focal point and separate mobile crop.

---

# 17. Motion & Interaction

Recommended motion vocabulary:
- chapter transitions
- smooth anchor scrolling
- image reveals
- number/stat count-up sparingly
- horizontal gallery movement
- master-plan hotspots
- sticky chapter index
- full-screen media viewer
- space-selector drawer/modal

```text
Microinteraction: 140–200ms
UI transition: 200–320ms
Media reveal: 400–700ms
Chapter transition: 500–900ms
```

Never make conversion dependent on motion.

Respect `prefers-reduced-motion`.

---

# 18. Component Inventory

### Layout
- SiteHeader
- SiteFooter
- ChapterSection
- FullBleedMedia
- EditorialGrid
- SplitLayout

### Navigation
- SectionIndex
- MobileChapterMenu
- ScrollProgress
- StickyCTA

### Real Estate
- ProjectFacts
- LocationBenefits
- ConnectivityStats
- InteractiveMap
- MasterPlanViewer
- ArchitectureFeatureCarousel
- LobbyGallery
- OfficeTypeGallery
- TechnicalFeatureMatrix
- AmenityCarousel
- PartnerCard
- SpaceSelector
- ParkingSelector

### Conversion
- SelectSpaceButton
- TourRequestCTA
- ContactForm
- BrochureDownload
- ContactModal

### Utility
- Stat
- MediaViewer
- Carousel
- Accordion
- Tabs
- Tooltip
- Modal
- Drawer

---

# 19. Component Anatomy

## ProjectFact

```ts
interface ProjectFactProps {
  value: string | number;
  unit?: string;
  label: string;
  sourceNote?: string;
}
```

## SpaceSelector

```ts
interface SpaceSelectorProps {
  floors: Floor[];
  filters: {
    minArea?: number;
    maxArea?: number;
    floor?: number[];
    availability?: string[];
  };
  selectedUnits: string[];
  onSelect: (unitId: string) => void;
}
```

## AmenityItem

```ts
interface AmenityItem {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  media?: MediaAsset;
}
```

## ArchitectureFeature

```ts
interface ArchitectureFeature {
  title: string;
  description: string;
  media: MediaAsset;
  metric?: ProjectFact;
}
```

---

# 20. Variants & States

Interactive components require:
- default
- hover
- focus-visible
- active
- disabled
- loading
- error
- empty
- selected

Space inventory additionally requires:
- available
- reserved
- unavailable
- selected
- compare-ready

Never convey availability by color alone.

---

# 21. Responsive Architecture

## Mobile 320–479
- linear chapter sequence
- sticky bottom primary CTA optional
- chapter menu as full-screen overlay
- no hover-only data
- maps and plans open into dedicated viewer
- galleries use swipe

## Large Mobile 480–767
- 2-up stat blocks possible
- media remains mostly full-width

## Tablet 768–1023
- split sections begin
- sticky chapter index optional
- plan viewer gains side panel

## Desktop 1024–1439
- 12-column layout
- asymmetric editorial compositions
- sticky chapter navigation
- hover-driven previews acceptable

## Large Desktop 1440+
- monumental typography
- larger negative space
- expanded full-bleed media
- max text width remains controlled

---

# 22. Accessibility

Target: WCAG 2.2 AA.

Required:
- semantic landmarks
- skip navigation
- accessible anchor navigation
- keyboard-operable carousels/maps/modals
- strong focus state
- alternative textual master-plan description
- meaningful alt for architectural renders
- captions/transcripts for meaningful video
- reduced-motion mode
- minimum touch targets
- explicit form labels/errors
- accessible unit availability labels
- color contrast validation

---

# 23. Content Architecture

```ts
interface DevelopmentProject {
  name: string;
  category: string;
  class?: string;
  summary: string;
  hero: MediaAsset;
  facts: ProjectFactData[];
  location: LocationContent;
  masterPlan: MasterPlanContent;
  architecture: ArchitectureContent;
  officeSpaces: OfficeUnit[];
  technology: FeatureGroup[];
  amenities: Amenity[];
  partners: ProjectPartner[];
  seo: SEOFields;
}

interface OfficeUnit {
  id: string;
  floor: number;
  area: number;
  status: 'available' | 'reserved' | 'unavailable';
  price?: number;
  plan?: MediaAsset;
  features?: string[];
}

interface ProjectPartner {
  name: string;
  role: string;
  description?: string;
  logo?: string;
  awards?: string[];
}
```

Project inventory must come from CMS/API/data layer, never UI hardcoding.

---

# 24. SEO / GEO Structure

For a single property:
- unique descriptive title
- one clear H1
- crawlable text for all major sections
- location facts
- transportation facts
- office specifications
- structured internal anchors

Schema opportunities:
- Organization
- RealEstateAgent / LocalBusiness where accurate
- Place
- PostalAddress
- GeoCoordinates
- BreadcrumbList for multi-page variant
- ImageObject
- VideoObject

GEO optimization:
- concise factual project summary
- explicit building class/type
- exact location when publishable
- verified transport times
- verified dimensions/specifications
- amenities grouped semantically
- answer-first office availability explanation

Never fabricate property specs, completion dates, awards, transportation times or availability.

---

# 25. Technical Frontend Architecture

Recommended stack:

```text
Next.js
TypeScript
Tailwind CSS
Headless CMS
PostgreSQL or CMS inventory source
Map provider abstraction
Image CDN
Video CDN
Framer Motion or lightweight custom motion where necessary
```

Suggested structure:

```text
src/
├── app/
│   ├── page.tsx
│   ├── offices/
│   ├── api/
│   └── privacy/
├── components/
│   ├── layout/
│   ├── chapters/
│   ├── property/
│   ├── media/
│   ├── conversion/
│   └── ui/
├── content/
├── data/
├── lib/
├── styles/
└── types/
```

Performance priorities:
- render/image optimization
- poster-first video
- progressive media loading
- map lazy loading
- interactive master-plan code splitting
- no global heavy animation runtime
- responsive image sizes
- AVIF/WebP

---

# 26. Reusability Rules

## Stable template logic
- numbered scroll narrative
- chapter architecture
- location proof system
- media/stat alternation
- master-plan exploration
- office conversion point
- technology grouping
- amenity ecosystem
- partner credibility

## Customizable
- project identity
- typography
- palette
- media
- chapter count
- property type
- amenities
- inventory schema
- CTA labels
- map provider
- locale

## Never hardcode
- exact address
- project metrics
- completion date
- pricing
- availability
- partner names
- awards
- transport times
- contact information

---

# 27. Customization Variables

```yaml
brand:
  project_name: ""
  logo: ""
  tagline: ""
  class_label: ""
  visual_tone: "architectural-premium"

project:
  type: "office|residential|mixed-use|hotel"
  location: ""
  total_area: null
  floors: null
  completion_date: null

navigation:
  chapter_index: true
  sticky_header: true
  locale_switcher: false

hero:
  media: ""
  headline: ""
  description: ""

chapters:
  overview: true
  location: true
  master_plan: true
  architecture: true
  lobby: true
  offices: true
  technology: true
  infrastructure: true
  team: true

inventory:
  enabled: true
  office_selector: true
  parking_selector: false
  price_visibility: "hidden|visible|on-request"

conversion:
  primary_cta: "Select space"
  contact_cta: "Contact"
  tour_request: true
  brochure_download: true

locale:
  default: "en"
  supported: ["en"]

feature_flags:
  interactive_master_plan: true
  map: true
  chapter_progress: true
  sticky_mobile_cta: true
  media_lightbox: true
  reduced_motion_support: true
```

---

# 28. What Must NOT Be Copied

Do not reuse:
- LIKOVA brand/name/logo
- exact copywriting
- architectural renders
- floor plans
- partner identities
- specific metrics
- availability data
- project locations/data
- developer branding
- proprietary interactions reproduced pixel-for-pixel

Reusable ideas:
- chapter-driven storytelling
- architectural media hierarchy
- persistent conversion CTA
- location proof
- master-plan explorer
- technical feature grouping
- amenity storytelling
- premium real-estate conversion sequence

---

# 29. Improvement Layer

Factory version should improve the reference pattern with:

1. **Inventory transparency** — clear available/reserved/unavailable states.
2. **Qualified lead flow** — company, team size, required area, timing and tour preference.
3. **Performance budget** — strict render/video payload control.
4. **Accessible master plan** — keyboard navigation + text equivalent.
5. **SEO-readable content** — do not hide core facts exclusively in canvas/animation.
6. **Mobile-first space selection** — dedicated compact selector experience.
7. **Brochure generation** — selected unit + project facts downloadable as PDF if needed.
8. **CRM integration** — lead source, selected space and chapter context submitted with inquiry.
9. **Analytics events** — section depth, master-plan interactions, unit selection, tour request.
10. **Locale-ready architecture** — multilingual property launches without duplicating UI logic.

---

# 30. Quality Gates

Before marking an implementation ready:

### Visual
- [ ] Hero maintains architectural focal point at all breakpoints.
- [ ] Chapter rhythm remains deliberate.
- [ ] Typography scales fluidly.
- [ ] No generic SaaS-card appearance.

### UX
- [ ] Primary CTA discoverable within one viewport.
- [ ] Space selection is understandable without training.
- [ ] Location facts are easy to scan.
- [ ] Mobile navigation exposes every chapter.
- [ ] No essential information is hover-only.

### Accessibility
- [ ] WCAG 2.2 AA contrast target.
- [ ] Keyboard navigation works.
- [ ] Reduced motion works.
- [ ] Plans/maps have accessible alternatives.
- [ ] Forms have labels and useful errors.

### Performance
- [ ] Responsive images configured.
- [ ] Non-critical renders lazy-load.
- [ ] Video uses poster-first strategy.
- [ ] Interactive map/master plan is code-split.
- [ ] Core Web Vitals tested on mobile.

### Data integrity
- [ ] No fake metrics.
- [ ] No fabricated availability.
- [ ] No invented awards.
- [ ] No hardcoded inventory in presentational components.

---

# 31. Master Build Prompt

```text
You are a senior product designer, frontend architect, UX engineer and real-estate digital experience specialist.

Build a production-ready premium architectural real-estate website inspired by the structural and interaction principles documented in this specification.

IMPORTANT:
Do NOT clone LIKOVA.
Do NOT reuse its logo, brand name, wording, property facts, images, architectural renders, team names, awards, completion dates, addresses or proprietary assets.

GOAL
Create an immersive, premium, high-conversion website for [PROJECT_NAME], a [PROPERTY_TYPE] located in [LOCATION].

CORE EXPERIENCE
The website must behave as a guided architectural narrative rather than a generic corporate page.

Use this story sequence:
1. Hero / project promise
2. Project overview and verified facts
3. Location and connectivity
4. Surrounding environment
5. Interactive master plan
6. Architecture
7. Lobby / arrival experience
8. Offices / units
9. Property management / services
10. Technology
11. Amenities / infrastructure
12. Project partners
13. Final conversion

PRIMARY CONVERSION
[PRIMARY_CTA]

SECONDARY CONVERSION
[SECONDARY_CTA]

DESIGN DIRECTION
- premium
- architectural
- editorial
- cinematic
- highly visual
- large typography
- restrained UI chrome
- strong negative space
- image-led narrative
- low card dependency

LAYOUT
Use a responsive 12-column desktop grid, 8-column tablet grid and 4-column mobile grid.
Support full-bleed architectural media alongside narrow editorial copy.
Use numbered chapters and optional sticky chapter progress.

RESPONSIVE UX
Mobile must be redesigned—not merely scaled down.
Use swipeable media, compact chapter navigation and an optional sticky primary CTA.
No essential information may depend on hover.

COMPONENTS
Implement reusable components for:
- SiteHeader
- SiteFooter
- ChapterSection
- CinematicHero
- ProjectFacts
- LocationBenefits
- ConnectivityStats
- InteractiveMap
- MasterPlanViewer
- ArchitectureFeatureCarousel
- LobbyGallery
- OfficeGallery
- TechnicalFeatureMatrix
- AmenityCarousel
- PartnerCard
- SpaceSelector
- ParkingSelector
- ContactForm
- ClosingCTA

DATA ARCHITECTURE
Separate all property data from UI.
Do not hardcode price, address, availability, completion date, transport times, awards, partners or metrics.
Provide typed schemas for project facts, units, amenities, partners and media.

TECH STACK
- Next.js
- TypeScript
- Tailwind CSS
- component-driven architecture
- server rendering where beneficial
- headless CMS-ready data layer
- optimized image/video delivery
- map-provider abstraction

ACCESSIBILITY
Target WCAG 2.2 AA.
Implement keyboard navigation, focus-visible states, semantic heading order, reduced-motion support, accessible maps/plans and meaningful media alternatives.

PERFORMANCE
Optimize heavily for visual media.
Use responsive AVIF/WebP images, lazy loading, poster-first video, route/component code splitting and strict performance budgets.

SEO/GEO
Make project facts crawlable and explicit.
Use strong entity clarity for property type, location, amenities, office specifications and availability.
Never fabricate structured-data values.

OUTPUT
Deliver:
1. sitemap/route structure
2. component architecture
3. content/data schemas
4. design tokens
5. responsive layouts
6. production frontend
7. accessibility behavior
8. SEO metadata strategy
9. analytics event map
10. content placeholders clearly labeled for replacement

The final result must feel like a premium architectural product experience, not a generic real-estate landing page.
```

---

## Factory Classification

```text
Family: Premium Real Estate
Pattern: Immersive Architectural Storytelling
Primary Strength: Desire + spatial proof + conversion
Best For: High-value developments with strong visual assets
Avoid For: Low-budget listings, generic property directories, content-heavy portals
```
