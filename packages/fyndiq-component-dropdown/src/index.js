import React from 'react'
import Button from 'fyndiq-component-button'
import Arrow from 'fyndiq-icon-arrow'
import styles from '../styles.less'

class Dropdown extends React.Component {
  static propTypes = {
    opened: React.PropTypes.bool,
    button: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element,
    ]).isRequired,
    children: React.PropTypes.node.isRequired,
    size: React.PropTypes.string,
    position: React.PropTypes.oneOf([
      'bl', 'bc', 'br',
      'tl', 'tc', 'tr',
    ]),
    margin: React.PropTypes.number,
    hoverMode: React.PropTypes.bool,
    noArrow: React.PropTypes.bool,
    noWrapperStyle: React.PropTypes.bool,
  }

  static defaultProps = {
    opened: false,
    hoverMode: false,
    noArrow: false,
    noWrapperStyle: false,
    size: undefined,
    position: 'bl',
    margin: 5,
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
  }

  componentWillMount() {
    document.addEventListener('click', this.handleDocumentClick, false)
    document.addEventListener('touchend', this.handleDocumentClick, false)
  }

  componentDidMount() {
    this.updateDropdownPosition()
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, false)
    document.removeEventListener('touchend', this.handleDocumentClick, false)
  }

  onButtonClick() {
    if (!this.props.hoverMode) {
      this.toggleDropdown()
    } else {
      this.openDropdown()
    }
  }

  onMouseOver() {
    if (this.props.hoverMode) {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => this.openDropdown(), 200)
    }
  }

  onMouseOut() {
    if (this.props.hoverMode) {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => this.closeDropdown(), 100)
    }
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
    if (this.wrapperNode && !this.wrapperNode.contains(event.target)) {
      this.closeDropdown()
    }
  }

  render() {
    const {
      button,
      children,
      noArrow,
      size,
      position,
      noWrapperStyle,
    } = this.props

    let buttonContent

    // Arrow orientation depends on the position of the dropdown
    const arrowOrientation = position[0] === 't' ? 'up' : 'down'

    if (typeof button === 'string') {
      buttonContent = (
        <Button size={size}>
          {button}
          {!noArrow ? <Arrow orientation={arrowOrientation} /> : ''}
        </Button>
      )
    } else {
      buttonContent = button
    }

    return (
      <div
        className={styles.wrapper}
        ref={e => { this.wrapperNode = e }}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        <div
          ref={e => { this.buttonNode = e }}
          onClick={this.onButtonClick}
        >
          {buttonContent}
        </div>
        {this.state.opened ? (
          <div
            className={`
              ${styles.dropdownWrapper}
              ${!noWrapperStyle ? styles.dropdownDefault : ''}
              ${styles['position-' + position]}
            `}
            style={{
              left: this.state.left,
              top: this.state.top,
            }}
          >
            {children}
          </div>
        ) : null}
      </div>
    )
  }
}


export default Dropdown
