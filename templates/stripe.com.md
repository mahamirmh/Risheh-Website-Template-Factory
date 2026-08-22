# Stripe.com — Reusable Website Template Specification

> Reference: https://stripe.com/
> Template family: Enterprise SaaS / Fintech / Developer Platform / Product Marketing
> Status: Production-grade reference extraction
> Goal: Reuse Stripe-like information architecture, product storytelling, developer experience, enterprise trust patterns, and conversion logic without copying Stripe branding, proprietary copy, illustrations, customer claims, metrics, or assets.

---

## 01. Reference Snapshot

Stripe is not structured like a single-product SaaS website. It behaves as a **multi-product financial infrastructure platform** with several simultaneous user journeys:

- Founder / startup evaluating a payment stack
- Enterprise buyer evaluating reliability, economics, compliance, and scale
- Product leader evaluating revenue infrastructure
- Developer evaluating APIs, SDKs, integration effort, and documentation
- Platform / marketplace evaluating embedded finance and Connect
- Finance / operations teams evaluating Billing, Tax, Invoicing, Revenue Recognition, Sigma, and Data Pipeline
- International business evaluating localization, payment methods, currencies, regulation, and global expansion

The reusable principle is therefore:

```text
Broad Platform Promise
        ↓
Business Model / Problem Recognition
        ↓
Relevant Product Cluster
        ↓
Interactive Product Proof
        ↓
Business Outcome + Technical Credibility
        ↓
Customer / Infrastructure Proof
        ↓
Implementation Path
        ↓
Start Now / Contact Sales
```

This template should be reused for:

- Fintech platforms
- SaaS infrastructure companies
- API-first products
- AI infrastructure platforms
- Cloud platforms
- Cybersecurity platforms
- Enterprise developer tools
- Multi-product B2B SaaS
- Automation platforms
- Data platforms

---

## 02. Template Identity

### Archetype

**Enterprise Product Platform + Developer-first SaaS**

### Core traits

- Broad top-level promise
- Large multi-product taxonomy
- Multiple audience entry points
- Strong technical credibility
- Heavy use of live product UI demonstrations
- Outcome-led messaging
- Enterprise trust and compliance blocks
- Developer documentation as a first-class product surface
- Strong localization and regionalization
- Dual conversion path: self-serve and sales-led

### Primary UX objective

Help different users quickly answer:

1. Is this platform relevant to my business model?
2. Which product or combination of products do I need?
3. Can I trust it technically and operationally?
4. How difficult is implementation?
5. Can I start now or do I need sales support?

---

## 03. Design DNA

### Visual character

- Technical but premium
- Bright surfaces with deep dark sections where contrast is useful
- Strong use of gradients and luminous accent treatments
- Dense but highly organized information
- Product UI shown as proof instead of decorative illustration
- Large display typography
- Precise spacing and alignment
- Strong visual hierarchy through section background transitions

### Emotional tone

- Confident
- Infrastructure-grade
- Modern
- Precise
- Capable at global scale
- Friendly to developers
- Credible to enterprise buyers

### Reusable rule

The design should communicate **complexity under control**.

Do not reduce the page to a generic SaaS landing page with three cards and a single CTA.

---

## 04. Information Architecture

Recommended reusable sitemap:

```text
/
├── /products
│   ├── /payments
│   ├── /checkout
│   ├── /payment-links
│   ├── /billing
│   ├── /invoicing
│   ├── /tax
│   ├── /connect
│   ├── /terminal
│   ├── /radar
│   ├── /identity
│   ├── /issuing
│   ├── /treasury
│   ├── /data
│   └── /[product]
│
├── /solutions
│   ├── /enterprise
│   ├── /startups
│   ├── /ecommerce
│   ├── /saas
│   ├── /platforms
│   ├── /marketplaces
│   ├── /global-businesses
│   ├── /ai
│   ├── /retail
│   └── /[industry-or-model]
│
├── /developers
│   ├── /docs
│   ├── /api-reference
│   ├── /sdks
│   ├── /integrations
│   ├── /changelog
│   ├── /status
│   └── /developer-blog
│
├── /customers
│   └── /[case-study]
│
├── /pricing
├── /resources
│   ├── /guides
│   ├── /blog
│   ├── /reports
│   ├── /events
│   └── /community
│
├── /partners
├── /company
│   ├── /about
│   ├── /careers
│   ├── /newsroom
│   └── /contact
│
├── /support
├── /login
└── /signup
```

### IA principle

Organize the site through **three overlapping taxonomies**:

1. **Products** — what the platform provides
2. **Use cases / business models** — why a user needs it
3. **Developers / implementation** — how it is integrated

This prevents a large product catalog from becoming impossible to navigate.

---

## 05. Global Layout Architecture

```text
Global Announcement / Context Bar (optional)
        ↓
Primary Header
        ↓
Mega Menu Layer
        ↓
Page Hero
        ↓
Primary Narrative
        ↓
Product / Outcome Demonstrations
        ↓
Trust / Proof
        ↓
Technical / Operational Depth
        ↓
Related Products / Resources
        ↓
Final Conversion Block
        ↓
Large Taxonomy Footer
```

### Header

Recommended desktop navigation:

```text
Logo
Products
Solutions
Developers
Resources
Pricing
----------------
Sign in
Contact sales
Start now
```

Rules:

- `Products`, `Solutions`, `Developers`, and `Resources` open structured mega menus.
- `Pricing` stays directly accessible.
- Self-serve CTA and sales CTA are both persistent.
- Enterprise navigation should never hide developer entry points.

### Footer

Footer should function as a secondary sitemap, grouped by:

- Products
- Solutions
- Developers
- Integrations / partners
- Resources
- Company
- Support
- Legal / compliance
- Locale / language

---

## 06. Page-by-Page Structure

### A. Homepage

Recommended structure:

```text
01 Global Hero
02 Primary CTA Pair
03 Product / UI Demonstration
04 Business Model Solution Cluster
05 Multi-product Platform Story
06 Product Capability Showcases
07 Global Scale / Reliability Proof
08 Enterprise Section
09 Customer Story
10 Developer Integration Entry
11 Current News / Product Updates
12 Final CTA
13 Deep Footer
```

#### Hero anatomy

```text
Context / platform signal
Headline
Outcome-oriented supporting copy
Primary CTA
Secondary CTA
Optional signup shortcut
Interactive product visual
```

Do not use a generic hero stock image.

The hero visual should demonstrate the platform itself: dashboard, checkout, terminal, analytics, workflow, API output, or embedded UI.

---

### B. Product Overview Page

Example reusable structure for a payment or infrastructure product:

```text
Product Label
Outcome-led H1
Primary CTA + Sales CTA
Interactive Product Demo
Key Business Outcomes
Anchor Navigation
Capability Sections
Sub-product Modules
Global / Scale Capabilities
Security + Reliability
Customer Evidence
Technical Integration
Pricing Preview
Related Resources
Final CTA
```

Product pages should combine:

- business value
- visual UI proof
- technical implementation
- enterprise credibility

A good product page is not just a feature list.

---

### C. Product Feature Index

For complex products, create a feature inventory page grouped by user task:

```text
Accept
Process
Optimize
Manage
Analyze
Secure
Integrate
Support
```

Use category labels and deep anchors so technical buyers can scan rapidly.

---

### D. Use Case / Industry Page

```text
Use-case Label
Outcome-focused Hero
Audience-specific CTA
Problem Context
Workflow / Business Model Explanation
Relevant Product Combination
Product Demonstrations
Business Outcomes
Operational / Compliance Benefits
Case Study
Related Products
Resources
Final CTA
```

Key principle:

**Do not explain the whole product catalog. Compose a solution from selected platform capabilities.**

---

### E. Enterprise Page

```text
Enterprise Hero
Strategic Outcome Statement
Contact Sales CTA
Enterprise Logos / Proof
Scale Metrics
Platform Architecture
Global Reach
Reliability
Security / Compliance
Customization
Migration / Professional Services
Customer Stories
Analyst / Industry Recognition
Sales CTA
```

Enterprise buyers need evidence around:

- uptime
- risk
- compliance
- migration
- support
- cost optimization
- organizational scale

---

### F. Pricing

Pricing should support a multi-product platform, not a single SaaS card layout.

Recommended architecture:

```text
Pricing Hero
Standard vs Custom Pricing
Product Category Navigation
Product Pricing Sections
Included Capabilities
Variable / Usage Pricing
Enterprise / Volume Pricing
FAQs
Contact Sales
```

Recommended category grouping:

```text
Core Transactions
Money Movement
Revenue Automation
Risk & Identity
Data & Analytics
Developer / Workflow Products
```

Use sticky anchor navigation for long pages.

---

### G. Developer Landing

```text
Developer Hero
Get Started CTA
Quickstart Paths
Code Example
SDK / Language Selector
API Principles
Integration Options
Testing Tools
CLI / Developer Tools
API Reference
Changelog
Status
Community / Blog
```

Developer UX must be treated as part of the product, not a documentation afterthought.

---

### H. Documentation

Recommended docs shell:

```text
Top Developer Header
Global Search
Left Sidebar Navigation
Main Documentation Content
On-this-page TOC
Code / Result Panel
Language Selector
Feedback Controls
Previous / Next
```

Support:

- quickstarts
- concepts
- how-to guides
- integration guides
- API references
- architecture guides
- migration guides
- troubleshooting

---

### I. Customer Story

```text
Customer + Outcome Headline
Business Context
Key Metrics
Products Used
Challenge
Solution Architecture
Implementation
Measured Results
Quote
Related Products
Related Stories
CTA
```

Separate **verified metrics** from editorial claims.

---

## 07. Section Anatomy

Every major section should follow one of these patterns.

### Outcome + Demo

```text
Eyebrow
Headline
Supporting copy
CTA
Interactive UI
```

### Outcome + Metric

```text
Headline
Short explanation
Large measurable metric
Evidence / source context
```

### Capability Grid

```text
Section Intro
3–6 Capabilities
Each capability:
  title
  explanation
  product UI / diagram
  deep link
```

### Technical Trust Block

```text
Reliability
Security
Compliance
Scale
Developer tooling
```

### Product Combination

```text
Business Goal
Required Platform Capabilities
How Products Work Together
Integration Path
```

---

## 08. UX & Conversion Architecture

Stripe-like websites should support at least three conversion modes.

### Self-serve

```text
Understand value
→ Start now
→ Account creation
→ Quickstart
→ First successful implementation
```

### Sales-led

```text
Enterprise problem
→ Platform proof
→ Customer evidence
→ Contact sales
→ Qualified sales conversation
```

### Developer-led

```text
Technical curiosity
→ Docs / API reference
→ Integration path
→ Sandbox / test mode
→ Product adoption
```

### CTA hierarchy

Primary:
- Start now
- Get started

Secondary:
- Contact sales

Contextual:
- See docs
- Try demo
- View pricing
- Read customer story
- Explore feature

Do not use five equal CTA styles.

---

## 09. Navigation Architecture

### Mega menu principles

Mega menu must reveal platform structure without overwhelming users.

Recommended product mega menu:

```text
Featured
  Core product
  New / strategic products

Payments
  Product A
  Product B

Revenue Automation
  Product C
  Product D

Financial Infrastructure
  Product E
  Product F

Risk & Data
  Product G
  Product H

See all products
```

Solutions menu:

```text
By company stage
By business model
By industry
By strategic objective
```

Developer menu:

```text
Documentation
API Reference
SDKs
Status
Changelog
Developer Blog
Tools
```

Mobile should use drill-down navigation with clear back behavior.

---

## 10. Design Tokens

Use semantic tokens rather than copying Stripe values.

```yaml
color:
  background:
    primary: neutral-light
    secondary: subtle-neutral
    inverse: deep-ink
  text:
    primary: near-black
    secondary: muted-neutral
    inverse: white
  accent:
    primary: brand-electric
    secondary: brand-spectrum
  border:
    subtle: translucent-neutral

spacing:
  1: 4
  2: 8
  3: 12
  4: 16
  5: 24
  6: 32
  7: 48
  8: 64
  9: 96
  10: 128

radius:
  sm: 6
  md: 10
  lg: 16
  xl: 24

shadow:
  surface: soft-elevation
  product-ui: medium-elevation
```

Use a consistent token layer across marketing and documentation surfaces.

---

## 11. Typography System

Use a highly legible modern sans-serif family.

Recommended hierarchy:

```text
Display XL: 64–80 desktop / 42–52 mobile
Display L: 48–64 / 36–44
H1: 44–56 / 34–42
H2: 32–44 / 28–34
H3: 24–32 / 22–26
Body L: 18–20
Body: 16–18
Small: 14–15
Code: 13–15 monospace
```

Characteristics:

- tight headline line-height
- slightly negative tracking for large display text
- highly readable body text
- monospace only for technical surfaces

---

## 12. Color System

Reusable principle:

Use a **neutral foundation + controlled high-energy brand spectrum**.

Recommended categories:

```text
Neutral light surfaces
Deep ink technical sections
Primary brand accent
Secondary gradient spectrum
Semantic success / warning / danger
Data visualization palette
```

Avoid random gradient decoration.

Gradients should indicate:

- platform energy
- transition
- interaction
- product state
- section identity

---

## 13. Grid & Spacing

Desktop:

```text
Max content width: ~1200–1280px
Wide visual width: up to ~1440px
Columns: 12
Gutters: 24–32px
Outer margin: responsive
```

Long product pages should alternate between:

- constrained narrative content
- wide product visualization
- full-bleed background sections

Maintain strong vertical rhythm.

---

## 14. Radius / Border / Shadow

Marketing shell:

- minimal borders
- moderate radius
- high-quality soft shadows

Product mockups:

- stronger elevation
- nested panels
- precise 1px separators

Documentation:

- flatter
- utilitarian
- stronger grid discipline

Do not apply oversized rounded cards to every section.

---

## 15. Iconography

Use:

- geometric line icons
- small product glyphs
- state icons
- arrows for directional navigation
- code / terminal symbols where relevant

Icons should clarify category and action, not decorate paragraphs.

---

## 16. Imagery

Primary visual asset should be **product UI**.

Recommended imagery hierarchy:

1. Real product interface
2. Interactive prototype
3. Technical diagram
4. Data visualization
5. Customer photography where useful
6. Editorial illustration

Avoid generic SaaS 3D illustrations unless the brand explicitly requires them.

---

## 17. Motion

Motion principles:

- reinforce cause-and-effect
- visualize transactions or data flow
- demonstrate product behavior
- help orient users during section transitions

Recommended motion:

- UI state changes
- data transitions
- animated payment / workflow flows
- subtle gradient movement
- card / panel transitions
- scroll-linked product demos where performance permits

Respect `prefers-reduced-motion`.

---

## 18. Component Inventory

### Global

- Header
- MegaMenu
- LocaleSwitcher
- Footer
- AnnouncementBar
- CTAButton
- LinkArrow

### Marketing

- Hero
- ProductDemo
- ProductCluster
- CapabilityBlock
- FeatureGrid
- OutcomeCard
- MetricBlock
- LogoCloud
- Testimonial
- CustomerStoryCard
- RecognitionCard
- TrustBlock
- SecurityBlock
- PricingSummary
- ResourceCard
- FinalCTA

### Product visualization

- CheckoutDemo
- DashboardDemo
- TerminalDemo
- AnalyticsDemo
- WorkflowDemo
- DataChart
- CodeSnippet
- APIRequestExample

### Developer

- DocsSidebar
- DocsSearch
- CodeTabs
- LanguageSelector
- APIEndpoint
- Callout
- StepList
- OnPageTOC
- ChangelogItem

---

## 19. Component Anatomy

### ProductDemo

```text
Container
├── Optional product label
├── Interface chrome
├── Functional UI state
├── Contextual annotation
└── Optional interaction controls
```

### CapabilityBlock

```text
Eyebrow
Headline
Description
CTA
Visual
Optional metric
```

### MetricBlock

```text
Metric Value
Metric Label
Context / Methodology
Optional Source
```

Never present invented data.

---

## 20. Variants & States

Buttons:

```text
primary
secondary
inverse
text-link
loading
disabled
```

Cards:

```text
light
inverse
interactive
metric
customer
resource
product
```

Product demos:

```text
static
animated
interactive
code-assisted
```

All interactive components need hover, focus, active, disabled, and error states where applicable.

---

## 21. Responsive Architecture

### Desktop

- large visual compositions
- multi-column navigation
- split narrative / demo layouts
- sticky anchor navigation where useful

### Tablet

- reduce visual density
- preserve hierarchy
- transform 3–4 column grids to 2 columns

### Mobile

- stack narrative before demos
- horizontal-scroll only where semantically useful
- use accordion or drill-down mega menu replacement
- prevent code snippets from breaking viewport
- maintain strong CTA visibility

Critical rule:

Do not simply shrink desktop product demos. Redesign complex demos for mobile.

---

## 22. Accessibility

Minimum standard:

- WCAG 2.2 AA target
- semantic headings
- keyboard-accessible mega menus
- visible focus states
- accessible code tabs
- sufficient contrast
- reduced motion support
- meaningful alt text
- text alternatives for charts and diagrams
- no critical information exclusively encoded by color

Interactive demos must remain understandable without animation.

---

## 23. Content Architecture

Use a structured content model.

```yaml
Product:
  name
  slug
  category
  short_description
  value_proposition
  capabilities[]
  demos[]
  integrations[]
  pricing_reference
  docs_reference
  related_products[]
  customer_stories[]

Solution:
  audience
  business_problem
  outcomes[]
  products[]
  case_studies[]
  resources[]

CustomerStory:
  customer
  industry
  challenge
  solution
  products[]
  results[]
  metrics[]
  quote

Resource:
  type
  title
  description
  topic
  related_products[]
```

This relational model enables automatic cross-linking.

---

## 24. SEO / GEO

### SEO

Create dedicated pages for:

- each product
- each major feature
- each use case
- each industry
- each technical integration concept
- pricing
- guides and customer stories

Use:

- Product structured data where appropriate
- BreadcrumbList
- Organization
- Article
- FAQ only when actual FAQs exist

### GEO / AI discoverability

Pages should clearly answer:

- What is this product?
- Who is it for?
- What problems does it solve?
- How does it work?
- What products work together?
- What are integration options?
- What are pricing principles?

Avoid vague branding language without factual explanation.

---

## 25. Technical Architecture

Recommended implementation:

```text
Next.js / React
TypeScript
Design token layer
Headless CMS
Structured product content
MDX or content platform for docs
Search index for docs/resources
Analytics + experimentation
Feature flags
Localization system
Image optimization
Edge/CDN delivery
```

Suggested architecture:

```text
apps/
├── marketing
├── docs
└── shared-preview

packages/
├── ui
├── tokens
├── content-schema
├── analytics
├── seo
└── localization
```

For smaller projects, keep one Next.js app but preserve these logical boundaries.

---

## 26. Reusability Rules

Preserve:

- platform-level IA
- dual self-serve / enterprise funnels
- business-model navigation
- developer-first product proof
- interactive product demonstrations
- deep footer taxonomy
- strong technical trust sections

Replace:

- brand identity
- colors
- typography
- copy
- product names
- UI screenshots
- metrics
- logos
- customer stories
- compliance claims

---

## 27. Customization Variables

```yaml
brand:
  name:
  logo:
  primary_color:
  accent_gradient:
  font_family:
  tone:

platform:
  category:
  core_promise:
  products: []
  business_models: []
  industries: []
  regions: []

conversion:
  self_serve_enabled: true
  sales_led_enabled: true
  primary_cta:
  secondary_cta:

trust:
  metrics: []
  certifications: []
  customer_stories: []

technical:
  api_available:
  docs_url:
  sdk_languages: []
  status_page:
```

---

## 28. What Must NOT Be Copied

Do not copy:

- Stripe name or logo
- Stripe proprietary illustrations
- exact Stripe UI screenshots
- exact marketing copy
- exact gradients or brand marks
- customer logos without permission
- customer quotes
- performance numbers
- uptime claims
- payment-volume claims
- compliance claims unless verified for the new business
- proprietary product names

The template extracts **architecture and interaction logic**, not intellectual property.

---

## 29. Improvement Layer

When adapting this template, improve the reference model where appropriate:

### 1. Reduce cognitive load

A platform with many products can overwhelm users. Add:

- guided product finder
- role-based entry points
- recommended solution bundles

### 2. Explain platform composition

Make it obvious which products are:

- standalone
- complementary
- required dependencies

### 3. Improve comparison UX

Add product comparison where users might confuse adjacent offerings.

### 4. Make pricing relationships clearer

For multi-product pricing, show:

- base fees
- usage variables
- optional modules
- enterprise custom pricing

### 5. Preserve developer speed

Every major product page should expose:

- docs link
- API reference
- quickstart
- integration effort estimate where factual

---

## 30. Quality Gates

Before this template is considered production-ready:

### IA

- [ ] Product taxonomy is understandable
- [ ] Solutions taxonomy is distinct from products
- [ ] Developer paths are first-class
- [ ] Footer mirrors platform depth

### UX

- [ ] Self-serve and sales-led paths both work
- [ ] Users can identify the right product quickly
- [ ] Product demos communicate value without reading long copy
- [ ] Mobile navigation remains manageable

### Content

- [ ] No fake statistics
- [ ] No fake customer logos
- [ ] No unverified compliance claims
- [ ] Product relationships are explicit

### UI

- [ ] Consistent token usage
- [ ] Responsive product demos
- [ ] Strong accessibility
- [ ] Motion has reduced-motion fallback

### Engineering

- [ ] Core Web Vitals monitored
- [ ] Images optimized
- [ ] Interactive demos lazy-loaded
- [ ] Docs/search performance validated
- [ ] Localization architecture tested

---

## 31. Master Build Prompt

Use the following prompt with a coding/design agent to build a new website based on this reusable architecture.

```text
You are a senior product designer, UX architect, frontend architect, and design systems engineer.

Build a production-grade website for [BRAND_NAME], a [PLATFORM_CATEGORY] company.

The site should use the structural and UX principles of a world-class multi-product developer platform, but it must NOT copy Stripe branding, text, imagery, illustrations, proprietary UI, metrics, customer logos, product names, or visual identity.

OBJECTIVE
Create a premium enterprise SaaS / infrastructure website that successfully serves:
- self-serve users
- enterprise buyers
- technical decision makers
- developers
- operations / finance users where relevant

CORE UX MODEL
Broad Platform Promise
→ User identifies business problem or business model
→ Relevant product cluster
→ Product UI demonstration
→ Business outcome
→ Technical credibility
→ Trust / proof
→ Implementation path
→ Start now or Contact sales

INFORMATION ARCHITECTURE
Create:
- Homepage
- Products index
- Individual product pages
- Solutions index
- Use-case pages
- Industry pages where applicable
- Enterprise page
- Pricing
- Developers landing
- Documentation shell
- API reference shell
- SDK / integration page
- Customer stories
- Resources
- Company
- Support

NAVIGATION
Desktop header:
Logo | Products | Solutions | Developers | Resources | Pricing | Sign in | Contact sales | Start now

Use structured mega menus for Products, Solutions, Developers, and Resources.

HOME PAGE
1. Platform hero
2. Primary CTA pair
3. Interactive product UI proof
4. Business model solution clusters
5. Multi-product platform narrative
6. Product capability showcases
7. Global / technical trust
8. Enterprise section
9. Customer story
10. Developer integration entry
11. Latest resources or announcements
12. Final CTA
13. Deep footer

PRODUCT PAGE
1. Product label
2. Outcome-led H1
3. Start / Sales CTAs
4. Product demo
5. Key outcomes
6. Anchor navigation
7. Capability sections
8. Product modules
9. Technical depth
10. Reliability / security
11. Customer evidence
12. Integration paths
13. Pricing preview
14. Related resources
15. Final CTA

USE CASE PAGE
Explain the business problem first, then show how multiple products combine into a solution.

DEVELOPER EXPERIENCE
Treat developer UX as a product surface.
Include:
- docs search
- left docs navigation
- API examples
- code tabs
- language selector
- quickstarts
- SDK references
- changelog
- status links
- testing / sandbox guidance

DESIGN SYSTEM
Use:
- modern neutral foundation
- one distinctive brand accent system
- large display typography
- strong grid discipline
- premium product UI mockups
- minimal but precise borders
- controlled shadows
- semantic design tokens

Do not make every section a rounded card.
Do not use generic SaaS illustrations where a real product UI can demonstrate the capability.

MOTION
Use motion only to explain:
- workflow
- transactions
- data flow
- state changes
- product behavior

Support prefers-reduced-motion.

RESPONSIVE
Desktop: rich multi-column compositions.
Tablet: simplify density.
Mobile: redesign complex demos instead of scaling desktop screenshots down.

ACCESSIBILITY
Target WCAG 2.2 AA.
Ensure keyboard navigation, focus states, semantic headings, contrast, reduced motion, and accessible technical content.

CONTENT MODEL
Implement structured content entities for:
Product, Solution, CustomerStory, Resource, Industry, Integration.
Enable relational links across them.

TECH STACK
Preferred:
- Next.js
- TypeScript
- Tailwind CSS or token-driven CSS
- reusable component library
- headless CMS or structured local content
- MDX/content system for documentation
- SEO metadata
- localization-ready routing
- image optimization

QUALITY REQUIREMENTS
- no fake data
- no fake customer logos
- no fake metrics
- no unsupported security claims
- no copied Stripe content
- excellent responsive behavior
- excellent Core Web Vitals
- clean reusable architecture
- clear product hierarchy
- production-grade accessibility

DELIVERABLES
1. Sitemap
2. User journeys
3. Design tokens
4. Component inventory
5. Page templates
6. Responsive rules
7. Structured content model
8. SEO architecture
9. Final production implementation
10. README explaining customization

The result should feel like a premium global infrastructure platform: technical, credible, fast, elegant, and scalable — but visually and editorially original to [BRAND_NAME].
```

---

## Factory Classification

```yaml
family: enterprise-saas
subtype: fintech-developer-platform
complexity: very-high
content_density: high
developer_experience: first-class
commerce: no
self_serve_conversion: yes
sales_led_conversion: yes
multi_product: yes
localization: high
best_for:
  - fintech
  - api-platform
  - ai-infrastructure
  - cloud
  - cybersecurity
  - enterprise-saas
  - data-platform
  - developer-tools
```

---

## Final Reusable Principle

The strongest reusable lesson is not Stripe's colors or gradients. It is the architecture:

```text
Complex Platform
      ↓
Clear Business Outcomes
      ↓
Multiple Discovery Paths
      ↓
Concrete Product Demonstration
      ↓
Technical Proof
      ↓
Operational Trust
      ↓
Simple Next Action
```

A successful implementation should make a technically complex platform feel understandable without making it look simplistic.
