module.exports = {
  root: true,

  env: {
    browser: true,
    es6: true,
  },

  extends: [
    'airbnb',
  ],

  parser: 'babel-eslint',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  plugins: [],

  rules: {
    'no-console': 0,
    'no-debugger': 0,
    'linebreak-style': 0,
    'class-methods-use-this': 0,
    'no-param-reassign': 0,
    'import/no-extraneous-dependencies': 0,
    'import/order': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0,
    'react/no-array-index-key': 1,
    'react/state-in-constructor': 0,
    'react/sort-comp': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-autofocus': 0,
  },

  settings: {
    'import/ignore': ['node_modules'],
    'import/extensions': ['.js', '.jsx'],
  },
};
