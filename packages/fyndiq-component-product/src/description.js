import React from 'react'
import PropTypes from 'prop-types'

import styles from '../product.css'

const ProductDescription = ({ children }) => (
  <div className={styles.description}>{children}</div>
)

ProductDescription.propTypes = {
  children: PropTypes.node,
}

ProductDescription.defaultProps = {
  children: '',
}

export default ProductDescription
