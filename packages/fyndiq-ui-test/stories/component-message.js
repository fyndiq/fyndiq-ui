import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from 'fyndiq-component-button'
import { Message, Wrapper, addMessage } from 'fyndiq-component-message'
import { Error, Truck, Warning } from 'fyndiq-icons'

storiesOf('Message', module)
  .addWithInfo('default', () => <Message>Content</Message>)
  .addWithInfo('color themes', () => (
    <div>
      <div>
        <Message icon={<Truck />}>Type info</Message>
      </div>
      <div>
        <Message icon={<Truck />} type="confirm">
          Type confirm
        </Message>
      </div>
      <div>
        <Message icon={<Warning />} type="warn">
          Type warn
        </Message>
      </div>
      <div>
        <Message icon={<Error />} type="error">
          Type error
        </Message>
      </div>
    </div>
  ))
  .addWithInfo('action', () => (
    <div>
      <Wrapper />
      <Button
        onClick={() =>
          addMessage(
            <Message icon={<Truck />} type="confirm">
              Type confirm {Math.random()}
            </Message>,
          )}
      >
        Show message
      </Button>
    </div>
  ))
