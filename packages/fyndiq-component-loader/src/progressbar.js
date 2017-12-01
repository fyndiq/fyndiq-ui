import React from 'react'
import PropTypes from 'prop-types'

import colors from 'fyndiq-styles-colors'

import styles from '../progressbar.css'

const ProgressBar = ({ progress, color, backgroundColor }) => (
  <div className={styles.progressbar} style={{ backgroundColor }}>
    <div
      className={styles.progress}
      style={{ backgroundColor: color, width: `${progress}%` }}
    />
  </div>
)

ProgressBar.propTypes = {
  progress: PropTypes.number,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
}

ProgressBar.defaultProps = {
  progress: 0,
  color: colors.black,
  backgroundColor: colors.border,
}

export default ProgressBar
