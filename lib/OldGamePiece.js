class GamePiece {
  constructor(x, y, height, width, color, dirX = 1, dirY = 0) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dirX = dirX;
    this.dirY = dirY;
    this.speed = 1;
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

  move() {
    this.x += this.dirX * this.speed;
    this.y += this.dirY * this.speed;
  }
}

module.exports = GamePiece;