# 🧩 Risheh Website Template Factory

> یک کتابخانه مهندسی‌شده برای تبدیل وب‌سایت‌های مرجع به **Template Specification**‌های قابل بازاستفاده، شخصی‌سازی و پیاده‌سازی سریع.

این Repository کد یک سایت مشخص نیست؛ یک **Design & Architecture Knowledge Base** است. هر وب‌سایت مرجع به یک فایل مستقل تبدیل می‌شود که ساختار، معماری اطلاعات، UI/UX، Design System، الگوهای کامپوننت، Responsive Rules، Content Model و Prompt نهایی ساخت را مستند می‌کند.

---

## 🎯 هدف

برای هر سایت مرجع:

1. ساختار واقعی سایت استخراج شود.
2. منطق UX و Information Architecture تحلیل شود.
3. Design System و الگوهای بصری ثبت شوند.
4. Component Architecture مشخص شود.
5. قوانین Responsive و Mobile UX استخراج شوند.
6. نقاط ضعف مرجع شناسایی و در Template اصلاح شوند.
7. خروجی از برند اصلی جدا و قابل شخصی‌سازی شود.
8. یک **Master Build Prompt** دقیق برای بازتولید Template تولید شود.

نتیجه این است که به‌جای طراحی هر پروژه از صفر، فقط Template مناسب انتخاب و Brand/Content/Data آن جایگزین می‌شود.

---

# 📁 Naming Convention

هر سایت مرجع یک فایل مستقل در مسیر `templates/` دارد.

```text
Risheh-Website-Template-Factory/
├── README.md
├── docs/
│   ├── TEMPLATE_SPEC.md
│   └── PROMPT_STANDARD.md
└── templates/
    ├── apple.com.md
    ├── stripe.com.md
    ├── linear.app.md
    ├── notion.so.md
    └── example.com.md
```

### قانون نام‌گذاری

```text
<domain>.<tld>.md
```

نمونه:

```text
apple.com.md
stripe.com.md
linear.app.md
lawbymerit.com.md
```

اگر تحلیل مربوط به یک صفحه خاص باشد:

```text
stripe.com--pricing.md
apple.com--iphone.md
```

نام فایل باید **نام واقعی سایت مرجع** باشد؛ نه نام پروژه مشتری، نه نام داخلی ریشه و نه دسته‌بندی طراحی.

---

# 🧠 هر Template چه چیزی دارد؟

هر فایل Site Template باید حداقل این لایه‌ها را پوشش دهد:

```text
Reference Website
      ↓
Visual Audit
      ↓
Information Architecture
      ↓
Page Architecture
      ↓
UX Flow
      ↓
Design System
      ↓
Component System
      ↓
Responsive Rules
      ↓
Content Model
      ↓
Reusable Template Rules
      ↓
Customization Variables
      ↓
Implementation Architecture
      ↓
Master Build Prompt
```

---

# 🧱 استاندارد خروجی

فایل هر سایت باید شامل این فصل‌ها باشد:

1. Reference Snapshot
2. Template Identity
3. Design DNA
4. Information Architecture
5. Global Layout Architecture
6. Page-by-Page Structure
7. Section Anatomy
8. UX & Conversion Architecture
9. Navigation Architecture
10. Design Tokens
11. Typography System
12. Color System
13. Spacing & Grid
14. Radius, Border & Shadow
15. Iconography
16. Imagery Direction
17. Motion & Interaction
18. Component Inventory
19. Component Anatomy
20. Component Variants & States
21. Responsive Architecture
22. Accessibility Rules
23. Content Architecture
24. SEO/GEO Structure
25. Technical Frontend Architecture
26. Reusability Rules
27. Customization Variables
28. What Must NOT Be Copied
29. Improvement Layer
30. Quality Gates
31. Master Build Prompt

جزئیات دقیق این استاندارد در `docs/TEMPLATE_SPEC.md` تعریف شده است.

---

# 🎨 اصل مهم: Template ≠ Clone

هدف این Repository کپی پیکسلی یا تقلید هویت یک برند نیست.

ما از سایت مرجع این موارد را استخراج می‌کنیم:

- ساختار
- hierarchy
- interaction patterns
- layout logic
- content architecture
- component patterns
- spacing logic
- UX strategy
- visual rhythm

اما این موارد باید قابل جایگزینی باشند:

- Logo
- Brand name
- تصاویر اختصاصی
- متن‌های اختصاصی
- Trade dress اختصاصی برند
- Trademarkها
- ادعاهای تجاری
- آمار و ارقام سایت مرجع
- Testimonials واقعی سایت مرجع

---

# 🏗️ Template Personalization Model

هر Template باید بتواند با یک Configuration جدید شخصی‌سازی شود:

```yaml
brand:
  name: ""
  logo: ""
  primary_color: ""
  secondary_color: ""
  accent_color: ""
  font_family: ""
  personality: ""

business:
  industry: ""
  audience: ""
  positioning: ""
  services: []
  products: []

content:
  hero_title: ""
  hero_subtitle: ""
  primary_cta: ""
  secondary_cta: ""
  social_proof: []
  faq: []

locale:
  language: "fa"
  direction: "rtl"
  country: "IR"

implementation:
  framework: "Next.js"
  language: "TypeScript"
  styling: "Tailwind CSS"
```

---

# 🧩 Component Philosophy

Templateها باید از **Reusable Components** ساخته شوند، نه Page-specific markup.

نمونه:

```text
components/
├── layout/
│   ├── Header
│   ├── Navigation
│   ├── Container
│   └── Footer
│
├── sections/
│   ├── Hero
│   ├── LogoCloud
│   ├── FeatureGrid
│   ├── BentoGrid
│   ├── Stats
│   ├── Testimonials
│   ├── FAQ
│   └── CTA
│
├── ui/
│   ├── Button
│   ├── Card
│   ├── Input
│   ├── Badge
│   ├── Tabs
│   ├── Accordion
│   └── Modal
│
└── content/
    ├── ArticleCard
    ├── Author
    └── Breadcrumb
```

---

# 📱 Responsive First

هیچ Template بدون تحلیل مستقل این Breakpointها کامل محسوب نمی‌شود:

```text
Mobile      320–479
Large Mobile 480–767
Tablet      768–1023
Desktop     1024–1439
Large       1440+
```

برای هر breakpoint باید مشخص شود:

- Container width
- Grid columns
- Typography scaling
- Section spacing
- Navigation behavior
- Card stacking
- Image cropping
- CTA behavior
- Touch target sizing
- Sticky elements

---

# ✅ Quality Gate

یک Template تنها زمانی `READY` است که:

- [ ] تمام صفحات کلیدی تحلیل شده باشند.
- [ ] IA مشخص باشد.
- [ ] Header/Footer دقیق مستند شده باشند.
- [ ] تمام Section Patternهای مهم ثبت شده باشند.
- [ ] Design Tokens استخراج شده باشند.
- [ ] Responsive rules مشخص باشند.
- [ ] Components و states مستند شده باشند.
- [ ] UX issues مرجع شناسایی شده باشند.
- [ ] Accessibility بررسی شده باشد.
- [ ] Fake Data وارد Template نشده باشد.
- [ ] محتوای اختصاصی برند مرجع به‌عنوان Template Data استفاده نشده باشد.
- [ ] Personalization variables مشخص باشند.
- [ ] Master Build Prompt کامل باشد.

---

# 🚀 Workflow

هر بار یک URL جدید وارد شود:

```text
URL
 ↓
Site Audit
 ↓
Page Inventory
 ↓
Screenshot / Visual Analysis
 ↓
IA Mapping
 ↓
UI Pattern Extraction
 ↓
UX Analysis
 ↓
Design Token Extraction
 ↓
Component Mapping
 ↓
Responsive Mapping
 ↓
Improvement Pass
 ↓
Template Abstraction
 ↓
Master Prompt
 ↓
templates/<site-domain>.md
```

---

## 🌱 Risheh Digital

این Repository بخشی از سیستم داخلی طراحی و توسعه ریشه برای تبدیل Referenceها به دانش ساختاریافته و Templateهای قابل بازاستفاده است.