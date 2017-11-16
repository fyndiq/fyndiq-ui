import React from 'react'
import { shallow, mount } from 'enzyme'

import Search from './search'

Math.random = jest.fn(() => 'RANDOM-ID')

describe('fyndiq-component-input SearchInput', () => {
  it('should have the proper structure', () => {
    expect(shallow(<Search />)).toMatchSnapshot()
  })

  it('should have a size prop', () => {
    expect(shallow(<Search size="s" />).hasClass('wrapper--size-s')).toBe(true)
  })

  it('should call onSearch', () => {
    const spy = jest.fn()
    const component = shallow(<Search onSearch={spy} />)
    component.find('Input').simulate('change', 'newValue')
    component.find('form').simulate('submit', { preventDefault: jest.fn() })

    expect(spy).toHaveBeenCalledWith('newValue')
  })

  it('should empty the search field if emptyAfterSearch is true', () => {
    const component = mount(<Search emptyAfterSearch />)
    component.find('Input').simulate('change', 'newValue')
    component.find('form').simulate('submit', { preventDefault: jest.fn() })

    expect(component.find('Input').prop('value')).toBe('')
  })

  it('should blur the input when pressing ESC', () => {
    const spy = jest.fn()
    const component = mount(<Search emptyAfterSearch />)
    component.getDOMNode().querySelector('input').blur = spy
    component.find('Input').simulate('keyup', { keyCode: 27 })
    expect(spy).toHaveBeenCalled()
  })

  it('should update its value if the props change', () => {
    const component = shallow(<Search value="test" />)
    component.setProps({ value: 'newValue' })
    expect(component.find('Input').prop('value')).toBe('newValue')
  })

  describe('collapsible prop', () => {
    it('should not be open by default', () => {
      expect(shallow(<Search collapsible />).hasClass('wrapperOpen')).toBe(
        false,
      )
    })

    it('should be open when focusing the input', () => {
      const component = shallow(<Search collapsible />)
      component.find('Input').simulate('focus')
      expect(component.hasClass('wrapperOpen')).toBe(true)
    })

    it('should be closed when bluring the input', () => {
      const component = shallow(<Search collapsible />)
      component.find('Input').simulate('focus')
      component.find('Input').simulate('blur')
      expect(component.hasClass('wrapperOpen')).toBe(false)
    })

    it('should always be open if not collapsible', () => {
      const component = shallow(<Search />)
      expect(component.hasClass('wrapperOpen')).toBe(true)

      component.find('Input').simulate('focus')
      expect(component.hasClass('wrapperOpen')).toBe(true)

      component.find('Input').simulate('blur')
      expect(component.hasClass('wrapperOpen')).toBe(true)
    })
  })
})
