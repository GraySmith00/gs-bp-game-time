const Tail = require('./Tail');

class Player {
  constructor(x, y, SCL, color, direction) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.SCL = SCL;
    this.direction = direction;
    this.score = 0;
    this.setInitialTail();
  }

  setInitialTail() {
    const { x, y, SCL, color } = this;

    this.tails = [new Tail(x, y, SCL, SCL, color)];
  }

  draw(ctx) {
    const { tails } = this;

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

module.exports = Player;

// const LightCycle = require('./LightCycle');

// class Player {
//   constructor(startX, startY, score, SCL, color, direction) {
//     this.startX = startX;
//     this.startY = startY;
//     this.score = score;
//     this.SCL = SCL;
//     this.color = color;
//     this.direction = direction;
//     this.lightCycle = new LightCycle(startX, startY, SCL, color, direction);
//   }
// }

// module.exports = Player;
