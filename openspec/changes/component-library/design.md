## Context

The blog is a Next.js 16 + MDX personal project with 6 articles and 1 reusable component (`Callout`). The long-term vision is a vault→blog sync pipeline where an agent assembles articles from structured content using a component library. Today, components are ad-hoc and lack consistent typing or patterns.

Current state:
- `components/callout/` exists with basic props (`title`, `icon`, `children`)
- `components/index.tsx` is a simple registry mapping component names to implementations
- MDX rendering in `app/posts/[slug]/page.tsx` passes `MDXComponents` to `<MDXContent>`
- Tailwind CSS v4 + `@tailwindcss/typography` for styling

## Goals / Non-Goals

**Goals:**
- Establish a consistent component directory pattern: `components/<name>/index.tsx` with typed props
- Each component is self-contained, typed, and works in MDX context
- Central registry exports all components for agent discoverability
- Components cover the most common blog content patterns (code, images, steps, references, expandable sections)
- No new npm dependencies — pure React + Tailwind

**Non-Goals:**
- Vault sync pipeline (separate change, future work)
- Agent tool integration (future work — components are designed to be agent-callable but no tool wrapper yet)
- Dark mode support (future work, not in this change)
- Custom syntax or DSL — components use standard MDX JSX syntax
- Animation or motion design — keep components minimal and functional

## Decisions

### 1. Directory structure: one component per directory

```
components/
├── index.tsx              # registry
├── callout/index.tsx      # existing
├── code-block/index.tsx   # new
├── figure/index.tsx       # new
├── steps/index.tsx        # new
├── card/index.tsx         # new
├── accordion/index.tsx    # new
└── video/index.tsx        # new
```

**Rationale**: Each component in its own directory allows co-location of styles (if needed) and keeps imports clean. Matches existing `callout/` pattern.

**Alternative considered**: Flat files (`components/code-block.tsx`) — rejected because it breaks the existing convention and makes future co-location harder.

### 2. Props typing: explicit TypeScript interfaces

Each component exports its props type alongside the component. Example:

```typescript
export type CodeBlockProps = {
  language?: string;
  filename?: string;
  highlightLines?: number[];
  showLineNumbers?: boolean;
  children: string;
};
```

**Rationale**: Type definitions serve as documentation for both humans and agents. An agent can import the type and understand the component's contract without reading implementation.

### 3. Styling: Tailwind utility classes, no SCSS modules

New components use Tailwind classes directly (matching `Callout` pattern). No `.module.scss` files.

**Rationale**: The project already uses Tailwind for all component styling. SCSS modules are only used in `app/components/home/` (legacy). Keeping components pure Tailwind ensures consistency and avoids the broken SCSS import issue found in `app/layout.tsx`.

### 4. Component registry: typed object

```typescript
import Callout from "./callout";
import CodeBlock from "./code-block";
// ...
const components = { Callout, CodeBlock, Figure, Steps, Card, Accordion, Video };
export default components;
```

**Rationale**: Single import point. Agents can read `components/index.tsx` to discover all available components and their import paths.

### 5. MDX component passing: unchanged pattern

`app/posts/[slug]/page.tsx` already passes `MDXComponents` to `<MDXContent components={MDXComponents} />`. The registry object is passed directly — no changes needed to the rendering pipeline.

## Risks / Trade-offs

- **Risk**: Components may not cover all future content needs → **Mitigation**: Components are additive; new ones can be added later without breaking existing posts.
- **Risk**: MDX JSX syntax in vault content tightly couples to blog components → **Mitigation**: Component names are intuitive (`<Callout>`, `<Figure>`); the sync pipeline (future) can map simplified syntax to these components.
- **Risk**: No formal test suite → **Mitigation**: Components are presentational and simple; visual verification via `npm run dev` is sufficient for now. Formal tests can be added later.
