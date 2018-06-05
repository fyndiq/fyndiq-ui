import React from 'react'

import SymbolComponent from './symbol-component'

export default ({ symbols }) =>
  Object.keys(symbols).map(name => (
    <SymbolComponent symbol={symbols[name]} name={name} key={name} />
  ))
