import React from 'react'
import { shallow } from 'enzyme'

import Confirm from './confirm'

describe('Confirm component', () => {
  it('should have a default structure', () => {
    expect(shallow(<Confirm />)).toMatchSnapshot()
  })

  it('should have a `open` prop', () => {
    const component = shallow(<Confirm open />)
    expect(component.find('Modal').prop('open')).toBe(true)
  })

  it('should have a type prop', () => {
    const component = shallow(<Confirm type="success" />)
    expect(
      component
        .find('Modal')
        .prop('wrapperClassName')
        .includes('wrapper--success'),
    ).toBe(true)
  })

  it('should have a title prop', () => {
    const component = shallow(<Confirm title="Title" />)
    expect(component.find('.title').text()).toBe('Title')
  })

  it('should have a message prop', () => {
    const component = shallow(<Confirm message="Message" />)
    expect(component.find('.title + div').text()).toBe('Message')
  })

  it('should have an icon prop', () => {
    const Icon = () => <span />
    const component = shallow(<Confirm icon={<Icon />} />)
    expect(component.find(Icon).hasClass('icon')).toBe(true)
  })

  describe('validateButton prop', () => {
    const Button = () => <button />
    it('should accept a component prop', () => {
      const component = shallow(<Confirm validateButton={<Button />} />)
      expect(component.find(Button).exists()).toBe(true)
    })

    it('should call onValidate in component mode', () => {
      const spy = jest.fn()
      const component = shallow(
        <Confirm validateButton={<Button />} onValidate={spy} />,
      )
      component.find(Button).simulate('click')
      expect(spy).toHaveBeenCalled()
    })

    it('should accept text prop', () => {
      const component = shallow(
        <Confirm validateButton="Hello" cancelButton={null} />,
      )
      expect(component.find('Button').prop('children')).toBe('Hello')
    })

    it('should call onValidate in text mode', () => {
      const spy = jest.fn()
      const component = shallow(
        <Confirm validateButton="Hello" cancelButton={null} onValidate={spy} />,
      )
      component.find('Button').simulate('click')
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('cancelButton prop', () => {
    const Button = () => <button />
    it('should accept a component prop', () => {
      const component = shallow(<Confirm cancelButton={<Button />} />)
      expect(component.find(Button).exists()).toBe(true)
    })

    it('should call onCancel in component mode', () => {
      const spy = jest.fn()
      const component = shallow(
        <Confirm cancelButton={<Button />} onCancel={spy} />,
      )
      component.find(Button).simulate('click')
      expect(spy).toHaveBeenCalled()
    })

    it('should accept text prop', () => {
      const component = shallow(
        <Confirm cancelButton="Hello" validateButton={null} />,
      )
      expect(component.find('Button').prop('children')).toBe('Hello')
    })

    it('should call onCancel in text mode', () => {
      const spy = jest.fn()
      const component = shallow(
        <Confirm cancelButton="Hello" validateButton={null} onCancel={spy} />,
      )
      component.find('Button').simulate('click')
      expect(spy).toHaveBeenCalled()
    })
  })
})
