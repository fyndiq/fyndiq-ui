import React from 'react'
import PropTypes from 'prop-types'
import AutosizeInput from 'react-input-autosize'

import styles from '../input.css'

const InvisibleNoFormInput = ({ onChange, value, ...props }) => (
  <AutosizeInput
    inputClassName={`
      ${styles.invisibleInput}
      ${!value && styles.invisibleInputEmpty}
    `}
    onChange={e => onChange(e.target.value)}
    value={value}
    {...props}
  />
)

InvisibleNoFormInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}

InvisibleNoFormInput.defaultProps = {
  onChange: () => {},
  value: '',
}

export default InvisibleNoFormInput
