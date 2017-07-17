# fyndiq-component-productlist [![npm](https://img.shields.io/npm/v/fyndiq-component-productlist.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-productlist)

[Preview](http://developers.fyndiq.com/fyndiq-ui/?selectedKind=Product%20List&selectedStory=default)

A Product List component for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-component-productlist
```

# Components

The `fyndiq-component-productlist` exposes 2 components: `ProductListItem` and a `Wrapper`. The second one is used to organise several `ProductListItem` together and manipulate as a list: interactivity, layout...

## `ProductListItem`

### Usage

``` js
import React from 'react'
import ProductListItem from 'fyndiq-component-productlist'

// Normal usage
<ProductListItem
  title="Product Title"
  price="$239"
  oldPrice="$499"
  category="Product Category"
  brand="Product Brand"
  imageUrl="https://i.imgur.com/BCKlYFQ.jpg"
  rating="4.5"
  shopUrl="https://fyndiq.se/product/12345678"
  uploadDate="2017-07-01"
  uploadDateHuman="1 month ago"
/>
```

### API

The component `ProductListItem` has the following customizable props:

| Name | Type | Description | Default value |
|---|---|---|---|
| **category** | String | Category of the product | `null` |
| **brand** | String | Brand of the product | `null` |
| **dealType** | String | Deal type of the product. Can be `daily` or `weekly` | `null` |
| **imageUrl** | String | URL of the image | (required) |
| **oldPrice** | String | Striked price of the product | `null` |
| **price** | String | Price of the product | (required) |
| **rating** | Rating | See [fyndiq-component-stars](../fyndiq-component-stars#api)'s documentation | `null` |
| **shopUrl** | String | URL of the product on the shop | `null` |
| **title** | String | Title of the product | (required) |
| **uploadDate** | Date | Date when the product was uploaded on Fyndiq. | `null` |
| **interactive** | Boolean | If true, the item will react to mouse events | `false` |
| **open** | Boolean | If true, the item will show a more detailed version of the product | `false` |
| **showOldPrice** | Boolean | If false, the `oldPrice` property will not be shown | `true` |
| **showYours** | Boolean | Show a label **Your product** next to the title | `false` |
| **onClick** | Function | Handler called when the product has been clicked on | `noop => noop` |
| **additionnalData** | Array | Array of data to show on the information frame, when the ProductListItem is open | `[]` |


## `Wrapper`

### Usage

``` js
import React from 'react'
import ProductListItem, { Wrapper } from 'fyndiq-component-productlist`

// Normal usage
<Wrapper>
  <ProductListItem />
  <ProductListItem />
  <ProductListItem />
</Wrapper>

// Allow multiple products to be expanded at the same time
<Wrapper openMultiples>
  <ProductListItem />
  <ProductListItem />
  <ProductListItem />
</Wrapper>
```

### API

The component `Wrapper` has the following customizable props:

| Name | Type | Description | Default value |
|---|---|---|---|
| **children** | Node | The ProductListItems to display | (required) |
| **openMultiples** | Boolean | If true, the number of products that the user can expand will not be limited to 1 | `false` |
