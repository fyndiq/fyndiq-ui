import React from 'react'
import PropTypes from 'prop-types'
import colors from 'fyndiq-styles-colors'

const Pencil = ({ className }) => (
  <svg className={className} viewBox="0 0 14 14">
    <defs>
      <path id="a" d="M9.54.82h2.82v2.82H9.54V.82z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        fill={colors.black}
        d="M1 12.28v.9h1.8l-.9-.9-.9-.9M1 11.37l1.8 1.8.45-.43-1.8-1.8M11.13 1.06l-.6.6 2 1.98.6-.58c.3-.32.3-.85 0-1.17l-.84-.84c-.33-.32-.85-.32-1.17 0"
      />
      <path
        stroke={colors.black}
        d="M10.48 2.46L1.43 11.5M11.7 3.7l-9.04 9.04"
      />
    </g>
  </svg>
)

Pencil.propTypes = {
  className: PropTypes.string,
}

Pencil.defaultProps = {
  className: '',
}

export default Pencil
