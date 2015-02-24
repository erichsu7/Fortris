(function () {
  if (typeof Tetris === "undefined") {
    window.Tetris = {};
  };

  var Piece = Tetris.Piece = function (board) {
    this.board = board;
    this.blocks = [];
  };

  Piece.OFFSETS = {
    "oPiece": [[0, -1], [0, 0], [1, -1], [1, 0]],
    "iPiece": [[0, -2], [0, -1], [0, 0], [0, 1]],
    "sPiece": [[0, -1], [0, 0], [1, -2], [1, -1]],
    "zPiece": [[0, -2], [0, -1], [1, -1], [1, 0]],
    "lPiece": [[0, -2], [0, -1], [0, 0], [1, -2]],
    "jPiece": [[0, -2], [0, -1], [0, 0], [1, 0]],
    "tPiece": [[0, -2], [0, -1], [0, 0], [1, -1]],
  };

  Piece.Random = function (board) {
    var piece = new Piece(board);
    var pieceTypes = Object.keys(Piece.OFFSETS);
    var randomPieceName = pieceTypes[Math.floor(Math.random() * pieceTypes.length )];
    var randomColor = Tetris.Block.COLORS[Math.floor(Math.random() * Tetris.Block.COLORS.length )];
    var offsets = Piece.OFFSETS[randomPieceName];
    offsets.forEach(function (offset) {
      var coord = new Tetris.Coord(0 + offset[0], (piece.board.cols / 2) + offset[1]);
      piece.blocks.push(new Tetris.Block(coord, randomColor));
    });

    return piece;
  };

  Piece.prototype.isPlaced = function () {
    return this.isAtBottom();
  };

  Piece.prototype.isAtBottom = function () {
    var that = this;
    for (i = 0; i < this.blocks.length; i++) {
      if (this.blocks[i].coord.i === this.board.rows - 1) {
        return true;
      };
    };
    return false;
  };

})();
