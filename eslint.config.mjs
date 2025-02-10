import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["src/**/*.{js,ts}"],
    plugins: {
      prettier: prettier,
    },
    rules: {
      "prettier/prettier": "error",
      "no-unused-vars": "warn",
      "prefer-const": "warn",
      "no-console": "warn",
    },
    languageOptions: {
      globals: globals.node
    },
    ignores: ["node_modules", "dist"],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
];