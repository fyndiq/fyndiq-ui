import React from 'react'
import styles from '../styles.less'

const CurrentPrice =  ({ children }) => (
  <span className={styles.currentPrice}>
    {children}
  </span>
)

export default CurrentPrice
