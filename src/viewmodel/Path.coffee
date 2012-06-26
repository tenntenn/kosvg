define("viewmodel/Path",
    [
        "viewmodel/Shape"
    ],
    (Shape)->
        class Path extends Shape
            constructor:()->
                @d = ko.observableArray()
)