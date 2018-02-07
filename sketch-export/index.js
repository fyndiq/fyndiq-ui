const connect = require('connect')
const serverStatic = require('serve-static')

connect()
  .use(serverStatic('./'))
  .listen(6006, () => {
    // eslint-disable-next-line global-require
    require('./inject')
      .then(() => {
        process.exit()
      })
      .catch(e => {
        console.error(e)
        process.exit(1)
      })
  })
