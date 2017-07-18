import React from 'react'
import { storiesOf } from '@kadira/storybook'
import moment from 'moment'
import ProductListItem, { Wrapper } from 'fyndiq-component-productlist'

const productList = [
  <ProductListItem
    key="1"
    title="LED Lamp - 1000 Lumens"
    price="$24"
    oldPrice="$29"
    imageUrl="https://media.fyndiq.se/product/4c/c8/c0/128569693ffe98c9dcd1d07a100cf6f607/original.png"
    shopUrl="https://fyndiq.se/product/8159035"
    rating={4.5}
    category="LED Lamps"
    uploadDate={moment().subtract(4, 'days').toDate()}
  />,
  <ProductListItem
    key="2"
    title="Pink flamingo inflatable mattress"
    price="$39"
    oldPrice="$59"
    imageUrl="https://media.fyndiq.se/product/b1/3b/90/30209761604354deb1c24c6a833a595a79/original.png"
    shopUrl="https://fyndiq.se/product/8600762"
    dealType="weekly"
    category="Mattresses"
    brand="Pink Flamingo Corp."
    uploadDate={moment().subtract(60, 'days').toDate()}
  />,
  <ProductListItem
    key="3"
    title="Child-proof scissors"
    price="$35"
    imageUrl="https://media.fyndiq.se/product/4c/60/98/af14ef7e16629dedc5f2c1300598a74707/original.png"
    shopUrl="https://fyndiq.se/product/1459969"
    rating={3}
    uploadDate={moment().subtract(700, 'days').toDate()}
    showYours
  />,
]

storiesOf('Product List', module)
  .addWithInfo('default', () => (
    <ProductListItem
      title="LED Lamp - 1000 Lumens"
      price="$24"
      oldPrice="$29"
      imageUrl="https://media.fyndiq.se/product/4c/c8/c0/128569693ffe98c9dcd1d07a100cf6f607/original.png"
      rating={4.5}
    />
  ))
  .addWithInfo('with open card', () => (
    <ProductListItem
      title="Pink flamingo inflatable mattress"
      price="$39"
      oldPrice="$59"
      imageUrl="https://media.fyndiq.se/product/b1/3b/90/30209761604354deb1c24c6a833a595a79/original.png"
      shopUrl="https://fyndiq.se/product/8600762"
      dealType="weekly"
      category="Mattresses"
      brand="Pink Flamingo Corp."
      uploadDate={moment().subtract(20, 'days').toDate()}
      open
    />
  ))
  .addWithInfo('interactive', () => (
    <Wrapper>
      {productList}
    </Wrapper>
  ))
  .addWithInfo('interactive with multiple product open', () => (
    <Wrapper openMultiples>
      {productList}
    </Wrapper>
  ))
