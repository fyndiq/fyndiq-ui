import Page from 'html-sketchapp/html2asketch/page'
import Document from 'html-sketchapp/html2asketch/document'
import SymbolMaster from 'html-sketchapp/html2asketch/symbolMaster'
import nodeToSketchLayers from 'html-sketchapp/html2asketch/nodeToSketchLayers'

// Total hack until html-sketchapp supports before and after pseudo elements
// GitHub Issue: https://github.com/brainly/html-sketchapp/issues/20
Array.from(document.querySelectorAll('[data-sketchsymbol] *')).forEach(el => {
  const elementBeforeStyles = window.getComputedStyle(el, ':before')
  const elementAfterStyles = window.getComputedStyle(el, ':after')
  const elementBeforeContent = elementBeforeStyles.content
  const elementAfterContent = elementAfterStyles.content

  if (elementBeforeContent) {
    const virtualBefore = document.createElement('span')

    virtualBefore.setAttribute('style', elementBeforeStyles.cssText)
    virtualBefore.innerHTML = elementBeforeStyles.content.split('"').join('')
    // el.classList.add(styles.beforeReset)
    el.prepend(virtualBefore)
  }

  if (elementAfterContent) {
    const virtualAfter = document.createElement('span')

    virtualAfter.setAttribute('style', elementAfterStyles.cssText)
    virtualAfter.innerHTML = elementAfterStyles.content.split('"').join('')
    // el.classList.add(styles.afterReset)
    el.appendChild(virtualAfter)
  }
})

const canvg = require('canvg-fixed')
// Hack to fix SVGS
Array.from(document.querySelectorAll('svg')).forEach(svg => {
  const style = window.getComputedStyle(svg)

  // Ensure cascading colours are transferred onto the SVG itself
  svg.setAttribute('fill', style.fill)
  svg.setAttribute('stroke', style.stroke)
  Array.from(svg.querySelectorAll('path')).forEach(path => {
    const pathStyle = window.getComputedStyle(path)

    path.setAttribute('fill', pathStyle.fill)
    path.setAttribute('stroke', pathStyle.stroke)
  })

  // Quadruple the SVG's size so we can maintain quality
  const scale = 4
  const width = parseInt(style.width) * scale
  const height = parseInt(style.height) * scale

  svg.style.width = `${width}px`
  svg.style.height = `${height}px`

  // Parse SVG to canvas
  const canvas = document.createElement('canvas')

  canvas.width = width
  canvas.height = height
  canvg(canvas, svg.outerHTML)

  // Replace original SVG with an image
  const img = new Image()

  img.src = canvas.toDataURL()
  img.classList = svg.classList
  img.style.width = `${width / scale}px`
  img.style.height = `${height / scale}px`
  svg.parentNode.replaceChild(img, svg)
})

export function run() {
  const page = new Page({
    width: document.body.offsetWidth,
    height: document.body.offsetHeight,
  })

  page.setName('Fyndiq Style Guide')

  const waitingForLayers = Array.from(
    document.querySelectorAll('[data-sketchsymbol]'),
  ).map(async item => {
    // Read name from data-sketchsymbol attribute
    const name = item.dataset.sketchsymbol
    const { left: x, top: y } = item.getBoundingClientRect()
    const symbol = new SymbolMaster({ x, y })

    symbol.setName(name)

    const parentAndChildren = [item, ...item.querySelectorAll('*')]

    const layerPromises = Array.from(parentAndChildren).map(async node => {
      const layers = await nodeToSketchLayers(node)

      return layers.map(layer => {
        // generate better layer name from node classes
        layer.setName(name)
        return layer
      })
    })

    const layers = await Promise.all(layerPromises)

    layers
      .reduce((prev, current) => prev.concat(current), [])
      .filter(layer => layer !== null)
      .forEach(layer => symbol.addLayer(layer))

    return symbol
  })

  return Promise.all(waitingForLayers).then(layers => {
    layers
      .reduce((prev, current) => prev.concat(current), []) // single node can produce multiple layers - concatenate them
      .forEach(layer => page.addLayer(layer))

    return page.toJSON()
  })
}

export function getASketchDocument() {
  const doc = new Document()

  Array.from(document.querySelectorAll('[data-sketchcolor]')).forEach(node => {
    doc.addColor(node.dataset.sketchcolor)
  })

  return Promise.resolve(doc.toJSON())
}
