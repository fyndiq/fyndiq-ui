import React from 'react'
import { shallow } from 'enzyme'

import Message from './message'
import Wrapper from './message-wrapper'

describe('fyndiq-component-message MessageWrapper', () => {
  beforeEach(() => {
    Wrapper.instance = null
  })

  it('should keep an instance of the running wrapper', () => {
    shallow(<Wrapper />)
    expect(Wrapper.instance).not.toBe(null)
  })

  it('should warn the user if there are 2 instances of wrapper', () => {
    console.warn = jest.fn()
    shallow(<Wrapper />)
    shallow(<Wrapper />)
    expect(console.warn).toHaveBeenCalled()
  })

  it('should remove messages internally', () => {
    const component = shallow(<Wrapper />)
    Wrapper.addMessage(<Message>New message</Message>)
    component.update()
    component.find(Message).simulate('close')
    component.update()
    expect(component.find(Message).exists()).toBe(false)
  })

  describe('static addMessage', () => {
    it('should have a static addMessage function', () => {
      const component = shallow(<Wrapper />)
      Wrapper.addMessage(<Message>New message</Message>)
      component.update()
      expect(component.find(Message).exists()).toBe(true)
    })

    it('should throw if there is no instance of Wrapper', () => {
      expect(() => Wrapper.addMessage(<Message>New message</Message>)).toThrow()
    })

    it('should have the proper structure', () => {
      Math.random = jest.fn(() => 'RANDOM-ID')
      const component = shallow(<Wrapper />)
      Wrapper.addMessage(<Message>New message 1</Message>)
      Wrapper.addMessage(<Message>New message 2</Message>)
      component.update()
      expect(component).toMatchSnapshot()
    })
  })
})
