const { testFilesGlobPatterns } = require('./helpers');

module.exports = {
  extends: [
    './index',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
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
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ts-expect-error': 'off',
      },
    },
  ],
  plugins: ['json', 'typescript-sort-keys'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
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
