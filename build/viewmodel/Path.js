var __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

define("viewmodel/Path", ["viewmodel/Shape"], function(Shape) {
  var Path;
  return Path = (function(_super) {

    __extends(Path, _super);

    function Path() {
      this.d = ko.observableArray();
    }

    return Path;

  })(Shape);
});
