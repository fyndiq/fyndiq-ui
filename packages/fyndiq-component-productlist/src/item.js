import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Stars from 'fyndiq-component-stars'
import { Price, CurrentPrice, OldPrice } from 'fyndiq-component-price'

import styles from '../styles.css'

class ProductListItem extends React.Component {
  static propTypes = {
    category: PropTypes.string,
    brand: PropTypes.string,
    dealType: PropTypes.oneOf(['weekly', 'daily']),
    imageUrl: PropTypes.string.isRequired,
    oldPrice: PropTypes.string,
    price: PropTypes.string.isRequired,
    rating: Stars.propTypes.rating,
    shopUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    uploadDate: PropTypes.instanceOf(Date),
    additionnalData: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.node,
    })),
    interactive: PropTypes.bool,
    open: PropTypes.bool,
    showOldPrice: PropTypes.bool,
    showYours: PropTypes.bool,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    category: null,
    brand: null,
    dealType: null,
    shopUrl: null,
    oldPrice: null,
    rating: null,
    uploadDate: null,
    additionnalData: [],
    interactive: false,
    open: false,
    showOldPrice: true,
    showYours: false,
    onClick: noop => noop,
  }

  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    if (!this.props.interactive) return

    if (this.props.open) {
      this.nodeWrapper.blur()
    }

    this.props.onClick()
  }

  render() {
    const {
      category,
      brand,
      imageUrl,
      price,
      oldPrice,
      showOldPrice,
      title,
      rating,
      dealType,
      shopUrl,
      uploadDate,
      additionnalData,
      interactive,
      open,
      showYours,
    } = this.props

    const interactiveProps = !interactive ? {} : ({
      role: 'button',
      tabIndex: '0',
    })

    return (
      <div
        className={`
          ${styles.wrapper}
          ${interactive ? styles.wrapperInteractive : ''}
          ${open ? styles.wrapperOpen : ''}
        `}
        onClick={this.onClick}
        onKeyPress={this.onClick}
        ref={e => { this.nodeWrapper = e }}
        {...interactiveProps}
      >
        <div className={styles.firstLine}>
          <div className={styles.imgWrapper}>
            <img
              className={styles.img}
              src={imageUrl}
              alt={title}
            />
          </div>
          <div className={styles.mainContent}>
            <div>
              {showYours && (
                <span className={styles.yours}>Your product</span>
              )}
              <h3 className={styles.title}>{title}</h3>
              {dealType && (
                <span
                  className={`
                    ${styles.deal}
                    ${styles[`deal--${dealType}`]}
                  `}
                >
                  {dealType} deal
                </span>
              )}
            </div>

            {rating && <Stars rating={rating} />}

            <div className={styles.onlyOpen}>
              <a
                className={styles.shopLink}
                href={shopUrl}
                // Don't call the onClick event on the wrapper
                onClick={e => e.stopPropagation()}
              >
                View on site
              </a>
            </div>
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
        <div className={styles.onlyOpen}>
          <ul className={styles.labelsWrapper}>
            {category && (
              <li className={styles.labelWrapper}>
                <span className={styles.label}>
                  Category
                </span>
                <strong className={styles.labelValue}>
                  {category}
                </strong>
              </li>
            )}
            {brand && (
              <li className={styles.labelWrapper}>
                <span className={styles.label}>
                  Brand
                </span>
                <strong className={styles.labelValue}>
                  {brand}
                </strong>
              </li>
            )}
            <li className={styles.labelWrapper}>
              <span className={styles.label}>
                Uploaded
              </span>
              <strong className={styles.labelValue}>
                <time
                  dateTime={moment(uploadDate).format('YYYY-MM-DDTHH:mm')}
                  title={moment(uploadDate).format('YYYY-MM-DD')}
                >
                  {moment(uploadDate).fromNow()}
                </time>
              </strong>
            </li>
            {additionnalData && additionnalData.map(({ label, value }) => (
              <li key={label} className={styles.labelWrapper}>
                <span className={styles.label}>
                  {label}
                </span>
                <strong className={styles.labelValue}>
                  {value}
                </strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default ProductListItem
