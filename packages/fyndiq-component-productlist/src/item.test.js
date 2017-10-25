import React from 'react'
import { shallow, mount } from 'enzyme'

import Stars from 'fyndiq-component-stars'

import ProductListItem from './item'

// Mock the date object
Date.now = jest.fn(() => 1487076708000) // 2017-02-14

const defaultProps = {
  title: 'title',
  price: 'price',
  imageUrl: 'imageUrl',
}

describe('fyndiq-component-productlist', () => {
  describe('ProductListItem', () => {
    test('should be displayed with minimal props', () => {
      expect(shallow(<ProductListItem {...defaultProps} />)).toMatchSnapshot()
    })

    test('should have a rating prop', () => {
      expect(shallow(<ProductListItem
        {...defaultProps}
        rating={4.5}
      />).find(Stars)).toMatchSnapshot()
    })

    test('should have a dealType prop', () => {
      expect(shallow(<ProductListItem
        {...defaultProps}
        dealType="weekly"
      />).find('.deal')).toMatchSnapshot()
    })

    test('should have a showYours prop', () => {
      expect(shallow(<ProductListItem
        {...defaultProps}
        showYours
      />).find('.yours')).toMatchSnapshot()
    })

    test('should have an open state', () => {
      expect(shallow(<ProductListItem
        {...defaultProps}
        uploadDate={new Date(2017, 1, 1)}
        open
      />)).toMatchSnapshot()
    })

    test('should have a category', () => {
      expect(shallow(<ProductListItem
        {...defaultProps}
        category="Category name"
        open
      />).find('.labelsWrapper')).toMatchSnapshot()
    })

    test('should have a brand', () => {
      expect(shallow(<ProductListItem
        {...defaultProps}
        brand="Brand name"
        open
      />).find('.labelsWrapper')).toMatchSnapshot()
    })

    test('should have additionnal data', () => {
      const additionnalData = [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
      ]
      expect(shallow(<ProductListItem
        {...defaultProps}
        additionnalData={additionnalData}
        open
      />).find('.labelsWrapper')).toMatchSnapshot()
    })

    test('should call onClick when interactive', () => {
      const spy = jest.fn()
      const wrapper = shallow(<ProductListItem
        {...defaultProps}
        interactive
        onClick={spy}
      />)

      wrapper.find('.wrapper').simulate('click')
      expect(spy).toHaveBeenCalled()
    })

    test('should call blur when clicked and open', () => {
      const wrapper = mount(<ProductListItem
        {...defaultProps}
        interactive
        open
      />)

      const spy = jest.fn()
      wrapper.getDOMNode().blur = spy

      wrapper.find('.wrapper').simulate('click')
      expect(spy).toHaveBeenCalled()
    })

    test('should not propagate click event when clicking on the shop link', () => {
      const spy = jest.fn()
      const wrapper = mount(<ProductListItem
        {...defaultProps}
        interactive
        onClick={spy}
      />)

      wrapper.find('.shopLink').simulate('click')
      expect(spy).not.toHaveBeenCalled()
    })

    test('should not call onClick when not interactive', () => {
      const spy = jest.fn()
      const wrapper = shallow(<ProductListItem
        {...defaultProps}
        onClick={spy}
      />)

      wrapper.find('.wrapper').simulate('click')

      expect(spy).not.toHaveBeenCalled()
    })
  })
})
