import React from 'react'
import PropTypes from 'prop-types'

import styles from '../table.css'

const Cell = ({ children, className, center }) => (
  <div
    className={`
      ${styles.cell}
      ${center && styles.cellCenter}
      ${className}
    `}
  >
    {children}
  </div>
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
