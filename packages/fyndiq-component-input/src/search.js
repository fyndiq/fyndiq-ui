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
    value: PropTypes.string,
    className: PropTypes.string,
    onSearch: PropTypes.func,
    debouncedOnChange: PropTypes.func,
  }

  static defaultProps = {
    collapsible: false,
    size: 'm',
    emptyAfterSearch: false,
    input: <Input placeholder="Search" htmlType="search" />,
    value: '',
    className: '',
    onSearch: () => {},
    debouncedOnChange: null,
  }
  constructor(props) {
    super(props)

    this.state = {
      open: !this.props.collapsible,
      value: this.props.value,
      id: Math.random(), // The htmlId of the input
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onKeyUp = this.onKeyUp.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }

  componentWillReceiveProps(newProps) {
    if (this.props.value !== newProps.value) {
      this.setState({ value: newProps.value })
    }
  }

  onSubmit(e) {
    e.preventDefault()

    // Call prop handler
    this.props.onSearch(this.state.value)

    // Empty the input if specified
    if (this.props.emptyAfterSearch) {
      this.setState({ value: '' })
      this.inputElement.blur()
    }
  }

  onKeyUp(e) {
    // escape key
    if (e.keyCode === 27) {
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

  onInputChange(value) {
    this.setState({ value })
  }

  render() {
    const { size, input, className, debouncedOnChange } = this.props

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
          value: this.state.value,
          onChange: this.onInputChange,
          debouncedOnChange,
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
