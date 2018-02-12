import React from 'react'
import { shallow } from 'enzyme'

import Button from './button'

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

  test('should have a htmlType prop', () => {
    const component = shallow(<Button htmlType="submit">Hello</Button>)
    expect(component).toMatchSnapshot()
  })

  test('should have a className prop', () => {
    const component = shallow(<Button className="className">Hello</Button>)
    expect(component.hasClass('className')).toBe(true)
  })

  test('should have a pill prop', () => {
    const component = shallow(<Button pill>Hello</Button>)
    expect(component.hasClass('pill')).toBe(true)
  })

  test('should be renderable as a link', () => {
    const component = shallow(<Button link="#hello">Hello</Button>)
    expect(component).toMatchSnapshot()
  })

  test('should be renderable as a custom link element', () => {
    // Create Link element that follows react-router API
    // eslint-disable-next-line react/prop-types
    const Link = ({ to, children }) => <a href={to}>{children}</a>

    const wrapper = (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <Button link={<Link to="my/path" />}>Hello</Button>
    )
    const component = shallow(wrapper)
    expect(component).toMatchSnapshot()
  })

  test('should call the onClick handler when clicked on', () => {
    const clickSpy = jest.fn()
    const component = shallow(<Button onClick={clickSpy}>Hello</Button>)
    component.simulate('click')
    expect(clickSpy.mock.calls).toHaveLength(1)
  })

  test('should pass additionnal props to the button component', () => {
    expect(
      shallow(<Button data-test="test" />)
        .find('button')
        .prop('data-test'),
    ).toBe('test')
  })

  test('should pass additionnal props to the link component', () => {
    expect(
      shallow(<Button link="#test" data-test="test" />)
        .find('a')
        .prop('data-test'),
    ).toBe('test')
  })
})
