import React from 'react'
import SvgWrapper from './svg-wrapper'

const Payout = ({ className, color }) => (
  <SvgWrapper className={className} viewBox="0 0 23 18">
    <path
      d="M22 4H1a1 1 0 0 0-1 1.02v11.96A1 1 0 0 0 1 18h21a1 1 0 0 0 1-1.02V5.02A1 1 0 0 0 22 4zM1 16.98h21V5.02H1v11.96z"
      fill={color}
      stroke="none"
      fillRule="evenodd"
    />
    <path
      d="M2.07 2.5H21.1m-1.46-2H3.53M2.5 9.53V6.5h3.2m.05 8.82H2.5v-2.99m18.03 0v3h-3.11m.05-8.83h3.06v3.03m-6.7.63c0-1.26-1.2-1.81-2.23-1.81-1.02 0-2.15.44-2.15 1.72 0 1.78 4.37 1.3 4.37 3.24 0 1.37-1.78 1.6-2.17 1.6s-2.26-.25-2.26-1.76m2.21-6.03v1.23m.05 6.56v1.23"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgWrapper>
)

Payout.propTypes = SvgWrapper.propTypes
Payout.defaultProps = SvgWrapper.defaultProps

export default Payout
