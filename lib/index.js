var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

context.fillStyle = 'rgba(0, 255, 0, 1)';
context.fillRect(50, 50, 10, 10); // x, y, width, height

var x = 50;

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillRect(x++, 50, 10, 10); // x, y, width, height
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
