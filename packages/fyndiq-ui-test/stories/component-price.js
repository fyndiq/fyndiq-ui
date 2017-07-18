import React from 'react'
import { storiesOf } from '@storybook/react'
import { Price, OldPrice, CurrentPrice } from 'fyndiq-component-price'

storiesOf('Price', module)
  .addWithInfo('default', () => (
    <Price>
      <CurrentPrice>149Kr</CurrentPrice>
      <OldPrice>200Kr</OldPrice>
    </Price>
  ))
  .addWithInfo('without old price', () => (
    <Price>
      <CurrentPrice>149Kr</CurrentPrice>
    </Price>
  ))
  .addWithInfo('old price on top', () => (
    <Price>
      <OldPrice>200Kr</OldPrice>
      <CurrentPrice>149Kr</CurrentPrice>
    </Price>
  ))
