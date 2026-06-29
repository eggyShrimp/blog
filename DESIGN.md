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
| Title / H1 | Fira Sans + PingFang SC | 700 | clamp scale | 1.2 | Display headings |
| Body | PingFang SC + Fira Sans | 400 | base | 1.6 | Articles, navigation; 中文优先 |
| Code | JetBrains Mono | 400 | 0.9em | 1.5 | Inline code, code blocks |

- 中文排版优先：正文 `text-align: justify`，`line-break: strict`（标点禁则）
- 中西文间距：CSS `text-spacing: trim-start trim-end trim-adjacent` + 构建时 `autocorrect` 自动修正
- Body line length capped at ~42em（约 42 个中文字/行）
- 段落间距：0.8em；H2 上距：1.3em；H3 上距：1.2em
- `text-wrap: balance` on h1–h3
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
| TOC Sidebar | Table of contents navigation | Desktop: sticky sidebar 220px; Mobile: inline block. Active heading highlighted via accent color. Small muted text, no decoration. |

Components are minimal. No animated transitions beyond `transition-colors duration-200`. No decorative borders, shadows are barely perceptible.

## Layout

- Single-column layout on mobile, centered, max-width 95vw
- Desktop post page: two-column — article (42em) + TOC sidebar (220px), max-width 864px
- Non-post pages: single-column, centered, max-width 864px
- Header: full-width, centered content, `py-4`
- Content: `prose prose-neutral prose-base` on article content, 中文排版优化（两端对齐、标点禁则、中西文间距）
- Spacing: consistent `gap-4` for nav, `gap-2` for metadata, `my-16` for author card
- Mobile TOC: inline block between title and article body
- Desktop TOC: sticky sidebar, IntersectionObserver for active heading tracking

## Motion

Minimal. Only `transition-colors duration-200` on interactive elements (links, cards). No entrance animations, no scroll effects, no decorative motion. Respect `prefers-reduced-motion`.
