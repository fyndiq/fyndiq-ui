import React from 'react'
import { shallow } from 'enzyme'

import Stars from './'

describe('fyndiq-component-stars', () => {
  it('should have a default onChange handler', () => {
    expect(Stars.defaultProps.onChange(3)).toBe(3)
  })
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

  it('should be rendered with prop interactive', () => {
    const component = shallow(<Stars interactive />)
    expect(component).toMatchSnapshot()
  })

  it('should send an event if interactive and clicked on', () => {
    const clickSpy = jest.fn()
    const component = shallow(<Stars interactive onChange={clickSpy} />)

    // Find the 3rd star (at is 0-index based)
    component
      .find('.starInteractiveWrapper')
      .at(2)
      .simulate('click')

    expect(clickSpy).toHaveBeenCalled()
    expect(clickSpy.mock.calls[0][0]).toBe(3)
  })

  it('should send an event if interactive and press Enter', () => {
    const clickSpy = jest.fn()
    const component = shallow(<Stars interactive onChange={clickSpy} />)

    component
      .find('.starInteractiveWrapper')
      .at(2)
      .simulate('keyup', { keyCode: 13 })
    expect(clickSpy).toHaveBeenCalled()
  })

  it('should change its state when hovered and interactive', () => {
    const component = shallow(<Stars interactive />)
    component
      .find('.starInteractiveWrapper')
      .at(2)
      .simulate('mouseover')

    expect(
      component
        .find('Star')
        .at(2)
        .prop('full'),
    ).toBe(1)
    expect(
      component
        .find('Star')
        .at(3)
        .prop('full'),
    ).toBe(0)
  })

  it('should change its state when focused and interactive', () => {
    const component = shallow(<Stars interactive />)
    component
      .find('.starInteractiveWrapper')
      .at(2)
      .simulate('focus')

    expect(
      component
        .find('Star')
        .at(2)
        .prop('full'),
    ).toBe(1)
    expect(
      component
        .find('Star')
        .at(3)
        .prop('full'),
    ).toBe(0)
  })

  it('should not change its state when hovered and not interactive', () => {
    const component = shallow(<Stars rating={4} />)
    component
      .find('.starInteractiveWrapper')
      .at(2)
      .simulate('mouseover')
    expect(
      component
        .find('Star')
        .at(3)
        .prop('full'),
    ).toBe(1)
  })

  it('should reset its state when the mouse leaves', () => {
    const component = shallow(<Stars rating={4.5} interactive />)
    component
      .find('.starInteractiveWrapper')
      .at(2)
      .simulate('mouseover')
    component.find('.stars').simulate('mouseleave')
    expect(
      component
        .find('Star')
        .at(4)
        .prop('full'),
    ).toBe(0.5)
  })
})
