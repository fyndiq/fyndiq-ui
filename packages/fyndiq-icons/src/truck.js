import React from 'react'
import PropTypes from 'prop-types'
import colors from 'fyndiq-styles-colors'

const Truck = ({ className, color }) => (
  <svg className={className} viewBox="0 0 19 14">
    <path
      stroke={color}
      fill="none"
      d="M.5 11.5h10V.5H.5z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      stroke={color}
      fill="none"
      d="M11 2.5h3.8c.2 0 .4.12.5.3l2.05 3.66c.1.18.15.4.15.6v3.85c0 .34-.26.6-.6.6H5.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path fill={color} d="M12.5 4.03V7h3.25l-1.47-2.97z" />
    <path
      fill="#FFF"
      stroke={color}
      d="M16 11.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

Truck.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
}

Truck.defaultProps = {
  className: '',
  color: colors.black,
}

export default Truck
