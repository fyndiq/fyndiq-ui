import React from 'react'
import { shallow } from 'enzyme'

import Tooltip from './'

describe('fyndiq-component-tooltip', () => {
  test('should be rendered without props', () => {
    expect(shallow(<Tooltip text="help">tooltip</Tooltip>)).toMatchSnapshot()
  })

  test('should have the right position', () => {
    expect(shallow(
      <Tooltip text="help" position="tr">tooltip</Tooltip>
    )).toMatchSnapshot()
  })
})
