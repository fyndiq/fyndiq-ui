import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.less'
import { loadState, saveState } from './localStorage'

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
    componentKey: PropTypes.string,
    stopShowingWhenClosed: PropTypes.number,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    children: '',
    type: 'info',
    unclosable: false,
    stopShowingWhenClosed: undefined,
    componentKey: '',
    onClose: noop => noop,
  }

  constructor(props) {
    super(props)
    this.state = {
      displayed: true,
      removed: false,
      count: loadState(this.props.componentKey),
    }
  }

  close() {
    const height = this.nodeWrapper.clientHeight
    saveState(this.props.componentKey, this.state.count + 1) // counter for stopShowingWhenClosed

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

    if (this.state.count < this.props.stopShowingWhenClosed || this.props.stopShowingWhenClosed === undefined) {
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
    return null
  }
}
