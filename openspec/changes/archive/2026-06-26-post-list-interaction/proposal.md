## Why

Two issues with the post list: dates don't align because Courier Prime uses proportional digits by default, and tags are displayed as static `<span>` text without navigation. The previous `home-refinement` spec incorrectly declared that tags should be removed from the home page — the implementation kept them and now the user confirms: tags belong on the home page and should be clickable.

## What Changes

- **Date alignment**: Add `tabular-nums` to date column so all dates render with equal digit widths, aligning titles vertically
- **Tag interaction**: Replace static `<span>` with `<Link href="/tags/{tag}">` so readers can click tags to filter posts
- **Spec correction**: `typographic-post-list` spec updated to reflect that tags ARE displayed and are interactive

## Capabilities

### Modified Capabilities

- `typographic-post-list`: Tags are displayed on home page and rendered as clickable `<Link>` elements. Dates use tabular numbers.

## Impact

- **Modified**: `app/components/post-preview/index.tsx`
- **No new files or dependencies**
