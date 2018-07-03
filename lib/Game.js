const Player = require('./Player');

class Game {
  constructor(height, width, ctx) {
    this.players = [];
    this.height = height;
    this.width = width;
    this.SCL = 10;
    this.ctx = ctx;
    this.gameOver = false;
    this.levelOver = false;
    this.level = 0;
    this.winner = '';
  }

  loadPlayers() {
    const { SCL } = this;
    const playerOne = new Player(100, 100, SCL, '#1B33F5', 'Right');
    const playerTwo = new Player(400, 100, SCL, '#DC4BF7', 'Left');

    this.players.push(playerOne);
    this.players.push(playerTwo);
  }

  isGameOver(playersArr) {
    if (playersArr[0].score > 2 || playersArr[1].score > 2) {
      this.gameOver = true;
      this.declareWinner(playersArr);
      this.level = 0;
      this.players = [];
      this.loadPlayers();
    }
  }

  declareWinner(playersArr) {
    if (playersArr[0].score > 2) {
      this.winner = `Player 1 Victory!`;
    } else if (playersArr[1].score > 2) {
      this.winner = `Player 2 Victory!`;
    }
  }

  start() {
    this.levelOver = false;
    this.winner = '';
    this.players[0].direction = 'Right';
    this.players[1].direction = 'Left';
  }

  newLevel() {
    this.levelOver = false;
    this.players[0].setInitialTail();
    this.players[1].setInitialTail();
    this.players[0].x = 100;
    this.players[0].y = 100;
    this.players[1].x = 400;
    this.players[1].y = 100;
    this.players[0].direction = 'Right';
    this.players[1].direction = 'Left';
  }

  animate(ctx) {
    const playerOne = this.players[0];

    playerOne.draw(ctx);
    playerOne.move();

    const playerTwo = this.players[1];

    playerTwo.draw(ctx);
    playerTwo.move();

    this.selfCrash(playerOne, playerTwo);
    this.selfCrash(playerTwo, playerOne);

    this.wallCrash(playerOne, playerTwo);
    this.wallCrash(playerTwo, playerOne);

    this.crashIntoOtherPlayer(playerOne, playerTwo);
    this.crashIntoOtherPlayer(playerTwo, playerOne);
  }

  selfCrash(player1, player2) {
    player1.tails.slice(1).forEach(tail => {
      if (player1.tails[0].isCollidingWith(tail)) {
        player2.score++;
        this.level++;
        this.levelOver = true;
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

    if (!player1.tails[0].isCollidingWith(canvasObj)) {
      player2.score++;
      this.level++;
      this.levelOver = true;
    }
  }

  crashIntoOtherPlayer(playerOne, playerTwo) {
    playerTwo.tails.slice(1).forEach(tail => {
      if (playerOne.tails[0].isCollidingWith(tail)) {
        playerTwo.score++;
        this.level++;
        this.levelOver = true;
      }
    });
  }
}

module.exports = Game;
