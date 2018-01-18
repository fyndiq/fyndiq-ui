import React from 'react'
import { storiesOf } from '@storybook/react'
import { Table, Row, Cell } from 'fyndiq-component-table'

storiesOf('Table', module)
  .addDecorator(story => (
    <div
      style={{
        margin: -8,
        backgroundColor: '#E9EAF0',
        minHeight: '100vh',
        padding: 20,
      }}
    >
      {story()}
    </div>
  ))
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
    </Table>
  ))
  .addWithInfo('linked rows', () => (
    <Table>
      <Row id={0} length={3}>
        <Cell>I'm a row that has some linked rows below</Cell>
      </Row>
      <Row id={1} length={3}>
        <Cell>
          The <code>id</code> prop specifies where in the list I am. Note that
          it is 0-based.
        </Cell>
      </Row>
      <Row id={2} length={3}>
        <Cell>
          And the <code>length</code> prop specifies how long the linked rows is
        </Cell>
      </Row>
      <Row>
        <Cell>
          After that you can either reset the <code>id</code> or{' '}
          <code>length</code> props to add normal rows or other linked rows
        </Cell>
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
