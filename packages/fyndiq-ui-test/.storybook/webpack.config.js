const path = require('path')
const webpack = require('webpack')

module.exports = {
  module: {
    loaders: [{
      test: /\.less$/,
      loaders: [
        'style-loader',
        'css-loader?importLoaders=1&sourceMap=true&modules=true',
        'less-loader',
      ],
    }, {
      test: /\.(eot|woff|woff2|ttf)$/,
      loader: 'file-loader',
      query: {
        name: 'static/media/[name].[ext]',
      },
    }],
  },
  plugins: [
    // Ignore locales for momentJS
    // see http://stackoverflow.com/questions/25384360
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ]
}
