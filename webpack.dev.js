const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = require('./webpack.config.js');
const webpackDevConfig = webpackMerge(webpackConfig, {
  output: {
    publicPath: '/'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html'),
    }),
  ]
});

const compiler = webpack(webpackDevConfig);
const server = new WebpackDevServer(compiler, {
  inline: true,
  contentBase: 'dist/',
  historyApiFallback: true,

  hot: true,

  compress: true,

  clientLogLevel: 'info',
  // Control the console log messages shown in the browser when using inline mode. Can be `error`, `warning`, `info` or `none`.

  // webpack-dev-middleware options
  quiet: false,
  noInfo: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  // It's a required option.
  publicPath: '/',
  headers: { 'X-Custom-Header': 'yes' },
  stats: { colors: true }
});
server.listen(8080, 'localhost', function() {});

process.on('SIGINT', () => {
  log('Process interrupted');
  server.close()
  process.exit();
});
