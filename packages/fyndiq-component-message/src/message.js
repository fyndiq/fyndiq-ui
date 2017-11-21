import React from 'react'
import PropTypes from 'prop-types'
import fyndiqColors from 'fyndiq-styles-colors'

import styles from '../message.css'

const colors = {
  info: fyndiqColors.blue,
  confirm: fyndiqColors.green,
  warn: fyndiqColors.orange,
  error: fyndiqColors.red,
}

const Message = ({ type, children, icon }) => (
  <div
    className={`
      ${styles.message}
      ${styles[`message--type_${type}`]}
    `}
  >
    {icon && React.cloneElement(icon, { color: colors[type] })}
    {children}
  </div>
)

Message.propTypes = {
  type: PropTypes.oneOf(['info', 'confirm', 'warn', 'error']),
  children: PropTypes.node,
  icon: PropTypes.element,
}

Message.defaultProps = {
  type: 'info',
  children: null,
  icon: null,
}

export default Message
