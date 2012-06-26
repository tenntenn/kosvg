define("viewmodel/Rotate",
    [
    ],
    ()->
        class Rotate
            constructor:(param)->
                @angle = param.angle ? ko.observable(0)
                @x = param.x ? ko.observable(0)
                @y = param.y ? ko.observable(0)
            toString:->
                angle = ko.utils.unwrapObservable(@angle)
                x = ko.utils.unwrapObservable(@x)
                y = ko.utils.unwrapObservable(@y)
                "rotate(#{angle},#{x},#{y})"
)