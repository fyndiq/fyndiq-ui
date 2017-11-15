import React from 'react'
import { shallow, mount } from 'enzyme'

import Invisible from './invisible'

describe('fyndiq-component-input Invisible', () => {
  it('should have the proper structure', () => {
    expect(shallow(<Invisible />)).toMatchSnapshot()
  })

  it('should have dirty class if the input is changed', () => {
    const component = shallow(<Invisible />)
    component
      .find('input')
      .simulate('change', { target: { value: 'newValue' } })

    expect(component.hasClass('invisibleWrapperDirty')).toBe(true)
  })

  it('should reset its value when pressing ESC key', () => {
    const component = mount(<Invisible value="test" />)

    // Change input field
    component
      .find('input')
      .simulate('change', { target: { value: 'newValue' } })

    // ESC key
    component.find('input').simulate('keydown', { keyCode: 27 })

    expect(component.find('input').prop('value')).toBe('test')
  })

  it('should update its value when the prop value changes', () => {
    const component = mount(<Invisible value="test" />)
    component.setProps({ value: 'newValue' })
    expect(component.find('input').prop('value')).toBe('newValue')
  })

  it('should call onChange', () => {
    const spy = jest.fn()
    const component = mount(<Invisible value="test" onChange={spy} />)
    component
      .find('input')
      .simulate('change', { target: { value: 'newValue' } })

    component.simulate('submit', { preventDefault: jest.fn() })
    expect(spy).toHaveBeenCalledWith('newValue')
  })
})
