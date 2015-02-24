(function () {
  Function.prototype.inherits = function (BaseClass) {
    function Surrogate () {};
    Surrogate.prototype = BaseClass.prototype;
    this.prototype = new Surrogate ();
  }

  var OPiece = Tetris.OPiece = function (board) {
    Tetris.Piece.call(this, board);
    this.offsets = [[0, -1], [0, 0], [1, -1], [1, 0]];
    this.generateBlocks();
  };

  var IPiece = Tetris.IPiece = function (board) {
    Tetris.Piece.call(this, board);
    this.offsets = [[0, -2], [0, -1], [0, 0], [0, 1]];
    this.generateBlocks();
  };

  var SPiece = Tetris.SPiece = function (board) {
    Tetris.Piece.call(this, board);
    this.offsets = [[0, -1], [0, 0], [1, -2], [1, -1]];
    this.generateBlocks();
  };

  var ZPiece = Tetris.ZPiece = function (board) {
    Tetris.Piece.call(this, board);
    this.offsets = [[0, -2], [0, -1], [1, -1], [1, 0]];
    this.generateBlocks();
  };

  var LPiece = Tetris.LPiece = function (board) {
    Tetris.Piece.call(this, board);
    this.offsets = [[0, -2], [0, -1], [0, 0], [1, -2]];
    this.generateBlocks();
  };

  var JPiece = Tetris.JPiece = function (board) {
    Tetris.Piece.call(this, board);
    this.offsets = [[0, -2], [0, -1], [0, 0], [1, 0]];
    this.generateBlocks();
  };

  var TPiece = Tetris.TPiece = function (board) {
    Tetris.Piece.call(this, board);
    this.offsets = [[0, -2], [0, -1], [0, 0], [1, -1]];
    this.generateBlocks();
  };

  OPiece.inherits(Tetris.Piece);
  IPiece.inherits(Tetris.Piece);
  SPiece.inherits(Tetris.Piece);
  ZPiece.inherits(Tetris.Piece);
  LPiece.inherits(Tetris.Piece);
  JPiece.inherits(Tetris.Piece);
  TPiece.inherits(Tetris.Piece);

})();
