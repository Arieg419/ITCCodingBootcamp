module.exports = {
  entry: './app.jsx',
  output: {
    path: __dirname,
    filename: './bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
            test: /\.jsx?$/,
            exclude: /(node_modules)/
      }
    ]
  }
};
