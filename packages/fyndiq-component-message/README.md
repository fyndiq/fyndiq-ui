# fyndiq-component-message [![npm](https://img.shields.io/npm/v/fyndiq-component-message.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-message)

[Preview](http://developers.fyndiq.com/fyndiq-ui/?selectedKind=Message&selectedStory=default)

A Message component and utils for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-component-message
```

# Usage

``` js
import React from 'react'
import { addMessage, Message, Wrapper } from 'fyndiq-component-message'

// First you need to render the <Wrapper /> somewhere on your app.
// It is recommended that you put it somewhere in the root of your app:
const MyApp = () => (
  <React.Fragment>
    <Wrapper />
    <Layout /> {/* Rest of your app*/}
  </React.Fragment>
)

// Next, you can use the utility `addMessage` to show
// a message. It will be automatically removed after 5 seconds
// if the user didn't interact with it.
addMessage(<Message>Content</Message>)

// Note that you can use this utility anywhere, not just in the
// render method of a component
class MyComponent extends React.Component {
  componentDidMount() {
    fetch('/my-api')
      .then(/* do something with the data*/)
      .catch(err => addMessage(
        <Message>Something bad happened</Message>
      ))
  }
}

// Customize the message
import { Error, Warning } from 'fyndiq-icons
addMessage(
  <Message
    type="error"
    icon={<Error />}
  >
    There is something wrong here
  </Message>
)
```

# API

The component `Message` has the following customizable props:

| Name | Type | Description | Default value |
|---|---|---|---|
| **type** | String | Color scheme of the Message. One of `info`, `confirm`, `warn` or `error`. | `info` |
| **icon** | Icon | Icon from `fyndiq-icons` | `null` |
| **children** | Element | Text displayed inside the popup | `null` |
| **timeout** | Number | Time (in ms) until the message requests to be closed | `5000` |
| **onClose** | Function | Handler called when the message requests to be closed. Used internally by `addMessage` | `() => {}` |
