const Tail = require('./Tail');

class LightCycle {
  constructor(x, y, SCL, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = SCL;
    this.SCL = SCL;
    this.direction = 'Right';
    this.tails = [new Tail(0, 0, SCL, SCL, color)];
  }

  draw(ctx) {
    const { x, y, color, SCL, tails } = this;

    tails.map(tail => {
      tail.draw(ctx);
    });
  }

  move() {
    const { SCL, color, direction } = this;
    const { x, y } = this.tails[0];
    if (direction === 'Right') {
      this.tails.unshift(new Tail(x + SCL, y, SCL, SCL, color));
    } else if (direction === 'Left') {
      this.tails.unshift(new Tail(x - SCL, y, SCL, SCL, color));
    } else if (direction === 'Up') {
      this.tails.unshift(new Tail(x, y - SCL, SCL, SCL, color));
    } else if (direction === 'Down') {
      this.tails.unshift(new Tail(x, y + SCL, SCL, SCL, color));
    }
  }
}

module.exports = LightCycle;