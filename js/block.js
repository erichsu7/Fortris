(function () {
  if (typeof Tetris === "undefined") {
    window.Tetris = {};
  };

  var Block = Tetris.Block = function (coord, color, board) {
    this.coord = coord;
    this.color = color;
    this.board = board;
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

  Block.prototype.isAtBottom = function () {
    if (this.coord.i === this.board.rows - 1) {
      return true;
    };
    return false;
  };

  Block.prototype.isOnBlock = function () {
    var nextCoord =
      new Tetris.Coord(this.coord.i + 1, this.coord.j);
    if (this.board.blocks[nextCoord.print()]) {
      return true;
    }
    return false;
  };
})();
