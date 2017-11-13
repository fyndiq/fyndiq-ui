import React from 'react'
import PropTypes from 'prop-types'

import styles from '../table.css'

const Row = ({
  children,
  head,
  interactive,
  className,
  noBorder,
  size,
  verticalCenter,
}) => (
  <div
    className={`
      ${styles.row}
      ${head && styles.rowHead}
      ${interactive && styles.rowInteractive}
      ${noBorder && styles.rowNoBorder}
      ${verticalCenter && styles.rowVerticalCenter}
      ${styles[`rowSize-${size}`]}
      ${className}
    `}
  >
    {children}
  </div>
)

Row.propTypes = {
  head: PropTypes.bool,
  interactive: PropTypes.bool,
  className: PropTypes.string,
  noBorder: PropTypes.bool,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  children: PropTypes.node,
  verticalCenter: PropTypes.bool,
}

Row.defaultProps = {
  className: '',
  noBorder: false,
  children: null,
  head: false,
  interactive: false,
  size: 'm',
  verticalCenter: true,
}

export default Row
