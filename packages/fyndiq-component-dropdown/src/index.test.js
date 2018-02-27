import React from 'react'
import { shallow, mount } from 'enzyme'

import Dropdown from './'

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

describe('fyndiq-component-dropdown', () => {
  test('should be displayed with minimum props', () => {
    expect(
      shallow(<Dropdown button="Button">Value</Dropdown>, {
        disableLifecycleMethods: true,
      }),
    ).toMatchSnapshot()
  })

  test('should have a custom button', () => {
    expect(
      shallow(<Dropdown button={<div>Hello</div>}>Value</Dropdown>, {
        disableLifecycleMethods: true,
      }),
    ).toMatchSnapshot()
  })

  test('should have a custom wrapper', () => {
    expect(
      shallow(
        <Dropdown button="B" noWrapperStyle opened>
          Content
        </Dropdown>,
        { disableLifecycleMethods: true },
      ).find('.dropdownWrapper'),
    ).toMatchSnapshot()
  })

  test('should be opened when clicked on the button', () => {
    const component = mount(<Dropdown button="button">Value</Dropdown>)
    component.find('Button').simulate('click')
    expect(component.find('.dropdownWrapper')).toMatchSnapshot()
  })

  test('should have a className prop', () => {
    const component = shallow(
      <Dropdown button="b" className="className">
        Content
      </Dropdown>,
      { disableLifecycleMethods: true },
    )

    expect(component.hasClass('className')).toBe(true)
  })

  test('should have a wrapperClassName prop', () => {
    const component = shallow(
      <Dropdown button="b" wrapperClassName="className" opened>
        Content
      </Dropdown>,
      { disableLifecycleMethods: true },
    )

    expect(component.find('.dropdownWrapper').hasClass('className')).toBe(true)
  })

  test('should be closed when clicking outside', () => {
    const component = mount(
      <Dropdown button="button" opened>
        Value
      </Dropdown>,
    )
    global.simulate.click('body')
    component.update()
    expect(component.find('.dropdownWrapper').exists()).toBe(false)
  })

  test('should be opened when hovered, if in hoverMode', () => {
    jest.useFakeTimers()
    const component = mount(
      <Dropdown button="button" hoverMode>
        Value
      </Dropdown>,
    )
    component.simulate('mouseover')
    jest.runTimersToTime(200)
    component.update()
    expect(component.find('.dropdownWrapper')).toMatchSnapshot()
    component.simulate('mouseout')
    jest.runTimersToTime(100)
    component.update()
    expect(component.find('.dropdownWrapper').exists()).toBe(false)
  })

  test('should open the dropdown on button click in hoverMode', () => {
    jest.useFakeTimers()
    const component = mount(
      <Dropdown button="button" hoverMode>
        Value
      </Dropdown>,
    )
    component.simulate('mouseover')
    jest.runTimersToTime(200)
    component.update()
    component.find('Button').simulate('click')
    component.update()
    expect(component.find('.dropdownWrapper')).toMatchSnapshot()
  })

  test('should have different dropdown positions', () => {
    expect(
      mount(
        <Dropdown button="B" position="bc" opened>
          Content
        </Dropdown>,
      ).find('.dropdownWrapper'),
    ).toMatchSnapshot()

    expect(
      mount(
        <Dropdown button="B" position="tr" opened>
          Content
        </Dropdown>,
      ).find('.dropdownWrapper'),
    ).toMatchSnapshot()

    expect(
      mount(
        <Dropdown button="B" position="tc" opened>
          Content
        </Dropdown>,
      ).find('.dropdownWrapper'),
    ).toMatchSnapshot()
  })

  test('should have an arrow oriented to the top if dropdown is above', () => {
    expect(
      shallow(
        <Dropdown button="B" position="tr" opened>
          Content
        </Dropdown>,
        { disableLifecycleMethods: true },
      ).find('Arrow'),
    ).toMatchSnapshot()
  })

  test('should be closable by pressing the Escape key', () => {
    const component = mount(
      <Dropdown button="button" opened>
        Content
      </Dropdown>,
    )
    global.simulate.keypress({
      keyCode: 27,
      stopImmediatePropagation: () => {},
    })
    component.update()
    expect(component.find('.dropdownWrapper').exists()).toBe(false)
  })

  test('should remove eventListeners when unmounted', () => {
    const component = mount(<Dropdown button="button">Content</Dropdown>)
    component.unmount()
    expect(global.simulate).toMatchSnapshot()
  })

  test('should bubble up click event', () => {
    const spy = jest.fn()
    const wrapper = (
      <div onClick={spy}>
        <Dropdown button="button">Content</Dropdown>
      </div>
    )
    const component = mount(wrapper)
    component.find('Button').simulate('click')
    component.find('.dropdownWrapper').simulate('click')
    expect(spy).toHaveBeenCalledTimes(2)
  })

  test('should not bubble up click event if the prop noPropagateClickEvent is set', () => {
    const spy = jest.fn()
    const wrapper = (
      <div onClick={spy}>
        <Dropdown button="button" noPropagateClickEvent>
          Content
        </Dropdown>
      </div>
    )
    const component = mount(wrapper)
    component.find('Button').simulate('click')
    component.find('.dropdownWrapper').simulate('click')
    expect(spy).not.toHaveBeenCalled()
  })

  it('should handle function children', () => {
    const Component = shallow(
      <Dropdown button="button" opened>
        {({ onClose }) => (
          <button className="custom-close" onClick={onClose}>
            Button
          </button>
        )}
      </Dropdown>,
      { disableLifecycleMethods: true },
    )

    Component.find('.custom-close').simulate('click')
    expect(Component.find('.dropdownWrapper').exists()).toBe(false)
  })

  it('should call onOpen when the dropdown is opened', () => {
    const spy = jest.fn()
    const component = mount(
      <Dropdown button="button" onOpen={spy}>
        Content
      </Dropdown>,
    )

    component.setState({ opened: true })
    expect(spy).toHaveBeenCalled()
  })

  it('should call onClose when the dropdown is closed', () => {
    const spy = jest.fn()
    const component = mount(
      <Dropdown button="button" onClose={spy} opened>
        Content
      </Dropdown>,
    )

    component.setState({ opened: false })
    expect(spy).toHaveBeenCalled()
  })

  it('should be controllable', () => {
    const component = shallow(<Dropdown button="button">Content</Dropdown>, {
      disableLifecycleMethods: true,
    })
    component.setProps({ opened: true })
    expect(component.find('.dropdownWrapper').exists()).toBe(true)
    component.setProps({ opened: false })
    expect(component.find('.dropdownWrapper').exists()).toBe(false)
  })

  it('should not call handlers when control toggled', () => {
    const spy = jest.fn()
    const component = shallow(
      <Dropdown button="button" onOpen={spy} onClose={spy}>
        Content
      </Dropdown>,
      {
        disableLifecycleMethods: false,
      },
    )
    component.setProps({ opened: true })
    component.update()
    component.setProps({ opened: false })
    component.update()
    expect(spy).not.toHaveBeenCalled()
  })

  describe('disabled prop', () => {
    it('should open when clicking on the button', () => {
      const component = shallow(
        <Dropdown button="button" disabled>
          Content
        </Dropdown>,
        {
          disableLifecycleMethods: true,
        },
      )
      component.find('Button').simulate('click')
      component.update()
      expect(component.find('.dropdownWrapper').exists()).toBe(false)
    })

    it('should not be closed when clicking outside', () => {
      const component = mount(
        <Dropdown button="button" disabled opened>
          Value
        </Dropdown>,
      )
      global.simulate.click('body')
      component.update()
      expect(component.find('.dropdownWrapper').exists()).toBe(true)
    })

    it('should not open in overMode', () => {
      // Test the hoverMode
      const component = mount(
        <Dropdown button="button" disabled hoverMode>
          Content
        </Dropdown>,
      )
      component.simulate('mouseover')
      jest.runTimersToTime(200)
      component.update()
      expect(component.find('.dropdownWrapper').exists()).toBe(false)
    })

    it('should not be closable in hoverMode', () => {
      // Test the hoverMode
      const component = mount(
        <Dropdown button="button" disabled hoverMode opened>
          Content
        </Dropdown>,
      )
      component.simulate('mouseout')
      jest.runTimersToTime(100)
      component.update()
      expect(component.find('.dropdownWrapper').exists()).toBe(true)
    })

    it('should not be closable by pressing the ESC key', () => {
      const component = shallow(
        <Dropdown disabled button="button" opened>
          Content
        </Dropdown>,
        {
          disableLifecycleMethods: true,
        },
      )
      global.simulate.keypress({ keyCode: 27 })
      component.update()
      expect(component.find('.dropdownWrapper').exists()).toBe(true)
    })
  })
})
