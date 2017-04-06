import React from 'react'
import renderer from 'react-test-renderer'

import Button from './'

describe('fyndiq-component-button', () => {
  test('should be rendered without props', () => {
    const component = renderer.create(<Button>Hello</Button>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('should have a type prop', () => {
    const component = renderer.create(<Button type="primary">Hello</Button>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('should have a size prop', () => {
    const component = renderer.create(<Button size="xs">Hello</Button>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('should have a horizontal prop', () => {
    const component = renderer.create(<Button horizontal>Hello</Button>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('should have a disabled prop', () => {
    const component = renderer.create(<Button disabled>Hello</Button>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree.props.disabled).toBe(true)
  })

  test('should have a pressed prop', () => {
    const component = renderer.create(<Button pressed>Hello</Button>)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
