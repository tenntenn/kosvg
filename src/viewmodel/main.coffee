define("viewmodel/main",
    [
        "viewmodel/Shape"
        "viewmodel/Line"
        "viewmodel/Path"
        "viewmodel/MoveTo"
        "viewmodel/LineTo"
        "viewmodel/Rotate"
    ],
    (Shape, Line, Path, MoveTo, LineTo, Rotate)->
        $$ =
            Shape:  Shape
            Line:   Line
            Path:   Path
            MoveTo: MoveTo
            LineTo: LineTo
            Rotate: Rotate
)