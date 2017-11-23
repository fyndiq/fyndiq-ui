import React from 'react'
import { shallow } from 'enzyme'

import Message from './message'

// eslint-disable-next-line react/prop-types
const Icon = ({ color }) => <span>Icon {color}</span>

describe('fyndiq-component-message Message', () => {
  it('should have the proper structure', () => {
    expect(
      shallow(<Message icon={<svg>Icon</svg>}>Message</Message>),
    ).toMatchSnapshot()
  })

  it('should have a type prop', () => {
    const component = shallow(
      <Message icon={<Icon />} type="confirm">
        Message
      </Message>,
    )

    expect(component.hasClass('message--type_confirm')).toBe(true)
    expect(component.find(Icon).prop('color')).not.toBe(undefined)
  })

  it('should call onClose after <timeout>ms', () => {
    jest.useFakeTimers()
    const spy = jest.fn()
    shallow(
      <Message timeout={3000} onClose={spy}>
        Message
      </Message>,
    )
    jest.runTimersToTime(3000)
    expect(spy).toHaveBeenCalled()
  })

  describe('timeout', () => {
    it('should pause the timeout if the message is hovered', () => {
      jest.useFakeTimers()
      const spy = jest.fn()
      const component = shallow(
        <Message timeout={3000} onClose={spy}>
          Message
        </Message>,
      )

      jest.runTimersToTime(1200)
      component.simulate('mouseenter')
      jest.runTimersToTime(3000)
      expect(spy).not.toHaveBeenCalled()
    })

    it('should restart the timeout when the message is left', () => {
      jest.useFakeTimers()
      const spy = jest.fn()
      // Mock Date.now : it needs to follow jest.runTimersToTime()
      Date.now = () => 0
      const component = shallow(
        <Message timeout={3000} onClose={spy}>
          Message
        </Message>,
      )

      jest.runTimersToTime(1200)
      Date.now = () => 1200
      component.simulate('mouseenter')
      jest.runTimersToTime(3000)
      Date.now = () => 4200
      component.simulate('mouseleave')
      jest.runTimersToTime(2800)
      Date.now = () => 6000
      expect(spy).toHaveBeenCalled()
    })

    it('should cancel the timeout when the component unmounts', () => {
      jest.useFakeTimers()
      const spy = jest.fn()
      const component = shallow(
        <Message timeout={3000} onClose={spy}>
          Message
        </Message>,
      )
      component.unmount()
      jest.runTimersToTime(3000)
      expect(spy).not.toHaveBeenCalled()
    })
  })
})
