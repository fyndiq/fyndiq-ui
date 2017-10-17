# fyndiq-component-brand [![npm](https://img.shields.io/npm/v/fyndiq-component-brand.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-brand)

[Preview](http://developers.fyndiq.com/fyndiq-ui/?selectedKind=Icon%20Brand&selectedStory=default)

A logo icon for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-component-brand
```

# Usage

``` js
import React from 'react'
import FyndiqLogo from 'fyndiq-component-brand'

// Basic usage
<FyndiqLogo />

// Show only the outline version of the logo
<FyndiqLogo type="outline" />

// Add a tagline to the logo
<FyndiqLogo>
  Fyndshopping på nätet
</FyndiqLogo>

// Square version
import { Square } from 'fyndiq-component-brand'
<Square />
<Square type="outline" />
```

# API

The icon `FyndiqLogo` has the following customizable props:

| Name | Type | Description | Default value |
|---|---|---|---|
| **type** | String | Special type for the arrow (can be `outline`, `outline-bw`, `bw`, `outline-transp`, `outline-transp-bw`) | `normal` |
| **className** | String | Optional class for advanced styling | `''` |
| **height** | Number | height of the logo | `60` |
| **width** | Number | width of the logo | `undefined` |
| **taglineSize** | Number | Size of the tagline (if provided) | `6.5` |
