import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021
      },
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended
    ],
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn'
    }
  }
];