import { configure, setAddon } from '@kadira/storybook'
import infoAddon from '@kadira/react-storybook-addon-info'
import styles from './styles.less'

function loadStories() {
  require('../stories')
  require('../stories/story-productcard')
  require('../stories/story-dropdown')
  require('../stories/story-checkbox')
}

setAddon(infoAddon)

configure(loadStories, module)
