import React from 'react'
import { shallow } from 'enzyme'

import Tags from './tags'

describe('Article Tags', () => {
  it('should have a default structure', () => {
    expect(
      shallow(<Tags tags={['tag 1', 'tag 2', 'tag 3']} />),
    ).toMatchSnapshot()
  })

  it('should not render anything if no tags are specified', () => {
    expect(shallow(<Tags />).isEmptyRender()).toBe(true)
  })
})
