const glob = require('glob');

module.exports = {
  entry: glob.sync('./test/spec/**/*.js'),
  output: {
    path: './test/out',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-decorators-legacy', 'transform-class-properties', 'babel-plugin-espower']
        }
      },
      {
        test: /\.styl$/,
        loader: 'null-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', './client']
  },
  node: {
    "power-assert": "empty"
  }
};
