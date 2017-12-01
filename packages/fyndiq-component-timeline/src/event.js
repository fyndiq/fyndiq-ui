import React from 'react'
import PropTypes from 'prop-types'

import styles from '../timeline.css'

const Event = ({ icon, children }) => (
  <div className={styles.event}>
    <div className={styles.icon}>
      {React.cloneElement(icon, {
        color: null,
      })}
    </div>
    <span>{children}</span>
  </div>
)

Event.propTypes = {
  icon: PropTypes.element,
  children: PropTypes.node,
}

Event.defaultProps = {
  icon: null,
  children: null,
}

export default Event
