# Fortris

Fortris is a browser-based version of the classic puzzle game, Tetris.

[Play it here!](http://erichsu.io/Fortris)

## Technological Highlights

### Overview

Fortris is built with *JavaScript* and rendered with *jQuery* DOM manipulation and *CSS* styling.

### Object Oriented Design

Object orientation is a must for a game like Fortris. [Pieces](https://github.com/erichsu7/Fortris/blob/gh-pages/js/piece.js) are made of [blocks](https://github.com/erichsu7/Fortris/blob/gh-pages/js/block.js), which store [coordinates](https://github.com/erichsu7/Fortris/blob/gh-pages/js/coord.js). The [board](https://github.com/erichsu7/Fortris/blob/gh-pages/js/board.js) keeps track of its blocks. Pieces are further defined by their shape using [prototypal inheritance](https://github.com/erichsu7/Fortris/blob/gh-pages/js/inherit.js), since each shape of piece needs its own `Piece#rotate` function.

### Game Board

The board is stored as a bucketized hash, with row numbers as the keys and arrays of blocks as the values. This data structure allows for easy addition and subtraction of blocks. When the moving piece is placed, its blocks are deconstructed into their respective rows' block arrays. Once the row is full (the array is of a certain length), the entire blocks array is deleted, and the current row is assigned the blocks of the row above it recursively to cascade the blocks down.

### Display

The front-end consists of a [view](https://github.com/erichsu7/Fortris/blob/gh-pages/js/tetris-view.js) which listens for key inputs and renders the game grid. Key inputs manipulate the falling piece's position and orientation on the back-end. The render function creates a `<ul>` full of other `<ul>` elements representing rows, each of which contains `<li>` elements for the cells in the grid. Then, CSS classes are added to each `<li>` according to the blocks in the board.
