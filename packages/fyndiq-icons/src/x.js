import React from 'react'
import SvgWrapper from './svg-wrapper'

const X = ({ className, color }) => (
  <SvgWrapper className={className} viewBox="0 0 23 23">
    <path
      d="M.8.8l21.4 21.4m-21.4 0L22.2.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
    />
  </SvgWrapper>
)

X.propTypes = SvgWrapper.propTypes
X.defaultProps = SvgWrapper.defaultProps

export default X
