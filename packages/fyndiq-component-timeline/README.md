# fyndiq-component-timeline [![npm](https://img.shields.io/npm/v/fyndiq-component-timeline.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-timeline)

[Preview](http://developers.fyndiq.com/fyndiq-ui/?selectedKind=Timeline&selectedStory=default)

A Timeline Component for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-component-timeline
```

# Usage

``` js
import React from 'react'
import { Timeline, Event } from 'fyndiq-component-timeline'
import { Truck, Shop } from 'fyndiq-icons'

// Normal usage
<Timeline>
  <Event icon={<Truck />}>
    This package was shipped
  </Event>
  <Event icon={<Bag />}>
    This product was bought <strong>yesterday</strong>
  </Event>
</Timeline>
```

# API

The component `Timeline` has the following customizable props:

| Name | Type | Description | Default value |
|---|---|---|---|
| **children** | Node | Events components | `null` |
| **type** | String | Change the color theme of the timeline. One of `white` or `black` | `white` |

The component `Event` has the following customizable props:


| Name | Type | Description | Default value |
|---|---|---|---|
| **children** | Node | Text of the event | `null` |
| **icon** | Element | Icon from `fyndiq-icon` | `null` |
