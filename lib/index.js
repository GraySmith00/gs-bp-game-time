var GamePiece = require('./GamePiece');

var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgba(0, 255, 0, 1)';
ctx.fillRect(50, 50, 10, 10); // x, y, width, height

ctx.fillStyle = 'rgba(255, 0, 0, 1)';
ctx.fillRect(10, 10, 10, 10);

var x = 50;
var y = 10;

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(0, 255, 0, 1)';
  if (x < canvas.width - 10) {
    x++;
  }
  ctx.fillRect(x, 50, 10, 10); // x, y, width, height

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  if (y < canvas.height - 10) {
    y++;
  }
  ctx.fillRect(10, y, 10, 10);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
