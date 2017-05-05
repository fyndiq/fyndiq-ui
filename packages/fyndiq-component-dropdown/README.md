# fyndiq-component-dropdown [![npm](https://img.shields.io/npm/v/fyndiq-component-dropdown.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-dropdown)

[Preview](http://developers.fyndiq.com/fyndiq-ui/?selectedKind=Dropdown&selectedStory=default)

A dropdown component for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-component-dropdown
```

# Usage

``` js
import React from 'react'
import Dropdown from 'fyndiq-component-dropdown'

// Normal usage
<Dropdown button="Open dropdown">
  <div>Dropdown content</div>
</Dropdown>

// No arrow pointing downwards
<Dropdown button="Open dropdown" noArrow>
  <div>Dropdown content</div>
</Dropdown>

// Custom button
import Button from 'fyndiq-component-button'
<Dropdown button={(
  <Button type="primary">
    Open Dropdown
  </Button>
)}>
  <div>Dropdown content</div>
</Dropdown>
```

See also : [`fyndiq-component-button`](/fyndiq/labday-fyndiq-ui/tree/master/packages/fyndiq-component-button)

# API

The component `Dropdown` has the following customizable props:

| Name | Type | Description | Default value |
|---|---|---|---|
| **button** | String or Component | The inside of the dropdown's button. If a String is passed, a `<Button>` will be shown. | (required) |
| **children** | Component | Content of the dropdown | (required) |
| **noArrow** | boolean | If **button** is used in String mode, hides the downwards arrow | `false` |
| **opened** | boolean | Allows to externally control the dropdown | `false` |
| **size** | String | Size of the button if **button** is used in String mode. For values, see [`Button`'s API`](../fyndiq-component-button#API) | Button's default |
