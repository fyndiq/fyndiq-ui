import React from 'react'
import PropTypes from 'prop-types'

import styles from '../styles.css'

export class Wrapper extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    openMultiples: PropTypes.bool,
  }
  static defaultProps = {
    openMultiples: false,
  }

  constructor(props) {
    super(props)
    this.state = {
      openedProducts: [],
    }
  }

  toggleProduct(id) {
    this.setState(state => {
      let openedProducts = []
      // If the wrapper doesn't allow multiple products open at the same time,
      if (this.props.openMultiples) {
        const index = state.openedProducts.indexOf(id)

        if (index === -1) {
          // If the product was not open, add it to the list of opened products
          openedProducts = [...state.openedProducts, id]
        } else {
          // Otherwise, the product was already open, remove it from the array
          // Note: we use this array spread notation and the .slice() method
          // to guarantee immutability of the state.
          openedProducts = [
            ...state.openedProducts.slice(0, index),
            ...state.openedProducts.slice(index + 1),
          ]
        }
      } else if (state.openedProducts[0] !== id) {
        // If the first product is not the one clicked, then we open this
        // one and only this one.
        openedProducts = [id]
      }
      // No else : the default value [] is good

      return { openedProducts }
    })
  }

  render() {
    const { children } = this.props

    return (
      <div className={styles.listWrapper}>
        {/* Add some props to the childs */}
        {children.map((child, id) => React.cloneElement(child, {
          interactive: true,
          open: this.state.openedProducts.indexOf(id) !== -1,
          onClick: () => {
            // Toggle open this product
            this.toggleProduct(id)
            // Don't overwrite the products's onClick prop
            child.props.onClick()
          },
        }))}
      </div>
    )
  }
}
