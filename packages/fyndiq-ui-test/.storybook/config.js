import { configure, setAddon } from '@kadira/storybook'
import infoAddon from '@kadira/react-storybook-addon-info'

function loadStories() {
  require('../stories')
  require('../stories/story-dropdown')
}

setAddon(infoAddon)

configure(loadStories, module)
