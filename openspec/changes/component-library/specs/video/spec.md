## ADDED Requirements

### Requirement: YouTube video embed
The component SHALL render an embedded YouTube video with responsive sizing.

#### Scenario: YouTube embed
- **WHEN** a `<Video id="dQw4w9WgXcQ" title="Rick Astley">` is used
- **THEN** an iframe renders with the YouTube embed URL and the specified title

### Requirement: Responsive container
The component SHALL maintain a 16:9 aspect ratio within its container.

#### Scenario: Responsive sizing
- **WHEN** the `<Video>` is rendered in a narrow container
- **THEN** the iframe scales to fit the container width while maintaining 16:9 aspect ratio

### Requirement: Optional dimensions
The component SHALL accept optional width and height to override default sizing.

#### Scenario: Custom dimensions
- **WHEN** a `<Video id="abc123" width={640} height={360}>` is used
- **THEN** the iframe renders with the specified dimensions
