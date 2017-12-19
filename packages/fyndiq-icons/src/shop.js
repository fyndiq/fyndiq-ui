import React from 'react'
import SvgWrapper from './svg-wrapper'

const Shop = ({ className, color }) => (
  <SvgWrapper className={className} viewBox="0 0 20 18">
    <path
      stroke={color}
      fill="none"
      d="M18.3 17V8.5M1.3 17V8.5m.22 7H17.8m-16.28-3H17.8"
      strokeLinecap="round"
    />
    <path
      stroke={color}
      fill="none"
      d="M8 7c0 .83-.82 1.5-1.8 1.5S4.4 7.83 4.4 7V2.5M11.6 7c0 .83-.82 1.5-1.8 1.5C8.8 8.5 8 7.83 8 7V2.5"
    />
    <path
      stroke={color}
      fill="none"
      d="M15.2 7c0 .83-.82 1.5-1.8 1.5-1 0-1.8-.67-1.8-1.5V2.5"
    />
    <path
      stroke={color}
      fill="none"
      d="M15.2 2.5V7c0 .83.8 1.5 1.8 1.5.98 0 1.8-.67 1.8-1.5V2.5H.8V7c0 .83.8 1.5 1.8 1.5.98 0 1.8-.67 1.8-1.5m14.4-4.5v-2H.8v2"
    />
  </SvgWrapper>
)

Shop.propTypes = SvgWrapper.propTypes
Shop.defaultProps = SvgWrapper.defaultProps

export default Shop
