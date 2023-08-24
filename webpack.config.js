const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  experiments: {
    outputModule: true,
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'module'
    },
    clean: true,
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ],
  resolve: {
    fallback: {
      url: require.resolve('url/'),
      crypto: require.resolve('crypto-browserify'),
      util: require.resolve('util/'),
      buffer: require.resolve('buffer/'),
      stream: require.resolve('stream-browserify'),
      zlib: require.resolve('browserify-zlib'),
      https: require.resolve('https-browserify'),
      http: require.resolve('stream-http'),
      path: require.resolve('path-browserify'),
      assert: require.resolve('assert/'),
      fs: require.resolve('browserify-fs'),
      process: require.resolve('process/browser'),
    },
  },
};
