module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  extends: [
    'next/core-web-vitals', // Next.js recommended ESLint rules
    'prettier', // Prettier rules
    'eslint:recommended', // Basic ESLint rules
    'plugin:prettier/recommended', // Integrate Prettier with ESLint
    'plugin:@typescript-eslint/recommended', // TypeScript-specific linting rules
    'plugin:tailwindcss/recommended', // Tailwind CSS linting rules
  ],
  plugins: ['simple-import-sort', 'prettier', '@typescript-eslint'], // Include sorting, Prettier, and TypeScript plugins
  rules: {
    // Custom rules start here
    'react/no-unescaped-entities': 'off', // Disable the unescaped entities rule for JSX
    'tailwindcss/no-unnecessary-arbitrary-value': 'off', // Disable Tailwind arbitrary value warnings
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto', // Automatically handle line endings based on OS
      },
    ],
    'sort-imports': 'off', // Disable default sort imports rule in favor of custom sorting
    'tailwindcss/no-custom-classname': 'off', // Allow custom Tailwind classnames
    '@typescript-eslint/no-var-requires': 'off', // Allow usage of `require` in TypeScript files
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^.+\\.s?css$'], // CSS/SCSS imports come first
          [
            `^(${require('module').builtinModules.join('|')})(/|$)`, // Built-in Node.js modules
            '^react', // React-related imports
            '^@?\\w', // Third-party packages
          ],
          ['^components(/.*|$)'], // Components directory imports
          ['^lib(/.*|$)', '^hooks(/.*|$)'], // Utility libraries and hooks
          ['^\\.'], // Relative imports (starting with `.`)
        ],
      },
    ],
  },
  settings: {
    tailwindcss: {
      callees: ['cn'], // Recognize Tailwind helper functions like `cn` (className)
      config: 'tailwind.config.js', // Tailwind config file path
    },
  },
};
