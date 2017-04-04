import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Button from 'fyndiq-component-button'

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
      <Button horizontal onClick={action('clicked')} size="m">medium</Button>
      <Button horizontal onClick={action('clicked')} size="l">large</Button>
      <Button horizontal onClick={action('clicked')} size="xl">x-large</Button>
    </div>
  ))
  .addWithInfo('pressed button', () => (
    <Button pressed>Pressed button</Button>
  ))
  .addWithInfo('disabled button', () => (
    <Button disabled>Disabled Button</Button>
  ))
