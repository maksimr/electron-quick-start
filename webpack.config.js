const nodeExternals = require('webpack-node-externals');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: './renderer.js',

  target: 'electron-renderer',
  externals: [nodeExternals()],
  output: {
    path: outputDir(),
    filename: 'build/renderer.js'
  },
  plugins: isDevServer() ? [new WriteFilePlugin()] : [],

  devServer: {
    contentBase: outputDir()
  }
};


function outputDir() {
  return require('path')
    .resolve(__dirname, './public');
}

function isDevServer() {
  return Boolean(process.argv.find(function(arg) {
    return arg.indexOf('webpack-dev-server') > -1;
  }));
}
