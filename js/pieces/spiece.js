(function () {
  var SPiece = Tetris.SPiece = function (board) {
    Tetris.Piece.call(this, board);
    this.blockCoords = [
      [0, (this.board.cols / 2) - 1],
      [0, (this.board.cols / 2)],
      [1, (this.board.cols / 2) - 2],
      [1, (this.board.cols / 2) - 1]
    ];
    this.position = "h";
    this.generateBlocks();
  };

  SPiece.inherits(Tetris.Piece);

  SPiece.prototype.rotate = function () {
    this.ogBlocks = this.blocks;
    var pivotBlock = this.blocks[3];
    var pivotCoord = pivotBlock.coord;
    if (this.position === "h") {
      this.blockCoords = [
        [pivotCoord.i, pivotCoord.j + 1],
        [pivotCoord.i + 1, pivotCoord.j + 1],
        [pivotCoord.i - 1, pivotCoord.j],
        [pivotCoord.i, pivotCoord.j]
      ]
      this.position = "v";
    } else {
      this.blockCoords = [
        [pivotCoord.i - 1, pivotCoord.j],
        [pivotCoord.i - 1, pivotCoord.j + 1],
        [pivotCoord.i, pivotCoord.j - 1],
        [pivotCoord.i, pivotCoord.j]
      ]
      this.position = "h";
    }
    this.blocks = [];
    this.generateBlocks();
    if (this.isOffScreen() || this.isInBlock()) {
      this.blocks = this.ogBlocks;
    }
  };
})();
