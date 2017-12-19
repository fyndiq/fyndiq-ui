import React from 'react'
import SvgWrapper from './svg-wrapper'

const Error = ({ className, color }) => (
  <SvgWrapper className={className} viewBox="0 0 20 20">
    <path
      stroke={color}
      fill="none"
      d="M5.67 5.67l8.66 8.66m-8.66 0l8.66-8.66"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      stroke={color}
      fill="none"
      d="M19.07 10A9.07 9.07 0 1 1 .93 10a9.07 9.07 0 0 1 18.14 0z"
    />
  </SvgWrapper>
)

Error.propTypes = SvgWrapper.propTypes
Error.defaultProps = SvgWrapper.defaultProps

export default Error
