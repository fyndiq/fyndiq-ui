import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from 'fyndiq-component-button'
import Modal, { ModalButton } from 'fyndiq-component-modal'

import './component-modal.css'

storiesOf('Modal', module)
  .addWithInfo('default', () => (
    <ModalButton button="Open Modal">Content</ModalButton>
  ))
  .addWithInfo('custom modal styles', () => (
    <ModalButton button="Open Modal">
      <Modal
        overlayClassName="test-overlay--red"
        wrapperClassName="test-wrapper--black"
      >
        Content with black background on a red transparent overlay
      </Modal>
    </ModalButton>
  ))
  .addWithInfo('custom ModalButton', () => (
    <ModalButton button={<Button type="primary">Open Modal</Button>}>
      Content
    </ModalButton>
  ))
