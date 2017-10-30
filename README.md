<div align="center">

![fyndiq-ui logo](https://github.com/fyndiq/fyndiq-ui/blob/master/docs/logo.jpg?raw=true)

# fyndiq-ui

[![Build Status](https://travis-ci.org/fyndiq/fyndiq-ui.svg?branch=master)](https://travis-ci.org/fyndiq/fyndiq-ui) [![Coverage Status](https://coveralls.io/repos/github/fyndiq/fyndiq-ui/badge.svg?branch=master)](https://coveralls.io/github/fyndiq/fyndiq-ui?branch=master) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Library of reusable components for Fyndiq

# Usage
</div>

Install one of the provided packages (see list below) in your React project:

``` bash
npm i -S fyndiq-component-button
```

Every component provide their own style using CSSNext. Thus, you need to be able to import CSS files inside your project. Using Webpack2, you can have an entry similar to this:

``` js
module: {
  rules: [
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: true,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: () => ([
                require('postcss-import'),
                require('postcss-cssnext'),
              ]),
            },
          },
        ],
      }),
    },
  ],
},
```

You will need the following loaders:

``` bash
npm i -D postcss-loader css-loader style-loader extract-text-webpack-plugin postcss-import postcss-cssnext
```

<div align="center">

# Packages
</div>

This git repository is a monorepo built using [Lerna](//lernajs.io). It contains several packages:

| Package | Version | Description |
|------|----|----|
| [`fyndiq-component-alert`](/packages/fyndiq-component-alert) | [![npm](https://img.shields.io/npm/v/fyndiq-component-alert.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-alert) | Alert component |
| [`fyndiq-component-button`](/packages/fyndiq-component-button) | [![npm](https://img.shields.io/npm/v/fyndiq-component-button.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-button) | Button component |
| [`fyndiq-component-checkbox`](/packages/fyndiq-component-checkbox) | [![npm](https://img.shields.io/npm/v/fyndiq-component-checkbox.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-checkbox) | Checkbox component |
| [`fyndiq-component-dropdown`](/packages/fyndiq-component-dropdown) | [![npm](https://img.shields.io/npm/v/fyndiq-component-dropdown.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-dropdown) | Dropdown component |
| [`fyndiq-component-modal`](/packages/fyndiq-component-modal) | [![npm](https://img.shields.io/npm/v/fyndiq-component-modal.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-modal) | Modal component |
| [`fyndiq-component-price`](/packages/fyndiq-component-price) | [![npm](https://img.shields.io/npm/v/fyndiq-component-price.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-price) | Price tag component |
| [`fyndiq-component-productcard`](/packages/fyndiq-component-productcard) | [![npm](https://img.shields.io/npm/v/fyndiq-component-productcard.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-productcard) | Product card component |
| [`fyndiq-component-productlist`](/packages/fyndiq-component-productlist) | [![npm](https://img.shields.io/npm/v/fyndiq-component-productlist.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-productlist) | Product list component |
| [`fyndiq-component-stars`](/packages/fyndiq-component-stars) | [![npm](https://img.shields.io/npm/v/fyndiq-component-stars.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-stars) | Stars component |
| [`fyndiq-component-tooltip`](/packages/fyndiq-component-tooltip) | [![npm](https://img.shields.io/npm/v/fyndiq-component-tooltip.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-tooltip) | Tooltip component |
| [`fyndiq-component-brand`](/packages/fyndiq-component-brand)  | [![npm](https://img.shields.io/npm/v/fyndiq-component-brand.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-brand) | Brand component |
| [`fyndiq-component-loader`](/packages/fyndiq-component-loader) | [![npm](https://img.shields.io/npm/v/fyndiq-component-loader.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-loader) | Loader component |
| [`fyndiq-icons`](/packages/fyndiq-icons) | [![npm](https://img.shields.io/npm/v/fyndiq-icons.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-icons) | Icons |
| [`fyndiq-illustrations`](/packages/fyndiq-illustrations) | [![npm](https://img.shields.io/npm/v/fyndiq-illustrations.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-illustrations) | Illustrations |
| [`fyndiq-styles-colors`](/packages/fyndiq-styles-colors) | [![npm](https://img.shields.io/npm/v/fyndiq-styles-colors.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-styles-colors) | Default colors |
| [`fyndiq-styles-fonts`](/packages/fyndiq-styles-fonts) | [![npm](https://img.shields.io/npm/v/fyndiq-styles-fonts.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-styles-fonts) | Default Fonts and helpers |
| [`fyndiq-styles-medias`](/packages/fyndiq-styles-medias) | [![npm](https://img.shields.io/npm/v/fyndiq-styles-medias.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-styles-medias) | Default media queries |

<div align="center">

# Contribute
</div>

Clone the repository, then run

```
npm i
npm run bootstrap
npm run dev
```

The Storybook will be available on port `6006`.

To create a new component, create a new folder in the `packages/` directory and put your code in `src/`. Then, add your newly created package to the dependencies of `fyndiq-ui-test`'s package.json file, run `npm run bootstrap` and restart `npm run dev`.
