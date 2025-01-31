module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "google",
    "prettier",
    "plugin:storybook/recommended", // Only include this once
    "plugin:jsdoc/recommended", // Add this line
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "storybook", "jsdoc"], // Add "jsdoc" here
  rules: {
    "valid-jsdoc": "off", // Disable this rule (deprecated)
    "require-jsdoc": "off", // Disable this rule (deprecated)
    "jsdoc/require-returns": "off", // Disable this rule if you don't want to enforce @returns
    "jsdoc/check-tag-names": "off", // Disable this rule if you don't want to enforce tag names
    "jsdoc/no-undefined-types": "off", // Disable this rule if you don't want to enforce type definitions
  },
  settings: {
    react: {
      version: "latest",
    },
  },
};
