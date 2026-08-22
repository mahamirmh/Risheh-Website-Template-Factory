# Website Template Specification Standard

این سند استاندارد اجباری برای تمام فایل‌های `templates/<site-domain>.md` است.

---

## 0. Template Metadata

```yaml
template:
  source_name: ""
  source_url: ""
  analyzed_at: ""
  category: ""
  subcategory: ""
  complexity: "low|medium|high|enterprise"
  visual_style: []
  suitable_for: []
  status: "draft|reviewed|ready"
```

---

# 1. Reference Snapshot

ثبت اطلاعات اولیه سایت مرجع:

- نام برند
- Domain
- نوع کسب‌وکار
- نوع محصول/خدمت
- مخاطب هدف
- هدف اصلی سایت
- CTA اصلی
- CTA ثانویه
- مدل محتوایی
- مدل درآمدی قابل تشخیص از رابط
- صفحات مهم
- زبان/جهت
- رفتار Mobile/Desktop

### Observed vs Inferred

هر یافته باید یکی از این وضعیت‌ها را داشته باشد:

- **Observed:** مستقیماً از سایت دیده شده.
- **Inferred:** برداشت تحلیلی از UX/ساختار.
- **Recommended:** پیشنهاد بهبود برای Template ریشه.

هرگز Inference به‌عنوان Fact نوشته نشود.

---

# 2. Template Identity

تعریف کن این سایت بعد از abstraction چه Templateای است.

مثال:

```text
Template Type: Premium B2B SaaS Landing + Product Website
Design Direction: Minimal / Editorial / Product-led
Primary Goal: Conversion to trial/demo
Content Density: Medium
Interaction Density: Medium
Trust Density: High
```

همچنین مشخص کن برای چه صنایع دیگری قابل استفاده است.

---

# 3. Design DNA

ماهیت بصری سایت را تحلیل کن:

- Overall visual personality
- Density
- Contrast
- White-space strategy
- Content rhythm
- Visual hierarchy
- Border usage
- Card usage
- Section separation
- Image-to-text ratio
- Illustration style
- Photography style
- Icon style
- Motion character
- Perceived brand qualities

### Visual Keywords

بین 5 تا 12 keyword دقیق استخراج شود.

مثال:

```text
Precise, calm, editorial, technical, spacious, premium, product-led
```

---

# 4. Information Architecture

Sitemap سایت را تا حد قابل مشاهده بازسازی کن.

```text
/
├── /product
│   ├── /feature-a
│   └── /feature-b
├── /solutions
├── /pricing
├── /customers
├── /resources
│   ├── /blog
│   └── /guides
├── /about
└── /contact
```

برای هر Route ثبت شود:

| Route | Purpose | Primary CTA | Content Type | Priority |
|---|---|---|---|---|

---

# 5. Global Layout Architecture

ساختار Shell را تعریف کن:

```text
App Shell
├── Announcement Bar
├── Header
│   ├── Logo
│   ├── Primary Navigation
│   ├── Secondary Actions
│   └── Mobile Trigger
├── Main
│   └── Page Sections
└── Footer
```

برای هر بخش:

- Positioning
- Max width
- Full bleed/contained
- Sticky behavior
- Background strategy
- Z-index relationship

---

# 6. Page-by-Page Structure

برای **هر صفحه مهم** ساختار ترتیب سکشن‌ها دقیق ثبت شود.

نمونه:

```text
Homepage
01 Header
02 Hero
03 Trust Bar
04 Feature Narrative
05 Product Showcase
06 Bento Features
07 Case Study
08 Testimonials
09 FAQ
10 Conversion CTA
11 Footer
```

برای هر Section مشخص شود:

- Objective
- Content
- Layout
- Visual anchor
- CTA
- Component pattern
- Desktop behavior
- Mobile behavior

---

# 7. Section Anatomy

هر Section مهم باید به anatomy شکسته شود.

مثال:

```text
Hero
├── Eyebrow
├── H1
├── Supporting paragraph
├── CTA group
│   ├── Primary CTA
│   └── Secondary CTA
├── Social proof
└── Product visual
```

برای هر عنصر:

- role
- priority
- alignment
- max width
- relative size
- spacing relationship

---

# 8. UX & Conversion Architecture

تحلیل کن:

- مهم‌ترین user journey چیست؟
- CTA اول کجاست؟
- چند CTA تکرار می‌شود؟
- trust قبل/بعد از CTA کجا ساخته می‌شود؟
- objection handling چگونه انجام می‌شود؟
- FAQ چه نقشی دارد؟
- pricing چه زمانی معرفی می‌شود؟
- social proof کجا قرار گرفته؟
- navigation چقدر depth دارد؟
- آیا visitor برای فهم proposition مجبور به scroll زیاد است؟

### Conversion Map

```text
Awareness
  ↓
Problem Recognition
  ↓
Value Proposition
  ↓
Proof
  ↓
Feature Understanding
  ↓
Objection Handling
  ↓
CTA
```

### UX Problems

مشکلات سایت مرجع را بدون تعارف لیست کن و در Template اصلاح پیشنهادی بده.

---

# 9. Navigation Architecture

ثبت شود:

- Header type
- Sticky/non-sticky
- Mega menu/dropdown/simple
- Desktop items
- Mobile menu
- CTA placement
- Breadcrumb strategy
- Footer navigation groups
- Contextual navigation
- Article navigation

---

# 10. Design Tokens

تا حد قابل مشاهده یا تخمین منطقی، Design Tokenها ثبت شوند.

```css
--color-bg:
--color-surface:
--color-text:
--color-muted:
--color-primary:
--color-accent:
--color-border:

--space-1:
--space-2:
--space-3:

--radius-sm:
--radius-md:
--radius-lg:

--shadow-sm:
--shadow-md:
```

اگر مقدار دقیق قابل مشاهده نیست، مقدار را با برچسب `approximate` ثبت کن.

---

# 11. Typography System

جدول کامل hierarchy:

| Token | Desktop | Mobile | Weight | Line Height | Usage |
|---|---:|---:|---:|---:|---|
| Display | | | | | |
| H1 | | | | | |
| H2 | | | | | |
| H3 | | | | | |
| Body-lg | | | | | |
| Body | | | | | |
| Small | | | | | |
| Label | | | | | |

مشخص کن:

- Serif/Sans
- Font mood
- Letter spacing
- Text width
- Heading wrap behavior
- RTL adaptation considerations

---

# 12. Color System

ثبت شود:

- Background palette
- Surface palette
- Brand/accent colors
- Text hierarchy colors
- Borders
- Interactive states
- Success/warning/error if موجود
- Dark mode if موجود

همچنین نسبت استفاده تقریبی رنگ‌ها:

```text
Neutral: 75%
Brand: 15%
Accent: 5%
Semantic: 5%
```

---

# 13. Grid & Spacing System

مشخص کن:

- Max page width
- Main container
- Full bleed sections
- Grid columns
- Gutter
- Section vertical spacing
- Internal card spacing
- Text-content max width
- Hero max width

Desktop/Tablet/Mobile جداگانه.

---

# 14. Radius, Border & Shadow

تعریف دقیق:

- Border radius scale
- Border thickness
- Border color behavior
- Card elevation
- Floating elevation
- Modal/dialog elevation
- Focus ring

---

# 15. Iconography

ثبت شود:

- Outline/Filled
- Stroke width
- Rounded/sharp
- Common size
- Icon container style
- Inline vs decorative
- Suggested reusable library equivalent

---

# 16. Imagery Direction

تحلیل کن:

- Product screenshot
- 3D render
- Illustration
- Photography
- Abstract graphic
- Gradient
- Diagram
- Texture

برای هر نوع مشخص کن:

- Aspect ratio
- Crop behavior
- Corner radius
- Border/shadow
- Mobile treatment
- Accessibility alt strategy

---

# 17. Motion & Interaction

ثبت تعاملات:

- hover
- focus
- active
- scroll reveal
- sticky
- parallax
- carousel
- tabs
- accordion
- modal
- menu transitions
- button microinteraction

برای Template پیشنهادی:

```text
Fast interaction: 120–180ms
Standard transition: 180–260ms
Large reveal: 300–500ms
```

از motion بی‌هدف جلوگیری شود.

---

# 18. Component Inventory

تمام کامپوننت‌ها را فهرست کن:

### Layout
- Header
- Footer
- Container
- Section
- Grid

### UI
- Button
- Card
- Badge
- Input
- Select
- Tabs
- Accordion
- Modal
- Tooltip

### Marketing
- Hero
- Feature Grid
- Bento
- Logo Cloud
- Stats
- Testimonial
- Pricing
- FAQ
- CTA

### Content
- Article Card
- Author
- TOC
- Breadcrumb
- Related Content

---

# 19. Component Anatomy

برای Componentهای اصلی anatomy دقیق ارائه شود.

مثال:

```text
FeatureCard
├── icon
├── title
├── description
├── optional media
└── optional action
```

Props پیشنهادی:

```ts
interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  media?: ReactNode;
  href?: string;
  variant?: 'default' | 'featured' | 'compact';
}
```

---

# 20. Variants & States

برای تمام interactive components:

- Default
- Hover
- Focus
- Active
- Disabled
- Loading
- Success
- Error

اگر state در سایت مرجع دیده نشده، برای Template استاندارد پیشنهاد داده شود.

---

# 21. Responsive Architecture

برای هر breakpoint تحلیل مستقل:

### Mobile 320–479
### Large Mobile 480–767
### Tablet 768–1023
### Desktop 1024–1439
### Large Desktop 1440+

ثبت شود:

- Header behavior
- nav behavior
- columns
- stacking order
- content order
- image behavior
- typography
- margins
- gutters
- cards
- sticky behavior
- CTA placement
- touch targets

مهم: Mobile نباید صرفاً نسخه کوچک Desktop باشد.

---

# 22. Accessibility

حداقل بررسی:

- semantic heading hierarchy
- keyboard navigation
- focus states
- contrast
- form labels
- error messaging
- touch targets
- motion preference
- alt text strategy
- landmark structure
- skip navigation

Target: WCAG 2.2 AA where applicable.

---

# 23. Content Architecture

نوع محتواها:

```text
Page
Article
Category
Service
Product
Case Study
Testimonial
FAQ
Team Member
Resource
CTA
```

برای هر entity فیلدهای پیشنهادی مشخص شوند.

مثال:

```ts
interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
```

---

# 24. SEO / GEO Structure

تحلیل و پیشنهاد:

- URL architecture
- title/H1 relationship
- schema opportunities
- breadcrumb
- FAQ structured data
- Article schema
- Organization schema
- LocalBusiness if relevant
- content clusters
- internal links
- answer-first sections for AI search
- entity clarity
- concise factual summaries

Fake claims و fabricated schema data ممنوع.

---

# 25. Technical Frontend Architecture

پیشنهاد پیش‌فرض:

```text
Next.js
TypeScript
Tailwind CSS
Component-driven architecture
Server Components where appropriate
Content/data separated from UI
```

ساختار پیشنهادی:

```text
src/
├── app/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── sections/
│   └── content/
├── config/
├── content/
├── lib/
├── styles/
└── types/
```

اگر Template نیاز متفاوت دارد، دلیلش توضیح داده شود.

---

# 26. Reusability Rules

تفکیک کن:

### ثابت در Template
- Layout logic
- Component hierarchy
- Responsive behavior
- Design token structure
- Interaction patterns

### قابل شخصی‌سازی
- Brand
- palette
- font
- copy
- imagery
- services/products
- CTA labels
- content entities

### نباید hardcode شود
- phone
- email
- address
- testimonials
- numbers
- client logos
- legal claims
- pricing

---

# 27. Customization Variables

یک schema کامل ارائه شود:

```yaml
brand: {}
business: {}
navigation: {}
hero: {}
sections: {}
content: {}
social_proof: {}
contact: {}
seo: {}
locale: {}
feature_flags: {}
```

هر field باید توضیح داشته باشد.

---

# 28. What Must NOT Be Copied

واضح ثبت کن:

- Logo
- trademark
- original copy
- proprietary illustrations
- customer logos
- testimonials
- exact branded assets
- copyrighted photography
- fabricated claims

Template باید «الگوی طراحی» را حفظ کند، نه مالکیت فکری سایت مرجع را.

---

# 29. Improvement Layer

سه ستون:

| Issue in Reference | Why it is a problem | Risheh Template Improvement |
|---|---|---|

موارد پیشنهادی:

- UX
- responsive
- accessibility
- performance
- SEO
- content hierarchy
- conversion
- form UX

---

# 30. Quality Gates

## Architecture Gate
- IA complete
- Routes complete
- Global shell defined

## UX Gate
- Primary journey mapped
- CTA hierarchy clear
- friction identified

## UI Gate
- Typography scale
- colors
- spacing
- components

## Responsive Gate
- mobile/tablet/desktop explicit

## Accessibility Gate
- WCAG considerations

## Reusability Gate
- brand-independent
- no fake data
- no hardcoded customer data

## Prompt Gate
- final prompt self-contained
- implementation constraints explicit
- acceptance criteria included

---

# 31. Master Build Prompt

در پایان هر فایل، Prompt نهایی باید بتواند بدون نیاز به توضیح شفاهی اضافه، Template را پیاده‌سازی کند.

Prompt باید مطابق `docs/PROMPT_STANDARD.md` نوشته شود.