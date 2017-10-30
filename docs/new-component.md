# Create a new component

## New files

Create a directory under `/packages/`, name it `fyndiq-[type]-[name]`
where **[type]** can be `component` or `styles`.

Under this directory create a `package.json` file, a `[name].css` file,
a `src/index.js` file and a `README.md` file.

This guide will show you how to create a simple `MyComponent` component,
that displays a name, and uses Fyndiq Theme Colors.

### `package.json`

``` json
{
  "name": "fyndiq-component-mycomponent",
  "version": "2.0.0",
  "author": "Your Self <your.self@fyndiq.com>",
  "main": "lib/index.js",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/fyndiq/fyndiq-ui.git"
  },
  "homepage": "http://developers.fyndiq.com/fyndiq-ui/?selectedKind=MyComponent&selectedStory=default",
  "dependencies": {
    "fyndiq-styles-colors": "*"
  },
  "peerDependencies": {
    "css-loader": "^0.28.7",
    "postcss-cssnext": "^3.0.2",
    "postcss-import": "^11.0.0",
    "postcss-loader": "^2.0.6",
    "prop-types": "^15.0.0",
    "react": "^15.0.0 || ^16.0.0"
  }
}
```

### `src/index.js`

``` js
import React from 'react'
import PropTypes from 'prop-types'

import styles from '../mycomponent.css'

const MyComponent = ({ name }) => (
  <span className={styles.test}>
    Hello {name}
  </span>
)

MyComponent.propTypes = {
  name: PropTypes.string,
}

MyComponent.defaultProps = {
  name: 'World',
}

export default MyComponent
```

### `mycomponent.css`

``` css
@import "fyndiq-styles-colors/colors.css";
.test {
  color: --color-brand;
}
```

### `README.md`

~~~ markdown

# fyndiq-component-mycomponent [![npm](https://img.shields.io/npm/v/fyndiq-component-mycomponent.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-mycomponent)

[Preview](http://developers.fyndiq.com/fyndiq-ui/?selectedKind=MyComponent&selectedStory=default)

A component MyComponent for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-component-mycomponent
```

# Usage

``` js
import React from 'react'
import MyComponent from 'fyndiq-component-mycomponent'

// Normal usage
<MyComponent name="test" />
```

# API

The component `MyComponent` has the following customizable props:

| Name | Type | Description | Default value |
|---|---|---|---|
| **name** | String | The name | `World` |
~~~

## Storybook showcase

Now you need to showcase your component in the storybook: start by
adding a dependency to your `fyndiq-component-mycomponent` in
`packages/fyndiq-ui-test/package.json` file.


Next, create a file `component-mycomponent.js` in
`/packages/fyndiq-ui-test/stories/`, that will contain the
following:

~~~ js
import React from 'react'
import { storiesOf } from '@storybook/react'
import MyComponent from 'fyndiq-component-mycomponent'

storiesOf('MyComponent', module)
  .addWithInfo('default', () => (
    <MyComponent />
  ))
  .addWithInfo('change name', () => (
    <MyComponent name="Earth" />
  ))
~~~

You can then run `npm run bootstrap` to fix the internal dependencies,
then run `npm run dev` and go to `localhost:6006` to see your new 
component in action

## Release the component

Once your component has been reviewed, you can follow the
[release steps](./release.md)
