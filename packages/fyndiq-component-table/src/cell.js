import React from 'react'
import PropTypes from 'prop-types'

import styles from '../table.css'

const Cell = ({ children, className, center, ...props }) => (
  <td
    className={`
      ${styles.cell}
      ${center && styles.cellCenter}
      ${className}
    `}
    {...props}
  >
    {children}
  </td>
)

Cell.propTypes = {
  className: PropTypes.string,
  center: PropTypes.bool,
  children: PropTypes.node,
}

Cell.defaultProps = {
  className: '',
  center: false,
  children: null,
}

export default Cell
