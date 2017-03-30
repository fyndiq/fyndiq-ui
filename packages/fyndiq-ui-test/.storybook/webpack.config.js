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
    },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=fonts/[name]-[hash].[ext]'
      },
    ],
  },
}
