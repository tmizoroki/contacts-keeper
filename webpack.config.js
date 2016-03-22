module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: {
    'cheerio': 'window',
    // 'react-dom': true,
    'react-dom/server': true,
    'react-addons-test-utils': true
  }
}
