import React from 'react'
import PropTypes from 'prop-types'

import styles from '../timeline.css'

const Timeline = ({ children, type }) => (
  <div
    className={`
      ${styles.timeline}
      ${styles[`timeline_type_${type}`]}
    `}
  >
    {children}
  </div>
)

Timeline.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  type: PropTypes.oneOf(['white', 'black']),
}

Timeline.defaultProps = {
  children: null,
  type: 'white',
}

export default Timeline
