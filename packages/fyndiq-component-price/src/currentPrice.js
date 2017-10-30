import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.css'

const CurrentPrice = ({ children }) => (
  <span className={styles.currentPrice}>{children}</span>
)

CurrentPrice.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
}

export default CurrentPrice
