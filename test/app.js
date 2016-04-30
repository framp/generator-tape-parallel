'use strict';
var fs = require('fs-extra');
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-tape-parallel:app', function () {
  context('app', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/app'))
        .inTmpDir(function (dir) {
          fs.copySync(path.join(__dirname, './test-data'), dir);
        })
        .on('end', done);
    });
    it('copy files', function () {
      assert.file([
        'test/test.js'
      ]);
    });
    it('add test command to package.json', function () {
      var command = new RegExp("\"test\": \"find test -type f -iname '*.js' | parallel -s 'node {} | faucet\"");
      assert.fileContent('package.json', command);
    });
  });
});

process.on('unhandledRejection', function (error) {
  console.error('Unhandled Promise Rejection:');
  console.error(error && error.stack || error);
});
