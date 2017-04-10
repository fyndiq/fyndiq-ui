import React from 'react'
import PropTypes from 'prop-types'
import Button from 'fyndiq-component-button'
import Arrow from 'fyndiq-icon-arrow'
import styles from '../styles.less'

class Dropdown extends React.Component {
  static propTypes = {
    opened: PropTypes.bool,
    button: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]).isRequired,
    children: PropTypes.node.isRequired,
    size: PropTypes.string,
    noArrow: PropTypes.bool,
    noContentPadding: PropTypes.bool,
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
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.boundHandler, false)
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
