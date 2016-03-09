'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the awesome ' + chalk.red('generator-php-pacakage') + ' generator!'
    ));

    // Ask for all variable needed
    // :author_name :author_username :author_website :author_email
    // :vendor :package_name :package_description

    var prompts = [{
      type: 'input',
      name: 'authorName',
      message: 'Author name?',
      default: ''
    }, {
      type: 'input',
      name: 'authorUsername',
      message: 'Author username?',
      default: ''
    }, {
      type: 'input',
      name: 'authorWebsite',
      message: 'Author Website?',
      default: ''
    }, {
      type: 'input',
      name: 'authorEmail',
      message: 'Author Email?',
      default: ''
    }, {
      type: 'input',
      name: 'vendor',
      message: 'Vendor?',
      default: ''
    }, {
      type: 'input',
      name: 'packageName',
      message: 'Package name?',
      default: ''
    }, {
      type: 'input',
      name: 'packageDescription',
      message: 'Package description?',
      default: ''
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('./'),
      this.destinationPath('./'),
      this.props
    );
    this.fs.copy(
      this.templatePath('.editorconfig'),
      this.destinationPath('.editorconfig')
    );
    this.fs.copy(
      this.templatePath('.styleci.yml'),
      this.destinationPath('.styleci.yml')
    );
  },

  install: function () {

  }
});
