
define("viewmodel/Rotate", [], function() {
  var Rotate;
  return Rotate = (function() {

    function Rotate(param) {
      var _ref, _ref2, _ref3;
      this.angle = (_ref = param.angle) != null ? _ref : ko.observable(0);
      this.x = (_ref2 = param.x) != null ? _ref2 : ko.observable(0);
      this.y = (_ref3 = param.y) != null ? _ref3 : ko.observable(0);
    }

    Rotate.prototype.toString = function() {
      var angle, x, y;
      angle = ko.utils.unwrapObservable(this.angle);
      x = ko.utils.unwrapObservable(this.x);
      y = ko.utils.unwrapObservable(this.y);
      return "rotate(" + angle + "," + x + "," + y + ")";
    };

    return Rotate;

  })();
});
