import React from 'react'
import { storiesOf, action } from '@storybook/react'
import Input, { Presets } from 'fyndiq-component-input'

storiesOf('Input', module)
  .addWithInfo('default', () => <Input onChange={action('onChange')} />)
  .addWithInfo('with presets', () => (
    <Presets
      presets={['Stockholm', 'Göteborg', 'Luleå', 'Kiruna']}
      onChange={action('onChange')}
    />
  ))
