// Enzyme configuration
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({
  adapter: new Adapter(),
})

// Simulate events on <body>
// Usage : global.simulate.click('body') for a click event
//         global.simulate.keyup({ keyCode: 27 }) for an escape key press.
global.simulate = {}
document.addEventListener = jest.fn((event, cb) => {
  global.simulate[event] = cb
})
document.removeEventListener = jest.fn((event, cb) => {
  if (global.simulate[event] === cb) {
    delete global.simulate[event]
  }
})
