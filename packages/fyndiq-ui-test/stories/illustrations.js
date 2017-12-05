import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  FileUploadIllustration,
  LoginIllustration,
  SearchIllustration,
  SearchNoResultIllustration,
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
      <h2 style={h2}>&lt;SearchIllustration /&gt;</h2>
      <SearchIllustration />

      <h2 style={h2}>&lt;SearchNoResultIllustration /&gt;</h2>
      <SearchNoResultIllustration />
    </div>
  ))
  .addWithInfo('login', () => (
    <div>
      <h2 style={h2}>&lt;LoginIllustration /&gt;</h2>
      <LoginIllustration />
    </div>
  ))
  .addWithInfo('file', () => (
    <div>
      <h2 style={h2}>&lt;FileUploadIllustration /&gt;</h2>
      <FileUploadIllustration />
    </div>
  ))
