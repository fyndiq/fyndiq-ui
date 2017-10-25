# fyndiq-component-price [![npm](https://img.shields.io/npm/v/fyndiq-component-price.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-price)

[Preview](http://developers.fyndiq.com/fyndiq-ui/?selectedKind=Price&selectedStory=default)

A Price Component for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-component-price
```

# Usage

``` js
import React from 'react'
import { Price, CurrentPrice, OldPrice } from 'fyndiq-component-price'

// Normal usage
<Price>
  <CurrentPrice>129 kr</CurrentPrice>
  <OldPrice>200 kr</OldPrice>
</Price>

// Use same font-size
<Price emphasize={false}>
  <CurrentPrice>129 kr</CurrentPrice>
  <OldPrice>200 kr</OldPrice>
</Price>
```

# API

The component `Price` has the following customizable props:

| Name | Type | Description | Default value |
|---|---|---|---|
| **emphasize** | Boolean | Use different font-sizes for current and old price | `true` |
