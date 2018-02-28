import React from 'react'
import PropTypes from 'prop-types'
import ModalPortal from './modal-portal'

import styles from '../modal.css'

class Modal extends React.Component {
  static propTypes = {
    open: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    portalId: PropTypes.string,
    overlayClassName: PropTypes.string,
    wrapperClassName: PropTypes.string,
    closeClassName: PropTypes.string,
    forced: PropTypes.bool,
    onClose: PropTypes.func,
  }
  static defaultProps = {
    open: false,
    children: null,
    portalId: 'fyndiq-modal-portal',
    overlayClassName: '',
    wrapperClassName: '',
    closeClassName: '',
    forced: false,
    onClose: () => {},
  }

  constructor(props) {
    super(props)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.softClose = this.softClose.bind(this)
  }

  componentWillMount() {
    if (global.document && document.addEventListener) {
      // Register key events
      document.addEventListener('keypress', this.handleKeyPress)
    }
  }

  componentWillUnmount() {
    if (global.document && document.addEventListener) {
      document.removeEventListener('keypress', this.handleKeyPress)
    }
  }

  getChildren() {
    if (typeof this.props.children === 'function') {
      return this.props.children({
        onClose: this.props.onClose,
      })
    }
    return this.props.children
  }

  handleKeyPress(e) {
    // Don't close the modal if it is forced
    if (this.props.forced) return

    // ESC key
    if (e.keyCode === 27) {
      this.props.onClose()
    }
  }

  softClose() {
    if (this.props.forced) return

    this.props.onClose()
  }

  render() {
    const {
      open,
      portalId,
      overlayClassName,
      wrapperClassName,
      closeClassName,
    } = this.props
    if (!open) return null

    // a11y is done using the <button> component, disabling eslint rules.
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    /* eslint-disable jsx-a11y/click-events-have-key-events */

    return (
      <ModalPortal portalId={portalId} bodyLock={open}>
        <div
          className={`${styles.overlay} ${overlayClassName}`}
          onClick={this.softClose}
        >
          <div
            className={`${styles.wrapper} ${wrapperClassName}`}
            onClick={e => e.stopPropagation()}
          >
            {!this.props.forced && (
              <button
                className={`${styles.close} ${closeClassName}`}
                onClick={this.softClose}
              >
                &times;
              </button>
            )}
            {this.getChildren()}
          </div>
        </div>
      </ModalPortal>
    )
  }
}

export default Modal
