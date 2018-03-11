module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended', 'plugin:jest/recommended'],
  rules: {
    'react/jsx-filename-extension': 0,
    camelcase: 0
  },
  env: {
    browser: true
  }
};
