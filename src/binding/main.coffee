define("binding/main",
    [
        "binding/shape"
    ],
    (shape)->
        ko.bindingHandlers.shape = shape
        $$ =
            shapeBinding: shape
)