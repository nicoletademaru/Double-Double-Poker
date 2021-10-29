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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/card */ \"./src/scripts/card.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"canvas\");\n  var ctx = canvas.getContext('2d');\n  var card = new _scripts_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    pos: [30, 50]\n  });\n  card.draw(ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE2QyxZQUFNO0FBQ2pELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBRUEsTUFBTUMsSUFBSSxHQUFHLElBQUlQLHFEQUFKLENBQVM7QUFBQ1EsSUFBQUEsR0FBRyxFQUFDLENBQUMsRUFBRCxFQUFLLEVBQUw7QUFBTCxHQUFULENBQWI7QUFFQUQsRUFBQUEsSUFBSSxDQUFDRSxJQUFMLENBQVVKLEdBQVY7QUFDRCxDQVBEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRG91YmxlLURvdWJsZS1Qb2tlci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gXCIuL3NjcmlwdHMvY2FyZFwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZCh7cG9zOlszMCwgNTBdfSlcblxuICBjYXJkLmRyYXcoY3R4KVxufSlcblxuIl0sIm5hbWVzIjpbIkNhcmQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJjYXJkIiwicG9zIiwiZHJhdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/card.js":
/*!*****************************!*\
  !*** ./src/scripts/card.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Card = function Card(object) {\n  _classCallCheck(this, Card);\n\n  this.pos = object[\"pos\"];\n  this.color = \"#FF5733\";\n};\n\nCard.prototype.draw = function (ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.rect(10, 60, 50, 50);\n  ctx.stroke();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7OztJQUFNQSxPQUNKLGNBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsT0FBS0MsR0FBTCxHQUFXRCxNQUFNLENBQUMsS0FBRCxDQUFqQjtBQUNBLE9BQUtFLEtBQUwsR0FBYSxTQUFiO0FBQ0Q7O0FBR0hILElBQUksQ0FBQ0ksU0FBTCxDQUFlQyxJQUFmLEdBQXNCLFVBQVNDLEdBQVQsRUFBYTtBQUNqQ0EsRUFBQUEsR0FBRyxDQUFDQyxTQUFKLEdBQWdCLEtBQUtKLEtBQXJCO0FBQ0FHLEVBQUFBLEdBQUcsQ0FBQ0UsU0FBSjtBQUNBRixFQUFBQSxHQUFHLENBQUNHLElBQUosQ0FBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQjtBQUNBSCxFQUFBQSxHQUFHLENBQUNJLE1BQUo7QUFDRCxDQUxEOztBQU9BLCtEQUFlVixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRG91YmxlLURvdWJsZS1Qb2tlci8uL3NyYy9zY3JpcHRzL2NhcmQuanM/NjhmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgdGhpcy5wb3MgPSBvYmplY3RbXCJwb3NcIl07XG4gICAgdGhpcy5jb2xvciA9IFwiI0ZGNTczM1wiO1xuICB9XG59XG5cbkNhcmQucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgpe1xuICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgucmVjdCgxMCwgNjAsIDUwLCA1MCk7XG4gIGN0eC5zdHJva2UoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiXSwibmFtZXMiOlsiQ2FyZCIsIm9iamVjdCIsInBvcyIsImNvbG9yIiwicHJvdG90eXBlIiwiZHJhdyIsImN0eCIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsInJlY3QiLCJzdHJva2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/card.js\n");

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