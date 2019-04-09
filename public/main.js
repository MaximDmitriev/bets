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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parts_mob_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/mob-menu */ \"./src/js/parts/mob-menu.js\");\n/* harmony import */ var _parts_fighter_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/fighter-list */ \"./src/js/parts/fighter-list.js\");\n/* harmony import */ var _parts_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/params */ \"./src/js/parts/params.js\");\n/* harmony import */ var _parts_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/popup */ \"./src/js/parts/popup.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n  'use strict';\r\n\r\n  Object(_parts_mob_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  Object(_parts_fighter_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  Object(_parts_popup__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n  const winBtn = document.querySelectorAll('.about__info'),\r\n        winBtnMob = document.querySelectorAll('.buttons__info'),\r\n        allBtns = [...winBtn, ...winBtnMob, document.querySelector('.about__status'), document.querySelector('.buttons__status')];\r\n\r\n  if (allBtns.length > 2) {\r\n    allBtns.forEach((item) => {\r\n      item.addEventListener('click', (event) => {\r\n        \r\n        for (let i = 0; i < allBtns.length; i++) {\r\n          if (event.target === allBtns[i] || event.target.parentElement === allBtns[i]) {\r\n            allBtns.forEach(item => item.classList.remove('btn-active'));\r\n            allBtns[i].classList.add('btn-active');\r\n          }\r\n        }\r\n      });\r\n    });\r\n  }\r\n\r\n  document.querySelectorAll('.params').forEach(item => Object(_parts_params__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(item));\r\n\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/parts/fighter-list.js":
/*!**************************************!*\
  !*** ./src/js/parts/fighter-list.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst figtherList = () => {\r\n  \r\n  const listBtn = document.querySelector('.fighters-list__btn'),\r\n        listItems = document.querySelectorAll('.fighter-item');\r\n\r\n  listItems.forEach(item => item.classList.add('show-list'));\r\n\r\n  if (listBtn) {\r\n    listBtn.addEventListener('click', () => {\r\n      if (listItems[0].classList.contains('show-list')) {\r\n        listItems.forEach(item => item.classList.remove('show-list'));\r\n      }\r\n      else {\r\n        listItems.forEach(item => item.classList.add('show-list'));\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (figtherList);\n\n//# sourceURL=webpack:///./src/js/parts/fighter-list.js?");

/***/ }),

/***/ "./src/js/parts/mob-menu.js":
/*!**********************************!*\
  !*** ./src/js/parts/mob-menu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst mobmenu = () => {\r\n  \r\n  const navLinks = document.querySelectorAll('.header__nav-link'),\r\n        navMenu = document.querySelectorAll('.header__nav-dropdown'),\r\n        mobBtn = document.querySelector('.header__menu-btn'),\r\n        mobMenu = document.querySelector('.mobile-menu'),\r\n        mobLink = [...mobMenu.children],\r\n        mobDropdown = document.querySelectorAll('.mobile-menu__dropdown');\r\n\r\n  let showMob = false;\r\n\r\n  const hideAll = () => {\r\n    navMenu.forEach(item => item.style.display = 'none');\r\n  }\r\n\r\n  mobBtn.addEventListener('click', () => {\r\n\r\n    if (!mobMenu.classList.contains('show')) {\r\n      mobMenu.classList.add('show');\r\n      mobMenu.classList.add('fadeIn');\r\n      mobMenu.classList.remove('fadeOut');\r\n      mobBtn.style.backgroundImage = 'url(\"./img/cancel.svg\")';\r\n      setTimeout(() => showMob = true, 1);\r\n    }\r\n\r\n  });\r\n\r\n  document.body.addEventListener('click', (event) => {\r\n\r\n    if (showMob && !event.target.classList.value.includes('mobile-menu')) {\r\n      mobMenu.classList.remove('fadeIn');\r\n      mobMenu.classList.add('fadeOut');\r\n      setTimeout(() => {\r\n        mobMenu.classList.remove('show');\r\n        showMob = false;\r\n      }, 500);      \r\n      mobBtn.style.backgroundImage = 'url(\"./img/menu.svg\")';\r\n    }\r\n  });\r\n\r\n  mobLink.forEach((item, i) => {\r\n    item.addEventListener('click', () => {\r\n\r\n      if (mobDropdown[i].style.display !== 'flex') {\r\n        mobDropdown.forEach(item => item.style.display = 'none');\r\n        mobDropdown[i].style.display = 'flex';\r\n      }\r\n      else {\r\n        mobDropdown[i].style.display = 'none';\r\n      }\r\n    });\r\n  });\r\n\r\n  hideAll();\r\n\r\n  navLinks.forEach((item, i) => {\r\n    item.addEventListener('mouseenter', () => {\r\n      if (navMenu[i].style.display === 'none') {\r\n        hideAll();\r\n        navMenu[i].style.display = 'flex';\r\n      }\r\n    });\r\n  });\r\n\r\n  navMenu.forEach((item) => {\r\n    item.addEventListener('mouseleave', () => {\r\n      item.style.display = 'none';\r\n    });\r\n  });\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (mobmenu);\n\n//# sourceURL=webpack:///./src/js/parts/mob-menu.js?");

/***/ }),

/***/ "./src/js/parts/params.js":
/*!********************************!*\
  !*** ./src/js/parts/params.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst onChangeParams = (elem) => {\r\n  const btn = elem.querySelector('.params__change'),\r\n        spans = elem.querySelectorAll('span'),\r\n        inputs = elem.querySelectorAll('input');\r\n\r\n  inputs.forEach(item => item.style.display = 'none');\r\n\r\n  if (btn) {\r\n    btn.addEventListener('click', () => {\r\n\r\n      if (inputs[0].style.display === 'none') {\r\n        btn.classList.remove('params__change_change');\r\n        btn.classList.add('params__change_done');\r\n  \r\n        spans.forEach(item => item.style.display = 'none');\r\n        inputs.forEach((item, i) => {\r\n          inputs[i].value = spans[i].textContent;\r\n          item.style.display = 'inline';\r\n        });\r\n      }\r\n      else {\r\n        btn.classList.remove('params__change_done');\r\n        btn.classList.add('params__change_change');\r\n  \r\n        spans.forEach((item, i) => {\r\n          spans[i].textContent = inputs[i].value;\r\n          item.style.display = 'inline';\r\n        });\r\n        inputs.forEach(item => item.style.display = 'none');\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (onChangeParams);\n\n//# sourceURL=webpack:///./src/js/parts/params.js?");

/***/ }),

/***/ "./src/js/parts/popup.js":
/*!*******************************!*\
  !*** ./src/js/parts/popup.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst popup = () => {\r\n  \r\n  const columnBtns = document.querySelectorAll('.matches-header'),\r\n        spanText = document.querySelectorAll('.wrap-btn__show'),\r\n        wrapper = document.querySelectorAll('.matches-column');\r\n\r\n\r\n  columnBtns.forEach((item, i) => {\r\n    const matches = wrapper[i].querySelectorAll('.tournament');\r\n\r\n    item.addEventListener('click', () => {\r\n      if (spanText[i].textContent === 'спрятать') {\r\n        \r\n        matches.forEach(item => item.style.display = 'none');\r\n        spanText[i].textContent = 'показать';\r\n        wrapper[i].querySelector('img').style.transform = 'rotate(0deg)';\r\n      }\r\n      else {\r\n        matches.forEach(item => item.style.display = 'block');\r\n        spanText[i].textContent = 'спрятать';\r\n        wrapper[i].querySelector('img').style.transform = 'rotate(180deg)';\r\n      }\r\n    });\r\n  });\r\n\r\n  columnBtns.forEach(item => item.click());\r\n\r\n  const popup = document.querySelector('.popup'),\r\n        rowItems = document.querySelectorAll('.match'),\r\n        closePopBtn = document.querySelector('#close');\r\n\r\n  let show = false;\r\n\r\n  rowItems.forEach((item) => {\r\n    item.addEventListener('click', () => {\r\n\r\n      if (!show) {\r\n        const target = item.parentNode.parentNode;\r\n        \r\n        for (let i = 0; i < wrapper.length; i++) {\r\n          const width = parseInt(getComputedStyle(wrapper[i]).width.slice(0, -2));\r\n          \r\n          if (target === wrapper[i] && popup && document.body.clientWidth > 767) {\r\n            \r\n            switch (i) {\r\n              case 0 :\r\n                popup.style.left = `${width}px`;\r\n                popup.style.display = 'flex';\r\n                break;\r\n              case 1 :\r\n                popup.style.left = `${width - 335}px`;\r\n                popup.style.display = 'flex';\r\n                break;\r\n            }\r\n          }\r\n        }\r\n        setTimeout(() => show = true, 1);\r\n      }      \r\n    });\r\n  });\r\n\r\n  document.body.addEventListener('click', (event) => {\r\n    const target = event.target.parentElement;\r\n\r\n    if (popup && \r\n        show && \r\n        !event.target.classList.value.includes('match') && \r\n        !target.classList.value.includes('match') &&\r\n        !target.classList.value.includes('popup') || \r\n        event.target === closePopBtn) {\r\n      popup.style.display = 'none';\r\n      show = false;\r\n    }\r\n  });\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (popup);\n\n//# sourceURL=webpack:///./src/js/parts/popup.js?");

/***/ })

/******/ });