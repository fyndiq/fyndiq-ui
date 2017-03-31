# fyndiq-component-dropdown

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

- **button**: (String or Component) The inside of the dropdown's button
- **noArrow**: (boolean) if true and if `button` is used in String mode, hides the downwards arrow
