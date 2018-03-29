import React from 'react'
import PropTypes from 'prop-types'

class Img extends React.Component {
  static propTypes = {
    src: PropTypes.string,
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  }

  static defaultProps = {
    src: '',
    style: {},
  }

  constructor(props) {
    super(props)

    this.state = { visible: true }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.src) {
      // Prevent flickering of the image
      this.timeout = setTimeout(() => {
        this.setState({
          visible: false,
        })
      }, 10)

      const prefetchImage = new Image()
      prefetchImage.onload = () => {
        clearTimeout(this.timeout)
        this.setState({ visible: true })
      }
      prefetchImage.src = nextProps.src
    }
  }

  componentWillUnmount() {
    // If the image never loads, cancel the timeout
    clearTimeout(this.timeout)
  }

  render() {
    const { style } = this.props
    const { visible } = this.state

    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        {...this.props}
        style={{
          ...style,
          opacity: visible ? 1 : 0,
          transitionDuration: visible ? '0.3s' : '0.05s',
          transitionProperty: 'opacity',
        }}
      />
    )
  }
}

export default Img
