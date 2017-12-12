import React from 'react'
import { storiesOf } from '@storybook/react'
import Button, { Wrapper as ButtonWrapper } from 'fyndiq-component-button'
import { Message, Wrapper, addMessage } from 'fyndiq-component-message'
import { Error, Truck, Warning, Checkmark } from 'fyndiq-icons'

storiesOf('Message', module)
  .addWithInfo('default', () => <Message>Content</Message>)
  .addWithInfo('color themes', () => (
    <div>
      <div>
        <Message icon={<Truck />}>Type info</Message>
      </div>
      <div>
        <Message icon={<Checkmark />} type="confirm">
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
  .addWithInfo('addMessage utility', () => (
    <React.Fragment>
      <Wrapper />
      <Button
        onClick={() =>
          addMessage(
            <Message icon={<Checkmark />} type="confirm">
              The message has been successfully shown
            </Message>,
          )
        }
      >
        Show message
      </Button>
    </React.Fragment>
  ))
  .addWithInfo('custom timeout', () => (
    <React.Fragment>
      <Wrapper />
      <ButtonWrapper>
        <Button
          onClick={() =>
            addMessage(
              <Message icon={<Warning />} type="warn" timeout={1000}>
                I don&apos;t stay very long
              </Message>,
            )
          }
        >
          Show 1s message
        </Button>
        <Button
          onClick={() =>
            addMessage(
              <Message timeout={10000}>You OK if I stay a bit long?</Message>,
            )
          }
        >
          Show 10s message
        </Button>
      </ButtonWrapper>
    </React.Fragment>
  ))
