import React from 'react'
import { storiesOf } from '@storybook/react'
import ProductDetails, { Images, Tags } from 'fyndiq-component-product'

storiesOf('Product/Details', module).addWithInfo('default', () => (
  <ProductDetails
    title="My Product Title"
    description="The description of my product. It is pretty rad so make sure to check it out"
    images={[
      'https://cdn.fyndiq.se/product/d1/de/26/2a08917d54bf6726e70441b86d86400d9e/original.png',
      'https://cdn.fyndiq.se/product/e8/74/3c/a1a451ba9af03f19e6bdd54890bd05b6ec/original.png',
    ]}
    price="$150"
    oldPrice="$220"
    tags={['Awesomeness', 'Pretty good product']}
  />
))

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

storiesOf('Product/Tags', module).addWithInfo('default', () => (
  <Tags tags={['My awesome product', 'This tag is pretty good']} />
))
