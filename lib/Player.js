const LightCycle = require('./LightCycle');

class Player {
  constructor(startX, startY, score, SCL, color, ctx) {
    this.startX = startX;
    this.startY = startY;
    this.score = score;
    this.SCL = SCL;
    this.color = color;
    this.ctx = ctx;
    this.lightCycle = new LightCycle(startX, startY, SCL, color, ctx);
  }
}

module.exports = Player;
