import React from 'react'
import { storiesOf, action } from '@storybook/react'
import Input, { Presets, InvisibleInput } from 'fyndiq-component-input'

storiesOf('Input', module)
  .addWithInfo('default', () => <Input onChange={action('onChange')} />)
  .addWithInfo('with presets', () => (
    <Presets
      presets={['Stockholm', 'Göteborg', 'Luleå', 'Kiruna']}
      onChange={action('onChange')}
    />
  ))
  .addWithInfo('invisible', () => (
    <InvisibleInput value="initial value" onChange={action('onChange')} />
  ))
