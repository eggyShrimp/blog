## ADDED Requirements

### Requirement: Responsive image with caption
The component SHALL render an image with an optional caption displayed below it.

#### Scenario: Image with caption
- **WHEN** a `<Figure src="/photo.jpg" alt="Sunset" caption="A beautiful sunset">` is used
- **THEN** the image renders with "A beautiful sunset" as a caption below

#### Scenario: Image without caption
- **WHEN** a `<Figure src="/photo.jpg" alt="Sunset">` is used
- **THEN** the image renders with no caption text below

### Requirement: Image with alt text
The component SHALL require alt text for accessibility.

#### Scenario: Alt text provided
- **WHEN** a `<Figure src="/photo.jpg" alt="Description">` is used
- **THEN** the `<img>` element has the `alt="Description"` attribute

### Requirement: Responsive sizing
The component SHALL constrain the image to its container width while maintaining aspect ratio.

#### Scenario: Image larger than container
- **WHEN** a `<Figure>` is rendered inside a narrow container
- **THEN** the image scales down to fit the container width without distortion

### Requirement: Priority loading for above-fold images
The component SHALL support a `priority` flag for above-fold images.

#### Scenario: Priority image
- **WHEN** a `<Figure src="/hero.jpg" alt="Hero" priority={true}>` is used
- **THEN** Next.js `<Image>` renders with `priority` for preloading
