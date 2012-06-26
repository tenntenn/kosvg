
define("binding/shape", ["const/namespace"], function(ns) {
  var shape;
  return shape = {
    init: function(element, valueAccessor, allBindingsAccessor, viewModel) {
      var k, m, v, value, _ref, _results;
      _ref = valueAccessor();
      _results = [];
      for (k in _ref) {
        v = _ref[k];
        value = ko.utils.unwrapObservable(v);
        if ($.isArray(value)) {
          _results.push($(element).attr(k, ((function() {
            var _i, _len, _results2;
            _results2 = [];
            for (_i = 0, _len = value.length; _i < _len; _i++) {
              m = value[_i];
              _results2.push(m.toString());
            }
            return _results2;
          })()).join(" ")));
        } else {
          _results.push($(element).attr(k, value));
        }
      }
      return _results;
    },
    update: function(element, valueAccessor, allBindingsAccessor, viewModel) {
      var k, m, v, value, _ref, _results;
      _ref = valueAccessor();
      _results = [];
      for (k in _ref) {
        v = _ref[k];
        value = ko.utils.unwrapObservable(v);
        if ($.isArray(value)) {
          _results.push($(element).attr(k, ((function() {
            var _i, _len, _results2;
            _results2 = [];
            for (_i = 0, _len = value.length; _i < _len; _i++) {
              m = value[_i];
              _results2.push(m.toString());
            }
            return _results2;
          })()).join(" ")));
        } else {
          _results.push($(element).attr(k, value));
        }
      }
      return _results;
    }
  };
});
