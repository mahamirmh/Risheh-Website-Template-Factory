# Google Arts & Culture — Reusable Website Template Specification

> Reference: https://artsandculture.google.com/
>
> Template class: **Editorial Discovery Platform / Digital Museum / Cultural Knowledge Explorer**
>
> Status: Production-ready reference specification
>
> Rule: This document extracts interaction patterns, information architecture, visual principles, reusable UX logic, and component behavior. It must **not** reproduce Google branding, proprietary copy, partner assets, artwork rights, or Google-specific product identity.

---

# 01 — Reference Snapshot

Google Arts & Culture is a large-scale discovery platform built around cultural objects, museums, stories, places, interactive experiences, games, immersive media, and recommendation surfaces.

The product is not structured like a conventional marketing website. Its primary purpose is **continuous discovery** rather than conversion to a single CTA.

Observed major product surfaces:

- Home
- Explore
- Play
- Nearby
- Profile / Favorites / Achievements
- The Lab
- Collections
- Themes
- Artists
- Mediums
- Art movements
- Historical events
- Historical figures
- Places
- Search
- Story / Editorial content
- Artwork / Artifact detail
- Partner / Museum collection
- Immersive / AR / Street View / Pocket Gallery experiences

Core product idea:

```text
Entry
  ↓
Visual curiosity
  ↓
Discovery card
  ↓
Entity / story / experience
  ↓
Contextual related content
  ↓
Another discovery path
  ↓
Infinite cultural exploration
```

This is a **content graph UX**, not a linear funnel.

---

# 02 — Template Identity

## Best reusable template name

**Immersive Knowledge Discovery Platform**

## Suitable industries

- Museums
- Cultural institutions
- Universities
- Research archives
- Digital libraries
- Tourism platforms
- Education platforms
- Historical databases
- Media archives
- Art marketplaces with editorial layers
- Scientific knowledge portals
- Heritage organizations
- Large content libraries
- Visual encyclopedias

## Avoid using this template for

- Small corporate brochure sites
- Simple lead-generation landing pages
- Minimal service businesses
- Small e-commerce stores
- Projects without enough structured content

---

# 03 — Design DNA

The visual system is deliberately quiet so that the **content becomes the interface**.

Primary characteristics:

- White / neutral canvas
- Image-dominant storytelling
- Minimal chrome
- Strong whitespace
- Low visual decoration
- Editorial hierarchy
- Content cards with variable proportions
- Large visual anchors mixed with smaller modules
- Progressive discovery
- Repetition without monotony
- Strong photography / artwork dependence
- Calm typography
- Simple iconography
- Content-first navigation

Design principle:

> UI should disappear behind content.

The interface avoids excessive gradients, decorative backgrounds, heavy shadows, large persistent borders, or dashboard-like density.

---

# 04 — Information Architecture

## Primary navigation

```text
Global Navigation
├── Home
├── Explore
├── Play
├── Nearby
├── Favorites / Profile
└── Search
```

## Secondary discovery taxonomy

```text
Explore
├── Collections
├── Themes
├── Artists
├── Mediums
├── Art Movements
├── Historical Events
├── Historical Figures
└── Places
```

## Content graph

```text
Artwork
├── Artist
├── Museum / Collection
├── Medium
├── Movement
├── Date
├── Place
├── Related Story
├── Similar Artwork
└── Related Entity

Story
├── Author / Institution
├── Topic
├── Referenced Artworks
├── Related Stories
├── Historical Figures
└── Collection

Collection
├── Institution
├── Artworks
├── Stories
├── Virtual Visits
├── Topics
└── Locations
```

The core architectural lesson is that content should be modeled as a **network of entities and relationships**, not isolated pages.

---

# 05 — Global Layout Architecture

## Desktop shell

```text
┌──────────────────────────────────────────────┐
│ Top App Bar                                  │
│ Menu | Brand | Search | Utility actions      │
├──────────────────────────────────────────────┤
│                                              │
│ Main content canvas                          │
│                                              │
│ max-width varies by module                   │
│ editorial sections + immersive full bleed   │
│                                              │
├──────────────────────────────────────────────┤
│ contextual / lightweight footer             │
└──────────────────────────────────────────────┘
```

## Layout behavior

Use three container classes:

```text
container-reading   → 680–820px
container-content   → 1120–1280px
container-immersive → full viewport width
```

Do **not** force every section into the same width.

Editorial text benefits from narrower measure while visual exploration grids should use wider canvases.

---

# 06 — Page-by-Page Structure

## A. Home

Recommended reusable structure:

```text
Home
├── Global Header
├── Search / Discovery Prompt
├── Surprise Discovery
├── Daily / Featured Theme
├── Hero Editorial Feature
├── Curated Content Cluster
├── Artwork / Object of the Day
├── Recommended for You
├── Topic Carousel
├── Museum Explorer
├── Interactive / Zoom Experience
├── Quiz / Curiosity Module
├── Immersive Galleries
├── Street View / Virtual Visits
├── Editorial Stories
├── Museum Spotlight
├── High Definition Exploration
├── Continue Exploring
└── Footer / Utility Links
```

The homepage should **rotate modules dynamically** instead of behaving like a fixed corporate homepage.

### Home UX principle

Every viewport should expose at least one strong reason to continue exploring.

---

## B. Explore

```text
Explore
├── Search
├── Highlights
├── Experience Types
│   ├── Experiments
│   ├── High-definition objects
│   ├── 360 experiences
│   └── Virtual visits
├── Categories
│   ├── Artists
│   ├── Mediums
│   ├── Movements
│   ├── Events
│   ├── Figures
│   └── Places
├── Explore by Time
├── Explore by Color
├── Themes
├── Collections
├── Editorial Highlights
└── Popular Topics
```

This page functions as the **taxonomy hub** of the platform.

---

## C. Play / Experiments

```text
Play
├── Featured Experience Hero
├── Featured Experiences
├── Category Filter
│   ├── All
│   ├── Music
│   ├── Puzzle
│   ├── Crossword
│   ├── Coloring
│   ├── Trivia
│   └── Adventure
├── Experience Grid
├── Featured Game
├── Camera / AR Experiences
├── App CTA
└── Related Experiences
```

Cards need more expressive artwork than ordinary editorial cards while navigation remains visually restrained.

---

## D. Search Results

```text
Search
├── Persistent Search Input
├── Result Count
├── Search Context / Applied Taxonomy
├── Filter Controls
├── Content Type Switch
├── Results Grid
└── Progressive Loading
```

Search should work as both:

1. direct retrieval
2. discovery engine

---

## E. Story / Editorial Page

```text
Story
├── Breadcrumb / Content Label
├── Large Editorial Title
├── Subtitle
├── Institution / Author Attribution
├── Hero Media
├── Intro Text
├── Alternating Text + Media Blocks
├── Full-width Artwork Breaks
├── Captions / Credits
├── Pull Facts / Quotes
├── Embedded Media / Interaction
├── Referenced Entities
├── Related Stories
└── Next Discovery
```

Story layout should support variable storytelling rhythms rather than a rigid CMS blog format.

Recommended content block types:

- paragraph
- heading
- image
- image gallery
- comparison
- timeline
- quote
- video
- audio
- map
- object reference
- immersive frame
- CTA
- related entity

---

## F. Artwork / Artifact Detail

```text
Artifact Detail
├── High-resolution Visual Viewer
├── Zoom Controls
├── Title
├── Creator
├── Date / Period
├── Institution
├── Metadata
├── Description
├── Favorite / Share
├── Explore Details
├── Related Story
├── Similar Works
├── Same Collection
├── Same Movement
├── Same Location
└── Related Topics
```

Key principle:

**The related-content graph is as important as the primary artifact.**

---

## G. Collection / Museum Page

```text
Collection
├── Institution Identity
├── Hero / Museum Visual
├── About
├── Visit Information
├── Featured Stories
├── Artifacts
├── Virtual Visits
├── Topics
├── Search Within Collection
├── Filters
└── Related Collections
```

---

## H. Nearby

```text
Nearby
├── Location Permission State
├── Map / Geographic Context
├── Visit Mode
├── Browse Mode
├── Nearby Institutions
├── Nearby Cultural Places
└── Detail Drawer / Card
```

Must provide a graceful fallback when geolocation is denied.

---

# 07 — Section Anatomy

A reusable editorial discovery section should use:

```text
Section
├── Eyebrow (optional)
├── H2
├── Supporting description (optional)
├── Action link (optional)
└── Content surface
    ├── Hero card
    ├── Carousel
    ├── Grid
    ├── Editorial pair
    ├── Entity list
    └── Immersive module
```

Do not give every section identical visual weight.

Recommended rhythm:

```text
Large visual section
↓
Compact discovery row
↓
Editorial text-driven section
↓
Interactive section
↓
Grid
↓
Full-bleed feature
```

---

# 08 — UX & Discovery Architecture

Primary UX loop:

```text
Curiosity → Recognition → Interaction → Context → Related Discovery
```

Important mechanics:

- strong visual entry points
- low-friction browsing
- many lateral navigation paths
- related entity suggestions
- surprise discovery
- daily content
- personalized recommendations
- topic-driven exploration
- semantic search
- geographic discovery
- temporal discovery
- color / visual discovery
- interactive learning

The user should rarely reach a dead end.

### Anti-dead-end rule

Every detail page should expose at least 3 meaningful onward paths.

---

# 09 — Navigation Architecture

Recommended desktop navigation:

- compact top bar
- menu drawer for full taxonomy
- visible search affordance
- active section state
- account/favorites utilities separated from content taxonomy

Recommended mobile navigation:

```text
Top
├── Menu
├── Brand
└── Search

Bottom Navigation
├── Home
├── Discover
├── Play
├── Nearby
└── Favorites
```

Bottom navigation is valuable because discovery platforms generate repeated app-like usage.

---

# 10 — Design Tokens

The exact Google tokens should not be copied. Use a neutral reusable system.

```css
:root {
  --surface: #ffffff;
  --surface-subtle: #f7f7f7;
  --text-primary: #202124;
  --text-secondary: #5f6368;
  --border-subtle: #e5e7eb;
  --accent: var(--brand-primary);

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 999px;
}
```

---

# 11 — Typography System

Typography should be highly readable and understated.

Recommended scale:

```text
Display XL  → clamp(42px, 6vw, 72px)
Display     → clamp(36px, 5vw, 60px)
H1          → clamp(32px, 4vw, 48px)
H2          → clamp(26px, 3vw, 36px)
H3          → 22–28px
Body Large  → 18–20px
Body        → 16–18px
Caption     → 12–14px
```

Editorial pages should use generous line height:

```text
body: 1.65–1.8
heading: 1.1–1.25
```

Avoid oversized marketing typography in content-dense surfaces.

---

# 12 — Color System

The dominant palette should remain neutral.

Artwork, photography, video, and cultural content provide most of the color.

Recommended philosophy:

```text
90% neutral UI
10% brand accent
content media = unrestricted visual color
```

Avoid colored containers behind every section because they compete with artwork.

---

# 13 — Grid & Spacing

Desktop grid:

```text
12 columns
max-width: 1280px
outer padding: 32–48px
column gap: 20–32px
```

Tablet:

```text
8 columns
padding: 24px
```

Mobile:

```text
4 columns
padding: 16px
```

Recommended section spacing:

```text
Desktop: 72–120px
Tablet:  56–80px
Mobile:  40–64px
```

---

# 14 — Radius / Border / Shadow

This template should feel **flat and editorial**, not card-heavy SaaS.

Rules:

- minimal shadows
- subtle borders only when necessary
- cards often rely on spacing rather than containers
- media may use modest radius
- immersive media may be square/full-bleed

Avoid:

- floating glass cards
- strong drop shadows
- overly rounded everything
- border around every module

---

# 15 — Iconography

Icons should be:

- simple
- monochrome
- line-based or clean filled symbols
- 20–24px for standard UI
- 16–20px for metadata

Common actions:

- menu
- search
- favorite
- share
- zoom
- location
- play
- fullscreen
- next/previous
- filter
- close
- info

Use an open icon set such as Lucide when implementing the reusable version.

---

# 16 — Imagery System

Imagery is the primary emotional layer.

Support multiple aspect ratios:

```text
1:1  → artwork / entity card
4:3  → editorial card
3:2  → museum / place
16:9 → video / hero / immersive preview
2:3  → portrait artworks
free aspect → high-resolution artifact viewer
```

Never crop culturally important visual material blindly.

Use object-fit rules based on content type.

```text
photography → cover
artwork     → contain preferred
poster      → contain
hero        → cover with focal-point metadata
```

Image model should store optional focal point data.

---

# 17 — Motion

Motion must support discovery, not distract from content.

Use:

- subtle card transitions
- image zoom transitions
- smooth horizontal carousel movement
- progressive image loading
- modal / drawer transitions
- map state transitions
- immersive viewer motion

Avoid generic excessive scroll animations.

Respect `prefers-reduced-motion`.

---

# 18 — Component Inventory

Core reusable components:

```text
AppShell
TopBar
NavigationDrawer
BottomNavigation
GlobalSearch
SearchOverlay
SectionHeader
DiscoveryPrompt
SurpriseButton
HeroFeature
EditorialCard
ArtworkCard
EntityCard
MuseumCard
PlaceCard
StoryCard
ExperienceCard
GameCard
MediaViewer
ArtworkViewer
ImageZoom
Carousel
HorizontalRail
MasonryGrid
ResponsiveGrid
FilterBar
FilterChip
EntityMetadata
RelatedContentRail
RecommendationCluster
DailyFeature
MuseumSpotlight
TimelineExplorer
ColorExplorer
MapExplorer
StoryRenderer
StoryBlock
ImageGallery
VideoEmbed
AudioPlayer
ShareAction
FavoriteAction
Skeleton
EmptyState
ErrorState
ConsentState
LocationPermissionState
```

---

# 19 — Component Anatomy

## Discovery Card

```text
Card
├── Media
├── Content Type Label
├── Title
├── Supporting text (optional)
├── Entity attribution (optional)
└── Metadata (optional)
```

## Editorial Hero

```text
Hero
├── Full / large visual
├── Gradient readability layer only if needed
├── Eyebrow
├── Title
├── Subtitle
└── CTA
```

## Entity Card

```text
Entity
├── Image
├── Entity name
├── Secondary identity
└── Count / location / category
```

---

# 20 — Variants & States

Every interactive component should specify:

```text
default
hover
focus-visible
pressed
selected
loading
empty
error
disabled
```

Media additionally needs:

```text
placeholder
low-resolution preview
loaded
failed
fullscreen
zoomed
```

---

# 21 — Responsive Architecture

Do not simply shrink desktop layouts.

## Desktop

- wide editorial grids
- horizontal content rails
- large immersive previews
- hover discovery

## Tablet

- 2–3 column grids
- compact rails
- reduced section spacing

## Mobile

- single-column editorial flow
- horizontal swipe rails
- sticky / bottom navigation
- edge-to-edge imagery where useful
- collapsible metadata
- full-screen search
- thumb-accessible actions

Important:

Carousels should visibly reveal a portion of the next card on mobile to communicate horizontal scrollability.

---

# 22 — Accessibility

Minimum requirements:

- WCAG AA contrast
- semantic heading hierarchy
- keyboard navigation
- visible focus states
- descriptive alt text
- captions for audio/video
- transcript support
- reduced motion
- minimum 44×44 touch targets
- accessible dialogs
- accessible carousel controls
- no information encoded by color alone
- image zoom usable without mouse
- map has non-map alternative list

For artwork descriptions, distinguish between:

- factual metadata
- editorial interpretation
- accessibility description

---

# 23 — Content Architecture

Recommended domain entities:

```text
User
Institution
Collection
Artifact
Artwork
Artist
HistoricalFigure
Story
Theme
Place
Event
Movement
Medium
Topic
Experience
Game
MediaAsset
Exhibition
Recommendation
Favorite
```

Relationship examples:

```text
Institution hasMany Collections
Collection hasMany Artifacts
Artifact belongsTo Institution
Artifact belongsTo Artist
Artifact belongsTo Movement
Artifact hasMany Topics
Story referencesMany Artifacts
Story referencesMany People
Theme groupsMany Stories
Place hasMany Institutions
User favoritesMany Entities
```

This relational model is one of the most important reusable lessons from the reference.

---

# 24 — SEO / GEO Architecture

Every public entity should have a crawlable canonical page.

Recommended routes:

```text
/artists/[slug]
/artworks/[slug]
/collections/[slug]
/institutions/[slug]
/stories/[slug]
/themes/[slug]
/places/[slug]
/events/[slug]
/movements/[slug]
/mediums/[slug]
/experiences/[slug]
```

Use structured data where applicable:

- Article
- VisualArtwork
- Museum
- Place
- Person
- Event
- BreadcrumbList
- VideoObject
- ImageObject

For GEO / AI retrieval:

- clear semantic headings
- concise entity summaries
- explicit attribution
- source metadata
- factual provenance
- machine-readable relationships
- canonical entity URLs

---

# 25 — Technical Architecture

Recommended implementation stack for a reusable modern version:

```text
Frontend
├── Next.js
├── React
├── TypeScript
├── Tailwind CSS
└── Server Components where suitable

Content / API
├── Headless CMS or custom editorial CMS
├── PostgreSQL
├── Search Engine
│   ├── Meilisearch / Typesense for medium scale
│   └── OpenSearch / Elasticsearch for very large scale
└── Object Storage + CDN

Optional
├── Map provider
├── Recommendation engine
├── Vector search
├── Image IIIF support
└── Analytics
```

Suggested service boundaries:

```text
Catalog Service
Editorial Service
Search Service
Media Service
Recommendation Service
Identity Service
Geography Service
Interaction Service
```

For smaller implementations, keep these as modular domains inside a modular monolith before introducing microservices.

---

# 26 — Reusability Rules

The reusable template must preserve:

- discovery hierarchy
- entity graph
- content-first UI
- visual rails
- mixed editorial layouts
- contextual recommendations
- search-first architecture
- immersive content capability

It should allow replacement of:

- brand
- taxonomy
- entity names
- card types
- colors
- fonts
- content source
- recommendation logic
- map provider
- visual media

---

# 27 — Customization Variables

```yaml
brand:
  name: ""
  logo: ""
  primaryColor: ""
  accentColor: ""
  fontSans: ""
  fontEditorial: ""

product:
  name: ""
  domain: ""
  primaryEntity: ""
  discoveryMode: true
  locationFeatures: false
  personalization: true
  immersiveMedia: true

navigation:
  primary: []
  secondary: []
  bottomMobile: []

taxonomy:
  entityTypes: []
  categories: []
  topics: []

homepage:
  modules: []

features:
  search: true
  favorites: true
  recommendations: true
  maps: false
  stories: true
  games: false
  timeline: false
  colorExplorer: false
  zoomViewer: true
```

---

# 28 — What Must NOT Be Copied

Do not copy:

- Google Arts & Culture logo
- Google visual identity
- Google proprietary icons/assets
- exact copywriting
- artwork images without rights
- museum partner assets without permission
- Google-specific product names
- Google account UI
- exact interactive experiments
- proprietary recommendation logic

Use the **design logic and structural patterns**, not protected expression or brand identity.

---

# 29 — Improvement Layer

A modern reusable implementation can improve the reference pattern with:

1. Clearer personalization controls.
2. Better visible filtering on large collections.
3. Saved custom collections / boards.
4. User-created learning paths.
5. Explicit source/provenance panels.
6. Stronger accessibility descriptions for visual assets.
7. Semantic relationship explorer.
8. AI-assisted question answering grounded only in catalog content.
9. Compare mode for two artifacts/entities.
10. Timeline + map combined explorer.
11. Better user-controlled recommendation explanations.
12. Reading progress for long stories.
13. Offline reading lists / PWA support.
14. Collections created by teachers or curators.
15. Multilingual editorial workflows.

---

# 30 — Quality Gates

Before calling an implementation complete:

## UX

- [ ] No discovery dead ends
- [ ] Search accessible within one action
- [ ] Mobile navigation reachable by thumb
- [ ] Related content exists on entity pages
- [ ] Empty states provide an onward path

## UI

- [ ] Content remains visually dominant
- [ ] Typography hierarchy is consistent
- [ ] Grid rhythm works across breakpoints
- [ ] Images preserve meaningful cropping
- [ ] No excessive card chrome

## Accessibility

- [ ] Keyboard usable
- [ ] Focus states visible
- [ ] Media alternatives available
- [ ] Reduced motion supported
- [ ] Map has accessible list equivalent

## Performance

- [ ] Responsive images
- [ ] Lazy loading below fold
- [ ] Blur/placeholder strategy
- [ ] Route-level code splitting
- [ ] Virtualization for very large result sets
- [ ] CDN-backed media

## Architecture

- [ ] Entity model is normalized
- [ ] Search indexing is asynchronous
- [ ] Content provenance is stored
- [ ] Media metadata is separate from editorial copy
- [ ] Recommendation layer is replaceable

---

# 31 — Master Build Prompt

Use the following prompt to recreate this **design pattern** for another product without copying Google Arts & Culture branding or proprietary content.

```text
You are a senior Product Designer, UX Architect, Frontend Architect, and Design Systems Engineer.

Build a production-ready immersive knowledge discovery platform inspired by the structural and interaction principles of large digital museum and cultural discovery products.

IMPORTANT:
Do not clone Google Arts & Culture.
Do not use its logo, branded assets, proprietary artwork, exact copy, proprietary experiments, or Google-specific visual identity.
Extract only reusable UX, content architecture, discovery patterns, visual hierarchy, and interaction logic.

PROJECT VARIABLES
-----------------
Brand name: {{BRAND_NAME}}
Industry: {{INDUSTRY}}
Primary entity type: {{PRIMARY_ENTITY}}
Audience: {{AUDIENCE}}
Primary color: {{PRIMARY_COLOR}}
Accent color: {{ACCENT_COLOR}}
Language: {{LANGUAGE}}
Direction: {{LTR_OR_RTL}}
Content source: {{CONTENT_SOURCE}}

PRODUCT GOAL
------------
Create a content-first exploration platform where users can enter through search, curated recommendations, topics, entities, stories, collections, geography, or interactive experiences and continuously discover related content without reaching dead ends.

INFORMATION ARCHITECTURE
------------------------
Create:
- Home
- Explore
- Search
- Collections
- Entity detail pages
- Story/editorial pages
- Topics/themes
- Places when relevant
- Favorites
- Optional Play/Experiences
- Optional Nearby

MODEL CONTENT AS A GRAPH
------------------------
Every entity must support meaningful relationships.
Examples:
- entity → creator
- entity → collection
- entity → category
- entity → place
- entity → date
- entity → story
- entity → related entities

HOME PAGE
---------
The homepage must be modular and editorial rather than a standard corporate landing page.
Include a configurable mix of:
- discovery prompt
- search
- surprise discovery
- featured editorial hero
- today's highlight
- recommendation rail
- collection explorer
- topic rail
- visual explorer
- interactive module
- editorial stories
- featured institution
- continue exploring

Do not repeat the same card grid for every section.
Alternate visual rhythms.

DESIGN LANGUAGE
---------------
Use a quiet neutral interface where media is the dominant visual element.
Use generous whitespace.
Avoid excessive borders, glassmorphism, gradients, and strong shadows.
Do not make it look like a SaaS dashboard.

Use three layout widths:
- reading width around 720px
- content width around 1200px
- immersive/full-bleed width

TYPOGRAPHY
----------
Use responsive clamp-based typography.
Keep body copy highly readable.
Editorial text should have generous line height and controlled measure.

COMPONENTS
----------
Implement reusable components for:
AppShell, TopBar, NavigationDrawer, BottomNavigation, SearchOverlay, SectionHeader, HeroFeature, Artwork/EntityCard, StoryCard, CollectionCard, PlaceCard, ExperienceCard, Carousel, HorizontalRail, ResponsiveGrid, FilterBar, FilterChip, MediaViewer, ZoomViewer, MetadataPanel, RelatedContentRail, StoryRenderer, StoryBlock, MapExplorer, TimelineExplorer, FavoriteAction, ShareAction, Skeleton, EmptyState, ErrorState.

RESPONSIVE RULES
----------------
Desktop:
- wide visual grids
- large media
- horizontal rails

Tablet:
- 2–3 column layouts
- reduced spacing

Mobile:
- single-column editorial flow
- swipeable rails
- full-screen search
- thumb-friendly controls
- optional bottom navigation
- partially visible next carousel item

ACCESSIBILITY
-------------
Meet WCAG AA.
Support keyboard navigation, visible focus, alt text, captions, reduced motion, 44px touch targets, accessible dialogs, accessible carousels, and non-map alternatives for geographic content.

PERFORMANCE
-----------
Use responsive images, lazy loading, CDN media, placeholders, route-level code splitting, caching, and virtualization for very large result sets.

TECH STACK
----------
Preferred:
- Next.js
- TypeScript
- React
- Tailwind CSS
- PostgreSQL
- Headless CMS or custom editorial CMS
- Meilisearch/Typesense for moderate scale or OpenSearch for very large catalogs
- object storage + CDN

ARCHITECTURE
------------
Prefer a modular monolith first with clear domains:
Catalog, Editorial, Search, Media, Recommendations, Identity, Geography, Interactions.
Only split into microservices when scale requires it.

CRITICAL UX RULE
----------------
No entity page may become a dead end.
Each detail surface must expose at least three meaningful onward discovery paths.

FINAL DELIVERABLE
-----------------
Generate:
1. final route map
2. information architecture
3. domain entity model
4. design tokens
5. responsive rules
6. component architecture
7. page-by-page section map
8. content model
9. database model recommendation
10. search architecture
11. accessibility requirements
12. loading/error/empty states
13. production-ready frontend implementation
14. realistic configurable sample content
15. README explaining customization

The result must feel like a premium, calm, editorial, image-led discovery product — not a visual clone of the reference.
```

---

# Reference Notes

Reference observations were made from the publicly accessible Google Arts & Culture website, including its Home, Explore, Play, Nearby, Collections, Search, editorial story, and artwork-discovery surfaces as visible in August 2026.

The reference changes dynamically, so exact homepage content is intentionally excluded from the reusable specification.

---

## Risheh Factory Classification

```yaml
factory:
  category: "Editorial / Discovery"
  complexity: "Advanced"
  contentDensity: "Very High"
  interactionLevel: "High"
  imageDependency: "Very High"
  backendComplexity: "High"
  searchImportance: "Critical"
  personalizationPotential: "High"
  bestFor:
    - museums
    - archives
    - knowledge platforms
    - universities
    - tourism
    - cultural products
```
