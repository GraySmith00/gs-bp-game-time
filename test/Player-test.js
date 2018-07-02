const { assert } = require('chai');
const Player = require('../lib/Player');

describe('Player', function() {
  let player;
  let ctx = {
    canvas: 'canvas#game',
    fillStyle: '#000000',
    filter: 'none',
    font: '10px sans-serif',
    globalAlpha: 1,
    globalCompositeOperation: 'source-over',
    imageSmoothingEnabled: true,
    imageSmoothingQuality: 'low',
    lineCap: 'butt',
    lineDashOffset: 0,
    lineJoin: 'miter',
    lineWidth: 1,
    miterLimit: 10,
    shadowBlur: 0,
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    strokeStyle: '#000000',
    textAlign: 'start',
    textBaseline: 'alphabetic'
  };

  beforeEach('instantiate player', function() {
    player = new Player(100, 100, 0, 10, '#333444', 'ctx');
  });

  it('should instantiate a new player', function() {
    assert.equal(player.x, 100);
  });

  it('should be an object', () => {
    assert.equal(typeof player, 'object');
  });

  it('should have a starting point', () => {
    assert.equal(player.x, 100);
    assert.equal(player.y, 100);
  });

  it('should have a color', () => {
    assert.equal(player.color, '#555666');
  });

  it('should initialize a tails array', () => {
    player.setInitialTail();
    assert.equal(Array.isArray(player.tails), true);
  });

  it('should draw a tail', () => {
    player.draw(ctx);
    assert.equal(ctx.fillStyle, '#333444');
  });

  it('should increase its x location if moving to the right', () => {
    player.direction = 'Right';
    player.move();
    assert.equal(player.tails[0].x, 110);
  });

  it('should decrease its x location if moving to the left', () => {
    player.direction = 'Left';
    player.move();
    assert.equal(player.tails[0].x, 90);
  });

  it('should increate its y location if moving down', () => {
    player.direction = 'Down';
    player.move();
    assert.equal(player.tails[0].y, 110);
  });

  it('should decrease its y location if moving up', () => {
    player.direction = 'Up';
    player.move();
    assert.equal(player.tails[0].y, 90);
  });
});
