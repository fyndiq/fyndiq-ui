import React from 'react'
import PropTypes from 'prop-types'

import SvgWrapper from './svg-wrapper'

const Arrow = ({ orientation, className, color }) => {
  let transform

  switch (orientation) {
    case 'up':
      transform = 'rotate(90 25 25)'
      break
    case 'down':
      transform = 'rotate(270 25 25)'
      break
    case 'right':
      transform = 'rotate(180 25 25)'
      break
    default:
      transform = ''
  }

  return (
    <SvgWrapper viewBox="0 0 50 50" className={className}>
      <path
        fill={color}
        stroke="none"
        d="M34.56 42.93L19.36 25l15.2-17.93c.67-.8.56-1.97-.24-2.64s-2-.55-2.68.24L15.44 23.8c-.3.35-.44.77-.44 1.2 0 .43.15.85.44 1.2l16.2 19.13c.67.8 1.87.9 2.68.24.8-.67.9-1.84.24-2.64z"
        transform={transform}
      />
    </SvgWrapper>
  )
}

Arrow.propTypes = {
  orientation: PropTypes.oneOf(['up', 'down', 'right', 'left']),
  className: PropTypes.string,
  color: PropTypes.string,
}

Arrow.defaultProps = {
  orientation: 'left',
  className: '',
  color: undefined,
}

export default Arrow
