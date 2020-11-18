# next-values
> Object values enhanced version.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-values
```

## usage
```js
import '@jswork/next-values';

const obj = {
  0: 'val0',
  1: 'val1',
  2: 'val2',
  3: 'val3',
  4: 'val4'
};

nx.values(obj); // ["0", "1", "2", "3", "4"]
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-values/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-values
[version-url]: https://npmjs.org/package/@jswork/next-values

[license-image]: https://img.shields.io/npm/l/@jswork/next-values
[license-url]: https://github.com/afeiship/next-values/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-values
[size-url]: https://github.com/afeiship/next-values/blob/master/dist/next-values.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-values
[download-url]: https://www.npmjs.com/package/@jswork/next-values
