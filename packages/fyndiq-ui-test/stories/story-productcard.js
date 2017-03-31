import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import Productcard from 'fyndiq-component-productcard'

storiesOf('Product card', module)

  .addDecorator((story) => (
    <div style={{backgroundColor: '#c4e5e9', padding: '1em'}}>
      {story()}
    </div>
  ))
  .addWithInfo('Regular card', () => (
    <Productcard
      title="Vita Konstläder Sneakers - Ombloggade Street skor"
      price="149 kr"
      url="https://cdn.fyndiq.se/product/d1/de/26/2a08917d54bf6726e70441b86d86400d9e/original.png"
    />
  ))
  .addWithInfo('With old price', () => (
    <Productcard
      title="Wheeler Taklampa Koppar"
      price="599 kr"
      oldprice="1390 kr"
      url="https://cdn.fyndiq.se/product/e8/74/3c/a1a451ba9af03f19e6bdd54890bd05b6ec/original.png"
    />
  ))
 .addWithInfo('With rating', () => (
    <Productcard
      title="Spirelli-Spagettiskärare för rawfood"
      price="199 kr"
      oldprice="399 kr"
      url= "https://cdn.fyndiq.se/product/f7/e7/ea/15f91dc30f5b264568c551a9842863d0c9/original.png"
      rating={4.4}
    />
  ))
