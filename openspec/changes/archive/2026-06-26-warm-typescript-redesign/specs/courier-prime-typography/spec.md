## ADDED Requirements

### Requirement: Courier Prime loaded for chrome elements
The system SHALL load Courier Prime (weights 400, 700) via `next/font/google` with `font-display: swap`.

#### Scenario: Font loaded and available
- **WHEN** the page loads
- **THEN** `var(--font-courier)` is available in the CSS cascade

### Requirement: Chrome elements use Courier Prime
All heading elements (h1-h3), date labels, navigation links, and tag labels SHALL use Courier Prime as their font family.

#### Scenario: Post title rendered
- **WHEN** a blog post title (h1) is rendered
- **THEN** the font family is `Courier Prime, PingFang SC, ...sans-serif`

#### Scenario: Date label rendered
- **WHEN** a date string is displayed in post metadata
- **THEN** the font family is Courier Prime

#### Scenario: Navigation link rendered
- **WHEN** a nav `<Link>` component is rendered
- **THEN** the font family is Courier Prime

### Requirement: Body text remains Fira Sans
Paragraph text, summaries, and prose content SHALL continue to use Fira Sans (Latin) and system CJK (Chinese) fonts.

#### Scenario: Article body rendered
- **WHEN** MDX prose content is rendered inside `<article>`
- **THEN** the font family for paragraph text is Fira Sans, not Courier Prime
