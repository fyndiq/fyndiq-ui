import React from 'react'
import PropTypes from 'prop-types'

import SvgWrapper from './svg-wrapper'

const d =
  'M9.46 1.46c.66-2 1.67-1.96 2.25.04l1.51 5.2 5.03.08c2.1.04 2.42 1.08.73 2.32l-4.17 3.05 1.51 5.2c.59 2-.28 2.58-1.92 1.28l-4.06-3.2-4.16 3.06c-1.7 1.24-2.53.63-1.88-1.35L5.99 12 1.93 8.8C.28 7.5.65 6.47 2.74 6.5l5.03.1 1.69-5.14z'

const Star = ({ className, color, colorEmpty, full }) => {
  const starId = `star-${full}`
  return (
    <SvgWrapper className={className} viewBox="0 0 20 20">
      <defs>
        <clipPath id={starId}>
          <rect x="0" y="0" width={20 * full} height="20" />
        </clipPath>
      </defs>
      <path fill={colorEmpty} stroke="none" d={d} />
      <path fill={color} stroke="none" clipPath={`url(#${starId})`} d={d} />
    </SvgWrapper>
  )
}

Star.propTypes = {
  ...SvgWrapper.propTypes,
  colorEmpty: PropTypes.string,
  full: PropTypes.number,
}

Star.defaultProps = {
  ...SvgWrapper.defaultProps,
  colorEmpty: 'none',
  full: 1,
}

export default Star
