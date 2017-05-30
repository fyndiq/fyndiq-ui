import React from 'react'
import { shallow, mount } from 'enzyme'

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

  test('should have unclosable prop', () => {
    expect(shallow(<Alert unclosable />)).toMatchSnapshot()
  })

  test('should be self-closable', () => {
    jest.useFakeTimers()
    const component = mount(<Alert />)
    component.find('.close').simulate('click')
    jest.runTimersToTime(50)
    expect(component).toMatchSnapshot()
    jest.runTimersToTime(500)
    expect(component).toMatchSnapshot()
  })

  test('should have a onClose handler', () => {
    const closeSpy = jest.fn()
    const component = mount(<Alert onClose={closeSpy} />)
    component.find('.close').simulate('click')
    expect(closeSpy.mock.calls).toHaveLength(1)
  })

  test('should have a stopShowingAfter and stopShowingAfterKey props', () => {
    expect(shallow(<Alert stopShowingAfter={5} stopShowingAfterKey="Information-Alert">
      Text for Alert</Alert>)).toMatchSnapshot()
  })
})
