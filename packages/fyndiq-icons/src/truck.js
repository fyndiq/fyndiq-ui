import React from 'react'
import PropTypes from 'prop-types'
import colors from 'fyndiq-styles-colors'

import SvgWrapper from './svg-wrapper'

const Truck = ({ className, color }) => (
  <SvgWrapper className={className} viewBox="0 0 19 14">
    <path
      stroke={color}
      fill="none"
      d="m 6,11.5 h 4.5 v -11 h -10 v 11 H 2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      stroke={color}
      fill="none"
      d="m 11,2.5 h 3.8 c 0.2,0 0.4,0.12 0.5,0.3 l 2.05,3.66 c 0.1,0.18 0.15,0.4 0.15,0.6 v 3.85 c 0,0.34 -0.26,0.6 -0.6,0.6 h -0.900025 m -3.99995,0 L 10.5,11.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path fill={color} stroke="none" d="M12.5 4.03V7h3.25l-1.47-2.97z" />
    <path
      fill="none"
      stroke={color}
      d="M16 11.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgWrapper>
)

Truck.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
}

Truck.defaultProps = {
  className: '',
  color: undefined,
}

export default Truck
