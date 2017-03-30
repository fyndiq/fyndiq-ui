import React from 'react'
import { Price, CurrentPrice, OldPrice } from 'fyndiq-component-price'
import styles from '../styles.less'

const Productcard = ({ price, title, url, oldprice }) => (
  <div className={ styles.card }>
    <img className={ styles.image} src={ url }/>
    <Price>
      <OldPrice>{ oldprice }</OldPrice>
      <CurrentPrice>{ price }</CurrentPrice>
    </Price>
    <h3 className={ styles.title }>{ title }</h3>
  </div>
)

export default Productcard
