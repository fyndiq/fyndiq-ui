import React from 'react'
import { shallow } from 'enzyme'

import { Price, OldPrice, CurrentPrice } from './'

describe('Price Component', () => {
  it('should have a default structure', () => {
    expect(shallow(<Price />)).toMatchSnapshot()
  })

  it('should have a emphasize prop', () => {
    expect(shallow(<Price emphasize={false} />)).toMatchSnapshot()
  })
})

describe('OldPrice Component', () => {
  it('should have a default structure', () => {
    expect(shallow(<OldPrice>125 kr</OldPrice>)).toMatchSnapshot()
  })
})

describe('CurrentPrice Component', () => {
  it('should have a default structure', () => {
    expect(shallow(<CurrentPrice>125 kr</CurrentPrice>)).toMatchSnapshot()
  })
})
