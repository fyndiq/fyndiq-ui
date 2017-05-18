import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Loader from 'fyndiq-icon-loader'

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
