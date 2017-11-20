# fyndiq-component-input [![npm](https://img.shields.io/npm/v/fyndiq-component-input.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-input)

A set of Input components for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-component-input
```

# `<Input />`

[Demo](http://developers.fyndiq.com/fyndiq-ui/?selectedKind=Input%2FInput&selectedStory=default)

This component is just a wrapper around the `<input />` DOM element. It provides some default styling as well as a debouncing feature out of the box.

## Usage

``` js
import React from 'react'
import Input from 'fyndiq-component-input'

// Normal usage
<Input onChange={value => console.log(value)} />

// Pass some regular <input /> props
<Input
  placeholder="My placeholder"
  type="number"
  value={this.state.myInputValue}
/>

// Use the built-in debouncer
// 500ms of debounce, by default
<Input debouncedOnChange={value => console.log(value)} />
```

## API

The component `Input` has the following customizable props:

| Name | Type | Description | Default value |
|---|---|---|---|
| **className** | String | classname to pass to the root element | `''` |
| **onChange** | Function | Callback called everytime the input changes | `() => {}` |
| **debouncedOnChange** | Function | Debounced onChange handler | `null` |
| **debounceWait** | Number | Timeout until which the debounced handler is called, in ms | `500` |
| **inputRef** | Function | Accesses the `ref` of the input element. Allows to do advanced things like calling `.blur()` or `.focus()` | `null` |

Any other prop will be passed directly to the underlying `<input />` element (`value`, `defaultValue`, `placeholder`, `onFocus`, `onBlur`...)



# `<Presets />`

[Demo](http://developers.fyndiq.com/fyndiq-ui/?selectedKind=Input%2FPresets&selectedStory=with%20presets)

The Presets component allows the user to choose among some default values.

## Usage

``` js
import React from 'react'
import { Presets } from 'fyndiq-component-input'

// Normal usage
<Presets
  onChange={value => console.log(value)}
  presets={['Value 1', 'Value 2', 'Value 3']}
/>
```

## API

The component `Presets` has the following customizable props:

| Name | Type | Description | Default value |
|---|---|---|---|
| **input** | Input Element | Allows to customize the underlying `Input` element (placeholder, ...). | `<Input />` |
| **value** | String | Sets the current value of the input | `''` |
| **presets** | Array of string | Available presets | `[]` |
| **onChange** | Function | onChange handler | `() => {}` |



# `<InvisibleInput />`

[Demo](http://developers.fyndiq.com/fyndiq-ui/?selectedKind=Input%2FInvisible&selectedStory=default)

This input has no styles applied to it and looks invisible until hovered and focused. Works great with data forms where the data is not supposed to be changed except in some edge-cases.

## Usage

``` js
import React from 'react'
import { InvisibleInput } from 'fyndiq-component-input'

// Normal usage
<InvisibleInput
  value={currentValue}
  onChange={newValue => console.log(newValue)}
/>
```

## API

The component `InvisibleInput` has the following customizable props:

| Name | Type | Description | Default value |
|---|---|---|---|
| **className** | String | classname to pass to the root element | `''` |
| **onChange** | Function | onChange handler | `() => {}` |
| **value** | String | Sets the current value of the input | `''` |



# `<SearchInput />`

[Demo](http://developers.fyndiq.com/fyndiq-ui/?selectedKind=Input%2FSearch&selectedStory=default)

Provides a search-looking input. Bundled with a debouncer

## Usage

``` js
import React from 'react'
import Input, { SearchInput } from 'fyndiq-component-input'

// Normal usage
<SearchInput onChange={newValue => console.log(newValue)} />

// Collapsible (works great in webpage headers)
<SearchInput collapsible/>

// Customize the Input element
<SearchInput
  input={<Input placeholder="Search the universe" />}
/>

// Use the Input debouncer
<SearchInput debouncedOnChange={value => console.log(value)} />
```

## API

The component `SearchInput` has the following customizable props:

| Name | Type | Description | Default value |
|---|---|---|---|
| **className** | String | classname to pass to the root element | `''` |
| **value** | String | Sets the current value of the input | `''` |
| **input** | Input Element | Customize the default input element | `<Input placeholder="Search" type="search" />` |
| **size** | `m` or `s` | Customize the width of the search input | `m` |
| **collapsible** | Boolean | Adds a collapsible behavior to the input field | `false` |
| **emptyAfterSearch** | Boolean | If true, the search field is emptied after a search | `false` |
| **onSearch** | Function | Handler called when the user presses "enter" | `() => {}` |
| **debouncedOnChange** | Function | Debounced onChange handler | `null` |
