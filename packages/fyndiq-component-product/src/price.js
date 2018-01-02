import React from 'react'
import PropTypes from 'prop-types'
import styles from '../product-price.css'

const Price = ({ children, oldPrice, emphasize }) =>
  children && (
    <span
      className={`
        ${styles.price}
        ${emphasize && styles.emphasize}
      `}
    >
      <span className={styles.currentPrice}>{children}</span>
      <span className={styles.oldPrice}>{oldPrice}</span>
    </span>
  )

Price.propTypes = {
  children: PropTypes.string,
  oldPrice: PropTypes.string,
  emphasize: PropTypes.bool,
}

Price.defaultProps = {
  children: null,
  oldPrice: null,
  emphasize: true,
}

export default Price
