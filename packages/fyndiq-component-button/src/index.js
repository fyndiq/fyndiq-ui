import React from 'react'
import styles from '../styles.less'

const Button = ({ children, onClick, type, size, horizontal, disabled }) => (
  <button
    className={`
      ${styles.button}
      ${type ? styles['type-' + type] : ''}
      ${size ? styles['size-' + size] : ''}
      ${horizontal ? styles.horizontal : ''}
      ${disabled ? styles.disabled : styles.interactive}
    `}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  type: React.PropTypes.string,
  size: React.PropTypes.string,
  horizontal: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
}

Button.defaultProps = {
  onClick: noop => noop,
  type: 'normal',
  size: 'm',
  horizontal: false,
  disabled: false,
}

export default Button
