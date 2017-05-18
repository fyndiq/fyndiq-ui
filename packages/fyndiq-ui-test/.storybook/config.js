import { configure, setAddon } from '@kadira/storybook'
import infoAddon from '@kadira/react-storybook-addon-info'

// Bootstrap standard fonts

import 'fyndiq-styles-fonts/bootstrap.less'

function loadStories() {
  /* eslint-disable global-require */
  require('../stories/component-button')
  require('../stories/component-dropdown')
  require('../stories/component-checkbox')
  require('../stories/component-stars')
  require('../stories/component-price')
  require('../stories/component-productcard')
  require('../stories/component-alert')
  require('../stories/icon-brand')
  require('../stories/icon-loader')
}

setAddon(infoAddon)

configure(loadStories, module)
