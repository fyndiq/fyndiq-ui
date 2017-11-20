import React from 'react'
import { shallow, mount } from 'enzyme'

import Presets from './presets'
import Input from './input'

const presets = ['test1', 'test2']

describe('fyndiq-component-input Presets', () => {
  it('should have the proper structure', () => {
    expect(shallow(<Presets presets={presets} />)).toMatchSnapshot()
  })

  it('should show a list of presets after clicking on the button', () => {
    const component = mount(<Presets presets={presets} />)
    component.find('Button').simulate('click')
    expect(component.find('ButtonWrapper')).toMatchSnapshot()
  })

  it('should call onChange if a preset is chosen', () => {
    const spy = jest.fn()
    const component = mount(<Presets presets={presets} onChange={spy} />)
    // Open the dropdown
    component.find('Button').simulate('click')
    // Click on the first button
    component
      .find('ButtonWrapper Button')
      .at(0)
      .simulate('click')

    expect(spy).toHaveBeenCalledWith('test1')
  })

  it('should call onChange if the input is modified', () => {
    const spy = jest.fn()
    const component = shallow(<Presets presets={presets} onChange={spy} />)

    component.find('Input').simulate('change', 'testValue')
    expect(spy).toHaveBeenCalledWith('testValue')
  })

  it('should have a custom input prop', () => {
    expect(
      mount(<Presets input={<Input className="inputClassName" />} />)
        .find('input')
        .hasClass('inputClassName'),
    ).toBe(true)
  })
})
