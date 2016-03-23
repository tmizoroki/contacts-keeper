var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server',
  'bootstrap-loader',
  "./src/main.js",
  ],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, 'public'),
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/, 
        include: [
          path.resolve(__dirname, 'styles')
        ],
        loader: 'style-loader!css-loader'
      },
      { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports?jQuery=jquery' },
      { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
      { test: /\.(ttf|eot)$/, loader: 'file' }
    ]
  },
  externals: {
    'cheerio': 'window',
    // 'react-dom': true,
    'react-dom/server': true,
    'react-addons-test-utils': true
  }
}
