import React from 'react'
import PropTypes from 'prop-types'
import Button from 'fyndiq-component-button'
import { Arrow } from 'fyndiq-icons'

import styles from '../styles.css'

class Dropdown extends React.Component {
  static propTypes = {
    opened: PropTypes.bool,
    button: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
    size: PropTypes.string,
    position: PropTypes.oneOf(['bl', 'bc', 'br', 'tl', 'tc', 'tr']),
    className: PropTypes.string,
    wrapperClassName: PropTypes.string,
    margin: PropTypes.number,
    disabled: PropTypes.bool,
    hoverMode: PropTypes.bool,
    noPropagateClickEvent: PropTypes.bool,
    noArrow: PropTypes.bool,
    noWrapperStyle: PropTypes.bool,
  }

  static defaultProps = {
    opened: false,
    hoverMode: false,
    noArrow: false,
    noWrapperStyle: false,
    size: undefined,
    className: '',
    wrapperClassName: '',
    disabled: false,
    position: 'bl',
    margin: 5,
    noPropagateClickEvent: false,
  }

  constructor(props) {
    super(props)
    this.state = {
      opened: props.opened,
      left: 0,
      top: 0,
    }

    this.onButtonClick = this.onButtonClick.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
    this.handleDocumentClick = this.handleDocumentClick.bind(this)
    this.handleKeypress = this.handleKeypress.bind(this)
    this.closeDropdown = this.closeDropdown.bind(this)
  }

  componentWillMount() {
    document.addEventListener('click', this.handleDocumentClick)
    document.addEventListener('touchend', this.handleDocumentClick)
    document.addEventListener('keypress', this.handleKeypress, true)
  }

  componentDidMount() {
    this.updateDropdownPosition()
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick)
    document.removeEventListener('touchend', this.handleDocumentClick)
    document.removeEventListener('keypress', this.handleKeypress, true)
  }

  onButtonClick() {
    if (this.props.disabled) return

    if (!this.props.hoverMode) {
      this.toggleDropdown()
    } else {
      this.openDropdown()
    }
  }

  onMouseOver() {
    if (this.props.disabled) return

    if (this.props.hoverMode) {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => this.openDropdown(), 200)
    }
  }

  onMouseOut() {
    if (this.props.disabled) return

    if (this.props.hoverMode) {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => this.closeDropdown(), 100)
    }
  }

  getChildren() {
    // If children prop is a function, pass the close handler
    // to it
    if (typeof this.props.children === 'function') {
      return this.props.children({
        onClose: this.closeDropdown,
      })
    }
    return this.props.children
  }

  updateDropdownPosition() {
    const buttonSize = this.buttonNode.getBoundingClientRect()
    const { position, margin } = this.props
    let left = this.buttonNode.offsetLeft
    let top = this.buttonNode.offsetTop

    // If the dropdown is above the button
    if (position[0] === 't') {
      top -= margin
      // If the dropdown is under the button
    } else {
      top += buttonSize.height + margin
    }

    if (position[1] === 'r') {
      // If the dropdown is on the right
      left += buttonSize.width
    } else if (position[1] === 'c') {
      // If it is in the center
      left += buttonSize.width / 2
    }

    this.setState({ left, top })
  }

  openDropdown() {
    this.updateDropdownPosition()
    this.setState({ opened: true })
  }

  closeDropdown() {
    this.setState({ opened: false })
  }

  toggleDropdown() {
    this.updateDropdownPosition()
    this.setState(state => ({ opened: !state.opened }))
  }

  handleDocumentClick(event) {
    if (this.props.disabled) return

    if (this.wrapperNode && !this.wrapperNode.contains(event.target)) {
      this.closeDropdown()
    }
  }

  handleKeypress(event) {
    if (this.props.disabled) return

    // ESC key
    if (this.state.opened && event.keyCode === 27) {
      this.closeDropdown()
      event.stopImmediatePropagation()
    }
  }

  render() {
    const {
      button,
      noArrow,
      size,
      position,
      className,
      wrapperClassName,
      noWrapperStyle,
      noPropagateClickEvent,
    } = this.props

    let buttonContent

    // Arrow orientation depends on the position of the dropdown
    const arrowOrientation = position[0] === 't' ? 'up' : 'down'

    if (typeof button === 'string') {
      buttonContent = (
        <Button size={size} disabled={this.props.disabled}>
          {button}
          {!noArrow && <Arrow orientation={arrowOrientation} />}
        </Button>
      )
    } else {
      buttonContent = button
    }

    // Note on disabled rules: The component is accessible.
    // It might not be built in the perfect way (feel free to redo it)
    // but it is accessible. So we can disable the accessibility rules.
    /* eslint-disable jsx-a11y/interactive-supports-focus */
    /* eslint-disable jsx-a11y/mouse-events-have-key-events */
    /* eslint-disable jsx-a11y/click-events-have-key-events */

    return (
      <div
        className={`${styles.wrapper} ${className}`}
        ref={e => {
          this.wrapperNode = e
        }}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        onClick={e => noPropagateClickEvent && e.stopPropagation()}
        role="button"
      >
        <div
          ref={e => {
            this.buttonNode = e
          }}
          onClick={this.onButtonClick}
          role="button"
        >
          {buttonContent}
        </div>
        {this.state.opened && (
          <div
            className={`
              ${styles.dropdownWrapper}
              ${!noWrapperStyle ? styles.dropdownDefault : ''}
              ${styles[`position-${position}`]}
              ${wrapperClassName}
            `}
            style={{
              left: this.state.left,
              top: this.state.top,
            }}
          >
            {this.getChildren()}
          </div>
        )}
      </div>
    )
  }
}

export default Dropdown
