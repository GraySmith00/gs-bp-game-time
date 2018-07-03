/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = __webpack_require__(/*! ./Player */ "./lib/Player.js");

var Game = function () {
  function Game(height, width, ctx) {
    _classCallCheck(this, Game);

    this.players = [];
    this.height = height;
    this.width = width;
    this.SCL = 10;
    this.ctx = ctx;
    this.gameOver = false;
    this.levelOver = false;
    this.level = 0;
    this.winner = '';
    this.ready = true;
  }

  _createClass(Game, [{
    key: 'loadPlayers',
    value: function loadPlayers() {
      var SCL = this.SCL;

      var playerOne = new Player(70, 230, SCL, '#1B33F5', 'Right');
      var playerTwo = new Player(420, 230, SCL, '#DC4BF7', 'Left');

      this.players.push(playerOne);
      this.players.push(playerTwo);
    }
  }, {
    key: 'isGameOver',
    value: function isGameOver(playersArr) {
      if (playersArr[0].score > 2 || playersArr[1].score > 2) {
        this.gameOver = true;
        this.declareWinner(playersArr);
        this.level = 0;
        this.players = [];
        this.loadPlayers();
      }
    }
  }, {
    key: 'declareWinner',
    value: function declareWinner(playersArr) {
      if (playersArr[0].score > 2) {
        this.winner = 'Player 1 Victory!';
      } else if (playersArr[1].score > 2) {
        this.winner = 'Player 2 Victory!';
      }
    }
  }, {
    key: 'start',
    value: function start() {
      this.levelOver = false;
      this.winner = '';
      this.players[0].direction = 'Right';
      this.players[1].direction = 'Left';
    }
  }, {
    key: 'newLevel',
    value: function newLevel() {
      this.levelOver = false;
      this.players[0].setInitialTail();
      this.players[1].setInitialTail();
      this.players[0].x = 70;
      this.players[0].y = 230;
      this.players[1].x = 420;
      this.players[1].y = 230;
      this.players[0].direction = 'Right';
      this.players[1].direction = 'Left';
    }
  }, {
    key: 'animate',
    value: function animate(ctx) {
      var playerOne = this.players[0];

      playerOne.draw(ctx);
      playerOne.move();

      var playerTwo = this.players[1];

      playerTwo.draw(ctx);
      playerTwo.move();

      this.selfCrash(playerOne, playerTwo);
      this.selfCrash(playerTwo, playerOne);

      this.wallCrash(playerOne, playerTwo);
      this.wallCrash(playerTwo, playerOne);

      this.crashIntoOtherPlayer(playerOne, playerTwo);
      this.crashIntoOtherPlayer(playerTwo, playerOne);
    }
  }, {
    key: 'selfCrash',
    value: function selfCrash(player1, player2) {
      var _this = this;

      player1.tails.slice(1).forEach(function (tail) {
        if (player1.tails[0].isCollidingWith(tail)) {
          player2.score++;
          _this.level++;
          _this.levelOver = true;
        }
      });
    }
  }, {
    key: 'wallCrash',
    value: function wallCrash(player1, player2) {
      var canvasObj = {
        x: 0,
        y: 0,
        height: 500,
        width: 500
      };

      if (!player1.tails[0].isCollidingWith(canvasObj)) {
        player2.score++;
        this.level++;
        this.levelOver = true;
      }
    }
  }, {
    key: 'crashIntoOtherPlayer',
    value: function crashIntoOtherPlayer(playerOne, playerTwo) {
      var _this2 = this;

      playerTwo.tails.slice(1).forEach(function (tail) {
        if (playerOne.tails[0].isCollidingWith(tail)) {
          playerTwo.score++;
          _this2.level++;
          _this2.levelOver = true;
        }
      });
    }
  }]);

  return Game;
}();

module.exports = Game;

/***/ }),

/***/ "./lib/GamePiece.js":
/*!**************************!*\
  !*** ./lib/GamePiece.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GamePiece = function () {
  function GamePiece(x, y, height, width, color) {
    _classCallCheck(this, GamePiece);

    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
  }

  _createClass(GamePiece, [{
    key: "isCollidingWith",
    value: function isCollidingWith(object) {
      return !(this.x + this.width <= object.x || this.y + this.height <= object.y || this.x >= object.x + object.width || this.y >= object.y + object.height);
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          color = this.color;


      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
    }
  }]);

  return GamePiece;
}();

module.exports = GamePiece;

/***/ }),

/***/ "./lib/Player.js":
/*!***********************!*\
  !*** ./lib/Player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tail = __webpack_require__(/*! ./Tail */ "./lib/Tail.js");

var Player = function () {
  function Player(x, y, SCL, color, direction) {
    _classCallCheck(this, Player);

    this.x = x;
    this.y = y;
    this.color = color;
    this.SCL = SCL;
    this.direction = direction;
    this.score = 0;
    this.setInitialTail();
  }

  _createClass(Player, [{
    key: 'setInitialTail',
    value: function setInitialTail() {
      var x = this.x,
          y = this.y,
          SCL = this.SCL,
          color = this.color;


      this.tails = [new Tail(x, y, SCL, SCL, color)];
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      var tails = this.tails;


      tails.map(function (tail) {
        tail.draw(ctx);
      });
    }
  }, {
    key: 'move',
    value: function move() {
      var SCL = this.SCL,
          color = this.color,
          direction = this.direction;
      var _tails$ = this.tails[0],
          x = _tails$.x,
          y = _tails$.y;


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
  }]);

  return Player;
}();

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

/***/ }),

/***/ "./lib/Tail.js":
/*!*********************!*\
  !*** ./lib/Tail.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

var Tail = function (_GamePiece) {
  _inherits(Tail, _GamePiece);

  function Tail(x, y, height, width, color) {
    _classCallCheck(this, Tail);

    return _possibleConstructorReturn(this, (Tail.__proto__ || Object.getPrototypeOf(Tail)).call(this, x, y, height, width, color));
  }

  return Tail;
}(GamePiece);

module.exports = Tail;

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Game = __webpack_require__(/*! ./Game */ "./lib/Game.js");

var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

var newGame = new Game(canvas.height, canvas.width, ctx);

newGame.loadPlayers();

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 32 && newGame.level === 0 && newGame.ready) {
    newGame.ready = false;
    canvas.style.backgroundImage = 'url(https://i.imgur.com/P5GYVxC.png)';
    document.querySelector('.player1wins').innerHTML = newGame.players[0].score;
    document.querySelector('.player2wins').innerHTML = newGame.players[1].score;
    newGame.start();
    playSong();
    document.querySelector('.winner-block').innerHTML = newGame.winner;
    newGame.animate(ctx);
    requestAnimationFrame(gameLoop);
  } else if (e.keyCode === 32 && newGame.level > 0 && newGame.ready) {
    newGame.ready = false;
    canvas.style.backgroundImage = 'url(https://i.imgur.com/P5GYVxC.png)';
    newGame.newLevel();
    newGame.animate(ctx);
    requestAnimationFrame(gameLoop);
  }
});

var frameRate = function frameRate() {
  var rate = void 0;

  switch (newGame.level) {
    case 0:
      rate = 120;
      break;
    case 1:
      rate = 60;
      break;
    default:
      rate = 30;
  }
  return rate;
};

function gameLoop() {
  window.setTimeout(function () {
    if (newGame.levelOver) {
      gameOverDisplay();
      document.querySelector('.player1wins').innerHTML = newGame.players[0].score;
      document.querySelector('.player2wins').innerHTML = newGame.players[1].score;
      newGame.isGameOver(newGame.players);
      if (newGame.gameOver) {
        stopSong();
      }
      document.querySelector('.winner-block').innerHTML = newGame.winner;
      return;
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      newGame.animate(ctx);
    }
    requestAnimationFrame(gameLoop);
  }, frameRate());
}

function gameOverDisplay() {
  if (newGame.players[0].score < 3 && newGame.players[1].score < 3) {
    canvas.style.backgroundImage = 'url(https://i.imgur.com/GkWAM53.png)';
    setTimeout(function () {
      newGame.ready = true;
    }, 500);
  } else {
    canvas.style.backgroundImage = 'url(https://i.imgur.com/rnEzBWM.png)';
    setTimeout(function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.style.backgroundImage = 'url(https://i.imgur.com/iiCV891.png)';
      newGame.ready = true;
    }, 2000);
  }
}

function playSong() {
  var audio = document.querySelector('audio[data-key="32"]');

  audio.play();
}

function stopSong() {
  var audio = document.querySelector('audio[data-key="32"]');

  audio.pause();
}

document.addEventListener('keydown', keyDownHandler, false);

function keyDownHandler(e) {
  var pOneCycle = newGame.players[0];
  var pTwoCycle = newGame.players[1];

  switch (e.keyCode) {
    case 38:
      // UP
      if (pTwoCycle.direction != 'Down') {
        pTwoCycle.direction = 'Up';
      }
      break;
    case 40:
      // DOWN
      if (pTwoCycle.direction != 'Up') {
        pTwoCycle.direction = 'Down';
      }
      break;
    case 37:
      // LEFT
      if (pTwoCycle.direction != 'Right') {
        pTwoCycle.direction = 'Left';
      }
      break;
    case 39:
      // RIGHT
      if (pTwoCycle.direction != 'Left') {
        pTwoCycle.direction = 'Right';
      }
      break;
    case 87:
      // UP
      if (pOneCycle.direction != 'Down') {
        pOneCycle.direction = 'Up';
      }
      break;
    case 83:
      // DOWN
      if (pOneCycle.direction != 'Up') {
        pOneCycle.direction = 'Down';
      }
      break;
    case 65:
      // LEFT
      if (pOneCycle.direction != 'Right') {
        pOneCycle.direction = 'Left';
      }
      break;
    case 68:
      // RIGHT
      if (pOneCycle.direction != 'Left') {
        pOneCycle.direction = 'Right';
      }
      break;
  }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvUGxheWVyLmpzIiwid2VicGFjazovLy8uL2xpYi9UYWlsLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJyZXF1aXJlIiwiR2FtZSIsImhlaWdodCIsIndpZHRoIiwiY3R4IiwicGxheWVycyIsIlNDTCIsImdhbWVPdmVyIiwibGV2ZWxPdmVyIiwibGV2ZWwiLCJ3aW5uZXIiLCJyZWFkeSIsInBsYXllck9uZSIsInBsYXllclR3byIsInB1c2giLCJwbGF5ZXJzQXJyIiwic2NvcmUiLCJkZWNsYXJlV2lubmVyIiwibG9hZFBsYXllcnMiLCJkaXJlY3Rpb24iLCJzZXRJbml0aWFsVGFpbCIsIngiLCJ5IiwiZHJhdyIsIm1vdmUiLCJzZWxmQ3Jhc2giLCJ3YWxsQ3Jhc2giLCJjcmFzaEludG9PdGhlclBsYXllciIsInBsYXllcjEiLCJwbGF5ZXIyIiwidGFpbHMiLCJzbGljZSIsImZvckVhY2giLCJpc0NvbGxpZGluZ1dpdGgiLCJ0YWlsIiwiY2FudmFzT2JqIiwibW9kdWxlIiwiZXhwb3J0cyIsIkdhbWVQaWVjZSIsImNvbG9yIiwib2JqZWN0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJUYWlsIiwibWFwIiwidW5zaGlmdCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwibmV3R2FtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Q29kZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsInN0YXJ0IiwicGxheVNvbmciLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2FtZUxvb3AiLCJuZXdMZXZlbCIsImZyYW1lUmF0ZSIsInJhdGUiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiZ2FtZU92ZXJEaXNwbGF5IiwiaXNHYW1lT3ZlciIsInN0b3BTb25nIiwiY2xlYXJSZWN0IiwiYXVkaW8iLCJwbGF5IiwicGF1c2UiLCJrZXlEb3duSGFuZGxlciIsInBPbmVDeWNsZSIsInBUd29DeWNsZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFNQSxTQUFTLG1CQUFBQyxDQUFRLGlDQUFSLENBQWY7O0lBRU1DLEk7QUFDSixnQkFBWUMsTUFBWixFQUFvQkMsS0FBcEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQUE7O0FBQzlCLFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS0gsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0csR0FBTCxHQUFXLEVBQVg7QUFDQSxTQUFLRixHQUFMLEdBQVdB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O0FBQ0YsU0FBSyxFQUFMO0FBQVM7QUFDUCxVQUFJeUQsVUFBVXpELFNBQVYsSUFBdUIsT0FBM0IsRUFBb0M7QUFDbEN5RCxrQkFBVXpELFNBQVYsR0FBc0IsTUFBdEI7QUFDRDtBQUNEO0FBQ0YsU0FBSyxFQUFMO0FBQVM7QUFDUCxVQUFJeUQsVUFBVXpELFNBQVYsSUFBdUIsTUFBM0IsRUFBbUM7QUFDakN5RCxrQkFBVXpELFNBQVYsR0FBc0IsT0FBdEI7QUFDRDtBQUNEO0FBeENGO0FBMENELEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsImNvbnN0IFBsYXllciA9IHJlcXVpcmUoJy4vUGxheWVyJyk7XG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihoZWlnaHQsIHdpZHRoLCBjdHgpIHtcbiAgICB0aGlzLnBsYXllcnMgPSBbXTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5TQ0wgPSAxMDtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5sZXZlbE92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmxldmVsID0gMDtcbiAgICB0aGlzLndpbm5lciA9ICcnO1xuICAgIHRoaXMucmVhZHkgPSB0cnVlO1xuICB9XG5cbiAgbG9hZFBsYXllcnMoKSB7XG4gICAgY29uc3QgeyBTQ0wgfSA9IHRoaXM7XG4gICAgY29uc3QgcGxheWVyT25lID0gbmV3IFBsYXllcig3MCwgMjMwLCBTQ0wsICcjMUIzM0Y1JywgJ1JpZ2h0Jyk7XG4gICAgY29uc3QgcGxheWVyVHdvID0gbmV3IFBsYXllcig0MjAsIDIzMCwgU0NMLCAnI0RDNEJGNycsICdMZWZ0Jyk7XG5cbiAgICB0aGlzLnBsYXllcnMucHVzaChwbGF5ZXJPbmUpO1xuICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllclR3byk7XG4gIH1cblxuICBpc0dhbWVPdmVyKHBsYXllcnNBcnIpIHtcbiAgICBpZiAocGxheWVyc0FyclswXS5zY29yZSA+IDIgfHwgcGxheWVyc0FyclsxXS5zY29yZSA+IDIpIHtcbiAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgdGhpcy5kZWNsYXJlV2lubmVyKHBsYXllcnNBcnIpO1xuICAgICAgdGhpcy5sZXZlbCA9IDA7XG4gICAgICB0aGlzLnBsYXllcnMgPSBbXTtcbiAgICAgIHRoaXMubG9hZFBsYXllcnMoKTtcbiAgICB9XG4gIH1cblxuICBkZWNsYXJlV2lubmVyKHBsYXllcnNBcnIpIHtcbiAgICBpZiAocGxheWVyc0FyclswXS5zY29yZSA+IDIpIHtcbiAgICAgIHRoaXMud2lubmVyID0gYFBsYXllciAxIFZpY3RvcnkhYDtcbiAgICB9IGVsc2UgaWYgKHBsYXllcnNBcnJbMV0uc2NvcmUgPiAyKSB7XG4gICAgICB0aGlzLndpbm5lciA9IGBQbGF5ZXIgMiBWaWN0b3J5IWA7XG4gICAgfVxuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5sZXZlbE92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLndpbm5lciA9ICcnO1xuICAgIHRoaXMucGxheWVyc1swXS5kaXJlY3Rpb24gPSAnUmlnaHQnO1xuICAgIHRoaXMucGxheWVyc1sxXS5kaXJlY3Rpb24gPSAnTGVmdCc7XG4gIH1cblxuICBuZXdMZXZlbCgpIHtcbiAgICB0aGlzLmxldmVsT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMucGxheWVyc1swXS5zZXRJbml0aWFsVGFpbCgpO1xuICAgIHRoaXMucGxheWVyc1sxXS5zZXRJbml0aWFsVGFpbCgpO1xuICAgIHRoaXMucGxheWVyc1swXS54ID0gNzA7XG4gICAgdGhpcy5wbGF5ZXJzWzBdLnkgPSAyMzA7XG4gICAgdGhpcy5wbGF5ZXJzWzFdLnggPSA0MjA7XG4gICAgdGhpcy5wbGF5ZXJzWzFdLnkgPSAyMzA7XG4gICAgdGhpcy5wbGF5ZXJzWzBdLmRpcmVjdGlvbiA9ICdSaWdodCc7XG4gICAgdGhpcy5wbGF5ZXJzWzFdLmRpcmVjdGlvbiA9ICdMZWZ0JztcbiAgfVxuXG4gIGFuaW1hdGUoY3R4KSB7XG4gICAgY29uc3QgcGxheWVyT25lID0gdGhpcy5wbGF5ZXJzWzBdO1xuXG4gICAgcGxheWVyT25lLmRyYXcoY3R4KTtcbiAgICBwbGF5ZXJPbmUubW92ZSgpO1xuXG4gICAgY29uc3QgcGxheWVyVHdvID0gdGhpcy5wbGF5ZXJzWzFdO1xuXG4gICAgcGxheWVyVHdvLmRyYXcoY3R4KTtcbiAgICBwbGF5ZXJUd28ubW92ZSgpO1xuXG4gICAgdGhpcy5zZWxmQ3Jhc2gocGxheWVyT25lLCBwbGF5ZXJUd28pO1xuICAgIHRoaXMuc2VsZkNyYXNoKHBsYXllclR3bywgcGxheWVyT25lKTtcblxuICAgIHRoaXMud2FsbENyYXNoKHBsYXllck9uZSwgcGxheWVyVHdvKTtcbiAgICB0aGlzLndhbGxDcmFzaChwbGF5ZXJUd28sIHBsYXllck9uZSk7XG5cbiAgICB0aGlzLmNyYXNoSW50b090aGVyUGxheWVyKHBsYXllck9uZSwgcGxheWVyVHdvKTtcbiAgICB0aGlzLmNyYXNoSW50b090aGVyUGxheWVyKHBsYXllclR3bywgcGxheWVyT25lKTtcbiAgfVxuXG4gIHNlbGZDcmFzaChwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gICAgcGxheWVyMS50YWlscy5zbGljZSgxKS5mb3JFYWNoKHRhaWwgPT4ge1xuICAgICAgaWYgKHBsYXllcjEudGFpbHNbMF0uaXNDb2xsaWRpbmdXaXRoKHRhaWwpKSB7XG4gICAgICAgIHBsYXllcjIuc2NvcmUrKztcbiAgICAgICAgdGhpcy5sZXZlbCsrO1xuICAgICAgICB0aGlzLmxldmVsT3ZlciA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB3YWxsQ3Jhc2gocGxheWVyMSwgcGxheWVyMikge1xuICAgIGNvbnN0IGNhbnZhc09iaiA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgICB3aWR0aDogNTAwXG4gICAgfTtcblxuICAgIGlmICghcGxheWVyMS50YWlsc1swXS5pc0NvbGxpZGluZ1dpdGgoY2FudmFzT2JqKSkge1xuICAgICAgcGxheWVyMi5zY29yZSsrO1xuICAgICAgdGhpcy5sZXZlbCsrO1xuICAgICAgdGhpcy5sZXZlbE92ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGNyYXNoSW50b090aGVyUGxheWVyKHBsYXllck9uZSwgcGxheWVyVHdvKSB7XG4gICAgcGxheWVyVHdvLnRhaWxzLnNsaWNlKDEpLmZvckVhY2godGFpbCA9PiB7XG4gICAgICBpZiAocGxheWVyT25lLnRhaWxzWzBdLmlzQ29sbGlkaW5nV2l0aCh0YWlsKSkge1xuICAgICAgICBwbGF5ZXJUd28uc2NvcmUrKztcbiAgICAgICAgdGhpcy5sZXZlbCsrO1xuICAgICAgICB0aGlzLmxldmVsT3ZlciA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lO1xuIiwiY2xhc3MgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgfVxuXG4gIGlzQ29sbGlkaW5nV2l0aChvYmplY3QpIHtcbiAgICByZXR1cm4gIShcbiAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPD0gb2JqZWN0LnggfHxcbiAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0IDw9IG9iamVjdC55IHx8XG4gICAgICB0aGlzLnggPj0gb2JqZWN0LnggKyBvYmplY3Qud2lkdGggfHxcbiAgICAgIHRoaXMueSA+PSBvYmplY3QueSArIG9iamVjdC5oZWlnaHRcbiAgICApO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjb25zdCB7IHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yIH0gPSB0aGlzO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVQaWVjZTtcbiIsImNvbnN0IFRhaWwgPSByZXF1aXJlKCcuL1RhaWwnKTtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgU0NMLCBjb2xvciwgZGlyZWN0aW9uKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLlNDTCA9IFNDTDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLnNldEluaXRpYWxUYWlsKCk7XG4gIH1cblxuICBzZXRJbml0aWFsVGFpbCgpIHtcbiAgICBjb25zdCB7IHgsIHksIFNDTCwgY29sb3IgfSA9IHRoaXM7XG5cbiAgICB0aGlzLnRhaWxzID0gW25ldyBUYWlsKHgsIHksIFNDTCwgU0NMLCBjb2xvcildO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjb25zdCB7IHRhaWxzIH0gPSB0aGlzO1xuXG4gICAgdGFpbHMubWFwKHRhaWwgPT4ge1xuICAgICAgdGFpbC5kcmF3KGN0eCk7XG4gICAgfSk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIGNvbnN0IHsgU0NMLCBjb2xvciwgZGlyZWN0aW9uIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy50YWlsc1swXTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdSaWdodCcpIHtcbiAgICAgIHRoaXMudGFpbHMudW5zaGlmdChuZXcgVGFpbCh4ICsgU0NMLCB5LCBTQ0wsIFNDTCwgY29sb3IpKTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ0xlZnQnKSB7XG4gICAgICB0aGlzLnRhaWxzLnVuc2hpZnQobmV3IFRhaWwoeCAtIFNDTCwgeSwgU0NMLCBTQ0wsIGNvbG9yKSk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdVcCcpIHtcbiAgICAgIHRoaXMudGFpbHMudW5zaGlmdChuZXcgVGFpbCh4LCB5IC0gU0NMLCBTQ0wsIFNDTCwgY29sb3IpKTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ0Rvd24nKSB7XG4gICAgICB0aGlzLnRhaWxzLnVuc2hpZnQobmV3IFRhaWwoeCwgeSArIFNDTCwgU0NMLCBTQ0wsIGNvbG9yKSk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuXG4vLyBjb25zdCBMaWdodEN5Y2xlID0gcmVxdWlyZSgnLi9MaWdodEN5Y2xlJyk7XG5cbi8vIGNsYXNzIFBsYXllciB7XG4vLyAgIGNvbnN0cnVjdG9yKHN0YXJ0WCwgc3RhcnRZLCBzY29yZSwgU0NMLCBjb2xvciwgZGlyZWN0aW9uKSB7XG4vLyAgICAgdGhpcy5zdGFydFggPSBzdGFydFg7XG4vLyAgICAgdGhpcy5zdGFydFkgPSBzdGFydFk7XG4vLyAgICAgdGhpcy5zY29yZSA9IHNjb3JlO1xuLy8gICAgIHRoaXMuU0NMID0gU0NMO1xuLy8gICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbi8vICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbi8vICAgICB0aGlzLmxpZ2h0Q3ljbGUgPSBuZXcgTGlnaHRDeWNsZShzdGFydFgsIHN0YXJ0WSwgU0NMLCBjb2xvciwgZGlyZWN0aW9uKTtcbi8vICAgfVxuLy8gfVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlJyk7XG5cbmNsYXNzIFRhaWwgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcikge1xuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRhaWw7XG4iLCJjb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lJyk7XG5cbnZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xudmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5jb25zdCBuZXdHYW1lID0gbmV3IEdhbWUoY2FudmFzLmhlaWdodCwgY2FudmFzLndpZHRoLCBjdHgpO1xuXG5uZXdHYW1lLmxvYWRQbGF5ZXJzKCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG4gIGlmIChlLmtleUNvZGUgPT09IDMyICYmIG5ld0dhbWUubGV2ZWwgPT09IDAgJiYgbmV3R2FtZS5yZWFkeSkge1xuICAgIG5ld0dhbWUucmVhZHkgPSBmYWxzZTtcbiAgICBjYW52YXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChodHRwczovL2kuaW1ndXIuY29tL1A1R1lWeEMucG5nKSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjF3aW5zJykuaW5uZXJIVE1MID0gbmV3R2FtZS5wbGF5ZXJzWzBdLnNjb3JlO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIyd2lucycpLmlubmVySFRNTCA9IG5ld0dhbWUucGxheWVyc1sxXS5zY29yZTtcbiAgICBuZXdHYW1lLnN0YXJ0KCk7XG4gICAgcGxheVNvbmcoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyLWJsb2NrJykuaW5uZXJIVE1MID0gbmV3R2FtZS53aW5uZXI7XG4gICAgbmV3R2FtZS5hbmltYXRlKGN0eCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDMyICYmIG5ld0dhbWUubGV2ZWwgPiAwICYmIG5ld0dhbWUucmVhZHkpIHtcbiAgICBuZXdHYW1lLnJlYWR5ID0gZmFsc2U7XG4gICAgY2FudmFzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoaHR0cHM6Ly9pLmltZ3VyLmNvbS9QNUdZVnhDLnBuZyknO1xuICAgIG5ld0dhbWUubmV3TGV2ZWwoKTtcbiAgICBuZXdHYW1lLmFuaW1hdGUoY3R4KTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICB9XG59KTtcblxuY29uc3QgZnJhbWVSYXRlID0gZnVuY3Rpb24oKSB7XG4gIGxldCByYXRlO1xuXG4gIHN3aXRjaCAobmV3R2FtZS5sZXZlbCkge1xuICBjYXNlIDA6XG4gICAgcmF0ZSA9IDEyMDtcbiAgICBicmVhaztcbiAgY2FzZSAxOlxuICAgIHJhdGUgPSA2MDtcbiAgICBicmVhaztcbiAgZGVmYXVsdDpcbiAgICByYXRlID0gMzA7XG4gIH1cbiAgcmV0dXJuIHJhdGU7XG59O1xuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmIChuZXdHYW1lLmxldmVsT3Zlcikge1xuICAgICAgZ2FtZU92ZXJEaXNwbGF5KCk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMXdpbnMnKS5pbm5lckhUTUwgPVxuICAgICAgICBuZXdHYW1lLnBsYXllcnNbMF0uc2NvcmU7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMndpbnMnKS5pbm5lckhUTUwgPVxuICAgICAgICBuZXdHYW1lLnBsYXllcnNbMV0uc2NvcmU7XG4gICAgICBuZXdHYW1lLmlzR2FtZU92ZXIobmV3R2FtZS5wbGF5ZXJzKTtcbiAgICAgIGlmIChuZXdHYW1lLmdhbWVPdmVyKSB7XG4gICAgICAgIHN0b3BTb25nKCk7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyLWJsb2NrJykuaW5uZXJIVE1MID0gbmV3R2FtZS53aW5uZXI7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIG5ld0dhbWUuYW5pbWF0ZShjdHgpO1xuICAgIH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICB9LCBmcmFtZVJhdGUoKSk7XG59XG5cbmZ1bmN0aW9uIGdhbWVPdmVyRGlzcGxheSgpIHtcbiAgaWYgKG5ld0dhbWUucGxheWVyc1swXS5zY29yZSA8IDMgJiYgbmV3R2FtZS5wbGF5ZXJzWzFdLnNjb3JlIDwgMykge1xuICAgIGNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKGh0dHBzOi8vaS5pbWd1ci5jb20vR2tXQU01My5wbmcpJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG5ld0dhbWUucmVhZHkgPSB0cnVlO1xuICAgIH0sIDUwMCk7XG4gIH0gZWxzZSB7XG4gICAgY2FudmFzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoaHR0cHM6Ly9pLmltZ3VyLmNvbS9ybkV6QldNLnBuZyknO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgY2FudmFzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoaHR0cHM6Ly9pLmltZ3VyLmNvbS9paUNWODkxLnBuZyknO1xuICAgICAgbmV3R2FtZS5yZWFkeSA9IHRydWU7XG4gICAgfSwgMjAwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGxheVNvbmcoKSB7XG4gIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYXVkaW9bZGF0YS1rZXk9XCIzMlwiXWApO1xuXG4gIGF1ZGlvLnBsYXkoKTtcbn1cblxuZnVuY3Rpb24gc3RvcFNvbmcoKSB7XG4gIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYXVkaW9bZGF0YS1rZXk9XCIzMlwiXWApO1xuXG4gIGF1ZGlvLnBhdXNlKCk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlEb3duSGFuZGxlciwgZmFsc2UpO1xuXG5mdW5jdGlvbiBrZXlEb3duSGFuZGxlcihlKSB7XG4gIGxldCBwT25lQ3ljbGUgPSBuZXdHYW1lLnBsYXllcnNbMF07XG4gIGxldCBwVHdvQ3ljbGUgPSBuZXdHYW1lLnBsYXllcnNbMV07XG5cbiAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgY2FzZSAzODogLy8gVVBcbiAgICBpZiAocFR3b0N5Y2xlLmRpcmVjdGlvbiAhPSAnRG93bicpIHtcbiAgICAgIHBUd29DeWNsZS5kaXJlY3Rpb24gPSAnVXAnO1xuICAgIH1cbiAgICBicmVhaztcbiAgY2FzZSA0MDogLy8gRE9XTlxuICAgIGlmIChwVHdvQ3ljbGUuZGlyZWN0aW9uICE9ICdVcCcpIHtcbiAgICAgIHBUd29DeWNsZS5kaXJlY3Rpb24gPSAnRG93bic7XG4gICAgfVxuICAgIGJyZWFrO1xuICBjYXNlIDM3OiAvLyBMRUZUXG4gICAgaWYgKHBUd29DeWNsZS5kaXJlY3Rpb24gIT0gJ1JpZ2h0Jykge1xuICAgICAgcFR3b0N5Y2xlLmRpcmVjdGlvbiA9ICdMZWZ0JztcbiAgICB9XG4gICAgYnJlYWs7XG4gIGNhc2UgMzk6IC8vIFJJR0hUXG4gICAgaWYgKHBUd29DeWNsZS5kaXJlY3Rpb24gIT0gJ0xlZnQnKSB7XG4gICAgICBwVHdvQ3ljbGUuZGlyZWN0aW9uID0gJ1JpZ2h0JztcbiAgICB9XG4gICAgYnJlYWs7XG4gIGNhc2UgODc6IC8vIFVQXG4gICAgaWYgKHBPbmVDeWNsZS5kaXJlY3Rpb24gIT0gJ0Rvd24nKSB7XG4gICAgICBwT25lQ3ljbGUuZGlyZWN0aW9uID0gJ1VwJztcbiAgICB9XG4gICAgYnJlYWs7XG4gIGNhc2UgODM6IC8vIERPV05cbiAgICBpZiAocE9uZUN5Y2xlLmRpcmVjdGlvbiAhPSAnVXAnKSB7XG4gICAgICBwT25lQ3ljbGUuZGlyZWN0aW9uID0gJ0Rvd24nO1xuICAgIH1cbiAgICBicmVhaztcbiAgY2FzZSA2NTogLy8gTEVGVFxuICAgIGlmIChwT25lQ3ljbGUuZGlyZWN0aW9uICE9ICdSaWdodCcpIHtcbiAgICAgIHBPbmVDeWNsZS5kaXJlY3Rpb24gPSAnTGVmdCc7XG4gICAgfVxuICAgIGJyZWFrO1xuICBjYXNlIDY4OiAvLyBSSUdIVFxuICAgIGlmIChwT25lQ3ljbGUuZGlyZWN0aW9uICE9ICdMZWZ0Jykge1xuICAgICAgcE9uZUN5Y2xlLmRpcmVjdGlvbiA9ICdSaWdodCc7XG4gICAgfVxuICAgIGJyZWFrO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9