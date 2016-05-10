module.exports = {
  entry: './client/app.js',
  output: {
    path: './out',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', './client']
  }
};