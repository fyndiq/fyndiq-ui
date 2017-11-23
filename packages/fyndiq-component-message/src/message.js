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

class Message extends React.Component {
  constructor(props) {
    super(props)

    this.remaining = this.props.timeout

    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  componentWillMount() {
    this.resume()
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  onMouseEnter() {
    // Pause the timer
    this.pause()
  }

  onMouseLeave() {
    // Resume the timer
    this.resume()
  }

  pause() {
    clearTimeout(this.timeout)
    this.remaining -= Date.now() - this.start

    // Timer should be at least 1s
    this.remaining = Math.max(this.remaining, 1000)
  }

  resume() {
    this.start = Date.now()
    clearTimeout(this.timeout)
    this.timeout = setTimeout(this.props.onClose, this.remaining)
  }

  render() {
    const { type, children, icon } = this.props

    return (
      <div
        className={`
          ${styles.message}
          ${styles[`message--type_${type}`]}
        `}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {icon && React.cloneElement(icon, { color: colors[type] })}
        {children}
      </div>
    )
  }
}

Message.propTypes = {
  type: PropTypes.oneOf(['info', 'confirm', 'warn', 'error']),
  children: PropTypes.node,
  icon: PropTypes.element,
  onClose: PropTypes.func,
  timeout: PropTypes.number,
}

Message.defaultProps = {
  type: 'info',
  children: null,
  icon: null,
  onClose: () => {},
  timeout: 5000,
}

export default Message
