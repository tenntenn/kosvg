define("templating/templateEngine",
    [
        "const/namespace"
    ],
    (ns)->

        templateEngine = ()->
            @.allowTemplateRewriting = false

        templateEngine.prototype = new ko.templateEngine()
        templateEngine.prototype.renderTemplateSource = (templateSource, bindingContext, options) ->
            # already exsiting nodes?
            nodes = templateSource.nodes()
            if nodes
                return nodes

            div = document.createElement('div')
            div.innerHTML = """<svg xmlns="#{ns}">#{templateSource.text()}</svg>"""
            ko.utils.arrayPushAll([], div.childNodes[0].childNodes)

        return templateEngine
)