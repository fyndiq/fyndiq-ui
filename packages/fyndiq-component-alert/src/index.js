import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.less'

export default class Alert extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf([
      'info',
      'good',
      'warning',
      'bad',
    ]),
    unclosable: PropTypes.bool,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    children: '',
    type: 'info',
    unclosable: false,
    onClose: noop => noop,
  }

  constructor(props) {
    super(props)
    this.state = {
      displayed: true,
      removed: false,
    }
  }

  close() {
    const height = this.nodeWrapper.clientHeight

    // Set the height on the wrapper node, to start the animation
    this.nodeWrapper.style.height = height + 'px'

    // Wait a tick before starting the animation
    setTimeout(() => this.setState({
      displayed: false,
    }), 10)

    // Once the animation is done, remove the div with display none
    // Keep this 200 in sync with the styles.less file
    setTimeout(() => this.setState({
      removed: true,
    }), 200)
  }

  handleCloseClick() {
    this.close()

    if (this.props.onClose) {
      this.props.onClose()
    }
  }

  render() {
    const { children, type, unclosable } = this.props

    return (
      <div
        className={`
          ${styles.alertWrapper}
          ${!this.state.displayed ? styles.hidden : ''}
          ${this.state.removed ? styles.removed : ''}
        `}
        ref={e => { this.nodeWrapper = e }}
      >
        <div
          className={`
            ${styles.alert}
            ${styles['type-' + type]}
          `}
        >
          <span className={styles.text}>{children}</span>
          {unclosable ? null : (
            <div
              className={styles.close}
              onClick={() => this.handleCloseClick()}
            >
              &times;
            </div>
          )}
        </div>
      </div>
    )
  }
}
