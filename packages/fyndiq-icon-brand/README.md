# fyndiq-icon-brand

A logo icon for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-icon-brand
```

# Usage

``` js
import React from 'react'
import FyndiqLogo from 'fyndiq-icon-brand'

// Basic usage
<FyndiqLogo />

// Show only the outline version of the logo
<FyndiqLogo type="outline" />

// Add a tagline to the logo
<FyndiqLogo>
  Fyndshopping på nätet
</FyndiqLogo>
```

# API

The icon `FyndiqLogo` has the following customizable props:

- **type**: (String) Special type for the arrow (can be `normal` (default), `outline`, `outline-bw`, `bw`, `outline-transp`, `outline-transp-bw`)
- **className**: (String) optional class for advanced styling (size, ...)
- **height**: (Number) height of the logo
- **width**: (Number) width of the logo
- **taglineSize**: (Number) Size of the tagline, if provided (default: 6.5)
