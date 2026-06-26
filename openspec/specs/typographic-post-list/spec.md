# typographic-post-list Specification

## Purpose
TBD - created by archiving change warm-typescript-redesign. Update Purpose after archive.
## Requirements
### Requirement: Post entry is a text row, not a card
Each post entry in the list SHALL be rendered as a plain `<Link>` text row without any box, shadow, gradient, or background.

#### Scenario: Post entry rendered
- **WHEN** the post list is displayed
- **THEN** each entry is a block-level `<Link>` with no `bg-white`, no `rounded-lg`, no `shadow`, no `overflow-hidden`

### Requirement: Date column in Courier Prime
Each post entry SHALL display the publish date in Courier Prime with `font-variant-numeric: tabular-nums`, ensuring equal digit width for aligned titles.

#### Scenario: Date column alignment
- **WHEN** multiple post entries are listed with different dates
- **THEN** all dates render with equal-width digits, so title text starts at a consistent horizontal position

### Requirement: Title as link
The post title SHALL be a clickable link in accent green, styled as a block heading.

#### Scenario: Title link hovered
- **WHEN** the user hovers over a post title
- **THEN** the title color changes to `--color-accent-hover` and an underline appears

### Requirement: Summary in body font
Post summaries SHALL NOT be displayed in the home page post list. The summary field is reserved for post pages only.

#### Scenario: Summary suppressed
- **WHEN** a post has a summary in its metadata
- **THEN** the home page entry does not render the summary text

### Requirement: Tags displayed inline after title
Post tags SHALL be displayed on the home page as clickable `<Link>` elements navigating to `/tags/{tag}`. Each tag uses Courier Prime, muted color, `text-xs`, with hover underline and accent-hover color.

#### Scenario: Tags displayed as links
- **WHEN** a post has tags ["JavaScript", "Design Pattern"]
- **THEN** the entry shows "#JavaScript #Design Pattern" as clickable links to `/tags/JavaScript` and `/tags/Design Pattern`

#### Scenario: No tags
- **WHEN** a post has no tags or an empty tag array
- **THEN** no tag row is rendered

### Requirement: Horizontal rule separator between entries
Post entries SHALL be separated by a warm-colored `<hr>` element, not by card gaps.

#### Scenario: Multiple entries
- **WHEN** the post list contains 3+ entries
- **THEN** a horizontal rule in `--color-line` separates each consecutive pair of entries

### Requirement: Compact vertical spacing
Post entries SHALL use py-1.5 (6px) vertical padding and zero-margin hr separators.

#### Scenario: Entry spacing
- **WHEN** two post entries are adjacent
- **THEN** the visual gap between entries is controlled by a compact hr, not by card padding

