// Mock a require call to .less files.
// This creates an object such as any call to one of its children returns
// the key itself:
// proxy.putWhateverYouWantHere === 'putWhateverYouWantHere'
const proxy = new Proxy({}, {
  get: (target, name) => name,
})

export default proxy
