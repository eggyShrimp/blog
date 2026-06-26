## MODIFIED Requirements

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

## ADDED Requirements

### Requirement: Courier Prime CJK fallback is serif
Where Courier Prime is used for chrome elements, the CJK fallback SHALL be Songti SC (serif), preserving the serif texture across Latin and CJK characters.

#### Scenario: Date label with Chinese characters
- **WHEN** a date or tag label in Courier Prime contains CJK characters
- **THEN** those characters shall render in Songti SC or system serif fallback
