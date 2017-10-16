import React from 'react'
import PropTypes from 'prop-types'
import { Checkmark } from 'fyndiq-icons'
import colors from 'fyndiq-styles-colors'
import styles from '../styles.css'

class Checkbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: !!props.checked,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.checked !== nextProps.checked) {
      this.setState({
        checked: nextProps.checked,
      })
    }
  }

  toggle() {
    const checked = !this.state.checked
    this.setState({
      checked,
    })
    this.props.onToggle(checked)
  }

  render() {
    const { children, disabled, color, className } = this.props

    return (
      <button
        className={`
          ${styles.checkbox}
          ${!disabled && styles.interactiveCheckbox}
          ${className}
        `}
        onClick={() => this.toggle()}
        disabled={disabled}
      >
        {this.state.checked ?
          <Checkmark className={styles.checkmark} color={color} /> :
          <div className={styles.checkmark} />
        }
        <span className={styles.children}>
          {children}
        </span>
      </button>
    )
  }
}

Checkbox.propTypes = {
  onToggle: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
}

Checkbox.defaultProps = {
  onToggle: noop => noop,
  checked: false,
  disabled: false,
  color: colors.lightgrey,
  className: '',
}

export default Checkbox
