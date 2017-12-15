import React from 'react'
import { storiesOf } from '@storybook/react'
import { Images } from 'fyndiq-component-product'

storiesOf('Product/Images', module).addWithInfo('default', () => (
  <Images
    title="Image titles"
    images={[
      'https://cdn.fyndiq.se/product/d1/de/26/2a08917d54bf6726e70441b86d86400d9e/original.png',
      'https://cdn.fyndiq.se/product/e8/74/3c/a1a451ba9af03f19e6bdd54890bd05b6ec/original.png',
      'https://i.imgur.com/EYY92Oc.png',
      'https://i.imgur.com/h8ot4Qa.jpg',
    ]}
  />
))
