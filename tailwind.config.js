/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: [
          "var(--font-libre)",
          "Songti SC",
          "SimSun",
          "serif",
        ],
        courier: [
          "var(--font-courier)",
          "Songti SC",
          "SimSun",
          "monospace",
        ],
        sans: [
          "PingFang SC",
          "Hiragino Sans GB",
          "Microsoft YaHei",
          "var(--font-fira)",
          ...defaultTheme.fontFamily.sans,
        ],
        mono: [
          "var(--font-jetbrains)",
          "monospace",
        ],
      },
      colors: {
        paper:        "var(--color-paper)",
        ink:          "var(--color-ink)",
        muted:        "var(--color-muted)",
        accent:       "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        line:         "var(--color-line)",
        "surface-hover": "var(--color-surface-hover)",
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            maxWidth: "42em",
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            "h1, h2, h3, h4, h5, h6": {
              fontFamily: theme("fontFamily.sans").join(", "),
            },
            "--tw-prose-body": theme("colors.ink"),
            "--tw-prose-headings": theme("colors.ink"),
            "--tw-prose-links": theme("colors.accent"),
            "--tw-prose-bold": theme("colors.ink"),
            "--tw-prose-captions": theme("colors.muted"),
            "--tw-prose-quotes": theme("colors.ink"),
            "--tw-prose-quote-borders": theme("colors.line"),
            "--tw-prose-hr": theme("colors.line"),
            "--tw-prose-code": theme("colors.ink"),
            "--tw-prose-pre-bg": theme("colors.surface-hover"),
            "--tw-prose-pre-code": theme("colors.ink"),
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
