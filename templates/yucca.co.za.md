# Yucca.co.za — Hybrid B2B Commerce Template Specification

## 0. Template Metadata

```yaml
template:
  source_name: "Yucca Packaging"
  source_url: "https://yucca.co.za/"
  analyzed_at: "2026-08-22"
  category: "B2B Commerce"
  subcategory: "Industrial Packaging / Food Service / Wholesale Ecommerce"
  complexity: "enterprise"
  visual_style:
    - clean
    - editorial-product
    - industrial-premium
    - trust-led
    - conversion-focused
  suitable_for:
    - packaging suppliers
    - industrial distributors
    - food service suppliers
    - manufacturers
    - wholesalers
    - agriculture suppliers
    - B2B ecommerce
    - custom product manufacturers
  status: "ready"
```

---

# 1. Reference Snapshot

## Observed

- Business type: packaging supplier with online retail, wholesale/B2B, custom solutions, and sector-specific solutions.
- Main market surfaces: Food Service, Food Processing, Agriculture.
- Primary commercial paths:
  1. Quick online shop purchase.
  2. Bulk/enterprise inquiry.
  3. Custom packaging project.
  4. B2B portal for approved business customers.
- Home proposition is performance-led and industry-led rather than SKU-led.
- Product catalog includes category filters, materials, search, sorting, variants/sizes, pricing, promotions/new labels and stock states.
- Trust architecture uses certifications/standards, mission/vision, process explanation and sector-specific proof.
- Custom solutions page explains a structured concept-to-production workflow.
- About page uses timeline, team, company values, workspace, sustainability narrative and mission/vision.
- B2B portal positions itself around volume ordering, dedicated support, customer-specific storefront and volume pricing.

## Inferred

The core architecture is intentionally dual-mode:

```text
Transactional Buyer
→ Shop
→ Filter
→ Product
→ Cart / Purchase

Complex B2B Buyer
→ Industry / Solution
→ Proof / Process
→ Custom / Bulk Path
→ Contact / B2B Portal
```

The template should therefore never force all visitors into one funnel.

## Recommended

Use a clear early decision architecture:

```text
Need standard products? → Shop now
Need volume pricing? → B2B
Need custom packaging? → Start custom project
```

---

# 2. Template Identity

```text
Template Type: Hybrid B2B Commerce + Industry Solutions Website
Design Direction: Clean / Product-led / Industrial-premium / Trust-heavy
Primary Goal: Route buyers to the correct commercial path quickly
Content Density: High
Interaction Density: Medium-High
Trust Density: High
Commerce Density: High
```

### Best-fit industries

- Packaging
- Foodservice supplies
- Industrial components
- Lab/medical supplies
- Agricultural inputs
- Construction materials
- Hospitality supplies
- Printing
- Wholesale distribution
- OEM/custom manufacturing

---

# 3. Design DNA

## Visual personality

- Product-forward without looking like a commodity marketplace.
- Large photography makes physical products tangible.
- Industrial credibility is softened by lifestyle/editorial art direction.
- Strong white-space around sections keeps dense B2B information readable.
- Repeated trust surfaces reduce procurement anxiety.
- CTA language changes based on buying mode instead of using one universal action.

## Content rhythm

```text
Big promise
→ Industry paths
→ Product / solution proof
→ Company trust
→ Product merchandising
→ Standards
→ FAQ
→ Conversion
```

## Visual Keywords

```text
clean, confident, tactile, commercial, scalable, compliant,
industrial, modern, practical, product-led, trustworthy
```

---

# 4. Information Architecture

```text
/
├── /food-service/
├── /food-processing/
├── /agriculture/
├── /custom-solutions/
├── /shop/
│   ├── category routes / filtered states
│   └── product detail routes
├── /b2b-portal/
├── /about/
├── /faq/
├── /contact/
├── /privacy-policy/
└── /terms-conditions/
```

### Route Matrix

| Route | Purpose | Primary CTA | Content Type | Priority |
|---|---|---|---|---|
| `/` | Route buyer + establish trust | See products / Tell me more | Marketing + merchandising | P0 |
| `/shop/` | Transactional product discovery | Add / view product | Commerce | P0 |
| `/food-service/` | Industry solution | Order now | Industry landing | P0 |
| `/food-processing/` | Industry solution | Contact | Industry landing | P0 |
| `/agriculture/` | Industry solution | Contact | Industry landing | P0 |
| `/custom-solutions/` | Bespoke project conversion | Start project / Contact | Solution workflow | P0 |
| `/b2b-portal/` | Bulk customer conversion/login | Login / Apply / Contact | B2B account | P1 |
| `/about/` | Corporate credibility | Contact | Brand + company | P1 |
| `/faq/` | Objection handling | Contact / Shop | Support | P2 |
| `/contact/` | Lead conversion | Submit inquiry | Form | P0 |

---

# 5. Global Layout Architecture

```text
App Shell
├── Utility / commerce context
├── Header
│   ├── Logo
│   ├── Industry Navigation
│   ├── Shop
│   ├── Custom Solutions
│   ├── B2B
│   ├── Company
│   └── Cart / Account / Contact Actions
├── Main
│   ├── Marketing sections
│   ├── Commerce surfaces
│   └── Industry-specific sections
└── Footer
    ├── Industry links
    ├── Commerce links
    ├── Company links
    ├── Legal
    └── Contact
```

### Layout principles

- Full-bleed media for major hero/product storytelling.
- Contained copy and content grids.
- Product grids use predictable responsive columns.
- Trust sections may use logo/certification ribbons.
- Sticky purchase/filter controls recommended for commerce pages on large screens.

---

# 6. Page-by-Page Structure

## Homepage

```text
01 Header
02 Hero — category / industry positioning
03 Primary Industry Cards
04 Value / Capability Marquee or Feature Strip
05 Industry Solution Highlights
06 Company Promise
07 Mission + Vision
08 New Products
09 Standards / Certifications
10 FAQ Preview
11 Final CTA
12 Footer
```

### Homepage UX objective

Help the user answer three questions quickly:

1. Do you serve my industry?
2. Can I buy what I need immediately?
3. Can you handle custom/volume requirements?

---

## Industry Page

Example: Food Service

```text
01 Header
02 Industry Hero
03 Audience / Use-case Marquee
04 Operational Value Proposition
05 Featured Product Grid
06 Quality / Reliability Story
07 Process
08 Standards & Certifications
09 FAQ
10 CTA
11 Footer
```

Example: Food Processing

```text
01 Industry Hero
02 Use-case tags
03 Protection / Shelf-life Proposition
04 Technology / Partner Proof
05 Product or Capability Sections
06 Process
07 Compliance / Standards
08 Conversion CTA
```

### Industry page rule

The page must speak in the industry's language first, products second.

---

## Shop / PLP

```text
01 Commerce Header
02 Category Navigation
03 H1 + Search
04 Mobile Filter Toggle / Desktop Filter Rail
05 Category Filters
06 Material Filters
07 Sort
08 Active Filter Chips
09 Product Grid
10 Pagination / Load More
11 Custom Solutions Cross-sell
12 Footer
```

### Product card anatomy

```text
ProductCard
├── image
├── promotion/new/status badge
├── variant summary
├── product name
├── starting price
└── product link
```

### Recommended enhancements

- Stock state on card.
- Quick specs.
- Compare/select action for complex catalogs.
- Unit-vs-case pricing clarity.
- MOQ visibility.
- Delivery ETA for logged-in B2B customers.

---

## Product Detail Page

Recommended reusable architecture:

```text
01 Breadcrumb
02 Product Gallery
03 Product Name + Short Value Summary
04 Price / Price Range
05 Variant Selector
06 Quantity / Pack Information
07 Stock State
08 Add to Cart
09 B2B / Bulk Pricing CTA
10 Specs Table
11 Materials / Sustainability
12 Usage / Compatibility
13 Downloads / Compliance Documents
14 Related Products
15 Custom Branding CTA
16 FAQ
```

---

## Custom Solutions

Observed core concept: concept-to-creation / custom packaging process.

```text
01 Hero
02 Ideal Customer / Use-case Strip
03 Custom Packaging Proposition
04 Process Timeline
   ├── Brainstorm & Briefing
   ├── Planning & Quotation
   ├── Design & Approval
   ├── Sample Production / Review
   └── Order Confirmation & Management
05 Branding Process
06 Custom Capabilities
07 Material / Printing / Mould Options
08 Proof / Example Gallery
09 Project Inquiry Form
```

### Recommended improvement

Create a guided RFQ wizard:

```text
Industry
→ Product type
→ Quantity
→ Material
→ Branding required?
→ Existing artwork?
→ Delivery region
→ Timeline
→ Upload references
→ Contact details
```

---

## B2B Portal Landing

```text
01 Login / Register Context
02 B2B Value Proposition
03 Bulk Ordering Benefits
04 Personalized Storefront
05 Dedicated Consultant
06 Volume-based Pricing
07 Rewards / Account Benefits
08 Apply / Credit Application
09 Contact Sales
```

### Primary persona

Procurement manager / multi-branch operator / recurring-volume customer.

---

## About

```text
01 Brand Story Hero
02 Company Narrative
03 Timeline
04 Mission / Vision
05 Leadership / Team
06 Values
07 Workspace / Operations
08 Sustainability / Impact
09 Final Partnership CTA
```

---

# 7. Section Anatomy

## Industry Hero

```text
IndustryHero
├── category label
├── H1
├── supporting copy
├── primary action
├── optional secondary action
└── hero product / industry photography
```

## Certification Strip

```text
CertificationStrip
├── heading
├── description
└── certification items[]
    ├── logo/icon
    └── label
```

## Process Timeline

```text
ProcessTimeline
├── section heading
├── supporting copy
└── steps[]
    ├── sequence number
    ├── title
    ├── description
    └── optional media
```

---

# 8. UX & Conversion Architecture

## Journey A — Quick Buyer

```text
Home / Search
→ Shop
→ Category
→ Filter
→ Product
→ Cart
→ Checkout
```

## Journey B — Bulk Customer

```text
Home / Industry
→ Capability Proof
→ B2B Benefits
→ Portal / Sales Contact
→ Account / Quote
```

## Journey C — Custom Project

```text
Industry Problem
→ Custom Solution
→ Process Confidence
→ Requirements Capture
→ Quote / Consultation
```

## Journey D — Procurement Research

```text
Industry Page
→ Standards
→ Product Specs
→ Company / Compliance
→ Shortlist
→ Contact / Bulk Quote
```

## Conversion Principle

Do not make enterprise buyers pass through consumer checkout logic.

---

# 9. Navigation Architecture

### Desktop

Recommended mega navigation:

```text
Solutions
├── Food Service
├── Food Processing
└── Agriculture

Products
├── Coffee
├── Smoothies
├── Deli
├── Takeout
├── Cutlery
├── Bags & Pouches
└── Extras

Custom
├── Custom Packaging
├── Branding
└── RFQ

Business
├── B2B Portal
├── Bulk Orders
└── Credit Application

Company
├── About
├── Sustainability
├── FAQ
└── Contact
```

### Mobile

- Accordion navigation.
- Persistent Search/Shop entry.
- Cart icon always available.
- B2B and Custom actions visually separated from standard Shop path.

---

# 10. Design Tokens

Exact values should be treated as approximate unless measured directly.

```css
--color-bg: #ffffff; /* approximate */
--color-surface: #f4f2ed; /* approximate */
--color-text: #161616; /* approximate */
--color-muted: #6c6c67; /* approximate */
--color-primary: #1f3b2f; /* approximate */
--color-accent: #d7e054; /* approximate */
--color-border: rgba(20,20,20,.14);

--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 96px;
--space-10: 128px;

--radius-sm: 4px;
--radius-md: 10px;
--radius-lg: 18px;
--radius-pill: 999px;

--shadow-sm: 0 2px 8px rgba(0,0,0,.06);
--shadow-md: 0 10px 30px rgba(0,0,0,.10);
```

---

# 11. Typography System

| Token | Desktop | Mobile | Weight | Line Height | Usage |
|---|---:|---:|---:|---:|---|
| Display | 64–88 | 44–56 | 500–600 | 0.95–1.05 | Editorial hero |
| H1 | 52–72 | 38–48 | 500–600 | 1.0–1.1 | Page title |
| H2 | 40–56 | 30–38 | 500–600 | 1.05–1.15 | Major section |
| H3 | 28–36 | 24–30 | 500–600 | 1.15 | Cards/subsections |
| Body-lg | 20–24 | 18–20 | 400 | 1.45 | Lead text |
| Body | 16–18 | 16 | 400 | 1.55 | General copy |
| Small | 13–14 | 13 | 400–500 | 1.4 | Meta/specs |
| Label | 12–14 | 12–14 | 600 | 1.2 | Badge/filter |

### Type direction

- Contemporary grotesk/sans-serif recommended.
- Moderate heading width.
- Avoid overly technical typography; product photography provides industrial context.
- For RTL adaptation, preserve hierarchy but allow longer Persian headings and increase line-height slightly.

---

# 12. Color System

Recommended distribution:

```text
Neutral / white: 70%
Natural / dark brand tone: 15%
Bright accent: 10%
Semantic: 5%
```

Use accent colors selectively for:

- product state
- CTA emphasis
- section markers
- filter state
- sustainability cues

---

# 13. Grid & Spacing System

### Desktop

```text
Max page width: 1440–1600px
Content container: 1200–1320px
Grid: 12 columns
Gutter: 24–32px
Section spacing: 96–144px
```

### Tablet

```text
Grid: 8 columns
Gutter: 20–24px
Section spacing: 72–96px
```

### Mobile

```text
Grid: 4 columns
Side padding: 16–20px
Section spacing: 56–72px
```

### Commerce grid

```text
Desktop: 4 columns
Tablet: 2–3 columns
Mobile: 2 columns where practical, otherwise 1
```

---

# 14. Radius, Border & Shadow

- Product surfaces: subtle radius.
- Editorial imagery can be square/low-radius.
- Borders should remain quiet.
- Filters and form controls need visible focus rings.
- Avoid heavy ecommerce-card shadows; let product photography lead.

---

# 15. Iconography

Recommended:

- Lucide or custom thin-line icon set.
- 1.5–2px stroke.
- 16–24px common sizes.
- Functional icons for filter, cart, search, account, download, sustainability and shipping.
- Certification marks should use actual licensed/public marks only when authorized.

---

# 16. Imagery Direction

### Core media types

1. Product cut-outs / studio shots.
2. Food-in-use photography.
3. Industrial / production photography.
4. Packaging-in-context editorial imagery.
5. Sustainability / material closeups.

### Rules

- Product card: 1:1 or 4:5.
- Industry hero: 16:9 / 3:2 / full-bleed editorial.
- Process: mix detail shots and diagrams.
- Use neutral backgrounds for SKU clarity.
- Avoid decorative images that obscure product shape/specification.

---

# 17. Motion & Interaction

Recommended:

```text
Fast UI feedback: 120–180ms
Standard transition: 180–260ms
Section reveal: 300–450ms
```

Useful interactions:

- filter drawer
- active filter chips
- hover product image swap
- sticky PLP controls
- accordion FAQ
- process timeline reveal
- variant switching
- quantity stepper
- B2B quote drawer

Avoid motion that slows procurement/product discovery.

---

# 18. Component Inventory

## Layout

- Header
- UtilityBar
- MegaMenu
- MobileMenu
- Footer
- Container
- Section
- ProductGrid

## Commerce

- ProductCard
- ProductGallery
- ProductPrice
- VariantSelector
- QuantitySelector
- CartDrawer
- ProductFilterRail
- FilterDrawer
- ActiveFilterChip
- SortSelect
- SearchInput
- StockBadge
- PromotionBadge

## Marketing

- IndustryHero
- IndustryCard
- CapabilityStrip
- MissionVisionBlock
- ProcessTimeline
- CertificationStrip
- ProductCarousel
- SustainabilityStat
- TeamGrid
- Timeline
- FAQ
- CTASection

## B2B

- BulkQuoteCTA
- B2BBenefitCard
- RFQWizard
- CreditApplicationCTA
- AccountBenefitStrip

---

# 19. Component Anatomy

## ProductCard

```ts
interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  image: string;
  startingPrice?: number;
  currency?: string;
  variants?: string[];
  badge?: 'new' | 'promotion' | 'out-of-stock';
  material?: string;
  stockStatus?: 'in-stock' | 'low-stock' | 'out-of-stock';
}
```

## IndustryCard

```ts
interface IndustryCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  ctaLabel: string;
}
```

## ProcessStep

```ts
interface ProcessStep {
  order: number;
  title: string;
  description?: string;
  media?: string;
}
```

## CertificationItem

```ts
interface CertificationItem {
  name: string;
  logo?: string;
  description?: string;
  sourceUrl?: string;
}
```

---

# 20. Variants & States

All commerce UI must support:

- default
- hover
- focus-visible
- active
- disabled
- loading
- empty
- error
- success
- out-of-stock

Filters must also support:

- no results
- zero selected
- multiple selected
- reset state

---

# 21. Responsive Architecture

## Mobile 320–479

- compact header
- shop/search highly visible
- full-screen filters
- sticky Add to Cart on PDP
- industry sections stack vertically
- process timeline becomes vertical
- certification strip horizontally scrollable if necessary

## Large Mobile 480–767

- two-column product grid where image/content permits
- bottom-sheet filters
- RFQ form remains one column

## Tablet 768–1023

- 2–3 column commerce grid
- filter rail can collapse
- split content sections become 50/50 selectively

## Desktop 1024–1439

- mega navigation
- filter rail + product grid
- multi-column industry storytelling

## Large Desktop 1440+

- preserve content max-width
- allow full-bleed product/editorial photography
- never stretch body copy excessively

---

# 22. Accessibility

Target: WCAG 2.2 AA.

Must include:

- semantic H1–H6 structure
- labelled product filters
- accessible variant controls
- keyboard-operable cart and mega menu
- explicit stock state text
- price changes announced where dynamic
- form validation tied to labels
- visible focus
- sufficient text/CTA contrast
- no information encoded only by badge color
- reduced-motion support
- alt text distinguishing product type/variant where useful

---

# 23. Content Architecture

## Product

```ts
interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription?: string;
  description?: string;
  categories: string[];
  applications?: string[];
  materials?: string[];
  variants: ProductVariant[];
  media: MediaItem[];
  certifications?: CertificationRef[];
  sustainability?: SustainabilityData;
  relatedProductIds?: string[];
  customBrandingAvailable?: boolean;
}
```

## Industry

```ts
interface Industry {
  slug: string;
  name: string;
  hero: HeroContent;
  audiences: string[];
  painPoints: string[];
  benefits: string[];
  featuredProductIds: string[];
  process?: ProcessStep[];
  faqIds?: string[];
}
```

## CustomProjectLead

```ts
interface CustomProjectLead {
  industry?: string;
  productType?: string;
  estimatedQuantity?: number;
  materialPreference?: string;
  brandingRequired?: boolean;
  timeline?: string;
  deliveryRegion?: string;
  files?: string[];
  companyName: string;
  contactName: string;
  email: string;
  phone?: string;
}
```

## Certification

```ts
interface Certification {
  id: string;
  name: string;
  issuer?: string;
  scope?: string;
  evidenceUrl?: string;
}
```

---

# 24. SEO / GEO Structure

### Recommended URL clusters

```text
/industries/food-service
/industries/food-processing
/industries/agriculture
/products/<category>/<product>
/custom-packaging
/bulk-orders
/resources/<topic>
```

### Structured data

Where valid:

- Organization
- Product
- Offer
- BreadcrumbList
- FAQPage
- WebSite / SearchAction

### GEO / AI search

Create answer-first sections for questions such as:

- What packaging works for hot takeaway food?
- Which materials are compostable?
- What packaging works on automated food lines?
- Can packaging be custom branded?
- What is the MOQ for custom packaging?

Never generate certification claims without verified evidence.

---

# 25. Technical Frontend Architecture

Recommended architecture for a modern reusable implementation:

```text
Next.js / TypeScript
Commerce API or headless commerce
CMS for marketing + industry content
PostgreSQL for B2B/RFQ domain if custom backend exists
Search service for larger catalogs
Image CDN
Object storage for compliance/spec PDFs
```

```text
src/
├── app/
│   ├── (marketing)/
│   ├── shop/
│   ├── products/
│   ├── industries/
│   ├── custom-packaging/
│   ├── b2b/
│   └── api/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── commerce/
│   ├── marketing/
│   └── b2b/
├── domain/
│   ├── catalog/
│   ├── pricing/
│   ├── inventory/
│   ├── rfq/
│   └── customer/
├── content/
├── lib/
├── services/
└── types/
```

### Architecture rule

Do not tightly couple marketing content, product catalog and B2B account logic.

---

# 26. Reusability Rules

## Fixed in Template

- Dual B2B + ecommerce funnel architecture.
- Industry-first landing structure.
- Product discovery patterns.
- Custom RFQ flow.
- Trust/compliance surfaces.
- Responsive commerce behavior.

## Customizable

- Brand identity.
- Industries.
- Product taxonomy.
- Materials.
- Price model.
- B2B rules.
- Certification data.
- Delivery regions.
- Sustainability content.
- Ecommerce provider.

## Never hardcode

- prices
- stock
- certifications
- sustainability numbers
- company timeline
- employee names
- partner logos
- delivery claims
- cashback percentages
- legal/compliance claims

---

# 27. Customization Variables

```yaml
brand:
  name: ""
  logo: ""
  tone: "industrial-premium"
  colors: {}
  typography: {}

business:
  industries: []
  operating_regions: []
  currency: ""
  tax_mode: ""

navigation:
  primary: []
  commerce_categories: []
  b2b_links: []

commerce:
  enabled: true
  pricing_mode: "unit|pack|case|quote|mixed"
  inventory_enabled: true
  promotion_enabled: true
  search_enabled: true
  filters: []

b2b:
  enabled: true
  portal_url: ""
  account_application_enabled: true
  volume_pricing: true
  credit_application_enabled: false

custom_solutions:
  enabled: true
  rfq_fields: []
  file_upload_enabled: true

content:
  industries: []
  products: []
  certifications: []
  faqs: []
  process_steps: []

contact:
  email: ""
  phone: ""
  sales_email: ""

seo:
  default_title: ""
  default_description: ""
  organization_schema: {}

locale:
  default_locale: "en"
  supported_locales: []
  direction: "ltr"

feature_flags:
  sustainability: true
  rewards: false
  quick_order: false
  reorder: false
  compare_products: false
```

---

# 28. What Must NOT Be Copied

Do not copy:

- Yucca name/logo.
- exact brand colors if building for another brand.
- photography owned by Yucca.
- product images and product copy.
- named staff.
- proprietary timelines.
- client/partner relationships.
- certification claims without independent verification.
- sustainability statistics without evidence.
- exact pricing.
- exact reward/cashback mechanics.
- distinctive campaign copy or slogans.

Reuse only architectural patterns and generalized UX logic.

---

# 29. Improvement Layer

Recommended upgrades for the reusable version:

1. Add explicit buyer-path selector above the fold.
2. Add MOQ and lead-time metadata where applicable.
3. Add downloadable technical specifications on PDPs.
4. Add quote basket for enterprise procurement.
5. Add product comparison.
6. Add saved lists / favorites for recurring buyers.
7. Add reorder dashboard for B2B customers.
8. Add account-specific catalogs/pricing.
9. Add structured RFQ wizard.
10. Add product compatibility and lid/container pairing.
11. Add delivery-region/ETA transparency.
12. Add sustainability material filters.
13. Add compliance-document repository.
14. Add analytics events for `shop`, `bulk`, `custom`, and `b2b` funnels separately.
15. Add CRM integration for quote/custom leads.
16. Add ERP/inventory integration where stock is real-time.
17. Add role-based B2B accounts for procurement teams.

---

# 30. Quality Gates

A production implementation is not ready unless:

- [ ] Quick-shop and B2B/custom paths are visually distinct.
- [ ] Industry pages clearly explain business outcomes.
- [ ] Product filtering works on mobile and desktop.
- [ ] Variant/pack/price relationships are unambiguous.
- [ ] Stock states are accessible.
- [ ] Product schema contains only verified offers.
- [ ] Compliance claims are evidence-backed.
- [ ] RFQ submissions reach CRM or durable storage.
- [ ] Commerce errors have recovery states.
- [ ] Cart survives navigation/session as intended.
- [ ] Images are optimized and responsive.
- [ ] Product search meets expected performance.
- [ ] Accessibility reaches WCAG 2.2 AA target.
- [ ] Core Web Vitals are monitored.
- [ ] Analytics distinguishes retail, custom and B2B conversions.
- [ ] No fake metrics, logos, testimonials or certifications exist.

---

# 31. Master Build Prompt

## Purpose

Use the following prompt with a capable coding agent to build a new website inspired by the architectural principles of this template without cloning Yucca Packaging.

```text
You are a senior product designer, UX architect and frontend engineer.

Build a production-grade Hybrid B2B Commerce website for [BRAND_NAME].

REFERENCE ARCHITECTURE
Use the structural and UX principles of a modern industrial packaging supplier that combines:
- industry-specific solution pages,
- ecommerce product discovery,
- custom-project lead generation,
- bulk/B2B account flows,
- compliance/trust content,
- and editorial product storytelling.

DO NOT clone any source brand.
Do not copy logos, trademarks, photography, proprietary product data, pricing,
claims, certification statements, team members, copywriting, sustainability data,
or distinctive brand assets from any reference website.

PRIMARY PRODUCT PRINCIPLE
The website must support multiple buyer intents without forcing everyone through
one funnel.

Create these user journeys:

1. QUICK BUYER
Homepage → Shop → Filter/Search → Product → Cart → Checkout

2. BULK / PROCUREMENT BUYER
Homepage or Industry Page → Capability Proof → Bulk/B2B Benefits → Quote or Account

3. CUSTOM PROJECT BUYER
Industry Need → Custom Solution → Process → Requirements Wizard → Quote Request

4. RESEARCH / COMPLIANCE BUYER
Industry Page → Product Specs → Certifications / Documentation → Contact

INFORMATION ARCHITECTURE
Create:
- Homepage
- Industry index
- Industry detail pages
- Shop / PLP
- Product detail
- Custom Solutions
- RFQ workflow
- B2B landing / account entry
- About
- FAQ
- Contact
- Legal pages

HOMEPAGE
Build sections in this order:
1. Header
2. Hero with clear business promise
3. Three buyer-path actions: Shop / Bulk / Custom
4. Industry cards
5. Capability/value strip
6. Industry solution highlights
7. Company trust section
8. Featured/new products
9. Standards/compliance section
10. FAQ preview
11. Final CTA
12. Footer

INDUSTRY PAGE
Structure:
- Industry Hero
- Audience/use-case labels
- Pain points
- Operational outcomes
- Featured products
- Quality/reliability proof
- Process
- Compliance/standards
- FAQ
- Contextual CTA

SHOP / PLP
Implement:
- search
- categories
- material filters
- use-case filters if relevant
- sort
- active filter chips
- responsive product grid
- pagination or performant load-more
- empty state
- loading state
- mobile filter drawer

PRODUCT DETAIL
Include:
- gallery
- product title
- value summary
- price or quote mode
- variants
- unit/pack/case information
- stock state
- quantity
- add-to-cart when applicable
- bulk quote CTA
- specs
- materials
- sustainability information only when verified
- compliance documents only when verified
- related products
- custom branding CTA

CUSTOM SOLUTIONS
Build a guided RFQ wizard:
Industry → Product type → Quantity → Material → Branding → Timeline → Region → File Upload → Contact Details.

B2B
Support a separate enterprise path with:
- account application
- personalized pricing capability
- recurring/reorder architecture
- quote workflow
- optional credit application
- dedicated account contact architecture

DESIGN DIRECTION
Use a clean industrial-premium visual language:
- generous whitespace
- large tactile product photography
- precise grid
- confident sans-serif typography
- restrained borders
- minimal shadows
- natural brand palette plus one strong accent
- editorial full-bleed sections balanced with structured commerce UI

RESPONSIVE RULES
Mobile is not a scaled desktop.
Implement:
- compact mobile header
- prominent shop/search access
- full-screen or bottom-sheet filters
- sticky PDP purchase CTA
- touch targets >= 44px
- vertical process timelines
- responsive product grids
- no horizontal overflow

ACCESSIBILITY
Target WCAG 2.2 AA.
Implement:
- semantic structure
- keyboard navigation
- visible focus
- labelled filters/forms
- accessible product variants
- textual stock states
- ARIA live behavior for dynamic cart/price changes where needed
- reduced motion
- meaningful alt text

TECHNICAL ARCHITECTURE
Preferred stack:
- Next.js
- TypeScript
- Tailwind CSS
- Server Components where useful
- component-driven architecture
- commerce service separated from UI
- CMS/content layer separated from product catalog
- schema-validated data
- responsive image optimization

Organize code into:
app/
components/ui/
components/layout/
components/commerce/
components/marketing/
components/b2b/
domain/catalog/
domain/pricing/
domain/inventory/
domain/rfq/
services/
content/
types/

DATA INTEGRITY
Never fabricate:
- prices
- stock
- certifications
- customer logos
- sustainability metrics
- delivery claims
- testimonials
- regulatory claims

Use explicit placeholders or omit unsupported data.

SEO / GEO
Implement:
- semantic URLs
- Product schema only for real product data
- Offer schema only for real pricing/availability
- BreadcrumbList
- FAQPage where valid
- Organization schema with real data only
- answer-first content sections
- internal links between industries, products and custom solutions

PERFORMANCE
Optimize for Core Web Vitals.
Lazy-load non-critical imagery.
Avoid shipping large client bundles for static marketing content.
Use server-rendered catalog pages where appropriate.

DELIVERABLE
Produce a polished, reusable website system that can be rebranded by changing
content, tokens, industry configuration and catalog data without restructuring
the application.

The result should feel like a premium industrial supplier with excellent ecommerce,
not a generic Shopify theme and not a clone of any reference brand.
```

---

## Template Summary

```text
Industry Expertise
       ↓
Buyer Intent Routing
       ↓
Product / Capability Discovery
       ↓
Trust + Compliance
       ↓
Choose Commercial Path
   ↙        ↓         ↘
Shop      Bulk       Custom
 ↓          ↓          ↓
Order     Account      RFQ
```

This is the defining reusable pattern of the template.
