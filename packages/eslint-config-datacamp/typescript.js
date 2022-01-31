const { testFilesGlobPatterns } = require('./helpers');

module.exports = {
  extends: [
    './index',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      files: [...testFilesGlobPatterns, '*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
    {
      files: testFilesGlobPatterns,
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ts-expect-error': 'off',
      },
    },
  ],
  plugins: ['json', 'typescript-sort-keys', 'prefer-type-alias'],
  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        custom: {
          match: false,
          regex: '^I[A-Z]',
        },
        format: ['PascalCase'],
        selector: 'interface',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'prefer-type-alias/prefer-type-alias': 'error',
    'react/prop-types': 'off',
    'typescript-sort-keys/interface': [
      'error',
      'asc',
      { caseSensitive: false, natural: true },
    ],
    'typescript-sort-keys/string-enum': [
      'error',
      'asc',
      { caseSensitive: false, natural: true },
    ],
  },
};
