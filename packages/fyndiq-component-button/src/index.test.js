import React from 'react'
import { shallow } from 'enzyme'

import Button from './'

describe('fyndiq-component-button', () => {
  test('should have a default onClick handler', () => {
    expect(Button.defaultProps.onClick(4)).toBe(4)
  })

  test('should be rendered without props', () => {
    const component = shallow(<Button>Hello</Button>)
    expect(component).toMatchSnapshot()
  })

  test('should have a type prop', () => {
    const component = shallow(<Button type="primary">Hello</Button>)
    expect(component).toMatchSnapshot()
  })

  test('should have a size prop', () => {
    const component = shallow(<Button size="xs">Hello</Button>)
    expect(component).toMatchSnapshot()
  })

  test('should have a horizontal prop', () => {
    const component = shallow(<Button horizontal>Hello</Button>)
    expect(component).toMatchSnapshot()
  })

  test('should have a disabled prop', () => {
    const component = shallow(<Button disabled>Hello</Button>)
    expect(component).toMatchSnapshot()
  })

  test('should have a pressed prop', () => {
    const component = shallow(<Button pressed>Hello</Button>)
    expect(component).toMatchSnapshot()
  })

  test('should call the onClick handler when clicked on', () => {
    const clickSpy = jest.fn()
    const component = shallow(<Button onClick={clickSpy}>Hello</Button>)
    component.simulate('click')
    expect(clickSpy.mock.calls).toHaveLength(1)
  })
})
