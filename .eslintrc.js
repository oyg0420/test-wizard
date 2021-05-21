module.exports = {
  extends: ['react-app', 'airbnb-base', 'airbnb-base/rules/strict', 'prettier'],
  plugins: ['prettier'],
  rules: {
    camelcase: 0,
    'import/prefer-default-export': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'global-require': 0,
    'import/order': 0,
    'import/extensions': 0,
    'no-extend-native': 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'consistent-return': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.tsx', '**/*.spec.tsx', 'config-overrides.js'],
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'accumulator', // for reduce accumulators
          'e', // for e.returnvalue
          'draft', // for Immer
          'staticContext', // for ReactRouter context
        ],
      },
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', 'ts', 'tsx'],
      },
    ],
    'react/sort-comp': [
      'warn',
      {
        order: ['static-methods', 'lifecycle', '/^on.+$/', 'everything-else', 'rendering'],
        groups: {
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
    'sort-imports': ['error'],
    'prettier/prettier': ['error'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['src'],
      },
    },
  },
};
