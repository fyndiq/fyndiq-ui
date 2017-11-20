import React from 'react'
import PropTypes from 'prop-types'

const Bag = ({ className }) => (
  <svg className={className} viewBox="0 0 17 18">
    <path
      d="M.6 5.5h16v12H.5zM12 7V4c0-1.6-1.6-3-3.5-3C6.5 1 5 2.4 5 4v3"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)

Bag.propTypes = {
  className: PropTypes.string,
}

Bag.defaultProps = {
  className: '',
}

export default Bag
