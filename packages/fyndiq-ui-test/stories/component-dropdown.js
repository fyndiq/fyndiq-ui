import React from 'react'
import { storiesOf, action } from '@storybook/react'
import Dropdown from 'fyndiq-component-dropdown'
import Button from 'fyndiq-component-button'

storiesOf('Dropdown', module)
  .addWithInfo('default', () => (
    <Dropdown
      button="Click me"
      onOpen={action('open')}
      onClose={action('close')}
    >
      <div style={{ padding: 20 }}>Dropdown content</div>
    </Dropdown>
  ))
  .addWithInfo('no down arrow', () => (
    <Dropdown button="Click me" noArrow>
      <div style={{ padding: 20 }}>Dropdown content</div>
    </Dropdown>
  ))
  .addWithInfo('opened', () => (
    <Dropdown button="Click me" opened>
      <div style={{ padding: 20 }}>Dropdown content</div>
    </Dropdown>
  ))
  .addWithInfo('custom sizes', () => (
    <div>
      <Dropdown button="x-small" size="xs">
        <div style={{ padding: 20 }}>Dropdown content</div>
      </Dropdown>
      <Dropdown button="small" size="s">
        <div style={{ padding: 20 }}>Dropdown content</div>
      </Dropdown>
      <Dropdown button="medium" size="m">
        <div style={{ padding: 20 }}>Dropdown content</div>
      </Dropdown>
      <Dropdown button="large" size="l">
        <div style={{ padding: 20 }}>Dropdown content</div>
      </Dropdown>
    </div>
  ))
  .addWithInfo('custom button', () => (
    <Dropdown button={<Button type="primary">Open me</Button>}>
      <div style={{ padding: 20 }}>Dropdown content</div>
    </Dropdown>
  ))
  .addWithInfo('custom wrapper style', () => (
    <Dropdown button="Open me" noWrapperStyle>
      <div
        style={{
          background: '#333',
          color: 'white',
          padding: 50,
          boxShadow: '0 0 5px #f50',
        }}
      >
        Content
      </div>
    </Dropdown>
  ))
  .addWithInfo('open on hover', () => (
    <Dropdown button="Hover me!" hoverMode>
      <div style={{ padding: 20 }}>Dropdown content</div>
    </Dropdown>
  ))
  .addWithInfo('change dropdown position', () => (
    <div>
      <p>
        <Dropdown button="bottom left (bl)" position="bl">
          <div style={{ padding: 20 }}>Dropdown content</div>
        </Dropdown>
        <Dropdown button="bottom center (bc)" position="bc">
          <div style={{ padding: 20 }}>Dropdown content</div>
        </Dropdown>
        <Dropdown button="bottom right (br)" position="br">
          <div style={{ padding: 20 }}>Dropdown content</div>
        </Dropdown>
      </p>
      <p>
        <Dropdown button="top left (tl)" position="tl">
          <div style={{ padding: 20 }}>Dropdown content</div>
        </Dropdown>
        <Dropdown button="top center (tc)" position="tc">
          <div style={{ padding: 20 }}>Dropdown content</div>
        </Dropdown>
        <Dropdown button="top right (tr)" position="tr">
          <div style={{ padding: 20 }}>Dropdown content</div>
        </Dropdown>
      </p>
    </div>
  ))
  .addWithInfo('disabled dropdown', () => (
    <div>
      <Dropdown button="Disabled dropdown" disabled>
        <div style={{ padding: 20 }}>Dropdown content</div>
      </Dropdown>
      <Dropdown button="Disabled open dropdown" disabled opened>
        <div style={{ padding: 20 }}>Dropdown content</div>
      </Dropdown>
    </div>
  ))
  .addWithInfo('programatically close dropdown', () => (
    <Dropdown button="Open dropdown">
      {({ onClose }) => (
        <div style={{ padding: 20 }}>
          <p>
            By default, a dropdown doesn&apos;t get closed if you click inside.
            By passing a function as the <code>children</code> prop, the child
            component can programatically close the dropdown.
          </p>
          <button onClick={onClose}>Close dropdown</button>
        </div>
      )}
    </Dropdown>
  ))
