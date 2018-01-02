import React from 'react'
import PropTypes from 'prop-types'

import { Price, CurrentPrice, OldPrice } from 'fyndiq-component-price'

import Description from './description'
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

      <Description>{description}</Description>
    </div>
  </div>
)

ProductDetails.propTypes = {
  className: PropTypes.string,
  images: PropTypes.oneOfType([
    Images.propTypes.images, // eslint-disable-line react/no-typos
    PropTypes.element,
  ]),
  price: PropTypes.string,
  oldPrice: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.oneOfType([
    Description.propTypes.children, // eslint-disable-line react/no-typos
    PropTypes.element,
  ]),
  tags: PropTypes.oneOfType([
    Tags.propTypes.tags, // eslint-disable-line react/no-typos
    PropTypes.element,
  ]),
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
