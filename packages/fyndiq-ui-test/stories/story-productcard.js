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
    <Productcard title="Vita Konstläder Sneakers - Ombloggade Street skor" price="149 kr" url="https://cdn.fyndiq.se/product/d1/de/26/2a08917d54bf6726e70441b86d86400d9e/original.png" rating={ 4 }>
    </Productcard>
  ))
  .addWithInfo('With old price', () => (
    <Productcard 
      title="Wheeler Taklampa Koppar" 
      price="599 kr" 
      oldprice="1390 kr" 
      url="https://cdn.fyndiq.se/product/e8/74/3c/a1a451ba9af03f19e6bdd54890bd05b6ec/original.png"
      rating={ 4 }
    />
  ))
