/*!
 * name: @jswork/next-values
 * description: Object values enhanced version.
 * homepage: https://github.com/afeiship/next-values
 * version: 1.0.0
 * date: 2020-11-18T10:24:13.871Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.values = function (inObject, inCallback, inContext) {
    var callback = inCallback || nx.stubValue;
    return nx.map(inObject, function (_, value) {
      return callback.call(inContext, value);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.values;
  }
})();
