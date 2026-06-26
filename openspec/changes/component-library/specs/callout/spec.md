## MODIFIED Requirements

### Requirement: Callout with variant styling
The component SHALL support a `variant` prop to control the visual style (info, warning, danger, tip).

#### Scenario: Info variant
- **WHEN** a `<Callout variant="info" title="Note">` is used
- **THEN** the callout renders with a blue/neutral color scheme

#### Scenario: Warning variant
- **WHEN** a `<Callout variant="warning" title="Caution">` is used
- **THEN** the callout renders with a yellow/amber color scheme

#### Scenario: Danger variant
- **WHEN** a `<Callout variant="danger" title="Warning">` is used
- **THEN** the callout renders with a red color scheme

#### Scenario: Tip variant
- **WHEN** a `<Callout variant="tip" title="Tip">` is used
- **THEN** the callout renders with a green color scheme

#### Scenario: Default variant (backward compatible)
- **WHEN** a `<Callout>` is used without a `variant` prop
- **THEN** the callout renders with the existing neutral style (backward compatible with current usage)
