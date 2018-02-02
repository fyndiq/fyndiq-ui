import React from 'react'
import PropTypes from 'prop-types'

import Button from 'fyndiq-component-button'

import Modal from './modal'
import styles from '../confirm.css'

const Confirm = ({
  open,
  type,
  title,
  message,
  icon,
  validateButton,
  cancelButton,
  onValidate,
  onCancel,
}) => (
  <Modal
    open={open}
    wrapperClassName={`
      ${styles.wrapper}
      ${styles[`wrapper--${type}`]}
    `}
    onClose={onCancel}
  >
    {icon &&
      React.cloneElement(icon, {
        className: styles.icon,
      })}

    <strong className={styles.title}>{title}</strong>

    <div>{message}</div>

    <div className={styles.footer}>
      {cancelButton &&
        (React.isValidElement(cancelButton) ? (
          React.cloneElement(cancelButton, {
            onClick: onCancel,
          })
        ) : (
          <Button type="ghost" size="m" onClick={onCancel}>
            {cancelButton}
          </Button>
        ))}
      {validateButton &&
        (React.isValidElement(validateButton) ? (
          React.cloneElement(validateButton, {
            onClick: onValidate,
          })
        ) : (
          <Button type="secondary" size="m" pill onClick={onValidate}>
            {validateButton}
          </Button>
        ))}
    </div>
  </Modal>
)

Confirm.propTypes = {
  open: PropTypes.bool,
  type: PropTypes.oneOf(['warning', 'info', 'success']),
  title: PropTypes.node,
  message: PropTypes.node,
  icon: PropTypes.element,
  validateButton: PropTypes.node,
  cancelButton: PropTypes.node,
  onValidate: PropTypes.func,
  onCancel: PropTypes.func,
}

Confirm.defaultProps = {
  open: true,
  type: 'info',
  title: 'Are you sure?',
  message: '',
  icon: null,
  validateButton: 'OK',
  cancelButton: 'Cancel',
  onValidate: () => {},
  onCancel: () => {},
}

export default Confirm
