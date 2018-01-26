import React from 'react'
import PropTypes from 'prop-types'
import styles from '../article-price.css'

const Price = ({ children, oldPrice, emphasize, fixedHeight }) =>
  (children || fixedHeight) && (
    <span
      className={`
        ${styles.price}
        ${emphasize && styles.emphasize}
        ${fixedHeight && styles.fixedHeight}
      `}
    >
      <div className={styles.currentPrice}>{children} </div>
      <div className={styles.oldPrice}>{oldPrice} </div>
    </span>
  )

Price.propTypes = {
  children: PropTypes.string,
  oldPrice: PropTypes.string,
  emphasize: PropTypes.bool,
  fixedHeight: PropTypes.bool,
}

Price.defaultProps = {
  children: null,
  oldPrice: null,
  emphasize: true,
  fixedHeight: false,
}

export default Price
