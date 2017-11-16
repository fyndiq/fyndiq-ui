import React from 'react'
import PropTypes from 'prop-types'

import { Magnifier } from 'fyndiq-icons'

import Input from './input'

import styles from '../search.css'

class SearchInput extends React.Component {
  static propTypes = {
    collapsible: PropTypes.bool,
    size: PropTypes.oneOf(['s', 'm']),
    emptyAfterSearch: PropTypes.bool,
    input: PropTypes.element,
    className: PropTypes.string,
    onSearch: PropTypes.func,
  }

  static defaultProps = {
    collapsible: false,
    size: 'm',
    emptyAfterSearch: false,
    input: <Input placeholder="Search" htmlType="search" />,
    className: '',
    onSearch: () => {},
  }
  constructor(props) {
    super(props)

    this.state = {
      open: !this.props.collapsible,
      id: Math.random(), // The htmlId of the input
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onKeyUp = this.onKeyUp.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()

    // Don't search for empty queries
    if (this.inputElement.value === '') return

    // Call prop handler
    this.props.onSearch(this.inputElement.value)

    // Empty the input if specified
    if (this.props.emptyAfterSearch) {
      this.inputElement.value = ''
      this.inputElement.blur()
    }
  }

  onKeyUp(e) {
    // escape key
    if (this.props.collapsible && e.keyCode === 27) {
      this.setState({ open: false })
      this.inputElement.blur()
    }
  }

  onFocus() {
    this.setState({ open: true })
  }

  onBlur() {
    if (this.props.collapsible) {
      this.setState({ open: false })
    }
  }

  render() {
    const { size, input, className } = this.props

    return (
      <form
        onSubmit={this.onSubmit}
        className={`
          ${styles.wrapper}
          ${this.state.open && styles.wrapperOpen}
          ${styles[`wrapper--size-${size}`]}
          ${className}
        `}
      >
        <label className={styles.label} htmlFor={this.state.id}>
          <Magnifier size={19} />
        </label>
        {React.cloneElement(input, {
          id: this.state.id,
          className: styles.input,
          autoComplete: 'off',
          onKeyUp: this.onKeyUp,
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          inputRef: e => {
            this.inputElement = e
          },
        })}
      </form>
    )
  }
}

export default SearchInput
