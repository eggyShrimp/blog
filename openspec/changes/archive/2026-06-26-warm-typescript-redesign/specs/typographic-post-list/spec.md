## ADDED Requirements

### Requirement: Post entry is a text row, not a card
Each post entry in the list SHALL be rendered as a plain `<Link>` text row without any box, shadow, gradient, or background.

#### Scenario: Post entry rendered
- **WHEN** the post list is displayed
- **THEN** each entry is a block-level `<Link>` with no `bg-white`, no `rounded-lg`, no `shadow`, no `overflow-hidden`

### Requirement: Date column in Courier Prime
Each post entry SHALL display the publish date in Courier Prime, muted color, as a standalone line above the title.

#### Scenario: Date displayed
- **WHEN** a post with date "2024-01-24" is listed
- **THEN** the date renders as "2024-01-24" in Courier Prime, `--color-muted`

### Requirement: Title as link
The post title SHALL be a clickable link in accent green, styled as a block heading.

#### Scenario: Title link hovered
- **WHEN** the user hovers over a post title
- **THEN** the title color changes to `--color-accent-hover` and an underline appears

### Requirement: Summary in body font
The post summary SHALL be rendered in Fira Sans (body font), muted color, below the title.

#### Scenario: Summary displayed
- **WHEN** a post has a summary
- **THEN** the summary renders in Fira Sans, `--color-muted`

### Requirement: Tags displayed inline after title
Post tags SHALL be displayed as inline labels in Courier Prime, muted, prefixed with `#`.

#### Scenario: Tags displayed
- **WHEN** a post has tags ["JavaScript", "Design Pattern"]
- **THEN** the entry shows "#JavaScript #Design Pattern" in Courier Prime

### Requirement: Horizontal rule separator between entries
Post entries SHALL be separated by a warm-colored `<hr>` element, not by card gaps.

#### Scenario: Multiple entries
- **WHEN** the post list contains 3+ entries
- **THEN** a horizontal rule in `--color-line` separates each consecutive pair of entries
