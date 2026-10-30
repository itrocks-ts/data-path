# Data path configuration

There are no injected dependencies. `appDir` supplies the default base directory.
Directory creation is the responsibility of consuming code.

## Integration with the it.rocks framework

The framework calls `setDataPath(configPath('dataPath', '../data'))` from its dependency binding phase.
[`configPath`](https://github.com/itrocks-ts/config) resolves the configured path against its declaring YAML file;
without a setting it uses `../data` relative to `appDir`.

## Configuration outside the it.rocks framework

Call `setDataPath(path, base?)` before opening data files, as shown in the
[standalone usage example](../README.md#usage-outside-the-itrocks-framework).
