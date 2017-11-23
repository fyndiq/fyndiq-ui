import { configure, setAddon } from '@storybook/react'
import infoAddon from '@storybook/addon-info'

// Bootstrap standard fonts

import 'fyndiq-styles-fonts/bootstrap.css'
import './fyndiq-reset.css'

function loadStories() {
  /* eslint-disable global-require */
  require('../stories/component-button')
  require('../stories/component-dropdown')
  require('../stories/component-tooltip')
  require('../stories/component-checkbox')
  require('../stories/component-input')
  require('../stories/component-stars')
  require('../stories/component-message')
  require('../stories/component-modal')
  require('../stories/component-price')
  require('../stories/component-productcard')
  require('../stories/component-productlist')
  require('../stories/component-alert')
  require('../stories/component-brand')
  require('../stories/component-loader')
  require('../stories/component-table')
  require('../stories/illustrations')
}

setAddon(infoAddon)

configure(loadStories, module)
