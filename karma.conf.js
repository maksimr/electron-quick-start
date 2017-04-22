module.exports = function(config) {
  config.set({
    frameworks: ['electron-nodeIntegration', 'jasmine'],
    files: [
      {pattern: 'tests/**/*Spec.js', watched: false}
    ],
    preprocessors: {
      'tests/**/*Spec.js': ['webpack']
    },
    webpack: require('./webpack.config'),
    plugins: [
      'karma-*',
      require('@maksimr/karma-electron-launcher')],
    reporters: ['progress'],
    autoWatch: true,
    browsers: ['Electron'],
    singleRun: true,
    concurrency: Infinity
  })
};
