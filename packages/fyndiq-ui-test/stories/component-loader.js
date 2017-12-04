import React from 'react'
import { storiesOf } from '@storybook/react'
import Loader, { ProgressBar } from 'fyndiq-component-loader'

storiesOf('Loader/default', module)
  .addWithInfo('default', () => <Loader />)
  .addWithInfo('change colors', () => (
    <Loader color1="PeachPuff" color2="RosyBrown" />
  ))
  .addWithInfo('change size', () => <Loader size={100} />)
  .addWithInfo('change wave', () => (
    <Loader waveAmplitude={20} waveLength={50} />
  ))

storiesOf('Loader/ProgressBar', module)
  .addDecorator(story => (
    // This decorator is here to avoid clashing the alert message with the info
    // button on the top right
    <div style={{ paddingTop: 30, maxWidth: 400, margin: 'auto' }}>
      {story()}
    </div>
  ))
  .addWithInfo('default', () => <ProgressBar progress={40} />)
  .addWithInfo('indeterminate', () => <ProgressBar progress={null} />)
