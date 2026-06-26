## MODIFIED Requirements

### Requirement: Summary in body font
Post summaries SHALL NOT be displayed in the home page post list. The summary field is reserved for post pages only.

#### Scenario: Summary suppressed
- **WHEN** a post has a summary in its metadata
- **THEN** the home page entry does not render the summary text

### Requirement: Tags displayed inline after title
Post tags SHALL NOT be displayed in the home page post list. Tags remain visible on post pages and /tags pages.

#### Scenario: Tags suppressed
- **WHEN** a post has tags ["JavaScript", "Design Pattern"]
- **THEN** the home page entry does not display tags

### Requirement: Date column in Courier Prime
Each post entry SHALL display the publish date inline with the title, separated by an em-dash, on the same row.

#### Scenario: Date displayed inline
- **WHEN** a post with date "2024-01-24" is listed
- **THEN** the entry shows "2024-01-24 — {title}" on the same line

## ADDED Requirements

### Requirement: Compact vertical spacing
Post entries SHALL use py-1.5 (6px) vertical padding and zero-margin hr separators.

#### Scenario: Entry spacing
- **WHEN** two post entries are adjacent
- **THEN** the visual gap between entries is controlled by a compact hr, not by card padding
