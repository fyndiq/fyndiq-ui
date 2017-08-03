# fyndiq-component-stars [![npm](https://img.shields.io/npm/v/fyndiq-component-stars.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-stars)

[Preview](http://developers.fyndiq.com/fyndiq-ui/?selectedKind=Stars&selectedStory=default)

A rating stars component for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-component-stars
```

# Usage

``` js
import React from 'react'
import Stars from 'fyndiq-component-stars'

// Normal usage
<Stars rating={4} />

// Different size
<Stars rating={3.5} size="l" />

// Show number of reviews
<Stars rating={4} reviews={53} />

// Interactive version
<Stars interactive onChange={handleChange} />
```

# API

The component `Stars` has the following customizable props:

| Name | Type | Description | Default value |
|---|---|---|---|
| **rating** | Number or String | The current rating of the product (between 0 and 5). Can be decimal | `undefined` |
| **reviews** | Number | Number of reviews | `undefined` |
| **size** | String | Can be `l` for a bigger component | `m` |
| **interactive** | Boolean | Enables interactive mode | `false` |
| **onChange** | Function | The handler when used in `interactive` mode. | `noop => noop` |
