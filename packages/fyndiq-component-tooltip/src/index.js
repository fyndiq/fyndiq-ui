import React from 'react'
import PropTypes from 'prop-types'
import Dropdown from 'fyndiq-component-dropdown'

import styles from '../styles.css'

const Tooltip = ({ text, children, position, className }) => (
  <Dropdown
    button={<span>{children}</span>}
    hoverMode
    noWrapperStyle
    position={position}
  >
    <div
      className={`
        ${styles.tooltip}
        ${styles[`position-${position}`]}
        ${className}
      `}
    >
      {text}
    </div>
  </Dropdown>
)

Tooltip.propTypes = {
  text: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
  position: Dropdown.propTypes.position, // eslint-disable-line react/no-typos
}

Tooltip.defaultProps = {
  text: null,
  children: null,
  className: '',
  position: 'bc',
}

export default Tooltip
