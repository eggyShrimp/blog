## ADDED Requirements

### Requirement: Section markers use $ prompt syntax
Section headings on the home page and tag page SHALL be styled as prompt-style markers (e.g., `$ ls posts/`) in Courier Prime, accent green.

#### Scenario: Home page section marker
- **WHEN** the home page renders
- **THEN** a section marker like `$ ls posts/` appears above the post list in Courier Prime, `--color-accent`

### Requirement: Prompt markers are not functional headings
Prompt markers SHALL be decorative `<p>` elements, not `<h2>` headings, preserving screen reader hierarchy.

#### Scenario: Screen reader encounters prompt marker
- **WHEN** a screen reader navigates the page
- **THEN** the prompt marker is read as normal text, not as a heading landmark
