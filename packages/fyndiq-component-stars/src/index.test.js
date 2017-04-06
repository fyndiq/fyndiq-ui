import React from 'react'
import { shallow } from 'enzyme'

import Stars from './'

describe('fyndiq-component-stars', () => {
  it('should be rendered without props', () => {
    const component = shallow(<Stars />)
    expect(component).toMatchSnapshot()
  })

  it('should be rendered with prop rating', () => {
    const component = shallow(<Stars rating={4.5} />)
    expect(component).toMatchSnapshot()
  })

  it('should be rendered with prop reviews', () => {
    const component = shallow(<Stars reviews={4} />)
    expect(component).toMatchSnapshot()
  })

  it('should be rendered with prop size', () => {
    const component = shallow(<Stars size="l" />)
    expect(component).toMatchSnapshot()
  })

  it('should be rendered with prop reviews', () => {
    const component = shallow(<Stars interactive />)
    expect(component).toMatchSnapshot()
  })

  it('should send an event if interactive and clicked on', () => {
    const clickSpy = jest.fn()
    const component = shallow(<Stars interactive onChange={clickSpy} />)

    // Find the 3rd star (at is 0-index based)
    component.find('Star').at(2).simulate('click')

    expect(clickSpy.mock.calls).toHaveLength(1)
    expect(clickSpy.mock.calls[0][0]).toBe(3)
  })

  it('should change its state when hovered and interactive', () => {
    const component = shallow(<Stars interactive />)
    component.find('Star').at(2).simulate('hover')
    expect(component).toMatchSnapshot()
  })
})
