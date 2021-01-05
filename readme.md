eslint-config-ion2s
===================

> ESLint shareable config for portals maintained by ion2s.


## Installation

```
$ npm i -D eslint eslint-config-ion2s
```


## Usage

This module provides a __base__ shareable config and addition shareable configurations.

Specifying `ion2s` in the `extends` section of your configuration.
```js
module.exports = {
    extends: 'ion2s',
};
```

You can also use ESLint configurations for TypeScript and Vue:
```js
module.exports = {
    extends: 'ion2s/typescript',
};
```

```js
module.exports = {
    extends: 'ion2s/vue',
};
```

There is also a config for using TypeScript with Vue:

```js
module.exports = {
    extends: 'ion2s/vue-ts',
};
```

Feel free to add project specific configuration, like `env` or `parserOptions` - Example:
```js
module.exports = {
    extends: 'ion2s',
    parserOptions: {
        ecmaVersion: 6,
    },
};

```
