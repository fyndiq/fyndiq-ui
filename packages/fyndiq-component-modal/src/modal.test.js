import React from 'react'
import { shallow } from 'enzyme'
import Modal from './modal'

describe('Modal Component', () => {
  it('should return null if not open', () => {
    expect(shallow(<Modal />).isEmptyRender()).toBe(true)
  })

  it('should be displayed correctly if opened', () => {
    expect(shallow(<Modal open>Content</Modal>)).toMatchSnapshot()
  })

  it('should have custom classes for different elements', () => {
    expect(
      shallow(
        <Modal
          overlayClassName="overlayClassName"
          wrapperClassName="wrapperClassName"
          closeClassName="closeClassName"
          open
        >
          Content
        </Modal>,
      ),
    ).toMatchSnapshot()
  })

  it('should call onClose when clicking on the overlay', () => {
    const spy = jest.fn()
    const Component = shallow(<Modal onClose={spy} open />)
    Component.find('.overlay').simulate('click')
    expect(spy).toHaveBeenCalled()
  })

  it('should call onClose when clicking on the x', () => {
    const spy = jest.fn()
    const Component = shallow(<Modal onClose={spy} open />)
    Component.find('.close').simulate('click')
    expect(spy).toHaveBeenCalled()
  })

  it('should stop the propagation when clicking on the wrapper', () => {
    const stopSpy = jest.fn()
    const Component = shallow(<Modal open />)
    Component.find('.wrapper').simulate('click', { stopPropagation: stopSpy })
    expect(stopSpy).toHaveBeenCalled()
  })

  it('should call onClose when pressing ESC', () => {
    const spy = jest.fn()
    shallow(<Modal onClose={spy} open />)
    global.simulate.keypress({ keyCode: 27 })
    expect(spy).toHaveBeenCalled()
  })

  it('should unregister keypress event when unmounting', () => {
    const Component = shallow(<Modal open />)
    Component.unmount()
    expect(global.simulate.keypress).toBe(undefined)
  })

  it('should handle function children', () => {
    const spy = jest.fn()
    const Component = shallow(
      <Modal open onClose={spy}>
        {({ onClose }) => (
          <button className="custom-close" onClick={onClose}>
            Button
          </button>
        )}
      </Modal>,
    )

    Component.find('.custom-close').simulate('click')
    expect(spy).toHaveBeenCalled()
  })

  describe('forced prop', () => {
    it('should not show the closing cross', () => {
      const Component = shallow(<Modal open forced />)
      expect(Component.find('.close').exists()).toBe(false)
    })

    it('should not close on click on overlay', () => {
      const spy = jest.fn()
      const Component = shallow(<Modal open onClose={spy} forced />)
      Component.find('.overlay').simulate('click')
      expect(spy).not.toHaveBeenCalled()
    })

    it('should not close on ESC press', () => {
      const spy = jest.fn()
      shallow(<Modal onClose={spy} open forced />)
      global.simulate.keypress({ keyCode: 27 })
      expect(spy).not.toHaveBeenCalled()
    })
  })
})
