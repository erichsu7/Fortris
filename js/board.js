(function () {
  if (typeof Tetris === "undefined") {
    window.Tetris = {};
  };

  var Board = Tetris.Board = function (rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.blocks = {};
    this.piece = new Tetris.Piece.Random(this);
  };

  Board.prototype.addPiece = function (piece) {
    var that = this;
    piece.blocks.forEach(function (block) {
      that.blocks[block.coord.print()] = block;
    });
  };

  Board.prototype.stepPiece = function () {
    this.piece.moveDown();
  };

  Board.prototype.checkPiece = function () {
    if (this.piece.isPlaced()) {
      this.addPiece(this.piece);
      this.piece = new Tetris.Piece.Random(this);
    }
  };

  Board.prototype.findFullRows = function () {
    var rowsHash = {};
    Object.keys(this.blocks).forEach(function (coordStr) {
      var coordArray = coordStr.split(",");
      var row = parseInt(coordArray[0]);
      var col = parseInt(coordArray[1]);
      if (rowsHash[row]) {
        rowsHash[row].push(col);
      } else {
        rowsHash[row] = [col];
      }
    });
    var fullRows = [];
    for (var row in rowsHash) {
      if (rowsHash[row].length === this.cols) {
        fullRows.push(row);
      }
    }
    return fullRows;
  };

  Board.prototype.deleteFullRows = function (fullRows) {
    for (i = 0; i < fullRows.length; i++) {
      for (var coordStr in this.blocks) {
        var coordArray = coordStr.split(",");
        if (coordArray[0] === fullRows[i]) {
          delete this.blocks[coordStr];
        }
      }
    }
  };

  Board.prototype.shiftRowsDown = function (bottomRow) {
    
  }



})();
