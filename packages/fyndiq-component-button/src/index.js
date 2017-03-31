import React from 'react'
import colors from 'fyndiq-styles-colors'
import styles from '../styles.less'

const Button = ({ children, onClick, type, size, horizontal, disabled }) => (
  <button
    className={`
      ${styles.button}
      ${type ? styles['type-' + type] : styles['type-normal']}
      ${size ? styles['size-' + size]: ''}
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

export default Button;
