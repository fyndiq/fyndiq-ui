# fyndiq-icon-arrow [![npm](https://img.shields.io/npm/v/fyndiq-icon-arrow.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-icon-arrow)

An arrow icon for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-icon-arrow
```

# Usage

``` js
import React from 'react'
import Arrow from 'fyndiq-icon-arrow'

// Basic usage
<Arrow />

// Change orientation of the arrow
<Arrow orientation="down" />
```

# API

The icon `Arrow` has the following customizable props:

| Name | Type | Description | Default value |
|---|---|---|---|
| **orientation** | String | Orientation of the arrow (can be `up`, `down`, `right` or `left`) | `left` |
| **className** | String | Optional class for advanced styling | `''` |
