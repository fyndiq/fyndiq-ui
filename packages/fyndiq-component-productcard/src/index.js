import React from 'react'
import PropTypes from 'prop-types'
import { Price, CurrentPrice, OldPrice } from 'fyndiq-component-price'
import Stars from 'fyndiq-component-stars'
import styles from '../styles.css'

const Productcard = ({ price, title, url, oldprice, rating }) => (
  <div className={styles.card}>
    <img className={styles.image} src={url} alt={title} />
    <Price>
      {OldPrice ? <OldPrice>{oldprice}</OldPrice> : ''}
      <CurrentPrice>{price}</CurrentPrice>
    </Price>
    <h3 className={styles.title}>{title}</h3>
    {rating ? <Stars rating={rating} /> : ''}
  </div>
)

Productcard.propTypes = {
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  oldprice: PropTypes.string,
  rating: PropTypes.number,
}

Productcard.defaultProps = {
  oldprice: undefined,
  rating: undefined,
}

export default Productcard
