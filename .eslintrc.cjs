module.exports = {
  env: {
    browser: true,
    es2021: true,
    // Add vitest environment
    "vitest-globals/env": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    // Add vitest plugin
    "vitest-globals",
  ],
  rules: {
    // Add vitest global access rule
    "vitest-globals/no-standalone-expect": "error",
  },
}
