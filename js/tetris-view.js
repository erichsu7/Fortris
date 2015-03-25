(function() {
  if (typeof Tetris === "undefined") {
    window.Tetris = {}
  }

  var View = Tetris.View = function ($el) {
    this.$el = $el;
    this.startGame();
  };

  View.KEYS = {
    32: "snapDown",
    37: "moveLeft",
    38: "rotate",
    39: "moveRight",
    40: "moveDown"
  };

  View.STEP_MILLIS = 1000;

  View.prototype.startGame = function () {
    $(window).off();
    this.board = new Tetris.Board(20, 10);
    this.setupGrid();
    this.render();
    window.setTimeout(this.step.bind(this), View.STEP_MILLIS);
    $(window).on("keydown", this.handleKeyEvent.bind(this));
  };

  View.prototype.handleKeyEvent = function (event) {
    if (View.KEYS[event.keyCode]) {
      switch (event.keyCode) {
        case 32:
          this.board.piece.snapDown();
          this.board.stepPiece();
          break;
        case 37:
          this.board.piece.moveLeft();
          break;
        case 38:
          this.board.piece.rotate();
          break;
        case 39:
          this.board.piece.moveRight();
          break;
        case 40:
          if (!this.board.piece.isPlaced()) {
            this.board.piece.moveDown();
          }
          break;
        default:
          break;
      }
      this.render();
    }
  };

  View.prototype.render = function () {
    this.setupGrid();
    this.setupNextPieceGrid();
    this.renderPiece();
    this.renderNextPiece();
    this.renderBlocks();
  }

  View.prototype.renderBlocks = function () {
    var that = this;
    for (var row in this.board.blocks) {
      var rowBlocks = this.board.blocks[row];
      if (rowBlocks) {
        for (var i = 0; i < rowBlocks.length; i++) {
          var block = rowBlocks[i];
          this.updateClasses(block.coord, block.color);
        }
      }
    }
  };

  View.prototype.renderPiece = function () {
    var that = this;
    this.board.piece.blocks.forEach(function (block) {
      that.updateClasses(block.coord, block.color);
    });
  };

  View.prototype.renderNextPiece = function () {
    var that = this;
    this.board.nextPiece.blocks.forEach(function (block) {
      that.updateClassesNextPiece(block.coord, block.color);
    });
  };

  View.prototype.updateClasses = function(coord, className) {
    var flatCoord = (coord.i * this.board.cols) + coord.j;
    this.$li.eq(flatCoord).addClass(className);
  };

  View.prototype.updateClassesNextPiece = function (coord, className) {
    var flatCoord = (coord.i * this.board.cols) + coord.j;
    this.$liNextPiece.eq(flatCoord).addClass(className);
  }

  View.prototype.setupGrid = function () {
    var html = "";

    for (var i = 0; i < this.board.rows; i++) {
      html += "<ul>";
      for (var j = 0; j < this.board.cols; j++) {
        html += "<li></li>";
      }
      html += "</ul>";
    }

    this.$el.find(".tetris-game").html(html);
    this.$li = this.$el.find(".tetris-game li");
    this.renderStats();
  };

  View.prototype.setupNextPieceGrid = function () {
    var html = "";

    for (var i = 0; i < 2; i++) {
      html += "<ul>";
      for (var j = 0; j < this.board.cols; j++) {
        html += "<li></li>";
      }
      html += "</ul>";
    }
    this.$el.find(".next-piece-display-area").html(html);
    this.$liNextPiece = this.$el.find(".next-piece-container li");
  };

  View.prototype.step = function () {
    this.board.stepPiece();
    if (this.isOver()) {
      window.clearInterval(this.intervalId);
      this.renderGameOver();
    } else {
      this.render();
      window.clearInterval(this.intervalId);
      this.intervalId = window.setInterval(
        this.step.bind(this),
        View.STEP_MILLIS/this.board.level
      );
    }
  };

  View.prototype.isOver = function() {
    if (this.board.piece.isAtTop() && this.board.piece.isPlaced()) {
      return true;
    }
    return false;
  };

  View.prototype.renderStats = function () {
    var $stats = $(".tetris-game-stats");
    $stats.find(".tetris-game-stats-score").html(this.board.score);
    $stats.find(".tetris-game-stats-level").html(this.board.level);
    $stats.find(".tetris-game-stats-cleared-rows").html(this.board.clearedRows);
  };

  View.prototype.renderGameOver = function () {
    $(window).off();
    var that = this;
    var $div = $("<div class=\"game-over-container\">");
    var html = "<div class=\"game-over-screen\"></div>\n";
    html += "<div class=\"game-over-bar\"><p>GAME OVER</p></div>";
    that.$el.find(".tetris-game").append($div);
    $div.html(html);
    window.setTimeout(function () {
      var $div = "<div class=\"restart-game-prompt\">Press any key to play again</div>";
      that.$el.find(".game-over-container").append($div);
      $(window).on("keydown", that.startGame.bind(that));
    }, 1500)
  }
})();
