var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  var conf = sharedConfig();

  // conf.files = conf.files.concat([
  //  //test files
  //  './test/e2e/**/*.js'
  // ]);


  // in e2e tests we dont need files that are needed in unit testing
  conf.files = [
    './test/temp/scenarios.js'

  ];

  conf.proxies = {
    '/': 'http://localhost:8888/'
  };

  conf.urlRoot = '/__karma__/';

  conf.frameworks = ['ng-scenario'];

  config.set(conf);
};
