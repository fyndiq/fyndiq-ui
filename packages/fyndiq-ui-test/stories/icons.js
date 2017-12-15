import React from 'react'
import { storiesOf } from '@storybook/react'
import * as icons from 'fyndiq-icons'

const iconsKeys = Object.keys(icons)

storiesOf('Icons', module)
  .addWithInfo('default', () => (
    <div className="icon-container">
      {iconsKeys.map(key => (
        <div className="icon-item-wrapper">
          {React.createElement(icons[key], { key, className: 'icon-item' })}
          <span className="icon-item-name">{key}</span>
        </div>
      ))}
    </div>
  ))
  .addWithInfo('change color', () =>
    iconsKeys.map(key =>
      React.createElement(icons[key], { key, color: 'red' }),
    ),
  )
  .addWithInfo('change color with CSS', () =>
    iconsKeys.map(key =>
      React.createElement(icons[key], { key, className: 'icon-color' }),
    ),
  )
