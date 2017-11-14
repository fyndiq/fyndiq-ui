import React from 'react'
import { storiesOf, action } from '@storybook/react'
import Button, { Wrapper } from 'fyndiq-component-button'

storiesOf('Button', module)
  .addWithInfo('default', () => (
    <Button onClick={action('clicked')}>Default button</Button>
  ))
  .addWithInfo('color themes', () => (
    <div>
      <Button horizontal onClick={action('clicked')}>
        Normal
      </Button>
      <Button horizontal onClick={action('clicked')} type="white">
        White
      </Button>
      <Button horizontal onClick={action('clicked')} type="ghost">
        Ghost
      </Button>
      <Button horizontal onClick={action('clicked')} type="primary">
        Primary
      </Button>
      <Button horizontal onClick={action('clicked')} type="secondary">
        Secondary
      </Button>
      <Button horizontal onClick={action('clicked')} type="cancel">
        Cancel
      </Button>
      <Button horizontal onClick={action('clicked')} type="inverted">
        Black
      </Button>
    </div>
  ))
  .addWithInfo('different sizes', () => (
    <div>
      <Button horizontal onClick={action('clicked')} size="xs">
        x-small
      </Button>
      <Button horizontal onClick={action('clicked')} size="s">
        small
      </Button>
      <Button horizontal onClick={action('clicked')} size="m">
        medium
      </Button>
      <Button horizontal onClick={action('clicked')} size="l">
        large
      </Button>
    </div>
  ))
  .addWithInfo('pill mode', () => (
    <div>
      <Button horizontal pill>
        Normal
      </Button>
      <Button horizontal pill type="white">
        White
      </Button>
      <Button horizontal pill type="primary">
        Primary
      </Button>
      <Button horizontal pill type="secondary">
        Secondary
      </Button>
      <Button horizontal pill type="cancel">
        Cancel
      </Button>
      <Button horizontal pill type="inverted">
        Black
      </Button>
    </div>
  ))
  .addWithInfo('pressed button', () => <Button pressed>Pressed button</Button>)
  .addWithInfo('disabled button', () => (
    <Button disabled>Disabled Button</Button>
  ))
  .addWithInfo('<a> tag', () => <Button link="#hello">I am a link</Button>)
  .addWithInfo('Wrapper - horizontal', () => (
    <Wrapper>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Wrapper>
  ))
  .addWithInfo('Wrapper - vertical', () => (
    <div style={{ width: 200 }}>
      <Wrapper orientation="vertical">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Wrapper>
    </div>
  ))
