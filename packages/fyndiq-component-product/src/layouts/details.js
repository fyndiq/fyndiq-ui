import React from 'react'
import PropTypes from 'prop-types'

import Description from '../description'
import Images from '../images'
import Price from '../price'
import Tags from '../tags'

import styles from '../../product-layout-details.css'

const ProductLayoutDetails = ({
  className,
  title,
  images,
  description,
  price,
  tags,
}) => (
  <div className={`${styles.wrapper} ${className}`}>
    {React.isValidElement(images) ? (
      // Inject alt prop to the Images component
      React.cloneElement(images, { alt: title })
    ) : (
      <Images images={images} alt={title} />
    )}

    <div className={styles.info}>
      {React.isValidElement(price) ? price : <Price>{price}</Price>}

      <h3 className={styles.title}>{title}</h3>

      {React.isValidElement(tags) ? tags : <Tags tags={tags} />}

      <Description>{description}</Description>
    </div>
  </div>
)

ProductLayoutDetails.propTypes = {
  className: PropTypes.string,
  images: PropTypes.oneOfType([
    Images.propTypes.images, // eslint-disable-line react/no-typos
    PropTypes.element,
  ]),
  price: PropTypes.oneOfType([
    Price.propTypes.children, // eslint-disable-line react/no-typos
    PropTypes.element,
  ]),
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

ProductLayoutDetails.defaultProps = {
  className: '',
  images: null,
  title: '',
  description: null,
  price: null,
  tags: null,
}

export default ProductLayoutDetails
