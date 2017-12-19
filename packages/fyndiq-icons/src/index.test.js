import React from 'react'
import { mount } from 'enzyme'
import * as icons from './'

describe('Fyndiq Icons', () => {
  Object.keys(icons).forEach(icon => {
    describe(`<${icon} />`, () => {
      const Icon = icons[icon]
      const defaultComponent = mount(<Icon />)
      it('should have a default className', () => {
        expect(defaultComponent.find('svg').hasClass('svgWrapper')).toBe(true)
      })

      it('should have a className prop', () => {
        const component = mount(<Icon className="test" />)
        expect(component.find('svg').hasClass('test')).toBe(true)
      })

      it('should not have <g>', () => {
        expect(defaultComponent.find('g').exists()).toBe(false)
      })

      it('should not set fill and stroke by default', () => {
        expect(
          defaultComponent.find('path').everyWhere(
            node =>
              // fill is either none or undefined
              (node.prop('fill') === 'none' ||
                node.prop('fill') === undefined) &&
              // stroke is either none or undefined
              (node.prop('stroke') === 'none' ||
                node.prop('stroke') === undefined),
          ),
        ).toBe(true)
      })

      it('should have a color prop', () => {
        const component = mount(<Icon color="rebeccapurple" />)

        // Test that all fill are of the provided color, or "none"
        expect(
          component
            .find('path')
            .everyWhere(
              node =>
                node.prop('fill') === 'rebeccapurple' ||
                node.prop('fill') === 'none',
            ),
        ).toBe(true)

        // Test that all strokes are of the provided color, or "none"
        expect(
          component
            .find('path')
            .everyWhere(
              node =>
                node.prop('stroke') === 'rebeccapurple' ||
                node.prop('stroke') === 'none',
            ),
        ).toBe(true)
      })
    })
  })
})
