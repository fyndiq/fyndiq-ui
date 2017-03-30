import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import Productcard from 'fyndiq-component-productcard'

storiesOf('Product card', module)
  .addWithInfo('Productcard', () => (
    <Productcard title="Vita Konstläder Sneakers - Ombloggade Street skor" price="149 kr" oldprice="499 kr" url="https://cdn.fyndiq.se/product/d1/de/26/2a08917d54bf6726e70441b86d86400d9e/original.png">
    </Productcard>
  ))
