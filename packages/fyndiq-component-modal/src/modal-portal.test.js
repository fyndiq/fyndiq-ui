import React from 'react'
import { shallow } from 'enzyme'
import ModalPortal from './modal-portal'

describe('ModalPortal Component', () => {
  it('should return a Portal', () => {
    const Component = shallow(<ModalPortal />)
    expect(Component).toMatchSnapshot()
    // NOTE: right now Enzyme doesn't support Portal rendering
    // so the snapshot is `undefined`
  })

  it('should lock the body when opening the modal', () => {
    const Component = shallow(<ModalPortal />)
    expect(document.body.classList.contains('bodyFixed')).toBe(false)
    Component.setProps({ open: true })
    expect(document.body.classList.contains('bodyFixed')).toBe(true)
  })

  it('should create a portal div on mount', () => {
    shallow(<ModalPortal portalId="test-id" />)
    expect(document.getElementById('test-id')).not.toBe(null)
  })
})
