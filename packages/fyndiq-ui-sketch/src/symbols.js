import React from 'react'

import Button from 'fyndiq-component-button'
import Checkbox from 'fyndiq-component-checkbox'
import { Message } from 'fyndiq-component-message'
import * as Icons from 'fyndiq-icons'
import FyndiqLogo, { Square } from 'fyndiq-component-brand'
import Input, { Presets, SearchInput } from 'fyndiq-component-input'
import { LayoutDetails, Price, Tags } from 'fyndiq-component-article'
import Dropdown from 'fyndiq-component-dropdown'
import Loader from 'fyndiq-component-loader'

/* eslint-disable react/prop-types */

const allIcons = Object.keys(Icons)
  .map(name => ({
    [`Icons/${name}`]: React.createElement(Icons[name]),
  }))
  .reduce((a, b) => ({ ...a, ...b }), {})

const SketchButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
)

SketchButton.defaultProps = {
  children: 'Button',
}

export default {
  'Button/default/default': <SketchButton />,
  'Button/default/medium': <SketchButton size="m" />,
  'Button/default/large': <SketchButton size="l" />,
  'Button/primary/default': <SketchButton type="primary" />,
  'Button/primary/medium': <SketchButton type="primary" size="m" />,
  'Button/primary/large': <SketchButton type="primary" size="l" />,
  'Button/secondary/default': <SketchButton type="secondary" />,
  'Button/secondary/medium': <SketchButton type="secondary" size="m" />,
  'Button/secondary/large': <SketchButton type="secondary" size="l" />,
  'Button/cancel/default': <SketchButton type="cancel" />,
  'Button/cancel/medium': <SketchButton type="cancel" size="m" />,
  'Button/cancel/large': <SketchButton type="cancel" size="l" />,
  'Button/white/default': <SketchButton type="white" />,
  'Button/white/medium': <SketchButton type="white" size="m" />,
  'Button/white/large': <SketchButton type="white" size="l" />,
  'Button/ghost/default': <SketchButton type="ghost" />,
  'Button/ghost/medium': <SketchButton type="ghost" size="m" />,
  'Button/ghost/large': <SketchButton type="ghost" size="l" />,
  'Button/disabled/default': <SketchButton disabled />,
  'Button/disabled/medium': <SketchButton disabled size="m" />,
  'Button/disabled/large': <SketchButton disabled size="l" />,

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
  ...allIcons,
}
