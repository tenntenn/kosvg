
define("viewmodel/LineTo", [], function() {
  var LineTo;
  return LineTo = (function() {

    function LineTo(param) {
      var _ref, _ref2;
      this.x = (_ref = param.x) != null ? _ref : ko.observable(0);
      this.y = (_ref2 = param.y) != null ? _ref2 : ko.observable(0);
      this.toString = function() {
        var x, y;
        x = ko.utils.unwrapObservable(this.x);
        y = ko.utils.unwrapObservable(this.y);
        return "L " + x + " " + y;
      };
    }

    return LineTo;

  })();
});
