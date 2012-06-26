
define("templating/templateEngine", ["const/namespace"], function(ns) {
  var templateEngine;
  templateEngine = function() {
    return this.allowTemplateRewriting = false;
  };
  templateEngine.prototype = new ko.templateEngine();
  templateEngine.prototype.renderTemplateSource = function(templateSource, bindingContext, options) {
    var div, nodes;
    nodes = templateSource.nodes();
    if (nodes) return nodes;
    div = document.createElement('div');
    div.innerHTML = "<svg xmlns=\"" + ns + "\">" + (templateSource.text()) + "</svg>";
    return ko.utils.arrayPushAll([], div.childNodes[0].childNodes);
  };
  return templateEngine;
});
