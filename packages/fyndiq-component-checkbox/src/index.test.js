import React from 'react'
import { shallow, mount } from 'enzyme'

import Checkbox from './'

describe('fyndiq-component-checkbox', () => {
  test('should be invoquable without parameters', () => {
    const component = shallow(<Checkbox />)
    expect(component).toMatchSnapshot()
  })

  test('should have prop checked', () => {
    const component = shallow(<Checkbox checked />)
    expect(component).toMatchSnapshot()
  })

  test('should have prop disabled', () => {
    const component = shallow(<Checkbox disabled />)
    expect(component).toMatchSnapshot()
  })

  test('should have prop color', () => {
    const component = shallow(<Checkbox checked color="red" />)
    expect(component).toMatchSnapshot()
  })

  test('should have prop onToggle', () => {
    const component = shallow(<Checkbox />)
    expect(component).toMatchSnapshot()
  })

  test('should call onToggle when clicked on', () => {
    const toggleSpy = jest.fn()
    const component = shallow(<Checkbox onToggle={toggleSpy} />)
    component.find('input').simulate('change', {
      target: { checked: true },
    })

    expect(toggleSpy.mock.calls).toHaveLength(1)
    expect(toggleSpy.mock.calls[0][0]).toBe(true)

    component.find('input').simulate('change', {
      target: { checked: false },
    })
    expect(toggleSpy.mock.calls[1][0]).toBe(false)
  })

  test('should update its state when clicked on', () => {
    const component = shallow(<Checkbox />)
    component.find('input').simulate('change', {
      target: { checked: true },
    })
    expect(component).toMatchSnapshot()

    component.find('input').simulate('change', {
      target: { checked: false },
    })
    expect(component).toMatchSnapshot()
  })

  test('should be programatically checkable', () => {
    const component = mount(<Checkbox />)
    component.setProps({ checked: true })
    expect(component).toMatchSnapshot()
  })

  test('should have a frame mode', () => {
    const component = shallow(<Checkbox frame />)
    // Shouldn't render the Checkmark icon
    expect(component.find('Checkmark').exists()).toBe(false)
  })
})
