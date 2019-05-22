const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
  const config = {
    entry: {
      app: ['./src/index.js']
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    }
  }

  if (options.mode === "development") {
    config.plugins = [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: 'Development',
        showErrors: true // 에러 브라우저에 노출
      })
    ];

    config.devtool = 'inline-source-map';

    config.devServer = {
      hot: true,
      host: '0.0.0.0',
      contentBase: './dist',
      stats: {
        color: true
      }
    };
  } else {
    // Production 설정
    config.plugins = [
      new CleanWebpackPlugin(['dist'])
    ];
  }

  return config;
}