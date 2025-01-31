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
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "storybook", "jsdoc"], // Fix plugin names
  rules: { "valid-jsdoc": "off", "require-jsdoc": "off" },
  settings: {
    react: {
      version: "latest",
    },
  },
};
