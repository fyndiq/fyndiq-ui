# fyndiq-styles-fonts [![npm](https://img.shields.io/npm/v/fyndiq-styles-fonts.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-styles-fonts)

Font helpers for Fyndiq

# Installation

The styles can be installed through NPM:

``` bash
npm i -S fyndiq-styles-fonts
```

# Usage

This package exposes 2 main modules: `bootstrap.css` and `fonts.css`.

### `bootstrap.css`

This script bootstraps the usage of the fonts, declaring and loading the fonts (WOFF, EOT) as well as setting the default font on the `<html>` tag.

``` js
// In Javascript
import `fyndiq-styles-fonts/bootstrap.css`
```

In order for it to work properly, a custom loader for the WOFF and EOT files need to be implemented in your webpack config


``` js
{
  module: {
    loaders: [{
      test: /\.(eot|woff)$/,
      loader: 'file-loader',
    }],
  },
}
```

### `fonts.css`

This file exposes 2 variables: the `@font-standard` which corresponds to font supposed to be in the body of your webpage, and `@font-headline` which corresponds to the headlines font.

``` css
@import "fyndiq-styles-fonts/fonts.css";

h3.mySpecialHeadline {
  font-family: var(--font-headline);
}
```
