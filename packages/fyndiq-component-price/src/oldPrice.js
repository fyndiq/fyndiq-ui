import React from 'react'
import styles from '../styles.css'

const OldPrice = ({ children }) => (
  <span className={styles.oldPrice}>
    {children}
  </span>
)

export default OldPrice
