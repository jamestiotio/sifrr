<h1 align="center"> <img src="./logo/sifrr-logo.svg" width="256" alt="sifrr" name="sifrr"> </h1>
<p align="center">
  <a href="https://github.com/sifrr/sifrr/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="GitHub license" /></a>
  <a href="https://circleci.com/gh/sifrr/sifrr"><img alt="CircleCI (all branches)" src="https://img.shields.io/circleci/project/github/sifrr/sifrr/master.svg?logo=circleci&style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@sifrr/dom"><img src="https://img.shields.io/npm/v/@sifrr/dom.svg?style=flat-square" alt="npm version" /></a>
  <a href="./misc/CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-Welcome-green.svg?style=flat-square" alt="PRs Welcome" /></a>
  <a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fsifrr%2Fsifrr?ref=badge_small" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsifrr%2Fsifrr.svg?type=small"/></a>
  <a href="https://coveralls.io/github/sifrr/sifrr?branch=master"><img src="https://img.shields.io/coveralls/github/sifrr/sifrr.svg?style=flat-square" alt="Coverage Status" /></a>
  <a href="https://dependabot.com/"><img src="https://badgen.net/badge/Dependabot/enabled/green?icon=dependabot" alt="Dependabot badge" /></a>
  <a href="https://codeclimate.com/github/sifrr/sifrr/maintainability"><img alt="Code Climate maintainability" src="https://img.shields.io/codeclimate/maintainability/sifrr/sifrr.svg?logo=code%20climate&style=flat-square" /></a>
</p>
<p align="center">
  <a href="https://sifrr.github.io/sifrr/">Documentation</a> | <a href="./CHANGELOG.md">Changelog</a> | <a href="./misc/CONTRIBUTORS">Contributors</a> | <a href="./misc/CONTRIBUTING.md">Contributing guidelines</a> | <a href="./misc/CODE_OF_CONDUCT.md">Code of Conduct</a>
</p>

---

> sifrr is a set of tiny, customizable, independent libraries for creating modern and fast webapps using JavaScript.

## Repository Info

This repository is a monorepo managed using yarn workspaces. This means there are [multiple packages](#packages) managed in this codebase, even though they are published to NPM as separate packages. They will always have same latest version and are released together.

## Packages

### Browser (VanillaJS)

| Package                                                        | Description                                                                                                    | NPM                                                                                                                         | Documentation                                                                                                                                  |                       Tests                       |
| :------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- | :-----------------------------------------------: |
| [sifrr-dom](./packages/browser/sifrr-dom/)                     | Small and :zap: Fast Library to build UIs with custom elements                                                 | [![npm version](https://img.shields.io/npm/v/@sifrr/dom.svg)](https://www.npmjs.com/package/@sifrr/dom)                     | [![Doscify](https://img.shields.io/badge/API%20docs-Docsify-red.svg)](https://sifrr.github.io/sifrr/#/./packages/browser/sifrr-dom/)           |      [OK](./packages/browser/sifrr-dom/test)      |
| [sifrr-fetch](./packages/browser/sifrr-fetch/)                 | Wrapper library for Browser fetch API can be used in node too                                                  | [![npm version](https://img.shields.io/npm/v/@sifrr/fetch.svg)](https://www.npmjs.com/package/@sifrr/fetch)                 | [![Doscify](https://img.shields.io/badge/API%20docs-Docsify-red.svg)](https://sifrr.github.io/sifrr/#/./packages/browser/sifrr-fetch/)         |     [OK](./packages/browser/sifrr-fetch/test)     |
| [sifrr-route](./packages/browser/sifrr-route/)                 | Routing for sifrr-dom                                                                                          | [![npm version](https://img.shields.io/npm/v/@sifrr/route.svg)](https://www.npmjs.com/package/@sifrr/route)                 | [![Doscify](https://img.shields.io/badge/API%20docs-Docsify-red.svg)](https://sifrr.github.io/sifrr/#/./packages/browser/sifrr-route/)         |     [OK](./packages/browser/sifrr-route/test)     |
| [sifrr-serviceworker](./packages/browser/sifrr-serviceworker/) | Service worker wrapper library                                                                                 | [![npm version](https://img.shields.io/npm/v/@sifrr/serviceworker.svg)](https://www.npmjs.com/package/@sifrr/serviceworker) | [![Doscify](https://img.shields.io/badge/API%20docs-Docsify-red.svg)](https://sifrr.github.io/sifrr/#/./packages/browser/sifrr-serviceworker/) | [OK](./packages/browser/sifrr-serviceworker/test) |
| [sifrr-storage](./packages/browser/sifrr-storage/)             | Browser persisted storage library (2kb alternate to [localforage](https://github.com/localForage/localForage)) | [![npm version](https://img.shields.io/npm/v/@sifrr/storage.svg)](https://www.npmjs.com/package/@sifrr/storage)             | [![Doscify](https://img.shields.io/badge/API%20docs-Docsify-red.svg)](https://sifrr.github.io/sifrr/#/./packages/browser/sifrr-storage/)       |    [OK](./packages/browser/sifrr-storage/test)    |

`sifrr-dom`, `sifrr-fetch`, `sifrr-serviceworker`, `sifrr-storage` can be used independently. `sifrr-route` is a `sifrr-dom` element, hence it should be used with `sifrr-dom`.

### Server (NodeJS)

| Package                                         | Description                                            | NPM                                                                                                           | Documentation                                                                                                                          |                   Tests                   |
| :---------------------------------------------- | :----------------------------------------------------- | :------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------: |
| [sifrr-api](./packages/server/sifrr-api/)       | Create normal/GraphQL APIs with same codebase          | [![npm version](https://img.shields.io/npm/v/@sifrr/api.svg)](https://www.npmjs.com/package/@sifrr/api)       | [![Doscify](https://img.shields.io/badge/API%20docs-Docsify-red.svg)](https://sifrr.github.io/sifrr/#/./packages/server/sifrr-api/)    |  [OK](./packages/server/sifrr-api/test)   |
| [sifrr-cli](./packages/server/sifrr-cli/)       | Sifrr cli for creating webapps using sifrr             | [![npm version](https://img.shields.io/npm/v/@sifrr/cli.svg)](https://www.npmjs.com/package/@sifrr/cli)       | [![Doscify](https://img.shields.io/badge/API%20docs-Docsify-red.svg)](https://sifrr.github.io/sifrr/#/./packages/server/sifrr-cli/)    |                  \[WIP]                   |
| [sifrr-seo](./packages/server/sifrr-seo/)       | Server side pre-rendering using puppeteer with caching | [![npm version](https://img.shields.io/npm/v/@sifrr/seo.svg)](https://www.npmjs.com/package/@sifrr/seo)       | [![Doscify](https://img.shields.io/badge/API%20docs-Docsify-red.svg)](https://sifrr.github.io/sifrr/#/./packages/server/sifrr-seo/)    |  [OK](./packages/server/sifrr-seo/test)   |
| [sifrr-server](./packages/server/sifrr-server/) | Fast HTTP + WebSockets server                          | [![npm version](https://img.shields.io/npm/v/@sifrr/server.svg)](https://www.npmjs.com/package/@sifrr/server) | [![Doscify](https://img.shields.io/badge/API%20docs-Docsify-red.svg)](https://sifrr.github.io/sifrr/#/./packages/server/sifrr-server/) | [OK](./packages/server/sifrr-server/test) |

`sifrr-api`, `sifrr-seo` can be used independently. `sifrr-cli` has functionalities which can be used with sequelize projects, `sifrr-api` projects and `sifrr-dom` projects.

## Usage

All the packages can be used with node, es6 modules, and are compatible with bundler of your choice (rollup, webpack, browserify)

### commonJS (node)

```js
const SifrrDom = require('@sifrr/dom');
```

### ES6 modules (`import`)

```js
import SifrrDom from '@sifrr/dom';
```

### standalone distributions (browser packages only)

For eg.

```html
<script src="https://unpkg.com/@sifrr/dom@{version}/dist/sifrr.dom.min.js"></script>
// for v0.0.3
<script src="https://unpkg.com/@sifrr/dom@0.0.3/dist/sifrr.dom.min.js"></script>
// this sets window.Sifrr.Dom as sifrr-dom, same for other packages
```

### Packages that have tests have a working example of that package in `test/public` folder

## Node support (server packages and development)

Sifrr officially supports node v10 (LTS), v12 (current). Other versions might work for some packages.

| Node Version | CI Status                                                                                                                |
| :----------- | :----------------------------------------------------------------------------------------------------------------------- |
| v10.16.0     | [![](https://img.shields.io/circleci/project/github/sifrr/sifrr/master.svg)](https://circleci.com/gh/sifrr/sifrr)        |
| v12.4.0      | [![](https://travis-matrix-badges.herokuapp.com/repos/sifrr/sifrr/branches/master/1)](https://travis-ci.org/sifrr/sifrr) |

## Browser Support (browser packages)

Sifrr browser packages officially supports these browser versions (for dist files):

| Browser               | Version |
| :-------------------- | :------ |
| Chrome                | >= 55   |
| Android Chrome        | >= 55   |
| Firefox               | >= 63   |
| Android Firefox       | >= 63   |
| Opera                 | >= 42   |
| Safari                | >= 10.1 |
| Safari (iOS browsers) | >= 10.1 |

Individual libraries may support older versions too with polyfills listed Doscifys, or by bundling it with polyfills using babel etc.

Approximately amounts to > 80% of total worldwide browser usage.

To support mini browsers (opera mini, uc browser etc.), You can use sifrr-seo to provide server side rendering.

## License

Sifrr is [MIT Licensed](./LICENSE).

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fsifrr%2Fsifrr.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fsifrr%2Fsifrr?ref=badge_large)

(c) [@aadityataparia](https://github.com/aadityataparia)
