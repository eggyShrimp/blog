## Why

The blog currently has only one reusable MDX component (`Callout`). For the long-term goal of agent-driven article assembly (vault → sync → component-based MDX composition), a comprehensive component library is needed. Agents need well-typed, self-documenting components to assemble articles from structured content. Building this now establishes the foundation before the sync pipeline is implemented.

## What Changes

- Add 6 new MDX components: `CodeBlock`, `Figure`, `Steps`, `Card`, `Accordion`, `Video`
- Create a central component registry (`components/index.tsx`) that exports all components with TypeScript types
- Each component lives in its own directory with `index.tsx` and typed props
- Update `app/posts/[slug]/page.tsx` to pass the full component registry to MDX rendering

## Capabilities

### New Capabilities

- `code-block`: Enhanced code blocks with filename, line numbers, highlighted lines, and copy button
- `figure`: Responsive images with caption, alt text, and optional attribution
- `steps`: Numbered step-by-step guide with sequential content blocks
- `card`: Link/reference cards displaying title, description, URL, and optional icon
- `accordion`: Expandable/collapsible content sections with title and default state
- `video`: Embedded video player for YouTube/Bilibili with responsive sizing

### Modified Capabilities

- `callout`: Existing component — may need minor prop refinements for consistency with the new component patterns (e.g., `variant` prop for info/warning/danger styling)

## Impact

- **New files**: 6 component directories under `components/` (12 files: index.tsx each)
- **Modified files**: `components/index.tsx` (registry update), `app/posts/[slug]/page.tsx` (pass components)
- **Dependencies**: No new npm dependencies required — all components use existing React/Next.js/Tailwind
- **MDX content**: Existing posts continue to work unchanged; new components available for future posts
