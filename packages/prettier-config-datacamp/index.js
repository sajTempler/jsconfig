module.exports = {
  useTabs: false,
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'es5',
  semi: true,
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'avoid',
  proseWrap: 'preserve',
  overrides: [
    {
      files: ['*.json'],
      options: { parser: 'json' },
    },
  ],
};
