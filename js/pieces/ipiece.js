(function () {
  var IPiece = Tetris.IPiece = function (board) {
    Tetris.Piece.call(this, board);
    this.blockCoords = [
      [0, (this.board.cols / 2) - 2],
      [0, (this.board.cols / 2) - 1],
      [0, (this.board.cols / 2)],
      [0, (this.board.cols / 2) + 1]
    ];
    this.position = "h";
    this.generateBlocks();
  };

  IPiece.inherits(Tetris.Piece);

  IPiece.prototype.rotate = function () {
    var pivotBlock = this.blocks[1];
    var pivotCoord = pivotBlock.coord;
    if (this.position === "h") {
      this.blockCoords = [
        [pivotCoord.i - 1, pivotCoord.j],
        [pivotCoord.i, pivotCoord.j],
        [pivotCoord.i + 1, pivotCoord.j],
        [pivotCoord.i + 2, pivotCoord.j]
      ]
      this.position = "v";
    } else {
      this.blockCoords = [
        [pivotCoord.i, pivotCoord.j - 1],
        [pivotCoord.i, pivotCoord.j],
        [pivotCoord.i, pivotCoord.j + 1],
        [pivotCoord.i, pivotCoord.j + 2]
      ]
      this.position = "h";
    }
    this.blocks = [];
    this.generateBlocks();
  };
})();
