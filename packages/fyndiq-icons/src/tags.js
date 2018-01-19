import React from 'react'
import SvgWrapper from './svg-wrapper'

const Tags = ({ className, color }) => (
  <SvgWrapper className={className} viewBox="0 0 20 20">
    <path
      d="M18.14 1.23l-6.22.06a.67.67 0 0 0-.47.2L1.38 11.54a.71.71 0 0 0 .03 1l6.04 6.04c.28.29.73.3 1 .03L18.52 8.55a.68.68 0 0 0 .2-.47l.08-6.18a.75.75 0 0 0-.66-.67z"
      fill="none"
      stroke={color}
      strokeLinejoin="round"
    />
    <path
      d="M15.68 6.44a1.5 1.5 0 1 1-2.12-2.12 1.5 1.5 0 0 1 2.12 2.12z"
      fill="none"
      stroke={color}
      strokeLinejoin="round"
    />
  </SvgWrapper>
)

Tags.propTypes = SvgWrapper.propTypes
Tags.defaultProps = SvgWrapper.defaultProps

export default Tags
