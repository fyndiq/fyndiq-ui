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

// Alert than can't be closed
<Alert unclosable>
  You cannot close me
</Alert>

// Alert with unique component key and show number of times
<Alert type="warning" stopShowingAfter={5} stopShowingAfterKey="Warning">
  You closed me, I will come 5 times to remind you
</Alert>

```

# API

The component `Alert` has the following customizable props:

- **type**: (String) One of `info`, `good`, `bad`, `warning`. Changes the color style of the alert. (Default: `info`)
- **unclosable**: (Boolean) if true, will not display a closing cross
- **onClose**: (Function) Handler called when the alert is closed
- **stopShowingAfter**: (Number) Number of times to show Alert
- **stopShowingAfterKey**: (String) Unique Key of component to show number of times.
