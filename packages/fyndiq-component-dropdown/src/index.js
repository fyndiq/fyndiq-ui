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
    noArrow: React.PropTypes.bool,
    noContentPadding: React.PropTypes.bool,
  }

  static defaultProps = {
    opened: false,
    noArrow: false,
    noContentPadding: false,
    size: undefined,
  }

  constructor(props) {
    super(props)
    this.state = {
      dropdownOpen: props.opened,
    }

    // Save this as a property so that addEventListener and removeEventListener
    // work properly
    this.boundHandler = this.handleDocumentClick.bind(this)
  }

  componentWillMount() {
    document.addEventListener('click', this.boundHandler, false)
    document.addEventListener('touchend', this.boundHandler, false)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.boundHandler, false)
    document.removeEventListener('touchend', this.boundHandler, false)
  }

  onButtonClick() {
    this.setState({ dropdownOpen: !this.state.dropdownOpen })
  }

  handleDocumentClick(event) {
    if (this.wrapperNode && !this.wrapperNode.contains(event.target)) {
      this.setState({ dropdownOpen: false })
    }
  }

  render() {
    const { button, children, noArrow, noContentPadding, size } = this.props

    let buttonContent

    if (typeof button === 'string') {
      buttonContent = (
        <Button onClick={e => this.onButtonClick(e)} size={size}>
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
      <div className={styles.wrapper} ref={e => { this.wrapperNode = e }}>
        {buttonContent}
        <div
          className={`
            ${this.state.dropdownOpen ? styles.dropdownWrapperOpen : styles.dropdownWrapper}
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
