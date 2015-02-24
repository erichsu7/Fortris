(function () {
  if (typeof Tetris === "undefined") {
    window.Tetris = {};
  };

  var Coord = Tetris.Coord = function (i, j) {
    this.i = i;
    this.j = j;
  };

  Coord.prototype.equals = function (otherCoord) {
    return (this.i === otherCoord.i) && (this.j === otherCoord.j);
  };

  Coord.prototype.isAbove = function (otherCoord) {
    return (this.i === otherCoord.i + 1) && (this.j === otherCoord.j);
  };

  Coord.prototype.print = function () {
    return this.i + "," + this.j;
  }

})();
