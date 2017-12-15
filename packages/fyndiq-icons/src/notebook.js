import React from 'react'
import PropTypes from 'prop-types'

import SvgWrapper from './svg-wrapper'

const Notebook = ({ className, color }) => (
  <SvgWrapper className={className} viewBox="0 0 18 23">
    <path
      fill="none"
      stroke={color}
      d="M16 22.32H3a1.52 1.52 0 0 1-1.5-1.52V2.85c0-.84.68-1.53 1.5-1.53h13c.82 0 1.5.7 1.5 1.53V20.8c0 .84-.68 1.52-1.5 1.52zM5.4 7.5h8.74m-7.18 3h5.6M.5 5.5h2.63M.5 8.5h2.63m-2.63 3h2.63m-2.63 3h2.63m-2.63 3h2.63"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgWrapper>
)

Notebook.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
}

Notebook.defaultProps = {
  className: '',
  color: undefined,
}

export default Notebook
