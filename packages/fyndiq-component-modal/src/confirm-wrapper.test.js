import React from 'react'
import { shallow } from 'enzyme'
import Wrapper from './confirm-wrapper'

describe('ConfirmWrapper component', () => {
  describe('global instance', () => {
    it('should not have an instance running by default', () => {
      expect(Wrapper.instance).toBe(null)
    })

    it('should save an instance when mounted', () => {
      shallow(<Wrapper />)
      expect(Wrapper.instance).not.toBe(null)
    })

    it('should warn when mounting another instance', () => {
      /* eslint-disable no-console */
      console.warn = jest.fn()
      shallow(<Wrapper />)
      expect(console.warn).toHaveBeenCalled()
      /* eslint-enable no-console */
    })

    it('should remove the instance when unmounted', () => {
      Wrapper.instance = null
      const component = shallow(<Wrapper />)
      component.unmount()
      expect(Wrapper.instance).toBe(null)
    })
  })

  describe('setConfirm', () => {
    const TestConfirm = () => <span />
    let testCallback
    let wrapperComponent

    beforeEach(() => {
      // Mount a shallow wrapper
      Wrapper.instance = null
      wrapperComponent = shallow(<Wrapper />)

      // Reset the testCallback mock
      testCallback = jest.fn()
    })

    it('should not be rendered by default', () => {
      expect(wrapperComponent.isEmptyRender()).toBe(true)
    })

    it('should show a confirm message', () => {
      Wrapper.setConfirm(<TestConfirm />, testCallback)
      wrapperComponent.update()
      expect(wrapperComponent).toMatchSnapshot()
    })

    it('should warn if attempting to show 2 confirm messages', () => {
      /* eslint-disable no-console */
      console.warn = jest.fn()
      Wrapper.setConfirm(<TestConfirm />, testCallback)
      Wrapper.setConfirm(<TestConfirm />, testCallback)
      expect(console.warn).toHaveBeenCalled()
      /* eslint-enable no-console */
    })

    it('should handle onCancel Confirm prop', () => {
      Wrapper.setConfirm(<TestConfirm />, testCallback)
      wrapperComponent.update()
      wrapperComponent.find(TestConfirm).prop('onCancel')()
      wrapperComponent.update()
      expect(testCallback).toHaveBeenCalled()
      expect(testCallback).toHaveBeenCalledWith(false)
      expect(wrapperComponent.isEmptyRender()).toBe(true)
    })

    it('should handle onValidate Confirm prop', () => {
      Wrapper.setConfirm(<TestConfirm />, testCallback)
      wrapperComponent.update()
      wrapperComponent.find(TestConfirm).prop('onValidate')()
      wrapperComponent.update()
      expect(testCallback).toHaveBeenCalled()
      expect(testCallback).toHaveBeenCalledWith(true)
      expect(wrapperComponent.isEmptyRender()).toBe(true)
    })

    it('should not warn about multiple confirm if an action was taken', () => {
      /* eslint-disable no-console */
      console.warn = jest.fn()

      Wrapper.setConfirm(<TestConfirm />, testCallback)
      wrapperComponent.update()
      wrapperComponent.find(TestConfirm).prop('onValidate')()
      wrapperComponent.update()
      Wrapper.setConfirm(<TestConfirm />, testCallback)

      expect(console.warn).not.toHaveBeenCalled()
    })
  })
})
