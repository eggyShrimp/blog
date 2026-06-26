export const TOKENS = {
  color: {
    paper:        "var(--color-paper)",
    ink:          "var(--color-ink)",
    muted:        "var(--color-muted)",
    accent:       "var(--color-accent)",
    accentHover:  "var(--color-accent-hover)",
    line:         "var(--color-line)",
    surfaceHover: "var(--color-surface-hover)",
  },
  font: {
    courier: "var(--font-courier)",
    body:    "var(--font-fira)",
    code:    "var(--font-jetbrains)",
  },
} as const;

export type TokenColor = keyof typeof TOKENS.color;
export type TokenFont = keyof typeof TOKENS.font;
