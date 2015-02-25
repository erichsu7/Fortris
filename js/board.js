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
      var fullRows = this.findFullRows();
      fullRows.length > 0 && this.deleteFullRows(fullRows);
      console.log(Object.keys(this.blocks).length);
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
    var deletedBlocks = [];
    for (i = 0; i < fullRows.length; i++) {
      for (var coordStr in this.blocks) {
        var coordArray = coordStr.split(",");
        if (coordArray[0] === fullRows[i]) {
          deletedBlocks.push(this.blocks[coordStr]);
          delete this.blocks[coordStr];
        }
      }
    }
    console.log(deletedBlocks.length);
    this.shiftBlocksDown(fullRows);
  };

  Board.prototype.shiftBlocksDown = function (fullRows) {
    for (i = 0; i < fullRows.length; i++) {
      for (var coordStr in this.blocks) {
        var coordStrArray = coordStr.split(",").map(function(num) {
          return parseInt(num);
        });
        if (coordStrArray[0] < parseInt(fullRows[i])) {
          var block = this.blocks[coordStr];
          if (block) {
            block.moveDown();
            var newCoordStr = block.coord.i + "," + block.coord.j;
            this.blocks[newCoordStr] = block;
            delete this.blocks[coordStr];
          }
        }
      }
    }
  };




})();
