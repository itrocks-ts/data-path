[![npm version](https://img.shields.io/npm/v/@itrocks/data-path?logo=npm)](https://www.npmjs.org/package/@itrocks/data-path)
[![npm downloads](https://img.shields.io/npm/dm/@itrocks/data-path)](https://www.npmjs.org/package/@itrocks/data-path)
[![GitHub](https://img.shields.io/github/last-commit/itrocks-ts/data-path?color=2dba4e&label=commit&logo=github)](https://github.com/itrocks-ts/data-path)
[![issues](https://img.shields.io/github/issues/itrocks-ts/data-path)](https://github.com/itrocks-ts/data-path/issues)
[![discord](https://img.shields.io/discord/1314141024020467782?color=7289da&label=discord&logo=discord&logoColor=white)](https://25.re/ditr)

# data-path

Configurable application data directory.

## Installation

Requires Node.js 24 or later.

```sh
npm i @itrocks/data-path
```

## Usage

```ts
import { dataPath } from '@itrocks/data-path'

const lists = dataPath('custom-lists', 'app/movie')
```

`dataPath(...parts: string[]): string` resolves a path beneath the configured directory, without creating it.
The default directory is `../data` relative to
[`appDir`](https://github.com/itrocks-ts/app-dir), independently of the process working directory.
Like Node.js `path.resolve`, absolute parts replace earlier parts; validate untrusted path segments before calling.

## Usage with the it.rocks framework

The [it.rocks framework](https://github.com/itrocks-ts/framework) binds the top-level YAML setting `dataPath`,
with `local.yaml` taking precedence:

```yaml
dataPath: ../data/
```

Relative configured paths belong to the declaring YAML file; absolute paths are also supported.
Configuration binding is described in [dependencies](docs/dependencies.md).

## Usage outside the it.rocks framework

Call `setDataPath` before opening data files to choose a directory for your application:

```ts
import { dataPath }    from '@itrocks/data-path'
import { setDataPath } from '@itrocks/data-path'

setDataPath('/srv/my-app/data')
const lists = dataPath('custom-lists', 'app/movie')
// /srv/my-app/data/custom-lists/app/movie
```

`setDataPath(path = '../data', base = appDir): void` changes the directory for subsequent calls.
Absolute paths are used directly; relative paths are resolved against `base`.
Calling it without arguments restores the default.

## Verification

```sh
npm test
npm pack --dry-run
```
