import React from 'react'
import PropTypes from 'prop-types'

import styles from '../article.css'

const ArticleDescription = ({ children }) => (
  <div className={styles.description}>{children}</div>
)

ArticleDescription.propTypes = {
  children: PropTypes.node,
}

ArticleDescription.defaultProps = {
  children: '',
}

export default ArticleDescription
