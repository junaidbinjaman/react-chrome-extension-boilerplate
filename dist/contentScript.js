/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./src/contentScript/contentScript.ts ***!
  \********************************************/

chrome.runtime.sendMessage('From the content script', (response) => {
    console.log(response);
});

/******/ })()
;
//# sourceMappingURL=contentScript.js.map