import React from 'react'
import PropTypes from 'prop-types'

import styles from '../icons.css'

const SvgWrapper = ({ className, viewBox, children }) => (
  <svg
    className={`
      ${styles.svgWrapper}
      ${className}
    `}
    viewBox={viewBox}
  >
    {children}
  </svg>
)

SvgWrapper.propTypes = {
  className: PropTypes.string,
  viewBox: PropTypes.string,
  children: PropTypes.node,
}

SvgWrapper.defaultProps = {
  className: '',
  viewBox: '0 0 100 100',
  children: null,
}

export default SvgWrapper
