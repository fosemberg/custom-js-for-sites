// ==UserScript==
// @name         practicum-yandex-ru-dark
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  minify-height-for-card-with-high-image
// @author       You
// @match        https://practicum.yandex.ru
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  function addCss(cssCode) {
    var styleElement = document.createElement("style");
    styleElement.type = "text/css";
    if (styleElement.styleSheet) {
      styleElement.styleSheet.cssText = cssCode;
    } else {
      styleElement.appendChild(document.createTextNode(cssCode));
    }
    document.getElementsByTagName("head")[0].appendChild(styleElement);
  }
  var css = `
* {
    background-color: black !important;
    color: gray !important;
}

button {
    border: 2px solid gray !important;
}

img[class^='info-block-module__side-image'] {
    position: relative;
    z-index: 9999;
}

[class^='audio-lines-module__lines'] {
    background-color: darkgray !important;
}

[class^='slider-module__track']:first-child {
  background: lightgray !important;
}
[class^='slider-module__track'] {
  background: darkgray !important;
}
`
  addCss(css)
})();
