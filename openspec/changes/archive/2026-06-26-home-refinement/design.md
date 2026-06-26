## Context

The warm typescript redesign introduced Courier Prime for chrome elements and a `$ ls posts/` prompt marker. Two issues emerged: (1) the prompt is a leftover from an abandoned TUI direction and adds meaningless decoration; (2) Courier Prime on CJK headings causes visual inconsistency because the Chinese fallback (PingFang SC) is sans-serif while Courier Prime is serif.

## Goals

- Strip home page to its essential information: who writes this, what posts exist
- Unify heading font stack to sans-serif for consistent Latin-CJK rendering
- Tighten spacing to reduce visual waste between compact post entries

## Decisions

### 1. Masthead replaces header + home author name

The old `<header>` (emoji + nav) and home page's `<h2>Eggy Shrimp</h2>` are merged into a single-row masthead:

```
Eggy Shrimp                           Home · About
──────────────────────────────────────────────────
```

Left: author name (Courier Prime, accent color, text-2xl). Right: nav links (Courier Prime, muted, text-sm, `·` separated). Emoji removed — the name is the identity.

This masthead is rendered in `app/layout.tsx` and shared across all pages. The home page no longer needs a separate author name element.

**Rationale**: Eliminates duplicate identity elements. Single-row design keeps the page quiet. Nav is available but understated.

### 2. Home page: list only

Author bio, social links, post summaries, and post tags are all removed from the home page. Only the post list remains.

**Rationale**: A 6-post blog doesn't need summaries or tags for scanning. The masthead already carries the author identity.

### 3. Headings → Fira Sans

All h1-h6 use Fira Sans instead of Courier Prime. This unifies the Latin serif + CJK sans-serif split into a consistent sans-serif rendering.

**Rationale**: Courier Prime + PingFang SC produces two distinct font textures in the same visual line. Fira Sans + PingFang SC are both sans-serif — invisible transition.

### 4. Courier Prime CJK fallback → Songti SC

Chrome elements (dates, nav, tags) keep Courier Prime but the CJK fallback switches to Songti SC (宋体) instead of PingFang SC.

**Rationale**: Songti SC is the CJK serif counterpart. If Latin chrome is serif, the CJK fallback should match the serif texture.

### 5. Spacing scale: tighten to 0.5rem

All post-list gaps use a compressed scale: entry py-1.5 (6px), internal gaps mb-0.5 (2px), section gaps mb-6 (24px), hr zero-margin.
