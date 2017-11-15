import React from 'react'
import PropTypes from 'prop-types'

import styles from '../styles.css'

const ButtonWrapper = ({ className, children, orientation, noOuterBorder }) => (
  <div
    className={`
      ${styles.wrapper}
      ${styles[`wrapper--orientation_${orientation}`]}
      ${noOuterBorder && styles.wrapperNoOuterBorder}
      ${className}
    `}
  >
    {children}
  </div>
)

ButtonWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  noOuterBorder: PropTypes.bool,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
}

ButtonWrapper.defaultProps = {
  children: null,
  className: '',
  orientation: 'horizontal',
  noOuterBorder: false,
}

export default ButtonWrapper
