import React from 'react'
import PropTypes from 'prop-types'
import styles from '../arrow.css'

const Arrow = ({ orientation, className }) => {
  let transform
  let stylesSvg = className

  switch (orientation) {
    case 'up':
      transform = 'rotate(90 25 25)'
      stylesSvg += ` ${styles.up}`
      break
    case 'down':
      transform = 'rotate(270 25 25)'
      stylesSvg += ` ${styles.down}`
      break
    case 'right':
      transform = 'rotate(180 25 25)'
      stylesSvg += ` ${styles.right}`
      break
    default:
      transform = ''
      stylesSvg += ` ${styles.left}`
  }

  return (
    <svg height="50" width="50" viewBox="0 0 50 50" className={stylesSvg}>
      <path d="M34.56 42.93L19.36 25l15.2-17.93c.67-.8.56-1.97-.24-2.64s-2-.55-2.68.24L15.44 23.8c-.3.35-.44.77-.44 1.2 0 .43.15.85.44 1.2l16.2 19.13c.67.8 1.87.9 2.68.24.8-.67.9-1.84.24-2.64z" transform={transform} />
    </svg>
  )
}

Arrow.propTypes = {
  orientation: PropTypes.oneOf(['up', 'down', 'right', 'left']),
  className: PropTypes.string,
}

Arrow.defaultProps = {
  orientation: 'left',
  className: '',
}

export default Arrow
