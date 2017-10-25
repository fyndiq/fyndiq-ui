import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.css'

const Price = ({ children, emphasize }) => (
  <span
    className={`
      ${styles.price}
      ${emphasize && styles.emphasize}
    `}
  >
    {children}
  </span>
)

Price.propTypes = {
  children: PropTypes.node.isRequired,
  emphasize: PropTypes.bool,
}

Price.defaultProps = {
  emphasize: true,
}


export default Price
