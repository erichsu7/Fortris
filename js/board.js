(function () {
  if (typeof Tetris === "undefined") {
    window.Tetris = {};
  };

  var Board = Tetris.Board = function (rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.blocks = [];
    this.piece = (new Tetris.Piece(this)).randomize(this);
  };

  Board.prototype.addPiece = function (piece) {
    piece.blocks.forEach(function (block) {
      this.blocks.push(block);
    });
  };

})();
