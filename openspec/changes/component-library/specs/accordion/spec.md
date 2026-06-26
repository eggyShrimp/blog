## ADDED Requirements

### Requirement: Collapsible content section
The component SHALL render a collapsible section with a clickable title that toggles visibility of the content.

#### Scenario: Collapsed by default
- **WHEN** an `<Accordion title="Details">` is used without `defaultOpen`
- **THEN** the section renders collapsed with only the title visible

#### Scenario: Expanded by default
- **WHEN** an `<Accordion title="Details" defaultOpen={true}>` is used
- **THEN** the section renders expanded with content visible

### Requirement: Toggle interaction
Clicking the title SHALL toggle the content visibility.

#### Scenario: Click to expand
- **WHEN** the user clicks the title of a collapsed accordion
- **THEN** the content expands and becomes visible

#### Scenario: Click to collapse
- **WHEN** the user clicks the title of an expanded accordion
- **THEN** the content collapses and becomes hidden

### Requirement: Accessible interaction
The component SHALL use proper ARIA attributes for screen reader compatibility.

#### Scenario: ARIA state
- **WHEN** the accordion is rendered
- **THEN** the toggle button has `aria-expanded` reflecting the current state
