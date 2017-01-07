#Express Monocle
###*A developer tool for debugging your server-side routes*

##Description 
Express Monocle forks the popular Node server library, express, and adds easy-to-use degugging functionality for developers.  You can track the changes to the request and response objects as they make their way through server routes in order to easily find out how and when the objects change.

We inject ES6 proxies into the request and response object constructors to easily track changes.

We also implemented an automatic debugging route to visualize those changes called '/debug' to see exactly what's going on.

**Screenshot of debugging route:**
![Express-Monocle](demo/readme-assets/Express-Monocle-screenshot.png)  

**Debug route like so:**
![Debug-route-code](demo/readme-assets/EM-debug-route.png)

**ES6 proxies added to the request and response object constructors like so:**
![Proxy-code](demo/readme-assets/EM-code-proxy.png)

##<a name="authors"></a>Authors  
[Cheng Ly](https://github.com/chengsieuly)  
[Travis Huff](https://github.com/travishuff)  
[Patrick Divine](https://github.com/pddivine)

#--Express--
[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

  Fast, unopinionated, minimalist web framework for [node](http://nodejs.org).

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Linux Build][travis-image]][travis-url]
  [![Windows Build][appveyor-image]][appveyor-url]
  [![Test Coverage][coveralls-image]][coveralls-url]

```js
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```

## Installation

```bash
$ npm install express
```

## Features

  * Robust routing
  * Focus on high performance
  * Super-high test coverage
  * HTTP helpers (redirection, caching, etc)
  * View system supporting 14+ template engines
  * Content negotiation
  * Executable for generating applications quickly

## Docs & Community

  * [Website and Documentation](http://expressjs.com/) - [[website repo](https://github.com/strongloop/expressjs.com)]
  * [#express](https://webchat.freenode.net/?channels=express) on freenode IRC
  * [Github Organization](https://github.com/expressjs) for Official Middleware & Modules
  * Visit the [Wiki](https://github.com/expressjs/express/wiki)
  * [Google Group](https://groups.google.com/group/express-js) for discussion
  * [Gitter](https://gitter.im/expressjs/express) for support and discussion
  * [Русскоязычная документация](http://jsman.ru/express/)

**PROTIP** Be sure to read [Migrating from 3.x to 4.x](https://github.com/expressjs/express/wiki/Migrating-from-3.x-to-4.x) as well as [New features in 4.x](https://github.com/expressjs/express/wiki/New-features-in-4.x).

###Security Issues

If you discover a security vulnerability in Express, please see [Security Policies and Procedures](Security.md).

## Quick Start

  The quickest way to get started with express is to utilize the executable [`express(1)`](https://github.com/expressjs/generator) to generate an application as shown below:

  Install the executable. The executable's major version will match Express's:

```bash
$ npm install -g express-generator@4
```

  Create the app:

```bash
$ express /tmp/foo && cd /tmp/foo
```

  Install dependencies:

```bash
$ npm install
```

  Start the server:

```bash
$ npm start
```

## Philosophy

  The Express philosophy is to provide small, robust tooling for HTTP servers, making
  it a great solution for single page applications, web sites, hybrids, or public
  HTTP APIs.

  Express does not force you to use any specific ORM or template engine. With support for over
  14 template engines via [Consolidate.js](https://github.com/tj/consolidate.js),
  you can quickly craft your perfect framework.

## Examples

  To view the examples, clone the Express repo and install the dependencies:

```bash
$ git clone git://github.com/expressjs/express.git --depth 1
$ cd express
$ npm install
```

  Then run whichever example you want:

```bash
$ node examples/content-negotiation
```

## Tests

  To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## People

The original author of Express is [TJ Holowaychuk](https://github.com/tj) [![TJ's Gratipay][gratipay-image-visionmedia]][gratipay-url-visionmedia]

The current lead maintainer is [Douglas Christopher Wilson](https://github.com/dougwilson) [![Doug's Gratipay][gratipay-image-dougwilson]][gratipay-url-dougwilson]

[List of all contributors](https://github.com/expressjs/express/graphs/contributors)

## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express.svg
[npm-url]: https://npmjs.org/package/express
[downloads-image]: https://img.shields.io/npm/dm/express.svg
[downloads-url]: https://npmjs.org/package/express
[travis-image]: https://img.shields.io/travis/expressjs/express/master.svg?label=linux
[travis-url]: https://travis-ci.org/expressjs/express
[appveyor-image]: https://img.shields.io/appveyor/ci/dougwilson/express/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/dougwilson/express
[coveralls-image]: https://img.shields.io/coveralls/expressjs/express/master.svg
[coveralls-url]: https://coveralls.io/r/expressjs/express?branch=master
[gratipay-image-visionmedia]: https://img.shields.io/gratipay/visionmedia.svg
[gratipay-url-visionmedia]: https://gratipay.com/visionmedia/
[gratipay-image-dougwilson]: https://img.shields.io/gratipay/dougwilson.svg
[gratipay-url-dougwilson]: https://gratipay.com/dougwilson/
