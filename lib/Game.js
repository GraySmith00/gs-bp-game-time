const Player = require('./Player');


class Game {
  constructor(height, width) {
    this.players = [];
    this.height = height;
    this.width = width;
    this.SCL = 10;
  }

  start() {
    const { height, width, SCL } = this;
    const playerOne = new Player(Math.floor(width * .15), Math.floor(height * .5), 0, SCL, '#fff04c');
    
  }
}

module.exports = Game;

//player class
  //score
  //starting

//trail