import React from 'react'
import PropTypes from 'prop-types'
import styles from '../star.css'

const Star = ({ full, onClick, onHover }) => {
  const starId = Math.random() + ''
  return (
    <svg
      className={styles.star}
      onClick={() => onClick()}
      onMouseOver={() => onHover()}
      viewBox="-5 -5 60 60"
    >
      <defs>
        <clipPath id={starId}>
          <rect x="-5" y="-5" width={60 * full} height="60" />
        </clipPath>
      </defs>
      <path
        className={styles.greystar}
        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
      />
      <path
        className={styles.yellowstar}
        clipPath={`url(#${starId})`}
        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
      />
    </svg>
  )
}

Star.propTypes = {
  full: PropTypes.number,
  onClick: PropTypes.func,
  onHover: PropTypes.func,
}

Star.defaultProps = {
  full: 1,
  onClick: noop => noop,
  onHover: noop => noop,
}

export default Star
