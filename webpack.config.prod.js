const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  mode: 'production',
  plugins: [
    new ExtractTextPlugin({
      filename: '[name]-styles.css'
    })
  ],
  module: {
    rules: [
      {
        test: /(\.css)$/,
        loader: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [autoprefixer];
                }
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [autoprefixer];
                }
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  }
});
