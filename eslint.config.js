import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default tseslint.config(
  { ignores: ["**/node_modules/**", "**/dist/**"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintPluginPrettier,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'import': importPlugin,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'no-console': 'warn',
      'import/first': 'warn',
      'import/newline-after-import': 'warn',
      'import/no-duplicates': 'warn',
      'simple-import-sort/imports': [
        'warn',
        {
          'groups': [
            ['^\\u0000'],
            ['^@', '^'],
            ['^\\./'],
            ['^.+\\.(css|scss)$'],
            ['^.+\\.(gif|png|svg|jpg)$']
          ]
        }
      ],
      'simple-import-sort/exports': 'warn',
    },
  },
);
