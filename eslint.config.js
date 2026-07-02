import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'warn',
      eqeqeq: 'error',
    },
  },
  {
    // Tell ESLint that Jest injects these globals into test files.
    files: ['test/**/*.js'],
    languageOptions: {
      globals: { describe: 'readonly', test: 'readonly', expect: 'readonly' },
    },
  },
];
