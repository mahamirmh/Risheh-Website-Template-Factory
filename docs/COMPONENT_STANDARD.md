# Component Standard

Generated websites should use reusable, responsibility-focused components rather than page-specific markup.

Recommended boundaries:

```text
components/
├── layout/      # header, nav, container, footer
├── ui/          # button, input, badge, tabs, modal, accordion
├── sections/    # hero, services, proof, gallery, CTA, FAQ
└── content/     # article, author, breadcrumb, metadata
```

## Rules

- Components expose behavior and states through explicit props.
- Section components consume pattern IDs and content models rather than hardcoded business copy.
- RTL/LTR direction is inherited semantically, with per-component overrides only when necessary.
- No component may depend on hover for essential content.
- Motion is progressive enhancement; semantic content exists without animation.
- Repeated variants belong to one component family; near-duplicate components should be merged.
- Page composition may reorder sections, but shared primitives remain stable.
