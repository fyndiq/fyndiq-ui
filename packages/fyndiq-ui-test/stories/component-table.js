import React from 'react'
import { storiesOf } from '@storybook/react'
import { Table, Row, Cell } from 'fyndiq-component-table'

storiesOf('Table', module)
  .addWithInfo('default', () => (
    <Table>
      <Row head>
        <Cell>Title</Cell>
        <Cell>ID</Cell>
        <Cell>Price</Cell>
      </Row>
      <Row>
        <Cell>Product 1</Cell>
        <Cell>54321</Cell>
        <Cell>$123</Cell>
      </Row>
      <Row>
        <Cell>Product 2</Cell>
        <Cell>765432</Cell>
        <Cell>$32</Cell>
      </Row>
      <Row>
        <Cell>Product 3</Cell>
        <Cell>145654</Cell>
        <Cell>$4.5</Cell>
      </Row>
    </Table>
  ))
  .addWithInfo('row customization', () => (
    <Table>
      <Row size="l">
        <Cell>I&apos;m a large row</Cell>
      </Row>
      <Row size="m">
        <Cell>I&apos;m a default size row</Cell>
      </Row>
      <Row size="s">
        <Cell>I&apos;m a small row</Cell>
      </Row>
      <Row interactive>
        <Cell>I&apos;m a row that reacts on mouse hover</Cell>
      </Row>
      <Row noBorder>
        <Cell>I&apos;m a row that doesn&apos;t have a bottom border</Cell>
      </Row>
    </Table>
  ))
  .addWithInfo('cell customization', () => (
    <Table>
      <Row>
        <Cell center>I am centered</Cell>
      </Row>
    </Table>
  ))
