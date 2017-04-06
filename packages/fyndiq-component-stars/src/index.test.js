import React from 'react'
import renderer from 'react-test-renderer'

import Stars from './'

describe('fyndiq-component-stars', () => {
  beforeAll(() => {
    Math.random = jest.fn(() => 0.5)
  })

  it('should be rendered without props', () => {
    const component = renderer.create(<Stars />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should be rendered with prop rating', () => {
    const component = renderer.create(<Stars rating={4.5} />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should be rendered with prop reviews', () => {
    const component = renderer.create(<Stars reviews={4} />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should be rendered with prop size', () => {
    const component = renderer.create(<Stars size="l" />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should be rendered with prop reviews', () => {
    const component = renderer.create(<Stars interactive />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
