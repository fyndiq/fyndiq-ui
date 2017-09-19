# fyndiq-styles-colors [![npm](https://img.shields.io/npm/v/fyndiq-styles-colors.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-styles-colors)

Fyndiq brand colors

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-styles-colors
```

# Usage

You can use the brand colors module for your CSS files (recommended) and Javascript files

### CSS

``` CSS
@import "fyndiq-styles-colors/colors.css"

.myDiv {
  color: var(--color-red);
}
```

### JS

``` js
import colors from 'fyndiq-styles-colors'

<div style={{ color: colors.red }}>
  Red text
</div>
```

# API

See the [source](./colors.css) for more information about all colors
