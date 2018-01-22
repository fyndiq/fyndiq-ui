import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { Sidebar } from 'fyndiq-component-layout'
import { Bag, Shop } from 'fyndiq-icons'

storiesOf('Layout/Sidebar', module)
  .addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)
  .addWithInfo('default', () => (
    <Sidebar
      items={[
        {
          name: 'Bag',
          icon: <Bag />,
          to: '#bag',
        },
        {
          name: 'Shop',
          icon: <Shop />,
          to: '#shop',
        },
      ]}
    />
  ))
