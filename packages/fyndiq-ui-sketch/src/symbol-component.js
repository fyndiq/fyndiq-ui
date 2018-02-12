import React from 'react'
import PropTypes from 'prop-types'

const SymbolComponent = ({ symbol, name }) => (
  <div style={{ margin: 10 }} data-sketchsymbol={name}>
    {symbol}
  </div>
)

SymbolComponent.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.node,
}

SymbolComponent.defaultProps = {
  symbol: null,
}

export default SymbolComponent
