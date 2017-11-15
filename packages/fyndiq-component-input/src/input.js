import React from 'react'
import PropTypes from 'prop-types'

import styles from '../input.css'

const Input = ({
  className,
  required,
  defaultValue,
  value,
  onChange,
  htmlType,
  placeholder,
}) => (
  <input
    type={htmlType}
    required={required}
    value={value}
    defaultValue={defaultValue}
    placeholder={placeholder}
    onChange={e => onChange(e.target.value)}
    className={`
      ${styles.input}
      ${className}
    `}
  />
)

Input.propTypes = {
  className: PropTypes.string,
  required: PropTypes.bool,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  htmlType: PropTypes.string,
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  className: '',
  required: false,
  defaultValue: '',
  value: undefined,
  onChange: () => {},
  htmlType: 'text',
  placeholder: '',
}

export default Input
