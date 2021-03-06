const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  entry: [
    './index.jsx'
  ],
  target: 'web',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  context: path.resolve(__dirname, 'app'),
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'components': path.resolve('./app', 'components'),
      'containers': path.resolve('./app', 'containers'),
      'utilities': path.resolve('./app', 'utilities'),
      'config': path.resolve('./app', 'config'),
      'types': path.resolve('./app', 'types'),
      'images': path.resolve('./app', 'images'),
      'services': path.resolve('./app', 'services'),
      'store': path.resolve('./app', 'store'),
      'styles': path.resolve('./app', 'styles'),
      'reduxContent': path.resolve('./app', 'reduxContent'),
    },
    modules: [
      path.join(__dirname, 'app'),
      path.join(__dirname, 'node_modules'),
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './app/index.tpl.html'),
      inject: 'body',
      hash: true,
      filename: 'index.html',
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'app'),
        loader: 'babel-loader'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=fonts/[hash].[ext]'
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader?name=fonts/[hash].[ext]&limit=5000'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?name=fonts/[hash].[ext]&limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?name=fonts/[hash].[ext]&limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.(jpe?g|png)$/,
        loader: 'url-loader?name=images/[hash].[ext]&limit=500'
      }
    ]
  }
};
