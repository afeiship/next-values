(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var returnValue = function(inValue){ return inValue };

  nx.values = function (inObject, inCallback, inContext) {
    var callback = inCallback || returnValue;
    return nx.map( inObject, function(_, value){
      return callback.call(inContext, value);
    });
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.values;
  }

}());
