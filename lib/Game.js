const Player = require('./Player');

class Game {
  constructor(height, width, ctx) {
    this.players = [];
    this.height = height;
    this.width = width;
    this.SCL = 10;
    this.ctx = ctx;
    this.gameOver = false;
  }

  start() {
    const { height, width, SCL, ctx } = this;
    const playerOne = new Player(100, 100, 0, SCL, '#fff04c');
    this.players.push(playerOne);
    this.animate(ctx);
  }

  animate(ctx) {
    const playerOne = this.players[0];
    playerOne.lightCycle.draw(ctx);
    playerOne.lightCycle.move();

    const canvasObj = {
      x: 0,
      y: 0,
      height: 500,
      width: 500
    };

    if (playerOne.lightCycle.tails[0].isCollidingWith(canvasObj)) {
      this.gameOver = true;
    }
  }
}

module.exports = Game;
