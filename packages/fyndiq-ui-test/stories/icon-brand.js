import React from 'react'
import { storiesOf } from '@kadira/storybook'
import FyndiqLogo from 'fyndiq-icon-brand'

storiesOf('Icon Brand', module)
  .addWithInfo('default', () => (
    <FyndiqLogo />
  ))
  .addWithInfo('change size', () => (
    <div>
      <FyndiqLogo height={30} />
      <FyndiqLogo width={200} height={null} />
    </div>
  ))
  .addWithInfo('color themes', () => (
    <div style={{ background: '#eee' }}>
      <FyndiqLogo />
      <FyndiqLogo type="outline" />
      <FyndiqLogo type="outline-transp" />
      <FyndiqLogo type="bw" />
      <FyndiqLogo type="outline-bw" />
      <FyndiqLogo type="outline-transp-bw" />
    </div>
  ))
