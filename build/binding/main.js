
define("binding/main", ["binding/shape", "binding/shapes"], function(shape, shape) {
  var $$;
  ko.bindingHandlers.shape = shape;
  ko.bindingHandlers.shapes = shapes;
  return $$ = {
    shapeBinding: shape,
    shapesBinding: shapes
  };
});
