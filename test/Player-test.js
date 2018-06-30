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
    assert.equal(player.startX, 100);
  });

  it('should have a lightCycle', function() {
    assert.equal(player.lightCycle.x, 100);
    assert.equal(player.lightCycle.y, 100);
    assert.equal(player.lightCycle.color, '#333444');
    assert.equal(player.lightCycle.speed, 10);
  });
});
