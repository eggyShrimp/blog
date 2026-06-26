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
Each post entry SHALL display the publish date inline with the title, separated by an em-dash, on the same row.

#### Scenario: Date displayed inline
- **WHEN** a post with date "2024-01-24" is listed
- **THEN** the entry shows "2024-01-24 — {title}" on the same line

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
Post tags SHALL NOT be displayed in the home page post list. Tags remain visible on post pages and /tags pages.

#### Scenario: Tags suppressed
- **WHEN** a post has tags ["JavaScript", "Design Pattern"]
- **THEN** the home page entry does not display tags

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

