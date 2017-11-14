import React from 'react'
import { shallow } from 'enzyme'

import Wrapper from './wrapper'

describe('fyndiq-component-button Wrapper', () => {
  it('should have the proper structure', () => {
    expect(shallow(<Wrapper />)).toMatchSnapshot()
  })

  it('should have an orientation prop', () => {
    expect(
      shallow(<Wrapper orientation="vertical" />).hasClass(
        'wrapper--orientation_vertical',
      ),
    ).toBe(true)
  })

  it('should have a className prop', () => {
    expect(
      shallow(<Wrapper className="className" />).hasClass('className'),
    ).toBe(true)
  })
})
