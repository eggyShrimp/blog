## MODIFIED Requirements

### Requirement: Tags displayed inline after title
Post tags SHALL be displayed on the home page as clickable `<Link>` elements navigating to `/tags/{tag}`. Each tag uses Courier Prime, muted color, `text-xs`, with hover underline and accent-hover color.

#### Scenario: Tags displayed as links
- **WHEN** a post has tags ["JavaScript", "Design Pattern"]
- **THEN** the entry shows "#JavaScript #Design Pattern" as clickable links to `/tags/JavaScript` and `/tags/Design Pattern`

#### Scenario: No tags
- **WHEN** a post has no tags or an empty tag array
- **THEN** no tag row is rendered

### Requirement: Date column in Courier Prime
Each post entry SHALL display the publish date in Courier Prime with `font-variant-numeric: tabular-nums`, ensuring equal digit width for aligned titles.

#### Scenario: Date column alignment
- **WHEN** multiple post entries are listed with different dates
- **THEN** all dates render with equal-width digits, so title text starts at a consistent horizontal position
