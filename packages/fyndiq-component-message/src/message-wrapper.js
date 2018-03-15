import React from 'react'

import MessagePortal from './message-portal'
import styles from '../message.css'

class MessageWrapper extends React.Component {
  // Keep only one instance of MessageWrapper
  static instance = null

  static addMessage(message) {
    if (MessageWrapper.instance == null) {
      throw new Error('MessageWrapper has no instance running')
    }

    MessageWrapper.instance.addMessage(message)
  }

  constructor(props) {
    super(props)

    this.state = { messages: [] }

    this.addMessage = this.addMessage.bind(this)
  }

  componentWillMount() {
    // Server-side rendering is not supported
    if (!global.document) {
      return
    }

    if (MessageWrapper.instance != null) {
      console.warn('MessageWrapper already had an instance')
    }

    MessageWrapper.instance = this
  }

  componentWillUnmount() {
    if (MessageWrapper.instance === this) {
      MessageWrapper.instance = null
    }
  }

  addMessage(message) {
    this.setState(state => ({
      messages: [
        ...state.messages,
        React.cloneElement(message, { id: Math.random() }),
      ],
    }))
  }

  removeMessage(message) {
    this.setState(state => {
      const index = state.messages.indexOf(message)

      return {
        ...state,
        messages: [
          ...state.messages.slice(0, index),
          ...state.messages.slice(index + 1),
        ],
      }
    })
  }

  render() {
    if (this.state.messages.length === 0) return null

    return (
      <MessagePortal>
        <div className={styles.wrapper}>
          {this.state.messages.map(message => (
            <div key={message.props.id}>
              {React.cloneElement(message, {
                onClose: () => this.removeMessage(message),
              })}
            </div>
          ))}
        </div>
      </MessagePortal>
    )
  }
}

export default MessageWrapper
