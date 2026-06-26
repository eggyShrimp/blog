## Context

The blog currently uses a neutral white-card aesthetic: rounded boxes, shadows, gradient backgrounds on Callout and AuthorCard. Post entries are large white `<Link>` cards with a giant date watermark. This reads as "product feature list" not "journal's table of contents."

The brand personality — quiet, restrained, thoughtful — calls for a warmer, more tactile visual language. "Warm typescript" is the chosen aesthetic: the structure of a typed manuscript, the warmth of paper, the honesty of plain text.

## Goals / Non-Goals

**Goals:**
- Establish a coherent warm typescript design system (fonts, colors, layout grammar, interaction)
- Replace card-based post list with typographic entry list
- Remove all decorative box elements: rounded corners, shadows, gradients
- Keep MDX content files untouched; redesign skin only
- Maintain existing Next.js/Tailwind/MDX architecture
- Preserve existing brand register (brand, quiet, restrained, thoughtful)

**Non-Goals:**
- Dark mode (separate future change)
- Mobile-first redesign (current responsive strategy preserved)
- New components beyond redesigning existing ones
- Content migration or structural refactors

## Decisions

### 1. Font Stack: Courier Prime (chrome) + Fira Sans (body) + system CJK

```
Chrome:   Courier Prime 400/700   — headings, dates, labels, nav, prompt markers
Body:     Fira Sans 400/700       — Latin paragraph text
CJK:      PingFang SC → Microsoft YaHei → system-ui — Chinese text
Code:     JetBrains Mono 400/700  — code blocks, inline code
```

**Rationale**: Courier Prime provides the warm typewriter/tabloid material quality for the shell. Fira Sans keeps body text readable (full-width mono for Chinese long-form would fatigue readers). System CJK fonts are zero-cost and universally available.

**Alternatives considered**: Pure mono (rejected: Chinese long-form reading fatigue), serif body pair (rejected: would compete with Courier Prime's serif and muddy the contrast).

### 2. Color Palette: Warm Paper & Ink

```
paper:         #f9f6f0   (warm old paper, not clinical #fff)
ink:           #2c241b   (warm ink, not pure #000)
muted:         #8b7e6b   (warm grey)  
accent:        #1a6b4a   (dark pine green — quiet, organic)
accent-hover:  #0f4d33   (deeper pine)
line:          #e5dfd3   (warm horizontal rule)
surface-hover: #f3efe8   (subtle paper shift on hover)
```

**Rationale**: Moves the blog away from the neutral-grey "design system default" toward a specific warm material reference. Pine green is organic and quiet — not the saturated green of old terminals but the color of ink on old paper. No blue: blue reads as hyperlink-default, not deliberate brand.

### 3. Layout Grammar: Typescript Page, Not Terminal

Prompt-style section markers (`$ ls posts/`) provide navigation context without a terminal-style box frame. Post entries are typographic: date column + title + summary, separated by warm horizontal rules.

```
$ ls posts/            ← Courier Prime, accent-green

2024-01-24            ← Courier Prime, muted
结合业务对JavaScript设计模式的理解    ← title as link
#JavaScript  #Design Pattern          ← inline tags
─────────────────────────────────     ← line, warm
```

**Rationale**: A journal's table of contents, not `ls -la` literally. The section markers are stylistic, not functional — they evoke the feel without simulating a computer.

### 4. Interaction: Instant, No Animation

All transitions removed. Hover: subtitle paper shift or underline. Focus: dashed outline (`outline-dashed`) instead of smooth ring, matching the typed manuscript aesthetic.

**Rationale**: `transition-colors duration-200` was the blog's only motion. For a typescript, change is instant — like turning a page. Not a programmable effect.

### 5. Zero Decoration Globally

```css
*, *::before, *::after { border-radius: 0 !important; }
```

No rounded corners anywhere. No `box-shadow`. No `backdrop-filter`. No `linear-gradient()`. The Callout component switches from `rounded-2xl border bg-gradient-to-br shadow` to a warm dashed outline frame.

### 6. Component Changes

| Component | Before | After |
|---|---|---|
| PostPreviewCard | `<Link>` card, bg-white, rounded-lg, giant date watermark | `<Link>` text row: date + title + summary + tags, hr sep |
| Callout | rounded-2xl, border-slate-200, bg-gradient, shadow | dashed border, paper-warm bg, no gradient |
| AuthorCard | border-slate-100, rounded-lg, shadow, backdrop-blur | `<address>` or `<div>`, warm bg only, optional hr |
| Home intro | `text-slate-500` tagline | Author name + bio paragraph + social links |

## Risks / Trade-offs

- **Risk**: Users may find full `rounded-none` too harsh → **Mitigation**: The warm paper palette softens the visual impact; the lack of shadow/glow is the point
- **Risk**: Courier Prime may not render well on all CJK systems → **Mitigation**: Courier Prime is a Google Font with broad browser support; Chrome elements are minimal (headings, dates, labels)
- **Risk**: Pine green accent may not have enough contrast for accessibility → **Mitigation**: `#1a6b4a` on paper `#f9f6f0` yields ~5.6:1 contrast ratio, passing WCAG AA for normal text

### 7. Token Enforcement (Hard Constraints)

Three enforcement layers prevent devs and agents from using hardcoded or unregistered values.

**L1 — `lib/tokens.ts` (TypeScript type system)**

```typescript
export const TOKENS = {
  color: {
    paper:        "var(--color-paper)",
    ink:          "var(--color-ink)",
    muted:        "var(--color-muted)",
    accent:       "var(--color-accent)",
    accentHover:  "var(--color-accent-hover)",
    line:         "var(--color-line)",
    surfaceHover: "var(--color-surface-hover)",
  },
  font: {
    courier: "var(--font-courier)",
    body:    "var(--font-fira)",
    code:    "var(--font-jetbrains)",
  },
} as const;
```

Components import `TOKENS` for style objects. Typo in key (`TOKENS.color.paper` vs `papper`) → TypeScript compile error.

**L2 — Tailwind palette lock + ESLint (build-time)**

- `tailwind.config.js`: remove all default Tailwind color scales (slate, blue, gray, etc.). Only token-mapped colors remain.
- `eslint.config.mjs`: add `tailwindcss/no-arbitrary-value: "error"` to ban `bg-[#abc]` and `text-[...]`.

Existing Tailwind default-color references (`text-slate-500`, `bg-slate-50`) must be migrated to token colors.

**L3 — Impeccable Detect custom rule (PR/commit gate)**

`.impeccable/config.json` adds a `no-hardcoded-colors` rule matching hex patterns. Any `#xxxxxx` hardcoded color in source files is intercepted at commit time.

### Costs

| Layer | New Files | Migration Cost |
|---|---|---|
| L1 | `lib/tokens.ts` | None (new file, no existing code) |
| L2 | Modify `tailwind.config.js` + `eslint.config.mjs` | **High**: migrate all `text-slate-*`/`bg-slate-*` to token colors |
| L3 | Modify `.impeccable/config.json` | Low, config only |
