# warm-typescript-tokens Specification

## Purpose
TBD - created by archiving change warm-typescript-redesign. Update Purpose after archive.
## Requirements
### Requirement: Global warm palette CSS custom properties
The system SHALL define CSS custom properties on `:root` for all semantic color tokens.

#### Scenario: Palette tokens available globally
- **WHEN** any page or component is rendered
- **THEN** the following CSS variables are available: `--color-paper: #f9f6f0`, `--color-ink: #2c241b`, `--color-muted: #8b7e6b`, `--color-accent: #1a6b4a`, `--color-accent-hover: #0f4d33`, `--color-line: #e5dfd3`, `--color-surface-hover: #f3efe8`

### Requirement: Global zero decoration
The system SHALL set `border-radius: 0` globally on all elements.

#### Scenario: No rounded corners anywhere
- **WHEN** any element is rendered
- **THEN** the element has zero border-radius regardless of Tailwind utility classes

### Requirement: Body background is warm paper
The `<body>` element SHALL use `--color-paper` as its background color.

#### Scenario: Page loads
- **WHEN** the page is rendered
- **THEN** the body background color is `#f9f6f0`, not white

### Requirement: Remove all decorative styles
The system SHALL remove `box-shadow`, `backdrop-filter`, and `linear-gradient` from all components.

#### Scenario: No decorative effects present
- **WHEN** any component is rendered
- **THEN** no element has box-shadow, backdrop-filter, or linear-gradient applied

