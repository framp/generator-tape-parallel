# generator-tape-parallel [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Add straightforward testing via tape and parallel to your projects

## Installation

First, install [Yeoman](http://yeoman.io) and generator-tape-parallel using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-tape-parallel
```

Then navigate to your project (any directory which contains a `package.json` file):

```bash
cd your-project
yo tape-parallel
```

## Tape-Parallel
From zero to `npm test` in seconds!

This generator is installing [tape](https://github.com/substack/tape), [tape-catch](https://github.com/michaelrhodes/tape-catch) and [faucet](https://github.com/substack/faucet), giving you a nice and simple testing environment. 

To run a specific test just run `node test/test.js`.
To run all your tests in parallel just run `npm test`.

If you want to use another reporter instead of [faucet](https://github.com/substack/faucet) just use the `reporter` option:
```bash
yo tape-parallel --reporter tap-spec
```

## Suggested reads

 - [Why I use Tape Instead of Mocha & So Should You](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4)
 - [5 Questions Every Unit Test Must Answer](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d)

## License

MIT © [Federico Rampazzo &lt;frampone@gmail.com&gt;](http://framp.me)


[npm-image]: https://badge.fury.io/js/generator-tape-parallel.svg
[npm-url]: https://npmjs.org/package/generator-tape-parallel
[travis-image]: https://travis-ci.org/framp/generator-tape-parallel.svg?branch=master
[travis-url]: https://travis-ci.org/framp/generator-tape-parallel
[daviddm-image]: https://david-dm.org/framp/generator-tape-parallel.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/framp/generator-tape-parallel
[coveralls-image]: https://coveralls.io/repos/framp/generator-tape-parallel/badge.svg
[coveralls-url]: https://coveralls.io/r/framp/generator-tape-parallel
