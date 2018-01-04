import React from 'react'
import PropTypes from 'prop-types'

import styles from '../article.css'

const ArticleTags = ({ tags }) =>
  tags.length && (
    <div className={styles.tagsWrapper}>
      {tags.map(tag => (
        <span key={tag} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
  )

ArticleTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
}

ArticleTags.defaultProps = {
  tags: [],
}

export default ArticleTags
