# fyndiq-component-tooltip

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
<Tooltip text="Help text">Hover me</Tooltip

// Different position
<Tooltip text="Top help text" position="tl">
  Hover me
</Tooltip>
```

# API

The component `Stars` has the following customizable props:

- **text**: (String) The tooltip text
- **position**: (String) The position of the tooltip (see [Dropdown's API](../fyndiq-component-dropdown#api))
