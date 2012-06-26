define("viewmodel/MoveTo",
    [
    ],
    ()->
        class MoveTo
            constructor:(param)->
                @x = param.x ? ko.observable(0)
                @y = param.y ? ko.observable(0)
                @toString = ()->
                    x = ko.utils.unwrapObservable(@x)
                    y = ko.utils.unwrapObservable(@y)
                    "M #{x} #{y}"
)