# fyndiq-component-tooltip [![npm](https://img.shields.io/npm/v/fyndiq-component-tooltip.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-tooltip)

[Preview](http://developers.fyndiq.com/fyndiq-ui/?selectedKind=Tooltip&selectedStory=default)

A tooltip component for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-component-tooltip
```

# Usage

``` js
import React from 'react'
import Tooltip from 'fyndiq-component-tooltip'

// Normal usage
<Tooltip text="Help text">Hover me</Tooltip>

// Different position
<Tooltip text="Top help text" position="tl">
  Hover me
</Tooltip>
```

# API

The component `Stars` has the following customizable props:

| Name | Type | Description | Default value |
|---|---|---|---|
| **text** | Node | The tooltip text | `null` |
| **children** | Node | Content over which the tooltip should show up | `null` |
| **className** | String | Classname of the tooltip wrapper | `''` |
| **wrapperClassName** | String | Classname of the dropdown wrapper (parent of className) | `''` |
| **position** | String | The position of the tooltip (see [Dropdown's API](../fyndiq-component-dropdown#api) for possible values) | `bc` |
| **maxWidth** | Number | Max width of the tooltip | `190` | 

