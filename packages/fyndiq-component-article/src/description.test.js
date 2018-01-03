import React from 'react'
import { shallow } from 'enzyme'

import Description from './description'

describe('Article Description', () => {
  it('should have a default structure', () => {
    expect(
      shallow(<Description>description content</Description>),
    ).toMatchSnapshot()
  })

  it('should accept nodes', () => {
    expect(
      shallow(
        <Description>
          <strong>description</strong>
          <em>test</em>
        </Description>,
      ),
    ).toMatchSnapshot()
  })
})
