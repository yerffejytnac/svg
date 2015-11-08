/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    autoprefixer: {
      browsers: ['last 2 versions'],
      cascade: false
    },
    dotEnv: {
      clientAllowedKeys: ['SECRET']
    }
  });
  return app.toTree();
};
