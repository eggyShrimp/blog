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
  extend: {
    fontFamily: {
      sans: [
        "var(--font-fira)",
        "var(--font-notosans)",
        ...defaultTheme.fontFamily.sans
      ],
      article: [
        "var(--font-fira)",
        "var(--font-notosans)",
        ...defaultTheme.fontFamily.sans,
      ],
      title: [
        "var(--font-lato)",
        "var(--font-notosans)",
        ...defaultTheme.fontFamily.sans,
      ],
      default: [...defaultTheme.fontFamily.sans],
    },
    typography: theme => ({
      DEFAULT: {
        css: {
          "code::before": {
            content: '""',
          },
          "code::after": {
            content: '""',
          },
        },
      },
    }),
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
