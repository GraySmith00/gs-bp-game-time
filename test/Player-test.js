const { assert } = require('chai');
const Player = require('../lib/Player');

describe('Player', function() {
  let player;
  
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

  beforeEach('instantiate player', function() {
    player = new Player(100, 100, 10, '#333444', 'Right');
  });

  it('should instantiate a new player', function() {
    assert.equal(player.x, 100);
  });

  it('should be an object', function() {
    assert.equal(typeof player, 'object');
  });

  it('should have a starting point', function() {
    assert.equal(player.x, 100);
    assert.equal(player.y, 100);
  });

  it('should have a color', function() {
    assert.equal(player.color, '#333444');
  });

  it('should initialize a tails array', function() {
    player.setInitialTail();
    assert.equal(Array.isArray(player.tails), true);
  });

  it('should draw a tail', function() {
    const ctx = new Context();

    player.draw(ctx);
    assert.equal(ctx.fillStyle, '#333444');
  });

  it('should increase its x location if moving to the right', function() {
    player.direction = 'Right';
    player.move();
    assert.equal(player.tails[0].x, 110);
  });

  it('should decrease its x location if moving to the left', function() {
    player.direction = 'Left';
    player.move();
    assert.equal(player.tails[0].x, 90);
  });

  it('should increate its y location if moving down', function() {
    player.direction = 'Down';
    player.move();
    assert.equal(player.tails[0].y, 110);
  });

  it('should decrease its y location if moving up', function() {
    player.direction = 'Up';
    player.move();
    assert.equal(player.tails[0].y, 90);
  });
});
