## ADDED Requirements

### Requirement: Link card with metadata
The component SHALL render a clickable card displaying a title, optional description, and URL.

#### Scenario: Full card
- **WHEN** a `<Card title="MDN Docs" description="Web development reference" url="https://developer.mozilla.org">` is used
- **THEN** a card renders with "MDN Docs" as title, "Web development reference" as description, and links to the URL

#### Scenario: Card with title only
- **WHEN** a `<Card title="MDN Docs" url="https://developer.mozilla.org">` is used
- **THEN** a card renders with the title and URL, no description

### Requirement: External link behavior
The card SHALL open external links in a new tab with `rel="noopener noreferrer"`.

#### Scenario: External URL
- **WHEN** the card's `url` is an external URL (starts with `http`)
- **THEN** clicking the card opens the link in a new tab

#### Scenario: Internal URL
- **WHEN** the card's `url` is a relative path (starts with `/`)
- **THEN** clicking the card navigates within the app using Next.js `<Link>`

### Requirement: Optional icon
The card SHALL optionally display an icon alongside the title.

#### Scenario: Card with icon
- **WHEN** a `<Card title="GitHub" url="https://github.com" icon="🐙">` is used
- **THEN** the emoji icon appears before the title
