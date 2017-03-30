import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Stars from 'fyndiq-component-stars'

storiesOf('Stars', module)
  .addWithInfo('default', () => (
    <Stars rating={4} />
  ))
  .addWithInfo('interactive', () => (
    <Stars rating={4} interactive />
  ))
