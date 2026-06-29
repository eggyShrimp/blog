import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".opencode/**",
  ]),
  {
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "Literal[value=/^#[0-9a-fA-F]{3,8}$/]",
          message: "Use design token (var(--color-*)) instead of hardcoded hex colors",
        },
      ],
    },
  },
  {
    files: ["lib/colors.ts"],
    rules: {
      "no-restricted-syntax": "off",
    },
  },
]);

export default eslintConfig;
