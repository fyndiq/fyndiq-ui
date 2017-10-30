import React from 'react'
import PropTypes from 'prop-types'
import Button from 'fyndiq-component-button'

import Modal from './modal'

const isSameType = (element, component) =>
  React.isValidElement(element) &&
  (element.type === component ||
    (element.type && element.type.displayName === component.name))

// Proptype checker: checks that the element is of a specific Component type
// FIXME: this declaration should be in its own package, like fyndiq-utils
// or fyndiq-prop-types or something
export const ElementOfType = type => (props, propName, componentName) => {
  const prop = props[propName]
  if (isSameType(prop, type)) return null

  // Otherwise, return Error
  return new Error(
    `Invalid prop \`${propName}\` supplied to` +
      ` \`${componentName}\`. Must be of type ${type.displayName || type.name}`,
  )
}

class ModalButton extends React.Component {
  static propTypes = {
    button: PropTypes.oneOfType([PropTypes.string, ElementOfType(Button)]),
    children: PropTypes.oneOfType([PropTypes.node, ElementOfType(Modal)]),
  }

  static defaultProps = {
    button: 'Open Modal',
    children: null,
  }

  constructor(props) {
    super(props)
    this.state = { open: false }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  getButton() {
    const { button } = this.props
    if (isSameType(button, Button)) {
      return React.cloneElement(button, {
        onClick: this.openModal,
      })
    }

    return <Button onClick={this.openModal}>{button}</Button>
  }

  getModal() {
    const { children } = this.props

    const modalProps = {
      open: this.state.open,
      onClose: this.closeModal,
    }
    if (isSameType(children, Modal)) {
      return React.cloneElement(this.props.children, modalProps)
    }

    return <Modal {...modalProps}>{children}</Modal>
  }

  closeModal() {
    this.setState({ open: false })
  }

  openModal() {
    this.setState({ open: true })
  }

  render() {
    return (
      <span>
        {this.getButton()}
        {this.getModal()}
      </span>
    )
  }
}

export default ModalButton
