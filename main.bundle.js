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
    canvas.classList.remove('introBackground');
    canvas.classList.add('tron3');
    document.querySelector('.player1wins').innerHTML = newGame.players[0].score;
    document.querySelector('.player2wins').innerHTML = newGame.players[1].score;
    newGame.start();
    playSong();
    document.querySelector('.winner-block').innerHTML = newGame.winner;
    newGame.animate(ctx);
    requestAnimationFrame(gameLoop);
  } else if (e.keyCode === 32 && newGame.level > 0 && newGame.ready) {
    newGame.ready = false;
    canvas.classList.remove('tron4');
    canvas.classList.add('tron3');
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
    canvas.classList.remove('tron3');
    canvas.classList.add('tron4');
    setTimeout(function () {
      newGame.ready = true;
    }, 500);
  } else {
    canvas.classList.remove('tron3');
    canvas.classList.add('tron5');
    setTimeout(function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.classList.remove('tron5');
      canvas.classList.add('introBackground');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvUGxheWVyLmpzIiwid2VicGFjazovLy8uL2xpYi9UYWlsLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJyZXF1aXJlIiwiR2FtZSIsImhlaWdodCIsIndpZHRoIiwiY3R4IiwicGxheWVycyIsIlNDTCIsImdhbWVPdmVyIiwibGV2ZWxPdmVyIiwibGV2ZWwiLCJ3aW5uZXIiLCJyZWFkeSIsInBsYXllck9uZSIsInBsYXllclR3byIsInB1c2giLCJwbGF5ZXJzQXJyIiwic2NvcmUiLCJkZWNsYXJlV2lubmVyIiwibG9hZFBsYXllcnMiLCJkaXJlY3Rpb24iLCJzZXRJbml0aWFsVGFpbCIsIngiLCJ5IiwiZHJhdyIsIm1vdmUiLCJzZWxmQ3Jhc2giLCJ3YWxsQ3Jhc2giLCJjcmFzaEludG9PdGhlclBsYXllciIsInBsYXllcjEiLCJwbGF5ZXIyIiwidGFpbHMiLCJzbGljZSIsImZvckVhY2giLCJpc0NvbGxpZGluZ1dpdGgiLCJ0YWlsIiwiY2FudmFzT2JqIiwibW9kdWxlIiwiZXhwb3J0cyIsIkdhbWVQaWVjZSIsImNvbG9yIiwib2JqZWN0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJUYWlsIiwibWFwIiwidW5zaGlmdCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwibmV3R2FtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Q29kZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJzdGFydCIsInBsYXlTb25nIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImdhbWVMb29wIiwibmV3TGV2ZWwiLCJmcmFtZVJhdGUiLCJyYXRlIiwid2luZG93Iiwic2V0VGltZW91dCIsImdhbWVPdmVyRGlzcGxheSIsImlzR2FtZU92ZXIiLCJzdG9wU29uZyIsImNsZWFyUmVjdCIsImF1ZGlvIiwicGxheSIsInBhdXNlIiwia2V5RG93bkhhbmRsZXIiLCJwT25lQ3ljbGUiLCJwVHdvQ3ljbGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsU0FBUyxtQkFBQUMsQ0FBUSxpQ0FBUixDQUFmOztJQUVNQyxJO0FBQ0osZ0JBQVlDLE1BQVosRUFBb0JDLEtBQXBCLEVBQTJCQyxHQUEzQixFQUFnQztBQUFBOztBQUM5QixTQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLFNBQUtILE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtHLEdBQUwsR0FBVyxFQUFYO0FBQ0EsU0FBS0YsR0FBTCxHQUFX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QUFDRDtBQUNEO0FBQ0YsU0FBSyxFQUFMO0FBQVM7QUFDUCxVQUFJMEQsVUFBVTFELFNBQVYsSUFBdUIsTUFBM0IsRUFBbUM7QUFDakMwRCxrQkFBVTFELFNBQVYsR0FBc0IsSUFBdEI7QUFDRDtBQUNEO0FBQ0YsU0FBSyxFQUFMO0FBQVM7QUFDUCxVQUFJMEQsVUFBVTFELFNBQVYsSUFBdUIsSUFBM0IsRUFBaUM7QUFDL0IwRCxrQkFBVTFELFNBQVYsR0FBc0IsTUFBdEI7QUFDRDtBQUNEO0FBQ0YsU0FBSyxFQUFMO0FBQVM7QUFDUCxVQUFJMEQsVUFBVTFELFNBQVYsSUFBdUIsT0FBM0IsRUFBb0M7QUFDbEMwRCxrQkFBVTFELFNBQVYsR0FBc0IsTUFBdEI7QUFDRDtBQUNEO0FBQ0YsU0FBSyxFQUFMO0FBQVM7QUFDUCxVQUFJMEQsVUFBVTFELFNBQVYsSUFBdUIsTUFBM0IsRUFBbUM7QUFDakMwRCxrQkFBVTFELFNBQVYsR0FBc0IsT0FBdEI7QUFDRDtBQUNEO0FBeENGO0FBMENELEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsImNvbnN0IFBsYXllciA9IHJlcXVpcmUoJy4vUGxheWVyJyk7XG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihoZWlnaHQsIHdpZHRoLCBjdHgpIHtcbiAgICB0aGlzLnBsYXllcnMgPSBbXTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5TQ0wgPSAxMDtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5sZXZlbE92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmxldmVsID0gMDtcbiAgICB0aGlzLndpbm5lciA9ICcnO1xuICAgIHRoaXMucmVhZHkgPSB0cnVlO1xuICB9XG5cbiAgbG9hZFBsYXllcnMoKSB7XG4gICAgY29uc3QgeyBTQ0wgfSA9IHRoaXM7XG4gICAgY29uc3QgcGxheWVyT25lID0gbmV3IFBsYXllcig3MCwgMjMwLCBTQ0wsICcjMUIzM0Y1JywgJ1JpZ2h0Jyk7XG4gICAgY29uc3QgcGxheWVyVHdvID0gbmV3IFBsYXllcig0MjAsIDIzMCwgU0NMLCAnI0RDNEJGNycsICdMZWZ0Jyk7XG5cbiAgICB0aGlzLnBsYXllcnMucHVzaChwbGF5ZXJPbmUpO1xuICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllclR3byk7XG4gIH1cblxuICBpc0dhbWVPdmVyKHBsYXllcnNBcnIpIHtcbiAgICBpZiAocGxheWVyc0FyclswXS5zY29yZSA+IDIgfHwgcGxheWVyc0FyclsxXS5zY29yZSA+IDIpIHtcbiAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgdGhpcy5kZWNsYXJlV2lubmVyKHBsYXllcnNBcnIpO1xuICAgICAgdGhpcy5sZXZlbCA9IDA7XG4gICAgICB0aGlzLnBsYXllcnMgPSBbXTtcbiAgICAgIHRoaXMubG9hZFBsYXllcnMoKTtcbiAgICB9XG4gIH1cblxuICBkZWNsYXJlV2lubmVyKHBsYXllcnNBcnIpIHtcbiAgICBpZiAocGxheWVyc0FyclswXS5zY29yZSA+IDIpIHtcbiAgICAgIHRoaXMud2lubmVyID0gYFBsYXllciAxIFZpY3RvcnkhYDtcbiAgICB9IGVsc2UgaWYgKHBsYXllcnNBcnJbMV0uc2NvcmUgPiAyKSB7XG4gICAgICB0aGlzLndpbm5lciA9IGBQbGF5ZXIgMiBWaWN0b3J5IWA7XG4gICAgfVxuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5sZXZlbE92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLndpbm5lciA9ICcnO1xuICAgIHRoaXMucGxheWVyc1swXS5kaXJlY3Rpb24gPSAnUmlnaHQnO1xuICAgIHRoaXMucGxheWVyc1sxXS5kaXJlY3Rpb24gPSAnTGVmdCc7XG4gIH1cblxuICBuZXdMZXZlbCgpIHtcbiAgICB0aGlzLmxldmVsT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMucGxheWVyc1swXS5zZXRJbml0aWFsVGFpbCgpO1xuICAgIHRoaXMucGxheWVyc1sxXS5zZXRJbml0aWFsVGFpbCgpO1xuICAgIHRoaXMucGxheWVyc1swXS54ID0gNzA7XG4gICAgdGhpcy5wbGF5ZXJzWzBdLnkgPSAyMzA7XG4gICAgdGhpcy5wbGF5ZXJzWzFdLnggPSA0MjA7XG4gICAgdGhpcy5wbGF5ZXJzWzFdLnkgPSAyMzA7XG4gICAgdGhpcy5wbGF5ZXJzWzBdLmRpcmVjdGlvbiA9ICdSaWdodCc7XG4gICAgdGhpcy5wbGF5ZXJzWzFdLmRpcmVjdGlvbiA9ICdMZWZ0JztcbiAgfVxuXG4gIGFuaW1hdGUoY3R4KSB7XG4gICAgY29uc3QgcGxheWVyT25lID0gdGhpcy5wbGF5ZXJzWzBdO1xuXG4gICAgcGxheWVyT25lLmRyYXcoY3R4KTtcbiAgICBwbGF5ZXJPbmUubW92ZSgpO1xuXG4gICAgY29uc3QgcGxheWVyVHdvID0gdGhpcy5wbGF5ZXJzWzFdO1xuXG4gICAgcGxheWVyVHdvLmRyYXcoY3R4KTtcbiAgICBwbGF5ZXJUd28ubW92ZSgpO1xuXG4gICAgdGhpcy5zZWxmQ3Jhc2gocGxheWVyT25lLCBwbGF5ZXJUd28pO1xuICAgIHRoaXMuc2VsZkNyYXNoKHBsYXllclR3bywgcGxheWVyT25lKTtcblxuICAgIHRoaXMud2FsbENyYXNoKHBsYXllck9uZSwgcGxheWVyVHdvKTtcbiAgICB0aGlzLndhbGxDcmFzaChwbGF5ZXJUd28sIHBsYXllck9uZSk7XG5cbiAgICB0aGlzLmNyYXNoSW50b090aGVyUGxheWVyKHBsYXllck9uZSwgcGxheWVyVHdvKTtcbiAgICB0aGlzLmNyYXNoSW50b090aGVyUGxheWVyKHBsYXllclR3bywgcGxheWVyT25lKTtcbiAgfVxuXG4gIHNlbGZDcmFzaChwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gICAgcGxheWVyMS50YWlscy5zbGljZSgxKS5mb3JFYWNoKHRhaWwgPT4ge1xuICAgICAgaWYgKHBsYXllcjEudGFpbHNbMF0uaXNDb2xsaWRpbmdXaXRoKHRhaWwpKSB7XG4gICAgICAgIHBsYXllcjIuc2NvcmUrKztcbiAgICAgICAgdGhpcy5sZXZlbCsrO1xuICAgICAgICB0aGlzLmxldmVsT3ZlciA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB3YWxsQ3Jhc2gocGxheWVyMSwgcGxheWVyMikge1xuICAgIGNvbnN0IGNhbnZhc09iaiA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgICB3aWR0aDogNTAwXG4gICAgfTtcblxuICAgIGlmICghcGxheWVyMS50YWlsc1swXS5pc0NvbGxpZGluZ1dpdGgoY2FudmFzT2JqKSkge1xuICAgICAgcGxheWVyMi5zY29yZSsrO1xuICAgICAgdGhpcy5sZXZlbCsrO1xuICAgICAgdGhpcy5sZXZlbE92ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGNyYXNoSW50b090aGVyUGxheWVyKHBsYXllck9uZSwgcGxheWVyVHdvKSB7XG4gICAgcGxheWVyVHdvLnRhaWxzLnNsaWNlKDEpLmZvckVhY2godGFpbCA9PiB7XG4gICAgICBpZiAocGxheWVyT25lLnRhaWxzWzBdLmlzQ29sbGlkaW5nV2l0aCh0YWlsKSkge1xuICAgICAgICBwbGF5ZXJUd28uc2NvcmUrKztcbiAgICAgICAgdGhpcy5sZXZlbCsrO1xuICAgICAgICB0aGlzLmxldmVsT3ZlciA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lO1xuIiwiY2xhc3MgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgfVxuXG4gIGlzQ29sbGlkaW5nV2l0aChvYmplY3QpIHtcbiAgICByZXR1cm4gIShcbiAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPD0gb2JqZWN0LnggfHxcbiAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0IDw9IG9iamVjdC55IHx8XG4gICAgICB0aGlzLnggPj0gb2JqZWN0LnggKyBvYmplY3Qud2lkdGggfHxcbiAgICAgIHRoaXMueSA+PSBvYmplY3QueSArIG9iamVjdC5oZWlnaHRcbiAgICApO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjb25zdCB7IHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yIH0gPSB0aGlzO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVQaWVjZTtcbiIsImNvbnN0IFRhaWwgPSByZXF1aXJlKCcuL1RhaWwnKTtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgU0NMLCBjb2xvciwgZGlyZWN0aW9uKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLlNDTCA9IFNDTDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLnNldEluaXRpYWxUYWlsKCk7XG4gIH1cblxuICBzZXRJbml0aWFsVGFpbCgpIHtcbiAgICBjb25zdCB7IHgsIHksIFNDTCwgY29sb3IgfSA9IHRoaXM7XG5cbiAgICB0aGlzLnRhaWxzID0gW25ldyBUYWlsKHgsIHksIFNDTCwgU0NMLCBjb2xvcildO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjb25zdCB7IHRhaWxzIH0gPSB0aGlzO1xuXG4gICAgdGFpbHMubWFwKHRhaWwgPT4ge1xuICAgICAgdGFpbC5kcmF3KGN0eCk7XG4gICAgfSk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIGNvbnN0IHsgU0NMLCBjb2xvciwgZGlyZWN0aW9uIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy50YWlsc1swXTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdSaWdodCcpIHtcbiAgICAgIHRoaXMudGFpbHMudW5zaGlmdChuZXcgVGFpbCh4ICsgU0NMLCB5LCBTQ0wsIFNDTCwgY29sb3IpKTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ0xlZnQnKSB7XG4gICAgICB0aGlzLnRhaWxzLnVuc2hpZnQobmV3IFRhaWwoeCAtIFNDTCwgeSwgU0NMLCBTQ0wsIGNvbG9yKSk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdVcCcpIHtcbiAgICAgIHRoaXMudGFpbHMudW5zaGlmdChuZXcgVGFpbCh4LCB5IC0gU0NMLCBTQ0wsIFNDTCwgY29sb3IpKTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ0Rvd24nKSB7XG4gICAgICB0aGlzLnRhaWxzLnVuc2hpZnQobmV3IFRhaWwoeCwgeSArIFNDTCwgU0NMLCBTQ0wsIGNvbG9yKSk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuXG4vLyBjb25zdCBMaWdodEN5Y2xlID0gcmVxdWlyZSgnLi9MaWdodEN5Y2xlJyk7XG5cbi8vIGNsYXNzIFBsYXllciB7XG4vLyAgIGNvbnN0cnVjdG9yKHN0YXJ0WCwgc3RhcnRZLCBzY29yZSwgU0NMLCBjb2xvciwgZGlyZWN0aW9uKSB7XG4vLyAgICAgdGhpcy5zdGFydFggPSBzdGFydFg7XG4vLyAgICAgdGhpcy5zdGFydFkgPSBzdGFydFk7XG4vLyAgICAgdGhpcy5zY29yZSA9IHNjb3JlO1xuLy8gICAgIHRoaXMuU0NMID0gU0NMO1xuLy8gICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbi8vICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbi8vICAgICB0aGlzLmxpZ2h0Q3ljbGUgPSBuZXcgTGlnaHRDeWNsZShzdGFydFgsIHN0YXJ0WSwgU0NMLCBjb2xvciwgZGlyZWN0aW9uKTtcbi8vICAgfVxuLy8gfVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlJyk7XG5cbmNsYXNzIFRhaWwgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcikge1xuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRhaWw7XG4iLCJjb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lJyk7XG5cbnZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xudmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5jb25zdCBuZXdHYW1lID0gbmV3IEdhbWUoY2FudmFzLmhlaWdodCwgY2FudmFzLndpZHRoLCBjdHgpO1xuXG5uZXdHYW1lLmxvYWRQbGF5ZXJzKCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG4gIGlmIChlLmtleUNvZGUgPT09IDMyICYmIG5ld0dhbWUubGV2ZWwgPT09IDAgJiYgbmV3R2FtZS5yZWFkeSkge1xuICAgIG5ld0dhbWUucmVhZHkgPSBmYWxzZTtcbiAgICBjYW52YXMuY2xhc3NMaXN0LnJlbW92ZSgnaW50cm9CYWNrZ3JvdW5kJyk7XG4gICAgY2FudmFzLmNsYXNzTGlzdC5hZGQoJ3Ryb24zJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjF3aW5zJykuaW5uZXJIVE1MID0gbmV3R2FtZS5wbGF5ZXJzWzBdLnNjb3JlO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIyd2lucycpLmlubmVySFRNTCA9IG5ld0dhbWUucGxheWVyc1sxXS5zY29yZTtcbiAgICBuZXdHYW1lLnN0YXJ0KCk7XG4gICAgcGxheVNvbmcoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyLWJsb2NrJykuaW5uZXJIVE1MID0gbmV3R2FtZS53aW5uZXI7XG4gICAgbmV3R2FtZS5hbmltYXRlKGN0eCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDMyICYmIG5ld0dhbWUubGV2ZWwgPiAwICYmIG5ld0dhbWUucmVhZHkpIHtcbiAgICBuZXdHYW1lLnJlYWR5ID0gZmFsc2U7XG4gICAgY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoJ3Ryb240Jyk7XG4gICAgY2FudmFzLmNsYXNzTGlzdC5hZGQoJ3Ryb24zJyk7XG4gICAgbmV3R2FtZS5uZXdMZXZlbCgpO1xuICAgIG5ld0dhbWUuYW5pbWF0ZShjdHgpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gIH1cbn0pO1xuXG5jb25zdCBmcmFtZVJhdGUgPSBmdW5jdGlvbigpIHtcbiAgbGV0IHJhdGU7XG5cbiAgc3dpdGNoIChuZXdHYW1lLmxldmVsKSB7XG4gIGNhc2UgMDpcbiAgICByYXRlID0gMTIwO1xuICAgIGJyZWFrO1xuICBjYXNlIDE6XG4gICAgcmF0ZSA9IDYwO1xuICAgIGJyZWFrO1xuICBkZWZhdWx0OlxuICAgIHJhdGUgPSAzMDtcbiAgfVxuICByZXR1cm4gcmF0ZTtcbn07XG5cbmZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKG5ld0dhbWUubGV2ZWxPdmVyKSB7XG4gICAgICBnYW1lT3ZlckRpc3BsYXkoKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIxd2lucycpLmlubmVySFRNTCA9XG4gICAgICAgIG5ld0dhbWUucGxheWVyc1swXS5zY29yZTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIyd2lucycpLmlubmVySFRNTCA9XG4gICAgICAgIG5ld0dhbWUucGxheWVyc1sxXS5zY29yZTtcbiAgICAgIG5ld0dhbWUuaXNHYW1lT3ZlcihuZXdHYW1lLnBsYXllcnMpO1xuICAgICAgaWYgKG5ld0dhbWUuZ2FtZU92ZXIpIHtcbiAgICAgICAgc3RvcFNvbmcoKTtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXItYmxvY2snKS5pbm5lckhUTUwgPSBuZXdHYW1lLndpbm5lcjtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgbmV3R2FtZS5hbmltYXRlKGN0eCk7XG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gIH0sIGZyYW1lUmF0ZSgpKTtcbn1cblxuZnVuY3Rpb24gZ2FtZU92ZXJEaXNwbGF5KCkge1xuICBpZiAobmV3R2FtZS5wbGF5ZXJzWzBdLnNjb3JlIDwgMyAmJiBuZXdHYW1lLnBsYXllcnNbMV0uc2NvcmUgPCAzKSB7XG4gICAgY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoJ3Ryb24zJyk7XG4gICAgY2FudmFzLmNsYXNzTGlzdC5hZGQoJ3Ryb240Jyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBuZXdHYW1lLnJlYWR5ID0gdHJ1ZTtcbiAgICB9LCA1MDApO1xuICB9IGVsc2Uge1xuICAgIGNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKCd0cm9uMycpO1xuICAgIGNhbnZhcy5jbGFzc0xpc3QuYWRkKCd0cm9uNScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoJ3Ryb241Jyk7XG4gICAgICBjYW52YXMuY2xhc3NMaXN0LmFkZCgnaW50cm9CYWNrZ3JvdW5kJyk7XG4gICAgICBuZXdHYW1lLnJlYWR5ID0gdHJ1ZTtcbiAgICB9LCAyMDAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwbGF5U29uZygpIHtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBhdWRpb1tkYXRhLWtleT1cIjMyXCJdYCk7XG5cbiAgYXVkaW8ucGxheSgpO1xufVxuXG5mdW5jdGlvbiBzdG9wU29uZygpIHtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBhdWRpb1tkYXRhLWtleT1cIjMyXCJdYCk7XG5cbiAgYXVkaW8ucGF1c2UoKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleURvd25IYW5kbGVyLCBmYWxzZSk7XG5cbmZ1bmN0aW9uIGtleURvd25IYW5kbGVyKGUpIHtcbiAgbGV0IHBPbmVDeWNsZSA9IG5ld0dhbWUucGxheWVyc1swXTtcbiAgbGV0IHBUd29DeWNsZSA9IG5ld0dhbWUucGxheWVyc1sxXTtcblxuICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICBjYXNlIDM4OiAvLyBVUFxuICAgIGlmIChwVHdvQ3ljbGUuZGlyZWN0aW9uICE9ICdEb3duJykge1xuICAgICAgcFR3b0N5Y2xlLmRpcmVjdGlvbiA9ICdVcCc7XG4gICAgfVxuICAgIGJyZWFrO1xuICBjYXNlIDQwOiAvLyBET1dOXG4gICAgaWYgKHBUd29DeWNsZS5kaXJlY3Rpb24gIT0gJ1VwJykge1xuICAgICAgcFR3b0N5Y2xlLmRpcmVjdGlvbiA9ICdEb3duJztcbiAgICB9XG4gICAgYnJlYWs7XG4gIGNhc2UgMzc6IC8vIExFRlRcbiAgICBpZiAocFR3b0N5Y2xlLmRpcmVjdGlvbiAhPSAnUmlnaHQnKSB7XG4gICAgICBwVHdvQ3ljbGUuZGlyZWN0aW9uID0gJ0xlZnQnO1xuICAgIH1cbiAgICBicmVhaztcbiAgY2FzZSAzOTogLy8gUklHSFRcbiAgICBpZiAocFR3b0N5Y2xlLmRpcmVjdGlvbiAhPSAnTGVmdCcpIHtcbiAgICAgIHBUd29DeWNsZS5kaXJlY3Rpb24gPSAnUmlnaHQnO1xuICAgIH1cbiAgICBicmVhaztcbiAgY2FzZSA4NzogLy8gVVBcbiAgICBpZiAocE9uZUN5Y2xlLmRpcmVjdGlvbiAhPSAnRG93bicpIHtcbiAgICAgIHBPbmVDeWNsZS5kaXJlY3Rpb24gPSAnVXAnO1xuICAgIH1cbiAgICBicmVhaztcbiAgY2FzZSA4MzogLy8gRE9XTlxuICAgIGlmIChwT25lQ3ljbGUuZGlyZWN0aW9uICE9ICdVcCcpIHtcbiAgICAgIHBPbmVDeWNsZS5kaXJlY3Rpb24gPSAnRG93bic7XG4gICAgfVxuICAgIGJyZWFrO1xuICBjYXNlIDY1OiAvLyBMRUZUXG4gICAgaWYgKHBPbmVDeWNsZS5kaXJlY3Rpb24gIT0gJ1JpZ2h0Jykge1xuICAgICAgcE9uZUN5Y2xlLmRpcmVjdGlvbiA9ICdMZWZ0JztcbiAgICB9XG4gICAgYnJlYWs7XG4gIGNhc2UgNjg6IC8vIFJJR0hUXG4gICAgaWYgKHBPbmVDeWNsZS5kaXJlY3Rpb24gIT0gJ0xlZnQnKSB7XG4gICAgICBwT25lQ3ljbGUuZGlyZWN0aW9uID0gJ1JpZ2h0JztcbiAgICB9XG4gICAgYnJlYWs7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=