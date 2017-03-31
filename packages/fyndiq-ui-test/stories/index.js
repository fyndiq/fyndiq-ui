import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import Button from 'fyndiq-component-button'
import { Price, OldPrice, CurrentPrice } from 'fyndiq-component-price'
import './styles.less'

storiesOf('Button', module)
  .addWithInfo('default', () => (
    <Button onClick={action('clicked')}>Default button</Button>
  ))
  .addWithInfo('color themes', () => (
    <div>
      <Button horizontal onClick={action('clicked')}>Normal</Button>
      <Button horizontal onClick={action('clicked')} type="white">White</Button>
      <Button horizontal onClick={action('clicked')} type="primary">Primary</Button>
      <Button horizontal onClick={action('clicked')} type="secondary">Secondary</Button>
      <Button horizontal onClick={action('clicked')} type="cancel">Cancel</Button>
      <Button horizontal onClick={action('clicked')} type="inverted">Black</Button>
    </div>
  ))
  .addWithInfo('different sizes', () => (
    <div>
      <Button horizontal onClick={action('clicked')} size="xs">x-small</Button>
      <Button horizontal onClick={action('clicked')} size="s">small</Button>
      <Button horizontal onClick={action('clicked')}>normal</Button>
      <Button horizontal onClick={action('clicked')} size="l">large</Button>
      <Button horizontal onClick={action('clicked')} size="xl">x-large</Button>
    </div>
  ))
  .addWithInfo('disabled button', () => (
    <Button disabled>Disabled Button</Button>
  ))


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
