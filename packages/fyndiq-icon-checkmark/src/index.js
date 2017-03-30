import React from 'react'
import colors from 'fyndiq-styles-colors'

const Checkmark = ({ height, width, className, color }) => (
  <svg
    viewBox="0 0 50 50"
    height={height || 15}
    width={width || 15}
    className={className || ''}
    fill={color || colors.lightgrey}
  >
    <path d="M16.8 42c-.4 0-1-.2-1.2-.5l-14-14.2c-.8-.7-.8-1.8 0-2.5.6-.7 1.7-.7 2.4 0l12.8 13 29-29c.7-.7 1.8-.7 2.5 0s.7 1.8 0 2.5L18 41.5c-.2.3-.7.5-1.2.5z" />
  </svg>
)

export default Checkmark
