module.exports = {
  extends: ['fyndiq', 'plugin:jest/recommended'],
  plugins: ['jest'],
  rules: {
    // This rules causes issues because of nested packages.json, disabling
    'import/no-extraneous-dependencies': 0,
  },
  env: {
    jest: true,
  },
}
