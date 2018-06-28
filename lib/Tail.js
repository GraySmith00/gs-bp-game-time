const GamePiece = require('./GamePiece');

class Tail extends GamePiece {
  constructor(x, y, height, width, color) {
    super(x, y, height, width, color);
  }
}

module.exports = Tail;
