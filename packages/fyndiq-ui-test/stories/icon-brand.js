import React from 'react'
import { storiesOf } from '@storybook/react'
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
  .addWithInfo('with tagline', () => (
    <div>
      <FyndiqLogo>
        The Bargain Superstore
      </FyndiqLogo>
      <FyndiqLogo type="bw">
        The Bargain Superstore
      </FyndiqLogo>
    </div>
  ))
  .addWithInfo('with different tagline size', () => (
    <FyndiqLogo taglineSize={5.5}>
      The Bargain Superstore
    </FyndiqLogo>
  ))
