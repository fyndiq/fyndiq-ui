import React from 'react'
import { shallow } from 'enzyme'

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
      ),
    ).toMatchSnapshot()
  })

  test('should have a component for the prop text', () => {
    expect(
      shallow(<Tooltip text={<div>hello</div>}>tooltip</Tooltip>),
    ).toMatchSnapshot()
  })

  test('should have a className prop', () => {
    expect(
      shallow(<Tooltip className="test-classname" />)
        .find('.tooltip')
        .hasClass('test-classname'),
    ).toBe(true)
  })
})
