/*!
 * name: @feizheng/next-values
 * url: https://github.com/afeiship/next-values
 * version: 1.0.0
 * date: 2019-11-23T07:36:44.791Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var returnValue = function(inValue) { return inValue; };

  nx.values = function(inObject, inCallback, inContext) {
    var callback = inCallback || returnValue;
    return nx.map(inObject, function(_, value) {
      return callback.call(inContext, value);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.values;
  }
})();

//# sourceMappingURL=next-values.js.map
