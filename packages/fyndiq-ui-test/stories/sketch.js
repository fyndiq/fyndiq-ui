import React from 'react'
import { storiesOf } from '@storybook/react'
import Button, { Wrapper } from 'fyndiq-component-button'
import colors from 'fyndiq-styles-colors'
import { symbols, Symbols } from 'fyndiq-ui-sketch'

import { version } from '../package.json'

const Default = () => (
  <React.Fragment>
    <h1>Sketch exports</h1>
    <p>
      You can download here the most recent version of the Sketch exports.
      Sketch Plugin{' '}
      <a href="https://github.com/brainly/html-sketchapp/">
        <code>html-sketchapp</code>
      </a>{' '}
      is needed in order to open the provided files
    </p>
    <p>Keep in mind that it&apos;s still very buggy and experimental</p>
    <p>
      Current version: <strong>{version}</strong>
    </p>
    <Wrapper>
      <Button
        link="./sketch-export/page.asketch.json"
        size="l"
        type="secondary"
        pill
        download={`page-${version}.asketch.json`}
        style={{ textAlign: 'center' }}
      >
        <strong>Symbols File</strong>{' '}
        <em>
          <small>
            <code>500 kB</code>
          </small>
        </em>
        <br />
        <small>Contains all the symbols</small>
      </Button>
      <Button
        link="./sketch-export/document.asketch.json"
        size="l"
        type="secondary"
        pill
        download={`document-${version}.asketch.json`}
        style={{ textAlign: 'center' }}
      >
        <strong>Document File</strong>{' '}
        <em>
          <small>
            <code>20 kB</code>
          </small>
        </em>
        <br />
        <small>Contains color informations</small>
      </Button>
    </Wrapper>
  </React.Fragment>
)

storiesOf('💎 Sketch', module)
  .addWithInfo('default', () => <Default />)
  .addWithInfo('components', () => (
    <React.Fragment>
      <Symbols symbols={symbols} />
      {Object.keys(colors).map(colorKey => (
        <div key={colorKey} data-sketchcolor={colors[colorKey]} />
      ))}
    </React.Fragment>
  ))
