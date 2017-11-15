import React from 'react'
import { storiesOf, action } from '@storybook/react'
import Input, { Presets, InvisibleInput } from 'fyndiq-component-input'

storiesOf('Input/Input', module).addWithInfo('default', () => (
  <Input onChange={action('onChange')} />
))

storiesOf('Input/Presets', module).addWithInfo('with presets', () => (
  <Presets
    presets={['Stockholm', 'Göteborg', 'Luleå', 'Kiruna', 'Test city name']}
    onChange={action('onChange')}
  />
))

storiesOf('Input/Invisible', module).addWithInfo('default', () => (
  <InvisibleInput value="initial value" onChange={action('onChange')} />
))
