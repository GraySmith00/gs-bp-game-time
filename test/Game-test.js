const { assert } = require('chai');
const Game = require('../lib/Game');

describe('Game', function() {
  let newGame;
  let canvas = { width: 500, height: 500 };
  let ctx = '';

  beforeEach('initialize new Game', function() {
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
});
