# Design

## Theme

Light. A personal reading space — calm, typographic, unadorned. The surface should feel like a well-typeset essay, not a software interface. Content-width is fixed at 768px on desktop, fluid on mobile. White or near-white background, dark text, no decorative color.

## Color

**Strategy: Restrained.** Neutral base with one accent used only for interactive feedback (links, focus).

| Role | Value | Usage |
|------|-------|-------|
| Background | `#ffffff` | Page background |
| Text Primary | `#2E2E2E` | Body text, headings |
| Text Secondary | `#666666` | Dates, metadata, captions |
| Accent | `blue-700` | Links on hover, focus rings |
| Surface | `slate-50` | Card backgrounds, subtle fills |
| Border | `slate-100` / `slate-200` | Callout borders, dividers |

No gradients. No decorative color. Hover states use `blue-700` for links, `slate-50` for card surfaces.

## Typography

| Role | Font | Weight | Size | Line Height | Notes |
|------|------|--------|------|-------------|-------|
| Title / H1 | Lato | 700 | clamp scale | 1.2 | Display headings |
| Body | Fira Sans | 400 | base | 1.7 | Articles, navigation |
| Chinese fallback | Noto Sans SC | 400 | — | — | Fira Sans + Noto Sans SC stack |
| Code | JetBrains Mono | 400 | 0.9em | 1.5 | Inline code, code blocks |

- `text-wrap: balance` on h1–h3
- Body line length capped at ~65–75ch (enforced by `--content-width: 768px`)
- `prose-neutral` from Tailwind Typography for article content
- No decorative fonts, no display serifs, no script fonts

## Components

| Component | Purpose | Style Notes |
|-----------|---------|-------------|
| Header | Logo (emoji 🐱) + nav links | Minimal, `prose-base`, no border/shadow |
| Post Preview Card | Title + summary + decorative date | `rounded-lg`, `bg-white`, hover `bg-slate-50`, no border |
| Author Card | Avatar + name + social links | `border-slate-100`, `shadow-sm`, `backdrop-blur-sm` |
| Callout | Info box with icon + title | `border-slate-200`, `bg-gradient-to-br from-slate-50` |
| Tag | `#tag` label | `bg-slate-100`, `font-mono`, `text-xs` |

Components are minimal. No animated transitions beyond `transition-colors duration-200`. No decorative borders, shadows are barely perceptible.

## Layout

- Single-column layout, centered, max-width 768px
- Header: full-width, centered content, `py-4`
- Content: `prose prose-neutral prose-base mx-auto`
- Spacing: consistent `gap-4` for nav, `gap-2` for metadata, `my-16` for author card
- No sidebar, no grid, no multi-column content
- Mobile-first: `95vw` on small screens, `768px` on `≥1024px`

## Motion

Minimal. Only `transition-colors duration-200` on interactive elements (links, cards). No entrance animations, no scroll effects, no decorative motion. Respect `prefers-reduced-motion`.
