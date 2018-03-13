import React from 'react'
import SvgWrapper from './svg-wrapper'

const Cart = ({ className, color }) => (
  <SvgWrapper className={className} viewBox="0 0 25 22">
    <path
      d="M11 .7a.9.9 0 0 0-.6.3L5.2 7.5a.9.9 0 0 0 .2 1.2.9.9 0 0 0 .5.2.9.9 0 0 0 .7-.4l5.2-6.4.2-.6a.9.9 0 0 0-1-.8zm2.6 0a.9.9 0 0 0-.4.2A.9.9 0 0 0 13 2l5.2 6.4a.9.9 0 0 0 .7.4.9.9 0 0 0 .5-.2.9.9 0 0 0 .2-1.2L14.4 1a.9.9 0 0 0-.8-.3zM.7 6.7a.4.4 0 0 0-.4.4v1.7c0 1.2 1 2.2 2.1 2.2h20a2.2 2.2 0 0 0 2-2.1V7a.4.4 0 0 0-.3-.4h-4l.1.2A1.7 1.7 0 0 1 19 9.7a1.7 1.7 0 0 1-1.4-.7l-1.9-2.3H9.2L7.2 9a1.7 1.7 0 0 1-1.3.7 1.7 1.7 0 0 1-1.7-1.5A1.7 1.7 0 0 1 4.5 7l.2-.3h-4zm.7 5.4l1.5 7.6c0 .9.8 1.6 1.7 1.6h15.6c.8 0 1.6-.7 1.7-1.6l1.5-7.6a3.5 3.5 0 0 1-1 .2h-20a3.5 3.5 0 0 1-1-.2z"
      fill={color}
      fillRule="evenodd"
      stroke="none"
    />
  </SvgWrapper>
)

Cart.propTypes = SvgWrapper.propTypes
Cart.defaultProps = SvgWrapper.defaultProps

export default Cart
