# Ralph Lauren Global — Reusable Luxury Commerce Template Specification

> Reference: `https://www.ralphlauren.global/`

This document extracts the reusable product, UX, visual, content, merchandising, and frontend architecture patterns behind a luxury editorial commerce experience inspired by Ralph Lauren Global. It is not a pixel clone and must not reproduce protected brand assets, proprietary copy, logos, campaign imagery, or trademarked identity.

---

## 01 — Reference Snapshot

**Template class:** Luxury Fashion / Premium E-commerce / Editorial Commerce

**Primary experience model:**

```text
Brand World
  ↓
Season / Story / Collection
  ↓
Curated Product Edit
  ↓
Category / PLP
  ↓
Product Detail
  ↓
Cart / Checkout
  ↓
Retention + Discovery
```

**Observed product surfaces:**
- Regional gateway / shipping-region selector
- Global homepage
- Men / Women / Kids / Home commerce trees
- Brand-world and sub-brand landing pages
- Seasonal editorial campaigns
- Collections and curated shops
- PLP / category listing
- PDP / product detail
- Search
- Sale
- Heritage / timeline / storytelling
- Store and flagship content
- Customer-service surfaces

The global entry point is localization-first: the site asks the user to select a shipping region, then routes into a country/language storefront. The commerce IA is large and multi-brand, with Men, Women, Kids, Home and Discover branches plus regional differences.

---

## 02 — Template Identity

**Reusable template name:** `Luxury Editorial Commerce`

Best suited for:
- Luxury fashion
- Premium apparel
- Jewelry
- Furniture / interiors
- Beauty
- Lifestyle brands
- High-end multi-category commerce

Core traits:
- Photography-led hierarchy
- Editorial storytelling mixed directly into commerce
- Low visual noise
- Strong brand-world framing
- Multi-collection merchandising
- High perceived value through spacing, typography and image scale

---

## 03 — Design DNA

### Visual characteristics
- Dominant full-bleed or near-full-bleed campaign photography
- Editorial modules mixed with shoppable modules
- Restrained text density above the fold
- Serif-led luxury expression paired with clean sans-serif utility UI
- Generous whitespace around premium collections
- Navigation designed to disappear behind the imagery rather than compete with it
- Strong use of visual rhythm: large image → compact copy → product grid → editorial image → curated products

### Emotional positioning
The interface should communicate:
- heritage
- confidence
- restraint
- craftsmanship
- timelessness
- aspiration

### Anti-patterns
Avoid:
- dashboard aesthetics
- loud SaaS gradients
- excessive pills and badges
- dense card borders
- oversized rounded corners everywhere
- excessive animation
- promotional clutter that cheapens the luxury positioning

---

## 04 — Information Architecture

Recommended reusable IA:

```text
/
├── men/
│   ├── new-arrivals/
│   ├── clothing/
│   ├── shoes-accessories/
│   ├── brands/
│   ├── collections/
│   └── sale/
├── women/
│   ├── new-arrivals/
│   ├── clothing/
│   ├── bags-accessories/
│   ├── shoes/
│   ├── brands/
│   ├── collections/
│   └── sale/
├── kids/
├── home/
├── discover/
│   ├── campaigns/
│   ├── collections/
│   ├── heritage/
│   ├── runway/
│   ├── journal/
│   └── stores/
├── search/
├── product/[slug]
├── cart/
├── checkout/
├── account/
└── customer-service/
```

For a smaller brand, collapse the brand hierarchy while preserving the same user mental model.

---

## 05 — Global Layout Architecture

```text
Announcement Bar
↓
Primary Header
  ├── Menu trigger / mega navigation
  ├── Brand mark
  ├── Search
  ├── Account
  └── Bag
↓
Page Surface
↓
Editorial / Commerce Modules
↓
Service / Trust Layer
↓
Footer
```

### Header behavior
- Transparent or image-aware on campaign hero
- Solid background after scroll where readability requires it
- Desktop: structured mega menu
- Mobile: full-screen navigation drawer
- Utility icons remain visually quiet

### Width strategy
Use both:
- full-bleed editorial media
- constrained text/product containers

Do not force all content into one global max-width.

---

## 06 — Page-by-Page Structure

### A. Regional Gateway

```text
Brand mark
Region heading
Continent groups
Country list
Language variants
Optional shipping / duties note
```

Requirements:
- searchable for very large country sets
- remembers last selected market
- supports locale + currency + tax/shipping configuration

### B. Homepage

Recommended composition:

```text
1. Announcement / service message
2. Full editorial hero
3. Primary CTA(s)
4. Seasonal campaign
5. Split editorial commerce block
6. Category or collection entry points
7. Luxury / premium-line feature
8. Secondary campaign
9. Product carousel or curated product rail
10. Home / lifestyle / alternative-category feature
11. Brand-story module
12. Service / delivery module
13. Footer
```

The current storefront strategy uses editorial modules such as seasonal workwear, back-to-school, luxury collections, pre-fall, Home and brand-specific features rather than a simple generic product grid.

### C. Department Landing Page

```text
Department Hero
New Season Story
Featured Shops
Category Tiles
Editorial Campaign
Curated Product Rail
Secondary Brand / Collection
Occasion or lifestyle edit
Footer
```

### D. Brand / Collection Landing Page

```text
Brand Identity Header
Campaign Hero
Collection Introduction
The Shops
Editorial Image Narrative
Curated Product Modules
Icon / heritage category
Lookbook / runway / editorial link
Related collections
```

### E. PLP

```text
Breadcrumb
Category title
Optional editorial intro
Subcategory navigation
Filter / Sort toolbar
Product grid
Inline editorial tile(s)
Pagination / Load more
SEO copy (low priority / bottom)
```

Recommended desktop grid: 3–4 columns depending on image ratio.
Recommended mobile grid: 2 columns, optionally 1 for high-fashion editorial product presentation.

### F. PDP

```text
Breadcrumb
Media Gallery
Product Information
  ├── name
  ├── price
  ├── color
  ├── size
  ├── fit / variant
  ├── add to bag
  └── fulfillment
Accordion Information
  ├── details
  ├── materials
  ├── size & fit
  ├── shipping / returns
  └── care
Complete the Look
Related Products
Recently Viewed
```

Desktop can use sticky product information while gallery scrolls.

### G. Editorial / Discover Story

```text
Hero image / video
Editorial title
Dek / introduction
Long-form media blocks
Text passages
Product callouts
Quote / pull text
Shop-the-story blocks
Related stories
```

### H. Heritage / Timeline

```text
Intro
Chronological milestones
Large historical imagery
Date / era markers
Editorial narrative
Contextual related links
```

### I. Store / Flagship Detail

```text
Store hero
Location + contact
Hours
Services
Store story / architecture
Image gallery
Map / directions
Nearby or related stores
```

---

## 07 — Section Anatomy

Every homepage / campaign module should use one of these patterns:

### Pattern 1 — Cinematic Hero
- large media
- eyebrow
- headline
- one-line supporting copy
- 1–2 CTAs

### Pattern 2 — Editorial Split
- 50/50 or 60/40 image/content split
- restrained text
- vertical center alignment

### Pattern 3 — Image + Caption Commerce
- editorial image
- small brand / collection label
- heading
- compact description
- CTA

### Pattern 4 — Product Rail
- section title
- optional copy
- horizontal or grid products

### Pattern 5 — Category Mosaic
- 2–4 visual tiles
- category title overlay or below
- minimal CTA

### Pattern 6 — Luxury Story Block
- oversized photography
- quote / editorial copy
- single action

---

## 08 — UX & Conversion Architecture

Luxury commerce should not behave like aggressive discount retail.

Primary conversion strategy:

```text
Inspiration
→ Desire
→ Context
→ Product Discovery
→ Product Confidence
→ Purchase
```

### UX principles
- Keep CTAs visible but understated.
- Let high-quality imagery perform persuasion.
- Reveal product detail progressively.
- Preserve browsing continuity from campaign to product.
- Keep filters accessible without visually dominating the page.
- Ensure returning users can bypass editorial discovery and shop directly.

### Important dual-path UX

```text
Editorial User → Campaign → Curated Products → PDP
Intent User    → Navigation/Search → PLP → PDP
```

Both paths must be first-class.

---

## 09 — Navigation Architecture

### Mega menu model

```text
Department
├── Featured
├── New Arrivals
├── Clothing
├── Accessories
├── Shoes
├── Brands
├── Collections
└── Editorial Feature
```

Allow one or two campaign images inside desktop mega navigation, but never overload it.

### Mobile
Use hierarchical drill-down navigation:

```text
Root → Department → Group → Category
```

Keep Search, Account and Bag accessible at the top level.

---

## 10 — Design Tokens

Suggested reusable token baseline:

```yaml
spacing:
  2xs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 24
  xl: 32
  2xl: 48
  3xl: 64
  4xl: 96
  5xl: 128

radius:
  none: 0
  subtle: 2
  medium: 6

container:
  reading: 760
  content: 1280
  commerce: 1440
  wide: 1600
```

Luxury pages should favor square or nearly-square geometry over heavily rounded UI.

---

## 11 — Typography System

Use a two-family system:

```text
Display / Editorial → premium serif
Utility / Navigation / Commerce → neutral sans-serif
```

Recommended hierarchy:

```text
Display XL: 64–88px desktop / 38–52px mobile
H1:         48–64px / 34–44px
H2:         34–48px / 28–36px
H3:         24–32px / 22–28px
Body L:     18–20px
Body:       15–17px
Utility:    12–14px
Micro:      11–12px
```

Use moderate-to-generous line height for editorial body copy and tighter line height for fashion headlines.

---

## 12 — Color System

Base reusable palette should remain brand-agnostic:

```yaml
background:
  canvas: warm-white
  inverse: near-black
  subtle: soft-neutral

text:
  primary: near-black
  secondary: muted-neutral
  inverse: white

border:
  subtle: light-neutral
  strong: dark-neutral
```

Brand accent should be configurable and used sparingly.

Do not copy Ralph Lauren's proprietary brand palette as a fixed template dependency.

---

## 13 — Grid & Spacing

### Desktop
- 12-column grid
- 24–32px gutters
- wide content canvas
- editorial modules may intentionally break grid constraints

### Tablet
- 8-column grid

### Mobile
- 4-column grid
- 16–20px page padding

### Vertical rhythm
Luxury layouts benefit from larger editorial separation:
- standard commerce section: 48–72px
- editorial section: 80–128px
- hero-to-next-section transition: 64–120px

---

## 14 — Radius / Border / Shadow

Use almost no decorative shadows.

Preferred:
- thin neutral borders
- subtle separators
- square imagery
- restrained focus rings

Shadows reserved for:
- floating mobile drawers
- popovers
- cart overlays
- modal surfaces

---

## 15 — Iconography

Use simple line icons for:
- search
- account
- bag
- chevron
- close
- filter
- favorite
- location

Requirements:
- consistent stroke
- no playful illustrative icon packs
- minimum 44×44 interactive touch target even if the visual icon is smaller

---

## 16 — Imagery

Imagery is a primary design system primitive.

Required media classes:
- campaign landscape
- portrait editorial
- product cutout
- product-on-model
- detail crop
- lifestyle
- heritage/archive
- interior / store

### Image rules
- preserve art direction per breakpoint
- use responsive `<picture>` sources
- prevent layout shift with aspect-ratio reservation
- prioritize hero image LCP
- lazy-load below fold
- support video poster fallback

---

## 17 — Motion

Motion should feel cinematic, not technological.

Use:
- gentle image fade
- restrained crossfade
- subtle scale on media hover
- soft menu transitions
- sticky header state transition
- carousel drag / snap

Avoid:
- bounce
- excessive parallax
- heavy scroll hijacking
- animated gradients

Honor `prefers-reduced-motion`.

---

## 18 — Component Inventory

```text
Global
├── AnnouncementBar
├── Header
├── MegaMenu
├── MobileNav
├── SearchOverlay
├── RegionSelector
├── Footer
└── LocaleSwitcher

Editorial
├── HeroCampaign
├── EditorialSplit
├── FullBleedMedia
├── StorySection
├── QuoteBlock
├── CategoryMosaic
├── CampaignCard
└── VideoHero

Commerce
├── ProductCard
├── ProductGrid
├── ProductRail
├── ProductGallery
├── ProductInfo
├── VariantSelector
├── SizeSelector
├── AddToBag
├── FilterDrawer
├── SortMenu
├── MiniCart
└── RecommendationRail

Utility
├── Breadcrumb
├── Accordion
├── Tabs
├── Drawer
├── Modal
├── Toast
├── Pagination
└── Skeleton
```

---

## 19 — Component Anatomy

### ProductCard

```text
Media
Optional secondary-hover image
Badge (only when necessary)
Brand / line
Product title
Price
Color information
Optional quick action
```

### CampaignCard

```text
Media
Eyebrow
Title
Short editorial copy
CTA
```

### ProductInfo

```text
Brand / collection
Product name
Price
Color
Variant selectors
Size
CTA
Fulfillment note
Secondary actions
```

---

## 20 — Variants & States

Every interactive component must specify:
- default
- hover
- focus-visible
- active
- disabled
- loading
- selected
- error where relevant

Commerce-specific states:
- sold out
- low stock
- unavailable size
- sale price
- newly added
- unavailable by market

---

## 21 — Responsive Architecture

### Hero
Desktop may use wide cinematic ratios. Mobile must receive a separately art-directed crop.

### Navigation
- desktop: mega menu
- mobile: hierarchical drawer

### Product grid
- desktop: 3–4 columns
- tablet: 2–3
- mobile: 2, with option for editorial 1-column modules

### PDP
Desktop:
```text
Gallery 60–68% | Sticky Info 32–40%
```

Mobile:
```text
Gallery
Product Info
Variants
CTA
Accordions
Recommendations
```

### Filter UX
Desktop can use toolbar/sidebar.
Mobile should use bottom sheet or full-height drawer.

---

## 22 — Accessibility

Required:
- semantic landmarks
- logical heading hierarchy
- visible keyboard focus
- adequate contrast over hero media
- text alternatives for commerce images
- accessible carousel controls
- form labels that do not rely on placeholders
- keyboard-operable mega menu
- reduced-motion handling
- announced cart updates
- accessible product-variant state

Target WCAG 2.2 AA.

---

## 23 — Content Architecture

Recommended content model:

```ts
Brand
Department
Category
Collection
Campaign
Story
Product
ProductVariant
EditorialBlock
Store
Market
Locale
Promotion
NavigationNode
```

### Campaign object

```ts
{
  id,
  title,
  eyebrow,
  body,
  desktopMedia,
  mobileMedia,
  theme,
  alignment,
  ctas[],
  relatedProducts[],
  startAt,
  endAt,
  markets[]
}
```

Content should be CMS-driven rather than hardcoded in page components.

---

## 24 — SEO / GEO

### SEO
- indexable department/category routes
- canonical market URLs
- hreflang across supported locales
- Product schema
- Breadcrumb schema
- Organization schema
- LocalBusiness schema for stores when appropriate
- optimized editorial metadata
- clean pagination strategy

### GEO / AI discovery
Create descriptive, explicit semantic copy around:
- materials
- product category
- craft
- fit
- use case
- collection context
- care
- brand story

Avoid image-only pages with no machine-readable context.

---

## 25 — Technical Architecture

Recommended modern implementation:

```text
Next.js / React
├── App Router
├── TypeScript
├── Server Components where useful
├── Edge/CDN image optimization
├── Headless CMS
├── Commerce API
├── Search provider
├── Analytics / experimentation
└── Localization layer
```

Suggested separation:

```text
src/
├── app/
├── components/
│   ├── commerce/
│   ├── editorial/
│   ├── navigation/
│   └── ui/
├── features/
│   ├── cart/
│   ├── catalog/
│   ├── checkout/
│   ├── localization/
│   └── search/
├── lib/
├── content/
├── styles/
└── types/
```

### Performance priorities
- LCP hero media
- image payload
- PLP product-card hydration
- mega-menu payload
- third-party scripts

Default to server-rendered catalog content and progressively enhance client interactions.

---

## 26 — Reusability Rules

This template must keep the following configurable:
- brand name
- logo
- serif and sans font pair
- palette
- departments
- categories
- product model
- market/locale rules
- campaign content
- editorial sections
- homepage ordering
- CTA language
- shipping/returns text
- footer/service links

Never bind reusable components to one brand name or one taxonomy.

---

## 27 — Customization Variables

```yaml
brand:
  name:
  logo:
  tone: heritage-luxury
  display_font:
  ui_font:
  primary_color:
  background_color:

commerce:
  currency:
  markets: []
  departments: []
  filters: []
  size_system:
  wishlist_enabled: true

homepage:
  hero:
  campaign_order: []
  editorial_density: medium
  product_rails: []

media:
  desktop_art_direction: true
  mobile_art_direction: true
  video_enabled: true
```

---

## 28 — What Must NOT Be Copied

Do not copy:
- Ralph Lauren wordmark or logos
- Polo Pony or other trademarks
- proprietary typefaces unless licensed
- campaign photography
- product photography
- model imagery
- exact marketing copy
- quotes
- named collections
- proprietary product data
- store photography
- exact visual compositions that amount to a direct page reproduction

Extract patterns; rebuild with original brand identity and content.

---

## 29 — Improvement Layer

A modern reusable implementation can improve on the reference pattern by adding:
- faster searchable region selector
- persistent market preference
- clearer accessible mega-menu semantics
- stronger mobile filter UX
- cleaner URL/state synchronization for PLP filters
- optional quick-view without blocking direct PDP access
- better reduced-motion support
- image-performance budgets per module
- CMS preview for campaign sequencing
- reusable experimentation slots
- structured product-story fields for SEO/GEO
- user-friendly size guidance
- resilient empty/error states

---

## 30 — Quality Gates

Before accepting an implementation:

### Visual
- [ ] imagery remains dominant without harming navigation readability
- [ ] typography feels premium and restrained
- [ ] editorial and commerce modules share one visual language
- [ ] no excessive rounded-card UI
- [ ] mobile art direction is intentional

### UX
- [ ] user can reach any core department in ≤3 navigation decisions
- [ ] search is globally accessible
- [ ] filters retain state
- [ ] variant errors are clear
- [ ] editorial routes always provide a path to products where appropriate

### Performance
- [ ] no avoidable CLS
- [ ] responsive media
- [ ] below-fold lazy loading
- [ ] controlled third-party scripts
- [ ] PLP does not hydrate unnecessary card logic

### Accessibility
- [ ] keyboard navigation tested
- [ ] menu semantics tested
- [ ] contrast verified on media overlays
- [ ] reduced motion tested
- [ ] product variants screen-reader accessible

### Content
- [ ] no fake testimonials, inventory or brand claims
- [ ] all campaign content CMS-configurable
- [ ] no reference-brand assets remain

---

## 31 — Master Build Prompt

```text
You are a senior Product Designer, UX Architect, Frontend Architect, and Commerce Engineer.

Build a production-grade luxury editorial commerce website using the architecture documented in this specification.

The design inspiration is the interaction model of premium fashion commerce experiences such as Ralph Lauren Global, but you MUST NOT create a pixel clone and MUST NOT reproduce any Ralph Lauren trademarks, logos, campaign copy, imagery, products, proprietary fonts, or protected visual assets.

OBJECTIVE
Create a premium, cinematic, editorial-first e-commerce experience where brand storytelling and product discovery exist in one coherent system.

EXPERIENCE PRINCIPLES
1. Photography is the dominant visual medium.
2. Commerce UI is quiet, precise, and subordinate to the brand world.
3. Editorial content must lead naturally into product discovery.
4. Users with purchase intent must still reach products immediately through navigation and search.
5. The experience must feel timeless rather than trend-driven.
6. Mobile must be art-directed, not simply shrunk from desktop.

REQUIRED SURFACES
- regional/locale gateway
- homepage
- department landing pages
- collection / campaign landing pages
- product listing pages
- product detail page
- search
- cart
- checkout shell
- account shell
- editorial/story page
- heritage/timeline page
- store detail page
- customer-service pages

HOMEPAGE
Compose the page from CMS-driven modules:
- cinematic campaign hero
- seasonal editorial campaign
- category or collection mosaic
- split editorial module
- curated product rail
- premium collection story
- secondary campaign
- lifestyle/home or alternate-category feature
- heritage/story module
- service layer

DESIGN SYSTEM
Use a configurable serif display family + neutral sans-serif UI family.
Use generous whitespace, mostly square geometry, minimal shadows, restrained borders and a neutral luxury palette.
Avoid SaaS visual language, oversized rounded cards, excessive gradients, noisy promotional badges and playful motion.

COMMERCE
Build configurable ProductCard, ProductGrid, ProductGallery, ProductInfo, VariantSelector, SizeSelector, FilterDrawer, SortMenu, MiniCart and RecommendationRail components.
PLP filters must sync with URL state.
PDP desktop should support a media-forward gallery with sticky product information; mobile should stack media, product information and actions cleanly.

NAVIGATION
Create a desktop mega menu with category hierarchy and optional editorial feature imagery.
Create a hierarchical full-screen mobile navigation drawer.
Search, account and bag must remain globally reachable.

CONTENT MODEL
Model Brand, Department, Category, Collection, Campaign, Story, Product, ProductVariant, EditorialBlock, Store, Market, Locale and Promotion as independent entities.
Do not hardcode campaigns or navigation structures inside components.

RESPONSIVE
Desktop: 12-column grid.
Tablet: 8-column grid.
Mobile: 4-column grid.
Use separate media crops where required.
Product grid should adapt from 3–4 columns desktop to 2 columns mobile.

ACCESSIBILITY
Meet WCAG 2.2 AA.
Implement visible focus, semantic landmarks, accessible mega menus, accessible product variants, announced cart updates, proper image alternatives and prefers-reduced-motion support.

PERFORMANCE
Optimize hero LCP aggressively.
Reserve image aspect ratios.
Lazy-load non-critical media.
Use responsive image sources.
Avoid unnecessary client hydration.
Set a performance budget for third-party scripts.

SEO / GEO
Implement clean crawlable category URLs, canonical tags, hreflang, Product schema, Breadcrumb schema, Organization schema and store structured data where relevant.
Ensure product/material/craft/fit/use-case information is represented as semantic text and structured content rather than imagery only.

CODE QUALITY
Use TypeScript, modular feature boundaries, reusable components, strict types, responsive tokens and data-driven layouts.
Keep editorial components separate from commerce components while sharing common UI primitives.
No fake data should be presented as real business information.

DELIVERABLE
Produce a complete reusable template that can be rebranded by replacing configuration, content, media and commerce data without rewriting core layout or component logic.
```

---

## Reference Notes

The reference site currently exposes a global shipping-region selector with broad continent/country coverage, market-specific storefronts, a large commerce taxonomy and a Discover layer containing current collections, brand worlds and editorial storytelling. Current surfaced homepage modules include seasonal Polo edits, Back to School, luxury collection features, Pre-Fall collections, Home, Double RL and related campaign-led merchandising. The site also includes heritage/timeline and flagship-store storytelling surfaces.

**Factory rule:** preserve the system thinking; replace the identity.
