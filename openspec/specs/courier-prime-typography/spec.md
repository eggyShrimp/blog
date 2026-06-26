# courier-prime-typography Specification

## Purpose
TBD - created by archiving change warm-typescript-redesign. Update Purpose after archive.
## Requirements
### Requirement: Courier Prime loaded for chrome elements
The system SHALL load Courier Prime (weights 400, 700) via `next/font/google` with `font-display: swap`.

#### Scenario: Font loaded and available
- **WHEN** the page loads
- **THEN** `var(--font-courier)` is available in the CSS cascade

### Requirement: Chrome elements use Courier Prime
Navigation links, date labels, and tag labels SHALL use Courier Prime as their font family. Heading elements (h1-h6) SHALL use Fira Sans instead.

#### Scenario: Navigation link rendered
- **WHEN** a nav `<Link>` component is rendered
- **THEN** the font family is Courier Prime

#### Scenario: Article title rendered
- **WHEN** a blog post title (h1) is rendered
- **THEN** the font family is Fira Sans, PingFang SC, sans-serif

#### Scenario: Date label rendered
- **WHEN** a date string is displayed in post metadata
- **THEN** the font family is Courier Prime, Songti SC serif fallback

### Requirement: Body text remains Fira Sans
Paragraph text, summaries, and prose content SHALL continue to use Fira Sans (Latin) and system CJK (Chinese) fonts.

#### Scenario: Article body rendered
- **WHEN** MDX prose content is rendered inside `<article>`
- **THEN** the font family for paragraph text is Fira Sans, not Courier Prime

### Requirement: Courier Prime CJK fallback is serif
Where Courier Prime is used for chrome elements, the CJK fallback SHALL be Songti SC (serif), preserving the serif texture across Latin and CJK characters.

#### Scenario: Date label with Chinese characters
- **WHEN** a date or tag label in Courier Prime contains CJK characters
- **THEN** those characters shall render in Songti SC or system serif fallback

