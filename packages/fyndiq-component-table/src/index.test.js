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
      expect(
        shallow(<Row interactive />)
          .find('.row')
          .hasClass('rowInteractive'),
      ).toBe(true)
    })

    it('should have a head prop', () => {
      expect(
        shallow(<Row head />)
          .find('.row')
          .hasClass('rowHead'),
      ).toBe(true)
    })

    it('should have a verticalCenter prop', () => {
      expect(
        shallow(<Row verticalCenter />)
          .find('.row')
          .hasClass('rowVerticalCenter'),
      ).toBe(true)
    })

    it('should have a size prop', () => {
      expect(
        shallow(<Row size="l" />)
          .find('.row')
          .hasClass('rowSize-l'),
      ).toBe(true)
    })

    describe('Linked Rows', () => {
      const row1 = shallow(<Row id={0} length={3} />)
      const row2 = shallow(<Row id={1} length={3} />)
      const row3 = shallow(<Row id={2} length={3} />)

      it('should not be a linked row if `id` and `length` are not specified', () => {
        const row = shallow(<Row />)
        expect(row.find('.row').hasClass('rowStart')).toBe(false)
        expect(row.find('.row').hasClass('rowEnd')).toBe(false)
        expect(row.find('.rowSpacer').exists()).toBe(true)
      })

      it('should have a class rowStart except the last one', () => {
        expect(row1.find('.row').hasClass('rowStart')).toBe(true)
        expect(row2.find('.row').hasClass('rowStart')).toBe(true)
        expect(row3.find('.row').hasClass('rowStart')).toBe(false)
      })

      it('should have a class rowEnd expect the first one', () => {
        expect(row1.find('.row').hasClass('rowEnd')).toBe(false)
        expect(row2.find('.row').hasClass('rowEnd')).toBe(true)
        expect(row3.find('.row').hasClass('rowEnd')).toBe(true)
      })

      it('should have a rowSpacer only at the end', () => {
        expect(row1.find('.rowSpacer').exists()).toBe(false)
        expect(row2.find('.rowSpacer').exists()).toBe(false)
        expect(row3.find('.rowSpacer').exists()).toBe(true)
      })
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
