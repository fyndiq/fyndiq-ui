import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Tooltip from 'fyndiq-component-tooltip'

storiesOf('Tooltip', module)
  .addWithInfo('default', () => (
    <Tooltip text="info text">Hello world</Tooltip>
  ))
  .addWithInfo('long text info', () => (
    <Tooltip text="Long text info, dont mind me, just checking out" position="bl">Hover me</Tooltip>
  ))
  .addWithInfo('change tooltip position', () => (
    <div>
      <Tooltip text="tooltip" position="bl">Bottom-left</Tooltip>
      {' '}
      <Tooltip text="tooltip" position="bc">Bottom-center</Tooltip>
      {' '}
      <Tooltip text="tooltip" position="br">Bottom-right</Tooltip>

      <hr />

      <Tooltip text="tooltip" position="tl">Top-left</Tooltip>
      {' '}
      <Tooltip text="tooltip" position="tc">Top-center</Tooltip>
      {' '}
      <Tooltip text="tooltip" position="tr">Top-right</Tooltip>
    </div>
  ))
