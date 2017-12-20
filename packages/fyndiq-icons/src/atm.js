import React from 'react'
import SvgWrapper from './svg-wrapper'

const Atm = ({ className, color }) => (
  <SvgWrapper className={className} viewBox="0 0 22 20">
    <path
      stroke={color}
      fill="none"
      d="M3.6 3.5h14.6m-4.8 7.9a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm-7 4.1v2.1h2.2m6.8-2.1v2.1h-2.2m-8.7 1.9h13v-16h-13zm-.1-13h-2C1.8 6.5 1 5.8 1 5V2C1 1.2 1.7.5 2.5.5h17c.8 0 1.5.7 1.5 1.5v3c0 .8-.7 1.5-1.5 1.5h-2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgWrapper>
)

Atm.propTypes = SvgWrapper.propTypes
Atm.defaultProps = SvgWrapper.defaultProps

export default Atm
