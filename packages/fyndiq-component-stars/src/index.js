import React from 'react'
import PropTypes from 'prop-types'
import Star from 'fyndiq-icon-star'
import styles from '../styles.css'

class Stars extends React.Component {
  static propTypes = {
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    reviews: PropTypes.number,
    size: PropTypes.string,
    interactive: PropTypes.bool,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    rating: undefined,
    reviews: undefined,
    size: 'm',
    interactive: false,
    onChange: noop => noop,
  }

  constructor(props) {
    super(props)

    this.state = {
      hoverRating: undefined,
    }
  }

  onMouseLeave() {
    if (!this.props.interactive) return

    this.setState({ hoverRating: undefined })
  }

  changeHoverRating(newHoverRating) {
    if (!this.props.interactive) return

    this.setState({ hoverRating: newHoverRating })
  }

  render() {
    const { onChange, rating, interactive, size, reviews } = this.props
    const starNodes = []

    // Overwrite rating if there's a current hoverRating
    const liveRating = this.state.hoverRating || rating

    for (let id = 1; id <= 5; id++) {
      starNodes.push(
        <Star
          key={id}
          full={Math.min(1, Math.max(0, liveRating - id + 1))}
          onClick={() => onChange(id)}
          onHover={() => this.changeHoverRating(id)}
        />
      )
    }

    return (
      <div className={styles.wrapper}>
        <div
          className={`
            ${styles.stars}
            ${interactive ? styles.interactive : ''}
            ${size ? styles['size-' + size] : ''}
          `}
          onMouseLeave={() => this.onMouseLeave()}
          data-test="STARS"
        >
          {starNodes}
        </div>
        {reviews ? (
          <span className={styles.reviews}>
            ({reviews} reviews)
          </span>
        ) : '' }
      </div>
    )
  }
}

export default Stars
