import React from 'react'
import Checkmark from 'fyndiq-icon-checkmark'
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
    const { children, disabled } = this.props

    return (
      <button
        className={`
          ${styles.checkbox}
          ${disabled ? '' : styles.interactiveCheckbox}
        `}
        onClick={() => this.toggle()}
        disabled={disabled}
      >
        {this.state.checked ?
          <Checkmark className={styles.checkmark} /> :
          <div className={styles.checkmarkPlaceholder} />
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
}

Checkbox.defaultProps = {
  onToggle: noop => noop,
  checked: false,
  disabled: false,
}

export default Checkbox
