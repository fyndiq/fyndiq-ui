import React from 'react'
import PropTypes from 'prop-types'

import styles from '../styles.css'

const ButtonWrapper = ({ className, children, orientation }) => (
  <div
    className={`
      ${styles.wrapper}
      ${styles[`wrapper--orientation_${orientation}`]}
      ${className}
    `}
  >
    {children}
  </div>
)

ButtonWrapper.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
}

ButtonWrapper.defaultProps = {
  children: null,
  className: '',
  orientation: 'horizontal',
}

export default ButtonWrapper
