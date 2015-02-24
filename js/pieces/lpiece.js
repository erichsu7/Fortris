(function () {
  var LPiece = Tetris.LPiece = function (board) {
    Tetris.Piece.call(this, board);
    this.blockCoords = [
      [0, (this.board.cols / 2) - 2],
      [0, (this.board.cols / 2) - 1],
      [0, (this.board.cols / 2)],
      [1, (this.board.cols / 2) - 2]
    ];
    this.position = "l";
    this.generateBlocks();
  };

  LPiece.inherits(Tetris.Piece);

  LPiece.prototype.rotate = function () {
    var pivotBlock = this.blocks[1];
    var pivotCoord = pivotBlock.coord;
    if (this.position === "l") {
      this.blockCoords = [
        [pivotCoord.i - 1, pivotCoord.j],
        [pivotCoord.i, pivotCoord.j],
        [pivotCoord.i + 1, pivotCoord.j],
        [pivotCoord.i - 1, pivotCoord.j - 1]
      ]
      this.position = "u";
    } else if (this.position === "u") {
      this.blockCoords = [
        [pivotCoord.i, pivotCoord.j + 1],
        [pivotCoord.i, pivotCoord.j],
        [pivotCoord.i, pivotCoord.j - 1],
        [pivotCoord.i - 1, pivotCoord.j + 1]
      ]
      this.position = "r";
    } else if (this.position === "r") {
      this.blockCoords = [
        [pivotCoord.i + 1, pivotCoord.j],
        [pivotCoord.i, pivotCoord.j],
        [pivotCoord.i - 1, pivotCoord.j],
        [pivotCoord.i + 1, pivotCoord.j + 1]
      ]
      this.position = "d";
    } else if (this.position === "d") {
      this.blockCoords = [
        [pivotCoord.i, pivotCoord.j - 1],
        [pivotCoord.i, pivotCoord.j],
        [pivotCoord.i, pivotCoord.j + 1],
        [pivotCoord.i + 1, pivotCoord.j - 1]
      ]
      this.position = "l";
    }
    this.blocks = [];
    this.generateBlocks();
  };
})();
