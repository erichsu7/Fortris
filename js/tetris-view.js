(function() {
  if (typeof Tetris === "undefined") {
    window.Tetris = {}
  }

  var View = Tetris.View = function ($el) {
    this.$el = $el;

    this.board = new Tetris.Board(20, 10);
    this.setupGrid();

    this.step();
    $(window).on("keydown", this.handleKeyEvent.bind(this));
    this.intervalId = window.setInterval(
      this.step.bind(this),
      View.STEP_MILLIS
    )
  };

  View.KEYS = {
    32: "snapDown",
    37: "moveLeft",
    38: "rotate",
    39: "moveRight",
    40: "moveDown"
  };

  View.STEP_MILLIS = 1000;

  View.prototype.handleKeyEvent = function (event) {
    if (View.KEYS[event.keyCode]) {
      switch (event.keyCode) {
        case 32:
          this.board.piece.snapDown();
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
          this.board.piece.moveDown();
          break;
        default:
          break;
      }
      this.render();
    }
  };

  View.prototype.render = function () {
    this.board.checkPiece();
    this.setupGrid();
    this.renderPiece();
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

  View.prototype.updateClasses = function(coord, className) {
    var flatCoord = (coord.i * this.board.cols) + coord.j;
    this.$li.eq(flatCoord).addClass(className);
  };

  View.prototype.setupGrid = function () {
    var html = "";

    for (var i = 0; i < this.board.rows; i++) {
      html += "<ul>";
      for (var j = 0; j < this.board.cols; j++) {
        html += "<li></li>";
      }
      html += "</ul>";
    }
    html += "<div class=\"stats\"></div>";

    this.$el.html(html);
    this.$li = this.$el.find("li");
    this.renderStats();
  };

  View.prototype.step = function () {
    if (this.board.piece.isPlaced()) {
      console.log("Game over");
    } else {
      this.board.stepPiece();
      this.render();
      this.isOver();
    }
  };

  View.prototype.isOver = function() {
  };

  View.prototype.renderStats = function () {
    var $stats = this.$el.find(".stats");
    var html = "<div class=\"level-container\">" + this.board.level + "</div>";
    html += "<div class=\"cleared-rows-container\">" + this.board.clearedRows + "</div>";
    $stats.html(html);
  }
})();
