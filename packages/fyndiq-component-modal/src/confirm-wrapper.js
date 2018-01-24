import React from 'react'

import ModalPortal from './modal-portal'

class ConfirmWrapper extends React.Component {
  // Keep in memory a running instance of the wrapper
  static instance = null

  static setConfirm(confirm, callback) {
    if (ConfirmWrapper.instance === null) {
      throw new Error('ConfirmWrapper has no instance running')
    }

    ConfirmWrapper.instance.setConfirm(confirm, callback)
  }

  constructor(props) {
    super(props)
    this.state = { confirm: null }
    this.setConfirm = this.setConfirm.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.onValidate = this.onValidate.bind(this)
  }

  componentWillMount() {
    if (ConfirmWrapper.instance != null) {
      console.warn('ConfirmWrapper already had an instance running')
    }

    ConfirmWrapper.instance = this
  }

  componentWillUnmount() {
    ConfirmWrapper.instance = null
  }

  onCancel() {
    this.callback(false)
    this.unsetConfirm()
  }

  onValidate() {
    this.callback(true)
    this.unsetConfirm()
  }

  setConfirm(confirm, callback) {
    if (this.callback != null) {
      console.warn(
        'A confirm callback was previously registered, and will be overwritten.',
      )
    }
    this.callback = callback

    this.setState({ confirm })
  }

  unsetConfirm() {
    this.setState({ confirm: null })
    this.callback = null
  }

  render() {
    if (this.state.confirm == null) return null

    return (
      <ModalPortal>
        {React.cloneElement(this.state.confirm, {
          onCancel: this.onCancel,
          onValidate: this.onValidate,
        })}
      </ModalPortal>
    )
  }
}

export default ConfirmWrapper
