import React from 'react'
import colors from 'fyndiq-styles-colors'
import styles from '../styles.less'

const colorClasses = {
  primary: 'primary',
  cancel: 'cancel',
}

const Button = ({ children, onClick, type }) => (
  <button
    className={`${styles.button} ${type ? styles[colorClasses[type]] : ''}`}
    onClick={onClick}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  type: React.PropTypes.string,
}

export default Button;
