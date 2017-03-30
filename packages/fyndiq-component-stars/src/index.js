import React from 'react'
import Star from 'fyndiq-icon-star'
import styles from '../styles.less'

class Stars extends React.Component {
  static propTypes = {
    rating: React.PropTypes.number,
    onChange: React.PropTypes.func,
    interactive: React.PropTypes.bool,
    size: React.PropTypes.string,
    reviews: React.PropTypes.number,
  }

  static defaultProps = {
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
    let liveRating = this.state.hoverRating || rating

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
            ${size ? styles[size]: ''}
          `}
          onMouseLeave={() => this.onMouseLeave()}
          data-test="STARS"
        >
          {starNodes}
        </div>
        {reviews ? <span className={styles.reviews}>
          ({reviews} reviews)
        </span> : '' }

    </div>
    )
  }
}

export default Stars
