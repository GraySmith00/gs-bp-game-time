const LightCycle = require('./LightCycle');

class Player {
  constructor(startX, startY, score, SCL, color, direction) {
    this.startX = startX;
    this.startY = startY;
    this.score = score;
    this.SCL = SCL;
    this.color = color;
    this.direction = direction;
    this.lightCycle = new LightCycle(startX, startY, SCL, color, direction);
  }
}

module.exports = Player;
