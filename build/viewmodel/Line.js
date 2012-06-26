var __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

define("viewmodel/Line", ["viewmodel/Shape"], function(Shape) {
  var Line;
  return Line = (function(_super) {

    __extends(Line, _super);

    function Line(param) {
      var _ref, _ref2, _ref3, _ref4;
      Line.__super__.constructor.call(this);
      this.x1 = (_ref = param.x1) != null ? _ref : ko.observable(0);
      this.y1 = (_ref2 = param.y1) != null ? _ref2 : ko.observable(0);
      this.x2 = (_ref3 = param.x2) != null ? _ref3 : ko.observable(0);
      this.y2 = (_ref4 = param.y2) != null ? _ref4 : ko.observable(0);
      if (param.transforms) this.transformArray.push(param.transforms);
    }

    return Line;

  })(Shape);
});
