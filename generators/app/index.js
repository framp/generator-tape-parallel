'use strict';
var generators = require('yeoman-generator');
var fs = require('fs');
var path = require('path');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
    this.option('reporter', {defaults: 'faucet'});
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath("**/*"),
      this.destinationPath(), {});
    var packageFile = path.join(this.destinationPath(), 'package.json');
    var packageContent = require(packageFile);
    packageContent.scripts = packageContent.scripts || {};
    packageContent.scripts.test = "find test -type f -iname '*.js' | " +
                                  "parallel -s 'node {} | " + this.options.reporter + "'";
    fs.writeFileSync(packageFile, JSON.stringify(packageContent, null, '\t'));
  },

  install: function () {
    this.npmInstall([
      'tape',
      'tape-catch',
      this.options.reporter,
      'parallel'
    ], {saveDev: true});
  }
});
