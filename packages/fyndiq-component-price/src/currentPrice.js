import React from 'react'
import styles from '../styles.css'

const CurrentPrice = ({ children }) => (
  <span className={styles.currentPrice}>
    {children}
  </span>
)

export default CurrentPrice
