import React from 'react'
import PropTypes from 'prop-types'

import styles from '../table.css'

const Cell = ({ children, className, flex, center }) => (
  <div
    className={`
      ${styles.cell}
      ${center && styles.cellCenter}
      ${className}
    `}
    style={{ flex }}
  >
    {children}
  </div>
)

Cell.propTypes = {
  className: PropTypes.string,
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  center: PropTypes.bool,
  children: PropTypes.node,
}

Cell.defaultProps = {
  className: '',
  flex: 1,
  center: false,
  children: null,
}

export default Cell
