/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body{
    margin: 0;
    height: 100vh;
    color: #F5F5F5;
}

.div-container{
    display: grid;
    grid-template-columns: repeat(10, auto);
    grid-template-rows: repeat(10, auto);
    border: solid 2px black;
    height: 500px;
    width: 500px;
}
.square{
    border: solid 1px black;
    display:flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
}
.length-square{
    width: 50px;
    height: 50px;
    border: solid 1px black
}
.length-button{
    display:flex;
    border: solid 1px black;
    width: max-content;
    margin: 2px;
    
}
.place-ui{
    width: 100%;
    height: 100%;
    background-color: #333333;
    display:flex;
    flex-direction: column;
    align-items: center;
}
.place-button-container{
    display:flex;
    height: 30px;
    padding-bottom: 20px;
    gap: 5px;
    align-items: center;
}
.place-button-container button{
    width: 30px;
    height: 30px;
}
.attack-ui{
    display:flex;
    height: 100%;
}
.ai-side{
    display:flex;
    height: 100%;
    width: 50%;
    justify-content: center;
    align-items: center;
}
.player-side {
    display:flex;
    height: 100%;
    width: 50%;
    justify-content: center;
    align-items: center;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;IACpC,uBAAuB;IACvB,aAAa;IACb,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,YAAY;AAChB;AACA;IACI,WAAW;IACX,YAAY;IACZ;AACJ;AACA;IACI,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,WAAW;;AAEf;AACA;IACI,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,oBAAoB;IACpB,QAAQ;IACR,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,UAAU;IACV,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,UAAU;IACV,uBAAuB;IACvB,mBAAmB;AACvB","sourcesContent":["body{\n    margin: 0;\n    height: 100vh;\n    color: #F5F5F5;\n}\n\n.div-container{\n    display: grid;\n    grid-template-columns: repeat(10, auto);\n    grid-template-rows: repeat(10, auto);\n    border: solid 2px black;\n    height: 500px;\n    width: 500px;\n}\n.square{\n    border: solid 1px black;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    width: 48px;\n    height: 48px;\n}\n.length-square{\n    width: 50px;\n    height: 50px;\n    border: solid 1px black\n}\n.length-button{\n    display:flex;\n    border: solid 1px black;\n    width: max-content;\n    margin: 2px;\n    \n}\n.place-ui{\n    width: 100%;\n    height: 100%;\n    background-color: #333333;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n}\n.place-button-container{\n    display:flex;\n    height: 30px;\n    padding-bottom: 20px;\n    gap: 5px;\n    align-items: center;\n}\n.place-button-container button{\n    width: 30px;\n    height: 30px;\n}\n.attack-ui{\n    display:flex;\n    height: 100%;\n}\n.ai-side{\n    display:flex;\n    height: 100%;\n    width: 50%;\n    justify-content: center;\n    align-items: center;\n}\n.player-side {\n    display:flex;\n    height: 100%;\n    width: 50%;\n    justify-content: center;\n    align-items: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/UI/attack-ui.js":
/*!*****************************!*\
  !*** ./src/UI/attack-ui.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAttackUI: () => (/* binding */ addAttackUI)
/* harmony export */ });
function addAttackUI() {
  const body = document.querySelector("body");

  const attackUI = document.createElement("div");
  attackUI.classList.add("attack-ui");

  const AISide = document.createElement("div");
  AISide.classList.add("ai-side");
  attackUI.appendChild(AISide);

  const playerSide = document.createElement("div");
  playerSide.classList.add("player-side");
  attackUI.appendChild(playerSide);

  body.appendChild(attackUI);
}


/***/ }),

/***/ "./src/UI/place-ui.js":
/*!****************************!*\
  !*** ./src/UI/place-ui.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPlaceUI: () => (/* binding */ addPlaceUI),
/* harmony export */   removePlaceUI: () => (/* binding */ removePlaceUI)
/* harmony export */ });
function addPlaceUI() {
  const body = document.querySelector("body");

  const placeUI = document.createElement("div");
  placeUI.classList.add("place-ui");

  const placeShipText = document.createElement("h1");
  placeShipText.textContent = "Place your ships";
  placeUI.appendChild(placeShipText);

  const buttonCont = document.createElement("div");
  buttonCont.classList.add("place-button-container");
  const rotationText = document.createElement("p");
  rotationText.textContent = "Rotation :";
  buttonCont.appendChild(rotationText);
  placeUI.appendChild(buttonCont);

  body.appendChild(placeUI);
}
function removePlaceUI() {
  document.querySelector(".place-ui").remove();
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   flow: () => (/* binding */ flow)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/game */ "./src/modules/game.js");



const flow = (0,_modules_game__WEBPACK_IMPORTED_MODULE_1__.gameFlow)();


/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameFlow: () => (/* binding */ gameFlow)
/* harmony export */ });
/* harmony import */ var _UI_place_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI/place-ui */ "./src/UI/place-ui.js");
/* harmony import */ var _UI_attack_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/attack-ui */ "./src/UI/attack-ui.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/modules/render.js");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players */ "./src/modules/players.js");





function gameFlow() {
  let timesPlaced = 0;

  const placePhase = function () {
    _UI_place_ui__WEBPACK_IMPORTED_MODULE_0__.addPlaceUI();
    (0,_render__WEBPACK_IMPORTED_MODULE_2__.grid)().createGrid("place");
    _players__WEBPACK_IMPORTED_MODULE_3__.AIPlayer.AIPlace();
    console.log(_players__WEBPACK_IMPORTED_MODULE_3__.AIPlayer.board.shipArray);
  };

  const attackPhase = function () {
    _UI_place_ui__WEBPACK_IMPORTED_MODULE_0__.removePlaceUI();
    (0,_UI_attack_ui__WEBPACK_IMPORTED_MODULE_1__.addAttackUI)();
    (0,_render__WEBPACK_IMPORTED_MODULE_2__.grid)().createGrid("display");
    (0,_render__WEBPACK_IMPORTED_MODULE_2__.grid)().createGrid("attack");
  };

  function placePhaseProgress() {
    timesPlaced++;
    if (timesPlaced === 5) {
      attackPhase();
    }
  }

  return { placePhase, attackPhase, placePhaseProgress };
}

gameFlow().placePhase();


/***/ }),

/***/ "./src/modules/gameBoard-factory.js":
/*!******************************************!*\
  !*** ./src/modules/gameBoard-factory.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoard: () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _newShip_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newShip-factory */ "./src/modules/newShip-factory.js");


class GameBoard {
  constructor() {
    this.shipArray = [];
    this.hitArray = [];
  }

  set addShip(coords) {
    this.shipArray.push(new _newShip_factory__WEBPACK_IMPORTED_MODULE_0__.Ship(coords));
  }

  receiveAttack(e, gridAttackRender, renderSunken) {
    if (
      //checks if attacked squared hasnt already been attacked
      this.hitArray.some(
        (item) => item.x === e.target.dataset.x && item.y === e.target.dataset.y
      )
    ) {
      return;
    }
    //checks ships in shipArray against clicked square coords for a hit
    this.shipArray.forEach((ship) => {
      ship.coords.forEach((coord, index, arr) => {
        if (
          +e.target.dataset.x === +coord.x &&
          +e.target.dataset.y === +coord.y
        ) {
          ship.hit();
          if (ship.isSunk) {
            renderSunken(ship);
          }
          gridAttackRender(true, e);
        }
        if (index === arr.length - 1) {
          if (e.target.dataset.status !== "hit") {
            gridAttackRender(false, e);
          }
        }
      });
    });
    this.hitArray.push({
      x: e.target.dataset.x,
      y: e.target.dataset.y,
    });
  }

  allSunk() {
    for (i = 0; i < shipArray.length; i++) {
      if (!shipArray.isSunk) {
        return false;
      } else {
        return true;
      }
    }
  }
}


/***/ }),

/***/ "./src/modules/newShip-factory.js":
/*!****************************************!*\
  !*** ./src/modules/newShip-factory.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(coords) {
    this.coords = coords;
    this.hits = 0;
    this.length = coords.length;
  }

  get isSunk() {
    if (this.hits >= this.length) {
      return true;
    } else {
      return false;
    }
  }
  hit() {
    this.hits++;
  }
}


/***/ }),

/***/ "./src/modules/players.js":
/*!********************************!*\
  !*** ./src/modules/players.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIPlayer: () => (/* binding */ AIPlayer),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   humanPlayer: () => (/* binding */ humanPlayer)
/* harmony export */ });
/* harmony import */ var _gameBoard_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard-factory */ "./src/modules/gameBoard-factory.js");


class Player {
  constructor() {
    this.board = new _gameBoard_factory__WEBPACK_IMPORTED_MODULE_0__.GameBoard();
    this.AI_SHIPS = [
      [
        { x: "2", y: "9" },
        { x: "3", y: "9" },
        { x: "4", y: "9" },
        { x: "5", y: "9" },
        { x: "6", y: "9" },
      ],
      [
        { x: "8", y: "6" },
        { x: "8", y: "5" },
        { x: "8", y: "4" },
        { x: "8", y: "3" },
      ],
      [
        { x: "1", y: "3" },
        { x: "1", y: "2" },
        { x: "1", y: "1" },
      ],
      [
        { x: "7", y: "1" },
        { x: "8", y: "1" },
        { x: "9", y: "1" },
      ],
      [
        { x: "4", y: "5" },
        { x: "5", y: "5" },
      ],
    ];
  }
  set placeShip(coords) {
    this.board.addShip = coords;
  }
  AIPlace() {
    this.AI_SHIPS.forEach((element) => {
      this.board.addShip = element;
    });
  }
  playerAttack(e, gridAttackRender, renderSunken) {
    AIPlayer.board.receiveAttack(e, gridAttackRender, renderSunken);
    AIPlayer.AIAttack();
  }

  hitY = "";
  hitX = "";
  toAttackY = Math.floor(Math.random() * 10) + 1;
  toAttackX = Math.floor(Math.random() * 10) + 1;
  option = "";
  firstHitX = "";
  firstHitY = "";
  foundDirection = "";
  tries = 0;
  toTryX = [];
  toTryY = [];
  toTryIndex = 3;

  getRandomCoords() {
    this.toAttackY = Math.floor(Math.random() * 10) + 1;
    this.toAttackX = Math.floor(Math.random() * 10) + 1;

    let displayGridArr = Array.from(
      document.querySelector("#display-grid").childNodes
    );

    displayGridArr = displayGridArr.filter(
      (square) => square.textContent === ""
    );

    const squareToAttack = displayGridArr.find((square) => {
      return (
        +square.dataset.x === this.toAttackX &&
        +square.dataset.y === this.toAttackY
      );
    });
    if (squareToAttack === undefined) {
      this.getRandomCoords();
    }
  }

  findDirectionToAttack(tries) {
    switch (tries) {
      case 1:
        this.toAttackX = this.firstHitX + 1;
        this.tries = 2;
        this.foundDirection = "x+";
        break;
      case 2:
        this.toAttackX = this.firstHitX - 1;
        this.tries = 3;
        this.foundDirection = "x-";
        break;
      case 3:
        this.toAttackY = this.firstHitY + 1;
        this.tries = 4;
        this.foundDirection = "y+";
        break;
      case 4:
        this.toAttackY = this.firstHitY - 1;
        this.tries = 0;
        this.foundDirection = "y-";
        break;
    }
    // if (this.toAttackX > 10) {
    //   this.toAttackX = this.firstHitX - tries + 1;
    //}
    //if (this.toAttackX < 1) {
    //  this.toAttackX = this.firstHitX + tries + 1;
    // }
    // if (this.toAttackY > 10) {
    //   this.toAttackY = this.firstHitY - tries + 1;
    // }
    // if (this.toAttackY < 1) {
    //   this.toAttackY = this.firstHitY + tries + 1;
    // }
  }
  AIAttack() {
    console.log(`x: ${this.toAttackX} y: ${this.toAttackY}`);
    let displayGridArr = Array.from(
      document.querySelector("#display-grid").childNodes
    );

    displayGridArr = displayGridArr.filter(
      (square) => square.textContent == ""
    );

    if (
      humanPlayer.board.hitArray.some((hit) => {
        hit.x === this.toAttackX && hit.y === this.toAttackY;
      })
    ) {
      this.getRandomCoords();
      this.AIAttack();
      return;
    }
    if (
      this.toAttackX > 10 ||
      this.toAttackX < 1 ||
      this.toAttackY > 10 ||
      this.toAttackY < 1
    ) {
      this.getRandomCoords();
      this.AIAttack();

      return;
    }

    const squareToAttack = displayGridArr.find((square) => {
      return (
        +square.dataset.x === this.toAttackX &&
        +square.dataset.y === this.toAttackY
      );
    });
    if (squareToAttack === undefined) {
      this.getRandomCoords();
      this.AIAttack();

      return;
    }

    const shipToAttack = humanPlayer.board.shipArray.find((ship) => {
      for (const coord of ship.coords) {
        if (+coord.x === this.toAttackX && +coord.y === this.toAttackY) {
          return true;
        }
      }
      return false;
    });

    if (shipToAttack !== undefined) {
      squareToAttack.textContent = "🔴";
      humanPlayer.board.hitArray.push({
        x: this.toAttackX,
        y: this.toAttackY,
      });

      if (this.tries < 4) {
        this.findDirectionToAttack(this.tries);
      }
      if (this.tries === 0) {
        this.tries = 1;
        this.firstHitX = this.toAttackX;
        this.firstHitY = this.toAttackY;
        this.findDirectionToAttack(this.tries);
      }
    } else {
      squareToAttack.textContent = "⚫️";
      humanPlayer.board.hitArray.push({
        x: this.toAttackX,
        y: this.toAttackY,
      });
      this.findDirectionToAttack(this.tries);
      if (this.tries > 0) {
        this.findDirectionToAttack(this.tries);
      }
      if (this.tries > 4) {
        this.tries = 0;
      }
      if (this.tries === 0) {
        this.getRandomCoords();
      }
    }

    console.log(squareToAttack);
  }
}

const humanPlayer = new Player();
const AIPlayer = new Player();


/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   controls: () => (/* binding */ controls),
/* harmony export */   grid: () => (/* binding */ grid)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./players */ "./src/modules/players.js");




function controls(rotationCallback) {
  const rotationButtonArr = [];
  function changeRotation(rot) {
    rotationCallback(rot);
  }
  //adds rotation buttons to the DOM
  function addRotationButtons() {
    const rotationBtnX = createRotationButton("X", "x");
    const rotationBtnY = createRotationButton("Y", "y");
    document
      .querySelector(".place-button-container")
      .append(rotationBtnX, rotationBtnY);
    rotationButtonArr.push(rotationBtnX, rotationBtnY);
  }
  //function for creating rotation button elements
  function createRotationButton(label, rot) {
    const button = document.createElement("button");
    button.textContent = label;
    button.addEventListener("click", () => changeRotation(rot));
    return button;
  }

  return {
    addRotationButtons,
  };
}

function grid() {
  const squareArr = [];
  let highlightArr = [];
  let rotation = "x";
  let length = 5;
  let availableLengths = [4, 3, 3, 2];
  let currentLengthIndex = 0;
  let gridContainer = "";

  function setRotation(rot) {
    rotation = rot;
  }

  function createGrid(type) {
    gridContainer = document.createElement("div");
    gridContainer.classList.add("div-container");
    if (type === "place") {
      gridContainer.setAttribute("id", "place-grid");
      document.querySelector(".place-ui").appendChild(gridContainer);
    }
    if (type === "display") {
      gridContainer.setAttribute("id", "display-grid");
      document.querySelector(".ai-side").appendChild(gridContainer);
    }
    if (type === "attack") {
      gridContainer.setAttribute("id", "attack-grid");
      document.querySelector(".player-side").appendChild(gridContainer);
    }

    let y = 10;
    let x = 1;
    for (let i = 0; i < 100; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.dataset.x = x;
      square.dataset.y = y;
      x += 1;
      if (square.dataset.x % 10 === 0) {
        y -= 1;
      }
      if (square.dataset.x >= 10) {
        x = 1;
      }
      if (type === "display") {
        displayShips();
      }
      if (type === "attack") {
        square.addEventListener("click", (e) => {
          _players__WEBPACK_IMPORTED_MODULE_1__.humanPlayer.playerAttack(e, gridAttackRender, renderSunken);
        });
      }
      if (type === "place") {
        square.addEventListener("mouseout", removeHighlight);
        square.addEventListener("mouseover", (e) => {
          highlightPlacement(e);
        });
        square.addEventListener("click", gridPlace);
      }

      gridContainer.appendChild(square);

      squareArr.push(square);
    }
    if (type === "place") {
      controls(setRotation).addRotationButtons();
    }
  }

  function highlightPlacement(e) {
    highlightArr = [];
    let opRotation = rotation === "y" ? "x" : "y";
    squareArr.forEach((element) => {
      if (
        +element.dataset[opRotation] === +e.target.dataset[opRotation] &&
        +element.dataset[rotation] >= +e.target.dataset[rotation] &&
        +element.dataset[rotation] < +e.target.dataset[rotation] + length &&
        element.dataset.status !== "placed" &&
        element.dataset.status !== "blocked" &&
        e.target.dataset.status !== "placed"
      ) {
        highlightArr.push(element);
      }
    });
    if (e.target.dataset.status === "placed") {
      return;
    }
    //shows illegal placement
    if (
      highlightArr.length < length ||
      e.target.dataset.status === "placed" ||
      highlightArr.some((element) => {
        return (
          element.dataset.status === "placed" ||
          element.dataset.status === "blocked"
        );
      })
    ) {
      highlightArr = [];
      e.target.style.backgroundColor = "red";
      return;
    }
    //if mouse on legal placement squares, makes them grey
    highlightArr.forEach((element) => {
      element.style.backgroundColor = "grey";
      element.dataset.status = true;
    });
  }
  function removeHighlight() {
    squareArr.forEach((element) => {
      if (element.dataset.status === "placed") {
        return;
      }
      if (element.dataset.status === "blocked") {
        element.style.backgroundColor = "yellow";
        return;
      }
      element.style.backgroundColor = "yellow";
      element.dataset.status = "false";
    });
  }
  function gridPlace() {
    if (highlightArr.length === 0) {
      return;
    }
    const coords = [];
    highlightArr.forEach((element) => {
      element.style.backgroundColor = "black";
      element.dataset.status = "placed";
      coords.push({
        x: element.dataset.x,
        y: element.dataset.y,
      });
    });
    _players__WEBPACK_IMPORTED_MODULE_1__.humanPlayer.placeShip = coords;

    console.log(_players__WEBPACK_IMPORTED_MODULE_1__.humanPlayer.board.shipArray);
    blockSquares();
    changeLength();
    _index__WEBPACK_IMPORTED_MODULE_0__.flow.placePhaseProgress();
  }

  function gridAttackRender(hit, e) {
    if (hit === true) {
      e.target.textContent = "🔴";
      e.target.dataset.status = "hit";
    }
    if (hit === false) {
      e.target.textContent = "⚫️";
      e.target.dataset.status = "blocked";
    }
  }

  function renderSunken(ship) {
    ship.coords.forEach((coord) => {
      document.querySelector("#attack-grid").childNodes.forEach((square) => {
        if (+square.dataset.x === +coord.x && +square.dataset.y === +coord.y) {
          square.style.backgroundColor = "#df6c6c";
        }
      });
    });
  }

  //makes squares around placed ships blocked to placement
  function blockSquares() {
    squareArr.forEach((element) => {
      if (element.dataset.status === "placed") {
        squareArr.forEach((square) => {
          if (square.dataset.status !== "placed") {
            if (
              (+square.dataset.y === +element.dataset.y + 1 &&
                +square.dataset.x === +element.dataset.x) ||
              (+square.dataset.y === +element.dataset.y - 1 &&
                +square.dataset.x === +element.dataset.x) ||
              (+square.dataset.y === +element.dataset.y &&
                +square.dataset.x === +element.dataset.x + 1) ||
              (+square.dataset.y === +element.dataset.y &&
                +square.dataset.x === +element.dataset.x - 1)
            ) {
              square.dataset.status = "blocked";
            }
          }
        });
      }
    });
  }

  function displayShips() {
    _players__WEBPACK_IMPORTED_MODULE_1__.humanPlayer.board.shipArray.forEach((ship) => {
      ship.coords.forEach((coord) => {
        document.querySelector("#display-grid").childNodes.forEach((square) => {
          if (
            +square.dataset.x === +coord.x &&
            +square.dataset.y === +coord.y
          ) {
            square.style.backgroundColor = "#333333";
          }
        });
      });
    });
  }

  function changeLength() {
    length = availableLengths[currentLengthIndex];
    currentLengthIndex++;
  }
  return { createGrid, gridContainer };
}


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BOeUI7QUFDUTtBQUNIOztBQUU5QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsaURBQVc7QUFDckIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLElBQUksaURBQVc7O0FBRWYsZ0JBQWdCLGlEQUFXO0FBQzNCO0FBQ0E7QUFDQSxJQUFJLHdDQUFJO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLElBQUksaURBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7Ozs7Ozs7VUM3T0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvVUkvYXR0YWNrLXVpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvVUkvcGxhY2UtdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZUJvYXJkLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL25ld1NoaXAtZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcmVuZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keXtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBjb2xvcjogI0Y1RjVGNTtcbn1cblxuLmRpdi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgYXV0byk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIGF1dG8pO1xuICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgd2lkdGg6IDUwMHB4O1xufVxuLnNxdWFyZXtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG59XG4ubGVuZ3RoLXNxdWFyZXtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2tcbn1cbi5sZW5ndGgtYnV0dG9ue1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgbWFyZ2luOiAycHg7XG4gICAgXG59XG4ucGxhY2UtdWl7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wbGFjZS1idXR0b24tY29udGFpbmVye1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgZ2FwOiA1cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wbGFjZS1idXR0b24tY29udGFpbmVyIGJ1dHRvbntcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG4uYXR0YWNrLXVpe1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uYWktc2lkZXtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wbGF5ZXItc2lkZSB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1o7QUFDSjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsV0FBVzs7QUFFZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLFFBQVE7SUFDUixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGNvbG9yOiAjRjVGNUY1O1xcbn1cXG5cXG4uZGl2LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIGF1dG8pO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgYXV0byk7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICB3aWR0aDogNTAwcHg7XFxufVxcbi5zcXVhcmV7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNDhweDtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbn1cXG4ubGVuZ3RoLXNxdWFyZXtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2tcXG59XFxuLmxlbmd0aC1idXR0b257XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgbWFyZ2luOiAycHg7XFxuICAgIFxcbn1cXG4ucGxhY2UtdWl7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnBsYWNlLWJ1dHRvbi1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wbGFjZS1idXR0b24tY29udGFpbmVyIGJ1dHRvbntcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuLmF0dGFjay11aXtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5haS1zaWRle1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wbGF5ZXItc2lkZSB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBhZGRBdHRhY2tVSSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gIGNvbnN0IGF0dGFja1VJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYXR0YWNrVUkuY2xhc3NMaXN0LmFkZChcImF0dGFjay11aVwiKTtcblxuICBjb25zdCBBSVNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBBSVNpZGUuY2xhc3NMaXN0LmFkZChcImFpLXNpZGVcIik7XG4gIGF0dGFja1VJLmFwcGVuZENoaWxkKEFJU2lkZSk7XG5cbiAgY29uc3QgcGxheWVyU2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYXllclNpZGUuY2xhc3NMaXN0LmFkZChcInBsYXllci1zaWRlXCIpO1xuICBhdHRhY2tVSS5hcHBlbmRDaGlsZChwbGF5ZXJTaWRlKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGF0dGFja1VJKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhZGRQbGFjZVVJKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgY29uc3QgcGxhY2VVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYWNlVUkuY2xhc3NMaXN0LmFkZChcInBsYWNlLXVpXCIpO1xuXG4gIGNvbnN0IHBsYWNlU2hpcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHBsYWNlU2hpcFRleHQudGV4dENvbnRlbnQgPSBcIlBsYWNlIHlvdXIgc2hpcHNcIjtcbiAgcGxhY2VVSS5hcHBlbmRDaGlsZChwbGFjZVNoaXBUZXh0KTtcblxuICBjb25zdCBidXR0b25Db250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uQ29udC5jbGFzc0xpc3QuYWRkKFwicGxhY2UtYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgY29uc3Qgcm90YXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHJvdGF0aW9uVGV4dC50ZXh0Q29udGVudCA9IFwiUm90YXRpb24gOlwiO1xuICBidXR0b25Db250LmFwcGVuZENoaWxkKHJvdGF0aW9uVGV4dCk7XG4gIHBsYWNlVUkuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udCk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChwbGFjZVVJKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQbGFjZVVJKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYWNlLXVpXCIpLnJlbW92ZSgpO1xufVxuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGdhbWVGbG93IH0gZnJvbSBcIi4vbW9kdWxlcy9nYW1lXCI7XG5cbmV4cG9ydCBjb25zdCBmbG93ID0gZ2FtZUZsb3coKTtcbiIsImltcG9ydCAqIGFzIHBsYWNlVUkgZnJvbSBcIi4uL1VJL3BsYWNlLXVpXCI7XG5pbXBvcnQgeyBhZGRBdHRhY2tVSSB9IGZyb20gXCIuLi9VSS9hdHRhY2stdWlcIjtcbmltcG9ydCB7IGdyaWQgfSBmcm9tIFwiLi9yZW5kZXJcIjtcbmltcG9ydCB7IGh1bWFuUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyc1wiO1xuaW1wb3J0IHsgQUlQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJzXCI7XG5leHBvcnQgZnVuY3Rpb24gZ2FtZUZsb3coKSB7XG4gIGxldCB0aW1lc1BsYWNlZCA9IDA7XG5cbiAgY29uc3QgcGxhY2VQaGFzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBwbGFjZVVJLmFkZFBsYWNlVUkoKTtcbiAgICBncmlkKCkuY3JlYXRlR3JpZChcInBsYWNlXCIpO1xuICAgIEFJUGxheWVyLkFJUGxhY2UoKTtcbiAgICBjb25zb2xlLmxvZyhBSVBsYXllci5ib2FyZC5zaGlwQXJyYXkpO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja1BoYXNlID0gZnVuY3Rpb24gKCkge1xuICAgIHBsYWNlVUkucmVtb3ZlUGxhY2VVSSgpO1xuICAgIGFkZEF0dGFja1VJKCk7XG4gICAgZ3JpZCgpLmNyZWF0ZUdyaWQoXCJkaXNwbGF5XCIpO1xuICAgIGdyaWQoKS5jcmVhdGVHcmlkKFwiYXR0YWNrXCIpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHBsYWNlUGhhc2VQcm9ncmVzcygpIHtcbiAgICB0aW1lc1BsYWNlZCsrO1xuICAgIGlmICh0aW1lc1BsYWNlZCA9PT0gNSkge1xuICAgICAgYXR0YWNrUGhhc2UoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBwbGFjZVBoYXNlLCBhdHRhY2tQaGFzZSwgcGxhY2VQaGFzZVByb2dyZXNzIH07XG59XG5cbmdhbWVGbG93KCkucGxhY2VQaGFzZSgpO1xuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL25ld1NoaXAtZmFjdG9yeVwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZUJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zaGlwQXJyYXkgPSBbXTtcbiAgICB0aGlzLmhpdEFycmF5ID0gW107XG4gIH1cblxuICBzZXQgYWRkU2hpcChjb29yZHMpIHtcbiAgICB0aGlzLnNoaXBBcnJheS5wdXNoKG5ldyBTaGlwKGNvb3JkcykpO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayhlLCBncmlkQXR0YWNrUmVuZGVyLCByZW5kZXJTdW5rZW4pIHtcbiAgICBpZiAoXG4gICAgICAvL2NoZWNrcyBpZiBhdHRhY2tlZCBzcXVhcmVkIGhhc250IGFscmVhZHkgYmVlbiBhdHRhY2tlZFxuICAgICAgdGhpcy5oaXRBcnJheS5zb21lKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS54ID09PSBlLnRhcmdldC5kYXRhc2V0LnggJiYgaXRlbS55ID09PSBlLnRhcmdldC5kYXRhc2V0LnlcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy9jaGVja3Mgc2hpcHMgaW4gc2hpcEFycmF5IGFnYWluc3QgY2xpY2tlZCBzcXVhcmUgY29vcmRzIGZvciBhIGhpdFxuICAgIHRoaXMuc2hpcEFycmF5LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAuY29vcmRzLmZvckVhY2goKGNvb3JkLCBpbmRleCwgYXJyKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICArZS50YXJnZXQuZGF0YXNldC54ID09PSArY29vcmQueCAmJlxuICAgICAgICAgICtlLnRhcmdldC5kYXRhc2V0LnkgPT09ICtjb29yZC55XG4gICAgICAgICkge1xuICAgICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgICAgaWYgKHNoaXAuaXNTdW5rKSB7XG4gICAgICAgICAgICByZW5kZXJTdW5rZW4oc2hpcCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGdyaWRBdHRhY2tSZW5kZXIodHJ1ZSwgZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ID09PSBhcnIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGlmIChlLnRhcmdldC5kYXRhc2V0LnN0YXR1cyAhPT0gXCJoaXRcIikge1xuICAgICAgICAgICAgZ3JpZEF0dGFja1JlbmRlcihmYWxzZSwgZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLmhpdEFycmF5LnB1c2goe1xuICAgICAgeDogZS50YXJnZXQuZGF0YXNldC54LFxuICAgICAgeTogZS50YXJnZXQuZGF0YXNldC55LFxuICAgIH0pO1xuICB9XG5cbiAgYWxsU3VuaygpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc2hpcEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXNoaXBBcnJheS5pc1N1bmspIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGNvb3Jkcykge1xuICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5sZW5ndGggPSBjb29yZHMubGVuZ3RoO1xuICB9XG5cbiAgZ2V0IGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRzKys7XG4gIH1cbn1cbiIsImltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZC1mYWN0b3J5XCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xuICAgIHRoaXMuQUlfU0hJUFMgPSBbXG4gICAgICBbXG4gICAgICAgIHsgeDogXCIyXCIsIHk6IFwiOVwiIH0sXG4gICAgICAgIHsgeDogXCIzXCIsIHk6IFwiOVwiIH0sXG4gICAgICAgIHsgeDogXCI0XCIsIHk6IFwiOVwiIH0sXG4gICAgICAgIHsgeDogXCI1XCIsIHk6IFwiOVwiIH0sXG4gICAgICAgIHsgeDogXCI2XCIsIHk6IFwiOVwiIH0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHg6IFwiOFwiLCB5OiBcIjZcIiB9LFxuICAgICAgICB7IHg6IFwiOFwiLCB5OiBcIjVcIiB9LFxuICAgICAgICB7IHg6IFwiOFwiLCB5OiBcIjRcIiB9LFxuICAgICAgICB7IHg6IFwiOFwiLCB5OiBcIjNcIiB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiBcIjFcIiwgeTogXCIzXCIgfSxcbiAgICAgICAgeyB4OiBcIjFcIiwgeTogXCIyXCIgfSxcbiAgICAgICAgeyB4OiBcIjFcIiwgeTogXCIxXCIgfSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgeDogXCI3XCIsIHk6IFwiMVwiIH0sXG4gICAgICAgIHsgeDogXCI4XCIsIHk6IFwiMVwiIH0sXG4gICAgICAgIHsgeDogXCI5XCIsIHk6IFwiMVwiIH0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHg6IFwiNFwiLCB5OiBcIjVcIiB9LFxuICAgICAgICB7IHg6IFwiNVwiLCB5OiBcIjVcIiB9LFxuICAgICAgXSxcbiAgICBdO1xuICB9XG4gIHNldCBwbGFjZVNoaXAoY29vcmRzKSB7XG4gICAgdGhpcy5ib2FyZC5hZGRTaGlwID0gY29vcmRzO1xuICB9XG4gIEFJUGxhY2UoKSB7XG4gICAgdGhpcy5BSV9TSElQUy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLmJvYXJkLmFkZFNoaXAgPSBlbGVtZW50O1xuICAgIH0pO1xuICB9XG4gIHBsYXllckF0dGFjayhlLCBncmlkQXR0YWNrUmVuZGVyLCByZW5kZXJTdW5rZW4pIHtcbiAgICBBSVBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKGUsIGdyaWRBdHRhY2tSZW5kZXIsIHJlbmRlclN1bmtlbik7XG4gICAgQUlQbGF5ZXIuQUlBdHRhY2soKTtcbiAgfVxuXG4gIGhpdFkgPSBcIlwiO1xuICBoaXRYID0gXCJcIjtcbiAgdG9BdHRhY2tZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgdG9BdHRhY2tYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgb3B0aW9uID0gXCJcIjtcbiAgZmlyc3RIaXRYID0gXCJcIjtcbiAgZmlyc3RIaXRZID0gXCJcIjtcbiAgZm91bmREaXJlY3Rpb24gPSBcIlwiO1xuICB0cmllcyA9IDA7XG4gIHRvVHJ5WCA9IFtdO1xuICB0b1RyeVkgPSBbXTtcbiAgdG9UcnlJbmRleCA9IDM7XG5cbiAgZ2V0UmFuZG9tQ29vcmRzKCkge1xuICAgIHRoaXMudG9BdHRhY2tZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICB0aGlzLnRvQXR0YWNrWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG5cbiAgICBsZXQgZGlzcGxheUdyaWRBcnIgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5LWdyaWRcIikuY2hpbGROb2Rlc1xuICAgICk7XG5cbiAgICBkaXNwbGF5R3JpZEFyciA9IGRpc3BsYXlHcmlkQXJyLmZpbHRlcihcbiAgICAgIChzcXVhcmUpID0+IHNxdWFyZS50ZXh0Q29udGVudCA9PT0gXCJcIlxuICAgICk7XG5cbiAgICBjb25zdCBzcXVhcmVUb0F0dGFjayA9IGRpc3BsYXlHcmlkQXJyLmZpbmQoKHNxdWFyZSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgK3NxdWFyZS5kYXRhc2V0LnggPT09IHRoaXMudG9BdHRhY2tYICYmXG4gICAgICAgICtzcXVhcmUuZGF0YXNldC55ID09PSB0aGlzLnRvQXR0YWNrWVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBpZiAoc3F1YXJlVG9BdHRhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5nZXRSYW5kb21Db29yZHMoKTtcbiAgICB9XG4gIH1cblxuICBmaW5kRGlyZWN0aW9uVG9BdHRhY2sodHJpZXMpIHtcbiAgICBzd2l0Y2ggKHRyaWVzKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHRoaXMudG9BdHRhY2tYID0gdGhpcy5maXJzdEhpdFggKyAxO1xuICAgICAgICB0aGlzLnRyaWVzID0gMjtcbiAgICAgICAgdGhpcy5mb3VuZERpcmVjdGlvbiA9IFwieCtcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHRoaXMudG9BdHRhY2tYID0gdGhpcy5maXJzdEhpdFggLSAxO1xuICAgICAgICB0aGlzLnRyaWVzID0gMztcbiAgICAgICAgdGhpcy5mb3VuZERpcmVjdGlvbiA9IFwieC1cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHRoaXMudG9BdHRhY2tZID0gdGhpcy5maXJzdEhpdFkgKyAxO1xuICAgICAgICB0aGlzLnRyaWVzID0gNDtcbiAgICAgICAgdGhpcy5mb3VuZERpcmVjdGlvbiA9IFwieStcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHRoaXMudG9BdHRhY2tZID0gdGhpcy5maXJzdEhpdFkgLSAxO1xuICAgICAgICB0aGlzLnRyaWVzID0gMDtcbiAgICAgICAgdGhpcy5mb3VuZERpcmVjdGlvbiA9IFwieS1cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIGlmICh0aGlzLnRvQXR0YWNrWCA+IDEwKSB7XG4gICAgLy8gICB0aGlzLnRvQXR0YWNrWCA9IHRoaXMuZmlyc3RIaXRYIC0gdHJpZXMgKyAxO1xuICAgIC8vfVxuICAgIC8vaWYgKHRoaXMudG9BdHRhY2tYIDwgMSkge1xuICAgIC8vICB0aGlzLnRvQXR0YWNrWCA9IHRoaXMuZmlyc3RIaXRYICsgdHJpZXMgKyAxO1xuICAgIC8vIH1cbiAgICAvLyBpZiAodGhpcy50b0F0dGFja1kgPiAxMCkge1xuICAgIC8vICAgdGhpcy50b0F0dGFja1kgPSB0aGlzLmZpcnN0SGl0WSAtIHRyaWVzICsgMTtcbiAgICAvLyB9XG4gICAgLy8gaWYgKHRoaXMudG9BdHRhY2tZIDwgMSkge1xuICAgIC8vICAgdGhpcy50b0F0dGFja1kgPSB0aGlzLmZpcnN0SGl0WSArIHRyaWVzICsgMTtcbiAgICAvLyB9XG4gIH1cbiAgQUlBdHRhY2soKSB7XG4gICAgY29uc29sZS5sb2coYHg6ICR7dGhpcy50b0F0dGFja1h9IHk6ICR7dGhpcy50b0F0dGFja1l9YCk7XG4gICAgbGV0IGRpc3BsYXlHcmlkQXJyID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlzcGxheS1ncmlkXCIpLmNoaWxkTm9kZXNcbiAgICApO1xuXG4gICAgZGlzcGxheUdyaWRBcnIgPSBkaXNwbGF5R3JpZEFyci5maWx0ZXIoXG4gICAgICAoc3F1YXJlKSA9PiBzcXVhcmUudGV4dENvbnRlbnQgPT0gXCJcIlxuICAgICk7XG5cbiAgICBpZiAoXG4gICAgICBodW1hblBsYXllci5ib2FyZC5oaXRBcnJheS5zb21lKChoaXQpID0+IHtcbiAgICAgICAgaGl0LnggPT09IHRoaXMudG9BdHRhY2tYICYmIGhpdC55ID09PSB0aGlzLnRvQXR0YWNrWTtcbiAgICAgIH0pXG4gICAgKSB7XG4gICAgICB0aGlzLmdldFJhbmRvbUNvb3JkcygpO1xuICAgICAgdGhpcy5BSUF0dGFjaygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICB0aGlzLnRvQXR0YWNrWCA+IDEwIHx8XG4gICAgICB0aGlzLnRvQXR0YWNrWCA8IDEgfHxcbiAgICAgIHRoaXMudG9BdHRhY2tZID4gMTAgfHxcbiAgICAgIHRoaXMudG9BdHRhY2tZIDwgMVxuICAgICkge1xuICAgICAgdGhpcy5nZXRSYW5kb21Db29yZHMoKTtcbiAgICAgIHRoaXMuQUlBdHRhY2soKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNxdWFyZVRvQXR0YWNrID0gZGlzcGxheUdyaWRBcnIuZmluZCgoc3F1YXJlKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICArc3F1YXJlLmRhdGFzZXQueCA9PT0gdGhpcy50b0F0dGFja1ggJiZcbiAgICAgICAgK3NxdWFyZS5kYXRhc2V0LnkgPT09IHRoaXMudG9BdHRhY2tZXG4gICAgICApO1xuICAgIH0pO1xuICAgIGlmIChzcXVhcmVUb0F0dGFjayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmdldFJhbmRvbUNvb3JkcygpO1xuICAgICAgdGhpcy5BSUF0dGFjaygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcFRvQXR0YWNrID0gaHVtYW5QbGF5ZXIuYm9hcmQuc2hpcEFycmF5LmZpbmQoKHNoaXApID0+IHtcbiAgICAgIGZvciAoY29uc3QgY29vcmQgb2Ygc2hpcC5jb29yZHMpIHtcbiAgICAgICAgaWYgKCtjb29yZC54ID09PSB0aGlzLnRvQXR0YWNrWCAmJiArY29vcmQueSA9PT0gdGhpcy50b0F0dGFja1kpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgaWYgKHNoaXBUb0F0dGFjayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzcXVhcmVUb0F0dGFjay50ZXh0Q29udGVudCA9IFwi8J+UtFwiO1xuICAgICAgaHVtYW5QbGF5ZXIuYm9hcmQuaGl0QXJyYXkucHVzaCh7XG4gICAgICAgIHg6IHRoaXMudG9BdHRhY2tYLFxuICAgICAgICB5OiB0aGlzLnRvQXR0YWNrWSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy50cmllcyA8IDQpIHtcbiAgICAgICAgdGhpcy5maW5kRGlyZWN0aW9uVG9BdHRhY2sodGhpcy50cmllcyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50cmllcyA9PT0gMCkge1xuICAgICAgICB0aGlzLnRyaWVzID0gMTtcbiAgICAgICAgdGhpcy5maXJzdEhpdFggPSB0aGlzLnRvQXR0YWNrWDtcbiAgICAgICAgdGhpcy5maXJzdEhpdFkgPSB0aGlzLnRvQXR0YWNrWTtcbiAgICAgICAgdGhpcy5maW5kRGlyZWN0aW9uVG9BdHRhY2sodGhpcy50cmllcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNxdWFyZVRvQXR0YWNrLnRleHRDb250ZW50ID0gXCLimqvvuI9cIjtcbiAgICAgIGh1bWFuUGxheWVyLmJvYXJkLmhpdEFycmF5LnB1c2goe1xuICAgICAgICB4OiB0aGlzLnRvQXR0YWNrWCxcbiAgICAgICAgeTogdGhpcy50b0F0dGFja1ksXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZmluZERpcmVjdGlvblRvQXR0YWNrKHRoaXMudHJpZXMpO1xuICAgICAgaWYgKHRoaXMudHJpZXMgPiAwKSB7XG4gICAgICAgIHRoaXMuZmluZERpcmVjdGlvblRvQXR0YWNrKHRoaXMudHJpZXMpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudHJpZXMgPiA0KSB7XG4gICAgICAgIHRoaXMudHJpZXMgPSAwO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudHJpZXMgPT09IDApIHtcbiAgICAgICAgdGhpcy5nZXRSYW5kb21Db29yZHMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhzcXVhcmVUb0F0dGFjayk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGh1bWFuUGxheWVyID0gbmV3IFBsYXllcigpO1xuZXhwb3J0IGNvbnN0IEFJUGxheWVyID0gbmV3IFBsYXllcigpO1xuIiwiaW1wb3J0IHsgZmxvdyB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgaHVtYW5QbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJzXCI7XG5pbXBvcnQgeyBBSVBsYXllciB9IGZyb20gXCIuL3BsYXllcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRyb2xzKHJvdGF0aW9uQ2FsbGJhY2spIHtcbiAgY29uc3Qgcm90YXRpb25CdXR0b25BcnIgPSBbXTtcbiAgZnVuY3Rpb24gY2hhbmdlUm90YXRpb24ocm90KSB7XG4gICAgcm90YXRpb25DYWxsYmFjayhyb3QpO1xuICB9XG4gIC8vYWRkcyByb3RhdGlvbiBidXR0b25zIHRvIHRoZSBET01cbiAgZnVuY3Rpb24gYWRkUm90YXRpb25CdXR0b25zKCkge1xuICAgIGNvbnN0IHJvdGF0aW9uQnRuWCA9IGNyZWF0ZVJvdGF0aW9uQnV0dG9uKFwiWFwiLCBcInhcIik7XG4gICAgY29uc3Qgcm90YXRpb25CdG5ZID0gY3JlYXRlUm90YXRpb25CdXR0b24oXCJZXCIsIFwieVwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2UtYnV0dG9uLWNvbnRhaW5lclwiKVxuICAgICAgLmFwcGVuZChyb3RhdGlvbkJ0blgsIHJvdGF0aW9uQnRuWSk7XG4gICAgcm90YXRpb25CdXR0b25BcnIucHVzaChyb3RhdGlvbkJ0blgsIHJvdGF0aW9uQnRuWSk7XG4gIH1cbiAgLy9mdW5jdGlvbiBmb3IgY3JlYXRpbmcgcm90YXRpb24gYnV0dG9uIGVsZW1lbnRzXG4gIGZ1bmN0aW9uIGNyZWF0ZVJvdGF0aW9uQnV0dG9uKGxhYmVsLCByb3QpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2hhbmdlUm90YXRpb24ocm90KSk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWRkUm90YXRpb25CdXR0b25zLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JpZCgpIHtcbiAgY29uc3Qgc3F1YXJlQXJyID0gW107XG4gIGxldCBoaWdobGlnaHRBcnIgPSBbXTtcbiAgbGV0IHJvdGF0aW9uID0gXCJ4XCI7XG4gIGxldCBsZW5ndGggPSA1O1xuICBsZXQgYXZhaWxhYmxlTGVuZ3RocyA9IFs0LCAzLCAzLCAyXTtcbiAgbGV0IGN1cnJlbnRMZW5ndGhJbmRleCA9IDA7XG4gIGxldCBncmlkQ29udGFpbmVyID0gXCJcIjtcblxuICBmdW5jdGlvbiBzZXRSb3RhdGlvbihyb3QpIHtcbiAgICByb3RhdGlvbiA9IHJvdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUdyaWQodHlwZSkge1xuICAgIGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdyaWRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRpdi1jb250YWluZXJcIik7XG4gICAgaWYgKHR5cGUgPT09IFwicGxhY2VcIikge1xuICAgICAgZ3JpZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYWNlLWdyaWRcIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYWNlLXVpXCIpLmFwcGVuZENoaWxkKGdyaWRDb250YWluZXIpO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gXCJkaXNwbGF5XCIpIHtcbiAgICAgIGdyaWRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkaXNwbGF5LWdyaWRcIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFpLXNpZGVcIikuYXBwZW5kQ2hpbGQoZ3JpZENvbnRhaW5lcik7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBcImF0dGFja1wiKSB7XG4gICAgICBncmlkQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYXR0YWNrLWdyaWRcIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1zaWRlXCIpLmFwcGVuZENoaWxkKGdyaWRDb250YWluZXIpO1xuICAgIH1cblxuICAgIGxldCB5ID0gMTA7XG4gICAgbGV0IHggPSAxO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNxdWFyZVwiKTtcbiAgICAgIHNxdWFyZS5kYXRhc2V0LnggPSB4O1xuICAgICAgc3F1YXJlLmRhdGFzZXQueSA9IHk7XG4gICAgICB4ICs9IDE7XG4gICAgICBpZiAoc3F1YXJlLmRhdGFzZXQueCAlIDEwID09PSAwKSB7XG4gICAgICAgIHkgLT0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChzcXVhcmUuZGF0YXNldC54ID49IDEwKSB7XG4gICAgICAgIHggPSAxO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09IFwiZGlzcGxheVwiKSB7XG4gICAgICAgIGRpc3BsYXlTaGlwcygpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09IFwiYXR0YWNrXCIpIHtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGh1bWFuUGxheWVyLnBsYXllckF0dGFjayhlLCBncmlkQXR0YWNrUmVuZGVyLCByZW5kZXJTdW5rZW4pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSBcInBsYWNlXCIpIHtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCByZW1vdmVIaWdobGlnaHQpO1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4ge1xuICAgICAgICAgIGhpZ2hsaWdodFBsYWNlbWVudChlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ3JpZFBsYWNlKTtcbiAgICAgIH1cblxuICAgICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChzcXVhcmUpO1xuXG4gICAgICBzcXVhcmVBcnIucHVzaChzcXVhcmUpO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gXCJwbGFjZVwiKSB7XG4gICAgICBjb250cm9scyhzZXRSb3RhdGlvbikuYWRkUm90YXRpb25CdXR0b25zKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGlnaGxpZ2h0UGxhY2VtZW50KGUpIHtcbiAgICBoaWdobGlnaHRBcnIgPSBbXTtcbiAgICBsZXQgb3BSb3RhdGlvbiA9IHJvdGF0aW9uID09PSBcInlcIiA/IFwieFwiIDogXCJ5XCI7XG4gICAgc3F1YXJlQXJyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgK2VsZW1lbnQuZGF0YXNldFtvcFJvdGF0aW9uXSA9PT0gK2UudGFyZ2V0LmRhdGFzZXRbb3BSb3RhdGlvbl0gJiZcbiAgICAgICAgK2VsZW1lbnQuZGF0YXNldFtyb3RhdGlvbl0gPj0gK2UudGFyZ2V0LmRhdGFzZXRbcm90YXRpb25dICYmXG4gICAgICAgICtlbGVtZW50LmRhdGFzZXRbcm90YXRpb25dIDwgK2UudGFyZ2V0LmRhdGFzZXRbcm90YXRpb25dICsgbGVuZ3RoICYmXG4gICAgICAgIGVsZW1lbnQuZGF0YXNldC5zdGF0dXMgIT09IFwicGxhY2VkXCIgJiZcbiAgICAgICAgZWxlbWVudC5kYXRhc2V0LnN0YXR1cyAhPT0gXCJibG9ja2VkXCIgJiZcbiAgICAgICAgZS50YXJnZXQuZGF0YXNldC5zdGF0dXMgIT09IFwicGxhY2VkXCJcbiAgICAgICkge1xuICAgICAgICBoaWdobGlnaHRBcnIucHVzaChlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoZS50YXJnZXQuZGF0YXNldC5zdGF0dXMgPT09IFwicGxhY2VkXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy9zaG93cyBpbGxlZ2FsIHBsYWNlbWVudFxuICAgIGlmIChcbiAgICAgIGhpZ2hsaWdodEFyci5sZW5ndGggPCBsZW5ndGggfHxcbiAgICAgIGUudGFyZ2V0LmRhdGFzZXQuc3RhdHVzID09PSBcInBsYWNlZFwiIHx8XG4gICAgICBoaWdobGlnaHRBcnIuc29tZSgoZWxlbWVudCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5zdGF0dXMgPT09IFwicGxhY2VkXCIgfHxcbiAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuc3RhdHVzID09PSBcImJsb2NrZWRcIlxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApIHtcbiAgICAgIGhpZ2hsaWdodEFyciA9IFtdO1xuICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy9pZiBtb3VzZSBvbiBsZWdhbCBwbGFjZW1lbnQgc3F1YXJlcywgbWFrZXMgdGhlbSBncmV5XG4gICAgaGlnaGxpZ2h0QXJyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmV5XCI7XG4gICAgICBlbGVtZW50LmRhdGFzZXQuc3RhdHVzID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiByZW1vdmVIaWdobGlnaHQoKSB7XG4gICAgc3F1YXJlQXJyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmRhdGFzZXQuc3RhdHVzID09PSBcInBsYWNlZFwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50LmRhdGFzZXQuc3RhdHVzID09PSBcImJsb2NrZWRcIikge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwieWVsbG93XCI7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgICAgIGVsZW1lbnQuZGF0YXNldC5zdGF0dXMgPSBcImZhbHNlXCI7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZ3JpZFBsYWNlKCkge1xuICAgIGlmIChoaWdobGlnaHRBcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvb3JkcyA9IFtdO1xuICAgIGhpZ2hsaWdodEFyci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgIGVsZW1lbnQuZGF0YXNldC5zdGF0dXMgPSBcInBsYWNlZFwiO1xuICAgICAgY29vcmRzLnB1c2goe1xuICAgICAgICB4OiBlbGVtZW50LmRhdGFzZXQueCxcbiAgICAgICAgeTogZWxlbWVudC5kYXRhc2V0LnksXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBodW1hblBsYXllci5wbGFjZVNoaXAgPSBjb29yZHM7XG5cbiAgICBjb25zb2xlLmxvZyhodW1hblBsYXllci5ib2FyZC5zaGlwQXJyYXkpO1xuICAgIGJsb2NrU3F1YXJlcygpO1xuICAgIGNoYW5nZUxlbmd0aCgpO1xuICAgIGZsb3cucGxhY2VQaGFzZVByb2dyZXNzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBncmlkQXR0YWNrUmVuZGVyKGhpdCwgZSkge1xuICAgIGlmIChoaXQgPT09IHRydWUpIHtcbiAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gXCLwn5S0XCI7XG4gICAgICBlLnRhcmdldC5kYXRhc2V0LnN0YXR1cyA9IFwiaGl0XCI7XG4gICAgfVxuICAgIGlmIChoaXQgPT09IGZhbHNlKSB7XG4gICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9IFwi4pqr77iPXCI7XG4gICAgICBlLnRhcmdldC5kYXRhc2V0LnN0YXR1cyA9IFwiYmxvY2tlZFwiO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclN1bmtlbihzaGlwKSB7XG4gICAgc2hpcC5jb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXR0YWNrLWdyaWRcIikuY2hpbGROb2Rlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgaWYgKCtzcXVhcmUuZGF0YXNldC54ID09PSArY29vcmQueCAmJiArc3F1YXJlLmRhdGFzZXQueSA9PT0gK2Nvb3JkLnkpIHtcbiAgICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZGY2YzZjXCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy9tYWtlcyBzcXVhcmVzIGFyb3VuZCBwbGFjZWQgc2hpcHMgYmxvY2tlZCB0byBwbGFjZW1lbnRcbiAgZnVuY3Rpb24gYmxvY2tTcXVhcmVzKCkge1xuICAgIHNxdWFyZUFyci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5kYXRhc2V0LnN0YXR1cyA9PT0gXCJwbGFjZWRcIikge1xuICAgICAgICBzcXVhcmVBcnIuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgICAgaWYgKHNxdWFyZS5kYXRhc2V0LnN0YXR1cyAhPT0gXCJwbGFjZWRcIikge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAoK3NxdWFyZS5kYXRhc2V0LnkgPT09ICtlbGVtZW50LmRhdGFzZXQueSArIDEgJiZcbiAgICAgICAgICAgICAgICArc3F1YXJlLmRhdGFzZXQueCA9PT0gK2VsZW1lbnQuZGF0YXNldC54KSB8fFxuICAgICAgICAgICAgICAoK3NxdWFyZS5kYXRhc2V0LnkgPT09ICtlbGVtZW50LmRhdGFzZXQueSAtIDEgJiZcbiAgICAgICAgICAgICAgICArc3F1YXJlLmRhdGFzZXQueCA9PT0gK2VsZW1lbnQuZGF0YXNldC54KSB8fFxuICAgICAgICAgICAgICAoK3NxdWFyZS5kYXRhc2V0LnkgPT09ICtlbGVtZW50LmRhdGFzZXQueSAmJlxuICAgICAgICAgICAgICAgICtzcXVhcmUuZGF0YXNldC54ID09PSArZWxlbWVudC5kYXRhc2V0LnggKyAxKSB8fFxuICAgICAgICAgICAgICAoK3NxdWFyZS5kYXRhc2V0LnkgPT09ICtlbGVtZW50LmRhdGFzZXQueSAmJlxuICAgICAgICAgICAgICAgICtzcXVhcmUuZGF0YXNldC54ID09PSArZWxlbWVudC5kYXRhc2V0LnggLSAxKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHNxdWFyZS5kYXRhc2V0LnN0YXR1cyA9IFwiYmxvY2tlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5U2hpcHMoKSB7XG4gICAgaHVtYW5QbGF5ZXIuYm9hcmQuc2hpcEFycmF5LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAuY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlzcGxheS1ncmlkXCIpLmNoaWxkTm9kZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgK3NxdWFyZS5kYXRhc2V0LnggPT09ICtjb29yZC54ICYmXG4gICAgICAgICAgICArc3F1YXJlLmRhdGFzZXQueSA9PT0gK2Nvb3JkLnlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMzMzMzMzNcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGFuZ2VMZW5ndGgoKSB7XG4gICAgbGVuZ3RoID0gYXZhaWxhYmxlTGVuZ3Roc1tjdXJyZW50TGVuZ3RoSW5kZXhdO1xuICAgIGN1cnJlbnRMZW5ndGhJbmRleCsrO1xuICB9XG4gIHJldHVybiB7IGNyZWF0ZUdyaWQsIGdyaWRDb250YWluZXIgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9