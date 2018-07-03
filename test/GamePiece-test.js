const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece');

describe('GamePiece', function() {
  class Context {
    constructor() {
      this.canvas = 'canvas#game';
      this.fillStyle = '#000000';
      this.filter = 'none';
      this.font = '10px sans-serif';
      this.globalAlpha = 1;
    }

    fillRect(x, y, width, height) {
      return `${(x, y, width, height)}`;
    }
  }

  it('should have properties', function() {
    const gamePiece = new GamePiece(50, 75, 10, 10, 'rgba(0, 255, 0, 1)');

    assert.deepEqual(gamePiece, {
      x: 50,
      y: 75,
      height: 10,
      width: 10,
      color: 'rgba(0, 255, 0, 1)'
    });
  });

  it('should be able to collide with another object', function() {
    const gamePiece1 = new GamePiece(50, 50, 10, 10, 'rgba(0, 255, 0, 1)');
    const gamePiece2 = new GamePiece(55, 55, 10, 10, 'rgba(255, 0, 0, 1)');

    const isColliding = gamePiece1.isCollidingWith(gamePiece2);

    assert.isTrue(isColliding);
  });

  it('should not be colliding when objects do not overlap', function() {
    const gamePiece1 = new GamePiece(50, 50, 10, 10, 'rgba(0, 255, 0, 1)');
    const gamePiece2 = new GamePiece(65, 65, 10, 10, 'rgba(255, 0, 0, 1)');

    const isColliding = gamePiece1.isCollidingWith(gamePiece2);

    assert.isFalse(isColliding);
  });

  it('should draw to the canvas', function() {
    const ctx = new Context();
    const gamePiece = new GamePiece(50, 75, 10, 10, 'rgba(0, 255, 0, 1)');

    gamePiece.draw(ctx);
    assert.equal(ctx.fillStyle, 'rgba(0, 255, 0, 1)');
  });
});
