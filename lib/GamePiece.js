class GamePiece {
  constructor(x, y, height, width, color) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.xvel = 1;
    this.yvel = 0; // velocity / speed
  }

  isCollidingWith(object) {
    return !(
      this.x + this.width < object.x ||
      this.y + this.height < object.y ||
      this.x > object.x + object.width ||
      this.y > object.y + object.height
    );
  }

  draw(ctx) {
    const { x, y, height, width, color } = this;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, height, width);
  }

  direction(x, y) {
    this.xvel = x;
    this.yvel = y;
  }

  move() {
    // this.x += this.dx * this.dxv;
    // // this.y += this.dy * this.dxv;
    this.x = this.x + this.xvel;
    this.y = this.y + this.yvel;
  }
}

module.exports = GamePiece;
