import React from 'react'
import Star from 'fyndiq-icon-star'
import styles from '../styles.less'

class Stars extends React.Component {
  static propTypes = {
    rating: React.PropTypes.number,
    onClick: React.PropTypes.func,
    interactive: React.PropTypes.bool,
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
    const { onClick, rating } = this.props
    const starNodes = []

    // Overwrite rating if there's a current hoverRating
    let liveRating = this.state.hoverRating || rating

    for (let id = 1; id <= 5; id++) {
      starNodes.push(
        <Star
          key={id}
          rating={id}
          active={id <= liveRating}
          onClick={() => onClick(id)}
          onHover={() => this.changeHoverRating(id)}
        />
      )
    }

    return (
      <div>
        <div
          className={styles.stars}
          onMouseLeave={() => this.onMouseLeave()}
          data-test="STARS"
        >
          {starNodes}
        </div>
      </div>
    )
  }
}

export default Stars
