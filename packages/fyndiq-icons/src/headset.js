import React from 'react'
import SvgWrapper from './svg-wrapper'

const Headset = ({ className, color }) => (
  <SvgWrapper className={className} viewBox="0 0 30 35">
    <path
      fill={color}
      stroke="none"
      d="M15 0A15 15 0 0 0 0 15v8.1a3.1 3.1 0 1 0 6.3 0v-5a3.1 3.1 0 0 0-3.8-3V15a12.5 12.5 0 0 1 25 0 3.1 3.1 0 0 0-3.8 3.1v5a3.1 3.1 0 0 0 3.2 3.1c-1 2.5-3.7 4.3-7.4 4.9-.6-.7-1.5-1.1-2.6-1.1-1.8 0-3.1 1.1-3.1 2.5s1.3 2.5 3 2.5c1.3 0 2.4-.6 2.9-1.4 6.2-1 10.3-4.9 10.3-9.9V15A15 15 0 0 0 15 0"
    />
  </SvgWrapper>
)

Headset.propTypes = SvgWrapper.propTypes
Headset.defaultProps = SvgWrapper.defaultProps

export default Headset
