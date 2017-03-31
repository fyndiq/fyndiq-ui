# fyndiq-component-button

A button component for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-component-button
```

# Usage

``` js
import React from 'react'
import Button from 'fyndiq-component-button'

// Normal usage
<Button onClick={() => console.log('clicked')}>
  My Button
</Button>

// Red button
<Button
  type="cancel"
  onClick={() => console.log('canceled')}
>
  Cancel my task
</Button>

// Bigger button
<Button
  size="l"
  onClick={() => console.log('clicked')}
>
  My big button
</Button>

// Disabled usage
<Button disabled>My disabled Button</Button>
```

# API

The component `Button` has the following customizable props:

- **type**: (String) One of `primary`, `cancel`, `blue`, `inverted`. Changes the color style of the button
- **size**: (String) One of `xs`, `s`, `l`, `xl`. Changes the size of the button
- **disabled**: (Boolean) If true, will disable the button.
