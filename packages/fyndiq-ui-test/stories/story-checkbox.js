import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Checkbox from 'fyndiq-component-checkbox'

storiesOf('Checkbox', module)
  .addWithInfo('default', () => (
    <Checkbox onToggle={action('toggle')}>Label</Checkbox>
  ))
  .addWithInfo('checked', () => (
    <Checkbox onToggle={action('toggle')} checked>Label</Checkbox>
  ))
  .addWithInfo('disabled', () => (
    <span>
      <div><Checkbox onToggle={action('toggle')} disabled>Disabled label</Checkbox></div>
      <div><Checkbox checked onToggle={action('toggle')} disabled>Disabled validated label</Checkbox></div>
    </span>
  ))
