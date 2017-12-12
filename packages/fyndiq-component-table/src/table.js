import React from 'react'
import PropTypes from 'prop-types'

import styles from '../table.css'

const Table = ({ children, className, ...props }) => (
  <table
    className={`
      ${styles.table}
      ${className}
    `}
    {...props}
  >
    <tbody>{children}</tbody>
  </table>
)

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

Table.defaultProps = {
  className: '',
  children: null,
}

export default Table
