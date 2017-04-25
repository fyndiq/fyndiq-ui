import React from 'react'
import { shallow } from 'enzyme'
import Loader from './'

describe('fyndiq-icon-loader', () => {
  test('it should be rendered with no props', () => {
    expect(shallow(<Loader />)).toMatchSnapshot()
  })

  test('it should have a size prop', () => {
    expect(shallow(<Loader size={40} />)).toMatchSnapshot()
  })

  test('it should have colors props', () => {
    expect(shallow(
      <Loader color1="red" color2="black" />
    ).find('g')).toMatchSnapshot()
  })

  test('it should have wave props', () => {
    expect(shallow(
      <Loader waveAmplitude={5} waveLength={5} />
    ).find('path')).toMatchSnapshot()
  })
})
