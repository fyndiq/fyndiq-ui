import React from 'react'
import Stars from 'fyndiq-component-stars'
import { Price, CurrentPrice, OldPrice } from 'fyndiq-component-price'

import styles from '../styles.less'

class ProductListItem extends React.Component {
  static defaultProps = {
    showOldPrice: true,
  }

  render() {
    const {
      shopUrl,
      imageUrl,
      price,
      oldPrice,
      showOldPrice,
      title,
      rating,
      interactive,
      trendiness,
      popularity,
      open,
      onClick,
    } = this.props

    return (
      <div
        className={`
          ${styles.wrapper}
          ${interactive ? styles.wrapperInteractive : ''}
          ${open ? styles.wrapperOpen : ''}
        `}
        onClick={onClick}
        onKeyPress={onClick}
        role={interactive && 'button'}
        tabIndex={interactive && '0'}
      >
        <div className={styles.imgWrapper}>
          <img
            className={styles.img}
            src={imageUrl}
            alt={title}
          />
        </div>
        <div className={styles.mainContent}>
          <div>
            <h3 className={styles.title}>{title}</h3>
          </div>
          {rating && <Stars rating={rating} />}
          {open && (
            <div>
              <a className={styles.shopLink} href={shopUrl}>View on site</a>
              <ul>
                <li>Popularity: <strong>{Math.round(popularity * 10) / 10}</strong></li>
                <li>Trendiness: <strong>{Math.round(trendiness)}</strong></li>
              </ul>
            </div>
          )}
        </div>
        <div>
          <Price>
            <CurrentPrice>{price}</CurrentPrice>
            {showOldPrice && oldPrice && (
              <OldPrice>{oldPrice}</OldPrice>
            )}
          </Price>
        </div>
      </div>
    )
  }
}

export default ProductListItem
