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

  renderCheckmark() {
    if (this.state.checked) {
      return (
        <Checkmark
          className={styles.checkmark}
          color={this.props.color}
        />
      )
    }

    return <div className={styles.checkmark} />
  }

  render() {
    const {
      children,
      disabled,
      className,
    } = this.props

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
        {this.renderCheckmark()}
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
