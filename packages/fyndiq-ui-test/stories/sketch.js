import React from 'react'
import { storiesOf } from '@storybook/react'
import Button, { Wrapper } from 'fyndiq-component-button'
import Checkbox from 'fyndiq-component-checkbox'
import { Message } from 'fyndiq-component-message'
import * as Icons from 'fyndiq-icons'
import FyndiqLogo, { Square } from 'fyndiq-component-brand'
import Input, { Presets, SearchInput } from 'fyndiq-component-input'
import { LayoutDetails, Price, Tags } from 'fyndiq-component-article'
import Dropdown from 'fyndiq-component-dropdown'
import Loader from 'fyndiq-component-loader'
import colors from 'fyndiq-styles-colors'

import { version } from '../package'

const allIcons = Object.keys(Icons)
  .map(name => ({
    [`Icons/${name}`]: React.createElement(Icons[name]),
  }))
  .reduce((a, b) => ({ ...a, ...b }), {})

const symbols = {
  'Button/default/default': <Button>Button</Button>,
  'Button/default/medium': <Button size="m">Button</Button>,
  'Button/default/large': <Button size="l">Button</Button>,
  'Button/primary/default': <Button type="primary">Button</Button>,
  'Button/primary/medium': (
    <Button type="primary" size="m">
      Button
    </Button>
  ),
  'Button/primary/large': (
    <Button type="primary" size="l">
      Button
    </Button>
  ),
  'Button/secondary/default': <Button type="secondary">Button</Button>,
  'Button/secondary/medium': (
    <Button type="secondary" size="m">
      Button
    </Button>
  ),
  'Button/secondary/large': (
    <Button type="secondary" size="l">
      Button
    </Button>
  ),
  'Button/cancel/default': <Button type="cancel">Button</Button>,
  'Button/cancel/medium': (
    <Button type="cancel" size="m">
      Button
    </Button>
  ),
  'Button/cancel/large': (
    <Button type="cancel" size="l">
      Button
    </Button>
  ),
  'Button/white/default': <Button type="white">Button</Button>,
  'Button/white/medium': (
    <Button type="white" size="m">
      Button
    </Button>
  ),
  'Button/white/large': (
    <Button type="white" size="l">
      Button
    </Button>
  ),
  'Button/ghost/default': <Button type="ghost">Button</Button>,
  'Button/ghost/medium': (
    <Button type="ghost" size="m">
      Button
    </Button>
  ),
  'Button/ghost/large': (
    <Button type="ghost" size="l">
      Button
    </Button>
  ),
  'Button/disabled/default': <Button disabled>Button</Button>,
  'Button/disabled/medium': (
    <Button disabled size="m">
      Button
    </Button>
  ),
  'Button/disabled/large': (
    <Button disabled size="l">
      Button
    </Button>
  ),
  'Checkbox/unchecked': <Checkbox frame>Label</Checkbox>,
  'Checkbox/checked': (
    <Checkbox checked frame>
      Label
    </Checkbox>
  ),
  'Message/confirm': (
    <Message type="confirm" icon={<Icons.Checkmark />}>
      This is fantastic!
    </Message>
  ),
  'Message/info': (
    <Message icon={<Icons.Truck />}>This is an info message</Message>
  ),
  'Message/warn': (
    <Message type="warn" icon={<Icons.Warning />}>
      This is a warning message
    </Message>
  ),
  'Message/error': (
    <Message type="error" icon={<Icons.Error />}>
      This is an error message
    </Message>
  ),
  'Article/Layouts/Details': (
    <LayoutDetails
      title="My Article Title"
      description="The description of my article. It is pretty rad so make sure to check it out"
      images={[
        'https://media.fyndiq.se/product/6b/7c/68/4584dd29bb8497aae24390c47ee5170efd/original.png',
        'https://media.fyndiq.se/product/6e/6c/62/575c9d4567e8fd6fc645177fedf05a6139/original.png',
        'https://media.fyndiq.se/product/e1/4e/d1/24a50438906652961a5a3950695e1f9756/original.png',
        'https://media.fyndiq.se/product/65/4e/67/e30d1c9dd097dab30078ed1fa7d080a4a8/original.png',
      ]}
      price={<Price oldPrice="$230">$150</Price>}
      tags={['Awesomeness', 'Pretty good product']}
    />
  ),
  'Article/Price/Default': <Price>199kr</Price>,
  'Article/Price/With old price': <Price oldPrice="255kr">199kr</Price>,
  'Article/Price/no-emphasize': (
    <Price oldPrice="255kr" emphasize={false}>
      199kr
    </Price>
  ),
  'Article/Tags/Tag': <Tags tags={['Product tag']} />,
  Dropdown: (
    <Dropdown button="Button" opened>
      <div style={{ padding: '8px 10px' }}>Content</div>
    </Dropdown>
  ),
  'Brand/Logo/Normal': <FyndiqLogo />,
  'Brand/Logo/Outline': <FyndiqLogo type="outline" />,
  'Brand/Logo/With Tagline': <FyndiqLogo>Fyndshopping online</FyndiqLogo>,
  'Brand/Logo square/Normal': <Square />,
  'Brand/Logo square/Outline': <Square type="outline" />,
  'Input/Default': <Input placeholder="placeholder" />,
  'Input/Presets': <Presets input={<Input placeholder="placeholder" />} />,
  'Input/Search': <SearchInput />,
  Loader: <Loader />,
  // 'Font test': (
  //   <React.Fragment>
  //     <span style={{ fontWeight: 300 }}>Thin</span>
  //     <span>Regular</span>
  //     <strong>Bold</strong>
  //     <em>Italic</em>
  //     <h1>Title h1</h1>
  //     <h2>Title h2</h2>
  //     <h3>Title h2</h3>
  //   </React.Fragment>
  // ),
  ...allIcons,
}

const Default = () => (
  <React.Fragment>
    <h1>Sketch exports</h1>
    <p>
      You can download here the most recent version of the Sketch exports.
      Sketch Plugin{' '}
      <a href="https://github.com/brainly/html-sketchapp/">
        <code>html-sketchapp</code>
      </a>{' '}
      is needed in order to open the provided files
    </p>
    <p>Keep in mind that it&apos;s still very buggy and experimental</p>
    <p>
      Current version: <strong>{version}</strong>
    </p>
    <Wrapper>
      <Button
        link="./sketch-export/page.asketch.json"
        size="l"
        type="secondary"
        pill
        download={`page-${version}.asketch.json`}
        style={{ textAlign: 'center' }}
      >
        <strong>Symbols File</strong>{' '}
        <em>
          <small>
            <code>500 kB</code>
          </small>
        </em>
        <br />
        <small>Contains all the symbols</small>
      </Button>
      <Button
        link="./sketch-export/document.asketch.json"
        size="l"
        type="secondary"
        pill
        download={`document-${version}.asketch.json`}
        style={{ textAlign: 'center' }}
      >
        <strong>Document File</strong>{' '}
        <em>
          <small>
            <code>20 kB</code>
          </small>
        </em>
        <br />
        <small>Contains color informations</small>
      </Button>
    </Wrapper>
  </React.Fragment>
)

storiesOf('💎 Sketch', module)
  .addWithInfo('default', () => <Default />)
  .addWithInfo('components', () => (
    <React.Fragment>
      {Object.keys(symbols).map(key => (
        <div key={key} style={{ margin: 10 }} data-sketchsymbol={key}>
          {symbols[key]}
        </div>
      ))}
      {Object.keys(colors).map(colorKey => (
        <div key={colorKey} data-sketchcolor={colors[colorKey]} />
      ))}
    </React.Fragment>
  ))
