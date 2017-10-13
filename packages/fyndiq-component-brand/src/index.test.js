import React from 'react'
import { shallow } from 'enzyme'

import FyndiqLogo from './'

describe('fyndiq-component-brand', () => {
  it('should be rendered without props', () => {
    expect(shallow(<FyndiqLogo />)).toMatchSnapshot()
  })

  it('should be rendered in different types', () => {
    expect(shallow(<FyndiqLogo type="outline" />)).toMatchSnapshot()
    expect(shallow(<FyndiqLogo type="bw" />)).toMatchSnapshot()
    expect(shallow(<FyndiqLogo type="outline-bw" />)).toMatchSnapshot()
    expect(shallow(<FyndiqLogo type="outline-transp" />)).toMatchSnapshot()
    expect(shallow(<FyndiqLogo type="outline-transp-bw" />)).toMatchSnapshot()
  })

  it('should have a className prop', () => {
    expect(shallow(<FyndiqLogo className="testClass" />)).toMatchSnapshot()
  })

  it('should have a tagline', () => {
    expect(shallow(<FyndiqLogo>Hello</FyndiqLogo>)).toMatchSnapshot()
  })

  it('should have a taglineSize prop', () => {
    expect(shallow(<FyndiqLogo taglineSize={5.5}>Hello</FyndiqLogo>)).toMatchSnapshot()
  })
})
