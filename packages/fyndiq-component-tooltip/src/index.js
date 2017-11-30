import React from 'react'
import PropTypes from 'prop-types'
import Dropdown from 'fyndiq-component-dropdown'

import styles from '../styles.css'

class Tooltip extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['black', 'white']),
    text: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node,
    maxWidth: PropTypes.number,
    position: Dropdown.propTypes.position, // eslint-disable-line react/no-typos
  }

  static defaultProps = {
    type: 'black',
    text: null,
    children: null,
    className: '',
    position: 'bc',
    maxWidth: 190,
  }

  constructor(props) {
    super(props)

    this.state = { width: this.props.maxWidth }

    this.onDropdownOpen = this.onDropdownOpen.bind(this)
  }

  onDropdownOpen() {
    // Clone the wrapper node and hide it
    // The reason we're doing that is because of the animation
    // on the underlying Dropdown wrapper : calculating the width
    // of the wrapper when the Dropdown is just open will result
    // in a wrong width
    const cloneNode = this.wrapperElement.cloneNode(true)
    cloneNode.style.opacity = '0'

    document.body.appendChild(cloneNode)

    // Retrieve the width from the helper div
    // and apply it to the real tooltip wrapper element
    const { width } = cloneNode.children[0].getBoundingClientRect()
    this.setState({ width })

    // Remove the helper cloned node
    document.body.removeChild(cloneNode)
  }

  render() {
    const { type, text, children, position, className } = this.props

    return (
      <Dropdown
        button={<span>{children}</span>}
        hoverMode
        noWrapperStyle
        position={position}
        onOpen={this.onDropdownOpen}
      >
        <div
          className={`
            ${styles.tooltip}
            ${styles[`position-${position}`]}
            ${styles[`type-${type}`]}
            ${className}
          `}
          style={{ width: this.state.width }}
          ref={e => {
            this.wrapperElement = e
          }}
        >
          <div className={styles.helperWrapper}>{text}</div>
        </div>
      </Dropdown>
    )
  }
}

export default Tooltip
