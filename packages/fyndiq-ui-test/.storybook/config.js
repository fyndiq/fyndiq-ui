import { configure, setAddon } from '@kadira/storybook'
import infoAddon from '@kadira/react-storybook-addon-info'

import './styles.less'

function loadStories() {
  /* eslint-disable global-require */
  require('../stories/component-button')
  require('../stories/component-dropdown')
  require('../stories/component-checkbox')
  require('../stories/component-stars')
  require('../stories/component-price')
  require('../stories/component-productcard')
  require('../stories/icon-brand')
}

setAddon(infoAddon)

configure(loadStories, module)
