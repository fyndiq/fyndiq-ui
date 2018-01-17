import React from 'react'
import PropTypes from 'prop-types'

import styles from '../table.css'

const Row = ({
  children,
  head,
  interactive,
  className,
  size,
  verticalCenter,
  id,
  length,
  ...props
}) => (
  <React.Fragment>
    <tr
      className={`
        ${styles.row}
        ${head && styles.rowHead}
        ${interactive && styles.rowInteractive}
        ${verticalCenter && styles.rowVerticalCenter}
        ${styles[`rowSize-${size}`]}
        ${id < length - 1 && length !== 1 && styles.rowStart}
        ${id !== 0 && id <= length && styles.rowEnd}
        ${className}
      `}
      {...props}
    >
      <td className={`${styles.cellSpacer} ${styles.cell}`} />
      {children}
      <td className={`${styles.cellSpacer} ${styles.cell}`} />
    </tr>
    <tr className={styles.rowSpacer} />
  </React.Fragment>
)

Row.propTypes = {
  head: PropTypes.bool,
  interactive: PropTypes.bool,
  className: PropTypes.string,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  children: PropTypes.node,
  verticalCenter: PropTypes.bool,
}

Row.defaultProps = {
  className: '',
  children: null,
  head: false,
  interactive: false,
  size: 'm',
  verticalCenter: false,
}

export default Row
