import React from 'react'
import { shallow } from 'enzyme'

import Dropdown from './'

describe('fyndiq-component-dropdown', () => {
  test('should be displayed with minimum props', () => {
    expect(shallow(<Dropdown button="Button">Value</Dropdown>)).toMatchSnapshot()
  })

  test('should have a custom button', () => {
    expect(shallow(
      <Dropdown button={<div>Hello</div>}>
        Value
      </Dropdown>
    )).toMatchSnapshot()
  })

  test('should be opened when clicked on the button', () => {
    const component = shallow(<Dropdown button="button">Value</Dropdown>)
    component.find('Button').simulate('click')
    expect(component.find('.dropdownWrapper')).toMatchSnapshot()
  })

  test('should be opened when hovered, if in hoverMode', () => {
    jest.useFakeTimers()
    const component = shallow(<Dropdown button="button" hoverMode>Value</Dropdown>)
    component.simulate('mouseover')
    jest.runTimersToTime(200)
    expect(component.find('.dropdownWrapper')).toMatchSnapshot()
    component.simulate('mouseout')
    jest.runTimersToTime(100)
    expect(component.find('.dropdownWrapper')).toMatchSnapshot()
  })

  test('should have different dropdown positions', () => {
    expect(shallow(
      <Dropdown button="B" position="bc">Content</Dropdown>
    ).find('.dropdownWrapper')).toMatchSnapshot()
  })

  test('should have an arrow oriented to the top if dropdown is above', () => {
    expect(shallow(
      <Dropdown button="B" position="tr">Content</Dropdown>
    ).find('Arrow')).toMatchSnapshot()
  })
})
