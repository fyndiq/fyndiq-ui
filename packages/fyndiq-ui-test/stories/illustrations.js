import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  SearchIllustration,
  SearchNoResultIllustration,
  LoginIllustration,
} from 'fyndiq-illustrations'

const h2 = {
  color: '#666',
  fontSize: '15px',
  padding: '8px 10px',
  background: '#EEE',
  fontFamily: 'monospace',
}

storiesOf('Illustrations', module)
  .addWithInfo('search', () => (
    <div>
      <h2 style={h2}>
        {'<SearchIllustration />'}
      </h2>
      <SearchIllustration />

      <h2 style={h2}>
        {'<SearchNoResultIllustration />'}
      </h2>
      <SearchNoResultIllustration />
    </div>
  ))
  .addWithInfo('login', () => (
    <div>
      <h2 style={h2}>
        {'<LoginIllustration />'}
      </h2>
      <LoginIllustration />
    </div>
  ))
