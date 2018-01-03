import React from 'react'
import { shallow } from 'enzyme'

import Images from './images'

describe('Article Images', () => {
  it('should have a default structure', () => {
    const component = shallow(
      <Images images={['imgSrc1', 'imgSrc2']} alt="title" />,
    )
    expect(component).toMatchSnapshot()
  })

  it('should change the big image when clicking on a small image', () => {
    const component = shallow(
      <Images images={['imgSrc1', 'imgSrc2']} alt="title" />,
    )
    component
      .find('.buttonImg')
      .at(1)
      .simulate('click')
    expect(component.find('.imgBig').prop('src')).toBe('imgSrc2')
  })

  it('should change the big image when hovering on a small image', () => {
    const component = shallow(
      <Images images={['imgSrc1', 'imgSrc2']} alt="title" />,
    )
    component
      .find('.buttonImg')
      .at(1)
      .simulate('mouseenter')
    expect(component.find('.imgBig').prop('src')).toBe('imgSrc2')
  })

  it('should change the current image when clicking on the arrows', () => {
    const component = shallow(
      <Images images={['imgSrc1', 'imgSrc2']} alt="title" />,
    )

    // Click on the "next" arrow
    component
      .find('.buttonArrow')
      .at(1)
      .simulate('click')
    expect(component.find('.imgBig').prop('src')).toBe('imgSrc2')

    // Click on the "previous" arrow
    component
      .find('.buttonArrow')
      .at(0)
      .simulate('click')
    expect(component.find('.imgBig').prop('src')).toBe('imgSrc1')
  })

  it('should go around the list when on an edge and clicking an arrow button', () => {
    const component = shallow(
      <Images images={['imgSrc1', 'imgSrc2', 'imgSrc3']} alt="title" />,
    )

    // Click on the "previous" button
    component
      .find('.buttonArrow')
      .at(0)
      .simulate('click')
    expect(component.find('.imgBig').prop('src')).toBe('imgSrc3')

    // Click on the "next" button
    component
      .find('.buttonArrow')
      .at(1)
      .simulate('click')
    expect(component.find('.imgBig').prop('src')).toBe('imgSrc1')
  })

  it('should react to arrow key presses', () => {
    const component = shallow(
      <Images images={['imgSrc1', 'imgSrc2', 'imgSrc3']} alt="title" />,
    )
    // Left arrow
    global.simulate.keyup({ keyCode: 37 })
    component.update()
    expect(component.find('.imgBig').prop('src')).toBe('imgSrc3')

    // Right arrow
    global.simulate.keyup({ keyCode: 39 })
    component.update()
    expect(component.find('.imgBig').prop('src')).toBe('imgSrc1')
  })

  it('should unregister keyup events on unmount', () => {
    const component = shallow(
      <Images images={['imgSrc1', 'imgSrc2', 'imgSrc3']} alt="title" />,
    )

    component.unmount()
    expect(global.simulate.keyup).toBe(undefined)
  })
})
