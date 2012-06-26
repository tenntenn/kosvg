define("viewmodel/Shape",
    [
    ],
    ()->
        class Shape
            constructor:->
                @transform = ko.observableArray()
)