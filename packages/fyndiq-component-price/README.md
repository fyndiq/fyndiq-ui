# OUTDATED

Please use the `Price` element included in [`fyndiq-component-product`](https://github.com/fyndiq/fyndiq-ui/tree/master/packages/fyndiq-component-product)

## Migration Guide for the new element

<table>
<thead>
<tr>
<th>Old Version</th>
<th>New Version</th>
</tr>
</thead>

<tr>
  <td>
    <pre lang="js">
import {
  Price,
  CurrentPrice,
  OldPrice,
} from 'fyndiq-component-price'
    </pre>
  </td>
  <td>
    <pre lang="js">
import { Price } from 'fyndiq-component-product'
    </pre>
  </td>
</tr>

<tr>
<td>
<pre lang="js">
&lt;Price&gt;
  &lt;CurrentPrice&gt;129 kr&lt;/CurrentPrice&gt;
  &lt;OldPrice&gt;200 kr&lt;/OldPrice&gt;
&lt;/Price&gt;
</pre>
</td>
<td>
<pre lang="js">
&lt;Price oldPrice="200 kr"&gt;129 kr&lt;/Price&gt;
</pre>
</td>
</tr>

</table>

---

--- 

# fyndiq-component-price [![npm](https://img.shields.io/npm/v/fyndiq-component-price.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-price)

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
