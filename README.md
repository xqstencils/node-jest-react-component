# Node Jest Server stencil
This is a stencil for basic server base on node and jest.

## Current Status:

[![Alpine 3.7](https://img.shields.io/badge/alpine-3.7-brightgreen.svg)]()
[![Nginx 1.14](https://img.shields.io/badge/nginx-1.14-brightgreen.svg)]()
[![License MIT](https://img.shields.io/badge/license-MIT-blue.svg)]()
[![Docker Pulls](https://img.shields.io/docker/pulls/xqstencils/node-jest-react-component.svg)](https://hub.docker.com/r/xqstencils/node-jest-react-component/)
[![Docker Stars](https://img.shields.io/docker/stars/xqstencils/node-jest-react-component.svg)](https://hub.docker.com/r/xqstencils/node-jest-react-component/)
[![Docker image](https://images.microbadger.com/badges/image/xqstencils/node-jest-react-component.svg)](https://microbadger.com/images/xqstencils/node-jest-react-component)
[![Build Status](https://circleci.com/gh/xqstencils/node-jest-react-component.svg?style=svg)](https://circleci.com/gh/xqstencils/node-jest-react-component)

## Features:

* Run the test and publish your package with ci.
* Support CircleCi for pipeline.
* Support ES7 & ES6 syntax.
* Support ESlint to check the code.
* Support Jest to test your code.
* Support Nsp to do security check for the dependencis.
* Support Build docker image and push to docker hub.
* Support Deploy app to Heroku.

## Development:

### Setup

Clone this stencil and replace `@xq-stencil/node-jest-react-component` with your package name.

```
$> git clone git@github.com:xqstencils/node-jest-react-component.git
```

### Install dependencies

```
$> yarn install
```

### Compile code

```
$> yarn babel
# or run babel in watch mode
$> yarn babel:watch
```

### Generate distribution code

```
$> yarn build
```

### Linting

```
$> yarn lint
```

### Testing

```
$> yarn test
# or run the test in watch mode
$> yarn test:watch
```

### Security check

```
$> yarn security:check
```

### Setup CI

* Update the circleci config
* Setup the ci into circleci site.


### Start in local

```
$> yarn start
```

## License

node-jest-react-component is released under the [MIT license](https://github.com/xqstencils/node-jest-react-component/blob/master/LICENSE).
