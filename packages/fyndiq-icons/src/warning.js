import React from 'react'
import SvgWrapper from './svg-wrapper'

const Warning = ({ className, color }) => (
  <SvgWrapper className={className} viewBox="0 0 19 16">
    <path
      fill="none"
      stroke={color}
      d="M7.88 1.4a1.9 1.9 0 0 1 3.24 0l3.68 5.78 3.4 5.32c.8 1.3-.1 3-1.63 3H2.43C.9 15.5 0 13.8.8 12.5l3.4-5.33L7.88 1.4z"
      strokeLinejoin="round"
    />
    <path
      fill="none"
      stroke={color}
      d="M9.5 9.5A.5.5 0 0 1 9 9V5c0-.26.23-.5.5-.5s.5.24.5.5v4c0 .3-.23.5-.5.5z"
    />
    <path
      fill={color}
      stroke="none"
      d="M10.5 12.22a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </SvgWrapper>
)

Warning.propTypes = SvgWrapper.propTypes
Warning.defaultProps = SvgWrapper.defaultProps

export default Warning
