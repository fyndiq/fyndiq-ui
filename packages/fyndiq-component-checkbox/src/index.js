import React from 'react'
import Checkmark from 'fyndiq-icon-checkmark'
import colors from 'fyndiq-styles-colors'
import styles from '../styles.less'

class Checkbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: !!props.checked,
    }
  }

  toggle() {
    this.setState({
      checked: !this.state.checked,
    })
    this.props.onToggle(this.state.checked)
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
  onToggle: React.PropTypes.func,
  checked: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  color: React.PropTypes.string,
  className: React.PropTypes.string,
}

Checkbox.defaultProps = {
  onToggle: noop => noop,
  checked: false,
  disabled: false,
  color: colors.lightgrey,
  className: '',
}

export default Checkbox
