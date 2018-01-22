module.exports = {
  extends: 'fyndiq',
  rules: {
    // These rules causes issues because of nested packages.json, disabling
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': [2, { ignore: ['@storybook/react'] }],
    'import/extensions': [2, { ignorePackages: true }],

    'jsx-a11y/label-has-for': ['error', {
      required: {
        every: ['nesting'],
      },
    }],
  },
}
