import js from "@eslint/js";
import pluginQuery from "@tanstack/eslint-plugin-query";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ["dist"] },
  js.configs.recommended,
  ...pluginQuery.configs["flat/recommended"],
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    ...reactPlugin.configs.flat.recommended,
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...reactPlugin.configs.flat.recommended.rules,
      "react/no-unescaped-entities": "off",
      "react/prop-types": "off",
    },
  },
  reactPlugin.configs.flat["jsx-runtime"],
  prettier,
];
