import React from 'react'
import { storiesOf, action } from '@storybook/react'
import Button from 'fyndiq-component-button'
import Modal, {
  ModalButton,
  confirm,
  Confirm,
  ConfirmWrapper,
} from 'fyndiq-component-modal'
import { Warning } from 'fyndiq-icons'

import './component-modal.css'

storiesOf('Modal', module)
  .addWithInfo('default', () => <ModalButton>Content</ModalButton>)
  .addWithInfo('custom modal styles', () => (
    <ModalButton button="Open Custom Modal">
      <Modal
        overlayClassName="test-overlay--red"
        wrapperClassName="test-wrapper--black"
      >
        Content with black background on a red transparent overlay
      </Modal>
    </ModalButton>
  ))
  .addWithInfo('custom button', () => (
    <ModalButton button={<Button type="primary">Open Modal</Button>}>
      Content
    </ModalButton>
  ))
  .addWithInfo('custom close button', () => (
    <ModalButton>
      <Modal>
        {({ onClose }) => <button onClick={onClose}>Close modal</button>}
      </Modal>
    </ModalButton>
  ))
  .addWithInfo('forced modal', () => (
    <ModalButton button="Open forced modal">
      <Modal forced>
        {({ onClose }) => (
          <div style={{ padding: 20 }}>
            You cannot close me by clicking outside or pressing ESC. The only
            way to close me is to use a custom close button.<br />
            <button onClick={onClose}>Close modal</button>
          </div>
        )}
      </Modal>
    </ModalButton>
  ))
  .addWithInfo('confirm dialog', () => (
    <React.Fragment>
      <ConfirmWrapper />
      <Button
        onClick={async () => {
          const validate = await confirm(
            <Confirm
              type="warning"
              icon={<Warning />}
              title="Do you really want to delete that thing?"
              message="If you delete it, there is no way back"
              validateButton="Delete"
            />,
          )
          if (validate) {
            action('validated')()
          } else {
            action('not validated')()
          }
        }}
      >
        Delete something
      </Button>
    </React.Fragment>
  ))
