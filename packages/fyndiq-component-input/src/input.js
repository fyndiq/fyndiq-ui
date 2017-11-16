import React from 'react'
import PropTypes from 'prop-types'

import styles from '../input.css'

const Input = ({ className, onChange, htmlType, inputRef, ...props }) => (
  <input
    type={htmlType}
    ref={inputRef}
    onChange={e => onChange(e.target.value)}
    className={`
      ${styles.input}
      ${className}
    `}
    {...props}
  />
)

Input.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  htmlType: PropTypes.string,
  inputRef: PropTypes.func,
}

Input.defaultProps = {
  className: '',
  onChange: () => {},
  htmlType: 'text',
  inputRef: null,
}

export default Input
