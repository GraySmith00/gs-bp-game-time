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
    const playerTwo = new Player(400, 100, 0, SCL, '#68216d', 'Left');
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

    this.selfCrash(playerOne, playerTwo);
    this.selfCrash(playerTwo, playerOne);

    this.wallCrash(playerOne, playerTwo);
    this.wallCrash(playerTwo, playerOne);

    this.crashIntoOtherPlayer(playerOne, playerTwo);
    this.crashIntoOtherPlayer(playerTwo, playerOne);
  }

  selfCrash(player1, player2) {
    player1.lightCycle.tails.slice(1).forEach(tail => {
      if (player1.lightCycle.tails[0].isCollidingWith(tail)) {
        console.log(`${player1} one crashed into himself!`);
        player2.score++;
        console.log(player2.score);
        this.gameOver = true;
      }
    });
  }

  wallCrash(player1, player2) {
    const canvasObj = {
      x: 0,
      y: 0,
      height: 500,
      width: 500
    };
    if (!player1.lightCycle.tails[0].isCollidingWith(canvasObj)) {
      player2.score++;
      console.log(player2.score);
      this.gameOver = true;
    }
  }

  crashIntoOtherPlayer(playerOne, playerTwo) {
    playerTwo.lightCycle.tails.slice(1).forEach(tail => {
      if (playerOne.lightCycle.tails[0].isCollidingWith(tail)) {
        // console.log(`${playerOne} crashed!!!!! into ${playerTwo}`);
        playerTwo.score++;
        console.log(playerTwo.score);
        this.gameOver = true;
      }
    });
  }
}

module.exports = Game;
