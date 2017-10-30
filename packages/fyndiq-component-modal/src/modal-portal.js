import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// Keep in sync with modal.css
const bodyFixedClassName = 'bodyFixed'

// This component creates a Portal helper
// for the Modal Component. It is not intended
// to be used directly, use the Modal Component
// instead.
class ModalPortal extends React.Component {
  static propTypes = {
    portalId: PropTypes.string,
    children: PropTypes.node,
    open: PropTypes.bool,
  }

  static defaultProps = {
    children: null,
    portalId: 'fyndiq-portal',
    open: false,
  }

  // Lock or unlock the body scroll
  // Pass false as argument to unlock
  static lockBody(lock = true) {
    if (lock) {
      document.body.classList.add(bodyFixedClassName)
    } else {
      document.body.classList.remove(bodyFixedClassName)
    }
  }

  componentWillMount() {
    // Create portal element if it doesn't exist
    if (!document.getElementById(this.props.portalId)) {
      const modalDiv = document.createElement('div')
      modalDiv.id = this.props.portalId
      document.body.appendChild(modalDiv)
    }

    // Lock the body if needed
    ModalPortal.lockBody(this.props.open)

    // Register key events
    document.addEventListener('keypress', this.handleKeyPress)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.props.open) {
      ModalPortal.lockBody(nextProps.open)
    }
  }

  componentWillUnmount() {
    document.body.classList.remove(bodyFixedClassName)
    document.removeEventListener('keypress', this.handleKeyPress)
    ModalPortal.lockBody(false)
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById(this.props.portalId),
    )
  }
}

export default ModalPortal
