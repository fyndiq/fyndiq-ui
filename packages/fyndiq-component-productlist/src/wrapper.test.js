import React from 'react'
import { shallow } from 'enzyme'

import ProductListItem, { Wrapper } from './'

const ProductList = [
  <ProductListItem key={1} title="title1" price="price1" imageUrl="imageUrl1" />,
  <ProductListItem key={2} title="title2" price="price2" imageUrl="imageUrl2" />,
  <ProductListItem key={3} title="title3" price="price3" imageUrl="imageUrl3" />,
]

describe('fyndiq-component-productlist', () => {
  describe('Wrapper', () => {
    test('should display ProductListItem', () => {
      expect(shallow(
        <Wrapper>{ProductList}</Wrapper>
      )).toMatchSnapshot()
    })

    test('should open the product clicked on', () => {
      const Component = shallow(<Wrapper>{ProductList}</Wrapper>)
      Component.find(ProductListItem).at(1).simulate('click')
      expect(Component.find(ProductListItem).at(1).prop('open')).toBeTruthy()
    })

    test('should close the previously opened products', () => {
      const Component = shallow(<Wrapper>{ProductList}</Wrapper>)
      // Open the first product
      Component.find(ProductListItem).at(1).simulate('click')
      // Open the second product
      Component.find(ProductListItem).at(2).simulate('click')
      expect(Component.find(ProductListItem).at(1).prop('open')).toBeFalsy()
    })

    test('should not close the previously opened product when openMultiples', () => {
      const Component = shallow(<Wrapper openMultiples>{ProductList}</Wrapper>)
      // Open the first product
      Component.find(ProductListItem).at(1).simulate('click')
      // Open the second product
      Component.find(ProductListItem).at(2).simulate('click')
      expect(Component.find(ProductListItem).at(1).prop('open')).toBeTruthy()
    })

    test('should close only one product if clicked again on', () => {
      const Component = shallow(<Wrapper openMultiples>{ProductList}</Wrapper>)
      // Open the first product
      Component.find(ProductListItem).at(1).simulate('click')
      // Open the second product
      Component.find(ProductListItem).at(2).simulate('click')
      // Close it
      Component.find(ProductListItem).at(2).simulate('click')
      expect(Component.find(ProductListItem).at(2).prop('open')).toBeFalsy()
      expect(Component.find(ProductListItem).at(1).prop('open')).toBeTruthy()
    })

    test('should not overwrite onClick of a ProductListItem', () => {
      const spy = jest.fn()
      const products = [
        ...ProductList,
        <ProductListItem
          key={1}
          title="title1"
          price="price1"
          imageUrl="imageUrl1"
          onClick={spy}
        />,
      ]

      const Component = shallow(<Wrapper>{products}</Wrapper>)
      Component.find(ProductListItem).at(3).simulate('click')
      expect(spy).toHaveBeenCalled()
    })
  })
})
