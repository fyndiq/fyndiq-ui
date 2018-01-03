# fyndiq-component-article [![npm](https://img.shields.io/npm/v/fyndiq-component-article.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-article)

[Preview](http://developers.fyndiq.com/fyndiq-ui/?selectedKind=Article%2FLayouts%2FDetails&selectedStory=default)

An Article component for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-component-article
```

# Components

The package `fyndiq-component-article` exposes several components:

- Layouts
    - [`LayoutDetails`](#layoutdetails)
- [`Description`](#description)
- [`Images`](#images)
- [`Price`](#price)
- [`Tags`](#tags)

Layout components are high-level components that are responsible for arranging the details in a certain way.

## LayoutDetails

This layout component arranges the article in a _details_ view, which is mobile and tablet friendly. Best used for a customer-facing interface.

### Usage

``` js
import React from 'react'
import {
  Description,
  Images,
  Price,
  Tags,
  LayoutDetails,
} from 'fyndiq-component-article'

// Normal usage
<LayoutDetails
  title="My article title"
  description="My article description"
  images={[
    'http://image-url-1',
    'http://image-url-1',
  ]}
  price="$150"
  tags={['Awesomeness', 'Pretty good article']}
/>

// Advanced usage
<LayoutDetails
  images={
    <Images
      images={['src1', 'src2']}
    />
  }
  title="Article Title"
  description={<span dangerouslySetInnerHtml={{ __html: '<strong>hello</strong>' }} />}
  price={
    <Price oldPrice="$250" noEmphasize>$124</Price>
  }
  tags={<Tags tags={['Awesomeness', 'Pretty good article']} />}
/>
```

### API

| Name | Type | Description | Default value |
|---|---|---|---|
| **className** | String | Additionnal class for the root element | `` |
| **title** | String | Title of the article | `` |
| **description** | String or `Description` element | Description of the article | `null` |
| **images** | Array of string or `Images` element | Images of the article | `null` |
| **tags** | Array of string or `Tags` element | Tags of the article | `null` |
| **price** | String or `Price` element | Price of the article | `null` |



## Description

Description of the Article

### Usage

``` js
import React from 'react'
import { Description } from 'fyndiq-component-article'

// Normal usage
<Description>My Article Description</Description>

// Pass raw HTML (useful when working with Markdown)
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
| **children** | Node | Content of the description | `` |




## Images

Images of the Article. Includes a carrousel-like interaction

### Usage

``` js
import React from 'react'
import { Images } from 'fyndiq-component-article'

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
| **images** | Array of strings | URL of the images | `[]` |
| **alt** | String | Alt text for the `<img>` tags | `''` |





## Price

Price of the Article.

### Usage

``` js
import React from 'react'
import { Price } from 'fyndiq-component-article'

// Normal usage
<Price>$100</Price>

// With old price
<Price oldPrice="$150">$100</Price>
```

### API

| Name | Type | Description | Default value |
|---|---|---|---|
| **children** | String | Price of the article | `null` |
| **oldPrice** | String | Old price of the article | `''` |
| **emphasize** | Boolean | Show a difference in font-sizes for oldPrice and price | `true` |





## Tags

Tags of the Article.

### Usage

``` js
import React from 'react'
import { Tags } from 'fyndiq-component-article'

// Normal usage
<Tags tags={['tag1', 'tag2']} />
```

### API

| Name | Type | Description | Default value |
|---|---|---|---|
| **tags** | Array of strings | Tags of the article | `[]` |
