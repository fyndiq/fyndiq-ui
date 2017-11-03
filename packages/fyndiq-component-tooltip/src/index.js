import React from 'react'
import PropTypes from 'prop-types'
import Dropdown from 'fyndiq-component-dropdown'

import styles from '../styles.css'

class Tooltip extends React.Component {
  static propTypes = {
    text: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node,
    position: Dropdown.propTypes.position, // eslint-disable-line react/no-typos
  }

  static defaultProps = {
    text: null,
    children: null,
    className: '',
    position: 'bc',
  }

  render() {
    const { text, children, position, className } = this.props

    return (
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
          ref={e => {
            this.wrapperElement = e
          }}
        >
          {text}
        </div>
      </Dropdown>
    )
  }
}

export default Tooltip
