import React from 'react'
import PropTypes from 'prop-types'
import colors from 'fyndiq-styles-colors'

const FileIllustration = ({ className }) => (
  <svg className={className} viewBox="0 0 54 68">
    <g fillRule="evenodd">
      <path
        fill={colors.border}
        d="M50.55 17.39v44.66a2.48 2.48 0 0 1-2.49 2.48H5.88a2.48 2.48 0 0 1-2.49-2.48V4.98A2.48 2.48 0 0 1 5.88 2.5h29.78v9.92a4.97 4.97 0 0 0 4.96 4.97z"
      />
      <path
        fill={colors.black}
        d="M40.62 14.9h9.4L38.14 3v9.42a2.48 2.48 0 0 0 2.49 2.48m9.93 47.15V17.4h-9.93a4.97 4.97 0 0 1-4.96-4.97V2.5H5.88a2.48 2.48 0 0 0-2.49 2.48v57.07a2.48 2.48 0 0 0 2.49 2.48h42.18a2.48 2.48 0 0 0 2.49-2.48m2.47-47.15v47.15a4.97 4.97 0 0 1-4.96 4.97H5.88a4.97 4.97 0 0 1-4.96-4.97V4.98A4.97 4.97 0 0 1 5.88 0h32.26c.32 0 .64.14.87.37l13.65 13.65c.23.23.36.54.36.87"
      />
      <path
        fill={colors.white}
        d="M41.86 22.35H12.08a1.24 1.24 0 0 0-1.24 1.24V48.4c0 .69.55 1.24 1.24 1.24h29.78a1.24 1.24 0 0 0 1.24-1.24V23.6a1.24 1.24 0 0 0-1.24-1.24zM23.25 42.2h7.44v-2.48h-7.44zm0 4.96h7.44v-2.48h-7.44zm0-14.89h7.44V29.8h-7.44zm0-4.96h7.44v-2.48h-7.44zm0 9.93h7.44v-2.49h-7.44zm-9.93 0h7.44v-2.49h-7.44zm19.85 0h7.45v-2.49h-7.45zm0-4.97h7.45V29.8h-7.45zm-19.85 0h7.44V29.8h-7.44zm0 9.93h7.44v-2.48h-7.44zm19.85 0h7.45v-2.48h-7.45zm0-14.89h7.45v-2.48h-7.45zm-19.85 0h7.44v-2.48h-7.44zm0 19.85h7.44v-2.48h-7.44zm19.85 0h7.45v-2.48h-7.45z"
      />
    </g>
  </svg>
)

FileIllustration.propTypes = {
  className: PropTypes.string,
}

FileIllustration.defaultProps = {
  className: '',
}

export default FileIllustration
