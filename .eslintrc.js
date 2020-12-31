module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    "linebreak-style": [0, "error", "windows"],
    'quotes': 'off',
    'indent': 'off',
    // "generator-star-spacing": "off",
    // "no-tabs": "off",
    // "no-unused-vars": "off",
    // "no-console": "off",
    // "no-irregular-whitespace": "off",
    // "no-debugger": "off",
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
