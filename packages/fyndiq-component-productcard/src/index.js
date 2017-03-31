import React from 'react'
import { Price, CurrentPrice, OldPrice } from 'fyndiq-component-price'
import Stars from 'fyndiq-component-stars'
import styles from '../styles.less'

const Productcard = ({ price, title, url, oldprice, rating }) => (
  <div className={styles.card}>
    <img className={styles.image} src={url} alt={title} />
    <Price>
      {OldPrice ? <OldPrice>{oldprice}</OldPrice> : '' }
      <CurrentPrice>{ price }</CurrentPrice>
    </Price>
    <h3 className={styles.title}>{title}</h3>
    {rating ? <Stars rating={rating} /> : ''}
  </div>
)

Productcard.propTypes = {
  price: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  oldprice: React.PropTypes.string,
  rating: React.PropTypes.number,
}

Productcard.defaultProps = {
  oldprice: undefined,
  rating: undefined,
}

export default Productcard
