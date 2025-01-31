module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "google",
    "prettier",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {},
  settings: {
    react: {
      version: "latest",
    },
  },
};
