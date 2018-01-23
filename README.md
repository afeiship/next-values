# next-values
> Object values enhanced version.

## install
```bash
npm install -S afeiship/next-values --registry=https://registry.npm.taobao.org
```

## usage:
```js
import NxKeys from 'next-values';
const obj1 = {
  0: 'val0',
  1: 'val1',
  2: 'val2',
  3: 'val3',
  4: 'val4',
};

nx.values( obj1 , (value)=>{
  return parseInt( value.slice('val') );
});
// => [ 0, 1, 2, 3, 4 ]
```
