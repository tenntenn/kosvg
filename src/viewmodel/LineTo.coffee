define("viewmodel/LineTo",
    [
    ],
    ()->
        class LineTo
            constructor:(param)->
                @x = param.x ? ko.observable(0)
                @y = param.y ? ko.observable(0)
                @toString = ()->
                    x = ko.utils.unwrapObservable(@x)
                    y = ko.utils.unwrapObservable(@y)
                    "L #{x} #{y}"
)