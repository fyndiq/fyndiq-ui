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
    hoverMode: React.PropTypes.bool,
    noArrow: React.PropTypes.bool,
    noContentPadding: React.PropTypes.bool,
  }

  static defaultProps = {
    opened: false,
    hoverMode: false,
    noArrow: false,
    noContentPadding: false,
    size: undefined,
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
      noContentPadding,
      size,
    } = this.props

    let buttonContent

    if (typeof button === 'string') {
      buttonContent = (
        <Button
          size={size}
          onClick={this.onButtonClick}
        >
          {button}
          {!noArrow ? <Arrow orientation="down" /> : ''}
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
            ${this.state.opened ? styles.dropdownWrapperOpen : styles.dropdownWrapper}
            ${noContentPadding ? '' : styles.padded}
          `}
        >
          {children}
        </div>
      </div>
    )
  }
}


export default Dropdown
