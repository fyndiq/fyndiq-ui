# fyndiq-component-checkbox [![npm](https://img.shields.io/npm/v/fyndiq-component-checkbox.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-checkbox)

[Preview](http://developers.fyndiq.com/fyndiq-ui/?selectedKind=Checkbox&selectedStory=default)

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

| Name | Type | Description | Default value |
|---|---|---|---|
| **onToggle** | Function | The handler called whenever the checkbox changes state. The argument passed is the new state of the checkbox. | `noop => noop`
| **className** | String | Optional class for advanced styling | `''` |
| **color** | String | The color of the checkmark | light grey |
| **checked** | Boolean | Activates the checkbox. | `false` |
| **disabled** | Boolean | Disables the checkbox. | `false` |
