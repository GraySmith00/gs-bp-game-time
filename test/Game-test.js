const { assert } = require('chai');
const Game = require('../lib/Game');

describe('Game', function() {
  let newGame;

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

  beforeEach('initialize new Game', function() {
    const ctx = new Context();

    newGame = new Game(100, 100, ctx);
  });

  it('should instantiate a new game', function() {
    assert.equal(newGame.height, 100);
  });

  it('should load two new players', function() {
    newGame.loadPlayers();
    assert.equal(newGame.players.length, 2);
  });

  it('should check whether the game is over', function() {
    newGame.loadPlayers();
    newGame.players[0].score = 3;
    newGame.isGameOver(newGame.players);
    assert.equal(newGame.gameOver, true);
  });

  it('should declare a winner', function() {
    newGame.loadPlayers();
    newGame.players[0].score = 3;
    newGame.isGameOver(newGame.players);
    assert.equal(newGame.winner, 'Player 1 Victory!');
  });

  it('should start a new level', function() {
    newGame.loadPlayers();
    newGame.newLevel();

    assert.equal(newGame.players[0].x, 70);
    assert.equal(newGame.players[1].x, 420);
    assert.equal(newGame.players[0].direction, 'Right');
    assert.equal(newGame.players[1].direction, 'Left');
  });

  it('should animate each player as the game loops', function() {
    const ctx = new Context();

    newGame.loadPlayers();
    newGame.newLevel();
    newGame.animate(ctx);
    assert.equal(newGame.players[0].tails[0].x, 80);
    assert.equal(newGame.players[1].tails[0].x, 410);
    assert.equal(ctx.fillStyle, '#DC4BF7');
  });

  it('should detect a self crash', function() {
    // const { x, width } = newGame.players[0].tails[0];
    // x + width > newGame.players[0].tails[6].x;
    const ctx = new Context();
    let p1;

    newGame.loadPlayers();
    newGame.newLevel();
    p1 = newGame.players[0];

    newGame.animate(ctx);
    newGame.animate(ctx);
    p1.direction = 'Down';
    newGame.animate(ctx);
    p1.direction = 'Left';
    newGame.animate(ctx);
    p1.direction = 'Up';
    newGame.animate(ctx);

    assert.equal(newGame.levelOver, true);
    assert.isAbove(newGame.players[1].score, 0);
  });

  it('should detect a wall crash', function() {
    const ctx = new Context();
    let p1;

    newGame.loadPlayers();
    newGame.newLevel();
    p1 = newGame.players[0];

    newGame.animate(ctx);
    p1.direction = 'Up';

    newGame.animate(ctx);
    p1.direction = 'Left';

    for (let i = 0; i < 25; i++) {
      newGame.animate(ctx);
    }

    assert.equal(newGame.levelOver, true);
    assert.isAbove(newGame.players[1].score, 0);
  });

  it('should detect a crash into the other player', function() {
    const ctx = new Context();
    let p2;

    newGame.loadPlayers();
    newGame.newLevel();
    p2 = newGame.players[1];

    newGame.animate(ctx);
    p2.direction = 'Down';

    for (let i = 0; i < 50; i++) {
      newGame.animate(ctx);
    }

    assert.equal(newGame.levelOver, true);
    assert.isAbove(newGame.players[1].score, 0);
  });
});
