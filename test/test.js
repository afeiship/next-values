var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-values');

describe('next/values', function () {

  var obj1 = {
    0: 'val0',
    1: 'val1',
    2: 'val2',
    3: 'val3',
    4: 'val4',
  };

  it(" nx.values( obj1 ) => [ 'val0', 'val1', 'val2', 'val3', 'val4' ] ", function () {
    var res1 = nx.values( obj1 );
    assert.deepEqual(res1, [ 'val0', 'val1', 'val2', 'val3', 'val4' ]);
  });

  it('nx.values( obj1, callback) => [ 0, 1, 2, 3, 4 ]', function () {
    var res2 = nx.values( obj1, function( val ){
      return parseInt(val.slice(3));
    });
    assert.deepEqual(res2, [ 0, 1, 2, 3, 4 ]);
  });

});
