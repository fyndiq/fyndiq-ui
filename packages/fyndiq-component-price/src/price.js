import React from 'react'
import styles from '../styles.less'

const Price = ({ children }) => (
  <span className={styles.price}>
    {children}
  </span>
)

export default Price
