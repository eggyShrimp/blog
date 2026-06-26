## Context

Two small but visible issues: dates don't align because Courier Prime defaults to proportional digits, and tags on the home page are static text when they could be clickable navigation aids.

## Decisions

### 1. `tabular-nums` for date column

`font-variant-numeric: tabular-nums` forces all digit glyphs to equal width. Tailwind has the `tabular-nums` utility class directly.

**Rationale**: Courier Prime, like many fonts, ships proportional-width digits. Even in a monospace font, "1" is narrower than "0". Tabular numbers fix this with zero layout impact.

### 2. Tags as `<Link>` instead of `<span>`

```html
<Link href="/tags/{tag}" className="font-courier text-xs no-underline hover:underline">
  #{tag}
</Link>
```

**Rationale**: `<span>` gives no scroll-navigation affordance. Tags are a natural filtering entry point on the home page.
