define("binding/main",
    [
        "binding/shape"
        "binding/shapes"
    ],
    (shape, shape)->
        ko.bindingHandlers.shape = shape
        ko.bindingHandlers.shapes = shapes
        $$ =
            shapeBinding: shape
            shapesBinding: shapes
)