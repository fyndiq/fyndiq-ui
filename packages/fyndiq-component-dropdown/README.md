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
  Dropdown content
</Dropdown>

// No arrow pointing downwards
<Dropdown button="Open dropdown" noArrow>
  Dropdown content
</Dropdown>

// Custom button
import Button from 'fyndiq-component-button'
<Dropdown button={(
  <Button type="primary">
    Open Dropdown
  </Button>
)}>
  Dropdown content
</Dropdown>

// Open dropdown on hover
<Dropdown button="Hover me" hoverMode>
  Dropdown content
</Dropdown>

// Change the position of the dropdown
<Dropdown button="Top right" position="tr">
  Dropdown content
</Dropdown>
```

See also : [`fyndiq-component-button`](/fyndiq/labday-fyndiq-ui/tree/master/packages/fyndiq-component-button)

# API

The component `Dropdown` has the following customizable props:

- **opened**: (Boolean) controls externally the state of the dropdown
- **button**: (String or Component) The inside of the dropdown's button
- **size**: (String) size of the button (see button API for possible values)
- **position**: (String) position of the dropdown, relatively to the button. One of `bl`, `bc`, `br`, `tl`, `tc`, `tr`
- **hoverMode**: (Boolean) if true, the dropdown will open when the user hovers over the button
- **noWrapperStyle**: (boolean) if true, the dropdown wrapper will have no cosmetic styles
- **noArrow**: (boolean) if true and if `button` is used in String mode, hides the downwards arrow
