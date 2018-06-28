const LightCycle = require('./LightCycle');

class Player {
  constructor(startX, startY, score, keyCodeSet, SCL, color) {
      this.startX = startX;
      this.startY = startY;
      this.score = score;
      this.keyCodeSet = keyCodeSet;
      this.SCL = SCL;
      this.color = color;
      this.lightCycle = new LightCycle(startX, startY, SCL, color);
  }
}

module.exports = Player
