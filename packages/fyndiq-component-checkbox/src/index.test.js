import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Checkbox from './'

describe('fyndiq-component-checkbox', () => {
  test('should be invoquable without parameters', () => {
    const component = renderer.create(<Checkbox />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree.props.disabled).toBeFalsy()
  })

  test('should have prop checked', () => {
    const component = renderer.create(<Checkbox checked />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('should have prop disabled', () => {
    const component = renderer.create(<Checkbox disabled />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree.props.disabled).toBe(true)
  })

  test('should have prop color', () => {
    const reactComponent = <Checkbox checked color="red" />
    const component = renderer.create(reactComponent)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    // Test that the color is passed to the checkmark
    const renderedComponent = shallow(reactComponent)
    expect(renderedComponent.find('Checkmark').prop('color')).toBe('red')
  })

  test('should have prop onToggle', () => {
    const reactComponent = <Checkbox onToggle={jest.fn()} />
    const component = renderer.create(reactComponent)
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('should call onToggle when clicked on', () => {
    const toggleSpy = jest.fn()
    const renderedComponent = shallow(<Checkbox onToggle={toggleSpy} />)
    renderedComponent.simulate('click')

    expect(toggleSpy.mock.calls).toHaveLength(1)
    expect(toggleSpy.mock.calls[0][0]).toBe(true)

    renderedComponent.simulate('click')
    expect(toggleSpy.mock.calls[1][0]).toBe(false)
  })

  test('should update its state when clicked on', () => {
    const renderedComponent = shallow(<Checkbox onToggle={jest.fn()} />)
    renderedComponent.simulate('click')
    expect(renderedComponent.state().checked).toBe(true)

    renderedComponent.simulate('click')
    expect(renderedComponent.state().checked).toBe(false)
  })
})
