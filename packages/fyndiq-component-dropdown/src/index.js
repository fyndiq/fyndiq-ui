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
  }

  constructor(props) {
    super(props)
    this.state = {
      opened: props.opened,
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

  openDropdown() {
    this.setState({ opened: true })
  }

  closeDropdown() {
    this.setState({ opened: false })
  }

  toggleDropdown() {
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
        <Button
          size={size}
          onClick={this.onButtonClick}
        >
          {button}
          {!noArrow ? <Arrow orientation={arrowOrientation} /> : ''}
        </Button>
      )
    } else {
      buttonContent = (
        <div onClick={this.onButtonClick}>
          {button}
        </div>
      )
    }

    return (
      <div
        className={styles.wrapper}
        ref={e => { this.wrapperNode = e }}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        {buttonContent}
        <div
          className={`
            ${styles.dropdownWrapper}
            ${!noWrapperStyle ? styles.dropdownDefault : ''}
            ${this.state.opened ? styles.open : ''}
            ${styles['position-' + position]}
          `}
        >
          {children}
        </div>
      </div>
    )
  }
}


export default Dropdown
