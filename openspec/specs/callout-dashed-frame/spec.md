# callout-dashed-frame Specification

## Purpose
TBD - created by archiving change warm-typescript-redesign. Update Purpose after archive.
## Requirements
### Requirement: Callout uses dashed outline frame
The Callout component SHALL use a dashed border outline (`border-dashed`) in `--color-line` instead of a solid rounded box.

#### Scenario: Callout rendered
- **WHEN** a Callout component is rendered with content
- **THEN** the frame is a dashed outline in warm grey, with no rounded corners, no gradient, and no shadow

### Requirement: Callout background is warm surface
The Callout background SHALL use `--color-surface-hover` (warm paper tint), not white or slate.

#### Scenario: Callout background
- **WHEN** a Callout is rendered
- **THEN** the background color is `#f3efe8`

### Requirement: Callout preserves icon and title layout
The existing icon + title + content structure SHALL be preserved unchanged.

#### Scenario: Callout with icon and title
- **WHEN** `<Callout icon="💡" title="复习一下">` is used
- **THEN** the icon and title appear in the same layout position as before, but with the new warm styling

### Requirement: Backward compatible with existing MDX content
Existing MDX posts that use `<Callout>` SHALL render correctly with the new styling.

#### Scenario: Existing MDX content unchanged
- **WHEN** posts like `design-pattern.mdx` render with `<Callout icon={"💡"} title="复习一下">`
- **THEN** the callout renders correctly with the new warm typescript styling

