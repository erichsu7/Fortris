(function () {
  if (typeof Tetris === "undefined") {
    window.Tetris = {};
  };

  var Piece = Tetris.Piece = function (board) {
    this.board = board;
    this.blockCoords = [];
    this.blocks = [];
    this.position;
    this.color = Tetris.Block.COLORS[Math.floor(Math.random() * Tetris.Block.COLORS.length)];
  };

  Piece.Random = function (board) {
    var pieceTypes = [
      Tetris.OPiece,
      Tetris.IPiece,
      Tetris.SPiece,
      Tetris.ZPiece,
      Tetris.LPiece,
      Tetris.JPiece,
      Tetris.TPiece
    ];

    var pieceClass = pieceTypes[Math.floor(Math.random() * pieceTypes.length)];
    var piece = new (Function.prototype.bind.call(pieceClass, null, board));
    return piece;
  };

  Piece.prototype.generateBlocks = function () {
    var that = this;
    this.blockCoords.forEach(function (offset) {
      var coord = new Tetris.Coord(offset[0], offset[1]);
      that.blocks.push(new Tetris.Block(coord, that.color, that.board));
    });
  }

  Piece.prototype.isPlaced = function () {
    return this.isOnBlock() || this.isAtBottom();
  };

  Piece.prototype.isAtBottom = function () {
    var that = this;
    for (var i = 0; i < this.blocks.length; i++) {
      var block = this.blocks[i];
      if (block.isAtBottom()) {
        return true;
      };
    };
    return false;
  };

  Piece.prototype.isOnBlock = function () {
    for (var i = 0; i < this.blocks.length; i++) {
      var block = this.blocks[i];
      if (block.isOnBlock()) {
        return true;
      }
    }
    return false;
  };

  Piece.prototype.isInBlock = function () {
    for (var i = 0; i < this.blocks.length; i++) {
      var block = this.blocks[i];
      if (block.isInBlock()) {
        return true;
      }
    }
    return false;
  };

  Piece.prototype.isOffScreen = function () {
    for (var i = 0; i < this.blocks.length; i++) {
      var block = this.blocks[i];
      if (block.isOffScreen()) {
        return true;
      }
    }
    return false;
  };

  Piece.prototype.hasBlockOnRight = function () {
    for (var i = 0; i < this.blocks.length; i++) {
      var block = this.blocks[i];
      if (block.hasBlockOnRight()) {
        return true;
      }
    }
    return false;
  };

  Piece.prototype.hasBlockOnLeft = function () {
    for (var i = 0; i < this.blocks.length; i++) {
      var block = this.blocks[i];
      if (block.hasBlockOnLeft()) {
        return true;
      }
    }
    return false;
  };

  Piece.prototype.moveRight = function () {
    if (this.isAtRightEdge() || this.hasBlockOnRight()) {
    } else {
      this.blocks.forEach(function (block) {
        block.coord.j++;
      });
    }
  };

  Piece.prototype.moveLeft = function () {
    if (this.isAtLeftEdge() || this.hasBlockOnLeft()) {
    } else {
      this.blocks.forEach(function (block) {
        block.coord.j--;
      });
    }
  };

  Piece.prototype.moveDown = function () {
    this.blocks.forEach(function (block) {
      block.moveDown();
    })
  };

  Piece.prototype.snapDown = function () {
    while (!this.isPlaced()) {
      this.blocks.forEach(function (block) {
        block.moveDown();
      });
    }
  };

  Piece.prototype.isAtRightEdge = function () {
    for (var i = 0; i < this.blocks.length; i++) {
      var block = this.blocks[i];
      if (block.isAtRightEdge()) {
        return true;
      }
    }
    return false;
  };

  Piece.prototype.isAtLeftEdge = function () {
    for (var i = 0; i < this.blocks.length; i++) {
      var block = this.blocks[i];
      if (block.isAtLeftEdge()) {
        return true;
      }
    }
    return false;
  };

})();
