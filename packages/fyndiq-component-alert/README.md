# fyndiq-component-alert

An alert component for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-component-alert
```

# Usage

``` js
import React from 'react'
import Alert from 'fyndiq-component-alert'

// Normal usage
<Alert>
  Here is my alert
</Alert>

// Red alert
<Alert type="bad">
  You have some issues
</Alert>
```

# API

The component `Alert` has the following customizable props:

- **type**: (String) One of `info`, `good`, `bad`, `warning`. Changes the color style of the alert. (Default: `info`)
- **onClose**: (Function) Handler called when the alert is closed
