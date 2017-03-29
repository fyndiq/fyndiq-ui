const path = require('path')

module.exports = {
  module: {
    loaders: [{
      test: /\.less$/,
      loaders: [
        'style-loader',
        'css-loader?importLoaders=1&sourceMap=true&modules=true',
        'less-loader',
      ],
    }],
  },
}
