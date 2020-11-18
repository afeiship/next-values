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
