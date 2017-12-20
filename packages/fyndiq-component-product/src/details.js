import React from 'react'
import PropTypes from 'prop-types'

import { Price, CurrentPrice, OldPrice } from 'fyndiq-component-price'

import Images from './images'
import Tags from './tags'

import styles from '../product-details.css'

const ProductDetails = ({
  className,
  title,
  images,
  description,
  price,
  oldPrice,
  tags,
}) => (
  <div className={`${styles.wrapper} ${className}`}>
    {Array.isArray(images) ? (
      <Images images={images} title={title} />
    ) : (
      { images }
    )}

    <div className={styles.info}>
      <Price>
        <CurrentPrice>{price}</CurrentPrice>
        <OldPrice>{oldPrice}</OldPrice>
      </Price>

      <h3 className={styles.title}>{title}</h3>

      {Array.isArray(tags) ? <Tags tags={tags} /> : { tags }}

      <p className={styles.description}>{description}</p>
    </div>
  </div>
)

ProductDetails.propTypes = {
  className: PropTypes.string,
  images: PropTypes.oneOfType(Images.propTypes.images, PropTypes.element),
  price: PropTypes.string,
  oldPrice: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.oneOfType(Tags.propTypes.tags, PropTypes.element),
}

ProductDetails.defaultProps = {
  className: '',
  images: null,
  title: '',
  description: '',
  price: null,
  oldPrice: null,
  tags: null,
}

export default ProductDetails
