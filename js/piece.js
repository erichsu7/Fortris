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
      that.blocks.push(new Tetris.Block(coord, that.color));
    });
  }

  Piece.prototype.isPlaced = function () {
    return this.isOnBlock() || this.isAtBottom();
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

  Piece.prototype.isOnBlock = function () {
    for (i = 0; i < this.blocks.length; i++) {
      var nextCoord =
        new Tetris.Coord(this.blocks[i].coord.i + 1, this.blocks[i].coord.j);
      if (this.board.blocks[nextCoord.print()]) {
        return true;
      }
    }
    return false;
  };

  Piece.prototype.hasBlockOnRight = function () {
    for (i = 0; i < this.blocks.length; i++) {
      var nextCoord =
        new Tetris.Coord(this.blocks[i].coord.i, this.blocks[i].coord.j + 1);
      if (this.board.blocks[nextCoord.print()]) {
        return true;
      }
    }
    return false;
  };

  Piece.prototype.hasBlockOnLeft = function () {
    for (i = 0; i < this.blocks.length; i++) {
      var nextCoord =
        new Tetris.Coord(this.blocks[i].coord.i, this.blocks[i].coord.j - 1);
      if (this.board.blocks[nextCoord.print()]) {
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
      block.coord.i++;
    })
  };

  Piece.prototype.isAtRightEdge = function () {
    for (i = 0; i < this.blocks.length; i++) {
      if (this.blocks[i].coord.j === this.board.cols - 1) {
          return true;
      }
    }
    return false;
  };

  Piece.prototype.isAtLeftEdge = function () {
    for (i = 0; i < this.blocks.length; i++) {
      if (this.blocks[i].coord.j === 0) {
          return true;
      }
    }
    return false;
  };

})();
