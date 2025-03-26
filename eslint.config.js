import js from '@eslint/js';
import globals from 'globals';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
    js.configs.recommended,
    eslintPluginPrettier,
    {
      ignores: ['**/node_modules/**', '**/dist/**', 'eslint.config.js'],
    },
    {
      plugins: {
        'import': importPlugin,
        'simple-import-sort': simpleImportSort,
      },
    },
    {
      files: ['**/*.{js,jsx}'],
    },
    {
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
      },
    },
    {
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
    }
]
