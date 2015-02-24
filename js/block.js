(function () {
  if (typeof Tetris === "undefined") {
    window.Tetris = {};
  };

  var Block = Tetris.Block = function (coord, color) {
    this.coord = coord;
    this.color = color;
  };

  Block.COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "cyan",
    "purple"
  ];

  Block.prototype.isAbove = function (otherBlock) {
    return this.coord.isAbove(otherBlock.coord);
  };
})();
