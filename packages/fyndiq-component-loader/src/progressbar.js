import React from 'react'
import PropTypes from 'prop-types'

import styles from '../progressbar.css'

const ProgressBar = ({
  progress,
  color,
  backgroundColor,
  className,
  progressClassName,
}) => (
  <div
    className={`
      ${styles.progressbar}
      ${className}
    `}
    style={{ backgroundColor }}
  >
    <div
      className={`
        ${styles.progress}
        ${progressClassName}
        ${progress == null && styles.progressIndeterminate}
      `}
      style={{
        backgroundColor: color,
        width: progress != null ? `${progress}%` : undefined,
      }}
    />
  </div>
)

ProgressBar.propTypes = {
  progress: PropTypes.number,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  progressClassName: PropTypes.string,
}

ProgressBar.defaultProps = {
  progress: 0,
  color: null,
  backgroundColor: null,
  className: '',
  progressClassName: '',
}

export default ProgressBar
