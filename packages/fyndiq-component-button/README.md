# fyndiq-component-button [![npm](https://img.shields.io/npm/v/fyndiq-component-button.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-button)

[Preview](http://developers.fyndiq.com/fyndiq-ui/?selectedKind=Button&selectedStory=default)

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

// Custom className
<Button className="additional-styles">Button</Button>

// Disabled usage
<Button disabled>My disabled Button</Button>

// Render a link as a button
<Button link="#hello">My link</Button>

// Use a custom Link element
import { Link } from 'react-router-dom'
<Button
  link={<Link to="my/path" />}
>
  My link
</Button>
```

# API

The component `Button` has the following customizable props:

| Name | Type | Description | Default value |
|---|---|---|---|
| **type** | String | One of `primary`, `cancel`, `blue`, `inverted`. Changes the color style of the button | `normal` |
| **htmlType** | String | Set the original html type for `button`. See: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | `undefined` |
| **className** | String | Classname of the wrapping button | `''` |
| **size** | String | One of `xs`, `s`, `l`, `xl`. Changes the size of the button | `m` |
| **disabled** | Boolean | If true, will disable the button. | `false` |
| **pressed** | Boolean | Show the button as pressed | `false` |
| **link** | String or Element | Uses an `<a>` tag or a custom element to render the button | `undefined` |
| **onClick** | Function | Callback when the button is pressed | `noop => noop` |
