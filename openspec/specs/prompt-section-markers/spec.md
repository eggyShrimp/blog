# prompt-section-markers Specification

## Purpose
TBD - created by archiving change warm-typescript-redesign. Update Purpose after archive.
## Requirements
### Requirement: Prompt markers are not functional headings
Prompt markers SHALL be decorative `<p>` elements, not `<h2>` headings, preserving screen reader hierarchy.

#### Scenario: Screen reader encounters prompt marker
- **WHEN** a screen reader navigates the page
- **THEN** the prompt marker is read as normal text, not as a heading landmark

