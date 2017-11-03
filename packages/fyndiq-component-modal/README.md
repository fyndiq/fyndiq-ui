# fyndiq-component-modal [![npm](https://img.shields.io/npm/v/fyndiq-component-modal.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-modal)

[Preview](http://developers.fyndiq.com/fyndiq-ui/?selectedKind=Modal&selectedStory=default)

A Modal component for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-component-modal
```

# Usage

The easiest way to use the `Modal` component is to open it using `ModalButton` component:

``` js
import React from 'react'
import { ModalButton } from 'fyndiq-component-mycomponent'

// Normal usage
<ModalButton button="Open Modal">
  Modal content
</ModalButton>
```

This setup will take care of opening the modal when pressing on the button, as well as closing the modal when clicking outside or pressing escape.

To customize the modal itself, you can pass it as a children:

``` js
import React from 'react'
import Modal, { ModalButton } from 'fyndiq-component-mycomponent'

// Advanced styling
<ModalButton>
  <Modal overlayClassName="overlay" wrapperClassName="wrapper">
    Content
  </Modal>
</ModalButton>

// Access the onClose method from the children by using a function
<ModalButton>
  <Modal>
    {({ onClose }) => (
      <div>
        Content
        <button onClick={onClose}>Close popup</button>
      </div>
    )}
  </Modal>
</ModalButton>
```

For advanced use, you can use directly the `Modal` component and control its `open` prop, as well as binding the `onClose` callback prop.

# API

The component `Modal` has the following customizable props:

| Name | Type | Description | Default value |
|---|---|---|---|
| **open** | Boolean | Shows or hide the modal | `false` |
| **children** | React Node or Function | Content of the modal. If a function is passed, a `onClose` prop will be passed to it, to allow for programatical closing | `null` |
| **overlayClassName** | String | ClassName of the background overlay | `` |
| **wrapperClassName** | String | ClassName of the content wrapper | `` |
| **closeClassName** | String | ClassName of the close button | `` |
| **forced** | Boolean | Force the modal to be shown. Clicking outside or pressing ESC won't close it, instead you will have to use the `children` prop in function mode to programatically close it | `false` |
| **onClose** | Function | Handler method called when the modal is closed | `() => {}` |

The component `ModalButton` has the following customizable props

| Name | Type | Description | Default value | 
|---|---|---|---|
| **button** | [Button](../fyndiq-component-button/) or String | Content of the button that will open the modal. If a string is passed, it will be converted to a Button Component | `Open Modal` |
| **children** | React Element | Content of the modal. If the element is not a `Modal` Component, it will be wrapped into one. Pass a `Modal` component as children to allow customisation of the Modal. | `null` |
