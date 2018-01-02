# fyndiq-component-product [![npm](https://img.shields.io/npm/v/fyndiq-component-product.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-product)

[Preview](http://developers.fyndiq.com/fyndiq-ui/?selectedKind=Product%2FLayouts%2FDetails&selectedStory=default)

A Product component for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-component-product
```

# Components

The package `fyndiq-component-product` exposes several components:

- Layouts
    - `LayoutDetails`
- `Description`
- `Images`
- `Price`
- `Tags`

Layout components are high-level components that are responsible for arranging the details in a certain way.

## LayoutDetails

This layout component arranges the product in a "product details" view, which is mobile and tablet friendly. Best used for a customer-facing interface.

### Usage

``` js
import React from 'react'
import {
  Description,
  Images,
  Price,
  Tags,
  LayoutDetails,
} from 'fyndiq-component-product'

// Normal usage
<LayoutDetails
  title="My Product Title"
  description="My Product Description"
  images={[
    'http://image-url-1',
    'http://image-url-1',
  ]}
  price="$150"
  tags={['Awesomeness', 'Pretty good product']}
/>

// Advanced usage
<LayoutDetails
  images={
    <Images
      images={['src1', 'src2']}
    />
  }
  title="Product Title"
  description={<span dangerouslySetInnerHtml={{ __html: '<strong>hello</strong>' }} />}
  price={
    <Price oldPrice="$250" noEmphasize>$124</Price>
  }
  tags={<Tags tags={['Awesomeness', 'Pretty good product']} />}
/>
```

### API

| Name | Type | Description | Default value |
|---|---|---|---|
| **className** | String | Additionnal class for the root element | `` |
| **title** | String | Title of the product | `` |
| **description** | String or `Description` element | Description of the product | `null` |
| **images** | Array of string or `Images` element | Images of the product | `null` |
| **tags** | Array of string or `Tags` element | Tags of the product | `null` |
| **price** | String or `Price` element | Price of the product | `null` |



## Description

Description of the Product

### Usage

``` js
import React from 'react'
import { Description } from 'fyndiq-component-product'

// Normal usage
<Description>My Product Description</Description>

// Pass raw HTML (usefull when working with Markdown)
<Description>
  <span
    dangerouslySetInnerHtml={
      { __html: '<strong>hello</strong>' }
    }
  />
</Description>
```

### API

| Name | Type | Description | Default value |
|---|---|---|---|
| **children** | Node | Content of the description | `` |




## Images

Images of the Product. Includes a carrousel-like interaction

### Usage

``` js
import React from 'react'
import { Images } from 'fyndiq-component-product'

// Normal usage
<Images
  images={[
    'http://image-url-1',
    'http://image-url-2',
  ]}
  alt="alt text for images"
/>
```

### API

| Name | Type | Description | Default value |
|---|---|---|---|
| **images** | Array of strings | URL of the images | `[]` |
| **alt** | Alt text for the `<img>` tags | `''` |





## Price

Price of the Product.

### Usage

``` js
import React from 'react'
import { Price } from 'fyndiq-component-product'

// Normal usage
<Price>$100</Price>

// With old price
<Price oldPrice="$150">$100</Price>
```

### API

| Name | Type | Description | Default value |
|---|---|---|---|
| **children** | String | Price of the product | `` |
| **oldPrice** | String | Old price of the product | `''` |
| **emphasize** | Boolean | Show a difference in font-sizes for oldPrice and price | `true` |





## Tags

Tags of the Product.

### Usage

``` js
import React from 'react'
import { Tags } from 'fyndiq-component-product'

// Normal usage
<Tags tags={['tag1', 'tag2']} />
```

### API

| Name | Type | Description | Default value |
|---|---|---|---|
| **tags** | Array of strings | Tags of the product | `[]` |
