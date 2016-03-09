# <%= packageName %>

[![Latest Version on Packagist][ico-version]][link-packagist]
[![Software License][ico-license]](LICENSE.md)
[![Build Status][ico-travis]][link-travis]
[![Coverage Status][ico-scrutinizer]][link-scrutinizer]
[![Quality Score][ico-code-quality]][link-code-quality]
[![Total Downloads][ico-downloads]][link-downloads]

**Note:** Replace ```<%= authorName %>``` ```<%= authorUsername %>``` ```<%= authorWebsite %>``` ```<%= authorEmail %>``` ```<%= vendor %>``` ```<%= packageName %>``` ```<%= packageDescription %>``` with their correct values in [README.md](README.md), [CHANGELOG.md](CHANGELOG.md), [CONTRIBUTING.md](CONTRIBUTING.md), [LICENSE.md](LICENSE.md) and [composer.json](composer.json) files, then delete this line.

This is where your description should go. Try and limit it to a paragraph or two, and maybe throw in a mention of what
PSRs you support to avoid any confusion with users and contributors.

## Install

Via Composer

``` bash
$ composer require <%= vendor %>/<%= packageName %>
```

## Usage

``` php
$skeleton = new League\Skeleton();
echo $skeleton->echoPhrase('Hello, League!');
```

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Testing

``` bash
$ composer test
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CONDUCT](CONDUCT.md) for details.

## Security

If you discover any security related issues, please email <%= authorEmail %> instead of using the issue tracker.

## Credits

- [<%= authorName %>][link-author]
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[ico-version]: https://img.shields.io/packagist/v/<%= vendor %>/<%= packageName %>.svg?style=flat-square
[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/<%= vendor %>/<%= packageName %>/master.svg?style=flat-square
[ico-scrutinizer]: https://img.shields.io/scrutinizer/coverage/g/<%= vendor %>/<%= packageName %>.svg?style=flat-square
[ico-code-quality]: https://img.shields.io/scrutinizer/g/<%= vendor %>/<%= packageName %>.svg?style=flat-square
[ico-downloads]: https://img.shields.io/packagist/dt/<%= vendor %>/<%= packageName %>.svg?style=flat-square

[link-packagist]: https://packagist.org/packages/<%= vendor %>/<%= packageName %>
[link-travis]: https://travis-ci.org/<%= vendor %>/<%= packageName %>
[link-scrutinizer]: https://scrutinizer-ci.com/g/<%= vendor %>/<%= packageName %>/code-structure
[link-code-quality]: https://scrutinizer-ci.com/g/<%= vendor %>/<%= packageName %>
[link-downloads]: https://packagist.org/packages/<%= vendor %>/<%= packageName %>
[link-author]: https://github.com/<%= authorUsername %>
[link-contributors]: ../../contributors
