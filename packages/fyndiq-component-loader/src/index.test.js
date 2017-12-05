import React from 'react'
import { shallow } from 'enzyme'
import Loader, { ProgressBar } from './'

describe('fyndiq-component-loader', () => {
  test('it should be rendered with no props', () => {
    expect(shallow(<Loader />)).toMatchSnapshot()
  })

  test('it should have a size prop', () => {
    expect(shallow(<Loader size={40} />)).toMatchSnapshot()
  })

  test('it should have colors props', () => {
    expect(shallow(<Loader color1="red" color2="black" />)).toMatchSnapshot()
  })

  test('it should have wave props', () => {
    expect(
      shallow(<Loader waveAmplitude={5} waveLength={5} />).find('path'),
    ).toMatchSnapshot()
  })

  describe('ProgressBar', () => {
    it('should have the proper structure', () => {
      expect(shallow(<ProgressBar progress={40} />)).toMatchSnapshot()
    })

    it('should have custom colors', () => {
      const component = shallow(
        <ProgressBar color="red" backgroundColor="blue" progress={40} />,
      )
      expect(component.prop('style').backgroundColor).toBe('blue')
      expect(component.find('.progress').prop('style').backgroundColor).toBe(
        'red',
      )
    })

    it('should have custom classes', () => {
      const component = shallow(
        <ProgressBar
          className="class1"
          progressClassName="class2"
          progress={40}
        />,
      )
      expect(component.hasClass('class1')).toBe(true)
      expect(component.find('.progress').hasClass('class2')).toBe(true)
    })

    it('should have an indeterminate mode', () => {
      const component = shallow(<ProgressBar progress={null} />)
      expect(component.find('.progress')).toMatchSnapshot()
    })
  })
})
