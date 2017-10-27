import React from 'react'
import PropTypes from 'prop-types'

const Magnifier = ({ className, size }) => (
  <svg className={className} height={size} width={size} viewBox="0 0 20 20">
    <path d="M12.819 12.819a6.923 6.923 0 0 1-9.791 0 6.923 6.923 0 1 1 9.791-9.791 6.925 6.925 0 0 1 0 9.79zM17.206 18.692l-4.14-4.14a1.051 1.051 0 0 1 1.487-1.486l4.139 4.14a1.05 1.05 0 1 1-1.486 1.486z" />
  </svg>
)

Magnifier.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
}

Magnifier.defaultProps = {
  className: '',
  size: undefined,
}

export default Magnifier
