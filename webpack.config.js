const path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: ['babel-polyfill', 'whatwg-fetch', './src/app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
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
        loader: ExtractTextPlugin.extract('css!less'),
      }
    ]
  },
  
  watch: !isProduction,
  
  plugins: [
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
  
  devServer: {
    inline: true,
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true
  }
}