const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './renderer.js',

  target: 'electron-renderer',
  externals: [nodeExternals()],
  output: {
    path: outputDir(),
    filename: 'build/renderer.js'
  },

  devServer: {
    contentBase: outputDir()
  }
};


function outputDir() {
  return require('path')
    .resolve(__dirname, './public');
}
