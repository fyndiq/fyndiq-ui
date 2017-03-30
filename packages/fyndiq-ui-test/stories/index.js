import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from 'fyndiq-component-button'
import { Price, OldPrice, CurrentPrice } from 'fyndiq-component-price'
import Welcome from './Welcome'

storiesOf('Welcome', module)
  .addWithInfo('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ))

storiesOf('Button', module)
  .addWithInfo('default', () => (
    <Button onClick={action('clicked')}>Default button</Button>
  ))
  .addWithInfo('color themes', () => (
    <div>
      <Button onClick={action('clicked')}>Normal</Button>
      <Button type="primary" onClick={action('clicked')}>Submit</Button>
      <Button type="cancel" onClick={action('clicked')}>Cancel</Button>
    </div>
  ))

storiesOf('Price', module)
  .addWithInfo('default', () => (
    <Price>
      <CurrentPrice>149Kr</CurrentPrice>
      <OldPrice>200Kr</OldPrice>
    </Price>
  ))
  .addWithInfo('Without old price', () => (
    <Price>
      <CurrentPrice>149Kr</CurrentPrice>
    </Price>
  ))
