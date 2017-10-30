import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import styles from '../modal.css'

class Modal extends React.Component {
  static propTypes = {
    open: PropTypes.bool,
    children: PropTypes.node,
    modalId: PropTypes.string,
    overlayClassName: PropTypes.string,
    wrapperClassName: PropTypes.string,
    closeClassName: PropTypes.string,
    onClose: PropTypes.func,
  }
  static defaultProps = {
    open: false,
    children: null,
    modalId: 'fyndiq-modal',
    overlayClassName: '',
    wrapperClassName: '',
    closeClassName: '',
    onClose: () => {},
  }

  // Lock or unlock the body scroll
  // Pass false as argument to unlock
  static lockBody(lock = true) {
    const bodyClassName = 'bodyFixed'
    if (lock) {
      document.body.classList.add(bodyClassName)
    } else {
      document.body.classList.remove(bodyClassName)
    }
  }

  constructor(props) {
    super(props)

    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentWillMount() {
    // Create portal element if it doesn't exist
    if (!document.getElementById(this.props.modalId)) {
      const modalDiv = document.createElement('div')
      modalDiv.id = this.props.modalId
      document.body.appendChild(modalDiv)
    }

    // Lock the body if needed
    Modal.lockBody(this.props.open)

    // Register key events
    document.addEventListener('keypress', this.handleKeyPress)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.props.open) {
      Modal.lockBody(nextProps.open)
    }
  }

  componentWillUnmount() {
    document.body.classList.remove('bodyFixed')
    document.removeEventListener('keypress', this.handleKeyPress)
    Modal.lockBody(false)
  }

  handleKeyPress(e) {
    // ESC key
    if (e.keyCode === 27) {
      this.props.onClose()
    }
  }

  render() {
    const {
      open,
      overlayClassName,
      wrapperClassName,
      closeClassName,
    } = this.props
    if (!open) return null

    // a11y is done using the <button> component, disabling eslint rules.
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    /* eslint-disable jsx-a11y/click-events-have-key-events */

    return ReactDOM.createPortal(
      <div
        className={`${styles.overlay} ${overlayClassName}`}
        onClick={this.props.onClose}
      >
        <div
          className={`${styles.wrapper} ${wrapperClassName}`}
          onClick={e => e.stopPropagation()}
        >
          <button
            className={`${styles.close} ${closeClassName}`}
            onClick={this.props.onClose}
          >
            &times;
          </button>
          {this.props.children}
        </div>
      </div>,
      document.getElementById(this.props.modalId),
    )
  }
}

export default Modal
