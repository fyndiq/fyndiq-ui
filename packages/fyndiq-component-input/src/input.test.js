import React from 'react'
import { shallow } from 'enzyme'

import Input from './input'

describe('fyndiq-component-input Input', () => {
  it('should have the proper structure', () => {
    expect(shallow(<Input />)).toMatchSnapshot()
  })

  it('should have a className prop', () => {
    expect(
      shallow(<Input className="testClassName" />).hasClass('testClassName'),
    ).toBe(true)
  })

  it('should have a required prop', () => {
    expect(
      shallow(<Input required />)
        .find('input')
        .prop('required'),
    ).toBe(true)
  })

  it('should have a defaultValue prop', () => {
    expect(
      shallow(<Input defaultValue="default" />)
        .find('input')
        .prop('defaultValue'),
    ).toBe('default')
  })

  it('should have a value prop', () => {
    expect(
      shallow(<Input value="valueTest" />)
        .find('input')
        .prop('value'),
    ).toBe('valueTest')
  })

  it('should have a htmlType prop', () => {
    expect(
      shallow(<Input htmlType="number" />)
        .find('input')
        .prop('type'),
    ).toBe('number')
  })

  it('should have a placeholder prop', () => {
    expect(
      shallow(<Input placeholder="placeholder-test" />)
        .find('input')
        .prop('placeholder'),
    ).toBe('placeholder-test')
  })

  it('should have a onChange prop', () => {
    const spy = jest.fn()
    const component = shallow(<Input onChange={spy} />)
    component
      .find('input')
      .simulate('change', { target: { value: 'new value' } })

    expect(spy).toHaveBeenCalledWith('new value')
  })
})
