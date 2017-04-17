import React from 'react'
import styles from '../styles.less'

export default class Alert extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    type: React.PropTypes.oneOf([
      'info',
      'good',
      'warning',
      'bad',
    ]),
    onClose: React.PropTypes.func,
  }

  static defaultProps = {
    children: '',
    type: 'info',
    onClose: noop => noop,
  }

  constructor(props) {
    super(props)
    this.state = {
      displayed: true,
    }
  }

  handleCloseClick() {
    this.setState({
      displayed: false,
    })

    if (this.props.onClose) {
      this.props.onClose()
    }
  }

  render() {
    const { children, type } = this.props

    return (
      <div
        className={`
          ${styles.alert}
          ${styles['type-' + type]}
          ${this.state.displayed ? '' : styles.hidden}
        `}
      >
        <span className={styles.text}>{children}</span>
        <div
          className={styles.close}
          onClick={() => this.handleCloseClick()}
        >
          &times;
        </div>
      </div>
    )
  }
}
