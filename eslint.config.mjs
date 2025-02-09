import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import jsdoc from "eslint-plugin-jsdoc";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    plugins: {
      jsdoc: jsdoc,
    },
  },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      eqeqeq: "off",
      "no-unused-vars": "error",
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
      "jsdoc/require-description": "error",
      "jsdoc/check-values": "error",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
