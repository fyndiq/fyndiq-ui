import React from 'react'

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
    {React.cloneElement(icon, {
      className: styles.icon,
    })}

    <strong className={styles.title}>{title}</strong>

    <div>{message}</div>

    <div className={styles.footer}>
      {React.isValidElement(cancelButton) ? (
        React.cloneElement(cancelButton, {
          onClick: onCancel,
        })
      ) : (
        <Button type="ghost" size="m" onClick={onCancel}>
          {cancelButton}
        </Button>
      )}
      {React.isValidElement(validateButton) ? (
        React.cloneElement(validateButton, {
          onClick: onValidate,
        })
      ) : (
        <Button type="secondary" size="m" pill onClick={onValidate}>
          {validateButton}
        </Button>
      )}
    </div>
  </Modal>
)

Confirm.defaultProps = {
  type: 'info',
  title: 'Are you sure?',
  validateButton: 'OK',
  cancelButton: 'Cancel',
  open: true,
}

export default Confirm

// // Usage in API

// import { confirm, Confirm } from 'fyndiq-component-modal'

// const a = async confirmButton() {
//   const validated = await confirm(
//     <Confirm type="warning" icon={<Warning />} title="Are you sure?" />
//   )
// }
