import React from 'react'
import { storiesOf } from '@storybook/react'
import { Price, OldPrice, CurrentPrice } from 'fyndiq-component-price'

storiesOf('Price', module)
  .addWithInfo('default', () => (
    <Price>
      <CurrentPrice>149 Kr</CurrentPrice>
      <OldPrice>200 Kr</OldPrice>
    </Price>
  ))
  .addWithInfo('without old price', () => (
    <Price>
      <CurrentPrice>149 Kr</CurrentPrice>
    </Price>
  ))
  .addWithInfo('old price on top', () => (
    <Price>
      <OldPrice>200 Kr</OldPrice>
      <CurrentPrice>149 Kr</CurrentPrice>
    </Price>
  ))
  .addWithInfo('no emphasize', () => (
    <Price emphasize={false}>
      <CurrentPrice>149 Kr</CurrentPrice>
      <OldPrice>200 kr</OldPrice>
    </Price>
  ))
