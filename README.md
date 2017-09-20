<div align="center">

![fyndiq-ui logo](https://github.com/fyndiq/fyndiq-ui/blob/master/docs/logo.jpg?raw=true)

# fyndiq-ui

[![Build Status](https://travis-ci.org/fyndiq/fyndiq-ui.svg?branch=master)](https://travis-ci.org/fyndiq/fyndiq-ui) [![Coverage Status](https://coveralls.io/repos/github/fyndiq/fyndiq-ui/badge.svg?branch=master)](https://coveralls.io/github/fyndiq/fyndiq-ui?branch=master) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

Library of reusable components for Fyndiq

# Usage
</div>

Install one of the provided packages (see list below) in your React project:

``` bash
npm i -S fyndiq-component-button
```

Every component provide their own style using LESS. Thus, you need to be able to import LESS files inside your project. Using Webpack2, you can have an entry similar to this:

``` js
module: {
  rules: [
    {
      test: /\.less$/,
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
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: 'inline',
              plugins: () => ([
                require('autoprefixer'),
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
npm i -D postcss-loader less-loader css-loader style-loader extract-text-webpack-plugin autoprefixer
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
| [`fyndiq-component-price`](/packages/fyndiq-component-price) | [![npm](https://img.shields.io/npm/v/fyndiq-component-price.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-price) | Price tag component |
| [`fyndiq-component-productcard`](/packages/fyndiq-component-productcard) | [![npm](https://img.shields.io/npm/v/fyndiq-component-productcard.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-productcard) | Product card component |
| [`fyndiq-component-productlist`](/packages/fyndiq-component-productlist) | [![npm](https://img.shields.io/npm/v/fyndiq-component-productlist.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-productlist) | Product list component |
| [`fyndiq-component-stars`](/packages/fyndiq-component-stars) | [![npm](https://img.shields.io/npm/v/fyndiq-component-stars.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-stars) | Stars component |
| [`fyndiq-component-tooltip`](/packages/fyndiq-component-tooltip) | [![npm](https://img.shields.io/npm/v/fyndiq-component-tooltip.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-tooltip) | Tooltip component |
| [`fyndiq-icon-arrow`](/packages/fyndiq-icon-arrow) | [![npm](https://img.shields.io/npm/v/fyndiq-icon-arrow.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-icon-arrow) | Arrow icon |
| [`fyndiq-icon-brand`](/packages/fyndiq-icon-brand)  | [![npm](https://img.shields.io/npm/v/fyndiq-icon-brand.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-icon-brand) | Brand icon |
| [`fyndiq-icon-checkmark`](/packages/fyndiq-icon-checkmark)  | [![npm](https://img.shields.io/npm/v/fyndiq-icon-checkmark.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-icon-checkmark) | Checkmark icon |
| [`fyndiq-icon-loader`](/packages/fyndiq-icon-loader) | [![npm](https://img.shields.io/npm/v/fyndiq-icon-loader.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-icon-loader) | Loader icon |
| [`fyndiq-icon-star`](/packages/fyndiq-icon-star) | [![npm](https://img.shields.io/npm/v/fyndiq-icon-star.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-icon-star) | Star icon |
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

To create a new component, create a new folder in the `packages/` directory and put your code in `src/`. Then, add your newly created package to the dependencies of `fyndiq-ui-test`'s package.json file, run `npm run bootstrap` and restart `npm run dev`.
