## Why

The home page has too much visual noise: redundant author bio, social links that belong on /about-me, a decorative `$ ls posts/` prompt inherited from an abandoned TUI direction, and summaries that bloat a 6-post flat list. Post entry spacing is loose (accumulated py/mb gaps) and the Chinese-Latin font pairing is inconsistent — Courier Prime's serif clashes with PingFang SC's sans-serif on headings.

## What Changes

- **Home page**: Remove bio, social links, `$ ls posts/` prompt, post summaries, and post tags. Author name migrates to masthead.
- **Header → Masthead**: Single-row masthead replaces header. Left: author name (Courier Prime, accent). Right: Home · About Me (Courier Prime, muted). Emoji removed.
- **Spacing**: Tighten PostPreviewCard and Home component gaps (py-3 → py-1.5, mb-2 → mb-0.5, section margins halved)
- **Font consistency**: Article headings (h1-h6) switch from Courier Prime to Fira Sans. Courier Prime's CJK fallback switches from PingFang SC (sans) to Songti SC (serif), matching the Latin serif texture

## Capabilities

### Modified Capabilities

- `typographic-post-list`: Simplified to date + title only; no summary row
- `courier-prime-typography`: Chrome elements preserved; heading role moved to Fira Sans; CJK fallback → Songti SC
- `prompt-section-markers`: **REMOVED** — no section markers on home page

## Impact

- **Modified**: `app/layout.tsx`, `app/components/home/index.tsx`, `app/components/post-preview/index.tsx`, `tailwind.config.js`, `app/globals.css`
- **No new files or dependencies**
