import React from 'react'
import { shallow } from 'enzyme'

import Alert from './'

describe('fyndiq-component-alert', () => {
  test('should be rendered without props', () => {
    expect(shallow(<Alert>Notification</Alert>)).toMatchSnapshot()
  })

  test('should have a type prop', () => {
    expect(shallow(<Alert type="warning">Warning</Alert>)).toMatchSnapshot()
    expect(shallow(<Alert type="good">Good</Alert>)).toMatchSnapshot()
    expect(shallow(<Alert type="bad">Bad</Alert>)).toMatchSnapshot()
  })

  test('should be self-closable', () => {
    const component = shallow(<Alert />)
    component.find('.close').simulate('click')
    expect(component).toMatchSnapshot()
  })

  test('should have a onClose handler', () => {
    const closeSpy = jest.fn()
    const component = shallow(<Alert onClose={closeSpy} />)
    component.find('.close').simulate('click')
    expect(closeSpy.mock.calls).toHaveLength(1)
  })
})
