import React from 'react'
import { Price, CurrentPrice } from 'fyndiq-component-price'
import styles from '../styles.less'

const Productcard = ({ price, title, url }) => (
  <div>
    <img src={ url }/>
    <Price>
      <CurrentPrice>{ price }</CurrentPrice>
    </Price>
    <h3>{ title }</h3>
  </div>
)

export default Productcard
