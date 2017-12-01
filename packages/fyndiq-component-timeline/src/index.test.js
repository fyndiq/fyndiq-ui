import React from 'react'
import { shallow } from 'enzyme'

import { Timeline, Event } from './'

// eslint-disable-next-line
const Icon = ({ color }) => <div style={{ color }}>My Icon</div>

describe('fyndiq-component-timeline', () => {
  describe('Timeline Component', () => {
    it('should have the proper structure', () => {
      expect(
        shallow(
          <Timeline>
            <div>Hello</div>
          </Timeline>,
        ),
      ).toMatchSnapshot()
    })

    it('should have a type prop', () => {
      expect(
        shallow(<Timeline type="black" />).hasClass('timeline_type_black'),
      ).toBe(true)
    })
  })

  describe('Event Component', () => {
    it('should have the proper structure', () => {
      expect(shallow(<Event icon={<Icon />}>Hello</Event>)).toMatchSnapshot()
    })
  })
})
