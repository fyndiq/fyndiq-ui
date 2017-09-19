const path = require('path')
const webpack = require('webpack')

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
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader?importLoaders=1&modules=true',
        {
          loader: require.resolve('postcss-loader'),
          options: {
            plugins: () => ([
              require('postcss-import'),
              require('postcss-cssnext'),
            ])
          }
        },
      ]
    }],
  },
  plugins: [
    // Ignore locales for momentJS
    // see http://stackoverflow.com/questions/25384360
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ]
}
