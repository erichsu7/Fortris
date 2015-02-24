(function () {
  var TPiece = Tetris.TPiece = function (board) {
    Tetris.Piece.call(this, board);
    this.blockCoords = [
      [0, (this.board.cols / 2) - 2],
      [0, (this.board.cols / 2) - 1],
      [0, (this.board.cols / 2)],
      [1, (this.board.cols / 2) - 1]
    ];
    this.position = "d";
    this.generateBlocks();
  };

  TPiece.inherits(Tetris.Piece);

  TPiece.prototype.rotate = function () {
    this.ogBlocks = this.blocks;
    var pivotBlock = this.blocks[1];
    var pivotCoord = pivotBlock.coord;
    if (this.position === "d") {
      this.blockCoords = [
        [pivotCoord.i - 1, pivotCoord.j],
        [pivotCoord.i, pivotCoord.j],
        [pivotCoord.i + 1, pivotCoord.j],
        [pivotCoord.i, pivotCoord.j - 1]
      ]
      this.position = "l";
    } else if (this.position === "l") {
      this.blockCoords = [
        [pivotCoord.i, pivotCoord.j + 1],
        [pivotCoord.i, pivotCoord.j],
        [pivotCoord.i, pivotCoord.j - 1],
        [pivotCoord.i - 1, pivotCoord.j]
      ]
      this.position = "u";
    } else if (this.position === "u") {
      this.blockCoords = [
        [pivotCoord.i + 1, pivotCoord.j],
        [pivotCoord.i, pivotCoord.j],
        [pivotCoord.i - 1, pivotCoord.j],
        [pivotCoord.i, pivotCoord.j + 1]
      ]
      this.position = "r";
    } else if (this.position === "r") {
      this.blockCoords = [
        [pivotCoord.i, pivotCoord.j - 1],
        [pivotCoord.i, pivotCoord.j],
        [pivotCoord.i, pivotCoord.j + 1],
        [pivotCoord.i + 1, pivotCoord.j]
      ]
      this.position = "d";
    }
    this.blocks = [];
    this.generateBlocks();
    if (this.isOffScreen() || this.isInBlock()) {
      this.blocks = this.ogBlocks;
    }
  };
})();
