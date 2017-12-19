# fyndiq-icons [![npm](https://img.shields.io/npm/v/fyndiq-icons.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-icons)

A set of icons for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-icons
```

# Usage

To see the name of the icons in the set, please visit the [demo](//http://developers.fyndiq.com/fyndiq-ui/?selectedKind=Icons&selectedStory=default)

``` js
import React from 'react'
import { Pencil, Checkmark } from 'fyndiq-icons'

// Normal usage
<Checkmark />

// Change the color
import colors from 'fyndiq-style-colors'
<Pencil color={colors.blue} />
```

To change the color of the Icon in CSS, do the following:

``` css
/*
  It is important to always set both the fill
  and stroke to a specified color.
*/
.myIcon {
  fill: red;
  stroke: red;
}
```

``` js
import { Magnifier } from 'fyndiq-icons'

<Magnifier className="myIcon" />
```

# API

All icons have the following API:

| Name | Type | Description | Default value |
|---|---|---|---|
| **className** | String | An optional classname to put on the root SVG | `''` |
| **color** | String | Set the color of the icon in SVG | `` |

Additionnaly, some icons provide special props:

### Arrow

| Name | Type | Description | Default value |
|---|---|---|---|
| **orientation** | String | Specifies the orientation of the arrow. One of `up`, `down`, `right` or `left`  | `left` |

### Star

| Name | Type | Description | Default value |
|---|---|---|---|
| **full** | Number | Describes how "full" the star is. Usefull to show half-stars. 1 is full, 0 is empty.  | `1` (full) |
| **color** | String | In the case of the star, this attribute corresponds to the color of the full part of the star.  | `` |
| **colorEmpty** | String | Color of the empty part of the star  | `` |
