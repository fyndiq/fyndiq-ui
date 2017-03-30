import React from 'react'
import colors from 'fyndiq-styles-colors'
import styles from '../styles.less'

const colorClasses = {
  primary: 'primary',
  cancel: 'cancel',
}

const Button = ({ children, onClick, type, horizontal }) => (
  <button
    className={`
      ${styles.button}
      ${type ? styles[colorClasses[type]] : ''}
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
  horizontal: React.PropTypes.bool,
  type: React.PropTypes.string,
}

export default Button;
