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
    debugger;
    var that = this;
    this.fullRowCoords = [];
    for (i = 0; i < fullRows.length; i++) {
      for (j = 0; j < this.cols; j++) {
        var coordStr = fullRows[i] + "," + j;
        that.fullRowCoords.push(coordStr);
      }
    }

    this.fullRowCoords.forEach(function (coordStr) {
      delete that.blocks[coordStr];
      that.shiftBlockDown(coordStr);
    })
  };

  Board.prototype.shiftBlockDown = function (coordStr) {
    var coordArray = coordStr.split(",").map(function (num) {
      return parseInt(num);
    });
    debugger;
    var coordStrRow = parseInt(coordStr.split(",")[0]);
    var aboveCoordStr
  }

})();
