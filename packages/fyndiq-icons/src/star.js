import React from 'react'
import PropTypes from 'prop-types'

import SvgWrapper from './svg-wrapper'

const Star = ({ className, color, colorEmpty, full }) => {
  const starId = `${Math.random()}`
  return (
    <SvgWrapper className={className} viewBox="-5 -5 60 60">
      <defs>
        <clipPath id={starId}>
          <rect x="-5" y="-5" width={60 * full} height="60" />
        </clipPath>
      </defs>
      <path
        fill={colorEmpty}
        stroke="none"
        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
      />
      <path
        fill={color}
        stroke="none"
        clipPath={`url(#${starId})`}
        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
      />
    </SvgWrapper>
  )
}

Star.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  colorEmpty: PropTypes.string,
  full: PropTypes.number,
}

Star.defaultProps = {
  className: '',
  color: undefined,
  colorEmpty: 'none',
  full: 1,
}

export default Star
