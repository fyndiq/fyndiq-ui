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
  ...props
}) => (
  <tr
    className={`
      ${styles.row}
      ${head && styles.rowHead}
      ${interactive && styles.rowInteractive}
      ${noBorder && styles.rowNoBorder}
      ${verticalCenter && styles.rowVerticalCenter}
      ${styles[`rowSize-${size}`]}
      ${className}
    `}
    {...props}
  >
    {children}
  </tr>
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
