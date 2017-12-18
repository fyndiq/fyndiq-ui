import React from 'react'
import { storiesOf } from '@storybook/react'
import * as icons from 'fyndiq-icons'
import colors from 'fyndiq-styles-colors'

import styles from './icons.css'

const iconsKeys = Object.keys(icons)

storiesOf('Icons', module)
  .addWithInfo('default', () => (
    <div className={styles.iconContainer}>
      {iconsKeys.map(key => (
        <div className={styles.iconItemWrapper}>
          {React.createElement(icons[key], { key, className: styles.iconItem })}
          <span className={styles.iconItemName}>{key}</span>
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
      React.createElement(icons[key], { key, className: styles.iconColor }),
    ),
  )
  .addWithInfo('Specials/Star', () => (
    <React.Fragment>
      <icons.Star />
      <icons.Star full={0.5} color="gold" colorEmpty={colors.border} />
    </React.Fragment>
  ))
  .addWithInfo('Specials/Arrow', () =>
    ['up', 'down', 'right', 'left'].map(orientation => (
      <icons.Arrow orientation={orientation} />
    )),
  )
