import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import MessagePortal from './message-portal'

describe('fyndiq-component-message MessagePortal', () => {
  it('should return a Portal', () => {
    // Mock the Portal behavior to return its content
    ReactDOM.createPortal = jest.fn(children => children)
    const Component = shallow(<MessagePortal>Content</MessagePortal>)
    expect(Component).toMatchSnapshot()
  })

  it('should create a portal div on mount', () => {
    shallow(<MessagePortal portalId="test-id" />)
    expect(document.getElementById('test-id')).not.toBe(null)
  })

  it('should not create another portal with the same ID', () => {
    shallow(<MessagePortal portalId="test-id" />)
    shallow(<MessagePortal portalId="test-id" />)
    expect(document.querySelectorAll('#test-id')).toHaveLength(1)
  })
})
