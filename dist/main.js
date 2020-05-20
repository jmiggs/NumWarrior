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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Board; });\n/* harmony import */ var _tiles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tiles */ \"./src/tiles.js\");\n\nconst BG_IMG = new Image();\nBG_IMG.src = '../assets/terrain.png';\n\n\n// board shape = [\n//   [1,1,1,1,1,1,1,1],\n//   [1,1,1,1,1,1,1,1],\n//   [1,1,1,1,1,1,1,1],\n//   [1,1,1,1,1,1,1,1],\n//   [1,1,1,1,1,1,1,1],\n//   [1,1,1,1,1,1,1,1],\n//   [1,1,1,1,1,1,1,1],\n//   [1,1,1,1,1,1,1,1]\n// ]\n\nclass Board {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    this.cols = 8;\n    this.rows = 8;\n    this.tsize = 52;\n    this.tiles = [];\n    this.status = false;\n    this.pigs = [];\n    this.nums = [\n      1,9,3,4,5,9,3,7,\n      3,8,6,2,6,0,4,1,\n      4,1,0,9,8,3,5,0,\n      7,6,8,5,1,4,7,6,\n      8,9,4,3,2,8,9,3,\n      0,5,7,8,9,7,2,5,\n      3,8,6,1,4,0,4,6,\n      4,1,0,9,2,3,5,0,\n    ];\n\n    this.generateTiles();\n  }\n\n \n\n  animate(ctx) {\n    this.drawBackground(ctx)\n    this.drawBoard(ctx);\n\n    this.drawTiles(ctx);\n\n    // this.status = true;\n  }\n  \n  drawBoard(ctx) {\n\n    for (var c = 0, x=12; c < this.cols; c++, x+=this.tsize) {\n      for (var r = 0, y=12; r < this.rows; r++, y+=this.tsize) {\n        ctx.drawImage(BG_IMG, 320, 224, 62, 62, x,y, 51, 51);\n      }\n    }\n  }\n\n  drawBackground(ctx) {\n    ctx.fillStyle = `rgb(100, 58, 17)`;\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n  }\n\n  generateTiles() {\n\n    for (var i = 0; i < this.rows; i++) {\n      let gridr = []\n      for (var j = 0; j < this.cols; j++) {\n\n        // let xoff = 12 + c*this.tsize + 22\n        // let yoff = 12 + r*this.tsize + 31\n\n        // if (i === 0 || i === 3 || i === 6 ) {\n        //   let num = nums.splice(-1, 1)[0]\n         \n        //   let tile = new Tiles(this.tsize, num);\n        //   gridr.push(tile);\n        // } else {\n        //   if (i === 2 || i === 7 || i === 1) {\n        //     let num = dnums.splice(-1, 1)[0]\n        //     let tile = new Tiles(this.tsize, num);\n        //     gridr.push(tile);\n        //   } else {\n        //     let num = ddnums.splice(1, 1)[0]\n        //     let tile = new Tiles(this.tsize, num);\n        //     gridr.push(tile);\n\n        //   }\n        // }\n\n        let num = this.nums.splice(0,1)[0]\n        let tile = new _tiles__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.tsize, num);\n        gridr.push(tile);\n      }\n\n      this.tiles.push(gridr)\n    }\n    this.status = true\n  }\n\n  drawTiles(ctx) {\n    // console.log(this.status)\n    if (this.status) {\n\n    for (var i = 0; i < this.cols; i++) {\n      for (var j = 0; j < this.rows; j++) {\n        \n        let xoff = 12 + i*this.tsize + 22\n        let yoff = 12 + j*this.tsize + 31\n    \n        let tile = this.tiles[i][j];\n\n        tile.drawTile(ctx, xoff, yoff)\n\n      }\n    }\n  }\n  }\n\n\n\n}\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NumWarrior; });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _obj_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./obj_controller */ \"./src/obj_controller.js\");\n\n\n\n\nclass NumWarrior {\n  constructor(canvas) {\n    this.context = canvas.getContext('2d');\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n    this.objController = new _obj_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.board, this.context);\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.board, this.context, this.objController);\n    this.frameCount = 0;\n\n    this.run = this.run.bind(this);\n    // this.board.animate(this.context)\n\n    this.run();\n    this.registerListeners();\n    \n  }\n  \n  run(c) {\n    this.frameCount += 1;\n\n    if (this.frameCount < 2) {\n      requestAnimationFrame(this.run);\n      return\n    }\n\n    this.frameCount = 0;\n    this.context.clearRect(0,0, this.dimensions.width, this.dimensions.height);\n    this.board.animate(this.context);\n    this.objController.animatePigs(this.context);\n    this.player.animate(this.context);\n  \n    requestAnimationFrame(this.run);\n  }\n  \n\n  registerListeners() {\n    window.addEventListener('keydown', this.handleKeyDown.bind(this))\n  }\n\n  handleKeyDown(e) {\n\n    if (e.key === 'Enter') {\n      this.player.attacking = true;\n      this.player.attack(e);\n    }\n    // console.log(this.player.attacking)\n    this.player.move(e);\n\n  }\n\n\n\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  let canvas = document.getElementById('game');\n  new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas)\n\n})\n  \n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/obj_controller.js":
/*!*******************************!*\
  !*** ./src/obj_controller.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ObjController; });\n/* harmony import */ var _pig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pig */ \"./src/pig.js\");\n\n\n\nclass ObjController {\n  constructor(board, ctx) {\n    this.board = board;\n    this.pigs = [];\n    this.maxPigs = 4;\n    this.status = false;\n\n\n    this.generatePigs();\n  }\n\n  generatePigs() {\n    for (let i = 0; i < this.maxPigs; i++) {\n      let pigX = Math.floor(Math.random() * (8-0) )\n      let pigY = Math.floor(Math.random() * (8-0) )\n\n      let pig = new _pig__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.board, pigX, pigY, this);\n\n      this.pigs.push(pig);\n      this.board.pigs.push(pig);\n    }\n    this.status = true;\n    // console.log(this.pigs);\n  }\n\n  animatePigs(ctx) {\n    if (this.status) {\n      for (let i = 0; i < this.pigs.length; i++) {\n        let pig = this.pigs[i];\n\n        pig.animate(ctx);\n      }\n    }\n  }\n\n  removePig(pig) {\n\n    for (let i = 0; i < this.pigs.length; i++) {\n      let currPigPos = this.pigs[i].pos;\n\n      if (currPigPos[0] === pig.pos[0] && currPigPos[1] === pig.pos[1]) {\n        // console.log('hit')\n        this.pigs.splice(i, 1);\n        if (this.pigs.length === 0) {\n          this.generatePigs();\n        }\n        return\n      }\n    }\n  }\n\n\n\n\n}\n\n//# sourceURL=webpack:///./src/obj_controller.js?");

/***/ }),

/***/ "./src/pig.js":
/*!********************!*\
  !*** ./src/pig.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pigs; });\n/* harmony import */ var _obj_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obj_controller */ \"./src/obj_controller.js\");\n\n\nclass Pigs {\n  constructor(board, gridX, gridY, controller) {\n    // this.board = board;\n    // this.ctx = ctx;\n    this.posOffX = 28;\n    this.posOffY = -10;\n    this.gridPosX = gridX;\n    this.gridPosY = gridY;\n    this.pos = [gridX, gridY]\n    this.frame = 0;\n    this.scale = board.tsize;\n    this.objController = controller;\n  \n\n    this.hit = false;\n    this.hitFrame = 0;\n    this.death = false;\n    this.deathFrame = 0;\n    \n    this.img = new Image;\n    this.img.src = '../assets/pig.png';\n    this.hitImg = new Image;\n    this.hitImg.src =  '../assets/pighit.png'\n\n    this.deathImg = new Image;\n    this.deathImg.src = '../assets/pigdeath.png';\n  }\n\n  drawFrame(ctx, frame){\n    let x = 34;\n    let scaleX = this.scale*this.gridPosX;\n    let scaleY = this.scale*this.gridPosY;\n\n    ctx.drawImage(this.img, x*frame, 0, 34, 28 , (this.posOffX+scaleX), (this.posOffY+scaleY), 45, 45);\n  }\n\n  drawDeath(ctx, frame){\n    let x = 34;\n    let scaleX = this.scale*this.gridPosX;\n    let scaleY = this.scale*this.gridPosY;\n\n    ctx.drawImage(this.deathImg, x*frame, 0, 34, 28, (this.posOffX+scaleX), (this.posOffY+scaleY), 45, 45 )\n  }\n  drawHit(ctx, frame){\n    let x = 34;\n    let scaleX = this.scale*this.gridPosX;\n    let scaleY = this.scale*this.gridPosY;\n\n    ctx.drawImage(this.hitImg, x*frame, 0, 34, 28, (this.posOffX+scaleX), (this.posOffY+scaleY), 45, 45 )\n  }\n\n  animate(ctx) {\n    const loop = [0,1,2,3,4,5,6,7,8,9,10];\n    const hitLoop = [0,1,2,0,1,2];\n\n    if (this.death) {\n      if (this.hit) {\n\n        this.drawHit(ctx, hitLoop[this.deathFrame] );\n        this.deathFrame += 1;\n\n        if (this.deathFrame > 5) {\n          this.deathFrame = 0;\n          this.hit = false;\n        }\n      } else {\n\n        this.drawDeath(ctx, loop[this.deathFrame] );\n        this.deathFrame += 1;\n        if (this.deathFrame > 5) {\n          this.deathFrame = 0;\n          this.objController.removePig(this);\n          this.death = false;\n        \n        }\n      } \n    } else {\n\n      if (this.frame > 9) {\n        this.frame = 0;\n      }\n      this.drawFrame(ctx, loop[this.frame]);\n      this.frame += 1;\n    }\n  }\n\n  pigDeath() {\n\n  }\n\n\n\n\n}\n\n//# sourceURL=webpack:///./src/pig.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _obj_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obj_controller */ \"./src/obj_controller.js\");\n\n\nclass Player {\n  constructor(board, ctx, objCont) {\n    this.pos = [0,0];\n    this.posx = 2;\n    this.posy = -5;\n    this.vel  = board.tsize\n    this.board = board;\n    this.objController = objCont;\n    this.context = ctx;\n    this.validMoves = {};\n    this.nextMove = null;\n    this.frame = 0;\n    this.attackFrame = 0;\n    this.attacking = false\n\n\n    this.dirs = {\n      left: [-1,0],\n      right: [1, 0],\n      up: [0,-1],\n      down: [0, 1]\n    };\n  \n    \n    this.img = new Image;\n    this.img.src = '../assets/kingidle.png';\n\n    this.aimg = new Image;\n    this.aimg.src = '../assets/attack.png';\n\n    // this.loadimage = this.loadimage.bind(this)\n  }\n\n\n  drawFrame(ctx, frame){\n    let x = 78;\n\n    ctx.drawImage(this.img, x*frame, 0, 65, 55 , this.posx, this.posy, 75, 75);\n  }\n\n  drawAction(ctx, frame){\n    let x = 78;\n\n    ctx.drawImage(this.aimg, x*frame, 0, 75, 70, this.posx, this.posy, 75, 75 )\n  }\n\n  animate(ctx) {\n\n    const loop = [0,1,2,3,4,5,6,7,8,9,10];\n\n    if (this.attacking) {\n      this.drawAction(ctx, loop[this.attackFrame] );\n      this.attackFrame += 1;\n\n      if (this.attackFrame > 3) {\n        this.attackFrame = 0;\n        this.attacking = false;\n      }\n    } else {\n    \n    if (this.frame > 10) {\n      this.frame = 0;\n    }\n    this.drawFrame(ctx, loop[this.frame]);\n    // console.log(this.frame)\n    this.frame += 1;\n  }\n  }\n\n  move(e) {\n\n    this.getValidMoves(this.dirs);\n\n    if (this.isValidMove(this.board, e)) {\n      this.updatePos(this.nextMove);\n      this.validMoves = {};\n    }\n  }\n\n  attack(ctx) {\n    // console.log(this.board.pigs)\n    // console.log(this.pos)\n\n    for (let i = 0; i < this.board.pigs.length; i++) {\n      let targetPigPos = this.board.pigs[i].pos;\n      \n      if (this.pos[0] === targetPigPos[0] && this.pos[1] === targetPigPos[1] ) {\n        let targetPig = this.board.pigs[i];\n\n        targetPig.hit = true;\n        targetPig.death = true;\n\n      }\n    }\n  }\n \n\n  getValidMoves(dirs) {\n    var dirKeys = Object.keys(dirs);\n   \n    for (let i = 0; i < dirKeys.length; i++) {\n      let currX = this.pos[0];\n      let currY = this.pos[1];\n\n      let dirX = dirs[dirKeys[i]][0];\n      let dirY = dirs[dirKeys[i]][1];\n\n      let newX = currX + dirX;\n      let newY = currY + dirY;\n\n      if (newX >= 0 && newY >= 0) {\n        if (newX < 8 && newY < 8) {\n          this.validMoves[dirKeys[i]] = [newX, newY]\n        }\n      }\n\n    }\n  }\n\n  isValidMove(board, e) {\n    // console.log(this.board.tiles);\n    let valMoves = Object.keys(this.validMoves)\n    \n    for (let i = 0; i < valMoves.length; i++) {\n\n      let x =  this.validMoves[valMoves[i]][0];\n      let y =  this.validMoves[valMoves[i]][1];\n\n      if (board.tiles[x][y].number === parseInt(e.key, 10)) {\n        this.pos = this.validMoves[valMoves[i]];\n        this.nextMove = valMoves[i];\n        return true;\n      }\n    }\n  }\n\n  updatePos(move) {\n    if (move === 'up') {\n    this.posy -= this.vel;\n    return true;\n    }\n    if (move === 'down') {\n    this.posy += this.vel;\n    return true;\n\n    }\n    if (move === 'left') {\n    this.posx -= this.vel;\n    return true;\n    }\n\n    if (move === 'right') {\n    this.posx += this.vel;\n    return true;\n    }\n\n  }\n\n}\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/tiles.js":
/*!**********************!*\
  !*** ./src/tiles.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tiles; });\n\nclass Tiles {\n  constructor(tsize, num) {\n    this.tsize = tsize\n    this.number = num;\n    this.holds = null;\n  }\n\n\n  drawTile(ctx, xoff, yoff) {\n    ctx.fillStyle = 'black';\n    ctx.font = \"20px Georgia\";\n    ctx.fillText(this.number, xoff, yoff)   \n  }\n\n  getTileNum() {\n    return this.number\n  }\n\n  // \n\n\n}\n\n//# sourceURL=webpack:///./src/tiles.js?");

/***/ })

/******/ });