import React from 'react'
import PropTypes from 'prop-types'
import { Pencil } from 'fyndiq-icons'

import styles from '../input.css'

class InvisibleInput extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    className: PropTypes.string,
  }

  static defaultProps = {
    onChange: () => {},
    value: undefined,
    className: '',
  }

  constructor(props) {
    super(props)

    this.state = { value: this.props.value }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onInputFocus = this.onInputFocus.bind(this)
    this.onInputBlur = this.onInputBlur.bind(this)
    this.onInputKeypress = this.onInputKeypress.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value })
    }
  }

  onChange(event) {
    this.setState({ value: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.onChange(this.state.value)
    this.inputElement.blur()
  }

  onInputFocus(event) {
    event.target.addEventListener('keypress', this.onInputKeypress)
  }

  onInputBlur(event) {
    event.target.removeEventListener('keypress', this.onInputKeypress)
  }

  onInputKeypress(event) {
    // ESC key
    if (event.keyCode === 27) {
      this.inputElement.blur()
      this.setState({ value: this.props.value })
      event.stopPropagation()
    }
  }

  render() {
    const { className } = this.props

    return (
      <form
        className={`
          ${styles.invisibleWrapper}
          ${this.state.value !== this.props.value &&
            styles.invisibleWrapperDirty}
          ${className}
        `}
        onSubmit={this.onSubmit}
      >
        <input
          value={this.state.value}
          onChange={this.onChange}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          className={styles.invisibleInput}
          ref={element => {
            this.inputElement = element
          }}
        />
        <button type="submit" className={styles.invisibleSubmit}>
          <Pencil className={styles.invisiblePencil} />
        </button>
      </form>
    )
  }
}

export default InvisibleInput
