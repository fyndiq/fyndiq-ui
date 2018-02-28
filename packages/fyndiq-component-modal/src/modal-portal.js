import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// Keep in sync with modal.css
import styles from '../modal.css'

// This component creates a Portal helper
// for the Modal Component. It is not intended
// to be used directly, use the Modal Component
// instead.
class ModalPortal extends React.Component {
  static propTypes = {
    portalId: PropTypes.string,
    children: PropTypes.node,
    bodyLock: PropTypes.bool,
  }

  static defaultProps = {
    children: null,
    portalId: 'fyndiq-modal-portal',
    bodyLock: false,
  }

  // Lock or unlock the body scroll
  // Pass false as argument to unlock
  static lockBody(lock = true) {
    if (lock) {
      document.body.classList.add(styles.bodyFixed)
    } else {
      document.body.classList.remove(styles.bodyFixed)
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
    ModalPortal.lockBody(this.props.bodyLock)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.bodyLock !== this.props.bodyLock) {
      ModalPortal.lockBody(nextProps.bodyLock)
    }
  }

  componentWillUnmount() {
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
