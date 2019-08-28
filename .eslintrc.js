// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script',
  },
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  extends: 'airbnb-base',
  rules: {
    'strict': ['error', 'global'],
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: {
          array: false,
          object: true,
        },
      },
    ],
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
  },
};
