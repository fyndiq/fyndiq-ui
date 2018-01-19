import React from 'react'
import SvgWrapper from './svg-wrapper'

const Attributes = ({ className, color }) => (
  <SvgWrapper className={className} viewBox="0 0 12 16">
    <rect
      x=".5"
      y="4.5"
      width="11"
      height="11"
      rx="1"
      fill="none"
      stroke={color}
    />
    <path
      d="M1.5 2.5h9m-8-2h7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
    />
  </SvgWrapper>
)

Attributes.propTypes = SvgWrapper.propTypes
Attributes.defaultProps = SvgWrapper.defaultProps

export default Attributes
