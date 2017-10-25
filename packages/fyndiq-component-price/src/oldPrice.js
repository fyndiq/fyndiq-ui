import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.css'

const OldPrice = ({ children }) => (
  <span className={styles.oldPrice}>
    {children}
  </span>
)

OldPrice.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
}


export default OldPrice
