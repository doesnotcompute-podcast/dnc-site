module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    'plugin:vue/recommended',
    // https://github.com/prettier/eslint-config-prettier
    'prettier',
    'prettier/standard'
  ],
  globals: {
    mixpanel: false
  }
}
