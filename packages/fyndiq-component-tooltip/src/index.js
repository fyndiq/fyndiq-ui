import React from 'react'
import PropTypes from 'prop-types'
import Dropdown from 'fyndiq-component-dropdown'

import styles from '../styles.css'

const Tooltip = ({ text, children, position }) => (
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
      `}
    >
      {text}
    </div>
  </Dropdown>
)

Tooltip.propTypes = {
  text: PropTypes.node,
  children: PropTypes.node,
  position: Dropdown.propTypes.position,
}

Tooltip.defaultProps = {
  text: '',
  children: '',
  position: 'bc',
}

export default Tooltip
