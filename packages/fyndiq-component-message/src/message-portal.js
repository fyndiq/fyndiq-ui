import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// This component creates a Portal helper
// for the Message Component. It is not intended
// to be used directly
class MessagePortal extends React.Component {
  static propTypes = {
    portalId: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: null,
    portalId: 'fyndiq-message-portal',
  }

  componentWillMount() {
    // Create portal element if it doesn't exist
    if (!document.getElementById(this.props.portalId)) {
      const portalDiv = document.createElement('div')
      portalDiv.id = this.props.portalId
      document.body.appendChild(portalDiv)
    }
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById(this.props.portalId),
    )
  }
}

export default MessagePortal
