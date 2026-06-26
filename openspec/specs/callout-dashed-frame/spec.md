# callout-accent-border Specification

## Purpose
The Callout component uses a solid left accent border in `--color-accent` (pine green) with a warm surface background.

## Requirements

### Requirement: Callout uses solid left accent border
The Callout component SHALL use a solid 4px left border (`border-l-4`) in `--color-accent` instead of a dashed outline frame.

#### Scenario: Callout rendered
- **WHEN** a Callout component is rendered with content
- **THEN** the left border is a solid 4px line in pine green, with warm surface background, no rounded corners, no gradient, and no shadow

### Requirement: Callout background is warm surface
The Callout background SHALL use `--color-surface-hover` (warm paper tint `#f3efe8`).

#### Scenario: Callout background
- **WHEN** a Callout is rendered
- **THEN** the background color is `#f3efe8`

### Requirement: Icon and title are baseline-aligned
When both icon and title are present, they SHALL be aligned on the text baseline (`items-baseline`) with `leading-none` to eliminate line-height interference.

#### Scenario: Callout with icon and title
- **WHEN** `<Callout icon="💡" title="复习一下">` is used
- **THEN** the emoji icon and title text sit on the same baseline, appearing visually aligned

### Requirement: Callout preserves icon and title layout
The existing icon + title + content structure SHALL be preserved unchanged.

#### Scenario: Callout with icon only
- **WHEN** `<Callout icon="💡">` is used without a title
- **THEN** the icon appears above the content, no title element rendered

#### Scenario: Callout with title only
- **WHEN** `<Callout title="Note">` is used without an icon
- **THEN** the title appears as a standalone block with `leading-none`

### Requirement: Backward compatible with existing MDX content
Existing MDX posts that use `<Callout>` SHALL render correctly with the new styling.

#### Scenario: Existing MDX content unchanged
- **WHEN** posts like `design-pattern.mdx` render with `<Callout icon={"💡"} title="复习一下">`
- **THEN** the callout renders correctly with the new accent border styling
