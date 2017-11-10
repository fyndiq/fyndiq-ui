import React from 'react'
import PropTypes from 'prop-types'

import styles from '../table.css'

const Table = ({ children, className }) => (
  <div
    className={`
      ${styles.table}
      ${className}
    `}
  >
    {children}
  </div>
)

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
}

Table.defaultProps = {
  className: '',
  children: null,
}

export default Table
