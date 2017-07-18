import React from 'react'
import { storiesOf, action } from '@storybook/react'
import Stars from 'fyndiq-component-stars'

storiesOf('Stars', module)
  .addWithInfo('default', () => (
    <Stars rating={4} />
  ))
  .addWithInfo('half rated', () => (
    <div>
      <Stars rating={4.5} />
      <Stars rating={3.3} />
    </div>
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
