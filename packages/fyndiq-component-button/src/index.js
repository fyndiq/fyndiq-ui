import React from 'react'
import colors from 'fyndiq-styles-colors'
import styles from '../styles.less'

const Button = ({ children, onClick, type, size, horizontal }) => (
  <button
    className={`
      ${styles.button}
      ${type ? styles[type] : ''}
      ${size ? styles[size]: ''}
      ${horizontal ? styles.horizontal : ''}
    `}
    onClick={onClick}
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
}

export default Button;
