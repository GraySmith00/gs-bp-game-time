const { assert } = require('chai');
const Player = require('../lib/Player');

describe('Player', function() {
  let player;
  let canvas = { width: 500, height: 500 };
  let ctx = 'ctx';

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
    assert.equal(Array.isArray(player.tails), true);
  });

  it('should start with an object at the tails array index [0]', () => {
    assert.equal(typeof lightCycle.tails[0], 'object');
  });

  it('should have tail starting point the same as the lightCycle', () => {
    assert.equal(lightCycle.tails[0].x, lightCycle.x);
    assert.equal(lightCycle.tails[0].y, lightCycle.y);
  });

  it('should have tail width & height the same as the lightCycle SCL', () => {
    assert.equal(lightCycle.tails[0].height, lightCycle.SCL);
    assert.equal(lightCycle.tails[0].width, lightCycle.SCL);
  });

  it('should start out with a direction of "Right"', () => {
    assert.equal(lightCycle.direction, 'Right');
  });

  it('should increase its x location if moving to the right', () => {
    lightCycle.direction = 'Right';
    lightCycle.move();
    assert.equal(lightCycle.tails[0].x, 110);
  });

  it('should decrease its x location if moving to the left', () => {
    lightCycle.direction = 'Left';
    lightCycle.move();
    assert.equal(lightCycle.tails[0].x, 90);
  });

  it('should increate its y location if moving down', () => {
    lightCycle.direction = 'Down';
    lightCycle.move();
    assert.equal(lightCycle.tails[0].y, 110);
  });

  it('should decrease its y location if moving up', () => {
    lightCycle.direction = 'Up';
    lightCycle.move();
    assert.equal(lightCycle.tails[0].y, 90);
  });
});
