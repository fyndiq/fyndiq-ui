import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from 'fyndiq-component-button'
import Price from 'fyndiq-component-price'
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
  .addWithInfo('with text', () => (
    <Price>50Kr</Price>
  ))
