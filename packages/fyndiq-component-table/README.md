# fyndiq-component-table [![npm](https://img.shields.io/npm/v/fyndiq-component-table.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-table)

[Preview](http://developers.fyndiq.com/fyndiq-ui/?selectedKind=Table&selectedStory=default)

A Table component for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-component-table
```

# Usage

``` js
import React from 'react'
import { Table, Row, Cell } from 'fyndiq-component-table'

// Normal usage
<Table>
  <Row head>
    <Cell>Column 1</Cell>
    <Cell>Column 2</Cell>
    <Cell>Column 3</Cell>
  </Row>
  <Row>
    <Cell>Row 1 - Column 1</Cell>
    <Cell>Row 1 - Column 2</Cell>
    <Cell>Row 1 - Column 3</Cell>
  </Row>
  <Row>
    <Cell>Row 2 - Column 1</Cell>
    <Cell>Row 2 - Column 2</Cell>
    <Cell>Row 2 - Column 3</Cell>
  </Row>
</Table>
```

# API

### Table

The component `Table` has the following customizable props:

| Name | Type | Description | Default value |
|---|---|---|---|
| **className** | String | Additional classname | `''` |
| **children** | Node | Content of the table | `''` |

### Row

The component `Row` has the following customizable props:

| Name | Type | Description | Default value |
|---|---|---|---|
| **className** | String | Additional classname | `''` |
| **size** | String | Vertical size of the row. Can be `s`, `m` or `l` | `m` |
| **head** | Bool | If set to true, will render a header | `false` |
| **interactive** | Bool | If set to true, will visually react to mouse over | `false` |
| **noBorder** | Bool | If set to true, will not add a bottom border | `false` |
| **verticalCenter** | Bool | Controls the vertical centering of the content | `true` |
| **children** | Node | Content of the row | `''` |

### Cell

The component `Cell` has the following customizable props:

| Name | Type | Description | Default value |
|---|---|---|---|
| **className** | String | Additional classname | `''` |
| **center** | Bool | Controls the text-align of the cell | `''` |
| **children** | Node | Content of the cell | `''` |


