## ADDED Requirements

### Requirement: Numbered step sequence
The component SHALL render children as a numbered sequence of steps.

#### Scenario: Multiple steps
- **WHEN** a `<Steps>` contains three child elements
- **THEN** each child is prefixed with a sequential number (1, 2, 3)

### Requirement: Step content supports rich markdown
Each step SHALL support nested markdown content including paragraphs, lists, code blocks, and images.

#### Scenario: Step with code block
- **WHEN** a step child contains a `<CodeBlock>` component
- **THEN** the code block renders correctly within the step

### Requirement: Visual step indicator
Each step SHALL display a visual marker (numbered circle or similar) alongside the content.

#### Scenario: Step rendering
- **WHEN** a `<Steps>` component is rendered
- **THEN** each step has a visible numbered indicator aligned to the top of the step content
