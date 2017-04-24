import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.less'

const Button = ({ children, onClick, type, size, horizontal, disabled, pressed }) => (
  <button
    className={`
      ${styles.button}
      ${styles['type-' + type]}
      ${styles['size-' + size]}
      ${horizontal && styles.horizontal}
      ${pressed && styles.pressed}
      ${disabled ? styles.disabled : styles.interactive}
    `}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  size: PropTypes.string,
  horizontal: PropTypes.bool,
  disabled: PropTypes.bool,
  pressed: PropTypes.bool,
}

Button.defaultProps = {
  onClick: noop => noop,
  type: 'normal',
  size: 's',
  horizontal: false,
  disabled: false,
  pressed: false,
}

export default Button
