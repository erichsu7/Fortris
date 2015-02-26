(function () {
  if (typeof Tetris === "undefined") {
    window.Tetris = {};
  };

  var Board = Tetris.Board = function (rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.blocks = {};
    this.piece = new Tetris.Piece.Random(this);
    this.clearedRows = 0;
    this.level = 1;
  };

  Board.prototype.addPiece = function (piece) {
    var that = this;
    piece.blocks.forEach(function (block) {
      var row = block.coord.i;
      var rowBlocks = that.blocks[row];
      if (rowBlocks && rowBlocks.length > 0) {
        that.blocks[row].push(block);
      } else {
        that.blocks[row] = [block];
      }
    });
  };

  Board.prototype.stepPiece = function () {
    this.piece.moveDown();
  };

  Board.prototype.checkPiece = function () {
    if (this.piece.isPlaced()) {
      this.addPiece(this.piece);
      this.piece = new Tetris.Piece.Random(this);
      this.checkAndDeleteFullRows();
    }
  };

  Board.prototype.checkAndDeleteFullRows = function () {
    var fullRows = this.findFullRows();
    if (fullRows.length > 0) {
      this.deleteFullRows(fullRows);
      this.shiftRowsDown(fullRows);
      this.updateRowBlocks(fullRows);
    }
  }

  Board.prototype.findFullRows = function () {
    var fullRows = [];
    for (var i = 0; i < this.rows; i++) {
      var rowBlocks = this.blocks[i];
      if (rowBlocks && rowBlocks.length === 10) {
        fullRows.push(i);
      }
    }
    return fullRows;
  };

  Board.prototype.deleteFullRows = function (fullRows) {
    for (var i = 0; i < fullRows.length; i++) {
      var row = fullRows[i];
      delete this.blocks[row];
    }
  };

  Board.prototype.shiftRowsDown = function (fullRows) {
    for (var i = 0; i < fullRows.length; i++) {
      var fullRow = fullRows[i];
      for (var j = fullRow; j >= 0; j--) {
        if (j > 0) {
          this.blocks[j] = this.blocks[j - 1];
        } else {
          this.blocks[j] = [];
        }
      }
    }
  };

  Board.prototype.updateRowBlocks = function (fullRows) {
    var lastFullRow = fullRows[fullRows.length - 1];
    for (var i = lastFullRow; i > 0; i--) {
      var rowBlocks = this.blocks[i];
      if (rowBlocks) {
        for (var j = 0; j < rowBlocks.length; j++) {
          var block = rowBlocks[j];
          block.coord.i = i;
        }
      }
    }
  };




})();
