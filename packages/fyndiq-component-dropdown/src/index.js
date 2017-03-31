import React, { Component } from 'react'
import Button from 'fyndiq-component-button'
import Arrow from 'fyndiq-icon-arrow'
import styles from '../styles.less'

class Dropdown extends Component {
  static propTypes = {
    opened: React.PropTypes.bool,
    button: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element,
    ]).isRequired,
    children: React.PropTypes.node.isRequired,
    noArrow: React.PropTypes.boolean,
    noContentPadding: React.PropTypes.boolean,
  }

  static defaultProps = {
    opened: false,
    noArrow: false,
    noContentPadding: false,
  }

  constructor(props) {
    super(props)
    this.state = {
      dropdownOpen: props.opened || false,
    }
  }

  componentWillUnmount() {
    document.body.onclick = noop => noop
  }

  onButtonClick(event) {
    if (event) {
      event.stopPropagation()
    }

    if (this.state.dropdownOpen) {
      this.closeDropdown()
    } else {
      this.openDropdown()
    }
  }

  onDropdownClick(event) {
    if (event) {
      event.stopPropagation()
    }
    this.openDropdown()
  }

  openDropdown() {
    if (document && document.body) {
      document.body.onclick = () => this.closeDropdown()
    }
    this.setState({
      dropdownOpen: true,
    })
  }

  closeDropdown() {
    if (document && document.body) {
      document.body.onclick = noop => noop
    }
    this.setState({
      dropdownOpen: false,
    })
  }

  render() {
    const { button, children, noArrow, noContentPadding } = this.props

    let buttonContent

    if (typeof button === 'string') {
      buttonContent = (
        <Button onClick={e => this.onButtonClick(e)}>
          {button}
          {!noArrow ? <Arrow orientation="down" /> : ''}
        </Button>
      )
    } else {
      buttonContent = (
        <div onClick={e => this.onButtonClick(e)}>
          {button}
        </div>
      )
    }

    return (
      <div className={styles.wrapper}>
        {buttonContent}
        <div
          className={`
            ${this.state.dropdownOpen ? styles.dropdownWrapperOpen : styles.dropdownWrapper}
            ${noContentPadding ? '' : styles.padded}
          `}
          onClick={e => this.onDropdownClick(e)}
          data-test="DROPDOWN_WRAPPER"
        >
          {children}
        </div>
      </div>
    )
  }
}


export default Dropdown
