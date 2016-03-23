// Karma configuration
// Generated on Sat Mar 19 2016 17:59:35 GMT-0700 (PDT)

var path = require('path');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon'],


    // list of files / patterns to load in the browser
    files: [
      'test/*Spec.js',
      'test/**/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'test/*Spec.js': ['webpack', 'sourcemap'],
        'test/**/*Spec.js': ['webpack', 'sourcemap']
    },

    webpack: {
        devtool: 'inline-source-map',
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    exclude: path.resolve(__dirname, 'node_modules'),
                    loader: 'babel',
                    query: {
                        presets: ['es2015']
                    }
                },
                {
                    test: /\.json$/,
                    loader: 'json'
                }
            ]
        },
        externals: {
            'react/lib/ExecutionEnvironment': true,
            'react/lib/ReactContext': true
        }
    },

    webpackServer: {
        noInfo: true
    },

    plugins: [
        'karma-webpack',
        'karma-sourcemap-loader',
        'karma-phantomjs-launcher',
        'karma-chrome-launcher',
        'karma-mocha',
        'karma-sinon'
    ],

    babelPreprocessor: {
        options: {
            presets: ['es2015']
        }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
