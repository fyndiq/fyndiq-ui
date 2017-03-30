import React from 'react'
import styles from '../styles.less'

const Star = ({ active, onClick, onHover }) => (
  <svg
    className={active ? styles.starActive : styles.star}
    onClick={() => onClick()}
    onMouseOver={() => onHover()}
    viewBox="-2 -1 54 50"
  >
    <path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
  </svg>
)

Star.propTypes = {
  active: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  onHover: React.PropTypes.func,
}

export default Star
