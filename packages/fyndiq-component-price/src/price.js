import React from 'react'
import styles from '../styles.css'

const Price = ({ children }) => (
  <span className={styles.price}>
    {children}
  </span>
)

export default Price
