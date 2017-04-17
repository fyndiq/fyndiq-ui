import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Alert from 'fyndiq-component-alert'

storiesOf('Alert', module)
  .addDecorator(story => (
    // This decorator is here to avoid clashing the alert message with the info
    // button on the top right
    <div style={{ paddingTop: 30 }}>
      {story()}
    </div>
  ))
  .addWithInfo('default', () => (
    <Alert onClose={action('closed')}>Your message here</Alert>
  ))
  .addWithInfo('color themes', () => (
    <div>
      <Alert type="info">Info alert</Alert>
      <Alert type="good">Good alert</Alert>
      <Alert type="warning">Warning alert</Alert>
      <Alert type="bad">Bad alert</Alert>
    </div>
  ))
