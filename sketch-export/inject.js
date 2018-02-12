const puppeteer = require('puppeteer')
const fs = require('fs')
const path = require('path')

const url =
  'http://localhost:6006/iframe.html?selectedKind=Sketch&selectedStory=components'
const outputPageFile = './page.asketch.json'
const outputDocumentFile = './document.asketch.json'

module.exports = puppeteer.launch().then(async browser => {
  const page = await browser.newPage()

  await page.setViewport({ width: 1200, height: 600 })

  // Cancel webpack's HMR websocket
  await page.setRequestInterception(true)
  page.on('request', interceptedRequest => {
    if (interceptedRequest.url().endsWith('__webpack_hmr')) {
      interceptedRequest.abort()
    } else {
      interceptedRequest.continue()
    }
  })

  await page.goto(url, {
    waitUntil: 'networkidle0',
  })

  await page.addScriptTag({
    path: './sketch-export/build/page2layers.bundle.js',
  })

  // JSON.parse + JSON.stringify hack is only needed until
  // https://github.com/GoogleChrome/puppeteer/issues/1510 is fixed
  const asketchPageJSONString = await page.evaluate(`
    page2layers
      .run()
      .then(result => JSON.stringify(result))
  `)
  const asketchDocumentJSONString = await page.evaluate(`
    page2layers
      .getASketchDocument()
      .then(result => JSON.stringify(result))
  `)

  fs.writeFileSync(
    path.resolve(__dirname, outputPageFile),
    asketchPageJSONString,
  )
  fs.writeFileSync(
    path.resolve(__dirname, outputDocumentFile),
    asketchDocumentJSONString,
  )

  browser.close()
})
