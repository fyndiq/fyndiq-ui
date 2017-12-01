import React from 'react'
import { storiesOf } from '@storybook/react'
import { Timeline, Event } from 'fyndiq-component-timeline'
import { Truck, Bag, Shop } from 'fyndiq-icons'

storiesOf('Timeline', module)
  .addWithInfo('default', () => (
    <Timeline>
      <Event icon={<Truck />}>Hello world</Event>
      <Event icon={<Shop />}>Hello world</Event>
      <Event icon={<Bag />}>Hello world</Event>
    </Timeline>
  ))
  .addWithInfo('color themes', () => (
    <Timeline type="black">
      <Event icon={<Truck />}>Hello world</Event>
      <Event icon={<Shop />}>Hello world</Event>
      <Event icon={<Bag />}>Hello world</Event>
    </Timeline>
  ))
