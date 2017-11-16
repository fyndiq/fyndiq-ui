import React from 'react'
import { storiesOf, action } from '@storybook/react'
import Input, {
  Presets,
  InvisibleInput,
  SearchInput,
} from 'fyndiq-component-input'

storiesOf('Input/Input', module)
  .addWithInfo('default', () => <Input onChange={action('onChange')} />)
  .addWithInfo('debounced', () => (
    <Input debouncedOnChange={action('debouncedOnChange')} />
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

storiesOf('Input/Search', module)
  .addWithInfo('default', () => <SearchInput onSearch={action('onSearch')} />)
  .addWithInfo('collapsible', () => (
    <SearchInput collapsible emptyAfterSearch />
  ))
