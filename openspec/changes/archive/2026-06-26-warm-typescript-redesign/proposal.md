## Why

The home page is a vertical stack of white cards with giant date watermarks — it reads as a button list, not a journal's table of contents. The visual language is inconsistent: rounded boxes, shadows, and gradient backgrounds clash with the blog's brand personality of "quiet, restrained, thoughtful."

More fundamentally, the blog needs a coherent visual identity. A "warm typescript" aesthetic — inspired by the material qualities of a typed manuscript — captures the brand: structure from the grid, warmth from the paper, honesty from plain text.

## What Changes

- **Design system**: Establish a warm typescript design vocabulary (font stack, color palette, layout grammar, interaction model) as defined in DESIGN.md and PRODUCT.md
- **Color palette**: Replace neutral white-box theme with a warm paper-and-ink palette (paper `#f9f6f0`, ink `#2c241b`, accent `#1a6b4a` dark pine green)
- **Typography**: Introduce Courier Prime as the chrome/shell font (headings, dates, labels, nav); keep Fira Sans for Latin body, system CJK for Chinese body
- **Layout**: Remove all card boxes, shadows, gradients, and rounded corners. Replace with typographic entries separated by thin warm-grey horizontal rules. Prompt-style section markers (`$ ls posts/`).
- **Components**: Redesign `PostPreviewCard` from card to text entry; redesign `Callout` from rounded box to dashed-outline or no-frame style; redesign `AuthorCard` in typescript style
- **Home page**: Author intro section + `ls -la` style post list
- **Post page**: Courier-styled metadata row, refined section separators
- **Globals**: `rounded-none` globally, remove decorative CSS rules, establish CSS custom properties for palette

## Capabilities

### New Capabilities

- `warm-typescript-tokens`: CSS custom property palette (paper, ink, muted, accent, line, surface-hover), globally applied
- `courier-prime-typography`: Courier Prime font stack for chrome elements (headings, dates, labels, nav, prompt markers)
- `typographic-post-list`: Date-column + title + summary + tag post entries, separated by horizontal rules, zero box decor
- `prompt-section-markers`: Green `$` prompt markers as section headings, Courier Prime styling
- `callout-dashed-frame`: Redesigned callout with dashed outline or no frame, matching warm palette

### Modified Capabilities

None — this is a visual redesign; existing component contracts are preserved where possible.

## Impact

- **Modified files**: `app/layout.tsx`, `app/globals.css`, `tailwind.config.js`, `app/components/home/index.tsx`, `app/components/post-preview/index.tsx`, `app/posts/[slug]/layout.tsx`, `app/tags/[tag]/page.tsx`, `components/callout/index.tsx`
- **Removed files**: `app/components/home/index.module.scss`, `app/components/post-preview/index.module.scss` (empty)
- **New dependencies**: Courier Prime (Google Fonts, via `next/font/google`)
- **Existing posts**: All 6 posts render unchanged (MDX content is unaffected); only chrome/presentation layer changes
