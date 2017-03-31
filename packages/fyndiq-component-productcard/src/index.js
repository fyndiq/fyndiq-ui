import React from 'react'
import { Price, CurrentPrice, OldPrice } from 'fyndiq-component-price'
import Stars from 'fyndiq-component-stars'
import styles from '../styles.less'

const Productcard = ({ price, title, url, oldprice, rating }) => (
  <div className={ styles.card }>
    <img className={ styles.image} src={ url }/>
    <Price>
      {OldPrice ? <OldPrice>{ oldprice }</OldPrice> : '' }
      <CurrentPrice>{ price }</CurrentPrice>
    </Price>
    <h3 className={ styles.title }>{ title }</h3>
    {rating ? <Stars rating={ rating }></Stars> : ''}
  </div>
)

export default Productcard
