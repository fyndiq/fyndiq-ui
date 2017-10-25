import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.css'

const Price = ({ children }) => (
  <span className={styles.price}>
    {children}
  </span>
)

Price.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Price
