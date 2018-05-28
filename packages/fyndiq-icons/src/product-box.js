import React from 'react'
import SvgWrapper from './svg-wrapper'

const ProductBox = ({ className, color }) => (
  <SvgWrapper className={className} viewBox="0 0 357.35 357.35">
    <path
      d="M178.68 133.24L22.53 61.06 178.68 0l156.14 61.06zM16.82 71.58l155.89 72.05v213.72L16.82 274.22zm323.71 202.64l-155.89 83.13V143.63l155.89-72.05z"
      fill={color}
      stroke="none"
    />
  </SvgWrapper>
)

ProductBox.propTypes = SvgWrapper.propTypes
ProductBox.defaultProps = SvgWrapper.defaultProps

export default ProductBox
