import React from 'react'
import { shallow } from 'enzyme'

import Img from './image'

jest.useFakeTimers()

describe('fyndiq-component-article Image', () => {
  beforeEach(() => {
    jest.runAllTimers()
  })

  it('should be visible by default', () => {
    expect(shallow(<Img src="test.jpg" />)).toMatchSnapshot()
  })

  it('should still be visible after changing the src', () => {
    const component = shallow(<Img src="test.png" />)
    component.setProps({ src: 'test2.png' })
    expect(component.prop('style').opacity).toBe(1)
  })

  it('should not be visible after a debounce time when changing the image src', () => {
    const component = shallow(<Img src="test.png" />)
    component.setProps({ src: 'test2.png' })
    jest.runTimersToTime(10)
    component.update()
    expect(component.prop('style').opacity).toBe(0)
  })

  it('should be visible again once the image has loaded', () => {
    const component = shallow(<Img src="test.png" />)

    global.Image = function ImageMock() {
      setTimeout(() => this.onload(), 1000)
    }

    component.setProps({ src: 'test2.png' })
    jest.runTimersToTime(1000)
    component.update()
    expect(component.prop('style').opacity).toBe(1)
  })
})
