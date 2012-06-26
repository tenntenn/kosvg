
define("binding/main", ["binding/shape"], function(shape) {
  var $$;
  ko.bindingHandlers.shape = shape;
  return $$ = {
    shapeBinding: shape
  };
});
