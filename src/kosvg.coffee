define("kosvg",
    [
        "viewmodel/main"
        "binding/main"
        "templating/main"
    ],
    (viewmodel, binding, templating)->
        $$ = {}
        # copy properties to kosvg from subpackages
        for subpackage in [viewmodel, binding, templating]
            for k, v of subpackage
                $$[k] = v if subpackage.hasOwnProperty(k)

        # register as plugin of kockoutjs
        ko.svg = $$ if ko?

        $$
)