import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import styles from '../sidebar.css'

const Sidebar = ({ items }) => (
  <div className={styles.wrapper}>
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item.to}>
          <NavLink
            to={item.to}
            activeClassName={styles.activeLink}
            className={styles.link}
          >
            {React.cloneElement(item.icon, {
              className: styles.icon,
            })}
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
)

Sidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.node,
      to: PropTypes.string,
      icon: PropTypes.element,
    }),
  ),
}

Sidebar.defaultProps = {
  items: [],
}

export default Sidebar
