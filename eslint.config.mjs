// eslint.config.mjs
import path from "node:path";
import { fileURLToPath } from "node:url";

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import nextPlugin from "@next/eslint-plugin-next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  // Ignorer les dossiers générés + fichiers générés
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "dist/**",
      "next-env.d.ts",
    ],
  },

  // Fichiers de config Node (Next config, configs, scripts)
  {
    files: ["next.config.*", "**/*.config.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-undef": "off",
    },
  },

  // Base JS
  js.configs.recommended,

  // TypeScript (flat config)
  ...tseslint.configs.recommended,

  // React + React Hooks + Next
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "@next/next": nextPlugin,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        tsconfigRootDir: __dirname,
      },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
    },
  },
];
