import React from 'react'
import SvgWrapper from './svg-wrapper'

const ShopAlt = ({ className, color }) => (
  <SvgWrapper className={className} viewBox="0 0 26 26">
    <path
      d="M24.34 11.7v13.04H1.68V11.76m11.93 9.49h7.45v-5.53h-7.45zm-8.56 3.48h5.46v-9H5.05zM20.4 3.77v6.05c0 1.12 1.1 2.03 2.47 2.03s2.45-.9 2.45-2.03V3.77H.72v6.05c0 1.12 1.1 2.03 2.46 2.03 1.36 0 2.46-.9 2.46-2.03m19.68-6.2V1.2H.72v2.43m19.68 6.2c0 1.12-1.1 2.03-2.46 2.03-1.36 0-2.46-.9-2.46-2.03V3.77m0 6.05c0 1.12-1.1 2.03-2.46 2.03-1.36 0-2.46-.9-2.46-2.03V3.77m0 6.05c0 1.12-1.1 2.03-2.46 2.03s-2.46-.9-2.46-2.03V3.77"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgWrapper>
)

ShopAlt.propTypes = SvgWrapper.propTypes
ShopAlt.defaultProps = SvgWrapper.defaultProps

export default ShopAlt
