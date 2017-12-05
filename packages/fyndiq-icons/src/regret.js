import React from 'react'
import PropTypes from 'prop-types'

const Regret = ({ className, color }) => (
  <svg className={className} viewBox="0 0 21 20">
    <path
      stroke={color}
      fill="none"
      d="M12.62 7.7V4.14a3.65 3.65 0 1 0-7.3 0V7.7"
    />
    <path
      stroke={color}
      fill="none"
      d="M8.17 18.66H1a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h15.93a.5.5 0 0 1 .5.5v4.6"
    />
    <path
      stroke={color}
      fill="none"
      d="M6.3 14.36l6.35-4.58v3.05c1.4.04 7.16-.5 7.16 6.62-2.53-3.27-3.9-3.64-7.15-3.64v3.05z"
    />
  </svg>
)

Regret.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
}

Regret.defaultProps = {
  className: '',
  color: undefined,
}

export default Regret
