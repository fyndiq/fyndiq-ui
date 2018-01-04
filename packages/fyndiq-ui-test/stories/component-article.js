import React from 'react'
import { storiesOf } from '@storybook/react'
import { Images, Tags, Price, LayoutDetails } from 'fyndiq-component-article'

storiesOf('Article/Layouts/Details', module).addWithInfo('default', () => (
  <LayoutDetails
    title="My Article Title"
    description="The description of my article. It is pretty rad so make sure to check it out"
    images={[
      'https://cdn.fyndiq.se/product/d1/de/26/2a08917d54bf6726e70441b86d86400d9e/original.png',
      'https://cdn.fyndiq.se/product/e8/74/3c/a1a451ba9af03f19e6bdd54890bd05b6ec/original.png',
    ]}
    price="$150"
    tags={['Awesomeness', 'Pretty good product']}
  />
))

storiesOf('Article/Images', module).addWithInfo('default', () => (
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

storiesOf('Article/Price', module)
  .addWithInfo('default', () => <Price>125kr</Price>)
  .addWithInfo('with old price', () => <Price oldPrice="155kr">125kr</Price>)
  .addWithInfo('no emphasize', () => (
    <Price oldPrice="155kr" emphasize={false}>
      125kr
    </Price>
  ))

storiesOf('Article/Tags', module).addWithInfo('default', () => (
  <Tags tags={['My awesome article', 'This tag is pretty good']} />
))
