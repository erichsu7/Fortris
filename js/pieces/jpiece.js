(function () {
  var JPiece = Tetris.JPiece = function (board) {
    Tetris.Piece.call(this, board);
    this.blockCoords = [
      [0, (this.board.cols / 2) - 2],
      [0, (this.board.cols / 2) - 1],
      [0, (this.board.cols / 2)],
      [1, (this.board.cols / 2)]
    ];
    this.position = "r";
    this.generateBlocks();
  };

  JPiece.inherits(Tetris.Piece);

  JPiece.prototype.rotate = function () {
    this.ogBlocks = this.blocks;
    var pivotBlock = this.blocks[1];
    var pivotCoord = pivotBlock.coord;
    if (this.position === "r") {
      this.blockCoords = [
        [pivotCoord.i - 1, pivotCoord.j],
        [pivotCoord.i, pivotCoord.j],
        [pivotCoord.i + 1, pivotCoord.j],
        [pivotCoord.i + 1, pivotCoord.j - 1]
      ]
      this.position = "d";
    } else if (this.position === "d") {
      this.blockCoords = [
        [pivotCoord.i, pivotCoord.j + 1],
        [pivotCoord.i, pivotCoord.j],
        [pivotCoord.i, pivotCoord.j - 1],
        [pivotCoord.i - 1, pivotCoord.j - 1]
      ]
      this.position = "l";
    } else if (this.position === "l") {
      this.blockCoords = [
        [pivotCoord.i + 1, pivotCoord.j],
        [pivotCoord.i, pivotCoord.j],
        [pivotCoord.i - 1, pivotCoord.j],
        [pivotCoord.i - 1, pivotCoord.j + 1]
      ]
      this.position = "u";
    } else if (this.position === "u") {
      this.blockCoords = [
        [pivotCoord.i, pivotCoord.j - 1],
        [pivotCoord.i, pivotCoord.j],
        [pivotCoord.i, pivotCoord.j + 1],
        [pivotCoord.i + 1, pivotCoord.j + 1]
      ]
      this.position = "r";
    }
    this.blocks = [];
    this.generateBlocks();
    if (this.isOffScreen() || this.isInBlock()) {
      this.blocks = this.ogBlocks;
    }
  };
})();
