import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Stars from 'fyndiq-component-stars'

storiesOf('Stars', module)
  .addWithInfo('default', () => (
    <Stars rating={4} />
  ))
  .addWithInfo('half rated', () => (
    <Stars rating={4.5} size="l" />
  ))
  .addWithInfo('show number of ratings', () => (
    <Stars rating={4} reviews={34} />
  ))
  .addWithInfo('interactive', () => (
    <Stars
      rating={4}
      size="l"
      onChange={action('changeStar')}
      interactive
    />
  ))
