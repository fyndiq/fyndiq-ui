import React from 'react'
import { storiesOf, action } from '@storybook/react'
import Checkbox from 'fyndiq-component-checkbox'

storiesOf('Checkbox', module)
  .addWithInfo('default', () => (
    <Checkbox onToggle={action('toggle')}>Label</Checkbox>
  ))
  .addWithInfo('checked', () => (
    <Checkbox onToggle={action('toggle')} checked>
      Label
    </Checkbox>
  ))
  .addWithInfo('custom color', () => (
    <Checkbox onToggle={action('toggle')} color="#F00" checked>
      Red Label
    </Checkbox>
  ))
  .addWithInfo('disabled', () => (
    <span>
      <div>
        <Checkbox onToggle={action('toggle')} disabled>
          Disabled label
        </Checkbox>
      </div>
      <div>
        <Checkbox checked onToggle={action('toggle')} disabled>
          Disabled validated label
        </Checkbox>
      </div>
    </span>
  ))
  .addWithInfo('frame mode', () => (
    <div>
      <div>
        <Checkbox onToggle={action('toggle')} frame>
          Label
        </Checkbox>
      </div>
      <div>
        <Checkbox frame />
      </div>
    </div>
  ))
  .addWithInfo('indeterminate', () => (
    <Checkbox indeterminate frame>
      Indeterminated checkbox
    </Checkbox>
  ))
