import React from 'react'
import { shallow, mount } from 'enzyme'

import Tooltip from './'

describe('fyndiq-component-tooltip', () => {
  test('should be rendered without props', () => {
    expect(shallow(<Tooltip text="help">tooltip</Tooltip>)).toMatchSnapshot()
  })

  test('should have the right position', () => {
    expect(
      shallow(
        <Tooltip text="help" position="tr">
          tooltip
        </Tooltip>,
      )
        .find('.tooltip')
        .hasClass('position-tr'),
    ).toBe(true)
  })

  test('should have a component for the prop text', () => {
    expect(
      shallow(<Tooltip text={<div>hello</div>}>tooltip</Tooltip>).find(
        '.tooltip',
      ),
    ).toMatchSnapshot()
  })

  test('should have a className prop', () => {
    expect(
      shallow(<Tooltip text="text" className="test-classname" />)
        .find('.tooltip')
        .hasClass('test-classname'),
    ).toBe(true)
  })

  test('should have a type prop', () => {
    expect(
      shallow(<Tooltip text="text" type="white" />)
        .find('.tooltip')
        .hasClass('type-white'),
    ).toBe(true)
  })

  test('should update its width on open', () => {
    const component = mount(<Tooltip text="test">tooltip</Tooltip>)
    // Open Dropdown
    component
      .find('Dropdown')
      .find('div > div')
      .at(0)
      .simulate('click')
    component.update()

    // Because of jsdom limitation, `getBoundingClientRect` will
    // always return a size of 0.
    expect(component.find('.tooltip').prop('style').width).toBe(0)
  })

  test('should not have a tooltip if the text is null or undefined', () => {
    const component = mount(<Tooltip>tooltip</Tooltip>)
    expect(component).toMatchSnapshot()
  })
})
