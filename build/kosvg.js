
define("kosvg", ["viewmodel/main", "binding/main", "templating/main"], function(viewmodel, binding, templating) {
  var $$, k, subpackage, v, _i, _len, _ref;
  $$ = {};
  _ref = [viewmodel, binding, templating];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    subpackage = _ref[_i];
    for (k in subpackage) {
      v = subpackage[k];
      if (subpackage.hasOwnProperty(k)) $$[k] = v;
    }
  }
  if (typeof ko !== "undefined" && ko !== null) ko.svg = $$;
  return $$;
});
