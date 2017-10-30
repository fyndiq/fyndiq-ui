import React from 'react'
import { storiesOf } from '@storybook/react'
import Modal from 'fyndiq-component-modal'

storiesOf('Modal', module).addWithInfo('default', () => (
  <Modal open>Hello</Modal>
))
