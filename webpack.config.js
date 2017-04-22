const nodeExternals = require('webpack-node-externals');
const WriteFilePlugin = require('write-file-webpack-plugin');
const ClosureCompilerPlugin = require('webpack-closure-compiler');

module.exports = {
  entry: './renderer.js',

  devtool: 'source-map',
  target: 'electron-renderer',
  externals: [nodeExternals()],
  output: {
    path: outputDir(),
    filename: 'build/renderer.js'
  },
  plugins: []
    .concat(isDevServer() ? [new WriteFilePlugin()] : [])
    .concat(isProduction() ? createClosureCompiler() : []),

  devServer: {
    contentBase: outputDir()
  }
};


function outputDir() {
  return require('path')
    .resolve(__dirname, './public');
}

function isProduction() {
  return process.env.NODE_ENV === 'production';
}

function isDevServer() {
  return Boolean(process.argv.find(function(arg) {
    return arg.indexOf('webpack-dev-server') > -1;
  }));
}

function createClosureCompiler() {

  // https://github.com/webpack/webpack/issues/2545
  // Use google closure compiler because
  // bundled with webpack Uglify doesn't support es6
  return new ClosureCompilerPlugin({
    compiler: {
      language_in: 'ECMASCRIPT6',
      language_out: 'ECMASCRIPT5',
      compilation_level: 'SIMPLE',
      create_source_map: true
    },
    concurrency: 3,
  });
}
