import React from 'react'
import SvgWrapper from './svg-wrapper'

const MagnifierAlt = ({ className, color }) => (
  <SvgWrapper className={className} viewBox="0 0 23 23">
    <path
      fill={color}
      fillRule="evenodd"
      stroke="none"
      d="M16 9.6c0-1.7-.7-3-1.8-4.3a5.8 5.8 0 0 0-4.3-1.7c-1.6 0-3 .6-4.2 1.7a5.8 5.8 0 0 0-1.8 4.3c0 1.6.6 3 1.8 4.2a5.8 5.8 0 0 0 4.2 1.8c1.7 0 3-.6 4.3-1.8a5.8 5.8 0 0 0 1.7-4.2zm6.8 11.1c0 .5-.2.9-.5 1.2-.4.4-.8.5-1.2.5-.5 0-1-.1-1.2-.5l-4.6-4.6A9.2 9.2 0 0 1 9.9 19a9.3 9.3 0 0 1-3.6-.7 9.4 9.4 0 0 1-3-2 9.4 9.4 0 0 1-2-3 9.3 9.3 0 0 1-.8-3.7c0-1.3.2-2.5.7-3.7a9.4 9.4 0 0 1 2-3 9.4 9.4 0 0 1 3-2A9.3 9.3 0 0 1 10 0c1.3 0 2.5.3 3.7.8a9.4 9.4 0 0 1 3 2 9.4 9.4 0 0 1 2 3 9.3 9.3 0 0 1 .8 3.7c0 2-.6 3.7-1.7 5.3l4.6 4.6c.3.3.5.7.5 1.2z"
    />
  </SvgWrapper>
)

MagnifierAlt.propTypes = SvgWrapper.propTypes
MagnifierAlt.defaultProps = SvgWrapper.defaultProps

export default MagnifierAlt
