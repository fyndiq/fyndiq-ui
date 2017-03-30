import React from 'react'
import styles from '../styles.less'

const OldPrice = ({ children }) => (
  <span className={styles.oldPrice}>
    {children}
  </span>
)

export default OldPrice
