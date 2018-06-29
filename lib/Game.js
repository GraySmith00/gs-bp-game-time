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
    const playerOne = new Player(100, 100, 0, SCL, '#fff04c', 'Right');
    const playerTwo = new Player(400, 100, 0, SCL, 'white', 'Left');
    this.players.push(playerOne);
    this.players.push(playerTwo);
    this.animate(ctx);
  }

  animate(ctx) {
    const playerOne = this.players[0];
    playerOne.lightCycle.draw(ctx);
    playerOne.lightCycle.move();

    const playerTwo = this.players[1];
    playerTwo.lightCycle.draw(ctx);
    playerTwo.lightCycle.move();

    const canvasObj = {
      x: 0,
      y: 0,
      height: 500,
      width: 500
    };

    if (!playerOne.lightCycle.tails[0].isCollidingWith(canvasObj)) {
      this.gameOver = true;
    }

    playerOne.lightCycle.tails.slice(1).forEach(tail => {
      if (playerOne.lightCycle.tails[0].isCollidingWith(tail)) {
        console.log('player one crashed into himself!');
        this.gameOver = true;
      }
    });

    playerTwo.lightCycle.tails.slice(1).forEach(tail => {
      if (playerOne.lightCycle.tails[0].isCollidingWith(tail)) {
        console.log('player two crashed into himself!');
        this.gameOver = true;
      }
    });

    playerTwo.lightCycle.tails.slice(1).forEach(tail => {
      if (playerOne.lightCycle.tails[0].isCollidingWith(tail)) {
        console.log('player1 crashed!!!!!');
        this.gameOver = true;
      }
    });

    playerOne.lightCycle.tails.slice(1).forEach(tail => {
      if (playerTwo.lightCycle.tails[0].isCollidingWith(tail)) {
        console.log('player2 crashed!!!!!');
        this.gameOver = true;
      }
    });
  }
}

module.exports = Game;
