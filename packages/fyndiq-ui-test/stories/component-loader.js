import React from 'react'
import { storiesOf } from '@storybook/react'
import Loader from 'fyndiq-component-loader'

storiesOf('Loader', module)
  .addWithInfo('default', () => (
    <Loader />
  ))
  .addWithInfo('change colors', () => (
    <Loader color1="PeachPuff" color2="RosyBrown" />
  ))
  .addWithInfo('change size', () => (
    <Loader size={100} />
  ))
  .addWithInfo('change wave', () => (
    <Loader waveAmplitude={20} waveLength={50} />
  ))
