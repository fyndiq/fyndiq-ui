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
      Dropdown content
    </Dropdown>
  ))
  .addWithInfo('no down arrow', () => (
    <Dropdown button="Click me" noArrow>
      Dropdown content
    </Dropdown>
  ))
  .addWithInfo('opened', () => (
    <Dropdown button="Click me" opened>
      Dropdown content
    </Dropdown>
  ))
  .addWithInfo('custom sizes', () => (
    <div>
      <Dropdown button="x-small" size="xs">
        Dropdown content
      </Dropdown>
      <Dropdown button="small" size="s">
        Dropdown content
      </Dropdown>
      <Dropdown button="medium" size="m">
        Dropdown content
      </Dropdown>
      <Dropdown button="large" size="l">
        Dropdown content
      </Dropdown>
    </div>
  ))
  .addWithInfo('custom button', () => (
    <Dropdown button={<Button type="primary">Open me</Button>}>
      Dropdown content
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
      It works!
    </Dropdown>
  ))
  .addWithInfo('change dropdown position', () => (
    <div>
      <p>
        <Dropdown button="bottom left (bl)" position="bl">
          Content
        </Dropdown>
        <Dropdown button="bottom center (bc)" position="bc">
          Content
        </Dropdown>
        <Dropdown button="bottom right (br)" position="br">
          Content
        </Dropdown>
      </p>
      <p>
        <Dropdown button="top left (tl)" position="tl">
          Content
        </Dropdown>
        <Dropdown button="top center (tc)" position="tc">
          Content
        </Dropdown>
        <Dropdown button="top right (tr)" position="tr">
          Content
        </Dropdown>
      </p>
    </div>
  ))
  .addWithInfo('disabled dropdown', () => (
    <div>
      <Dropdown button="Disabled dropdown" disabled>
        Content
      </Dropdown>
      <Dropdown button="Disabled open dropdown" disabled opened>
        Content
      </Dropdown>
    </div>
  ))
  .addWithInfo('programatically close dropdown', () => (
    <Dropdown button="Open dropdown">
      {({ onClose }) => (
        <div>
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
