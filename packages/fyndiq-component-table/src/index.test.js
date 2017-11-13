import React from 'react'
import { shallow } from 'enzyme'

import { Table, Row, Cell } from './'

describe('fyndiq-component-table', () => {
  describe('Table component', () => {
    it('should have the right structure', () => {
      expect(
        shallow(<Table className="className">Content</Table>),
      ).toMatchSnapshot()
    })
  })

  describe('Row component', () => {
    it('should have the right structure', () => {
      expect(
        shallow(<Row className="className">Content</Row>),
      ).toMatchSnapshot()
    })

    it('should have a interactive prop', () => {
      expect(shallow(<Row interactive />).hasClass('rowInteractive')).toBe(true)
    })

    it('should have a head prop', () => {
      expect(shallow(<Row head />).hasClass('rowHead')).toBe(true)
    })

    it('should have a noBorder prop', () => {
      expect(shallow(<Row noBorder />).hasClass('rowNoBorder')).toBe(true)
    })

    it('should have a verticalCenter prop', () => {
      expect(
        shallow(<Row verticalCenter />).hasClass('rowVerticalCenter'),
      ).toBe(true)
    })

    it('should have a size prop', () => {
      expect(shallow(<Row size="l" />).hasClass('rowSize-l')).toBe(true)
    })
  })

  describe('Cell component', () => {
    it('should have the right structure', () => {
      expect(
        shallow(<Cell className="className">Content</Cell>),
      ).toMatchSnapshot()
    })

    it('should have a center prop', () => {
      expect(shallow(<Cell center />).hasClass('cellCenter')).toBe(true)
    })
  })
})
