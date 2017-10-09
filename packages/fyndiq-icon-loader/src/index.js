import React from 'react'
import PropTypes from 'prop-types'
import colors from 'fyndiq-styles-colors'

import styles from '../styles.css'

const Loader = ({
  size,
  className,
  color1,
  color2,
  waveAmplitude,
  waveLength,
}) => (
  <svg
    className={`
      ${styles.icon}
      ${className}
    `}
    height={size}
    width={size}
    viewBox="0 0 100 100"
  >
    {/* Background color rectangle */}
    <rect
      x="0"
      y="0"
      width="100"
      height="100"
      fill={color1}
    />
    {/* Wave component. See SVG specification to understand how it's done */}
    <path
      className={styles.wave}
      fill={color2}
      d={`M 0 -${waveAmplitude / 2}
        q ${waveLength / 2} ${waveAmplitude / 2}, ${waveLength} 0
        t ${waveLength} 0
        t ${waveLength} 0
        t ${waveLength} 0
        t ${waveLength} 0
        t ${waveLength} 0
        v ${100 + waveAmplitude}
        q ${-waveLength / 2} ${waveAmplitude / 2}, ${-waveLength} 0
        t ${-waveLength} 0
        t ${-waveLength} 0
        t ${-waveLength} 0
        t ${-waveLength} 0
        t ${-waveLength} 0
        Z
      `}
    />
  </svg>
)

Loader.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
  color1: PropTypes.string,
  color2: PropTypes.string,
  waveAmplitude: PropTypes.number,
  waveLength: PropTypes.number,
}

Loader.defaultProps = {
  size: 50,
  className: '',
  color1: colors.red,
  color2: colors.blue,
  waveAmplitude: 25,
  waveLength: 80,
}

export default Loader
