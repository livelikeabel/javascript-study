const webpack = require('webpack')
const path = require('path')

const extractCommons = new webpack.optimize.CommonsChunkPlugin({
  name: 'commons',
  filename: 'common.js'
})

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('[name].bundle.css')
const config = {
  context: path.resolve(__dirname, 'src'),
  entry: '.src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
	loader: 'babel-loader',
        options: {
	  presets: [
	    ['es2015', {modules: false}]
	  ]
        }
      }]
    }]
  }
}

module.exports = config
