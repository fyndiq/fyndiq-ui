import React from 'react'
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
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func,
  type: React.PropTypes.string,
  size: React.PropTypes.string,
  horizontal: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  pressed: React.PropTypes.bool,
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
