import { configure, setAddon } from '@kadira/storybook'
import infoAddon from '@kadira/react-storybook-addon-info'

function loadStories() {
  /* eslint-disable global-require */
  require('../stories')
  require('../stories/story-dropdown')
  require('../stories/story-checkbox')
  require('../stories/story-stars')
  require('../stories/story-productcard')
}

setAddon(infoAddon)

configure(loadStories, module)
