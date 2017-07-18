const path = require('path')

module.exports = {
  module: {
    rules: [{
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader?importLoaders=1&sourceMap=true&modules=true',
        'less-loader',
      ],
    }, {
      test: /\.(eot|woff|woff2|ttf)$/,
      use: {
        loader: 'file-loader',
        query: {
          name: 'static/media/[name].[ext]',
        },
      },
    }],
  },
}
