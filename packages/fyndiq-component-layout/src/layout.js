import React from 'react'
import PropTypes from 'prop-types'

import styles from '../layout.css'

const Layout = ({ sidebar, children }) => (
  <div className={styles.layoutWrapper}>
    {sidebar}
    <div className={styles.layoutPageWrapper}>{children}</div>
  </div>
)

Layout.propTypes = {
  sidebar: PropTypes.element,
  children: PropTypes.node,
}

Layout.defaultProps = {
  sidebar: null,
  children: null,
}

export default Layout
