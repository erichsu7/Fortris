(function () {
  var OPiece = Tetris.OPiece = function (board) {
    Tetris.Piece.call(this, board);
    this.blockCoords = [
      [0, (this.board.cols / 2) - 1],
      [0, (this.board.cols / 2)],
      [1, (this.board.cols / 2) - 1],
      [1, (this.board.cols / 2) ]
    ];
    this.generateBlocks();
  };

  OPiece.inherits(Tetris.Piece);

  OPiece.prototype.rotate = function () {
  };
})();
