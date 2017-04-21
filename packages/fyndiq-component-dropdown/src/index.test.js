import React from 'react'
import { shallow, mount } from 'enzyme'

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

  test('should have a custom wrapper', () => {
    expect(shallow(
      <Dropdown button="B" noWrapperStyle opened>Content</Dropdown>
    ).find('.dropdownWrapper')).toMatchSnapshot()
  })

  test('should be opened when clicked on the button', () => {
    const component = mount(<Dropdown button="button">Value</Dropdown>)
    component.find('div > div').at(0).simulate('click')
    expect(component.find('.dropdownWrapper')).toMatchSnapshot()
  })

  test('should be opened when hovered, if in hoverMode', () => {
    jest.useFakeTimers()
    const component = mount(<Dropdown button="button" hoverMode>Value</Dropdown>)
    component.simulate('mouseover')
    jest.runTimersToTime(200)
    expect(component.find('.dropdownWrapper')).toMatchSnapshot()
    component.simulate('mouseout')
    jest.runTimersToTime(100)
    expect(component.find('.dropdownWrapper')).toMatchSnapshot()
  })

  test('should have different dropdown positions', () => {
    expect(shallow(
      <Dropdown button="B" position="bc" opened>Content</Dropdown>
    ).find('.dropdownWrapper')).toMatchSnapshot()
  })

  test('should have an arrow oriented to the top if dropdown is above', () => {
    expect(shallow(
      <Dropdown button="B" position="tr" opened>Content</Dropdown>
    ).find('Arrow')).toMatchSnapshot()
  })
})
