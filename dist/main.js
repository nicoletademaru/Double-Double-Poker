/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/card */ \"./src/scripts/card.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"canvas\");\n  var ctx = canvas.getContext('2d'); // const card = new Card({pos:[20, 80]})\n  // card.draw(ctx)\n  // \n\n  var v = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE2QyxZQUFNO0FBQ2pELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaLENBRmlELENBSWpEO0FBQ0E7QUFDRjs7QUFDRSxNQUFJQyxDQUFDLEdBQUcsSUFBSVAscURBQUosQ0FBU0ssR0FBVCxDQUFSO0FBQ0QsQ0FSRCIsInNvdXJjZXMiOlsid2VicGFjazovL0RvdWJsZS1Eb3VibGUtUG9rZXIvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZCBmcm9tIFwiLi9zY3JpcHRzL2NhcmRcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgLy8gY29uc3QgY2FyZCA9IG5ldyBDYXJkKHtwb3M6WzIwLCA4MF19KVxuICAvLyBjYXJkLmRyYXcoY3R4KVxuLy8gXG4gIGxldCB2ID0gbmV3IEdhbWUoY3R4KTtcbn0pXG5cbiJdLCJuYW1lcyI6WyJDYXJkIiwiR2FtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/card.js":
/*!*****************************!*\
  !*** ./src/scripts/card.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Card = /*#__PURE__*/function () {\n  function Card(object) {\n    _classCallCheck(this, Card);\n\n    this.pos = object[\"pos\"];\n    this.color = \"#FF5733\";\n  }\n\n  _createClass(Card, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.fillStyle = this.color;\n      ctx.beginPath();\n      ctx.rect(this.pos[0], this.pos[1], 45, 50);\n      ctx.stroke();\n    }\n  }]);\n\n  return Card;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFBTUE7QUFDSixnQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQyxHQUFMLEdBQVdELE1BQU0sQ0FBQyxLQUFELENBQWpCO0FBQ0EsU0FBS0UsS0FBTCxHQUFhLFNBQWI7QUFDRDs7OztXQUVELGNBQUtDLEdBQUwsRUFBVTtBQUNSQSxNQUFBQSxHQUFHLENBQUNDLFNBQUosR0FBZ0IsS0FBS0YsS0FBckI7QUFDQUMsTUFBQUEsR0FBRyxDQUFDRSxTQUFKO0FBQ0FGLE1BQUFBLEdBQUcsQ0FBQ0csSUFBSixDQUFTLEtBQUtMLEdBQUwsQ0FBUyxDQUFULENBQVQsRUFBc0IsS0FBS0EsR0FBTCxDQUFTLENBQVQsQ0FBdEIsRUFBbUMsRUFBbkMsRUFBdUMsRUFBdkM7QUFDQUUsTUFBQUEsR0FBRyxDQUFDSSxNQUFKO0FBQ0Q7Ozs7OztBQUlILCtEQUFlUixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRG91YmxlLURvdWJsZS1Qb2tlci8uL3NyYy9zY3JpcHRzL2NhcmQuanM/NjhmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgdGhpcy5wb3MgPSBvYmplY3RbXCJwb3NcIl07XG4gICAgdGhpcy5jb2xvciA9IFwiI0ZGNTczM1wiO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCA0NSwgNTApO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7Il0sIm5hbWVzIjpbIkNhcmQiLCJvYmplY3QiLCJwb3MiLCJjb2xvciIsImN0eCIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsInJlY3QiLCJzdHJva2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/card.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ \"./src/scripts/card.js\");\n/* harmony import */ var _table_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table_column */ \"./src/scripts/table_column.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar DEFAULTS = {\n  DIM_X: 900,\n  DIM_Y: 750,\n  NUM_CARDS: 5\n};\n\nvar Game = /*#__PURE__*/function () {\n  function Game(ctx) {\n    _classCallCheck(this, Game);\n\n    this.dim_x = DEFAULTS.DIM_X;\n    this.dim_y = DEFAULTS.DIM_Y;\n    this.num_cards = DEFAULTS.NUM_CARDS;\n    this.hand = [];\n    this.table = [];\n    this.addCards.bind(this)(ctx);\n    this.addColumns.bind(this)(ctx);\n  }\n\n  _createClass(Game, [{\n    key: \"addCards\",\n    value: function addCards(ctx) {\n      for (var i = 0, j = 0; i < this.num_cards; i++, j += 55) {\n        var pos = [18 + j, 80];\n        var card = new _card__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n          pos: pos\n        });\n        this.hand.push(card);\n      }\n\n      this.drawCards(ctx);\n    }\n  }, {\n    key: \"drawCards\",\n    value: function drawCards(ctx) {\n      var _this = this;\n\n      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n      var i = 0;\n      setInterval(function () {\n        _this.hand[i].draw(ctx);\n\n        i++;\n      }, 500);\n    }\n  }, {\n    key: \"addColumns\",\n    value: function addColumns(ctx) {\n      var y = 10;\n      var firstCol = new _table_column__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        pos: [18, y],\n        width: 64\n      });\n      this.table.push(firstCol);\n\n      for (var i = 0, j = 0; i <= 5; i++, j += 40) {\n        var position = [82 + j, y];\n        var colWidth = 40;\n        var column = new _table_column__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n          pos: position,\n          width: colWidth\n        });\n        this.table.push(column);\n      }\n\n      this.drawColumns(ctx);\n    }\n  }, {\n    key: \"drawColumns\",\n    value: function drawColumns(ctx) {\n      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n\n      for (var i = 0; i < 5; i++) {\n        this.table[i].draw(ctx);\n      }\n    }\n  }]);\n\n  return Game;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBaUI7QUFDZkEsTUFBQUEsR0FBRyxDQUFDZSxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQmYsR0FBRyxDQUFDZ0IsTUFBSixDQUFXQyxLQUEvQixFQUFzQ2pCLEdBQUcsQ0FBQ2dCLE1BQUosQ0FBV0UsTUFBakQ7O0FBQ0EsV0FBSyxJQUFJVCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCLGFBQUtKLEtBQUwsQ0FBV0ksQ0FBWCxFQUFjVyxJQUFkLENBQW1CcEIsR0FBbkI7QUFDRDtBQUNGOzs7Ozs7QUFLSCwrREFBZUQsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL0RvdWJsZS1Eb3VibGUtUG9rZXIvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4vY2FyZFwiO1xuaW1wb3J0IHRhYmxlQ29sdW1uIGZyb20gXCIuL3RhYmxlX2NvbHVtblwiXG5cbmNvbnN0IERFRkFVTFRTID0geyBESU1fWDogOTAwLCBESU1fWTogNzUwLCBOVU1fQ0FSRFM6IDV9XG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICB0aGlzLmRpbV94ID0gREVGQVVMVFMuRElNX1g7XG4gICAgdGhpcy5kaW1feSA9IERFRkFVTFRTLkRJTV9ZO1xuICAgIHRoaXMubnVtX2NhcmRzID0gREVGQVVMVFMuTlVNX0NBUkRTO1xuICAgIHRoaXMuaGFuZCA9IFtdO1xuICAgIHRoaXMudGFibGUgPSBbXTtcbiAgICB0aGlzLmFkZENhcmRzLmJpbmQodGhpcykoY3R4KTtcbiAgICB0aGlzLmFkZENvbHVtbnMuYmluZCh0aGlzKShjdHgpO1xuICB9XG4gIFxuICBhZGRDYXJkcyhjdHgpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCB0aGlzLm51bV9jYXJkczsgaSsrLCBqICs9IDU1KSB7XG4gICAgICBsZXQgcG9zID0gWzE4ICsgaiwgODBdXG4gICAgICBsZXQgY2FyZCA9IG5ldyBDYXJkKHsgcG9zIH0pXG4gICAgICB0aGlzLmhhbmQucHVzaChjYXJkKVxuICAgIH1cblxuICAgIHRoaXMuZHJhd0NhcmRzKGN0eClcbiAgfVxuXG5cbiAgZHJhd0NhcmRzKGN0eCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgIGxldCBpID0wXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5oYW5kW2ldLmRyYXcoY3R4KVxuICAgICAgaSsrXG4gICAgfSwgNTAwKVxuICB9XG5cbiAgYWRkQ29sdW1ucyhjdHgpIHtcbiAgICBsZXQgeSA9IDEwO1xuICAgIGxldCBmaXJzdENvbCA9IG5ldyB0YWJsZUNvbHVtbih7cG9zOiBbMTgsIHldLCB3aWR0aDogNjR9KVxuICAgIHRoaXMudGFibGUucHVzaChmaXJzdENvbCk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPD0gNTsgaSsrLCBqICs9IDQwKSB7XG4gICAgICBsZXQgcG9zaXRpb24gPSBbODIgKyBqLCB5XTtcbiAgICAgIGxldCBjb2xXaWR0aCA9IDQwO1xuICAgICAgbGV0IGNvbHVtbiA9IG5ldyB0YWJsZUNvbHVtbih7IHBvczogcG9zaXRpb24sIHdpZHRoOiBjb2xXaWR0aCB9KVxuICAgICAgdGhpcy50YWJsZS5wdXNoKGNvbHVtbilcbiAgICB9XG5cbiAgICB0aGlzLmRyYXdDb2x1bW5zKGN0eClcbiAgfVxuXG4gIGRyYXdDb2x1bW5zKGN0eCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICB0aGlzLnRhYmxlW2ldLmRyYXcoY3R4KVxuICAgIH1cbiAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcblxuIl0sIm5hbWVzIjpbIkNhcmQiLCJ0YWJsZUNvbHVtbiIsIkRFRkFVTFRTIiwiRElNX1giLCJESU1fWSIsIk5VTV9DQVJEUyIsIkdhbWUiLCJjdHgiLCJkaW1feCIsImRpbV95IiwibnVtX2NhcmRzIiwiaGFuZCIsInRhYmxlIiwiYWRkQ2FyZHMiLCJiaW5kIiwiYWRkQ29sdW1ucyIsImkiLCJqIiwicG9zIiwiY2FyZCIsInB1c2giLCJkcmF3Q2FyZHMiLCJjbGVhclJlY3QiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsInNldEludGVydmFsIiwiZHJhdyIsInkiLCJmaXJzdENvbCIsInBvc2l0aW9uIiwiY29sV2lkdGgiLCJjb2x1bW4iLCJkcmF3Q29sdW1ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/table_column.js":
/*!*************************************!*\
  !*** ./src/scripts/table_column.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar tableColumn = /*#__PURE__*/function () {\n  function tableColumn(object) {\n    _classCallCheck(this, tableColumn);\n\n    this.pos = object[\"pos\"];\n    this.width = object[\"width\"];\n    this.color = \"#FF5733\";\n  }\n\n  _createClass(tableColumn, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.fillStyle = this.color;\n      ctx.beginPath();\n      ctx.rect(this.pos[0], this.pos[1], this.width, 60);\n      ctx.stroke();\n    }\n  }]);\n\n  return tableColumn;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tableColumn);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90YWJsZV9jb2x1bW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUFNQTtBQUNKLHVCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtDLEdBQUwsR0FBV0QsTUFBTSxDQUFDLEtBQUQsQ0FBakI7QUFDQSxTQUFLRSxLQUFMLEdBQWFGLE1BQU0sQ0FBQyxPQUFELENBQW5CO0FBQ0EsU0FBS0csS0FBTCxHQUFhLFNBQWI7QUFDRDs7OztXQUVELGNBQUtDLEdBQUwsRUFBVTtBQUNSQSxNQUFBQSxHQUFHLENBQUNDLFNBQUosR0FBZ0IsS0FBS0YsS0FBckI7QUFDQUMsTUFBQUEsR0FBRyxDQUFDRSxTQUFKO0FBQ0FGLE1BQUFBLEdBQUcsQ0FBQ0csSUFBSixDQUFTLEtBQUtOLEdBQUwsQ0FBUyxDQUFULENBQVQsRUFBc0IsS0FBS0EsR0FBTCxDQUFTLENBQVQsQ0FBdEIsRUFBbUMsS0FBS0MsS0FBeEMsRUFBK0MsRUFBL0M7QUFDQUUsTUFBQUEsR0FBRyxDQUFDSSxNQUFKO0FBQ0Q7Ozs7OztBQUdILCtEQUFlVCxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRG91YmxlLURvdWJsZS1Qb2tlci8uL3NyYy9zY3JpcHRzL3RhYmxlX2NvbHVtbi5qcz83MGZiIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIHRhYmxlQ29sdW1uIHtcbiAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgdGhpcy5wb3MgPSBvYmplY3RbXCJwb3NcIl07XG4gICAgdGhpcy53aWR0aCA9IG9iamVjdFtcIndpZHRoXCJdO1xuICAgIHRoaXMuY29sb3IgPSBcIiNGRjU3MzNcIjtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5yZWN0KHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgdGhpcy53aWR0aCwgNjApO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0YWJsZUNvbHVtbjsiXSwibmFtZXMiOlsidGFibGVDb2x1bW4iLCJvYmplY3QiLCJwb3MiLCJ3aWR0aCIsImNvbG9yIiwiY3R4IiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwicmVjdCIsInN0cm9rZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/table_column.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Eb3VibGUtRG91YmxlLVBva2VyLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;