import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import ModalPortal from './modal-portal'

describe('ModalPortal Component', () => {
  it('should return a Portal', () => {
    // Mock the Portal behavior to return its content
    ReactDOM.createPortal = jest.fn(children => children)
    const Component = shallow(<ModalPortal>Content</ModalPortal>)
    expect(Component).toMatchSnapshot()
  })

  it('should lock the body when opening the modal', () => {
    const Component = shallow(<ModalPortal />)
    expect(document.body.classList.contains('bodyFixed')).toBe(false)
    Component.setProps({ bodyLock: true })
    expect(document.body.classList.contains('bodyFixed')).toBe(true)
  })

  it('should unlock the body when unmounting', () => {
    const Component = shallow(<ModalPortal bodyLock />)
    Component.unmount()
    expect(document.body.classList.contains('bodyFixed')).toBe(false)
  })

  it('should create a portal div on mount', () => {
    shallow(<ModalPortal portalId="test-id" />)
    expect(document.getElementById('test-id')).not.toBe(null)
  })
})
