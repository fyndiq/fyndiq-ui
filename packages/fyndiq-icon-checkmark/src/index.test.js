import React from 'react'
import { shallow } from 'enzyme'

import Checkmark from './'

describe('fyndiq-icon-brand', () => {
  it('should be rendered without props', () => {
    expect(shallow(<Checkmark />)).toMatchSnapshot()
  })
})
