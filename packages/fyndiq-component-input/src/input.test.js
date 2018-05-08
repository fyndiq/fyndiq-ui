// Debounce is mocked here, because of a timer bug
// https://github.com/facebook/jest/issues/3465
/* eslint-disable import/first */
jest.mock('lodash.debounce', () => jest.fn(fn => fn))

import React from 'react'
import { shallow } from 'enzyme'
import debounce from 'lodash.debounce'

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

  it('should have a type prop', () => {
    expect(
      shallow(<Input type="number" />)
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

  it('should be disabled', () => {
    const input = shallow(<Input disabled />).find('input')
    expect(input.prop('disabled')).toBe(true)
    expect(input.hasClass('disabled')).toBe(true)
  })

  describe('debounce feature', () => {
    it('should call debounce', () => {
      const spy = jest.fn()
      const component = shallow(<Input debouncedOnChange={spy} />)
      // Simulate quick typing
      component.find('input').simulate('change', { target: { value: 'n' } })
      component.find('input').simulate('change', { target: { value: 'ne' } })
      component.find('input').simulate('change', { target: { value: 'new' } })

      expect(debounce).toHaveBeenCalled()
    })

    it('should not call debounce if debouncedOnChange is undefined', () => {
      debounce.mockClear()
      const component = shallow(<Input />)
      component.find('input').simulate('change', { target: { value: 'n' } })
      component.find('input').simulate('change', { target: { value: 'ne' } })
      expect(debounce).not.toHaveBeenCalled()
    })

    it('should call debouncedOnChange prop', () => {
      const spy = jest.fn()
      const component = shallow(<Input debouncedOnChange={spy} />)
      // Simulate quick typing
      component.find('input').simulate('change', { target: { value: 'n' } })
      component.find('input').simulate('change', { target: { value: 'ne' } })
      component.find('input').simulate('change', { target: { value: 'new' } })

      expect(spy).toHaveBeenCalled()
    })

    it('should specify a debounceWait', () => {
      debounce.mockClear()
      const spy = jest.fn()
      shallow(<Input debouncedOnChange={spy} debounceWait={5432} />)
      expect(debounce.mock.calls[0][1]).toBe(5432)
    })
  })
})
