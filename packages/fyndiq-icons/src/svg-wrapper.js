import React from 'react'
import PropTypes from 'prop-types'

import styles from '../icons.css'

const SvgWrapper = ({ className, children, ...props }) => (
  <svg
    className={`
      ${styles.svgWrapper}
      ${className}
    `}
    {...props}
  >
    {children}
  </svg>
)

SvgWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

SvgWrapper.defaultProps = {
  className: '',
  children: null,
}

export default SvgWrapper
