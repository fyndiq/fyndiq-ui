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

storiesOf('Article/Images', module)
  .addWithInfo('default', () => (
    <div style={{ width: 500, padding: 20 }}>
      <Images
        title="Image titles"
        images={[
          'https://media.fyndiq.se/product/7c/7f/09/7c27e34d0a4a3f27234283f4a2b0f6e282/original.png',
          'https://media.fyndiq.se/product/36/1f/b1/54439446faa2f48570dbdf2a843eb8586d/original.png',
          'https://media.fyndiq.se/product/b3/a0/84/8a3a40aa9f614d053a2f67d6f8c63dbea3/original.png',
          'https://media.fyndiq.se/product/5d/6b/5a/2cde425cbd07881643e1818b7318ef1a78/original.png',
          'https://media.fyndiq.se/product/36/84/73/79ba9c29b4587d6caa59e3dd3fa9ab1063/original.png',
          'https://media.fyndiq.se/product/cb/ea/13/765cda297af3d9029d8df5e28202dfebdb/original.png',
        ]}
      />
    </div>
  ))
  .addWithInfo('without arrows', () => (
    <div style={{ width: 500, padding: 20 }}>
      <Images
        title="Image titles"
        noArrows
        images={[
          'https://media.fyndiq.se/product/7c/7f/09/7c27e34d0a4a3f27234283f4a2b0f6e282/original.png',
          'https://media.fyndiq.se/product/36/1f/b1/54439446faa2f48570dbdf2a843eb8586d/original.png',
          'https://media.fyndiq.se/product/b3/a0/84/8a3a40aa9f614d053a2f67d6f8c63dbea3/original.png',
          'https://media.fyndiq.se/product/5d/6b/5a/2cde425cbd07881643e1818b7318ef1a78/original.png',
          'https://media.fyndiq.se/product/36/84/73/79ba9c29b4587d6caa59e3dd3fa9ab1063/original.png',
          'https://media.fyndiq.se/product/cb/ea/13/765cda297af3d9029d8df5e28202dfebdb/original.png',
        ]}
      />
    </div>
  ))
  .addWithInfo('vertical thumbnails', () => (
    <div style={{ width: 700, padding: 20 }}>
      <Images
        title="Image titles"
        orientation="vertical"
        images={[
          'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fblog.emania.com.br%2Fcontent%2Fuploads%2F2015%2F09%2FASPECT_RATIO_04.png&f=1',
          'https://media.fyndiq.se/product/7c/7f/09/7c27e34d0a4a3f27234283f4a2b0f6e282/original.png',
          'https://media.fyndiq.se/product/36/1f/b1/54439446faa2f48570dbdf2a843eb8586d/original.png',
          'https://media.fyndiq.se/product/b3/a0/84/8a3a40aa9f614d053a2f67d6f8c63dbea3/original.png',
          'https://media.fyndiq.se/product/5d/6b/5a/2cde425cbd07881643e1818b7318ef1a78/original.png',
          'https://media.fyndiq.se/product/36/84/73/79ba9c29b4587d6caa59e3dd3fa9ab1063/original.png',
          'https://media.fyndiq.se/product/cb/ea/13/765cda297af3d9029d8df5e28202dfebdb/original.png',
        ]}
      />
    </div>
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
