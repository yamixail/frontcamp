const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', 'whatwg-fetch', './src/app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/frontcamp/dist/',
    filename: 'bundle.js',
  },
  
  module: {
    loaders: [
      {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel',
      },
      {
        test: /\.less$/,
        include: /assets/,
        loader: ExtractTextPlugin.extract('css!less'),
      },
      {
        test: /\.less$/,
        exclude: /assets/,
        loader: 'style-loader!css-loader!less-loader' //ExtractTextPlugin.extract('style!css!less'),
      }
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: path.join(__dirname, 'template.html'),
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        dead_code: true,
      },
      output: { comments: false },
    }),
  ],
  
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
}