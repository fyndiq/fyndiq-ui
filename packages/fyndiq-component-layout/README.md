# fyndiq-component-layout [![npm](https://img.shields.io/npm/v/fyndiq-component-layout.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-layout)

A set of Layout components for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-component-layout
```

# `<Sidebar />`

[Demo](http://developers.fyndiq.com/fyndiq-ui/?selectedKind=Layout%2FSidebar&selectedStory=default)

This component helps to create a nice Sidebar. **It has a peerDependency on react-router-dom** since it
uses React Router's [NavLink](https://reacttraining.com/react-router/web/api/NavLink) component.

## Usage

``` js
import React from 'react'
import { Sidebar } from 'fyndiq-component-layout'
import { Bag, Shop } from 'fyndiq-icons'

// Normal usage
<Sidebar items={[
  {
    name: 'Orders',
    icon: <Bag />,
    to: '/orders',
  }, {
    name: 'Articles',
    icon: <Shop />,
    to: '/articles',
  }
]} />
```

## API

The component `Input` has the following customizable props:

| Name | Type | Description | Default value |
|---|---|---|---|
| **items** | Array | Items describing the content of the sidebar | `[]` |

**NOTE ON BEST PRACTICES:** Because of the way NavLink handles active links, it's always good to
have children routes under the parent routes.

#### Example:

- `/orders/`: root route
- `/orders/create`: create route
- `/orders/:id`: view order route

(Note the `/orders/` which is always the same)
