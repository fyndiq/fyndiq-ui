import React from 'react'
import { storiesOf } from '@storybook/react'
import Tooltip from 'fyndiq-component-tooltip'

storiesOf('Tooltip', module)
  .addWithInfo('default', () => <Tooltip text="info text">Hello world</Tooltip>)
  .addWithInfo('long text info', () => (
    <div>
      <div>
        <Tooltip
          text="Long text info, dont mind me, just checking out"
          position="bl"
        >
          Hover me
        </Tooltip>
      </div>
      <div>
        <Tooltip
          text="I'm also a long text info tooltip but I have a bigger maxWidth prop"
          position="bl"
          maxWidth={300}
        >
          Hover me
        </Tooltip>
      </div>
    </div>
  ))
  .addWithInfo('change tooltip position', () => (
    <div>
      <Tooltip text="tooltip" position="bl">
        Bottom-left
      </Tooltip>{' '}
      <Tooltip text="tooltip" position="bc">
        Bottom-center
      </Tooltip>{' '}
      <Tooltip text="tooltip" position="br">
        Bottom-right
      </Tooltip>
      <hr />
      <Tooltip text="tooltip" position="tl">
        Top-left
      </Tooltip>{' '}
      <Tooltip text="tooltip" position="tc">
        Top-center
      </Tooltip>{' '}
      <Tooltip text="tooltip" position="tr">
        Top-right
      </Tooltip>
    </div>
  ))
  .addWithInfo('change color theme', () => (
    <div>
      <Tooltip text="tooltip content">Black tooltip</Tooltip>
      <br />
      <br />
      <Tooltip text="tooltip content" type="white">
        White tooltip
      </Tooltip>
    </div>
  ))
