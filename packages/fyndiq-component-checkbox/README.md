# fyndiq-component-checkbox

A checkbox component for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-component-checkbox
```

# Usage

``` js
import React from 'react'
import Checkbox from 'fyndiq-component-checkbox'

// Basic usage
<Checkbox onToggle={newStatus => console.log(newStatus)} />

// Control the checked state
<Checkbox checked />

// Change the color of the checkmark
<Checkbox color="red" />

// Disabled checkbox
<Checkbox disabled />
```

# API

The component `Checkbox` has the following customizable props:

- **onToggle**: (Function) The handler called whenever the checkbox changes state. The argument passed is the new state of the checkbox.
- **className**: (String) optional class for advanced styling (size, ...)
- **color**: (String) The color of the checkmark (default : light grey)
- **checked**: (Boolean) If true, will activate the checkbox.
- **disabled**: (Boolean) If true, will disable the checkbox.
