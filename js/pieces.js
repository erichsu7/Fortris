(function () {
  Function.prototype.inherits = function (BaseClass) {
    function Surrogate () {};
    Surrogate.prototype = BaseClass.prototype;
    this.prototype = new Surrogate ();
  }

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
  };

  var ZPiece = Tetris.ZPiece = function (board) {
    Tetris.Piece.call(this, board);
    this.blockCoords = [
      [0, (this.board.cols / 2) - 2],
      [0, (this.board.cols / 2) - 1],
      [1, (this.board.cols / 2) - 1],
      [1, (this.board.cols / 2)]
    ];
    this.generateBlocks();
  };

  var LPiece = Tetris.LPiece = function (board) {
    Tetris.Piece.call(this, board);
    this.blockCoords = [
      [0, (this.board.cols / 2) - 2],
      [0, (this.board.cols / 2) - 1],
      [0, (this.board.cols / 2)],
      [1, (this.board.cols / 2) - 2]
    ];
    this.generateBlocks();
  };

  var JPiece = Tetris.JPiece = function (board) {
    Tetris.Piece.call(this, board);
    this.blockCoords = [
      [0, (this.board.cols / 2) - 2],
      [0, (this.board.cols / 2) - 1],
      [0, (this.board.cols / 2)],
      [1, (this.board.cols / 2)]
    ];
    this.generateBlocks();
  };

  var TPiece = Tetris.TPiece = function (board) {
    Tetris.Piece.call(this, board);
    this.blockCoords = [
      [0, (this.board.cols / 2) - 2],
      [0, (this.board.cols / 2) - 1],
      [0, (this.board.cols / 2)],
      [1, (this.board.cols / 2) - 1]
    ];
    this.generateBlocks();
  };




  ZPiece.inherits(Tetris.Piece);
  LPiece.inherits(Tetris.Piece);
  JPiece.inherits(Tetris.Piece);
  TPiece.inherits(Tetris.Piece);
})();
