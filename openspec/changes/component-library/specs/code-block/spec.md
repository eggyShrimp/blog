## ADDED Requirements

### Requirement: Code block with language identifier
The component SHALL render a code block with syntax highlighting via the specified language.

#### Scenario: Language specified
- **WHEN** a `<CodeBlock language="typescript">` is used with TypeScript code
- **THEN** the code block renders with TypeScript syntax highlighting

#### Scenario: No language specified
- **WHEN** a `<CodeBlock>` is used without a `language` prop
- **THEN** the code block renders as plain text without syntax highlighting

### Requirement: Code block with filename label
The component SHALL optionally display a filename label above the code block.

#### Scenario: Filename provided
- **WHEN** a `<CodeBlock filename="src/utils.ts">` is used
- **THEN** a label showing "src/utils.ts" appears above the code block

#### Scenario: No filename provided
- **WHEN** a `<CodeBlock>` is used without a `filename` prop
- **THEN** no filename label is displayed

### Requirement: Code block with line highlighting
The component SHALL optionally highlight specified lines within the code block.

#### Scenario: Highlight lines specified
- **WHEN** a `<CodeBlock highlightLines={[2, 5, 6]}>` is used
- **THEN** lines 2, 5, and 6 have a distinct background color

#### Scenario: No highlight lines specified
- **WHEN** a `<CodeBlock>` is used without `highlightLines`
- **THEN** no lines are highlighted

### Requirement: Code block with line numbers
The component SHALL optionally display line numbers.

#### Scenario: Line numbers enabled
- **WHEN** a `<CodeBlock showLineNumbers={true}>` is used
- **THEN** each line is prefixed with its line number

#### Scenario: Line numbers disabled
- **WHEN** a `<CodeBlock>` is used without `showLineNumbers`
- **THEN** no line numbers are displayed

### Requirement: Code block with copy button
The component SHALL display a copy button that copies the code content to clipboard.

#### Scenario: Copy button clicked
- **WHEN** the user clicks the copy button
- **THEN** the code content is copied to the clipboard and the button text briefly changes to "Copied!"
