import React from 'react'
import PropTypes from 'prop-types'

import styles from '../product.css'

const ProductTags = ({ tags }) =>
  tags.length && (
    <div className={styles.tagsWrapper}>
      {tags.map(tag => <span className={styles.tag}>{tag}</span>)}
    </div>
  )

ProductTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
}

ProductTags.defaultProps = {
  tags: [],
}

export default ProductTags
