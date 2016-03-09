'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-php-pacakage:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        authorName: 'Xinjiang Shao',
        authorUsername: 'soleo',
        authorWebsite: 'http://xinjiangshao.com',
        authorEmail: 'shaoxinjiang at gmail dot com',
        vendor: 'Soleo',
        packageName: 'TestPackage',
        packageDescription: 'A Test Package Genterated By Yeoman.'
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      '.editorconfig',
      '.styleci.yml',
      'CHANGELOG.md',
      'composer.json',
      'CONDUCT.md',
      'CONTRIBUTING.md',
      'LICENSE.md',
      'README.md',
      'src/SkeletonClass.php'
    ]);
  });
});
