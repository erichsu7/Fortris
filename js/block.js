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

  Block.prototype.isAtBottom = function () {
    if (this.coord.i === this.board.rows - 1) {
      return true;
    };
    return false;
  };

  Block.prototype.isOnBlock = function () {
    var rowBelow = this.coord.i + 1;
    var rowBlocks = this.board.blocks[rowBelow];
    for (i = 0; i < rowBlocks.length; i++) {
      var rowBlock = rowBlocks[i];
      if (this.coord.j === rowBlock.coord.j) {
        return true;
      }
    }
    return false;
  };

  Block.prototype.isInBlock = function () {
    var row = this.coord.i;
    var rowBlocks = this.board.blocks[row];
    for (i = 0; i < rowBlocks.length; i++) {
      var rowBlock = rowBlocks[i];
      if (this.coord.j === rowBlock.coord.j) {
        return true;
      }
    }
    return false;
  };

  Block.prototype.isPlaced = function () {
    return this.isOnBlock() || this.isAtBottom();
  };

  Block.prototype.isOffScreen = function () {
    if (this.coord.j < 0 ||
        this.coord.j > this.board.cols - 1 ||
        this.coord.i < 0 ||
        this.coord.i > this.board.rows - 1) {
      return true;
    }
    return false;
  };

  Block.prototype.hasBlockOnLeft = function () {
    var row = this.coord.i;
    var rowBlocks = this.board.blocks[row];
    for (i = 0; i < rowBlocks.length; i++) {
      var rowBlock = rowBlocks[i];
      if (this.coord.j === rowBlock.coord.j - 1) {
        return true;
      }
    }
    return false;
  };

  Block.prototype.hasBlockOnRight = function () {
    var row = this.coord.i;
    var rowBlocks = this.board.blocks[row];
    for (i = 0; i < rowBlocks.length; i++) {
      var rowBlock = rowBlocks[i];
      if (this.coord.j === rowBlock.coord.j + 1) {
        return true;
      }
    }
    return false;
  };

  Block.prototype.isAtRightEdge = function () {
    if (this.coord.j === this.board.cols - 1) {
      return true;
    }

    return false;
  };

  Block.prototype.isAtLeftEdge = function () {
    if (this.coord.j === 0) {
      return true;
    }

    return false;
  };

  Block.prototype.moveDown = function () {
    this.coord.i++;
  };


})();
