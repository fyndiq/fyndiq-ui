import React from 'react'
import { shallow } from 'enzyme'

import Price from './price'

describe('Product Price', () => {
  it('should have a default structure', () => {
    expect(shallow(<Price>123kr</Price>)).toMatchSnapshot()
  })

  it('should have an oldPrice prop', () => {
    expect(
      shallow(<Price oldPrice="234kr">123kr</Price>)
        .find('.oldPrice')
        .exists(),
    ).toBe(true)
  })

  it('should have an emphasize prop', () => {
    expect(
      shallow(<Price emphasize={false}>123kr</Price>).hasClass('emphasize'),
    ).toBe(false)
  })

  it('should not render anything if the price is not specified', () => {
    expect(shallow(<Price oldPrice="234kr" />).isEmptyRender()).toBe(true)
  })
})
