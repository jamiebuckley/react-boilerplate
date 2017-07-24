module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    singleRun: true,
    files: [
      { pattern: 'src/test/**/*.js' }
    ],
    preprocessors: {
      'src/test/*.js': ['webpack'],
    },
    webpack: {
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }]
      },
      node: {
        fs: "empty"
      }
    },
    webpackMiddleware: {
      stats: 'errors-only'
    },
    reporters: ['mocha']
  });
};
