import React from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'

import styles from '../input.css'

class Input extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    debouncedOnChange: PropTypes.func,
    inputRef: PropTypes.func,
    debounceWait: PropTypes.number,
    type: PropTypes.string,
  }

  static defaultProps = {
    className: '',
    onChange: () => {},
    debouncedOnChange: null,
    inputRef: null,
    debounceWait: 500,
    type: 'text',
  }

  constructor(props) {
    super(props)

    if (this.props.debouncedOnChange) {
      this.debouncedOnChange = debounce(
        value => this.props.debouncedOnChange(value),
        this.props.debounceWait,
      )
    }
  }

  render() {
    const {
      className,
      type,
      onChange,
      inputRef,
      debounceWait,
      debouncedOnChange,
      ...props
    } = this.props

    return (
      <input
        ref={inputRef}
        type={type}
        onChange={e => {
          // Call both the onChange and debouncedOnChange handler
          onChange(e.target.value)
          if (debouncedOnChange) {
            this.debouncedOnChange(e.target.value)
          }
        }}
        className={`
          ${styles.input}
          ${className}
        `}
        {...props}
      />
    )
  }
}

export default Input
