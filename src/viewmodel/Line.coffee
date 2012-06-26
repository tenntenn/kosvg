define("viewmodel/Line",
    [
        "viewmodel/Shape"
    ],
    (Shape)->
        # View model of Line node of svg
        class Line extends Shape
            constructor:(param)->
                super()
                @x1 = param.x1 ? ko.observable(0)
                @y1 = param.y1 ? ko.observable(0)
                @x2 = param.x2 ? ko.observable(0)
                @y2 = param.y2 ? ko.observable(0)
                @transformArray.push(param.transforms) if param.transforms
)