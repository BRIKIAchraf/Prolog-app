import eslint from "@eslint/js";
import tsEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import storybookPlugin from "eslint-plugin-storybook";
import jsdocPlugin from "eslint-plugin-jsdoc";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  eslint.configs.recommended, // Base ESLint recommended rules
  {
    ignores: [
      "node_modules/",
      "dist/",
      "public/",
      "package-lock.json",
      "yarn.lock",
      ".next/",
      "next-env.d.ts",
    ],
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"], // Specify file extensions
    languageOptions: {
      parser: tsParser, // Use TypeScript parser
      ecmaVersion: "latest", // Use the latest ECMAScript version
      sourceType: "module", // Use ES modules
    },
    plugins: {
      react: reactPlugin, // React plugin
      "@typescript-eslint": tsEslint, // TypeScript plugin
      storybook: storybookPlugin, // Storybook plugin
      jsdoc: jsdocPlugin, // JSDoc plugin
      "@next/next": nextPlugin, // Next.js plugin
    },
    rules: {
      "valid-jsdoc": "off", // Disable this rule (deprecated)
      "require-jsdoc": "off", // Disable this rule (deprecated)
      "jsdoc/require-returns": "off", // Disable this rule if you don't want to enforce @returns
      "jsdoc/check-tag-names": "off", // Disable this rule if you don't want to enforce tag names
      "jsdoc/no-undefined-types": "off", // Disable this rule if you don't want to enforce type definitions
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },
  nextPlugin.configs.recommended, // Next.js recommended rules
  nextPlugin.configs["core-web-vitals"], // Next.js core web vitals rules
];
