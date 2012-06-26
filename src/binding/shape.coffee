define("binding/shape",
    [
        "const/namespace"
    ],
    (ns)->
        shape =
            init:(element, valueAccessor, allBindingsAccessor, viewModel)->
                for k, v of valueAccessor()
                    value = ko.utils.unwrapObservable(v)
                    if $.isArray(value)
                        $(element).attr(k, (m.toString() for m in value).join(" "))
                    else
                        $(element).attr(k, value)
            update:(element, valueAccessor, allBindingsAccessor, viewModel)->
                for k, v of valueAccessor()
                    value = ko.utils.unwrapObservable(v)
                    if $.isArray(value)
                        $(element).attr(k, (m.toString() for m in value).join(" "))
                    else
                        $(element).attr(k, value)
)