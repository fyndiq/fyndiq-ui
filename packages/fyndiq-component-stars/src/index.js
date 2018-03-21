import React from 'react'
import PropTypes from 'prop-types'

import { Star } from 'fyndiq-icons'
import colors from 'fyndiq-styles-colors'

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
    rating: 1,
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
      const interactiveProps = interactive
        ? {
            onClick: () => onChange(id),
            onMouseOver: () => this.changeHoverRating(id),
            onFocus: () => this.changeHoverRating(id),
            onKeyUp: e => {
              if (e.keyCode === 13) {
                onChange(id)
              }
            },
            role: 'button',
            tabIndex: 0,
          }
        : {}

      starNodes.push(
        <span
          key={id}
          className={styles.starInteractiveWrapper}
          {...interactiveProps}
        >
          <Star
            colorEmpty={colors.border}
            color={colors.orange}
            full={Math.min(1, Math.max(0, 1 + liveRating - id))}
          />
        </span>,
      )
    }

    return (
      <div className={styles.wrapper}>
        <div
          className={`
            ${styles.stars}
            ${interactive ? styles.interactive : ''}
            ${size ? styles[`size-${size}`] : ''}
          `}
          onMouseLeave={() => this.onMouseLeave()}
          data-test="STARS"
        >
          {starNodes}
        </div>
        {reviews ? (
          <span className={styles.reviews}>({reviews} reviews)</span>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default Stars
