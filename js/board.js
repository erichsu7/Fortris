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
    var isPlaced;
    this.piece.blocks.forEach(function (block) {
      block.coord.i++;
    });


  };

})();
